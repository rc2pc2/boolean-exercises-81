// numeri da 1 a 100 ma che per
// - multipli di 3 => fizz
// - multipli di 5 => buzz
// - multipli di 3 e di 5 => multiplo di 15 => fizzbuzz
const mainElement = document.querySelector('section#wrapper');

for (let i  = 1; i <= 105; i = i + 1){
   // § creare un nuovo elemento HTML inserendo in createElement('nomeDelTagHTML')
   // # va SEMPRE salvato in una variabile
   const divElement = document.createElement('div');

   let word;
   let classToAdd;

   if ( i % 15 === 0){
      word = '<h3>Fizzbuzz</h3>';
      classToAdd = 'bg-orange'
   } else if ( i % 3 === 0){
      word = '<h3>Fizz</h3>'
      classToAdd = 'bg-red';
   } else if (i % 5 === 0) {
      word = '<h3>Buzz</h3>'
      classToAdd = 'bg-yellow';
   } else {
      word = '<h3>' + i+ '</h3>';
      classToAdd = 'day';
   }

   divElement.innerHTML = word;
   divElement.classList.add('day', classToAdd);

   divElement.addEventListener('click', function(){
      divElement.classList.toggle('active');
   });

   mainElement.append(divElement);
}

let numero = 22;
let numeroStringato = "22";

console.log(numero == numeroStringato);