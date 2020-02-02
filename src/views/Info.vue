<template>
  <div id="info">
    <van-nav-bar title="个人信息" left-arrow @click-left="onClickLeft" />
    <van-cell value="修改" is-link style="padding: 15px">
      <div slot="title" style="padding = 20px">
        <van-col span="9"></van-col>
        <van-col span="4">
          <van-image
            style="margin-left: -100px;"
            round
            width="4.7rem"
            height="4.5rem"
            fit="fill"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
        </van-col>
        <van-col span="4">
          <h1>{{name}}</h1>
        </van-col>
      </div>
    </van-cell>
    <div style="margin-left: -70px;">
      <router-link to="/tag">
        <van-cell title="标签" is-link value="90后"/>
      </router-link>
      <van-cell title="手机号" is-link value="3213134142" />
      <van-cell title="肤质" is-link value="干" />
      <van-cell title="收货地址" is-link value="点击查看" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar } from "vant";
import { Toast } from "vant";
import { Cell, CellGroup } from "vant";
import { Image } from "vant";
Vue.use(Cell).use(CellGroup);
Vue.use(Toast);
Vue.use(NavBar);
Vue.use(Image);
export default {
  data() {
    return {
      name: "DDgu",
    };
  },
  methods: {
    onClickLeft() {
      history.go(-1);
    },
  }
};
</script>

<style>

#info{
  margin: 10px;
}
</style>
