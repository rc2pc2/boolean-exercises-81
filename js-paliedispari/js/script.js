
/**
 * > Palidroma
> Chiedere all’utente di inserire una parola:

    Creare una funzione per capire se la parola inserita è palindroma


> Pari e Dispari

    L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer attraverso una funzione.
    Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari attraverso un'altra funzione
    Dichiariamo chi ha vinto.

 *
 */

// 'ottetto'

function turnTheWord(word){
   if (word.length <= 1){
      return word;
   }

   let turnedWord = "";

   for ( let i = word.length - 1 ; i >= 0 ; i--){
      console.log(word.charAt(i));
      turnedWord += word.charAt(i);
   }

   return turnedWord;
}

function isPalindrome(word){
   if (word.toLowerCase() === turnTheWord(word).toLowerCase()){
      return true;
   }

   return false;
}

function oddOrEven(num){
   if (num % 2 === 0){
      return 'pari'
   }
   return 'dispari';
}

function getRandomNumber(numMin, numMax){
   if (numMin === numMax){
      return numMax;
   }

   return Math.floor( Math.random() * (numMax - numMin + 1) + numMin );
}

// const playerChoice = prompt('Pari o dispari?').toLowerCase().trim();
// console.log('L\'utente ha scelto ' + playerChoice);

// const playerNumber = parseInt(prompt('Inserisci un numero da 1 a 5'), 10);
// console.log('L\'utente ha scelto ' + playerNumber);

// const aINumber = getRandomNumber(1,5);
// console.log("L'IA ha scelto " + aINumber);

// const sum = playerNumber + aINumber;

// if (oddOrEven(sum) === playerChoice){
//    console.error('MISTAKES HAVE BEEN MADE');
// } else {
//    console.log('I AM THE ONLY ONE WHO CAN WIN');
// }


// a = 0;
// b = "buongiorno"
// var c = "ciao";

// function saluta(num) {
//    console.log(num);
// }

// saluta(a);.



/**
 * Crea due tag div con due id diversi.
 * Un div avrà il testo colorato di rosso mentre l’altro di verde.
 * Partendo da un array di numeri,
 * creiamo un nuovo elemento p e lo stampiamo nell’div rosso  se è un numero dispari
 * e nel div verde se è un numero pari.
 *
 *
 */

// const nums = [1,33,55,64,33,22,10,44, 55, 22,33,55,66,77,88,99, 40, 50];
// // funzione che crei un nuovo elemento <p> </p>
// // restituirlo a chi invoca la funzione
// //
// // ciclo per ogni elemento dell'array
// // se l'elemento è un numero pari, crei nuovo elemento e lo aggiungo al div verde
// // se l'elemento è un numero dispari, creo  nuovo elemento e lo aggiungo al div rosso

// function getNewElement(elementTag, content, classesToAdd){
//    const newP = document.createElement(elementTag);
//    newP.innerText = content;
//    newP.classList.add(classesToAdd);
//    return newP;
// }

// const divPari = document.getElementById('pari');
// const divDispari = document.getElementById('dispari');

// for ( let i = 0 ; i < nums.length ; i++){
//    //  per ogni elemento dell'array
//    if (nums[i] % 2 === 0){
//       divPari.appendChild(getNewElement('div',nums[i], 'font-red'));
//    } else {
//       divDispari.appendChild(getNewElement('h2',nums[i], 'font-blue'));
//    }
// }