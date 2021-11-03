

function navigation() {

const navLinks = document.querySelectorAll('a[href^="#"'),
    sections = document.querySelectorAll('section'),
    btnTop = document.querySelectorAll('.button__to__top');

// Navigation by click and smooth
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href),
            topOffset = document.querySelector('.header').offsetHeight,
            elementPosition = scrollTarget.getBoundingClientRect().top,
            offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// Navigation by scrolling

function windowScroll() {
    sections.forEach(el => {

        let scroll = window.pageYOffset;
        let top = el.offsetTop - 100;
        let bottom = el.offsetHeight + top;
        
        let id = el.getAttribute('id');
            
        if (scroll > top && scroll < bottom)  { 

            navLinks.forEach(link => {

                link.classList.remove('active'); 
                
                if (link.getAttribute('href').substring(1) == id) { 
                    
                    link.classList.add('active');
                }
            });
        }   
    });
}

window.addEventListener('scroll', windowScroll);

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