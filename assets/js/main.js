function showMobileMenu() {
  const button = document.querySelector(".mobile-menu");
  const menuNav = document.querySelector(".menu-nav");
  const body = document.querySelector("body");

  button.addEventListener("click", (e) => {
    menuNav.classList.toggle("show");
    body.classList.toggle("block-scroll");
  });
}

showMobileMenu();
