import {
  ArrowRight,
  Check,
  ChevronDown,
  FileText,
  Layers,
  Mail,
  User,
  Wallet,
  X,
} from "lucide-react";
import { type InquiryModalProps, type SelectOption } from "@/types";
import { getOptionLabel } from "@/lib/utils";
import { useModalOpen } from "@/hooks/useModalOpen";
import { useInquiryForm } from "@/hooks/useInquiryForm";

const serviceOptions: SelectOption[] = [
  { value: "workflow-automation", label: "Workflow Automation" },
  { value: "erp", label: "Custom ERP Solutions" },
  { value: "sales-inventory", label: "Sales & Inventory System" },
  { value: "dashboard", label: "Operational Dashboard" },
  { value: "other", label: "Other" },
];

const budgetOptions: SelectOption[] = [
  { value: "below-10k", label: "Below Php 10,000" },
  { value: "10k-30k", label: "Php 10,000 - Php 30,000" },
  { value: "30k-60k", label: "Php 30,000 - Php 60,000" },
  { value: "above-100k", label: "Above Php 100,000" },
  { value: "custom", label: "Custom budget" },
];

export default function InquiryModal({ isOpen, onClose }: InquiryModalProps) {
  useModalOpen(isOpen, onClose);

  const {
    form,
    setForm,
    openDropdown,
    setOpenDropdown,
    isSubmitting,
    cooldown,
    submitFeedback,
    updateField,
    handleSubmit,
    hasServiceError,
    hasBudgetError,
    hasCustomBudgetError,
  } = useInquiryForm(serviceOptions, budgetOptions);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-end justify-center p-2 pt-4 sm:items-center sm:p-3">
      <button
        type="button"
        aria-label="Close inquiry modal"
        onClick={onClose}
        className="modal-backdrop-in absolute inset-0 bg-[#1f2454]/30 backdrop-blur-sm"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="inquiry-modal-title"
        className="modal-panel-in relative z-10 flex max-h-[calc(100dvh-0.75rem)] w-full max-w-[35rem] flex-col overflow-hidden rounded-2xl border border-[#d9d1de] bg-[linear-gradient(160deg,#f8f5ef_0%,#f4f0ea_52%,#eee8f2_100%)] shadow-2xl shadow-[#1f2454]/18 sm:max-h-[88vh] sm:rounded-xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-2.5 right-2.5 z-20 flex h-8 w-8 items-center justify-center rounded-full text-[#7b7693] transition-colors hover:bg-[#ece7f2] hover:text-[#1f2454] sm:h-7 sm:w-7"
        >
          <X size={15} />
        </button>

        <div className="border-b border-[#d9d1de] px-4 pt-5 pb-4 sm:px-5">
          <p className="mb-1.5 flex items-center gap-2 text-[10px] font-bold tracking-[0.18em] text-[#97215f] uppercase">
            <span className="h-2 w-2 rounded-full bg-[#97215f]" />
            EAJ Web Development Services
          </p>
          <h2
            id="inquiry-modal-title"
            className="text-lg leading-tight font-black text-[#1f2454] sm:text-2xl"
          >
            Tell Us About Your Project
          </h2>
          <p className="mt-1.5 text-xs text-[#5f5c7b] sm:text-sm">
            Share your goals and we&apos;ll respond within 24 hours.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="min-h-0 overflow-y-auto px-4 pt-4 pb-[max(env(safe-area-inset-bottom),1rem)] sm:px-5 sm:pb-5 [scrollbar-width:thin] [scrollbar-color:#b75b8a_#ece7f2] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-[#ece7f2] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-linear-to-b [&::-webkit-scrollbar-thumb]:from-[#c13d86] [&::-webkit-scrollbar-thumb]:to-[#97215f] [&::-webkit-scrollbar-thumb]:border [&::-webkit-scrollbar-thumb]:border-[#ece7f2]"
        >
          <div className="grid gap-3 md:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 flex items-center gap-2 text-[13px] font-bold text-[#1f2454] sm:text-sm">
                <User size={14} className="text-[#7b7693]" />
                Your Name
              </span>
              <input
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                required
                maxLength={100}
                placeholder="Juan dela Cruz"
                className="h-10 w-full rounded-xl border border-[#d9d1de] bg-white/90 px-3 text-xs text-[#1f2454] outline-none transition-all placeholder:text-[#9b97ad] focus:border-[#97215f] focus:ring-2 focus:ring-[#97215f]/20 sm:text-sm"
              />
            </label>

            <label className="block">
              <span className="mb-1.5 flex items-center gap-2 text-[13px] font-bold text-[#1f2454] sm:text-sm">
                <Mail size={14} className="text-[#7b7693]" />
                Email Address
              </span>
              <input
                type="email"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                required
                maxLength={254}
                placeholder="juan@email.com"
                className="h-10 w-full rounded-xl border border-[#d9d1de] bg-white/90 px-3 text-xs text-[#1f2454] outline-none transition-all placeholder:text-[#9b97ad] focus:border-[#97215f] focus:ring-2 focus:ring-[#97215f]/20 sm:text-sm"
              />
            </label>

            <label className="block">
              <span className="mb-1.5 flex items-center gap-2 text-[13px] font-bold text-[#1f2454] sm:text-sm">
                <Layers size={14} className="text-[#7b7693]" />
                Service Needed
              </span>
              <div className="relative">
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setOpenDropdown((prev) =>
                      prev === "service" ? null : "service",
                    );
                  }}
                    className={`flex h-10 w-full items-center justify-between rounded-xl border bg-white/90 px-3 text-xs outline-none transition-all sm:text-sm ${
                      hasServiceError
                        ? "border-[#c13d86] ring-2 ring-[#c13d86]/15"
                        : "border-[#d9d1de] hover:border-[#bcb2cc] focus:border-[#97215f] focus:ring-2 focus:ring-[#97215f]/20"
                  }`}
                >
                  <span
                    className={
                      form.service ? "text-[#1f2454]" : "text-[#9b97ad]"
                    }
                  >
                    {form.service
                      ? getOptionLabel(serviceOptions, form.service)
                      : "Select a service..."}
                  </span>
                  <ChevronDown
                    size={17}
                    className={`text-[#6f6a88] transition-transform ${
                      openDropdown === "service" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === "service" && (
                  <div className="absolute top-[calc(100%+0.35rem)] right-0 left-0 z-30 overflow-hidden rounded-xl border border-[#d9d1de] bg-white shadow-xl shadow-[#1f2454]/10">
                    <ul className="max-h-44 overflow-y-auto py-1 sm:max-h-52 [scrollbar-width:thin] [scrollbar-color:#b75b8a_#f3eef5] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-[#f3eef5] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#b25b86]">
                      {serviceOptions.map((option) => (
                        <li key={option.value}>
                          <button
                            type="button"
                            onClick={() => {
                              updateField("service", option.value);
                              setOpenDropdown(null);
                            }}
                            className="flex w-full items-center justify-between px-3.5 py-2.5 text-left text-xs text-[#1f2454] transition-colors hover:bg-[#f6f1f7] sm:text-sm"
                          >
                            {option.label}
                            {form.service === option.value && (
                              <Check size={15} className="text-[#97215f]" />
                            )}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              {hasServiceError && (
                <p className="mt-1 text-xs text-[#97215f]">
                  Please select a service.
                </p>
              )}
            </label>

            <label className="block">
              <span className="mb-2 flex items-center gap-2 text-[13px] font-bold text-[#1f2454] sm:text-sm">
                <Wallet size={14} className="text-[#7b7693]" />
                Estimated Budget
              </span>
              <div className="relative">
                {form.budget === "custom" ? (
                  <div
                    className={`flex h-10 w-full items-center rounded-xl border bg-white/90 px-3 text-xs outline-none transition-all sm:text-sm ${
                      hasCustomBudgetError
                        ? "border-[#c13d86] ring-2 ring-[#c13d86]/15"
                        : "border-[#d9d1de] focus-within:border-[#97215f] focus-within:ring-2 focus-within:ring-[#97215f]/20"
                    }`}
                  >
                    <input
                      value={form.customBudget}
                      onChange={(e) => updateField("customBudget", e.target.value)}
                      maxLength={100}
                      placeholder="Enter custom budget (e.g., Php 750,000)"
                      className="h-full flex-1 bg-transparent text-xs text-[#1f2454] outline-none placeholder:text-[#9b97ad] sm:text-sm"
                    />
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        setOpenDropdown((prev) =>
                          prev === "budget" ? null : "budget",
                        );
                      }}
                      className="flex h-full items-center pl-2"
                      aria-label="Change budget option"
                    >
                      <ChevronDown
                        size={17}
                        className={`text-[#6f6a88] transition-transform ${
                          openDropdown === "budget" ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      setOpenDropdown((prev) =>
                        prev === "budget" ? null : "budget",
                      );
                    }}
                    className={`flex h-10 w-full items-center justify-between rounded-xl border bg-white/90 px-3 text-xs outline-none transition-all sm:text-sm ${
                      hasBudgetError
                        ? "border-[#c13d86] ring-2 ring-[#c13d86]/15"
                        : "border-[#d9d1de] hover:border-[#bcb2cc] focus:border-[#97215f] focus:ring-2 focus:ring-[#97215f]/20"
                    }`}
                  >
                    <span
                      className={form.budget ? "text-[#1f2454]" : "text-[#9b97ad]"}
                    >
                      {form.budget
                        ? getOptionLabel(budgetOptions, form.budget)
                        : "Select a range..."}
                    </span>
                    <ChevronDown
                      size={17}
                      className={`text-[#6f6a88] transition-transform ${
                        openDropdown === "budget" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
                {openDropdown === "budget" && (
                  <div className="absolute top-[calc(100%+0.35rem)] right-0 left-0 z-30 overflow-hidden rounded-xl border border-[#d9d1de] bg-white shadow-xl shadow-[#1f2454]/10">
                    <ul className="max-h-44 overflow-y-auto py-1 sm:max-h-52 [scrollbar-width:thin] [scrollbar-color:#b75b8a_#f3eef5] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-[#f3eef5] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#b25b86]">
                      {budgetOptions.map((option) => (
                        <li key={option.value}>
                          <button
                            type="button"
                            onClick={() => {
                              setForm((prev) => ({
                                ...prev,
                                budget: option.value,
                                customBudget:
                                  option.value === "custom"
                                    ? prev.customBudget
                                    : "",
                              }));
                              setOpenDropdown(null);
                            }}
                            className="flex w-full items-center justify-between px-3.5 py-2.5 text-left text-xs text-[#1f2454] transition-colors hover:bg-[#f6f1f7] sm:text-sm"
                          >
                            {option.label}
                            {form.budget === option.value && (
                              <Check size={15} className="text-[#97215f]" />
                            )}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              {hasBudgetError && (
                <p className="mt-1 text-xs text-[#97215f]">
                  Please select a budget range.
                </p>
              )}
              {hasCustomBudgetError && (
                <p className="mt-1 text-xs text-[#97215f]">
                  Please enter your custom budget.
                </p>
              )}
            </label>
          </div>

          <label className="mt-3 block">
            <span className="mb-1.5 flex items-center gap-2 text-[13px] font-bold text-[#1f2454] sm:text-sm">
              <FileText size={14} className="text-[#7b7693]" />
              Project Details
            </span>
            <textarea
              value={form.details}
              onChange={(e) => updateField("details", e.target.value)}
              required
              rows={2}
              maxLength={2000}
              placeholder="Describe your project, goals, and timeline..."
              className="w-full resize-none rounded-xl border border-[#d9d1de] bg-white/90 px-3 py-2.5 text-xs text-[#1f2454] outline-none transition-all placeholder:text-[#9b97ad] focus:border-[#97215f] focus:ring-2 focus:ring-[#97215f]/20 sm:text-sm"
            />
          </label>

          <div className="mt-4 grid grid-cols-1 gap-2 sm:flex sm:items-center sm:gap-3">
            <button
              type="submit"
              disabled={isSubmitting || cooldown}
              className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#97215f] px-4 text-sm font-black text-white transition-all hover:bg-[#7f1b50] active:scale-[0.99] disabled:cursor-not-allowed disabled:bg-[#b44f84] sm:h-10 sm:flex-1"
            >
              {isSubmitting ? "Sending..." : cooldown ? "Sent ✓" : "Send Inquiry"}
              <ArrowRight size={17} />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="h-11 w-full rounded-xl border border-[#d9d1de] bg-white/85 px-4 text-center text-sm font-semibold text-[#6f6a88] transition-colors hover:border-[#bcb2cc] hover:text-[#1f2454] sm:h-10 sm:w-auto"
            >
              Cancel
            </button>
          </div>

          <p className="mt-4 text-center text-[11px] text-[#7b7693] sm:text-xs">
            Your details stay private. No spam, ever.
          </p>
          {submitFeedback && (
            <p
              className={`mt-2 text-center text-[11px] sm:text-xs ${
                submitFeedback.type === "success"
                  ? "text-[#1b7f52]"
                  : "text-[#97215f]"
              }`}
            >
              {submitFeedback.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
