console.log('OK JS!');

//alert('Se soffri di attacchi epilettici, non aprire la pagina!')


// Creare una griglia 10x10
// ogni cella è "contrassegnata" da un numero
// quando l'utente clicca, la cella diventa azzurra


// richiamo la griglia dal file html

const grid = document.getElementById('grid');


// definisco le colonne e le righe

const columns = 10;
const rows = 10;


// definisco il totale delle celle

const totalCells = columns * rows;
console.log(totalCells);


// uso for per creare le varie celle da 1 a 100 e le personalizzo

for (let i = 0; i < totalCells; i++) {

    // creo la singola cella con f.ne
    const cell = document.createElement('div');
    cell.classList.add('cell');
    grid.appendChild(cell);

    // creo il numerino nella cella
    cell.innerText = [i + 1];

    // metto in ascolto di un evento

    cell.addEventListener('click', function () {
        cell.classList.toggle('bg-blue');
    })
}




