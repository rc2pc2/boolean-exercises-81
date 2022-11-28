// // ? dichiaro un nuovo array con molte studentesse e studenti
// const classe  = [
//    'gina',
//    'lollo',
//    'andreo',
//    'luggina',
//    'bianca',
//    'elisabetta',
//    'gianna',
//    'lollo',
//    'andreo',
//    'luggina',
//    'bianca',
//    'elisabetta',
//    'gianna',
//    'luggina',
//    'bianca',
//    'elisabetta',
//    'gianna',
//    'lollo',
//    'andreo',
//    'luggina',
//    'bianca',
//    'elisabetta',
// ];

const email  = [
   'gino@gmail.com',
   'chebellesercizio@outlook.com',
   'comèpartecipativaclasse81neirecap@gmail.com',
   'sembraquasiunfilmmutoanni900@hotmail.it'
];


// // # recupero l'elemento HTML input in cui l'utente INSERIRA' il valore da cercare
// const inputNumberElement = document.getElementById('userNumber');

// // § recupero l'elemento HTML che l'utente PREMERA' quando vorrà generare un nuovo studente
// const userButtonElement = document.querySelector('a.btn');

// // ? Quando l'utente clicca
// userButtonElement.addEventListener('click', function(){
//    // | prendo il valore inserito dall'utente e tolgo 1
//    const userValue = parseInt(inputNumberElement.value) - 1;

//    // # se il numero è entro gli indici del nostro array classe allora
//    if ((userValue < classe.length) && (userValue > 0)){
//       // * scrivi nell'output lo studente o la studentessa al posto "userValue"
//       document.getElementById('output').innerHTML = classe[userValue];

//    // § se il numero è negativo, uguale a 0 o superiore agli studenti
//    } else {
//       // ? scrivi nell'output un messaggio base
//       document.getElementById('output').innerHTML = 'La classe non dispone di elementi oltre ai suoi ' + classe.length + ' studenti.';
//    }
// });


// Dato un array di numeri interi, stampiamo solo i numeri dispari

// 2 : generiamo un array con n numeri interi randomici


// const numbers = [];

// // ? FAMO PE QUARANTA VORTE
// for ( let i = 0 ; i < 70 ; i++ ){
//    const randomNumber = Math.floor(Math.random() * 5000);
//    numbers.push(randomNumber);
// }

// console.log(numbers);

// let somma = 0;

// for ( let i = 0 ; i < numbers.length ; i++){
//    if ( numbers[i] % 2 === 1 ){
//       somma++;
//    }
// }

// console.log(somma);
