/**
 * Desktop Swinging Scroll Rope Widget
 * Dynamically lowers the rope and updates percentage text as user scrolls down the page.
 */
document.addEventListener("DOMContentLoaded", () => {
  const ropeWidget = document.getElementById("scroll-rope-widget");
  const ropeLine = document.getElementById("scroll-rope-line");
  const swingBlock = document.getElementById("scroll-swing-block");
  const pctText = document.getElementById("scroll-pct-text");

  if (!ropeWidget || !ropeLine || !pctText) return;

  function updateScrollRope() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const scrollable = docHeight - winHeight;

    if (scrollable <= 0) return;

    const scrollFraction = Math.min(1, Math.max(0, scrollTop / scrollable));
    const percentage = Math.round(scrollFraction * 100);

    // Update Percentage Text inside the swinging block
    pctText.textContent = `${percentage}%`;

    // Max travel distance for the rope line so Thor's Hammer touches bottom of viewport at 100%
    const blockHeight = 64; // Total Mjolnir height (handle + head)
    const maxRopeHeight = winHeight - blockHeight - 16; // clearance from bottom viewport
    const currentRopeHeight = Math.max(0, scrollFraction * maxRopeHeight);

    ropeLine.style.height = `${currentRopeHeight}px`;
  }

  // Clicking the block smoothly scrolls back to top
  if (swingBlock) {
    swingBlock.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  window.addEventListener("scroll", updateScrollRope, { passive: true });
  window.addEventListener("resize", updateScrollRope, { passive: true });
  updateScrollRope();
});
