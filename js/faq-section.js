document.querySelectorAll("[data-faq-root]").forEach((faqRoot) => {
  const items = Array.from(faqRoot.querySelectorAll("[data-faq-item]"));

  if (!items.length) return;

  const closeItem = (item) => {
    if (!item.classList.contains("is-open")) return;

    const answer = item.querySelector(".faq-answer");
    const toggle = item.querySelector(".faq-toggle");
    if (!answer || !toggle) return;

    answer.style.maxHeight = `${answer.scrollHeight}px`;
    requestAnimationFrame(() => {
      answer.style.maxHeight = "0px";
      answer.style.opacity = "0";
    });

    item.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  const openItem = (item) => {
    const answer = item.querySelector(".faq-answer");
    const toggle = item.querySelector(".faq-toggle");
    if (!answer || !toggle) return;

    item.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    answer.style.opacity = "1";
    answer.style.maxHeight = `${answer.scrollHeight}px`;
  };

  items.forEach((item, index) => {
    const answer = item.querySelector(".faq-answer");
    const toggle = item.querySelector(".faq-toggle");
    if (!answer || !toggle) return;

    if (item.classList.contains("is-open") || index === 0) {
      item.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      answer.style.maxHeight = `${answer.scrollHeight}px`;
      answer.style.opacity = "1";
    } else {
      toggle.setAttribute("aria-expanded", "false");
      answer.style.maxHeight = "0px";
      answer.style.opacity = "0";
    }

    toggle.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");

      items.forEach((otherItem) => closeItem(otherItem));
      if (!isOpen) openItem(item);
    });
  });

  window.addEventListener("resize", () => {
    items.forEach((item) => {
      if (!item.classList.contains("is-open")) return;

      const answer = item.querySelector(".faq-answer");
      if (!answer) return;
      answer.style.maxHeight = `${answer.scrollHeight}px`;
    });
  });
});
