<template>
  <div id="Explorer">
    <van-row type="flex" style="margin-top: 15px">
      <van-col span="10"></van-col>
      <van-col span="4">
        <span style="font-size: larger;">发现</span>
      </van-col>
      <van-col span="6"></van-col>
      <van-col span="4">
        <router-link to="/sign-in">
          <van-icon style=" margin-right:0px;" size="30" name="sign" />
        </router-link>
      </van-col>
    </van-row>
    <van-search input-align="center" shape="round" placeholder="请输入搜索关键词" v-model="value" />

    <van-row type="flex">
      <van-col span="0.5"></van-col>
      <van-col span="23">
        <van-swipe
          style="border-radius: 5px 5px 5px 5px; margin-left: 13px; margin-right: -2px;"
          :autoplay="3000"
          width="220"
        >
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <van-image width="310" height="150" :src="image" />
          </van-swipe-item>
        </van-swipe>
      </van-col>
      <van-col span="0.5"></van-col>
    </van-row>
    <van-image
      width="325"
      height="95"
      radius="8px"
      style="margin-top: 8px;"
      src="https://img.yzcdn.cn/vant/cat.jpeg"
    />
    <van-image
      width="330"
      height="30"
      radius="8px"
      style="margin-top: 2px;"
      src="https://img.yzcdn.cn/vant/cat.jpeg"
    />
    <br />
    <div style="text-align: left; padding: 15px">
      <span style="font-size: x-large; letter-spacing:1px;  font-weight: 600;">今天聊什么&nbsp;</span>
      <span style="font-size:small; letter-spacing:1px; color:darkgrey;">/&nbsp;探索更有趣的生活</span>
      <span style="font-size: xxx-large; color:darkgrey;">”</span>
    </div>

  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";
Vue.use(Icon);
import { Row, Col } from "vant";
Vue.use(Row).use(Col);
import { Search } from "vant";
Vue.use(Search);
export default {
  name: "Explorer",
  data() {
    return {
      active: 2,
      images: [
        require("../../image/homeimage/2.png"),
        require("../../image/homeimage/3.png"),
        require("../../image/homeimage/4.png"),
        require("../../image/homeimage/11.png")
      ]
    };
  }
};
</script>

<style>
</style>
