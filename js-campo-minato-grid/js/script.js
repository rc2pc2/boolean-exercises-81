
const newGameButton = document.querySelector('a.btn');

newGameButton.addEventListener('click', function handler(){
   // § 1 - recupero il parent
   const gridContainer = document.querySelector('div.grid');
   // console.log(gridContainer);

   // § 1.1 - svuoto il parent se voglio che i click successivi generino una nuova partita
   gridContainer.innerHTML = "";

   const NUMBER_OF_CELLS = 121;
   const NUMBER_OF_BOMBS = 16;
   const bombsList = [];
   let isGameOver = false;
   let points = 0;

   const cellsPerRow = Math.sqrt(NUMBER_OF_CELLS);

   writeIntoElementById('user-score', 'Hai iniziato una nuova partita, clicca su una cella per fare un punto! ');

   for (let  i = 0 ; i < NUMBER_OF_BOMBS ; i++){
      bombsList.push(getRandomUniqueNumber(bombsList, 1, NUMBER_OF_CELLS));
   }

   console.warn(bombsList);

   // § 1.5 per ogni elemento dei 100 che voglio creare
   for (let  i = 1 ; i <= NUMBER_OF_CELLS ; i++){

      // § 2 - creo il div
      const newSquare = document.createElement('div');

      // § 3 - gli attribuisco le proprietà che voglio
      newSquare.classList.add('square', 'd-flex');

      newSquare.style.width = `calc( 100% / ${cellsPerRow})`;
      newSquare.style.height =  newSquare.style.width;

      // ? 3.1 - tra le quali un comportamento sul click
      newSquare.addEventListener("click", function(){
         if(!isGameOver){ // § se la partita è ancora in corso

            if (bombsList.includes(i)){
               // alert('BOOM');
               newSquare.classList.add('clicked', 'bomb');
               isGameOver = true; // § FINE DELLA PARTITA
               writeIntoElementById('user-score', 'BOOM! Partita terminata, il tuo punteggio è : ' + points);
            } else {

               if ( !newSquare.classList.contains('clicked')){
                  points++;
                  newSquare.classList.add('clicked');
                  console.log(points);
               }

               writeIntoElementById('user-score', 'Il tuo punteggio è : ' + points);
               // aggiungere un punto
               if ( points === NUMBER_OF_CELLS - NUMBER_OF_BOMBS ){
                  writeIntoElementById('user-score', 'HAI VINTO!! Il tuo punteggio è : ' + points);
                  isGameOver = true;
               }
            }

         } else { // § se la partita è finita, scrivi in console.
            console.log('Non puoi cliccare su altre celle, la partita è terminata');
         }
      });

      newSquare.innerHTML = `<span class="fs-4 m-auto"> ${i} </span>`;

      // § 4 - aggiungo il div al parent
      gridContainer.appendChild(newSquare);
   }

   // this.removeEventListener('click', handler);
});

function writeIntoElementById(elementId, content){
   document.getElementById(elementId).innerHTML = content;
}

// // § 1 - scorriamo la lista per dieci volte
// for (let i = 0 ; i < 10 ; i++){
//    // § 2 - genera un numero randomico, che vada da 0 alla lunghezza della lista startingList
//    const randomIndex = getRandomNumber(0, startingList.length - 1);

//    // § 3 - se l'elemento al posto randomIndex nella lista startingList non è già stato selezionato
//    if (!finalList.includes(startingList[randomIndex])){
//       // § 4a - Allora lo aggiungo alla nuova lista
//       finalList.push(startingList[randomIndex]);
//    }
//    // § 4b - altrimenti vado avanti con la ricerca
// }

// // ? 1 - finché la nuova lista non ha 10 elementi
// while(finalList.length < 10){

//    // ? 2 - genera un numero randomico (che sarà il mio indice), che vada da 0 alla lunghezza della lista startingList
//    const randomIndex = getRandomNumber(0, startingList.length - 1);
//    const randomElement = startingList[randomIndex];

//    // ? 3 - se l'elemento al posto randomIndex nella lista startingList non è già stato selezionato
//    if (!finalList.includes(randomElement)){
//       // ? 4a - Allora lo aggiungo alla nuova lista
//       finalList.push(randomElement);
//    }  // ? 4b - altrimenti vado avanti con la ricerca
// }


// console.log(finalList);

function getRandomNumber(numMin, numMax){
   if (numMin === numMax){
      return numMax;
   }

   return Math.floor( Math.random() * (numMax - numMin + 1) + numMin );
}


function getRandomUniqueNumber(blackList, min, max){
   let isValid = false;
   let randomNum;

   //  # finché non trovo un numero valido
   while ( isValid === false) {
      // # genero un nuovo numero randomico nell'intervallo richiesto
      randomNum = getRandomNumber(min, max);

      // # se non è un doppione
      if (!blackList.includes(randomNum)){
         // # ho trovato un nuovo numero randomico nella lista
         isValid = true;
      }
   }
   // # e lo restituisco
   return randomNum;
}