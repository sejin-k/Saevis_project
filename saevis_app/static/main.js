const menuBtn = document.querySelector('.navbar__menuBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

const testBtn = document.querySelector('.testBtn');
const test = document.querySelector('.services');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
})

testBtn.addEventListener('click', () => {
    test.classList.toggle('active');
})