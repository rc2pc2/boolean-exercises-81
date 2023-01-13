<script>
export default {
    name: 'ContactsComponent',
    data() {
        return {
            selectedValue: 'Alien'
        }
    },
}
</script>

<template>
    <nav class="col-12">
        <ul>
            <li class="d-flex flex-column align-items-center">
                <button class="btn btn-warning"
                    @click="$emit('activateContactForm', selectedValue)">
                    Contact me!
                </button>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
    ul{
        list-style-type: none;
        text-align: center;
        padding-bottom: 4rem;
    }
</style>