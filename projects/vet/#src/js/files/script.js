let menuLinks = document.querySelectorAll('.menu__link');

if (menuLinks.length > 0) {
    if (document.querySelector('html').classList.contains('_touch')) {

        menuLinks.forEach(menuLink => {
            menuLink.addEventListener('click', function () {
                menu_close();
                body_lock();
            })
        });
    }

}
