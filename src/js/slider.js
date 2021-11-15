
function slider() {
    

    const slides = document.querySelectorAll('.reviews__slider__item'),
    next = document.querySelector('.arrow-right'),
    prev = document.querySelector('.arrow-left'),
    // total = document.querySelector('#total'),
    // current = document.querySelector('#current'),
    slidesWrapper = document.querySelector('.reviews__slider'), //обертка, общий див
    slidesField = document.querySelector('.reviews__slider__inner'), // колесо слайдов
    width = window.getComputedStyle(slidesWrapper).width; //уже примененные стили (объект), вытащили свойство ширина
let slideIndex = 1;
let offset = 0; // отступ

console.log(width);

function setslidesFieldWidth() {
    slidesField.style.width = 100 * slides.length + '%';
}

setslidesFieldWidth();

window.addEventListener('resize', setslidesFieldWidth);


slidesField.style.transition = '0.5s all';

slides.forEach(slide => {
    slide.style.width = width;
});

next.addEventListener('click', () => {
    setslidesFieldWidth();
    if(offset == +width.replace(/\D/g, '') * (slides.length - 1)) {
        offset = 0;
    } else {
        offset += +width.replace(/\D/g, '');
    }
    
    slidesField.style.transform = `translateX(-${offset}px)`;

    if(slideIndex == slides.length) {
        slideIndex = 1;
    } else {
        slideIndex++;
    }
});

prev.addEventListener('click', () => {
    setslidesFieldWidth();
    if(offset == 0) {
        offset = +width.replace(/\D/g, '') * (slides.length - 1);
    } else {
        offset -= +width.replace(/\D/g, '');
    }
    
    slidesField.style.transform = `translateX(-${offset}px)`;

    if(slideIndex == 1) {
        slideIndex = slides.length;
    } else {
        slideIndex--;
    }
});

}

export default slider;