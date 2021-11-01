

function one() {
    console.log('Это файл 1');
    //много другого кода  - весь модуль


    const burger = document.querySelector('.header__burger'),
    burgerMenu = document.querySelector('.burger__menu'),
    blogMenu = document.querySelector('.blog__menu');


    
    if(document.querySelector('#homepage')) {
        burger.addEventListener('click', (e) => {
            burgerMenu.classList.toggle('active');
            burger.classList.toggle('active');
        });
    }
    
    if(document.querySelector('.blogpage')) {
        burger.addEventListener('click', (e) => {
            blogMenu.classList.toggle('active');
            burger.classList.toggle('active');
        });
    }
        
    

}

export default one;
