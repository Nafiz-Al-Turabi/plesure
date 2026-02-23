(() => {
  const stickyButtons = document.querySelectorAll(".how-booking-sticky-btn");
  if (!stickyButtons.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const button = entry.target.__stickyButtonRef;
        if (!button) return;

        if (window.innerWidth < 1024) {
          if (entry.isIntersecting) {
            button.classList.add("sticky-active");
          } else {
            button.classList.remove("sticky-active");
          }
          return;
        }

        button.classList.remove("sticky-active");
      });
    },
    {
      root: null,
      threshold: 0,
    }
  );

  stickyButtons.forEach((button) => {
    const section = button.closest(".how-booking-section");
    if (!section) return;
    section.__stickyButtonRef = button;
    observer.observe(section);
  });
})();
