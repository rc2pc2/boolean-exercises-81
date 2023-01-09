
// creo una nuova istanza di Vue nella variabile createApp
const { createApp } = Vue;

// popoliamo la nostra istanza di Vue con i dati che vogliamo inserire
createApp({
    data() {
        return {
            randomPlayerNumber : null,
            randomAINumber : null,
        }
    },

    methods: {
    },

    mounted(){

        setTimeout(()=> {

            axios.get('https://flynn.boolean.careers/exercises/api/random/int')
            .then((response) => {
                console.log(response.data.response);
                console.log(this)
                this.randomPlayerNumber = response.data.response;
            });

            axios.get('https://flynn.boolean.careers/exercises/api/random/int')
            .then((response) => {
                console.log(response.data.response);
                console.log(this)
                this.randomAINumber = response.data.response;
            })
        },
            2000
        )

    }


}).mount('#app');

