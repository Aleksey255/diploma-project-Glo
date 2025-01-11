export const accordion = () => {
  const arrow = document.querySelector(".header-contacts__arrow");
  const numberAccord = document.querySelector(
    ".header-contacts__phone-number-accord"
  );
  const number = numberAccord.querySelector(".header-contacts__phone-number");

  arrow.addEventListener("click", () => {
    if (number.style.opacity == 0) {
      numberAccord.style.top = "25" + "px";
      number.style.opacity = 1;
    } else {
      numberAccord.style.top = 0;
      number.style.opacity = 0;
    }
  });
};
