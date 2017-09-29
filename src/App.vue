<template>
    <router-view name="index"></router-view>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
// 引入json 方便webpack打包
import mydata from './assets/json/data.json';
// 引入axios ajax插件
import axios from 'axios'

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
  },
  mounted(){
    // 获取数据
    axios.get('/dist/json/data.json')
    .then(response => {
      // 缓存主要数据
      this.$store.commit({
        type: 'changeMainData',
        data: response.data
      });
    })

  }
}
</script>

<style>

</style>
