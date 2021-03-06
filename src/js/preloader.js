function preloader() {

    document.body.onload = function() {

        setTimeout(function() {
            let preloader = document.querySelector('.preloader');
    
            if (!preloader.classList.contains('done')) {
                preloader.classList.add('done');
            }

            document.body.classList.add('scroll');

        }, 1000);
    };
}

export default preloader;