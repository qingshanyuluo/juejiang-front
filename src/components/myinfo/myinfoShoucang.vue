<template>
  <div id="myinfoShoucang">
    <div
      style="float: left; margin-left: 1px;"
      v-for="item of img"
      v-bind:key="item"
    >
      <router-link to="/article"
        ><van-image width="118.5" height="100" :src="item"
      /></router-link>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Image } from "vant";
Vue.use(Image);
export default {
  name: "myinfoShoucang",
  data() {
    return {
      img: [
        "https://img.yzcdn.cn/vant/cat.jpeg",
        "https://img.yzcdn.cn/vant/cat.jpeg",
        "https://img.yzcdn.cn/vant/cat.jpeg",
        "https://img.yzcdn.cn/vant/cat.jpeg"
      ]
    };
  }
};
</script>

<style></style>
