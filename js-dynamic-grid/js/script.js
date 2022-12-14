

// § 1 - recupero il parent
const gridContainer = document.querySelector('div.grid');
// console.log(gridContainer);

// § 1.5 per ogni elemento dei 64 che voglio creare
for (let  i = 0 ; i < 49 ; i++){

   const newSquare = getMeANewSquare();

   // § 4 - aggiungo il div al parent
   gridContainer.appendChild(newSquare);
}

// funzione per creare un quadrato
function getMeANewSquare(){
   // § 2 - creo il div
   const newSquare = document.createElement('div');

   // § 3 - gli attribuisco le proprietà che voglio
   newSquare.classList.add('square');

   // ? 3.1 - tra le quali un comportamento sul click
   newSquare.addEventListener("click", function(){
      newSquare.classList.toggle('clicked');
   });

   return newSquare;
}