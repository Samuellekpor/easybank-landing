const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const navbar = document.querySelector('.navbar');
const body = document.querySelector('body');

function toggleMenu() {
  if (close.style.display === 'none') {
    hamburger.style.display = 'none';
    close.style.display = 'inline-block';
    navbar.style.display = 'block';
    body.classList.add('mobile-menu-active');
  } else {
    close.style.display = 'none';
    hamburger.style.display = 'block';
    navbar.style.display = 'none';
    body.classList.remove('mobile-menu-active');
  }
}

hamburger.addEventListener('click', toggleMenu);
close.addEventListener('click', toggleMenu);