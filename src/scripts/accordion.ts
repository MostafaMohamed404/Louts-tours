/**
 * Accordion Component
 * Handles FAQ accordion toggle functionality
 */

export function initAccordion(): void {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((btn) => {
    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling;
      const isOpen = !content?.classList.contains("hidden");

      // Close all
      document
        .querySelectorAll(".accordion-content")
        .forEach((c) => c.classList.add("hidden"));
      document
        .querySelectorAll(".accordion svg")
        .forEach((s) => s.classList.remove("rotate-180"));

      if (!isOpen) {
        content?.classList.remove("hidden");
        btn.querySelector("svg")?.classList.add("rotate-180");
      }
    });
  });
}

// Initialize on DOM ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAccordion);
} else {
  initAccordion();
}
