import { useEffect, useState } from "react";

export function useMobileTeamCarousel(teamLength: number) {
  const [mobileTeamIndex, setMobileTeamIndex] = useState(0);
  const [isMobileCardExpanded, setIsMobileCardExpanded] = useState(false);

  useEffect(() => {
    setMobileTeamIndex(0);
    setIsMobileCardExpanded(false);
  }, [teamLength]);

  const prevMobileTeamMember = () => {
    setIsMobileCardExpanded(false);
    setMobileTeamIndex((prev) => (prev === 0 ? teamLength - 1 : prev - 1));
  };

  const nextMobileTeamMember = () => {
    setIsMobileCardExpanded(false);
    setMobileTeamIndex((prev) => (prev + 1) % teamLength);
  };

  return {
    mobileTeamIndex,
    isMobileCardExpanded,
    setIsMobileCardExpanded,
    prevMobileTeamMember,
    nextMobileTeamMember,
    setMobileTeamIndex,
  };
}
