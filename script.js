// 10 things list – you can keep adding to this array 💖
const loveThings = [
  "Your smile",
  "Your innocence",
  "How kind your heart is",
  "Your caring nature",
  "Your warm hugs that feel like home",
  "How you always know how to calm me down",
  "Your confidence",
  "Your little random messages that make my whole day",
  "Your laugh that I could listen to forever",
  "The way you support my dreams and believe in me",
  "The way you look at me like I'm your person",
];

const list = document.getElementById("love-list");

if (list) {
  loveThings.slice(0, 12).forEach((thing, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${thing}`;

    li.addEventListener("click", () => {
      li.style.background = "#e63946";
      li.style.color = "white";
      li.textContent = `❤️ ${thing}`;
    });

    list.appendChild(li);

    // stagger animation
    setTimeout(() => {
      li.classList.add("show");
    }, index * 90);
  });
}

// Smooth scroll for in-page section buttons (home page)
document.querySelectorAll(".scroll-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetSelector = btn.getAttribute("data-scroll");
    const target = document.querySelector(targetSelector);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Random reason highlight
const randomReasonBtn = document.getElementById("random-reason");

if (randomReasonBtn && list) {
  randomReasonBtn.addEventListener("click", () => {
    const items = Array.from(list.querySelectorAll("li"));
    if (!items.length) return;
    const target = items[Math.floor(Math.random() * items.length)];

    items.forEach((item) => item.classList.remove("reason-highlight"));
    target.classList.add("reason-highlight");
    target.scrollIntoView({ behavior: "smooth", block: "center" });

    setTimeout(() => {
      target.classList.remove("reason-highlight");
    }, 2500);
  });
}

// Simple photo gallery (using your own photos from photo_gallery/, excluding the hero photo)
const galleryItems = [
  { src: "photo_gallery/1000125758.jpg" },
  { src: "photo_gallery/AUDXN1mZf9oVqonJ.jpg" },
  { src: "photo_gallery/IMG-20251208-WA0044.jpg" },
  { src: "photo_gallery/IMG-20251208-WA0054.jpg" },
  { src: "photo_gallery/IMG-20251208-WA0071.jpg" },
  { src: "photo_gallery/IMG-20251208-WA0089 (1).jpg" },
  { src: "photo_gallery/IMG-20251210-WA0002.jpg" },
  { src: "photo_gallery/IMG-20251213-WA0058.jpg" },
  { src: "photo_gallery/IMG-20251225-WA0085.jpg" },
  { src: "photo_gallery/IMG-20251225-WA0122.jpg" },
  { src: "photo_gallery/IMG-20251225-WA0248.jpg" },
  { src: "photo_gallery/IMG-20251225-WA0262.jpg" },
  { src: "photo_gallery/IMG-20251227-WA0058.jpg" },
  { src: "photo_gallery/IMG-20251227-WA0083.jpg" },
  { src: "photo_gallery/IMG20251208105108.jpg" },
  { src: "photo_gallery/IMG20251225001211.jpg" },
  { src: "photo_gallery/IMG20260103134926.jpg" },
  { src: "photo_gallery/Snapchat-1249755033.jpg" },
  { src: "photo_gallery/Snapchat-1903470079.jpg" },
  { src: "photo_gallery/Snapchat-1920905185.jpg" },
  { src: "photo_gallery/Snapchat-315463462.jpg" },
  { src: "photo_gallery/Snapchat-33852191.jpg" },
];

const galleryGrid = document.getElementById("gallery-grid");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxClose = document.getElementById("lightbox-close");

if (galleryGrid && lightbox && lightboxImage && lightboxCaption && lightboxClose) {
  const renderGallery = () => {
    galleryGrid.innerHTML = "";

    galleryItems.forEach((item, index) => {
      const wrapper = document.createElement("div");
      wrapper.className = "gallery-item";

      const img = document.createElement("img");
      img.src = item.src;
      img.alt = "Our memory";
      wrapper.appendChild(img);
      galleryGrid.appendChild(wrapper);

      // simple reveal animation
      setTimeout(() => {
        wrapper.classList.add("show");
      }, 120 * index);

      wrapper.addEventListener("click", () => {
        lightboxImage.src = item.src;
        lightboxCaption.textContent = "";
        lightbox.classList.remove("hidden");
      });
    });
  };

  renderGallery();

  const closeLightbox = () => {
    lightbox.classList.add("hidden");
  };

  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lightbox.classList.contains("hidden")) {
      closeLightbox();
    }
  });
}

// Bucket list (bucket-list page)
const bucketRoot = document.getElementById("bucket-root");

if (bucketRoot) {
  const bucketListItems = [
    {
      group: "trips",
      title: "Watch the sunset on a beach together",
      description: "Just you, me, soft waves and a sky turning pink and gold.",
      completed: false,
    },
    {
      group: "trips",
      title: "Take a spontaneous weekend trip",
      description: "Pick a place on the map and just go.",
      completed: false,
    },
    {
      group: "trips",
      title: "See the stars from someplace really dark",
      description: "Lie down, hold hands and try to count them until we give up.",
      completed: false,
    },
    {
      group: "food",
      title: "Cook a full dinner together",
      description: "From chopping to dessert, with music and bad dancing in the kitchen.",
      completed: false,
    },
    {
      group: "food",
      title: "Bake something sweet at 1 AM",
      description: "Because cravings, laughter and midnight stories.",
      completed: false,
    },
    {
      group: "everyday",
      title: "Have a slow Sunday with no plans",
      description: "Sleep in, cuddle, talk, repeat.",
      completed: false,
    },
    {
      group: "everyday",
      title: "Get caught in the rain together",
      description: "And not rush for cover straight away.",
      completed: false,
    },
    {
      group: "everyday",
      title: "Pick a silly show to binge and finish it",
      description: "So we have more inside jokes to quote at each other.",
      completed: false,
    },
  ];

  const progressEl = document.getElementById("bucket-progress");

  const renderBucketList = () => {
    // Render cards into each group container
    const containers = document.querySelectorAll("[data-bucket-group]");
    containers.forEach((container) => {
      const group = container.getAttribute("data-bucket-group");
      container.innerHTML = "";

      bucketListItems
        .filter((item) => item.group === group)
        .forEach((item, index) => {
          const card = document.createElement("article");
          card.className = "bucket-card";
          if (item.completed) {
            card.classList.add("bucket-completed");
          }

          const title = document.createElement("h3");
          title.textContent = item.title;

          if (item.description) {
            const desc = document.createElement("p");
            desc.textContent = item.description;
            card.appendChild(title);
            card.appendChild(desc);
          } else {
            card.appendChild(title);
          }

          card.addEventListener("click", () => {
            item.completed = !item.completed;
            renderBucketList();
          });

          container.appendChild(card);
        });
    });

    const total = bucketListItems.length;
    const done = bucketListItems.filter((i) => i.completed).length;
    if (progressEl) {
      if (done === 0) {
        progressEl.textContent =
          "We haven’t ticked any of these off yet… but I can’t wait to start with you.";
      } else if (done === total) {
        progressEl.textContent =
          "We’ve lived every single one of these dreams together – time to write some new ones.";
      } else {
        progressEl.textContent = `${done} of ${total} little dreams already lived with you.`;
      }
    }
  };

  renderBucketList();
}

// Promises page
const promisesRoot = document.getElementById("promises-root");

if (promisesRoot) {
  const promises = [
    {
      group: "everyday",
      short: "I promise to keep choosing you, even on the hard days.",
      long: "Not just when everything is easy and perfect, but when we’re tired, stressed or quiet – I still want you to know I’m on your side.",
    },
    {
      group: "everyday",
      short: "I promise to listen, not just hear.",
      long: "To really pay attention to what you feel and what you mean, even when the words are few or hard to say.",
    },
    {
      group: "everyday",
      short: "I promise to make you feel loved in the little ways.",
      long: "Small messages, silly jokes, random hugs, remembering the tiny details that matter to you.",
    },
    {
      group: "future",
      short: "I promise to build a home with you that feels safe and warm.",
      long: "A place filled with laughter, honesty, comfort and the freedom to be completely ourselves.",
    },
    {
      group: "future",
      short: "I promise to stand next to you in every season of life.",
      long: "Through our best days and our messiest ones, I want to hold your hand and face all of it together.",
    },
    {
      group: "future",
      short: "I promise to keep dreaming with you.",
      long: "To make plans, change plans, chase new dreams and let our story grow in ways we haven’t even imagined yet.",
    },
  ];

  const renderPromises = () => {
    const containers = document.querySelectorAll("[data-promise-group]");
    containers.forEach((container) => {
      const group = container.getAttribute("data-promise-group");
      container.innerHTML = "";

      promises
        .filter((p) => p.group === group)
        .forEach((p) => {
          const card = document.createElement("article");
          card.className = "promise-card";

          const title = document.createElement("h3");
          title.textContent = "Promise";

          const short = document.createElement("p");
          short.className = "promise-short";
          short.textContent = p.short;

          const long = document.createElement("p");
          long.className = "promise-long";
          long.textContent = p.long;

          card.appendChild(title);
          card.appendChild(short);
          card.appendChild(long);

          card.addEventListener("click", () => {
            card.classList.toggle("expanded");
          });

          container.appendChild(card);
        });
    });
  };

  renderPromises();

  const shuffleBtn = document.getElementById("shuffle-promise");
  if (shuffleBtn) {
    shuffleBtn.addEventListener("click", () => {
      const allCards = Array.from(
        promisesRoot.querySelectorAll(".promise-card")
      );
      if (!allCards.length) return;
      const randomCard =
        allCards[Math.floor(Math.random() * allCards.length)];

      allCards.forEach((c) => c.classList.remove("promise-highlight"));
      randomCard.classList.add("promise-highlight", "expanded");
      randomCard.scrollIntoView({ behavior: "smooth", block: "center" });

      setTimeout(() => {
        randomCard.classList.remove("promise-highlight");
      }, 2500);
    });
  }
}

// Milestone countdowns on home page
const engagementContainer = document.getElementById("engagement-countdown");
const weddingContainer = document.getElementById("wedding-countdown");
const milestoneBanner = document.getElementById("milestone-banner");

const setupCountdown = (targetDateString, container, label) => {
  if (!container) return;

  const numbers = {
    days: container.querySelector('.countdown-number[data-unit="days"]'),
    hours: container.querySelector('.countdown-number[data-unit="hours"]'),
    minutes: container.querySelector('.countdown-number[data-unit="minutes"]'),
    seconds: container.querySelector('.countdown-number[data-unit="seconds"]'),
  };

  const target = new Date(targetDateString);
  if (Number.isNaN(target.getTime())) return;

  const update = () => {
    const now = new Date().getTime();
    const distance = target.getTime() - now;

    if (distance <= 0) {
      const nowDate = new Date();
      const targetMidnight = new Date(
        target.getFullYear(),
        target.getMonth(),
        target.getDate()
      ).getTime();
      const nowMidnight = new Date(
        nowDate.getFullYear(),
        nowDate.getMonth(),
        nowDate.getDate()
      ).getTime();
      const daysSince = Math.floor((nowMidnight - targetMidnight) / (1000 * 60 * 60 * 24));

      if (daysSince === 0) {
        // It is the milestone day
        Object.values(numbers).forEach((el) => {
          if (el) el.textContent = "0";
        });
        const note = container.querySelector(".milestone-note");
        if (note) {
          note.textContent = `Today is our ${label} – I’m so grateful I get to share it with you.`;
        }
        clearInterval(intervalId);
      } else {
        // Milestone has passed – show days since
        Object.values(numbers).forEach((el) => {
          if (el) el.textContent = "-";
        });
        const note = container.querySelector(".milestone-note");
        if (note) {
          note.textContent = `${daysSince} days since this beautiful ${label.toLowerCase()}.`;
        }
        clearInterval(intervalId);
      }
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (numbers.days) numbers.days.textContent = days.toString();
    if (numbers.hours) numbers.hours.textContent = hours.toString().padStart(2, "0");
    if (numbers.minutes) numbers.minutes.textContent = minutes
      .toString()
      .padStart(2, "0");
    if (numbers.seconds) numbers.seconds.textContent = seconds
      .toString()
      .padStart(2, "0");
  };

  // initial state
  update();
  const intervalId = setInterval(update, 1000);

  // small reveal animation class
  container.classList.add("show");
};

if (engagementContainer || weddingContainer) {
  const today = new Date();
  const isSameDate = (a, b) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();

  const engagementDate = new Date("2026-04-26T00:00:00");
  const weddingDate = new Date("2027-01-03T00:00:00");

  setupCountdown("2026-04-26T00:00:00", engagementContainer, "engagement day");
  setupCountdown("2027-01-03T00:00:00", weddingContainer, "wedding day");

  // Simple celebratory banner / hearts on special days
  const isEngagementToday = isSameDate(today, engagementDate);
  const isWeddingToday = isSameDate(today, weddingDate);

  if (milestoneBanner && (isEngagementToday || isWeddingToday)) {
    milestoneBanner.classList.add("show");
    if (isEngagementToday && isWeddingToday) {
      milestoneBanner.textContent =
        "Today we’re celebrating both our engagement and our wedding day – what a beautiful life with you.";
    } else if (isEngagementToday) {
      milestoneBanner.textContent =
        "Today is our engagement day – the day our forever promise became real.";
    } else if (isWeddingToday) {
      milestoneBanner.textContent =
        "Today is our wedding day – the start of our married life together.";
    }

    const launchHearts = () => {
      const emojis = ["❤️", "💕", "💖", "💘", "💝"];
      for (let i = 0; i < 10; i += 1) {
        const span = document.createElement("span");
        span.className = "celebration-heart";
        span.textContent = emojis[i % emojis.length];
        span.style.left = `${10 + Math.random() * 80}vw`;
        span.style.bottom = `${5 + Math.random() * 15}vh`;
        document.body.appendChild(span);
        setTimeout(() => span.remove(), 2600);
      }
    };

    launchHearts();
  }
}

// Entry gate behaviour (home page)
const gateEl = document.getElementById("valentine-gate");
const gateYes = document.getElementById("gate-yes");
const gateNo = document.getElementById("gate-no");

if (gateEl && gateYes && gateNo) {
  gateYes.addEventListener("click", () => {
    gateEl.classList.add("hidden");
  });

  const dodge = () => {
    const maxShift = 120;
    const x = Math.floor(Math.random() * (maxShift * 2) - maxShift);
    const y = Math.floor(Math.random() * (maxShift * 2) - maxShift);
    gateNo.style.transform = `translate(${x}px, ${y}px)`;
  };

  gateNo.addEventListener("mouseenter", dodge);
  gateNo.addEventListener("mouseover", dodge);
  gateNo.addEventListener("focus", dodge);
}

// Love letter typewriter (only on love-letter page)
const letterTextEl = document.getElementById("love-letter-text");
const letterStartBtn = document.getElementById("love-letter-start");

let letterLines = null;

if (letterTextEl && letterStartBtn) {
  letterLines = [
    "My dearest Melisha,",
    "",
    "On Nov 15, 2025 I had no idea I was about to meet my soulmate.",
    "From the day we met I knew you were the one for me.",
    "Things escalated between us so fast and it always felt like it was meant to be.",
    "I always thought if any woman would love me and guess what?",
    "God had the best woman planned to be my soulmate.",
    "I had no idea I would crave a woman so much.",
    "I constantly need your hugs and kisses now.",
    "I can't imagine a life without them.",
    "",
    "I know I tell you that you mean a lot to me but sometimes the words feel too small for everything you are.",
    "You have turned ordinary days into memories I replay in my head whenever I miss you.",
    "",
    "With you even silly jokes and quiet moments feel like they belong in a storybook.",
    "I love the way you care, the way you listen, and the way you make me feel like I’m exactly where I’m supposed to be when I’m with you.",
    "",
    "Thank you for choosing me on my good days and my not so good ones.",
    "I don’t know what the future looks like in detail, but I know one thing for sure,",
    "I want you in it in every version of tomorrow I can imagine, in every plan, in every quiet evening and every adventure.",
    "",
    "I'll keep you happy always and try my best to make you smile and I'll never miss an opportunity ti kiss you.",
    "You are basically going to be showered by kisses.",
    "And if you ever feel annoyed by them, too baddddd, you signed up for this!",
    "I love you baccha!",
    "",
    "Always yours,",
    "Rohan",
  ];
}

if (letterTextEl && letterStartBtn && letterLines) {
  const fullLetter = letterLines.join("\n");

  const typeLetter = (text, element, speed = 35) => {
    element.textContent = "";
    let index = 0;

    const interval = setInterval(() => {
      element.textContent += text.charAt(index);
      index += 1;

      if (index >= text.length) {
        clearInterval(interval);
        letterStartBtn.disabled = false;
        letterStartBtn.textContent = "Read it again";
      }
    }, speed);

    return interval;
  };

  let currentInterval = null;

  letterStartBtn.addEventListener("click", () => {
    if (currentInterval) {
      clearInterval(currentInterval);
    }
    letterStartBtn.disabled = true;
    letterStartBtn.textContent = "Sharing my heart...";
    currentInterval = typeLetter(fullLetter, letterTextEl);
  });
}


// Quiz page behaviour
const quizRoot = document.getElementById("quiz-root");

if (quizRoot) {
  const quizMessageBtn = document.getElementById("quiz-message-btn");
  const quizMessage = document.getElementById("quiz-message");

  if (quizMessageBtn && quizMessage) {
    const compliments = [
      "You are my favourite answer to every what-if.",
      "I still can’t believe I get to call you mine.",
      "No matter where we go, you will always be my safest place.",
    ];

    quizMessageBtn.addEventListener("click", () => {
      if (quizMessage.classList.contains("hidden")) {
        const extraLine = compliments[Math.floor(Math.random() * compliments.length)];
        const extraP = document.createElement("p");
        extraP.textContent = extraLine;
        quizMessage.appendChild(extraP);
        quizMessage.classList.remove("hidden");
        quizMessageBtn.textContent = "Read it again";
        quizMessage.scrollIntoView({ behavior: "smooth", block: "center" });
      } else {
        quizMessage.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  }
}

// Keyboard Easter egg (e.g. press M then R)
const secretNote = document.getElementById("secret-note");

if (secretNote) {
  let lastKeyTime = 0;
  let sequence = "";

  document.addEventListener("keydown", (e) => {
    const now = Date.now();
    if (now - lastKeyTime > 1500) {
      sequence = "";
    }
    lastKeyTime = now;

    sequence += e.key.toLowerCase();

    if (sequence.endsWith("mr")) {
      secretNote.classList.remove("hidden");
      setTimeout(() => {
        secretNote.classList.add("hidden");
      }, 6000);
      sequence = "";
    }
  });
}
