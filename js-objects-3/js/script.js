// const students = ['Paolo', 'Giulia', 'Marco'];


// // § element ? => 1 'Paolo',  2 'Giulia', 3 'Marco'
// // § index ? => 0, 1 , 2
// // § array ? => students
// students.forEach((element, index, array) => {
//    console.log(element);
// });



const members = [
   {
      name : 'Wayne Barnett',
      role : 'Founder & CEO',
      img : 'wayne-barnett-founder-ceo.jpg'
   },
   {
      name : 'Angela Caroll',
      role : 'Chief Editor',
      img : 'angela-caroll-chief-editor.jpg'
   },
   {
      name : 'Walter Gordon',
      role : 'Office Manager',
      img : 'walter-gordon-office-manager.jpg'
   },
   {
      name : 'Angela Lopez',
      role : 'Social Media Manager',
      img : 'angela-lopez-social-media-manager.jpg'
   },
   {
      name : 'Scott Estrada',
      role : 'Developer',
      img : 'scott-estrada-developer.jpg'
   },
   {
      name : 'Barbara Ramos',
      role : 'Graphic Designer',
      img : 'barbara-ramos-graphic-designer.jpg'
   },
];

// for (let i = 0 ; i < members.length ; i++){
//    console.log(members[i]);
// }

// members.forEach((el, index) => {
//    console.log(index);
// })

// const nomi = ['gino', 'gina', 'ginetto', 'ginuccio'];
// const nuoviNomi = nomi.map((nome) => {
//    return 'Nome: ' + nome;
// });
// console.log(nuoviNomi);


const zucchineList = [
   {
type : 'Romana',
weight : 10,
      size : 1.50
   },
   {
type : 'Siciliana',
weight : 80,
      size : 6.50
   },
   {
type : 'Africana',
weight : 0.99,
      size : 1.90
   },
   {
type : 'Francese',
weight : 0.10,
      size : 0.20
   },
   {
type : 'Inglese',
weight : 8.10,
      size : 5.20
   },
   {
      type : 'Milanese',
      weight : 20,
      size : 1.20
   },
   {
      type : 'Norvegese',
      weight : 3,
      size : 1.23
   },
   {
      type : 'Pugliese',
      weight : 20,
      size : 5.23
   },
   {
      type : 'Napoletana',
      weight : 8,
      size : 2.23
   },
   {
      type : 'Americana',
      weight : 100,
      size : 10.23
   },
   {
      type : 'Americana',
      weight : 10310,
      size : 1022.23
   },
   {
      type : 'Americana',
      weight : 0,
      size : 0
   },
];

// § const zucchineLeggere = zucchineList.filter((zucchina) => zucchina.weight < 10);

const zucchineLeggere = zucchineList.filter((zucchina) => {
   if (zucchina.weight <= 10){
      return true;
   }
   return false;
});

console.log(zucchineLeggere);