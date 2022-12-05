// const array = [ 'c', 'v', 'b'];

// const obj = {
//    'chiave' : 33,
//    chiave : 'valore',
// };

// obj['chiave'] || obj.chiave

/**
 * 2 Modi per accedere al valore di un oggetto letterale:
 *
 * // § dot notation => palla.tipo
 * // ? square brackets notation => palla['chiave-primaria']
 *
 */


// const studentessa = {
//    classe : {
//       nome: '81',
//       inizio: '2021',
//       numero_studenti : 37
//    },
//    nome : 'Franceschina',
//    cognome: 'Luigini',
//    eta : 33
// };

// studentessa.anno = 2;

// studentessa.nome += ' Luigina';

// console.log(studentessa);

// for (let chiave in studentessa){
//    console.log(chiave, ': ', studentessa[chiave]);
// }

// const mainEl = document.querySelector('main');

// for (let key in mainEl){
//    console.log(key, ' => ' , mainEl[key]);
// }

const array = ['lollo', 'superlollo'];

const classi =[
   ['giggi', 'giangiggi'],
   ['giaduzza', 'giangiaduzza'],
];

console.log(classi[1][1]);

const animale = {
   name: 'gino',
   age : 2,
   toys: [ 'square puppet', 'toystory puppet'],
   race : {
      'name' : 'dobberman-pinscher' ,
      'age' : 150,
      'skills-list' : ['defensive', 'good', 'mansuet']
   }
};

console.log(animale.race.skills[2]); // mansuet