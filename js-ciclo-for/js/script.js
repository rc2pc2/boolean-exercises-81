
const calendarElement = document.getElementById('calendar');

for (let i = 1; i <= 28; i++ ) {
   calendarElement.innerHTML += `
   <div class="day">
      <h3>
         ${i}
      </h3>
   </div>
   `;
}

//   Prima esecuzione i = 0 => 0 < 3 => si => Eseguo il codice all'interno
//   Seconda esecuzione i = 1 => 1 < 3 => si => Eseguo il codice all'interno
//   Terza esecuzione i = 2 => 2 < 3 => si => Eseguo il codice all'interno
//   Quarta esecuzione i = 3 => 3 < 3 => no => Esco dal ciclo


//  ? PER VERIFICARE CHE UN NUMERO SIA DIVISIBILE PER UN ALTRO
//  ? prendo il primo numero % secondo numero === 0
//  ? 7 è divisibile per 2? 7 è un multiplo di 2?
//  # 7 % 2 ==> 1 ===> 7 NON E' DIVISBILE PER 2,
//  § un numero a per poter essere divisibile per un numero b,
//  § => (a % b) === 0;

/**
 * Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
 *
 */