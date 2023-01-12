<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    name: 'AppHeader',
    data(){
        return{
            store,
            apiUrl : 'https://rickandmortyapi.com/api/character',
        }
    },

    methods:{
        getCharacters(page = 1){
            // recupero attraverso una chiamata AJAX i personaggi di rick & morty
            // console.log('chiamata axios');
            axios.get(this.apiUrl, {
                params: {
                    page: page
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
    },

    created(){
        this.getCharacters();
    }

}
</script>

<template>
    <div>
        <!-- <label for="searchField">Inserisci la tua ricerca</label>
        <input type="text" name="searchField" id="searchField" v-model="store.searchText"> -->
    </div>
</template>

<style lang="">

</style>