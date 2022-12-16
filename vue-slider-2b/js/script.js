
// creo una nuova istanza di Vue nella variabile createApp
const { createApp } = Vue;

// popoliamo la nostra istanza di Vue con i dati che vogliamo inserire
createApp({
    data() {
        return {
            activeIndex : 0,
            imagesList : [
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
                }],
            autoplay : null,
        }
    },
    methods: {
        prevSlide: function(){
            this.activeIndex--;
            if (this.activeIndex < 0){
                this.activeIndex = this.imagesList.length - 1;
            }
        },

        nextSlide: function(){
            this.activeIndex++;
            if (this.activeIndex >= this.imagesList.length){
                this.activeIndex = 0;
            }
        },

        changeSlide: function(index){
            this.activeIndex = index;
        },

        startAutoplay: function(){
            if ( this.autoplay === null) {
                this.autoplay = setInterval( () => {
                    this.nextSlide();
                }, 1000 );
            } else {
                console.warn('Can\'t start a new autoplay, another one is already active!')
            }
        },

        stopAutoplay(){
            if ( this.autoplay !== null){
                clearInterval(this.autoplay);
                this.autoplay = null;
            } else {
                console.warn('There is nothing to stop!');
            }
        },
    },

    created(){
        this.startAutoplay();
    },

    updated(){
        console.log(this.activeIndex);
    }

}).mount('#app');
