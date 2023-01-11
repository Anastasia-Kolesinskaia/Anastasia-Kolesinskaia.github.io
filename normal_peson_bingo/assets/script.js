let cells = document.querySelectorAll('td');
let bingo = document.querySelector('.bingo');
let winner = document.querySelector('.winner');

let active_cells = [];

let previous_number_of_bingo = 0;
let number_of_bingo = 0;

cells.forEach(cell => {
    cell.onclick = () => {

        let coordinates = cell.id.split('_');
        let x = coordinates[0];
        let y = coordinates[1];

        if (cell.classList.contains('active')) {
            cell.classList.remove('active');

            const index = active_cells.findIndex(c => (c.x == x) && (c.y == y));
            active_cells.splice(index, 1); 
        }
        else {
            cell.classList.add('active');
            active_cells.push({ x, y });
        }

        previous_number_of_bingo = number_of_bingo;
        number_of_bingo = 0;
        calculateBingoInLines();
        calculateBingoInColumns();

        if (number_of_bingo > previous_number_of_bingo && active_cells.length <16)
        {
            bingo.classList.add("shown")
            let goAway = setTimeout(()=> bingo.classList.remove("shown"), 1000);
        }

        if (active_cells.length == 16) {
            winner.classList.add("shown")
        }
    };
});

function calculateBingoInLines() {
    for (let y = 0; y < 4; y++) {
        let isLineFilled = true;

        for (let x = 0; x < 4; x++) {
            if (!active_cells.find(c => c.x == x && c.y == y))
                isLineFilled = false;
        }

        if (isLineFilled) 
            number_of_bingo++;
    }
}

function calculateBingoInColumns() {
    for (let x = 0; x < 4; x++) {
        let isColumnFilled = true;

        for (let y = 0; y < 4; y++) {
            if (!active_cells.find(c => c.x == x && c.y == y))
                isColumnFilled = false;
        }

        if (isColumnFilled)
            number_of_bingo++;
    }
}