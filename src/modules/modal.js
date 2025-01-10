import { animate } from "./helpers";

export const modal = (modalSelector,modalMobileSelector,openBtnSelector) => {
  const modal = document.querySelector(modalSelector);
  const modalMobile = document.querySelector(modalMobileSelector);
  const openBtn = document.querySelectorAll(openBtnSelector);
  const popups = document.querySelectorAll(".popup");
  const closeBtn = modal.querySelector(".close");
  const closeBtnMobile = modalMobile.querySelector(".close");

  const showModal = () => {
    if (screen.width > 575) {
      animate({
        duration: 500,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          modal.style.opacity = progress;
          modal.style.display = "block";
          modal.style.visibility = " visible";
        },
      });
    } else {
      animate({
        duration: 500,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          modal.style.opacity = progress;
          modal.style.display = "block";
          modal.style.visibility = " visible";
        },
      });
    }
  };

  const hideModal = () => {
    if (screen.width > 575) {
      animate({
        duration: 500,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          modal.style.opacity = 1 - progress;

          if (+modal.style.opacity === 0) modal.style.display = "none";
        },
      });
    } else {
      animate({
        duration: 500,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          modal.style.opacity = 1 - progress;

          if (+modal.style.opacity === 0)
            modal.style.display = "none";
        },
      });
    }
  };

  popups.forEach((popup) => {
    popup.style.display = "none";
  });

  openBtn.forEach((open) => {
    open.addEventListener("click", () => {
      showModal();
    });
  });

  closeBtn.addEventListener("click", (e) => {
    hideModal();
  });
  closeBtnMobile.addEventListener("click", (e) => {
    hideModal();
  });
};
