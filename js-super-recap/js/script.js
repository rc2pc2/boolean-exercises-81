
// let numero = 22;
// let numeroStringato = "22";


// condizione = 15;

// nell'if devo essere sempre più specifico
// nella parte più alta delle mie verifiche
// e più generico nella parte bassa

// //  § se 15 è divisibile per 3 allora
//    if ( 15 % 3  == 0) {
//    // blocco di istruzioni 1
//    //  § se invece 15 è divisibile per 15 allora
//     } else if ( 15 % 15 == 0 ) {
//       // blocco di istruzioni 2
//    } else {
//    // blocco di istruzioni 3
//    }





//    if ( age < 50){

//    }

 /**
      L'utente inserisce un numero, con un prompt (ovvero l'età).
      Il software stampa se l'utente è maggiorenne, se è anziano (>65) o se è un bambino (<14), oppure se l'età non è valida.
    *
    */

   // const age = parseInt( prompt('Inserisci la tua età') );

   // if (Number.isNaN(age)){
   //    console.log('Non si accettano stringe');
   // } else if (age > 125){
   //    console.log('Età inverosimile, non puoi avere più di 125 anni!');
   // } else if (age > 65){
   //    console.log('sei anziano');
   // } else if ( age >= 18){
   //    console.log('Sei maggiorenne!');
   // } else if ( age >= 14 && age < 18){
   //    console.log('Sei un adolesciente');
   // } else if ( age > 0 && age < 14){
   //    console.log('Sei un bambino!');
   // } else {
   //    console.log('L\'età inserita non è valida!');
   // }


   // const sectionElement = document.getElementById('wrapper');

   // // sectionElement.className  = 'd-flex justify-center';
   // // sectionElement.classList.add('bg-white', 'd-flex');
   // // console.log(sectionElement.classList);

   // const newPElement = document.createElement('p');
   // newPElement.className = 'd-flex bg-red font-blue';
   // newPElement.innerHTML = 'Ciao io sono il tuo nuovo p';

   // sectionElement.append(newPElement);


   // const ulElement = document.querySelector('ul.list-group');

   // for ( let i = 0 ; i < 5 ;i++){

   //    const newListItem = document.createElement('li');
   //    newListItem.className = 'list-group-item';
   //    // newListItem.innerHTML += i;
   //    newListItem.append(i);

   //    ulElement.innerHTML += "<li class=\"list-group-item\">" +i+ "</li>";
   // }


   /**
    *
      Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.
    */

   // let somma = 0;

   // // ripeto questo ciclo per 10 volte
   // for (let i = 0 ; i < 10 ; i++){
   //    const userNumber = parseInt(prompt('Inserisci un altro numero'));
   //    if (! Number.isNaN(userNumber)) {
   //       somma += userNumber;
   //    }
   // }

   // console.log(somma);

   /**
    *
            * Chiedi all’utente la sua email,
            controlla che sia nella lista di chi può accedere,
         stampa un messaggio appropriato sull’esito del controllo.
    */


   const mailingList =
   [
      'gino@gmail.com',
      'nina@outlook.com',
      'luke@protonmail.com'
   ];


   let mailTrovata = false;
   const userMail = prompt('Inserisci la tua mail');

   for ( let i = 0 ;  i < mailingList.length ; i++){

      if (userMail == mailingList[i]){
         mailTrovata = true;
      }
   }

   if (mailTrovata){
      console.log('la mail è presente nella lista');
   } else {
      console.log('la mail non è presente nella lista');
   }



   /***
    *
    *
      In un array sono contenuti i nomi degli invitati
      alla festa del grande Gatsby,
      chiedi all’utente il suo nome e comunicagli
      se può partecipare o no alla festa.
    *
    */

const invitati = ['Michela', 'Fabbia', 'Deshaun', 'Luke', 'Beatrice'];
const nomeUtente = prompt('Inserisci il tuo nome');

let seiInvitato = false;

for (let i = 0 ; i < invitati.length ; i++) {
   if ( invitati[i] == nomeUtente) {
      seiInvitato = true;
   }
}

if (seiInvitato){
   console.log('Sei invitata o invitato');
} else {
   console.log('Mi spiace non sei invitato');
}

