/**
 * Statistics Counter Animation
 * Animates counter numbers when section comes into view
 */

export function initStatisticsCounter(): void {
  const section = document.getElementById("stats-section");
  if (!section) return;

  let hasRun = false;

  const runCounters = () => {
    if (hasRun) return;
    hasRun = true;

    const counters = section.querySelectorAll(".stat-number");

    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute("data-target") || "0", 10);
      const suffix = counter.getAttribute("data-suffix") || "+";
      const duration = 1800;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        current = Math.min(Math.round(increment * step), target);
        counter.textContent = current + suffix;

        if (step >= steps) {
          clearInterval(timer);
          counter.textContent = target + suffix;
        }
      }, duration / steps);
    });
  };

  // Use Intersection Observer to trigger when section is visible
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          runCounters();
          observer.unobserve(section);
        }
      });
    },
    { threshold: 0.5 },
  );

  observer.observe(section);
}

// Initialize on DOM ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initStatisticsCounter);
} else {
  initStatisticsCounter();
}
