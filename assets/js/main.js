const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

navToggle.addEventListener('click', () => {
  navMenu.classList.add('show-menu')
})
navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-menu')
})

const navLink = document.querySelectorAll('.nav-link')

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
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')
  if (this.scrollY >= 350) {
    scrollUp.style = 'display:flex;'
  } else {
    scrollUp.style = 'display:none;'
  }
}

window.addEventListener('scroll', scrollUp)
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollY = window.pageYOffset

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionsClass = document.querySelector(
        '.nav-menu a[href*=' + sectionId + ']'
      )

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link')
    } else {
      sectionsClass.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)
