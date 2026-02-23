(() => {
  const MOBILE_MEDIA = window.matchMedia("(max-width: 1023px)");
  const RIPPLE_BUTTON_CLASS = "ripple-btn";
  const RIPPLE_WAVE_CLASS = "ripple-wave";

  document.addEventListener(
    "pointerdown",
    (event) => {
      if (!MOBILE_MEDIA.matches) return;

      const target = event.target.closest("button");
      if (!target || target.disabled) return;
      if (event.pointerType === "mouse" && event.button !== 0) return;

      target.classList.add(RIPPLE_BUTTON_CLASS);

      const rect = target.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const ripple = document.createElement("span");
      ripple.className = RIPPLE_WAVE_CLASS;
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      target.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove(), {
        once: true,
      });
    },
    { passive: true },
  );
})();
