/* Abre e fecha o menu quando clicar no ícone do "hamburguer" */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* Quando clicar em um item do menu, vai esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function (event) {
    event.preventDefault()

    nav.classList.remove('show')
    scrollSmooth(link)
  })
}

/* Mudar o header da página quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // Scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // Scroll é menor que a altura do header
    header.classList.remove('scroll')
  }
}

/* Testimonials slider swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* ScrollReveal - mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #home .text,
  #services header, #services .card,
  #testimonials header,
  #contact .text, #contact .links,
  footer .brand, footer .social-networks
  `,
  { interval: 100 }
)

/* Scroll suave */
function scrollSmooth(link) {
  const sectionId = link.getAttribute('href')
  document.querySelector(sectionId).scrollIntoView({
    behavior: 'smooth'
  })
}

/* Botão voltar para o topo da página */
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Menu ativo quando estiver em uma seção da página */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const chekpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const chekpointStart = chekpoint >= sectionTop
    const chekpointEnd = chekpoint <= sectionTop + sectionHeight

    if (chekpointStart && chekpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
