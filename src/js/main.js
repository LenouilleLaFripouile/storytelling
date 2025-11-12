import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const bgContainer = document.querySelector(".sys-bg");
  const bgImg = document.querySelector(".sys-bg-img");

  if (!bgContainer || !bgImg) return;

  // --- Zoom progressif pendant le scroll ---
  gsap.to(bgImg, {
    scale: 1.2, // zoom jusqu'à 120%
    ease: "none",
    scrollTrigger: {
      trigger: bgContainer,
      start: "top top",
      end: "bottom top", // zoom jusqu'à la fin de la section
      scrub: true,
    },
  });

  // --- Fixation fluide sur le bas ---
  ScrollTrigger.create({
    trigger: bgContainer,
    start: "bottom bottom",
    onEnter: () => {
      const rect = bgImg.getBoundingClientRect();
      const scrollY = window.scrollY;

      bgImg.style.width = rect.width + "px";
      bgImg.style.height = rect.height + "px";
      bgImg.style.left = rect.left + "px";
      bgImg.style.top = rect.top + "px";

      bgImg.getBoundingClientRect();

      bgImg.style.position = "fixed";

      requestAnimationFrame(() => {
        bgImg.style.top = "auto";
        bgImg.style.bottom = "0";
      });
    },
    onLeaveBack: () => {
      bgImg.style.position = "absolute";
      bgImg.style.top = "0";
      bgImg.style.left = "0";
      bgImg.style.width = "100%";
      bgImg.style.height = "100%";
      bgImg.style.transform = "scale(1)";
    },
    markers: false,
  });
});
