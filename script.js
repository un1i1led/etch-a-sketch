const container = document.querySelector('.container');
const grid = document.querySelector('.grid');
const clear = document.querySelector('#clear');
const small = document.querySelector('#small');
const medium = document.querySelector('#medium');
const large = document.querySelector('#large');

let smallChoice = () => {
    for (let i = 0; i < 256; i++){
        const gridDiv = document.createElement('div');
        gridDiv.className = 'gridDiv';
        grid.appendChild(gridDiv);
        
    
        gridDiv.addEventListener('mouseenter', () => {
            gridDiv.style.backgroundColor = 'black';
        });
    
        clear.addEventListener('click', () => {
            gridDiv.style.backgroundColor = 'white';
        });

        small.addEventListener('click', () => {
            gridDiv.style.backgroundColor = 'white';
            grid.appendChild(gridDiv);
        })

        medium.addEventListener('click', () => {
            gridDiv.remove();
        });

        large.addEventListener('click', () => {
            gridDiv.remove();
        });

    };    
};

let mediumChoice = () => {
    for (let i = 0; i < 1024; i++){
        const gridDiv = document.createElement('div');
        gridDiv.className = 'gridDiv';
        grid.appendChild(gridDiv);

        gridDiv.addEventListener('mouseenter', () => {
            gridDiv.style.backgroundColor = 'black';
        });

        clear.addEventListener('click', () => {
            gridDiv.style.backgroundColor = 'white';
        });

        small.addEventListener('click', () => {
            gridDiv.remove();
        });

        large.addEventListener('click', () => {
            gridDiv.remove();
        });
        
    };
};

let largeChoice = () => {
    for (let i = 0; i < 4096; i++){
        const gridDiv = document.createElement('div');
        gridDiv.id = i;
        gridDiv.className = 'gridDiv';
        grid.appendChild(gridDiv);

        gridDiv.addEventListener('mouseenter', () => gridDiv.style.backgroundColor = 'black');

        clear.addEventListener('click', () => {
            gridDiv.style.backgroundColor = 'white';
        });

        small.addEventListener('click', () => {
            gridDiv.remove();
        });

        medium.addEventListener('click', () => {
            gridDiv.remove();
        });
    }
};



smallChoice();

medium.addEventListener('click', mediumChoice);
large.addEventListener('click', largeChoice);

