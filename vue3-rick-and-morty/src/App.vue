<script>
import { store } from './store.js';
import axios from 'axios';

import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import ResultsMessage from './components/ResultsMessage.vue';

export default{
  data(){
        return{
            store,
            apiUrl : 'https://rickandmortyapi.com/api/character',
            prev: null,
            next: null,
        }
    },

    methods:{
        getCharacters(apiAddress){
            // recupero attraverso una chiamata AJAX i personaggi di rick & morty
            // console.log('chiamata axios');
            axios.get(apiAddress, {
                params: {
                    // page : page
                }
            })
            .then((response) => {
                console.log(response.data.results);
                // console.log(this);
                this.store.charactersList = response.data.results;
                this.prev = response.data.info.prev;
                this.next = response.data.info.next;
            })
            .catch(function (error) {
                console.warn(error);
            })
        },

        searchCharacter(){
          console.warn('Hai inviato la ricerca ');
        },
    },

    created(){
        this.getCharacters(this.apiUrl);
    },

  components:{
    AppHeader,
    AppMain,
    ResultsMessage
},

}

</script>

<template>
  <header>
    <AppHeader
        @prevPage="getCharacters(prev)"
        @nextPage="getCharacters(next)"
      />
  </header>

  <main>
    <AppMain />
    <ResultsMessage />
  </main>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;
@use 'bootstrap/scss/bootstrap.scss' as *;

main{
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}
</style>
