<template>
  <div id="myorderNocomment">
    <br />
    <span v-for="item of sites" v-bind:key="item">
      <van-row justify="center" type="flex" style="margin-bottom: -5px;">
        <van-col span="9" style="margin-left:0px;">
          <van-image width="80" height="80" :src="item.goodspics"></van-image
        ></van-col>
        <van-col span="13">
          <div style="margin-top: -10px; ;">
            <p style=" font-size: small; text-align: left;">
              {{ item.goodsname }}
            </p>
            <p
              style=" font-size: smaller;  margin-left: -3px;  font-weight: 600; margin-top: -8px;  color:darkgrey; text-align: left;"
            >
              ￥{{ item.goodsprics }}
            </p>
          </div>
        </van-col>
        <van-col span="3"></van-col>
      </van-row>
      <van-row justify="center" type="flex">
        <van-col span="10"> </van-col>
        <van-col span="6">
          <div style="margin-top: -10px; ">
            <van-rate
              style="margin-left: -20px; margin-top: -8px;"
              v-model="item.goodsrate"
            />
          </div>
        </van-col>
        <van-col span="8">
          <div style="margin-top: -14px; ">
            <van-button type="default" size="small">评价</van-button>
          </div>
        </van-col>
      </van-row>
      <van-divider />
    </span>
  </div>
</template>

<script>
import Vue from "vue";
import { DropdownMenu, DropdownItem } from "vant";
Vue.use(DropdownMenu).use(DropdownItem);
import { Image } from "vant";
Vue.use(Image);
import { Row, Col } from "vant";
Vue.use(Row).use(Col);
import { Divider } from "vant";
Vue.use(Divider);
import { Rate } from "vant";
Vue.use(Rate);
import { Button } from "vant";
Vue.use(Button);
export default {
  name: "myorderNocomment",
  data() {
    return {
      sites: [
        {
          goodspic: "require('../../image/homeimage/3.png')",
          goodsname: "是广东省尽快搞定了十几个看到了世界各地大概是广东省",
          goodsprics: 123,
          goodsrate: 3
        },
        {
          goodspic: require("../../image/homeimage/3.png"),
          goodsname: "是广东省尽快搞定了十几个看到了世界各地大概是广东省",
          goodsprics: 123,
          goodsrate: 3
        }
      ]
    };
  }
};
</script>

<style></style>
