const container = document.querySelector('.container');
const grid = document.querySelector('.grid');
const clear = document.querySelector('#clear');
const small = document.querySelector('#small');
const medium = document.querySelector('#medium');
const large = document.querySelector('#large');
const random = document.querySelector('#random');

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

let yes = 0;

let randomColor = () => {
    if (yes == 1) {
        yes = 0;
    } else {
        yes = 1;
    }

    return yes;
};

random.addEventListener('click', randomColor);

let color = random_rgba();

let smallChoice = () => {
    for (let i = 0; i < 256; i++){
        const gridDiv = document.createElement('div');
        gridDiv.className = 'gridDiv';
        grid.appendChild(gridDiv);
        
        gridDiv.addEventListener('mouseenter', () => {
            if (yes == 1){
                gridDiv.style.backgroundColor = random_rgba();
            } else {
                gridDiv.style.backgroundColor = 'black';
            }
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
        gridDiv.className = 'midDiv';
        grid.appendChild(gridDiv);

        gridDiv.addEventListener('mouseenter', () => {
            if (yes == 1){
                gridDiv.style.backgroundColor = random_rgba();
            } else {
                gridDiv.style.backgroundColor = 'black';
            }
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
        gridDiv.className = 'largeDiv';
        grid.appendChild(gridDiv);

        gridDiv.addEventListener('mouseenter', () => {
            if (yes == 1){
                gridDiv.style.backgroundColor = random_rgba();
            } else {
                gridDiv.style.backgroundColor = 'black';
            }
        });

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

