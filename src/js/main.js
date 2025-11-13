/* import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const bgContainer = document.querySelector(".sys-bg");
  const bgImg = document.querySelector(".sys-bg-img");
  const sysClickInitImg = document.querySelector(".sys-click-init-img");
  const bgOverlay = document.querySelector(".sys-bg-overlay");
  const button = document.querySelector(".sys-click-init button");
  const sysInitVid = document.querySelector(".sys-init-vid");
  const sysInitVidContainer = document.querySelector(".sys-init-vid-container");
  if (bgImg && bgOverlay) {
    // Zoom + assombrissement liés au scroll
    gsap.to(bgImg, {
      scale: 1.2,
      ease: "none",
      scrollTrigger: {
        trigger: bgContainer,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Ajout de l’assombrissement
    gsap.to(bgOverlay, {
      opacity: 0.5, // jusqu’à 50 % de noir
      ease: "none",
      scrollTrigger: {
        trigger: bgContainer,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }

  ScrollTrigger.create({
    trigger: bgContainer,
    start: "bottom bottom",
    onEnter: () => {
      const rect = bgImg.getBoundingClientRect();

      // garder les dimensions exactes pour un zoom fluide
      bgImg.style.width = rect.width + "px";
      bgImg.style.height = rect.height + "px";
      bgImg.style.left = rect.left + "px";
      bgImg.style.top = rect.top + "px";

      bgImg.getBoundingClientRect();

      // passer en fixed
      bgImg.style.position = "fixed";

      requestAnimationFrame(() => {
        bgImg.style.top = "auto";
        bgImg.style.bottom = "0";
      });

      // overlay reste visible et fixe
      bgOverlay.style.position = "fixed";
      bgOverlay.style.opacity = "0.5";
      bgOverlay.style.zIndex = "10";
    },
    onLeaveBack: () => {
      // reset image
      bgImg.style.position = "absolute";
      bgImg.style.top = "0";
      bgImg.style.left = "0";
      bgImg.style.width = "100%";
      bgImg.style.height = "100%";
      bgImg.style.transform = "scale(1)";

      // overlay disparaît
      bgOverlay.style.position = "absolute";
      bgOverlay.style.opacity = "0";
      bgOverlay.style.zIndex = "-50";
    },
    markers: false,
  });

  if (!sysClickInitImg) return;

  gsap.to(sysClickInitImg, {
    opacity: 1,
    scale: 1,
    ease: "none",
    scrollTrigger: {
      trigger: ".sys-click-init",
      start: "top",
      end: "bottom",
      scrub: true,
      pin: true,
      markers: false,
    },
  });
  if (!button || !sysClickInitImg || !sysInitVid) return;

  button.addEventListener("click", () => {
    // cacher l'image d'intro
    gsap.to(sysClickInitImg, {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        sysClickInitImg.style.display = "none";

        // afficher le container vidéo
        sysInitVid.style.display = "block";

        // attendre que le navigateur applique le display:block avant d'animer
        requestAnimationFrame(() => {
          gsap.fromTo(
            sysInitVid,
            { opacity: 0, scale: 0.95 },
            { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
          );

          // ScrollTrigger pour contrôler la vidéo
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sysInitVidContainer,
              start: "top top",
              end: "bottom top",
              scrub: true,
              pin: true,
              markers: true,
            },
          });

          if (sysInitVid.readyState >= 1) {
            tl.to(sysInitVid, {
              currentTime: sysInitVid.duration,
              ease: "none",
            });
          } else {
            sysInitVid.onloadedmetadata = () => {
              tl.to(sysInitVid, {
                currentTime: sysInitVid.duration,
                ease: "none",
              });
            };
          }
        });
      },
    });
  });
});
 */
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const sysContainer = document.querySelector(".sys-container");
const tlintro = gsap.timeline({
  scrollTrigger: {
    trigger: ".sys-container",
    start: "top",
    end: "300%",
    scrub: true,
    pin: true,
    markers: true,
  },
}); // Déclaration de la timeline, enregistrée dans une variable "tl"
tlintro.to(".sys-vid", {
  backgroundPosition: "-20px",
  duration: 5,
}); // Première animation ajoutée à la timeline
tlintro.to(".sys-vid", {
  x: "-20px",
  duration: 5,
}); // Première animation ajoutée à la timeline
tlintro.to(".sys-vid", {
  x: "-20px",
  duration: 5,
}); // Première animation ajoutée à la timeline
