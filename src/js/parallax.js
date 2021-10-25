function parallax() {

    function parallaxBg (background, block) {
        block.addEventListener('mousemove', function(e) {
            let x = e.clientX / window.innerWidth;
            let y = e.clientY / window.innerHeight;  
            background.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
        });
    }


    parallaxBg(document.querySelector('.pop__servants__background'), document.querySelector('.pop__servants__inner'));
    // parallaxBg(document.querySelector('.map_background'), document.querySelector('.map'));
    
    

}

export default parallax;