import { animate } from "./helpers";

export const menu = () => {
  const menu = document.querySelector(".popup-dialog-menu");
  const showMenu = document.querySelector(".menu");
  const hideMenu = document.querySelector(".close-menu");
  const nav = document.querySelector(".popup-menu-nav");
  const btnFooter = document.querySelector(".button-footer");

  const openMenu = () => {
    if (screen.width < 576) {
      animate({
        duration: 100,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          menu.style.transform = `translateY(${100 - 100 * progress}%)`;
        },
      });
    } else {
      animate({
        duration: 100,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          menu.style.transform = `translateX(${100 - 100 * progress}%)`;
        },
      });
    }
  };

  const closeMenu = () => {
    if (screen.width < 576) {
      animate({
        duration: 100,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          menu.style.transform = `translateY(${-100 * progress}%)`;
        },
      });
    } else {
      animate({
        duration: 100,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          menu.style.transform = `translateX(${100 * progress}%)`;
        },
      });
    }
  };

  const smoothScroll = (e) => {
    e.preventDefault();
    const link = e.target.closest("a");
    const href = link.getAttribute("href");
    document.querySelector(href).scrollIntoView({
      behavior: "smooth",
    });
  }

  showMenu.addEventListener("click", openMenu);
  hideMenu.addEventListener("click", closeMenu);
  nav.addEventListener("click", (e) => {
    if (e.target.closest(".menu-link")) {
      smoothScroll(e)
      closeMenu();
    }
  });
  btnFooter.addEventListener("click", smoothScroll);
};
