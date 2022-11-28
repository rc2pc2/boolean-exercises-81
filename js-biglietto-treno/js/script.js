/**
 *
 * Descrizione:
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero o della passeggera.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    - il prezzo del biglietto è definito in base ai km (0.21 € al km)
    - va applicato uno sconto del 20% per i minorenni
    - va applicato uno sconto del 40% per gli over 65.


L'output del prezzo finale va emesso (presentato all'utente) in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
 */

const prezzoPerKm = .21;

// Prompt all'utente con chilometri
const distance = parseInt(prompt('Inserisci i chilometri da percorrere'));

// Prompt all'utente con età
const age = parseInt(prompt('Inserisci l\'età della passeggera o del passeggero'));

// calcoliamo il prezzo:
    //  età < 18 ? 20% di sconto
    //  età >= 65 ? 40% di sconto

let price = prezzoPerKm * distance;

if ( age < 18 ){
    price = price * 0.8;
} else if ( age >= 65 ){
    price = price * 0.6;
}

// tagliamo il numero a due cifre e lo restituiamo su schermo
document.getElementById('output-one').innerHTML = `Il prezzo del biglietto è di ${price.toFixed(2)}&euro;`;

