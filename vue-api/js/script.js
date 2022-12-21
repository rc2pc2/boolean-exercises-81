
// creo una nuova istanza di Vue nella variabile createApp
const { createApp } = Vue;

// popoliamo la nostra istanza di Vue con i dati che vogliamo inserire
createApp({
    data() {
        return {
            randomNumber : null,
        }
    },

    methods: {
        generateRandomNumber(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/int')
            .then((response) => {
                console.log(response.data.response);
                console.log(this)
                this.randomNumber = response.data.response;
            })
            .catch(  function(error){
                console.warn(error)        // se non trovo che faccio?
            })
            .then(() => {
                // fallo sempre
            });
        }
    },

    created(){
        this.getRandomNumber();
    }


}).mount('#app');

