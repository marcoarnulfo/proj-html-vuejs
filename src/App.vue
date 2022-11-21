<script>
import {store} from './store.js';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  name: 'App',
  data(){
    return{
      store,
    }
  },
  components:{
    AppHeader,
    AppMain,
  }
}
</script>

<template>

<AppHeader/>
<!-- /#site_header -->
<AppMain/>
<!-- /#site_main -->
<footer id="site_footer">

</footer>
<!-- /#site_footer -->
</template>

<style lang="scss" scoped>

</style>
