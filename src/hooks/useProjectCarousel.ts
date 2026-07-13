import { useState } from "react";

export function useProjectCarousel(totalProjects: number) {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const getProjectOffset = (index: number) => {
    let offset = index - activeProjectIndex;
    if (offset > totalProjects / 2) offset -= totalProjects;
    if (offset < -totalProjects / 2) offset += totalProjects;
    return offset;
  };

  const getProjectCarouselStyle = (offset: number) => {
    if (offset === 0) {
      return {
        transform:
          "translate(-50%, -50%) translateX(0%) rotateY(0deg) scale(1)",
        opacity: 1,
        zIndex: 30,
        filter: "saturate(1)",
      };
    }

    if (offset === -1) {
      return {
        transform:
          "translate(-50%, -50%) translateX(-65%) rotateY(24deg) scale(0.9)",
        opacity: 0.72,
        zIndex: 20,
        filter: "saturate(0.82)",
      };
    }

    if (offset === 1) {
      return {
        transform:
          "translate(-50%, -50%) translateX(65%) rotateY(-24deg) scale(0.9)",
        opacity: 0.72,
        zIndex: 20,
        filter: "saturate(0.82)",
      };
    }

    return {
      transform: `translate(-50%, -50%) translateX(${offset < 0 ? "-112%" : "112%"}) rotateY(${offset < 0 ? "32deg" : "-32deg"}) scale(0.82)`,
      opacity: 0,
      zIndex: 10,
      filter: "saturate(0.72)",
    };
  };

  const prevProject = () =>
    setActiveProjectIndex((prev) =>
      prev === 0 ? totalProjects - 1 : prev - 1
    );

  const nextProject = () =>
    setActiveProjectIndex((prev) => (prev + 1) % totalProjects);

  return {
    activeProjectIndex,
    setActiveProjectIndex,
    getProjectOffset,
    getProjectCarouselStyle,
    prevProject,
    nextProject,
  };
}
