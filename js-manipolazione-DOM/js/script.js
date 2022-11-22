
// // document.getElementById('main');
// // § document.getElementById('main').className += " d-none";
// // document.getElementById('main').className = document.getElementById('main').className + " d-none";
// const main = document.querySelector('main');

// // § main.innerHTML += '<p>ciao</p>';
// // main.innerHTML = main.innerHTML + '<p>ciao</p>';
// // const p = document.createElement('gianna');
// // p.innerHTML = "ciaone"
// // main.append(p);

// let frase = "Ecco la mia frase:";

// // # frase = frase + " Io mi chiamo Riccardo";
// // § frase += " Io mi chiamo Riccardo";
// console.log(frase);
/**
 *
 *    Ciao Visitatore!
      Imposta il nome di colore rosso in vari modi:

      - Solo con HTML+CSS DONE
      - Scrivendo su element.style
      - Aggiungendo la classe con JS
 */

// const titolo = document.querySelector('h1');
// // titolo.style.color = "#0060df";
// titolo.classList.add('font-red');
// Al click di un pulsante, deve apparire un alert con un numero random


const inputNameElement = document.querySelector('input#name');
const inputAgeElement = document.querySelector('input#age');

const output = document.getElementById('output');
const button = document.querySelector('div.buttons a.btn');

// Quando clicco, faccio ...
button.addEventListener('click', function(){
   alert('CLICCATO!');
}) ;


// ! CONSISTENZA DEI DATI : se arriva un numero TRASFORMIAMOLO IN UN NUMERO
//  8 + 8 = 16 => 88

