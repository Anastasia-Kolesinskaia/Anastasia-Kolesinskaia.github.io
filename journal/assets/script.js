const bookmarks = document.querySelectorAll(".nav_bar>ul>li");

let selectedMark = 0;

const reset = () => {
    
    bookmarks.forEach(mark => mark.removeAttribute('class'));
    bookmarks[selectedMark].className = 'selected';
}

reset ();

bookmarks.forEach((mark, index) => {
    mark.addEventListener ('click', () => {
        selectedMark = index;
        reset ();
    });
});

const main = document.querySelector('main');
const sections = document.querySelectorAll('section');
const html = document.querySelector('html');
const body = document.querySelector('body');
const colors = ['#00c1b5','#ff651a','#ffbe00','#1d3fbb','#e30512'];

const scrollMain = () => scrollEvent(main.scrollTop);
const scrollWindow = () => scrollEvent(document.documentElement.scrollTop);

const scrollEvent = (scroll) => {
    let sectionHeight = 684;
    let sectionNumber = Math.floor(1 + ((scroll - sectionHeight/2) / sectionHeight));
    
    selectedMark = sectionNumber;
    
    if (selectedMark >= sections.length)
        selectedMark = sections.length - 1

    reset();

    let colorPage = colors[selectedMark];
    html.style.backgroundColor = colorPage;
};

main.addEventListener('scroll', scrollMain);
window.addEventListener("scroll", scrollWindow);
