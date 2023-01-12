<script>
export default {
    name: 'AppHeader',

    data(){
        return{
            searchText: ''
        }
    }
}
</script>

<template>
    <div>
        <a href="#" class="btn btn-primary" @click="$emit('prevPage')">Previous</a>
        <label for="searchField">Inserisci la tua ricerca</label>
        <input type="text" name="searchField" id="searchField" v-model="searchText"
        @keyup.enter="$emit('search', searchText)"
        >
        <a href="#" class="btn btn-primary" @click="$emit('nextPage')">Next</a>

    </div>
</template>

<style lang="">

</style>