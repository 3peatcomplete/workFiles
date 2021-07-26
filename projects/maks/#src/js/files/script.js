let menuLinks = document.querySelectorAll('.menu__link');

if(menuLinks.length > 0){
for (let i = 0; i < menuLinks.length; i++) {
    const menuLink = menuLinks[i];
    menuLink.addEventListener('click' , function () {
        menu_close()
        body_lock(500)
    })
}

}
