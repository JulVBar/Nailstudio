

function navigation() {
    
// Navigation

document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);
        console.log(href);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('.header').offsetHeight;
        // const topOffset = 0; // если не нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// btn to top

function btnToTopShow() {
    if (window.pageYOffset !== 0) {
        btnTop.classList.add('active');
    } else {
        btnTop.classList.remove('active');
    }
}

window.addEventListener('scroll', btnToTopShow);

const btnTop = document.querySelector('.button__to__top');

btnTop.addEventListener('click', function (e) {
    e.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});














}

export default navigation;