const container = document.querySelector('.grid');

for (let i = 0; i < 256; i++){
    const gridDiv = document.createElement('div');
    gridDiv.classList.add('gridDiv');
    container.appendChild(gridDiv);
}


