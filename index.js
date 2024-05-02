let hamburger = document.querySelector('.hamburger')
let close = document.querySelector('.close')
let navbar = document.querySelector('.navbar')
let body = document.querySelector('body')

function toggleMenu() {
    if (close.style.display === 'none') {
        hamburger.style.display = 'none'
        close.style.display = 'inline-block'
				navbar.style.display = 'block'
				body.classList.add('mobile-menu-active')
    }else {
        close.style.display = 'none'
        hamburger.style.display = 'block'
				navbar.style.display = 'none'
				body.classList.remove('mobile-menu-active')
    }
}

hamburger.addEventListener('click', toggleMenu)
close.addEventListener('click', toggleMenu)