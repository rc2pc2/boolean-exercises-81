<script>
import { store } from '../store.js';

export default {
    name: 'SingleCharacter',
    props:{
        character : {
            type: Object,
            required: true
        }
    },

    data(){
        return{
            store,
        }
    },

}
</script>

<template>
    <article class="single-character col-6 col-md-4 col-lg-2 mb-2" :data-custom-id="character.id">
        <img :src="character.image" :alt="character.name" class="img-fluid">
        <h5 class="text-warning">{{ character.name }}</h5>
        <p>
            Status: {{ character.status }}
            Species: {{ character.species }}
        </p>
    </article>
</template>

<style lang="scss" scoped>
    article{
        font-size: 0.75rem;
    }

    h5{
        font-size: 0.85rem;
    }
</style>