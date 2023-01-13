<script>
export default {
    name: 'AppHeader',

    data(){
        return{
            searchText: '',
            selectedValue: '',
        }
    }
}
// ['Alien', 'Human', 'Humanoid']
</script>

<template>
    <div>
        <label for="searchField">Inserisci la tua ricerca</label>
        <input type="text" name="searchField" id="searchField" v-model.trim="searchText"
        @keyup.enter="$emit('search', selectedValue, searchText)"
        >
        <select class="form-select-lg mb-3"
                v-model="selectedValue"
                @change="$emit('search', selectedValue, searchText)"
            >
                <option value="">Seleziona ogni specie</option>
                <option value="Human">Seleziona solo umani</option>
                <option value="Humanoid">Seleziona solo umanoidi</option>
                <option value="Alien">Seleziona solo alieni</option>
            </select>

        </div>
    </template>

<style lang="">

</style>