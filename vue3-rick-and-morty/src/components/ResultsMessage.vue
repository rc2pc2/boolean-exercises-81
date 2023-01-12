<script>
import { store } from '../store.js';
export default {
        name: 'ResultsMessage',
        data(){
            return {
                store
            }
        }
}
</script>

<template>
    <section class="info-results">
        <pre v-if="store.charactersList.length > 0">
            I found {{ store.charactersList.length }} results.
        </pre>
    </section>
</template>


<style lang="">

</style>