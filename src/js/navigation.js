

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
        btnTop.forEach(elem => {
            elem.classList.add('active');
        });
    } else {
        btnTop.forEach(elem => {
            elem.classList.remove('active');
        });
    }
}

window.addEventListener('scroll', btnToTopShow);

const btnTop = document.querySelectorAll('.button__to__top');

btnTop.forEach(elem => {
    elem.addEventListener('click', function (e) {
        e.preventDefault();
    
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
















}

export default navigation;