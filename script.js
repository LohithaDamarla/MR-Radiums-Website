
// JavaScript for Navbar
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.querySelector('.nav-links');

// Toggle the navigation menu
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
