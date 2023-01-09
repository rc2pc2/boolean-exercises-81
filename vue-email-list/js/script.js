
// creo una nuova istanza di Vue nella variabile createApp
const { createApp } = Vue;

// popoliamo la nostra istanza di Vue con i dati che vogliamo inserire
createApp({
    data() {
        return {
            emailList: [],
        }
    },

    methods: {
    },

    mounted(){
        for (let index = 0; index < 100; index++) {
            console.log(index);
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((result) => {
                console.log(result.data.response);
                // console.log(this)
                this.emailList.push(result.data.response);
            });
        }
    }


}).mount('#app');

