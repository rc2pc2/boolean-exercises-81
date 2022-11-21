
// const giorno = parseInt( prompt ('Inserisci il numero del giorno odierno') );

// // verifico che siamo oltre la metà del mese
// // nel caso in cui io sia oltre la metà del mese
//    // manca poco a natale!
// // altrimenti
//    // manca ancora troppo a natale!

// if ( (giorno > 15) && (giorno <= 30) ) {
//    console.log('Manca poco a natale!');
// } else {
//    console.log('Manca ancora troppo a natale!');
// }

/**
 * Chiediamo all'utente due parole in successione.
   Andiamo poi a verificare quale delle due parole
   sia più lunga e stampiamo in console un messaggio appropriato.
 */

   // const parolaUno = prompt('Inserisci una parola');
   // const parolaDue = prompt('Inserisci un\'altra parola');

   // console.log(parolaUno.length, parolaDue.length);
   // se parola1.length > parola2.length
   //

   // let risposta = 'La parole sono lunghe ugualmente';

   // if (parolaUno.length > parolaDue.length){
   //    risposta = 'La prima parola è la più lunga';
   // } else if ( parolaDue.length > parolaUno.length ) {
   //    risposta = 'La seconda parola è la più lunga';
   // }

   // document.getElementById('output').innerHTML = risposta;

/**
 * chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 9.
 *
 * Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer.
 *
 * Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari.
 *
 *
 */

// Chiedo all'utente pari o dispari
const oddOrEven = prompt('pari o dispari?');

if ( (oddOrEven != 'pari') && (oddOrEven != 'dispari')) {
   console.error('MALISSIMO!');
   alert('MALISSIMO!');
}

// Chiedo all'utente un numero tra 1 e 9
let userNumber = parseInt( prompt('inserisci un numero da 1 a 9') );
if (  (userNumber > 9) || (userNumber < 1)) {
   console.error('MALISSIMO! Genero io un numero a caso per te (così impari)');
   userNumber = Math.floor(Math.random() * 9) + 1;
   console.log('Per l\'utente è stato generato questo numero: ' + userNumber);
}

// Genero un numero tra 1 e 9
const randomNumber = Math.floor(Math.random() * 9) + 1;

console.log('Io ho scelto questo numero: ' + randomNumber);

// Sommo i due numeri
const sum = userNumber + randomNumber;

// Preparo una variabile per il contenuto del risultato
let result;

// DIVIDO SOMMA PER 2, prendo il resto.
if ( sum % 2 === 0){
   result = 'pari';
} else {
   result = 'dispari';
}

console.log('Il risultato è ' + result +', essendo la somma dei nostri due numeri ' + sum);

// Verifico chi ha vinto
if ( result == oddOrEven ){
   console.log('HAI VINTO!!11!111!1!111!')
} else {
   console.log('Ho vinto io, tiè!')
}

