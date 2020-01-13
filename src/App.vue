<template>
  <div id="app">
    
   <!-- <van-tabbar > 
      <van-tabbar-item icon="home-o" to="/">标签</van-tabbar-item>
      <van-tabbar-item icon="home-o" to="/explorer">标签</van-tabbar-item>
      <van-tabbar-item icon="search" to="/">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/fuGuanzhu">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o" info="20">标签</van-tabbar-item>
    </van-tabbar> --> 
<!-- 	<menu-tabbar></menu-tabbar> -->
<router-view></router-view>
  </div>
</template>

<script>
// import menuTabbar from "./components/menuTabbar.vue"; 
// import Vue from 'vue';
// import { Tabbar, TabbarItem } from 'vant';
// Vue.use(Tabbar).use(TabbarItem);
export default {
  components: {

  },
  
}
</script>

<style>

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
