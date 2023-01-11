<script>
import { store } from '../store.js';
import AppCharacter from './AppCharacter.vue';
import AppLoader from './AppLoader.vue';

export default {
    name: 'AppMain',
    components:{
        AppCharacter,
        AppLoader
    },
    data(){
        return{
            store,
            isLoading : true,
        }
    },

    methods:{
        stopLoader(){
            this.isLoading = false;
        }
    },

    created(){
        setTimeout(this.stopLoader, 2000);
    }

}
</script>

<template>
    <section class="container characters-list">
        <div class="row justify-around">
            <AppLoader v-if="store.charactersList.length === 0"/>
            <AppCharacter  v-else v-for="characterEl in store.charactersList"
            :character="characterEl" class="col-6 col-md-5 col-lg-2 mb-2"/>
        </div>
    </section>
</template>

<style lang="scss" scoped>
</style>