<template>
  <div>
    <test dd="fsfsd"/>

    <van-row justify="center" type="flex">
      <van-col span="1">
        <div class="change" @click="change()">
          <van-icon v-if="fu" name="like-o" size="20" />
          <van-icon v-if="!fu" name="star-o" size="20" />
        </div>
      </van-col>
      <van-col span="22">
        <router-link to="/search">
          <van-search
            input-align="center"
            shape="round"
            placeholder="请输入搜索关键词"
            v-model="value"
          />
        </router-link>
      </van-col>
      <van-col span="1">
        <van-icon style="top: 15px; right: 15px;" class="btn" name="star-o" size="20" />
      </van-col>
    </van-row>
    <van-row justify="center" type="flex">
      <van-col span="0.5"></van-col>
      <van-col span="23">
        <van-swipe
          style="border-radius: 5px 5px 5px 5px; "
          :autoplay="3000"
          width="400"
          height="200"
        >
          <van-swipe-item v-for="(image, index) in image(fu)" :key="index">
            <img :src="image" @click="Preview_img(images, index)" />
          </van-swipe-item>
        </van-swipe>
      </van-col>
      <van-col span="0.5"></van-col>
    </van-row>
    <van-tabs class="tabs">
      <van-tab title="推荐">
        <Abstracts :type="0"/>
      </van-tab>
      <van-tab title="关注">
        <Abstracts :type="1"/>
      </van-tab>
      <van-tab title="高端合集" v-if="fu">
        <Abstracts :type="2"/>
      </van-tab>
      <van-tab title="百元护肤" v-if="fu">
        <Abstracts :type="3"/>
      </van-tab>
      <van-tab title="眼妆合集" v-if="!fu">
        <Abstracts :type="4"/>
      </van-tab>
      <van-tab title="美妆功课" v-if="!fu">
        <Abstracts :type="5"/>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
// import articleGuanzhu from "../../components/articlefu/articleGuanzhu.vue";
import Abstracts from "../../components/abstract/Abstracts1";
import Vue from "vue";
import { Divider, Row, Col, Search, Tab, Tabs, Icon, Tabbar, TabbarItem, Button, Swipe, SwipeItem } from 'vant';
Vue.use(Divider).use(Row).use(Col).use(Search).use(Tab).use(Tabs).use(Icon).use(Tabbar).use(TabbarItem).use(Button).use(Swipe).use(SwipeItem);

export default {
  data() {
    return {
      fu: true,
      images1: [
        require("../../image/homeimage/2.png"),
        require("../../image/homeimage/3.png"),
        require("../../image/homeimage/4.png"),
        require("../../image/homeimage/11.png")
      ],
      images2: [
        require("../../image/homeimage/11.png"),
        require("../../image/homeimage/11.png"),
        require("../../image/homeimage/11.png"),
        require("../../image/homeimage/11.png")
      ]
      /*文章外部信息*/
    };
  },
  components: { Abstracts },
  methods: {
    change(){
      this.fu=!this.fu
    },
    image(fu){
      if (fu) {
        return this.images1;
      } else {
        return this.images2
      }
    },
    // 轮播图预览
    Preview_img(images, index) {
      ({
        images: images, //图片数组
        showIndex: true,
        loop: false,
        startPosition: index
      });
    }
  }
};
</script>
<style scoped>
.change {
  color: #60b2cd;
  margin-top: 15px;
  margin-left: 10px;
}
.tabs {
  margin: 5px 7px;
}
</style>
