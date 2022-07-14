const shapes = document.querySelectorAll(".shapes>.shape");
const label = document.querySelector(".shapes>#lable");
const img_container = document.querySelector("main")

let activeSpan = 0;

const reset_shapes = () => {
    
    activeSpan = (activeSpan + 1) % shapes.length;
    shapes.forEach(img => img.removeAttribute('class'));
    shapes[activeSpan].className = 'active';
}

const show_lable = () => {
    label.className = 'active'; 
}

const show_img_container = () => {
    img_container.className = 'active'; 
}

setTimeout(reset_shapes, 900)
setTimeout(reset_shapes, 1700)
setTimeout(show_lable, 2300)
setTimeout(show_img_container, 2600)




const images = document.querySelectorAll("#img_container>img");

let activeImg = 0;

const reset_img = () => {
    
    activeImg = (activeImg + 1) % images.length;
    images.forEach(img => img.removeAttribute('class'));
    images[activeImg].className = 'active';
}

reset_img ();

setInterval(reset_img, 300);