<script>

import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

export default{

  data(){
    return{
    }
  },

  components:{
    AppHeader,
    AppMain
  },

}

</script>

<template>

  <header>
    <AppHeader />
  </header>

  <main>
    <AppMain />
  </main>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;
@use 'bootstrap/scss/bootstrap.scss' as *;

main{
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

</style>
