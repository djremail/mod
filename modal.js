const burger = document.querySelector('.modal');
const close = document.querySelector('.close');
const nav = document.querySelector('.header_nav');

burger.addEventListener('click',() => {
    nav.classList.add('active')
})

close.addEventListener('click',() => {
    nav.classList.remove('active')
})


