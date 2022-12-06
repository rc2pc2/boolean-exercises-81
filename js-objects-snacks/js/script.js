/**
 *
 * 1.** Creare un oggetto che descriva una studentessa o uno studente, con le seguenti proprietà: `nome`, `cognome` e `età`.
2.** Stampare a schermo attraverso un ciclo `for-in` tutte le proprietà dell'oggetto.
3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte) e mostriamoli.
 */


// // const students = [
// //    {
// //       firstName : 'Luigina',
// //       lastName : 'Luigetti',
// //       age : 19
// //    },
// //    {
// //       firstName : 'Mario',
// //       lastName : 'Bros',
// //       age : 90
// //    },
// //    {
// //       firstName : 'Giggio',
// //       lastName : 'Giarini',
// //       age : 91
// //    },

// // ];

// // for ( let key in student ){
// //    console.log(student[key]);
// // }

// // console.log(students);

// // for (let i = 0 ; i < students.length ; i++){
// //    console.log(students[i]);
// // }


// /**
//  *
//    Crea un array composto da 10 automobili.
//    Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

//    Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
//     
//    Infine stampa separatamente i 3 array.

//  *
//  */


// const automobiles = [
//    {
//       marca: "mercedes",
//       modello: "fuoriserie",
//       alimentazione: "benzina"
//    },
//    {
//       marca: "hyundai",
//       modello: "berlina",
//       alimentazione: "diesel"
//    },
//    {
//       marca: "opel",
//       modello: "utilitaria",
//       alimentazione: "metano"
//    },
//    {
//       marca: "honda",
//       modello: "utilitaria",
//       alimentazione: "benzina"
//    },
//    {
//       marca: "chevrolet",
//       modello: "fuoriserie",
//       alimentazione: "diesel"
//    },
//    {
//       marca: "renault",
//       modello: "berlina",
//       alimentazione: "elettrica"
//    },
//    {
//       marca: "toyota",
//       modello: "utilitaria",
//       alimentazione: "benzina"
//    },
//    {
//       marca: "citroen",
//       modello: "berlina",
//       alimentazione: "elettrica"
//    },
//    {
//       marca: "bmw",
//       modello: "fuoriserie",
//       alimentazione: "gpl"
//    },
//    {
//       marca: "audi",
//       modello: "fuoriserie",
//       alimentazione: "metano"
//    }
// ];


// const gasAutos = [];
// const dieselAutos = [];
// const otherAutos = [];

// for ( let i = 0 ; i < automobiles.length ; i++){
//    const currentAuto = automobiles[i];
//    if (currentAuto.alimentazione === 'benzina'){
//       gasAutos.push(currentAuto);
//    } else if (currentAuto.alimentazione === 'diesel') {
//       dieselAutos.push(currentAuto);
//    } else {
//       otherAutos.push(currentAuto);
//    }
// }

// console.log(gasAutos, dieselAutos, otherAutos);

/**
 *
 * Crea 10 oggetti che rappresentano una zucchina,
 * indicandone per ognuno varietà, peso e lunghezza.
 *
 * Calcola quanto pesano tutte le zucchine.
 *
 */

//  const zucchineList = [
//       {
//    type : 'Romana',
//    weight : 10,
//          size : 1.50
//       },
//       {
//    type : 'Siciliana',
//    weight : 80,
//          size : 6.50
//       },
//       {
//    type : 'Africana',
//    weight : 0.99,
//          size : 1.90
//       },
//       {
//    type : 'Francese',
//    weight : 0.10,
//          size : 0.20
//       },
//       {
//    type : 'Inglese',
//    weight : 8.10,
//          size : 5.20
//       },
//       {
//          type : 'Milanese',
//          weight : 20,
//          size : 1.20
//       },
//       {
//          type : 'Norvegese',
//          weight : 3,
//          size : 1.23
//       },
//       {
//          type : 'Pugliese',
//          weight : 20,
//          size : 5.23
//       },
//       {
//          type : 'Napoletana',
//          weight : 8,
//          size : 2.23
//       },
//       {
//          type : 'Americana',
//          weight : 100,
//          size : 10.23
//       },
//       {
//          type : 'Americana',
//          weight : 10310,
//          size : 1022.23
//       },
//       {
//          type : 'Americana',
//          weight : 0,
//          size : 0
//       },
//    ];

