<script>
import { store } from '../store.js';
import CharactersList from './CharactersList.vue';
import LoaderComponent from './LoaderComponent.vue';

export default {
    name: 'AppMain',
    components:{
        CharactersList,
        LoaderComponent
    },
    data(){
        return{
            store,
        }
    },

    methods:{
    },
}
</script>

<template>
    <section class="container characters-list">
        <div class="row justify-around">
            <LoaderComponent v-if="store.charactersList.length === 0"/>
            <CharactersList v-else/>
        </div>
    </section>
</template>

<style lang="scss" scoped>
</style>