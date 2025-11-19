import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

document.querySelector("body").style.overflow = "hidden";

window.addEventListener("DOMContentLoaded", function () {
  const sysContainer = document.querySelector(".sys-container");
  const sysClickInitButton = document.querySelector(".sys-click-init button");
  const sysClickInit = document.querySelector(".sys-click-init");
  const sysClickVid = document.querySelector(".sys-init-vid");
  const sysClickSupp = document.querySelector(".sys-click-supp");
  const sysContainerSupp = document.querySelector(".sys-container-supp");
  const sysSupVid = document.querySelector(".sys-supp-vid");
  const sysErr = document.querySelector(".sys-supp-err");

  sysClickInitButton.addEventListener("click", function () {
    document.querySelector("body").style.overflow = "";
    sysClickInit.classList.add("hidden");
    sysClickVid.classList.remove("sys-init-vid-hidden");
  });

  const tlintro = gsap.timeline({
    scrollTrigger: {
      trigger: sysContainer,
      start: "top",
      end: "300%",
      scrub: true,
      pin: true,
      markers: true,
    },
  });

  if (sysClickVid.duration) {
    tlintro.to(sysClickVid, { currentTime: sysClickVid.duration }).call(() => {
      gsap.to(sysClickVid, {
        opacity: 0,
      });
      sysClickSupp.classList.remove("sys-click-supp-hidden");
      document.querySelector("body").style.overflow = "hidden";
    });
  }

  const sysClickSuppButton = document.querySelector(".sys-click-supp button");

  sysClickSuppButton.addEventListener("click", function () {
    sysClickSupp.classList.add("sys-click-supp-hidden");
    document.querySelector("body").style.overflow = "";
  });

  const tlsupp = gsap.timeline({
    scrollTrigger: {
      trigger: sysContainerSupp,
      start: "top",
      end: "300%",
      scrub: true,
      pin: true,
      markers: true,
    },
  });

  if (sysClickVid.duration) {
    console.log(sysSupVid.duration);
    tlsupp.to(sysSupVid, { currentTime: sysSupVid.duration });
  }

  // tlsupp.to(sysErr, {
  //   duration: 5,
  // });

  // tlsupp.to(sysSupVid, {
  //   opacity: 0,
  //   duration: 5,
  // });

  // gsap.to(sysSupVid, {
  //   opacity: 0,
  // });
  // sysErr.classList.remove("sys-supp-err-hidden");
});
