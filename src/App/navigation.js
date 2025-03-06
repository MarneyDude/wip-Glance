import { modalCatalog, closeModal } from "./modal-catalog.js";

export function setupNavigationListeners() {
  const navigationList = document.querySelector(".js-menu-list");

  navigationList.addEventListener("click", openNavigationLinks);
}

export function openNavigationLinks(event) {
  event.preventDefault();

  const homeLink = event.target.classList.contains("menu__link--home");
  const basketLink = event.target.classList.contains("menu__link--basket");
  const profileLink = event.target.classList.contains("menu__link--profile");

  if (homeLink) {
    closeModal(event, modalCatalog);
  } else if (basketLink) {
    closeModal(event, modalCatalog);
    setTimeout(() => {
      window.location.href = "/basket.html";
    }, 300);
  } else if (profileLink) {
    closeModal(event, modalCatalog);
    setTimeout(() => {
      window.location.href = "/profile.html";
    }, 300);
  }
}
