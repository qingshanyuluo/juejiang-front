<template>
  <div>
    <transition name="van-fade">
      <router-view/>
    </transition>
    <MenuTabbar/>
  </div>
</template>

<script>
import MenuTabbar from '../../components/menuTabbar'
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar).use(TabbarItem);
export default {
  components: {
    MenuTabbar
  }
}
</script>

<style>
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
  .fade-leave, .fade-enter-to {
    opacity: 1
  }
  .fade-enter-active, .fade-leave-active {
    transition: all .2s
  }

</style>