const main = () => {
  const menuButton = document.querySelector(".menu-button");
  const mobileNav = document.querySelector(".mobile-nav");
  const closeMenuButton = document.querySelector(".close-menu-button");
  menuButton.addEventListener("click", () => {
    mobileNav.style.display = "flex";
  });
  closeMenuButton.addEventListener("click", () => {
    mobileNav.style.display = "none";
  });
};

main();
