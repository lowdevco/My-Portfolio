import { useCallback } from "react";

/**
 * @returns {Function} 
 */
export const useSmoothScroll = () => {
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.warn(`Id: "${sectionId}" not found in the DOM.`);
    }
  }, []);

  return scrollToSection;
};
