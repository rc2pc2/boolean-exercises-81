<script>
import { store } from '../store.js';
import SingleCharacter from './SingleCharacter.vue';

export default {
    name: 'CharactersList',
    components:{
        SingleCharacter,
    },
    data(){
        return{
            store // <- qui dentro, prima devo accedere a store.nomeProprietàImmagazzinata
        }
    }

}
</script>

<template>
    <SingleCharacter
        v-for="singleCharacter in store.charactersList"
        :character="singleCharacter"/>
</template>