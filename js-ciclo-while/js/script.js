

const lista = [
   'carote',
   'fagiolini',
   'peperoni',
   'latte',
   'motosega'
];

// for (let i = 0 ; i < lista.length ; i++){
//    // scorro la lista
// }

// let i = 0;
// while ( i < lista.length ){
//    // scorro la lista
//    i = i + 1;
// }


// let userAge = parseInt(prompt('inserisci la tua età'));
// // // 'ciao' => userAge =  NaN;
// while ( Number.isNaN(userAge) ) {
//       console.log('non è un numero, inserisci un numero');
//       userAge = parseInt(prompt('inserisci la tua età'));
// }


// let userAge;
// do {
//    userAge = parseInt(prompt('inserisci la tua età'));
// } while ( Number.isNaN(userAge) );


// Stampa le potenze di 2 fino a 1000.

// let power = 2;
// while ( power < 1000){
//    power *= 2;
//    console.log(power);
// }

// for ( let pw = 2 ; pw < 1000 ; pw = pw * 2){
//    console.log(pw);
// }


/**
 *
 * Generatore di persone fittizie casuali:
 * Il Grande Gatsby ha una lista di nomi e una lista di cognomi, da queste vuole generare una falsa lista di invitati con nome e cognome.
 *
 */

const names = [
   'Michela',
   'Giuseppina',
   'Taylor',
   'Donna',
   'Marsha',
   'Fabio',
   'Roberto',
   'Giada',
   'Donato',
   'Matteo',
   'Florian',
];

const lastNames = ['Cappelletti', 'Jager', 'Porcinelli' , 'Buffetti' , 'Forghieri', 'Papagni', 'Marazzini', 'Giallini', 'Robertozzi']

const guests = [];

//   for (let i = 0 ; i < 7 ; i++){
//       guests.push(`${names[i]} ${lastNames[i]}`  );
//   }

// Numero randomico tra due numeri
//  ? Math.floor( Math.random() * (max  + 1 )  );

// for ( let i = 0 ; i < Math.ceil(Math.random() * 15) + 4 ; i++){
//    const randomNamesIndex = Math.floor( Math.random() * (names.length));
//    const randomLastNamesIndex = Math.floor( Math.random() * (lastNames.length));

//    const guest = names[randomNamesIndex] + " " + lastNames[randomLastNamesIndex];

//    guests.push(guest);
// }

// while ( guests.length < 15){

//    const randomNamesIndex = Math.floor( Math.random() * (names.length));
//    const randomLastNamesIndex = Math.floor( Math.random() * (lastNames.length));

//    // recupera un elemento randomico di names => names [ indiceGeneratoRandomicamente ]
//    const guest = names[randomNamesIndex] + " " + lastNames[randomLastNamesIndex];

//    if ( guests.indexOf(guest) === -1 ){
//       guests.push(guest);
//    }
// }

// console.log(guests);

// const dayOfTheWeek = prompt('Inserisci il giorno odierno');

// switch (dayOfTheWeek) {
//    case "lunedì":
//       text = "Mannaggia è lunedì!";
//       break;
//    case "martedì":
//       text = "Okay, almeno non è lunedì!";
//       break;
//    case "mercoledì":
//          text = "Okay, siamo a metà dell'opera!";
//          break;
//    case "giovedì":
//       text = "Okay, dai che domani è venerdì!";
//       break;
//    case "venerdì":
//       text = "Okay, dai che inizia il weekend!";
//       break;
//    case "sabato":
//    case "domenica":
//       text = "Dai che è il weekend!";
//       break;
//    default:
//       text = "Non hai scritto un giorno!";
//    }

// console.log(text);




// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

// const numsList = [
//    1,25,42,33,36,37,41,47,22,12,645,213412,1324,1512
// ];

// let sum = 0;

// for ( let i = 0 ; i < numsList.length ; i++){
//    if( i % 2 === 1){
//       sum += numsList;
//    }
// }

// for ( let i = 1 ; i < numsList.length ; i+=2){
//    sum += numsList[i];
// }

// console.log(sum);

// ? array[indice] => array[2] => il terzo elemento dell'array, se esistente
// ! array.push(elemento)
// # array.includes(elementoDaCercare)
// § array.indexOf(elementoDaCercare) => l'indice, -1 se non lo trova