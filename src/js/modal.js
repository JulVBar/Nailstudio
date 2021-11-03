function modal() {
    


bindModal('[data-modal]', '.modal');

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
                    modal.classList.add('active');
                    document.body.classList.remove('scroll');
                }

                modal.addEventListener('click', (e) => {

                    if (e.target === modal || e.target.getAttribute('data-close') == "") {
                        
                        modal.classList.remove('active');
                        document.body.classList.add('scroll');
                    }
                });

                document.addEventListener('keydown', (e) => {
                    if (e.code === "Escape" && modal.classList.contains('active')) { 
                        modal.classList.remove('active');
                        document.body.classList.add('scroll');
                    }
                });
            });
        });
    });
}















}

export default modal;