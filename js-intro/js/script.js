
// document.writeln('Ciao Boolean!');
// console.log('Ciao Boolean!');

// document.getElementById('output').innerHTML = "Sciao beli";

// ? dichiarazione della variabile "variabile"
// let variabile;

// § assegnazione della variabile "variabile" al valore 10
// variabile = 10;

// // # inizializzazione della variabile "variabile" con valore 10
// let variabile = 10;

// // # inizializzazione della variabile "variabile" con valore 10
// const variabileCostante = 'ciao';

// console.log('Giada è curiosa');
// console.log(variabile);
// console.log(variabileCostante);

// // ! Posso usare una variabile e riassegnarla SE E SOLO SE => è STATA GIA' DICHIARATA
// variabile = 5;

// console.log(variabile);


// let stringa;

// console.log(stringa);

// stringa = null;

// console.log(stringa);

// let nome = "L\'Alberto";
// let numero = prompt('Inserisci un numero');

// // let nomeCompleto = nome + " " + numero;

// let nomeCompleto = `${nome} ${numero}`;

// console.log(nomeCompleto);

// let addendo = 55;
// let secondoAddendo = 66;

// let somma = addendo + secondoAddendo;
// console.log(somma);


// let isWindowOpen = true;
// console.log(isWindowOpen);

// isWindowOpen = false;
// console.log(isWindowOpen);
// //

// isWindowOpen = !isWindowOpen;
// console.log(isWindowOpen);

// const userAge = parseInt( prompt('Inserisci quanti anni hai') );

// const actualYear = 2022;
// const dateOfBirth = actualYear + userAge;

// // ? COME SOVRASCRIVERE TUTTO IL CONTENUTO DEL PRIMO ELEMENTO HTML CON ID 'output' NEL DOCUMENTO
// document.getElementById('output').innerHTML = "L'utente è nata/o nel " + dateOfBirth;

// const userName = prompt('Ciao! Come ti chiami? BENVENUTO A THE CLUB');


// document.getElementById('salutations').innerHTML = 'Ciao ' + userName +', è un piacere averti qui con noi!';
// console.log(userName);

console.warn(typeof NaN)

/**
 *  Descrizione:
 *
    Chiedi all’utente il suo nome,
    poi chiedi il suo cognome,
    poi chiedi il suo colore preferito
    Infine scrivi sulla pagina nomecognomecolorepreferito22
 *
 */


    /**
     *
     *
        A    -      chiedo all'utente il suo nome
        B    -      poi chiedi il suo cognome,
        C    -      poi chiedi il suo colore preferito
        D    -      scrivi sulla pagina nomecognomecolorepreferito22:
            D1  -   concateno le tre stringhe inserite dall'utente in una stringa unica
            D2  -   inserisco in pagina la stringa concatenata
                Da  -   recupero l'elemento in cui inserire la mia stringa
                Db  -   inserisco la stringa come contenuto esclusivo dell'elemento appena recuperato

     */

    const userName = prompt('Please type your first name here');

    const userSurname = prompt('Please type your last name here');

    const userColor = prompt('Please type your favourite color here');

    // const insecurePassword = userName + userSurname + userColor + 22;
    const insecurePassword = `${userName}${userSurname}${userColor}22`;

    console.log(insecurePassword);
    document.getElementById('salutations').innerHTML = insecurePassword;


