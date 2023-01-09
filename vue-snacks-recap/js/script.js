/**
 *
 *
 *  Data un'api che genera una parola randomica, generare una frase con il numero di parole richieste dall'utente
 *
 * */


// creo una nuova istanza di Vue nella variabile createApp
const { createApp } = Vue;

// popoliamo la nostra istanza di Vue con i dati che vogliamo inserire
createApp({
    data() {
        return {
            sentence: '',
            userNumber : '',
            apiUrl : "https://flynn.boolean.careers/exercises/api/random/word"
        }
    },

    methods: {
        generateSentence(numberOfWords){
            this.sentence = "";
            for (let index = 0; index < numberOfWords; index++) {
                axios.get(this.apiUrl)
                .then((result) => {
                    console.log(result.data.response);
                    this.sentence += result.data.response + ' ';
                });
            }
        }
    },

}).mount('#app');

