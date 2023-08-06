const links = document.querySelector('.links');
const hamburger = document.querySelector('.hamburger');
const ul = document.querySelector('ul');

hamburger.addEventListener('click', ()=>{
    links.classList.toggle('nav-active');
    hamburger.classList.toggle('hamburger-active');
});

