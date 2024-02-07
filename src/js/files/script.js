// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

import {Fancybox} from "@fancyapps/ui";

document.querySelector('.hamburger').addEventListener('click', function (){
    if(document.body.classList.contains('menu-active')){
        document.body.classList.remove('menu-active')
    }else{
        document.body.classList.add('menu-active');
        document.querySelectorAll('.header-menu__link').forEach((item) => {
            item.addEventListener('click', function (){
                document.body.classList.remove('menu-active')
            })
        })
    }
})


const lang = function lang() {
    const $lang = document.querySelector('.languages');
    const $btn = $lang.querySelector('.head');
    const $dropdown = $lang.querySelector('.dropdown');
    $btn.addEventListener('click', function () {
        $lang.classList.toggle('is-open');

    });
};
lang();

Fancybox.bind('.swiper-slide__pic', {
    groupAll: true,
    Images: {
        initialSize: "fit",
    },
})
