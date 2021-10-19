if(document.querySelector('html').classList.contains('_touch')){

let menu_links = document.querySelectorAll('.menu__link');

if (menu_links.length > 0) {
    menu_links.forEach(menu_link => {
        menu_link.addEventListener("click", function (e) {
            menu_close();
            body_lock_remove(500);
        });        
    });

}
}
