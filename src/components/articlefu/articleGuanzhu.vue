<template>
  <div id="articleGuanzhu">
    <span v-for="(arti, i) in sites" v-bind:key="i">
      <van-row>
        <van-col span="0.5"></van-col>
        <van-col span="23">
          <router-link to="/article">
            <van-image
              style=" border-radius: 10px 10px 10px 10px; left:3.3px  "
              width="353"
              height="180"
              :src="arti.iurl"/></router-link
          ><br />
          <h2
            style=" font-weight:normal; margin-left:9px ;text-align: left;margin-top: 5px;"
          >
            {{ arti.ititle }}
          </h2>
          <h5
            style=" font-weight:normal; color: darkgrey; margin-left:9px ;text-align: left;margin-top: -17px;"
          >
            {{ arti.itext }}
          </h5>
        </van-col>
        <van-col span="0.5"></van-col>
      </van-row>

      <van-row>
        <van-col span="2"
          ><van-image
            style="margin-left: 9px ; margin-top: -10px;"
            round
            fit="fill"
            width="1.5rem"
            height="1.5rem"
            :src="arti.writerimage"/></van-col
        ><van-col span="3"
          ><h6
            style="font-weight:normal; color: darkgrey;margin-top: -4px;  margin-right: -8px;"
          >
            {{ arti.writername }}
          </h6></van-col
        >
        <van-col span="11"><h5></h5></van-col>
        <van-col span="1.5">
          <van-icon
            style="margin-top: 1px; margin-left: 1px;"
            name="good-job-o"
          />
        </van-col>
        <van-col span="1.5"
          ><h5 style="margin-left: 8px; margin-top: 1px;">
            {{ arti.zanmount }}
          </h5></van-col
        >
        <van-col span="2"></van-col>
        <van-col span="1.5"><van-icon name="chat-o"/></van-col>
        <van-col span="1.5"
          ><h5 style="margin-left: 8px; margin-top: 1px;">
            {{ arti.talkmount }}
          </h5></van-col
        >
      </van-row>
      <van-divider style="margin-top: 1px;" />
    </span>
  </div>
</template>

<script>
import Vue from "vue";
import { Divider } from "vant";
Vue.use(Divider);
import { Button } from "vant";
Vue.use(Button);
import { Row, Col } from "vant";
Vue.use(Row).use(Col);
import { Image } from "vant";
Vue.use(Image);
export default {
  name: "articleGuanzhu",
  props: {},
  data() {
    return {
      sites: [
        {
          ititle: "标题标题标题标题标题标发撒分厘卡撒酒疯拉萨解放沙拉题",
          itext: "内弗萨卡拉封杀了封杀了飞洒容内容",
          iurl: require("../../image/homeimage/11.png"),
          writerimage: require("../../image/homeimage/3.png"),
          writername: "作者名",
          zanmount: 1,
          talkmount: 3
        },
        {
          ititle: "标题标题",
          itext: "内容内容",
          iurl: require("../../image/homeimage/2.png"),
          writerimage: require("../../image/homeimage/2.png"),
          writername: "作者名",
          zanmount: 1,
          talkmount: 3
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
