const menuIcon = document.querySelector(".menu_icon");
const mobileMenu = document.querySelector(".menu-mobile");
const x_icon = document.querySelector(".x_icon");

menuIcon.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden"); // Show menu
});

x_icon.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');

});


const scrollContainer = document.querySelector('.scroll-container2');
const scrollLeftButton = document.getElementById('scrollLeft');
const scrollRightButton = document.getElementById('scrollRight');

scrollLeftButton.addEventListener('click', () => {
  scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
});

scrollRightButton.addEventListener('click', () => {
  scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
});
