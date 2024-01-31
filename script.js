//your JS code here. If required.
const squares = document.querySelectorAll('.square');

function changeColor(event) {
    squares.forEach(square => {
        if (square !== event.target) {
            square.style.backgroundColor = '#6F4E37';
        }
    });
}

squares.forEach(square => {
    square.addEventListener('mouseover', changeColor);
        square.addEventListener('mouseout', () => {
        squares.forEach(square => {
            square.style.backgroundColor = '#E6E6FA';
        });
    });
});

