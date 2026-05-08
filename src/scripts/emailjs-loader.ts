/**
 * Dynamic EmailJS loader
 * Loads EmailJS library dynamically and initializes it
 */

export function loadEmailJS(apiKey: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.onload = function () {
      (window as any).emailjs.init(apiKey);
      resolve();
    };
    script.onerror = reject;
    document.head.appendChild(script);
  });
}
