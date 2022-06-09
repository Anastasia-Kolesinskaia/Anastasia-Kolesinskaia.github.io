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
const html = document.querySelector('html');
const body = document.querySelector('body');
const colors = ['#00c1b5','#ff651a','#ffbe00','#1d3fbb','#e30512'];

const scrollEvent = () => {
    const sections = document.querySelectorAll('section');
  
    let sectionHeight = 684;
    let sectionNumber = Math.floor(1 + ((main.scrollTop - sectionHeight/2) / sectionHeight));
    selectedMark = sectionNumber;
    reset();

    let colorPage = colors[selectedMark];
    html.style.backgroundColor = colorPage;
};

main.addEventListener('scroll', scrollEvent);