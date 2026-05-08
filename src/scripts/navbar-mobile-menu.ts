/**
 * Mobile Menu Handler
 * Handles opening/closing of mobile navigation menu
 */

export function openMenu(): void {
  const mobileMenu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("overlay");
  mobileMenu?.classList.remove("translate-x-full");
  overlay?.classList.remove("hidden");
}

export function closeMenu(): void {
  const mobileMenu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("overlay");
  mobileMenu?.classList.add("translate-x-full");
  overlay?.classList.add("hidden");
}

// Expose globally for HTML onclick handlers
(window as any).openMenu = openMenu;
(window as any).closeMenu = closeMenu;
