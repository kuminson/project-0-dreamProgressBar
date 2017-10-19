<template>
    <router-view name="index"></router-view>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
// 引入axios ajax插件
import axios from 'axios';


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
      'trymotation',
      // 注入leancloud到vuex里
      'initLeancloud'
    ]),
    ...mapActions([
      'tryaction',
      // 获取用户对应的数据
      'getDreamData'
    ]),
    routerfoo:function(){
      this.$router.push('foo');
    }
  },
  mounted(){
    // 把leancloud注入vuex里
    this.initLeancloud(this.$AV);
    // 如果处在登录状态 加载数据
    if(this.$AV.User.current()){
      this.getDreamData();
    }
  }
}
</script>

<style>

</style>
