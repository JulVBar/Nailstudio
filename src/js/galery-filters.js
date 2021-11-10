import { galery } from '../index.js';


function galeryFilters() {
    
const galeryList = document.querySelector('.galery__photo');
const filters = document.querySelectorAll('.filter__item');

function createGaleryList(photo) {
    const element = document.createElement('li');

    element.classList.add('galery__photo__item');
    element.innerHTML = `<img class="fadeIn" src="images/galery/${photo}" alt="${photo}" loading="lazy">`;

    galeryList.append(element);
}


function filterGalery(filter) {
    Object.entries(galery).forEach(arr => {

        if (arr[0].includes(filter)) {
            createGaleryList(arr[0]);
        }
    });
}

if (document.querySelector('#homepage')) {
    filterGalery('ris');
    document.querySelector('#ris').classList.add('active');

    filters.forEach(filter => {
        filter.addEventListener('click', (e) => {
            e.preventDefault();

            let filterId = filter.getAttribute('id');

            galeryList.innerHTML = '';

            filters.forEach(item => {
                item.classList.remove('active');
            });

            filter.classList.add('active');

            filterGalery(filterId);
        });
    });
}

}

export default galeryFilters;