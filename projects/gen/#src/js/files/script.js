// adaptive

if(document.querySelector('html').classList.contains('_touch')){
let searchAdaptive = document.querySelector('.search');
let header_btn = document.querySelector('.header_btn');
let header_social = document.querySelector('.header-social');
let menu = document.querySelector('.menu');
let header_text = document.querySelector('.header__text');

let menu__list = document.querySelector('.menu__list');
/* Adds Element BEFORE NeighborElement */
Element.prototype.appendBefore = function (element) {
    element.parentNode.insertBefore(this, element);
}, false;

/* Adds Element AFTER NeighborElement */
Element.prototype.appendAfter = function (element) {
    element.parentNode.insertBefore(this, element.nextSibling);
}, false;


/* Typical Creation and Setup A New Orphaned Element Object */
// var NewElement = document.createElement('div');
// NewElement.innerHTML = 'New Element';
// NewElement.id = 'NewElement';


/* Add NewElement BEFORE -OR- AFTER Using the Aforementioned Prototypes */
searchAdaptive.appendAfter(menu__list);
header_btn.appendAfter(searchAdaptive);
header_social.appendAfter(header_btn);
menu.appendAfter(header_text);


let menu_list_icons = document.querySelectorAll('.menu__list-icon ');


if (menu_list_icons.length > 0) {
    menu_list_icons.forEach(menu_list_icon => {
        menu_list_icon.addEventListener('click', function () {
            console.log('asd');
            _slideToggle(menu_list_icon.parentElement.nextElementSibling)
        })
    });
}

let menu_sub = document.querySelectorAll('.menu-sub');


menu_sub.forEach(element => {
    
    element.hidden = true;
});

}

