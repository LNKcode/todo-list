let navMain = document.querySelector('.navigation');
let navToggle = document.querySelector('.header__burger');

navMain.classList.remove('navigation--no-js');
navToggle.classList.remove('header__burger--no-js');

navMain.classList.add('navigation--closed');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('navigation--closed')) {
    navMain.classList.remove('navigation--closed');
    navMain.classList.add('navigation--open');
    navToggle.classList.add('header__burger--open');
  } else {
    navMain.classList.add('navigation--closed');
    navMain.classList.remove('navigation--open');
    navToggle.classList.remove('header__burger--open');
  }
});
