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
  const sysErr = document.querySelector(".sys-supp-err");
  const sysSuppYves = document.querySelector(".sys-supp-yves");
  const sysSuppDeso = document.querySelector(".sys-supp-deso");
  const sysSuppSave = document.querySelector(".sys-supp-save");
  const sysFlash1 = document.querySelector(".sys-flash-1");
  const sysFlash2 = document.querySelector(".sys-flash-2");
  const sysFlash3 = document.querySelector(".sys-flash-3");
  const sysFlash4 = document.querySelector(".sys-flash-4");
  const sysFlash5 = document.querySelector(".sys-flash-5");
  const sysSupVid = document.querySelector(".sys-supp-vid");

  sysSupVid.addEventListener("loadeddata", (e) => {
    sysClickInitButton.addEventListener("click", function () {
      document.querySelector("body").style.overflow = "";
      sysClickInit.classList.add("hidden");
      sysClickVid.classList.remove("sys-init-vid-hidden");
    });

    const tlintro = gsap.timeline({
      scrollTrigger: {
        trigger: sysContainer,
        start: "top",
        end: "500%",
        scrub: true,
        pin: true,
      },
    });

    tlintro.to(sysClickVid, { currentTime: sysClickVid.duration }).call(() => {
      gsap.to(sysClickVid, {
        opacity: 0,
      });
      sysClickSupp.classList.remove("sys-click-supp-hidden");
      document.querySelector("body").style.overflow = "hidden";
    });

    const sysClickSuppButton = document.querySelector(".sys-click-supp button");

    sysClickSuppButton.addEventListener("click", function () {
      sysClickSupp.classList.add("sys-click-supp-hidden");
      document.querySelector("body").style.overflow = "";
    });

    const sysVid = this.document.querySelector(".sys-vid");
    const tlVid = gsap.timeline({
      scrollTrigger: {
        trigger: sysVid,
        start: "top",
        end: "+=500%",
        scrub: true,
        pin: true,
      },
    });

    tlVid.to(sysSupVid, { currentTime: sysSupVid.duration }).call(() => {
      gsap.to(sysSupVid, {
        opacity: 0,
      });
    });

    const tlsupp = gsap.timeline({
      scrollTrigger: {
        trigger: sysContainerSupp,
        start: "top",
        end: "+=500%",
        scrub: true,
        pin: true,
      },
    });

    tlsupp
      .to(sysErr, {
        opacity: 1,
      })
      .to(sysSuppYves, {
        opacity: 1,
      })
      .to(sysErr, {
        opacity: 0,
      })
      .to(
        sysSuppDeso,
        {
          opacity: 1,
        },
        "+=0.5"
      )
      .to(
        sysSuppSave,
        {
          opacity: 1,
        },
        "+=0.5"
      )
      .to(sysFlash1, {
        opacity: 1,
      })
      .to(sysFlash2, {
        opacity: 1,
      })
      .to(sysFlash3, {
        opacity: 1,
      })
      .to(sysFlash4, {
        opacity: 1,
      })
      .to(
        sysFlash5,
        {
          opacity: 1,
        },
        "+=0.5"
      );

    const sysUgoContainer = document.querySelector(".sys-ugo-container");
    const sysUgo = document.querySelector(".sys-ugo");
    const sysUgoRestore = document.querySelector(".sys-ugo-restore");
    const sysUgoRestoreClick = document.querySelector(".sys-ugo-restore-click");
    const sysUgoRestoreClickButton = document.querySelector(
      ".sys-ugo-restore-click button"
    );
    const sysUgoCard = document.querySelector(".sys-ugo-card");

    const tlugo = gsap.timeline({
      scrollTrigger: {
        trigger: sysUgoContainer,
        start: "top",
        end: "+=500%",
        scrub: true,
        pin: true,
      },
    });

    tlugo.to(
      sysUgo,
      {
        opacity: 1,
      },
      "+=0.5"
    );
    tlugo.to(
      sysUgoRestore,
      {
        opacity: 1,
      },
      "+=0.5"
    );
    tlugo.to(sysUgoRestoreClick, {
      opacity: 1,
    });

    sysUgoRestoreClickButton.addEventListener("click", function () {
      sysUgoRestoreClick.classList.add("sys-ugo-restore-click-hidden");
      sysUgoCard.classList.remove("sys-ugo-card-hidden");
    });
  });
});
