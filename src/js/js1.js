

function one() {
    console.log('Это файл 1');
    //много другого кода  - весь модуль


    const burger = document.querySelector('.header__burger'),
        burgerMenu = document.querySelector('.burger__menu');

        burger.addEventListener('click', (e) => {
        burgerMenu.classList.toggle('active');
        burger.classList.toggle('active');
    });
    

}

export default one;
