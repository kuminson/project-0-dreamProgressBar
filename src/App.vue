<template>
    <router-view name="index"></router-view>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
    trystore:function(){
      return this.$store.state.trynum
    },
    trygetters:function(){
      return this.$store.getters.trygetter;
    }
  },
  methods:{
    ...mapMutations([
      'trymotation'
    ]),
    ...mapActions([
      'tryaction'
    ]),
    routerfoo:function(){
      this.$router.push('foo');
    }
  }
}
</script>

<style>

</style>
