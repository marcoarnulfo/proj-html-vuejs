<script>
import {store} from './store.js';
import AppHeader from './components/AppHeader.vue';
export default {
  name: 'App',
  data(){
    return{
      store,
    }
  },
  components:{
    AppHeader,
  }
}
</script>

<template>

  <AppHeader/>
<!-- /#site_header -->

<main id="site_main">

</main>
<!-- /#site_main -->
<footer id="site_footer">

</footer>
<!-- /#site_footer -->
</template>

<style lang="scss" scoped>

</style>
