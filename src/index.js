
import './styles/main.scss';
import one from './js/js1';
import two from './js/js2';

import json from './db.json';



console.log(json);


console.log('Это файл APP.JS');

window.addEventListener('DOMContentLoaded', function() {
    one();
    two();
});

// load all images
//каждую подпапку импортируем отдельно (иконки просто копируются в конфиге)
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg|gif)$/));
const slider = importAll(require.context('./images/slider', false, /\.(png|jpe?g|svg|gif)$/));
const galery = importAll(require.context('./images/galery', false, /\.(png|jpe?g|svg|gif)$/));
const team = importAll(require.context('./images/team', false, /\.(png|jpe?g|svg|gif)$/));
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

