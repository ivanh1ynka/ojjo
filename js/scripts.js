// Custom Scripts
// Custom scripts
// Мобильное меню бургер
function burgerhiden() {
  const burger = document.querySelector('.burger')
  const hiden = document.querySelector('.hiden')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!hiden.classList.contains('active')) {
      hiden.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      hiden.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      hiden.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerhiden()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
window.addEventListener('scroll', fixedNav)

;
const readMoreBtn = document.querySelector("#read-more-btn");
const text = document.querySelector(".service__text");

readMoreBtn.addEventListener("click", (e) => {
  text.classList.toggle("show-more");
  if (readMoreBtn.innerText === "READ MORE") {
    readMoreBtn.innerText = "READ LESS";
  } else {
    readMoreBtn.innerText = "READ MORE";
  }
});
;