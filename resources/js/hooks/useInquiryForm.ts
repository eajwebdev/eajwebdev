import { useState, useEffect } from "react";
import { type InquiryForm, type SelectOption } from "@/types";
import { getOptionLabel } from "@/lib/utils";

const inquiryRecipient = import.meta.env.VITE_INQUIRY_EMAIL as string;

const initialForm: InquiryForm = {
  name: "",
  email: "",
  service: "",
  budget: "",
  customBudget: "",
  details: "",
};

export function useInquiryForm(
  serviceOptions: SelectOption[],
  budgetOptions: SelectOption[],
  onSuccess?: () => void
) {
  const [form, setForm] = useState<InquiryForm>(initialForm);
  const [openDropdown, setOpenDropdown] = useState<"service" | "budget" | null>(
    null
  );
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cooldown, setCooldown] = useState(false);
  const [submitFeedback, setSubmitFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const updateField = (field: keyof InquiryForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitAttempted(true);
    setSubmitFeedback(null);
    const requiresCustomBudget = form.budget === "custom";

    // Basic email format check (defense-in-depth on top of type="email")
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());

    if (
      !form.name.trim() ||
      !emailIsValid ||
      !form.service ||
      !form.budget ||
      (requiresCustomBudget && !form.customBudget.trim())
    ) {
      return;
    }

    const submitInquiry = async () => {
      try {
        setIsSubmitting(true);

        const serviceLabel = getOptionLabel(serviceOptions, form.service);
        const budgetLabel =
          form.budget === "custom"
            ? form.customBudget.trim()
            : getOptionLabel(budgetOptions, form.budget);

        const response = await fetch(
          `https://formsubmit.co/ajax/${inquiryRecipient}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              _subject: `[EA Website Inquiry] ${form.name} - ${serviceLabel}`,
              _honey: "",           // honeypot — bots fill this; real users don't
              _template: "table",   // clean email layout
              name: form.name,
              email: form.email,
              service: serviceLabel,
              budget: budgetLabel,
              details: form.details,
            }),
          },
        );

        if (!response.ok) {
          throw new Error("Unable to send inquiry.");
        }

        const result = (await response.json()) as { success?: string | boolean };
        if (!(result.success === true || result.success === "true")) {
          throw new Error("Unable to send inquiry.");
        }

        setSubmitFeedback({
          type: "success",
          message:
            "Inquiry sent successfully. We received your details and will reach out soon.",
        });
        setForm(initialForm);
        setSubmitAttempted(false);
        setOpenDropdown(null);
        // Prevent re-submission for 30 seconds after success
        setCooldown(true);
        setTimeout(() => setCooldown(false), 30_000);
        if (onSuccess) onSuccess();
      } catch {
        setSubmitFeedback({
          type: "error",
          message:
            `Send failed. Please try again in a moment or email us directly at ${import.meta.env.VITE_INQUIRY_EMAIL}.`,
        });
      } finally {
        setIsSubmitting(false);
      }
    };

    void submitInquiry();
  };

  useEffect(() => {
    if (!openDropdown) return;

    const closeDropdown = () => setOpenDropdown(null);
    window.addEventListener("click", closeDropdown);
    return () => window.removeEventListener("click", closeDropdown);
  }, [openDropdown]);

  const hasServiceError = submitAttempted && !form.service;
  const hasBudgetError = submitAttempted && !form.budget;
  const hasCustomBudgetError =
    submitAttempted && form.budget === "custom" && !form.customBudget.trim();

  return {
    form,
    setForm,
    openDropdown,
    setOpenDropdown,
    submitAttempted,
    isSubmitting,
    cooldown,
    submitFeedback,
    updateField,
    handleSubmit,
    hasServiceError,
    hasBudgetError,
    hasCustomBudgetError,
  };
}
