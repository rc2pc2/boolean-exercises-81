
// setTimeout(myFunction, 3000) ;

// let counter = 0;

// function myFunction() {
//    console.log('Hello');
//    if (counter > 20){
//       clearInterval(timerRipetuto);
//    }
//    counter++;
// }

// let timerRipetuto = setInterval( myFunction, 100);
// clearInterval(timerRipetuto)

// const userTime = parseInt( prompt( ' AO! Damme i secondi pe coce sti quattro righetoni '), 10);

// setTimeout( () => {
//    alert('AO! SCOLA STA PASTA!')
// }, userTime * 1000);



// console.log('ciaone');

// setTimeout(function(){
//    console.log('Evvai!');
// }, 5000);

// console.log('ciao');

// setTimeout(function(){
//    console.log('Evvai!');
// }, .1);

function newYear(){
   console.log();
}

let clock = setInterval(newYear, 1000);

setTimeout(function(){
   console.log('BUON ANNO!');
   clearInterval(clock);
}, 10000);

