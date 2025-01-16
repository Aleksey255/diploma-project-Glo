import { animate } from "./helpers";

export const modalFormula = () => {
  const formula = document.getElementById("formula");

  const showModal = (popup) => {
    const rectPopup = popup.getBoundingClientRect();

    if (rectPopup.top < 0) {
      popup.style.setProperty("--before-transform", "rotate(180deg)");

      popup.style.bottom = `-${rectPopup.height + 20}` + "px";
    } else {
      popup.style.setProperty("--before-transform", "rotate(360deg)");

      popup.style.bottom = "90px";
    }

    if (screen.width > 575) {
      animate({
        duration: 500,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          popup.style.opacity = progress;
          popup.style.visibility = "visible";
        },
      });
    } else {
      animate({
        duration: 500,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          popup.style.opacity = progress;
          popup.style.visibility = "visible";
        },
      });
    }
  };

  const hideModal = (popup) => {
    const rectPopup = popup.getBoundingClientRect();
    popup.style.opacity = 0;
    popup.style.visibility = "hidden";

    if (rectPopup.top > 0) {
      popup.style.setProperty("--before-transform", "rotate(360deg)");

      popup.style.bottom = "90px";
    } else {
      popup.style.setProperty("--before-transform", "rotate(180deg)");

      popup.style.bottom = `-${rectPopup.height + 20}` + "px";
    }
  };

  formula.addEventListener(
    "mouseenter",
    (e) => {
      if (e.target.matches(".formula-item")) {
        const formulaPopup = e.target.querySelector(".formula-item-popup");
        showModal(formulaPopup);
      }
    },
    true
  );
  formula.addEventListener(
    "mouseleave",
    (e) => {
      if (e.target.matches(".formula-item")) {
        const formulaPopup = e.target.querySelector(".formula-item-popup");
        hideModal(formulaPopup);
      }
    },
    true
  );
};
