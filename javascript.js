document.addEventListener('DOMContentLoaded', () => {
    // Grid container
    const gridContainer = document.getElementById('grid');

    //  create 16x16 grid
    function createGrid() {
        
        
        for (let i = 0; i < 257; i++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');

            gridItem.addEventListener('mouseover', () => {
                gridItem.style.backgroundColor = getRandomColor();
            });

            gridContainer.appendChild(gridItem);
        }
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random()*16)];
        }
        return color;
    }

    createGrid();

});

