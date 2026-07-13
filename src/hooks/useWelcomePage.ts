import { useState } from "react";
import { useSEO } from "./useSEO";

export function useWelcomePage() {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  useSEO({
    title: "EA Software Solutions - Modern Tech Systems for Filipino Founders",
    description: "Custom ERP systems, workflow automation, and dashboard software custom-built for Filipino founders and businesses. Reclaim your time and scale your business.",
    canonicalPath: "/",
  });

  return {
    isInquiryModalOpen,
    setIsInquiryModalOpen,
  };
}
