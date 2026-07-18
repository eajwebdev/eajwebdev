import { useState } from "react";

export function useProjectCarousel(totalProjects: number) {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const prevProject = () =>
    setActiveProjectIndex((prev) =>
      prev === 0 ? totalProjects - 1 : prev - 1
    );

  const nextProject = () =>
    setActiveProjectIndex((prev) => (prev + 1) % totalProjects);

  return {
    activeProjectIndex,
    setActiveProjectIndex,
    prevProject,
    nextProject,
  };
}
