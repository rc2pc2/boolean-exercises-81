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

// const names = [
//    'Michela',
//    'Giuseppina',
//    'Taylor',
//    'Donna',
//    'Marsha',
//    'Fabio',
//    'Roberto',
//    'Giada',
//    'Donato',
//    'Matteo',
//    'Florian',
// ];

// const lastNames = ['Cappelletti', 'Jager', 'Porcinelli' , 'Buffetti' , 'Forghieri', 'Papagni', 'Marazzini', 'Giallini', 'Robertozzi']

// const guests = [];

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

// § <li class="list-group-item"> Articolo </li>

// const shoppingCart = [
//    'ssd nvme',
//    'hdd 40tb',
//    'monitor oled 142\'\'',
//    '4x Nvidia 5090TI',
//    'case ATX',
//    'RBX 554s',
//    'SLL 36 Native',
//    'Nevica 88F',
//    'Motosega',
//    'Cera al lanciafiamme',
//    'case ATX',
//    'RBX 554s',
//    'SLL 36 Native',
//    'Nevica 88F',
//    'Motosega',
//    'Cera al lanciafiamme',
// ];

// const ulElement = document.querySelector('ul.list-group');


// for (let i = 0 ; i < shoppingCart.length ; i++){
//    const newLiElement = document.createElement('li');

//    // # alternativa newLiElement.className = "list-group-item"
//    newLiElement.classList.add('list-group-item');

//    // ? newLiElement.innerHTML = '<p>' + shoppingCart[i] + '</p>';
//    // § newLiElement.append(shoppingCart[i]);
//    newLiElement.innerText = shoppingCart[i];

//    ulElement.append(newLiElement);
// // }

// let index = 0;
// while (index < shoppingCart.length){

//    const newLiElement = document.createElement('li');

//    // # alternativa newLiElement.className = "list-group-item"
//    newLiElement.classList.add('list-group-item');

//    // ? newLiElement.innerHTML = '<p>' + shoppingCart[i] + '</p>';
//    // § newLiElement.append(shoppingCart[index]);
//    newLiElement.innerText = shoppingCart[index];

//    // Ruggero talks
//    ulElement.appendChild(newLiElement);

//    index++;
// }



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


// Prendere due array della stessa lunghezza e generarne un terzo, prendendo alternativamente gli elementi da uno e dall'altro es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

// const charsList = ['a', 'b', 'c', 'd', 'e'];
// const numsList = [1, 2, 3, 4, 5];

// const newList = [];

// for( let i = 0 ; i < charsList.length ; i++){
//    newList.push( charsList[i], numsList[i]);
// }


// console.log(newList);


// let variabile = getRandomNumber(0, 10);
// console.log(variabile);

function saluta(nomeUno, nomeDue){
   console.warn('ciao! ' + nomeUno);
   console.warn('ciao! ' + nomeDue);
}

/**
 * Function that return a random number between the given interval, inclusively
 */
function getRandomNumber(numMin, numMax){
   const randomNumber = Math.floor( Math.random() * (numMax - numMin + 1) + numMin );
   // ? return => restituisco il valore inserito dopo di me A CHIUNQUE INVOCHI CORRETTAMENTE questa funzione
   return randomNumber;
}

function isOdd(number){
   if (number % 2 === 1 ){
      return true;
   } else {
      return false;
   }
}

function isEven(number){
   if (number % 2 === 0 ){
      return true;
   } else {
      return false;
   }
}


// const userNumber = parseInt( prompt('inserisci un numero'));

// console.log(isEven(userNumber) );

/**
 * Crea una funzione che accetti due argomenti, e che restituisca un valore numerico randomico tra i due argomenti inclusi.
 */

function getRandomNumber(numMin, numMax){
   if (numMin === numMax){
      return numMax;
   }

   const randomNumber = Math.floor( Math.random() * (numMax - numMin + 1) + numMin );
   // ? return => restituisco il valore inserito dopo di me A CHIUNQUE INVOCHI CORRETTAMENTE questa funzione
   return randomNumber;
}


/**
 *
 * Crea una funzione che dato un array, calcoli la somma dei suoi elementi.
 *
 */

function getSumOfArrayElements(array){
   // la somma dei suoi elementi, se sono una stringa o non sono convertibili in un numero allora non li sommo.
   let sum = 0;

   // prendere ogni elemento dell'array
   for (let i = 0 ; i < array.length ; i++){
      // controllare se l'elemento è un numero aggiungibile
      const castedElement = parseInt(array[i], 10);

      if ( !Number.isNaN(castedElement) ){
         sum = sum + castedElement;
      }

   }

   return sum;
}

const list = ['0x51232f','2', '1', 10, 22, 33, 2];
const list2 = ['0x51232f','2', '1', 10, 22, 33, 2];
const numeri = [2,2,2,2,2,2,2,2,2,2,2];
const numeretti = [3,3,3,3,3,3,3,3,3,3,3];

console.log(getSumOfArrayElements(list));
console.log(getSumOfArrayElements(list2));
