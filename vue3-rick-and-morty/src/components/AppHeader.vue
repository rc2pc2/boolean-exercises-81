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
        <label for="searchField">Inserisci la tua ricerca</label>
        <input type="text" name="searchField" id="searchField" v-model.trim="searchText"
        @keyup.enter="$emit('search', searchText)"
        >
    </div>
</template>

<style lang="">

</style>