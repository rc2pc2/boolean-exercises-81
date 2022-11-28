
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


// const inputNameElement = document.querySelector('input#name');
// const inputAgeElement = document.querySelector('input#age');

// const output = document.getElementById('output');
// const button = document.querySelector('div.buttons a.btn');

// // Quando clicco, faccio ...
// button.addEventListener('click', function(){
//    alert('CLICCATO!');
// }) ;


// ! CONSISTENZA DEI DATI : se arriva un numero TRASFORMIAMOLO IN UN NUMERO
//  8 + 8 = 16 => 88


// ? document, Math, HTMLElement value
// § (un'istanza di un oggetto) un oggetto che abbia un nome => posso accedere:

   // # alle sue funzionalità, tipicamente capacità => .funzione() [metodi]
      // document.querySelector('selettoreCSS');

   // | alle sue caratteristiche tipicamente popolate =>  campi o proprietà .proprietà
      // document.getElementById('id').value;
      // * a volte sono read-only e non posso modificarle (raramente)
      // * altre possiamo modificarli, come innerHTML, outerHTML, className, ...


      /**
       *
       * > Descrizione:
            > Scrivere un programma che chieda all’utente:
               Il numero di chilometri da percorrere
               Età del passeggero

            > Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
               il prezzo del biglietto è definito in base ai km (0.2762 € al km)
               va applicato uno sconto del 17.5% per i minorenni
               va applicato uno sconto del 33.3% per gli over 65.


            > MILESTONE 1:
            > Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
            > La risposta finale (o output) sarà anch’essa da scrivere in console.
       */


// Suddivido il problema in piccoli problemi:
/**
 *
 * DONE   -  implementare due input e un bottone nell'HTML
 * TODO   -  Faccio funzionare il bottone :
 * DONE         -  recupero il bottone
 * TODO         -  inserisco un eventListener sul bottone selezionato
 * TODO         -  apro un pop-up (alert) ad ogni click
 *
 * TODO   -  Mostro su schermo quello che i due input hannno all'interno
 *
 * TODO   -  Sostiuisco la funzione che mostra sullo schermo i valori con i calcoli     richiesti.
 *
 */

const button = document.querySelector('a.btn.btn-lg.btn-primary');
console.log(button);

const distanceElement = document.getElementById('distance');
const ageElement = document.getElementById('age');

button.addEventListener("click", function(){
   const prezzoPerKm = .2762;

   const distance = parseInt(distanceElement.value);
   const age = parseInt(ageElement.value);

   let price = prezzoPerKm * distance;

   if ( age < 18 ){
      price = price * 0.8;
   } else if ( age >= 65 ){
      price = price * 0.6;
   }

   document.getElementById('output').innerHTML = `Il costo del biglietto è: ${price}&euro;`;

});

