import { useState } from "react";
import { useSEO } from "./useSEO";

export function useWelcomePage() {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  useSEO({
    title: "EAJ Web Development Services | Custom Web Systems, ERP & Automation for Philippine Businesses",
    description: "EAJ Web Development Services (eajwebdev) builds custom web systems, HRIS portals, pharmacy management tools, laundry automation software, workflow automation, and operational dashboards for Philippine businesses and startups. Scale your operations with tailor-made software.",
    canonicalPath: "/",
  });

  return {
    isInquiryModalOpen,
    setIsInquiryModalOpen,
  };
}
