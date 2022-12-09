const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

navToggle.addEventListener('click', () => {
  navMenu.classList.add('show-menu')
})
navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-menu')
})

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}

navLink.forEach((n) => n.addEventListener('click', linkAction))

const scrolHeader = () => {
  const header = document.getElementById('header')
  if (this.scrollY >= 50) {
    header.classList.add('bg-header')
  } else {
    header.classList.remove('bg-header')
  }
}

window.addEventListener('scroll', scrolHeader)
