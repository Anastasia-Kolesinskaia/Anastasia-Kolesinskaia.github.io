const slides = document.querySelectorAll(".hero>li");
const dots = document.querySelectorAll(".next_main_slider_dots>span");
const interval = 5;

let activeSlid = 0;

const reset = () => {

    if (dots.length == 0) return;
    if (slides.length == 0) return;
    
    dots.forEach(dot => dot.removeAttribute('class'));
    dots[activeSlid].className = 'active';

    slides.forEach(slide => slide.style.display = 'none');
    slides[activeSlid].style.display = 'block'

}

reset ();

setInterval(() =>{

    reset ();
    
    if(activeSlid < slides.length - 1) {
        activeSlid++;
    } else {
        activeSlid = 0;
    }

}, interval*1000);

dots.forEach((dot, index) => {
    dot.addEventListener ('click', () => {
        activeSlid = index;
        reset ();
    });
});

const chekpoint = 300;
let nav_bg = 'transparent';
let opacity = 1;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if(currentScroll <= chekpoint) {
        nav_bg = 'transparent'; 
        opacity = 1 - currentScroll / chekpoint;
    } else {
        nav_bg = '#000';
        opacity = 0;
    }

    document.querySelector(".header_nav").style.background = nav_bg;
    slides.forEach(slide => slide.getElementsByTagName('img')[0].style.opacity = opacity);
});

const menu = document.querySelector('.mobile_btn');
const submenu = document.querySelector('.second_menu_mobile');
let is_open = 0;

menu.addEventListener('click', () => {
    if(!is_open) {
        submenu.style.display = 'block';
        is_open = 1;
    } else {
        submenu.style.display = 'none';
        is_open = 0;
    }
});

// Tabs
const tabs_titles = document.querySelectorAll('.tabs-titles>li');
const tabs = document.querySelectorAll('.tabs>div');
let active_tab = 0;

if (tabs_titles.length >0) {

const resetTabs = () => {
    tabs_titles.forEach((tab_t, index) => {
        tabs[index].style.display = 'none';
        tab_t.removeAttribute('class');
    });
};

resetTabs();
tabs[active_tab].style.display = 'block';
tabs_titles[active_tab].className = 'active';


tabs_titles.forEach((tab_t, index) => {

    tab_t.addEventListener('click', () => {
        active_tab = index;
        resetTabs();
        tabs[index].style.display = 'block';
        tab_t.className = 'active';
    });

});
};