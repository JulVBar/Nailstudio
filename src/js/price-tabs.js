import priceList from '../price-list.json';

function priceTabs() {
    
    let priceListItemsArr = [];
    let priceItemsClassArr = [];

    class PriceItem {
        constructor(title, price, description, src, alt, parentSelector) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.description = description;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
            priceItemsClassArr.push(this); //помещает в массив созданный класс
        }

        renderPriceList() {
            const element = document.createElement('li');
            element.classList.add('price__list__item');

            element.innerHTML = `
                <div class="price__list__name">${this.title}</div>
                <div class="price__list__cost">от<span>${this.price}</span><i class="fas fa-ruble-sign"></i></div>`;

            this.parent.append(element);
            priceListItemsArr.push(element);


            element.addEventListener('click', (e) => {
                if (e.target) {
                    priceListItemsArr.forEach(item => {
                        item.classList.remove('active');
                    });
        
                    element.classList.add('active');

                    showDetails(this);
                }
            });
        }
    }


    function showDetails(object) {
        const details = document.querySelector('.services__details');

        details.innerHTML = "";
        details.innerHTML = `
            <div class="services__image"><img src=${object.src} alt=${object.alt} loading="lazy"></div>
            <div class="price__list__name services__details__name">${object.title}</div>
            <div class="price__list__cost services__details__cost">от <span>${object.price}</span> <i class="fas fa-ruble-sign"></i></div>
            <div class="services__details__descr">${object.description}.</div>`;
    }


    function createPriceList(array, parentSelector) {
        array.forEach(({title, price, description, src, alt}) => {
            new PriceItem(title, price, description, src, alt, parentSelector).renderPriceList();
        });
    }


    function bindTabs(barSelector, tabSelector, contentSelector) {

        const bar = document.querySelector(barSelector), //плашка
            tabs = document.querySelectorAll(tabSelector), //пункт меню
            content = document.querySelectorAll(contentSelector); //контент меню (таб)

        function hideTabContent() { //скрывает вкладку
            content.forEach(item => { // скрываем отображение вкладки
                item.classList.add('hide');
                item.classList.remove('show', 'fadeIn');
            });
    
            tabs.forEach(item => { // убираем подсветку активного выбора меню
                item.classList.remove('active');
            });
        }

        function showTabContent(i = 0) {
            content[i].classList.add('show', 'fadeIn'); // показывает определенную вкладку и анимацию
            content[i].classList.remove('hide');
            tabs[i].classList.add('active'); // делаем айтем менюшки активным(жирным)
        }

        hideTabContent();
        showTabContent();

        bar.addEventListener('click', (event) => {
            const target = event.target; // создаем для простоты записи

            if (target && target.classList.contains(tabSelector.replace(/\./, ""))) { // делигируем события(событие на все кнопки в блоке)
                tabs.forEach((item, i) => { // перебираем все табы, и когда кликнутый таб совпадет с табом из массива показываем
                    if (target == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });
    }

if (document.querySelector('#homepage')) {
    if (JSON.stringify(priceList) !== '{}') { // проверить объект на пустоту, можно еще через перебор own property

        bindTabs('.services__list__top', '.services__list__title', '.services__price__list');

        createPriceList(priceList.pedicure, "#pedicure");
        createPriceList(priceList.manicure, "#manicure");


        priceListItemsArr[0].classList.add('active');
        showDetails(priceItemsClassArr[0]);
        
    } else {
        document.querySelector('#services').style.display = 'none';
    }
}
}


export default priceTabs;