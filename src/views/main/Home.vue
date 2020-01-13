<template>
  <div>
    <van-row justify="center" type="flex">
      <van-col span="0.5">
        <div class="change" @click="change()">
          <van-icon v-if="fu" name="like-o" size="20" />
          <van-icon v-if="!fu" name="star-o" size="20" />
        </div>
      </van-col>
      <van-col span="23">
        <router-link to="/search">
          <van-search
            input-align="center"
            shape="round"
            placeholder="请输入搜索关键词"
            v-model="value"
          />
        </router-link>
      </van-col>
      <van-col span="0.5">
        <van-icon style="right:5px;" class="btn" name="star-o" size="20" />
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
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img :src="image" @click="Preview_img(images, index)" />
          </van-swipe-item>
        </van-swipe>
      </van-col>
      <van-col span="0.5"></van-col>
    </van-row>
    <van-tabs v-model="active">
      <van-tab title="推荐">
        <article-guanzhu></article-guanzhu>
      </van-tab>
      <van-tab title="关注">
        <article-guanzhu></article-guanzhu>
      </van-tab>
      <van-tab title="圣诞限定">
        <article-guanzhu></article-guanzhu>
      </van-tab>
      <van-tab title="百元护肤">
        <article-guanzhu></article-guanzhu>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import articleGuanzhu from "../../components/articlefu/articleGuanzhu.vue";
import Vue from "vue";
import { Row, Col } from "vant";
Vue.use(Row).use(Col);
import { Search } from "vant";
Vue.use(Search);
import { Tab, Tabs } from "vant";
Vue.use(Tab).use(Tabs);
import { Icon } from "vant";
Vue.use(Icon);
import { Tabbar, TabbarItem } from "vant";
Vue.use(Tabbar).use(TabbarItem);
import { Button } from "vant";
Vue.use(Button);
import { Swipe, SwipeItem } from "vant";
Vue.use(Swipe).use(SwipeItem);

export default {
  data() {
    return {
      fu: true,
      active: 2,
      images: [
        require("../../image/homeimage/2.png"),
        require("../../image/homeimage/3.png"),
        require("../../image/homeimage/4.png"),
        require("../../image/homeimage/11.png")
      ]
      /*文章外部信息*/
    };
  },
  components: { articleGuanzhu },
  methods: {
    change(){
      this.fu=!this.fu
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
</style>
