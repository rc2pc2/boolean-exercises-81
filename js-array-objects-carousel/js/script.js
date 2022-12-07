const images = [
   {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
   },
   {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
   },
   {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
   },
   {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
   },
   {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
   }
];


// recupero i parent all'iterno dei quali voglio inserire i miei contenuti
const carouselWrapper = document.querySelector('div.carousel-image');
const thumbnailsWrapper = document.querySelector('div.carousel-thumbnails');

// inizializzo una variabile che abbia lo scopo di indicizzare la slide attiva
let activeIndex = 3;

// facoltativo: creo un attributo custom da inserire nelle thumbnail
const attributeName = "data-index";

// ciclo per ogni oggetto letterale (slide) presente nei dati ricevuti
images.forEach((slide, index) => {

   // aggiungo la singola slide al parent
   carouselWrapper.innerHTML += `
      <div class="my_carousel-item">
         <img src="${slide.image}" alt="${slide.title}'s image" >
         <h3>${slide.title}</h3>
         <p>${slide.text}</p>
      </div>`;


   // creo una thumbnail e le attribuisco tutte le caratteristiche necessarie
   const newThumbnail = document.createElement('div');
   newThumbnail.className = 'my_thumbnail-item';
   newThumbnail.setAttribute(attributeName, index);
   newThumbnail.innerHTML = `<img src="${slide.image}" alt="${slide.title}'s image">`;



   newThumbnail.addEventListener('click', function(){
      activeIndex = changeSlide(index);
   });

   // la aggiungo al parent
   thumbnailsWrapper.appendChild(newThumbnail);
});

// attribuisco alla slide di partenza la classe active per renderla visibile, stesso discorso per la relativa thumbnail
document.getElementsByClassName('my_carousel-item')[activeIndex].classList.add('active');
document.getElementsByClassName('my_thumbnail-item')[activeIndex].classList.add('active');

// recuperiamo il bottone previous
const prevButton = document.querySelector('div.button.previous');

// gli aggiungiamo una funzione anonima di callback per ogni click
prevButton.addEventListener(('click'), function(){
   // decrementa l'indice attivo
   activeIndex = (activeIndex <= 0) ? images.length - 1 : activeIndex - 1;

   // cambia la slide al nuovo indice attivo
   changeSlide(activeIndex);
});

// recuperiamo il bottone next
const nextButton = document.querySelector('div.button.next');

// gli aggiungiamo una funzione anonima di callback per ogni click
nextButton.addEventListener(('click'), function(){
   // incrementa l'indice attivo
   activeIndex = (activeIndex >=  images.length - 1) ? 0 : activeIndex + 1;

   // cambia la slide al nuovo indice attivo
   changeSlide(activeIndex);
});

/**
 * Changes the current slide with the new given one.
 *
 * @param elementToShow The index of the new active element
 * @returns The index of the new active element
 */
function changeSlide(elementToShow){
   // seleziono e rimuovo l'elemento attivo sia tra le slide che tra le thumbnails
   document.querySelector('div.my_carousel-item.active').classList.remove('active');
   document.querySelector('div.my_thumbnail-item.active').classList.remove('active');

   // seleziono e rendo il nuovo elemento attivo sia tra le slide che tra le thumbnails
   document.getElementsByClassName('my_carousel-item')[elementToShow].classList.add('active');
   document.getElementsByClassName('my_thumbnail-item')[elementToShow].classList.add('active');

   return elementToShow;
}