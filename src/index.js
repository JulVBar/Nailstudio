
import './styles/main.scss';
import one from './js/js1';
import two from './js/js2';
import preloader from './js/preloader';
import navigation from './js/navigation';
import modal from './js/modal';
import priceTabs from './js/price-tabs';

import json from './db.json';




console.log(json);
console.log(json.menu[0].title);


const zagolovokGradient = document.querySelector('.h1__gradient');

zagolovokGradient.innerHTML = `${json.menu[0].title}`;


console.log('Это файл APP.JS');

window.addEventListener('DOMContentLoaded', function() {
    one();
    two();
    navigation();
    modal();
    preloader();
    priceTabs();
});

// load all images
//каждую подпапку импортируем отдельно (иконки просто копируются в конфиге)
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg|gif)$/));
const galery = importAll(require.context('./images/galery', false, /\.(png|jpe?g|svg|gif)$/));
const reviews = importAll(require.context('./images/reviews', false, /\.(png|jpe?g|svg|gif)$/));
const popservants = importAll(require.context('./images/pop-servants', false, /\.(png|jpe?g|svg|gif)$/));
const services = importAll(require.context('./images/services', false, /\.(png|jpe?g|svg|gif)$/));
const news = importAll(require.context('./images/news', false, /\.(png|jpe?g|svg|gif)$/));
const map = importAll(require.context('./images/map', false, /\.(png|jpe?g|svg|gif)$/));
const blog = importAll(require.context('./images/blog', false, /\.(png|jpe?g|svg|gif)$/));



function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}






