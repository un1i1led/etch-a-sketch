const grid = document.querySelector('.grid');

for (let i = 0; i < 256; i++){
    const gridDiv = document.createElement('div');
    gridDiv.className = 'gridDiv';
    grid.appendChild(gridDiv);

    gridDiv.addEventListener('mouseenter', () => {
        gridDiv.style.backgroundColor = 'black';
    });
};

