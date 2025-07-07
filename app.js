const menuIcon = document.querySelector(".menuIcon");
const menuList = document.querySelector(".menuList");

if (menuIcon && menuList) {
  menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("show");
    menuIcon.classList.toggle("close");
  });

  // Smooth scroll for nav links
  menuList.querySelectorAll("a[href^='#']").forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
        menuList.classList.remove("show");
        menuIcon.classList.remove("close");
      }
    });
  });

  // Global event to close menuList on any interaction outside menu
  function closeMenuOnEvent(e) {
    if (!menuList.classList.contains("show")) return;
    // If click/touch is inside menuList or menuIcon, do nothing
    if (menuList.contains(e.target) || menuIcon.contains(e.target)) return;
    menuList.classList.remove("show");
    menuIcon.classList.remove("close");
  }
  // Listen for click, touchstart, scroll, keydown, resize
  ["click", "touchstart", "scroll", "keydown", "resize"].forEach((evt) => {
    window.addEventListener(evt, closeMenuOnEvent, true);
  });
}

// Scroll to top button show/hide logic (ensure DOM is loaded)
document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopButton = document.querySelector(".scrollToTop");
  if (!scrollToTopButton) return;
  // Show button after user scrolls past 50% of the page
  function handleScrollToTopBtn() {
    const scrollY = window.scrollY || window.pageYOffset;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight > 0 && scrollY / docHeight > 0.5) {
      scrollToTopButton.classList.add("show");
    } else {
      scrollToTopButton.classList.remove("show");
    }
  }
  window.addEventListener("scroll", handleScrollToTopBtn);
  scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  // Run once on load in case already scrolled
  handleScrollToTopBtn();

  // Gallery modal logic removed
});

// Typewriter animation for hero h1
document.addEventListener("DOMContentLoaded", function () {
  const typewriterName = document.getElementById("typewriter-name");
  if (!typewriterName) return;
  const text = "Enoch Yeboah";
  let i = 0;
  let isDeleting = false;
  let speed = 300;

  function type() {
    if (!isDeleting) {
      typewriterName.innerHTML = `<span style='color:#ffb366;'>${text.substring(
        0,
        i
      )}</span><span style='color:#fff;'>|</span>`;
      if (i < text.length) {
        i++;
        setTimeout(type, speed);
      } else {
        setTimeout(() => {
          isDeleting = true;
          type();
        }, 2200);
      }
    } else {
      typewriterName.innerHTML = `<span style='color:#ffb366;'>${text.substring(
        0,
        i
      )}</span><span style='color:#fff;'>|</span>`;
      if (i > 0) {
        i--;
        setTimeout(type, 60);
      } else {
        isDeleting = false;
        setTimeout(type, 800);
      }
    }
  }
  type();
});
