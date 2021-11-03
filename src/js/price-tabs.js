function priceTabs() {




    function bindTabs(barSelector, tabSelector, contentSelector) {

        const bar = document.querySelector(barSelector), //плашка
            tabs = document.querySelectorAll(tabSelector), //пункт меню
            content = document.querySelectorAll(contentSelector); //контент меню (таб)

        function hideTabContent() { //скрывает вкладку
            content.forEach(item => { // скрываем отображение вкладки
                item.classList.add('hide');
                item.classList.remove('show', 'fade');
            });
    
            tabs.forEach(item => { // убираем подсветку активного выбора меню
                item.classList.remove('active');
            });
        }

        function showTabContent(i = 0) {
            content[i].classList.add('show', 'fade'); // показывает определенную вкладку и анимацию
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

    bindTabs('.services__list__top', '.services__list__title', '.services__price__list');















}
export default priceTabs;