const grid = document.getElementById('grid');

const button = document.getElementById('prompt');

let COLOR = 'beige';

const GRID_SIZE_LIMIT = 128;

button.addEventListener('click', () => {
    let gridsize = prompt('Please provide a number n for an n x n grid');
    while (gridsize > GRID_SIZE_LIMIT) {
        alert('Given n is too large (> ' + GRID_SIZE_LIMIT + '). Please provide a smaller n.')
        gridsize = prompt('Try again:');
    }
    makeGrid(gridsize);
})

function makeGrid(size) {
    while(grid.childNodes.length > 0) {
        grid.removeChild(grid.lastChild);
    }
    for (let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.className = 'row';

        for (let j = 1; j <= size; j++) {
            let square = document.createElement('div');
            square.className = 'square';
            square.style.width = `${500 / size}px`
            square.style.height = square.style.width;
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = COLOR;
            })
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
}

// function colorSelector() {

// }

// function shadr() {
//     let gridArr = Array.from(grid.querySelectorAll('.square'));
//     for (let i = 0; i < gridArr.length; i++) {
//         gridArr[i].addEventListener('mouseover', () => {
//             gridArr[i].style.backgroundColor +=
//         })
//     }
// }