//    let pesoTotale = 0 ;
//    let lunghezzaTotale = 0 ;


//    for (let i = 0 ; i < zucchineList.length ; i++){
//       pesoTotale = pesoTotale + zucchineList[i].weight;
//       lunghezzaTotale += zucchineList[i].size;
//    }

//    console.log(pesoTotale);
//    console.log(pesoTotale / zucchineList.length);
//    console.log(lunghezzaTotale);
//    console.log(lunghezzaTotale / zucchineList.length);



// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:

// [
//   { nome: ‘leone’, famiglia: ‘felidi’, classe: ‘mammiferi’ },
//   { nome: ‘cane’, famiglia: ‘canidi’, classe: ‘mammiferi’ },
//   { nome: ‘gallina’, famiglia: ‘fasianidi’, classe: ‘uccelli’ },
// ]

// Crea un nuovo array con la lista dei mammiferi.
// Bonus 1 : trasforma ogni valore di ogni animale in tutto maiuscolo tranne la prima lettera, tipo // leone => lEONE, canidi => cANIDI


// const animali = [
//    {
//      nome : "leone",
//      famiglia : "felidi",
//      classe: "mammiferi"
//    },
//    {
//      nome : "cane",
//      famiglia : "canidi",
//      classe: "mammiferi"
//    },
//    {
//      nome : "gallina",
//      famiglia : "fasianidi",
//      classe: "uccelli"
//    },
//    {
//      nome : "leone",
//      famiglia : "felidi",
//      classe: "mammiferi"
//    },
//    {
//      nome : "cane",
//      famiglia : "canidi",
//      classe: "mammiferi"
//    },
//    {
//      nome : "gallina",
//      famiglia : "fasianidi",
//      classe: "uccelli"
//    },
//    {
//      nome : "leone",
//      famiglia : "felidi",
//      classe: "mammiferi"
//    },
//    {
//      nome : "cane",
//      famiglia : "canidi",
//      classe: "mammiferi"
//    },
//    {
//      nome : "gallina",
//      famiglia : "fasianidi",
//      classe: "uccelli"
//    },
//    {
//      nome : "leone",
//      famiglia : "felidi",
//      classe: "mammiferi"
//    },
//    {
//      nome : "cane",
//      famiglia : "canidi",
//      classe: "mammiferi"
//    },
//    {
//      nome : "gallina",
//      famiglia : "fasianidi",
//      classe: "uccelli"
//    },
//  ];

// const mammiferi = animali.filter( (animale) => animale.classe === 'mammiferi' );

// console.log(mammiferi);

// const nuoviMammiferi = mammiferi.map( (mammifero) => {
//    mammifero.nome = mammifero.nome.toUpperCase();
//    return mammifero;
// });

// console.log(nuoviMammiferi);

/***
 *
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un'età, creiamone almeno una decina.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

 */

const peopleList = [
   { firstname: 'jessico', lastname: 'calcetto', age: 20 },
   { firstname: 'lello', lastname: 'sanna', age: 23 },
   { firstname: 'andrea', lastname: 'berti', age: 30 },
   { firstname: 'ciccio', lastname: 'pasticcio', age: 26 },
   { firstname: 'carmela', lastname: 'unali', age: 16 },
   { firstname: 'annalauro', lastname: 'padel', age: 21 },
   { firstname: 'pietro', lastname: 'sanna', age: 14 },
   { firstname: 'andrea', lastname: 'berti', age: 30 },
   { firstname: 'paolo', lastname: 'pasticcio', age: 26 },
   { firstname: 'uga', lastname: 'estetista', age: 36 },
];

const newPeopleList = peopleList.map((person) =>{
   const isMaggiorenne = person.age >= 18;
   return ` ${person.firstname} ${person.lastname}, ${isMaggiorenne ? 'può guidare' : 'non può guidare' }`;
})

console.log(newPeopleList);