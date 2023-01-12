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
        }
    },

    methods:{
        getCharacters(searchedString){
            // recupero attraverso una chiamata AJAX i personaggi di rick & morty
            // console.log('chiamata axios');
            axios.get(this.apiUrl, {
                params: {
                    name : searchedString,
                }
            })
            .then((response) => {
                console.log(response.data.results);
                // console.log(this);
                this.store.charactersList = response.data.results;
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
        this.getCharacters();
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
        @search="getCharacters"
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
