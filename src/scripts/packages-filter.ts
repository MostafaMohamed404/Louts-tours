/**
 * Packages Grid Filter
 * Handles filtering of Egypt packages by duration
 */

export function initPackagesFilter(): void {
  const filterBtns =
    document.querySelectorAll<HTMLButtonElement>(".filter-btn");
  const cards = document.querySelectorAll<HTMLElement>("[data-days]");
  const emptyState = document.getElementById("empty-state");

  function applyFilter(value: string): void {
    let visible = 0;

    cards.forEach((card) => {
      const days = Number(card.dataset.days);
      const match =
        value === "all" ||
        (value === "5" && days <= 5) ||
        (value === "7" && days === 7) ||
        (value === "8" && days >= 8);

      card.style.display = match ? "flex" : "none";
      if (match) visible++;
    });

    emptyState?.classList.toggle("hidden", visible > 0);

    filterBtns.forEach((btn) => {
      const active = btn.dataset.filter === value;
      btn.classList.toggle("bg-[#C6A75E]", active);
      btn.classList.toggle("text-white", active);
      btn.classList.toggle("border-[#C6A75E]", active);
      btn.classList.toggle("shadow-md", active);
      btn.classList.toggle("bg-white", !active);
      btn.classList.toggle("text-gray-600", !active);
      btn.classList.toggle("border-gray-200", !active);
    });
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () =>
      applyFilter(btn.dataset.filter ?? "all"),
    );
  });

  // Initialize with 'all' filter
  applyFilter("all");
}

// Initialize on DOM ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPackagesFilter);
} else {
  initPackagesFilter();
}
