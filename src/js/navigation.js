

function navigation() {
    
// Navigation

const navLinks = document.querySelectorAll('a[href^="#"');

navLinks.forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        navLinks.forEach(link => {
                link.classList.remove('active');
        });

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href),
            topOffset = document.querySelector('.header').offsetHeight, // const topOffset = 0; // если не нужен отступ
            elementPosition = scrollTarget.getBoundingClientRect().top,
            offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });

        link.classList.add('active');
    });
});

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', windowScroll);

    function windowScroll() {

        sections.forEach(el => {

            let scroll = window.pageYOffset; //текущая прокрука сверху - динамик
            let top = el.offsetTop - 100; //координата верха блока - статик (100 из-за хедера)
            let bottom = el.offsetHeight + top; // координата низа блока -статик (чтоб класс снимался, как выходит из поля зрения блок)
            
            let id = el.getAttribute('id'); // id секции section id="fff" - fff
                
            if (scroll > top && scroll < bottom)  { // если между находится, т.е. в зоне видимости

                navLinks.forEach(link => {

                    link.classList.remove('active'); //снимаем со всех
                    
                    // если id секции и ссылки совадает - вешаем класс
                    if (link.getAttribute('href').substring(1) == id) { // id ссылуи обрезаем section id="#fff" - fff
                        
                        link.classList.add('active');
                    }
                });
            }   
        });
    }



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