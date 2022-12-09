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
      sectionsClass = document.querySelector('a[href*=' + sectionId + ']')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link')
    } else {
      sectionsClass.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: '2500',
  delay: '400',
})

sr.reveal('.home-img, .newsletter-container')
sr.reveal('.home-data', { origin: 'bottom' })
sr.reveal('.about-data, .recently-data', { origin: 'left' })
sr.reveal('.about-img, .recently-img', { origin: 'right' })
sr.reveal('.popular-card', { intervar: 100 })

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  )
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](
    iconTheme
  )
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})
