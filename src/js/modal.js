function modal() {
    
const bookinModal = document.querySelector('#book-in');


function openModal(modalWindow) {
    modalWindow.classList.add('active');
    document.body.classList.remove('scroll');

    clearInterval(modalTimerId); // если пользователь сам открыл !любое! модальное окно, оно не будет появлятся само
    //если он открыл другое, это позволит не наложить одно окно на другое
}


function closeModal(modalWindow) {
    modalWindow.classList.remove('active');
    document.body.classList.add('scroll');
}


function bindModal(triggerSelector, modalWindowsSelector) {
    const trigger = document.querySelectorAll(triggerSelector),
        modalWindows = document.querySelectorAll(modalWindowsSelector);

    trigger.forEach(elem => {
        elem.addEventListener('click', (e) => {
            if(e.taret) {
                e.preventDefault();
            }

            let elemId = elem.getAttribute('data-modal');

            modalWindows.forEach(modal => {
                let modalId = modal.getAttribute('id');

                if (modalId === elemId) {
                    openModal(modal);
                }
            });
        });
    });

    modalWindows.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.getAttribute('data-close') == "") {
                closeModal(modal);
            }
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('active')) { 
            closeModal(modal);
        }
    });
}

// В конце страницы при скролле

function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        openModal(bookinModal);
        window.removeEventListener('scroll', showModalByScroll);
    }
}

// Открывается через время

// const modalTimerId = setTimeout(() => {
//     openModal(bookinModal);
// }, 90000);
    


bindModal('[data-modal]', '.modal');
window.addEventListener('scroll', showModalByScroll);
}

export default modal;