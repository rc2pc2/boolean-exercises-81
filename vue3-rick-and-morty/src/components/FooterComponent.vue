<script>
import ContactsComponent from './ContactsComponent.vue';

export default {
    name: "FooterComponent",
    components:{
        ContactsComponent
    },
    methods:{
        // mioMetodo
        openContactForm(receivedData){
            alert('Hai selezionato: ' + receivedData);

        }
    }
}
</script>

<template lang="">
    <footer class="container">
        <section class="row navigation">
            <ContactsComponent @activateContactForm="openContactForm"/>
        </section>
    </footer>
</template>


<style lang="scss" scoped>

</style>