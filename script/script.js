const burgerButton = document.querySelector('.nav__icon');

if (burgerButton) {
  const menuBody = document.querySelector('.nav__menu');
  burgerButton.addEventListener('click', function (e) {
    menuBody.classList.toggle('nav__menu-active')
  })
}

const formNextButton = document.querySelector('.form__btn-next');
const formBackButton = document.querySelector('.form__btn-back');
let formBlockActive;
let formBlock;

if (formNextButton) {
  formNextButton.addEventListener('click', function (e) {
    formBlockActive = document.querySelector('.form__block-active');
    formBlock = document.querySelector('.js__form-block');
    formBlockActive.classList.remove('form__block-active');
    formBlock.classList.add('form__block-active');
    formBlock = formBlockActive;
  })
}

if (formBackButton) {
  formBackButton.addEventListener('click', function (e) {
    formBlockActive = document.querySelector('.form__block-active');
    formBlockActive.classList.remove('form__block-active');
    formBlock.classList.add('form__block-active');
    formBlock = formBlockActive;
  })
}