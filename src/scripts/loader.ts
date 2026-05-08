/**
 * Page Loader
 * Hides the loading spinner when page finishes loading
 */

export function hideLoader(): void {
  window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
      loader?.classList.add("hidden");
    }, 500);
  });
}

// Initialize immediately
hideLoader();
