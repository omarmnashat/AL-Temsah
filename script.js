const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const Close = document.getElementById('Close');

bar.addEventListener('click' , function (){
    nav.classList.add('active');
});

Close.addEventListener('click' , function (){
    nav.classList.remove('active');
});

let iconcart = document.querySelector('.icon-cart');
let Closecart = document.querySelector('.close')
let body = document.querySelector('body');

iconcart.addEventListener('click', () => {
    body.classList.toggle('showcart')
})
Closecart.addEventListener('click', () => {
    body.classList.toggle('showcart')
})