(() => {
  const MOBILE_LIMIT = 8;
  const profiles = [
    {
      id: 1,
      name: "Clara Bennett",
      bio: "This is not a bio. It's a context cue.",
      image: "/assets/images/curated/p1.jpg",
    },
    {
      id: 2,
      name: "Elena Moreau",
      bio: "Drawn to confidence, elegance, and quiet intensity.",
      image: "/assets/images/curated/p2.jpg",
    },
    {
      id: 3,
      name: "Sofia Laurent",
      bio: "I enjoy reflective moments and considered conversation.",
      image: "/assets/images/curated/p3.jpg",
    },
    {
      id: 4,
      name: "Amélie Roche",
      bio: "Natural ease, warm energy, and unforced connection.",
      image: "/assets/images/curated/p4.jpg",
    },
    {
      id: 5,
      name: "Isabella Cruz",
      bio: "Warm energy and natural connection.",
      image: "/assets/images/curated/p5.jpg",
    },
    {
      id: 6,
      name: "Lucia Ferri",
      bio: "Warm energy and natural connection.",
      image: "/assets/images/curated/p6.jpg",
    },
    {
      id: 7,
      name: "Valentina Ríos",
      bio: "I appreciate intimacy, softness, and presence.",
      image: "/assets/images/curated/p7.png",
    },
    {
      id: 8,
      name: "Leda Forsila",
      bio: "I appreciate intimacy, softness, and presence.",
      image: "/assets/images/curated/p8.jpg",
    },
    {
      id: 9,
      name: "Eva Lindström",
      bio: "Quiet confidence and meaningful atmosphere.",
      image: "/assets/images/curated/p9.jpg",
    },
    {
      id: 10,
      name: "Nina Holm",
      bio: "I'm drawn to simplicity and genuine attention.",
      image: "/assets/images/curated/p10.jpg",
    },
    {
      id: 11,
      name: "Alex Medila",
      bio: "I'm drawn to simplicity and genuine attention.",
      image: "/assets/images/curated/p11.jpg",
    },
    {
      id: 12,
      name: "Camila Ortega",
      bio: "Moments feel best when they're unhurried.",
      image: "/assets/images/curated/p12.jpg",
    },
    {
      id: 13,
      name: "Camila Ortega",
      bio: "Moments feel best when they're unhurried.",
      image: "/assets/images/curated/p13.jpg",
    },
    {
      id: 14,
      name: "Alex Medila",
      bio: "I'm drawn to simplicity and genuine attention.",
      image: "/assets/images/curated/p14.png",
    },
    {
      id: 15,
      name: "Nina Holm",
      bio: "I'm drawn to simplicity and genuine attention.",
      image: "/assets/images/curated/p15.jpg",
    },
    {
      id: 16,
      name: "Eva Lindström",
      bio: "Quiet confidence and meaningful atmosphere.",
      image: "/assets/images/curated/p16.jpg",
    },
  ];

  const cardGrid = document.getElementById("cardGrid");
  const mobileButtonWrap = document.getElementById("mobileStickyBtn");
  const showMoreButton = mobileButtonWrap?.querySelector("button");

  if (!cardGrid || !mobileButtonWrap || !showMoreButton) return;

  const cardsMarkup = profiles
    .map(
      (profile, index) => `
        <div class="curated-profile-card relative rounded-[18.15px] overflow-hidden" data-card-index="${index}">
          <img
            src="${profile.image}"
            alt="${profile.name}"
            class="w-full h-[210px] lg:h-[455px] object-cover"
          />
          <div class="absolute bottom-0 w-full lg:h-[156.8px] overflow-hidden">
            <div
              class="absolute inset-0 backdrop-blur-[3px] [mask-image:linear-gradient(to_top,white_60%,transparent)]"
            ></div>

            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
            ></div>

            <div
              class="relative flex flex-col justify-end h-full py-3 px-3 lg:px-[14.52px] text-white"
            >
              <h3
                class="text-center lg:text-left text-sm lg:text-[21px] font-medium lg:mb-[9.81px] leading-[110%]"
              >
                ${profile.name}
              </h3>

              <p class="hidden lg:block text-[15px] leading-[110%] tracking-[-0.305px]">${profile.bio}</p>
            </div>
          </div>
        </div>
      `,
    )
    .join("");

  cardGrid.innerHTML = cardsMarkup;

  const cards = Array.from(cardGrid.querySelectorAll(".curated-profile-card"));
  let isExpanded = false;

  const applyMobileCardLimit = () => {
    const isMobile = window.innerWidth < 1024;

    cards.forEach((card, index) => {
      const shouldHide = isMobile && !isExpanded && index >= MOBILE_LIMIT;
      card.style.display = shouldHide ? "none" : "";
    });

    if (isMobile && !isExpanded) {
      mobileButtonWrap.style.display = "";
    } else {
      mobileButtonWrap.style.display = "none";
    }
  };

  showMoreButton.addEventListener("click", () => {
    isExpanded = true;
    applyMobileCardLimit();
  });

  applyMobileCardLimit();
  window.addEventListener("resize", applyMobileCardLimit);
})();
