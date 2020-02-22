<template>
  <div>
    <van-row justify="center" type="flex">
      <router-link to="/Home">
        <van-col span="0.5"
          ><van-icon class="btn" name="star-o" size="20"/></van-col
      ></router-link>
      <van-col span="23"
        ><van-search
          input-align="center"
          shape="round"
          placeholder="请输入搜索关键词"
          v-model="value"
      /></van-col>
      <van-col span="0.5"
        ><van-icon style="margin-right:5px;" class="btn" name="star-o" size="20"
      /></van-col>
    </van-row>
    <van-tabs type="line" color="#BEBEBE">
      <van-tab title="热门"><search-hot></search-hot></van-tab>
      <van-tab title="产品"><search-goods></search-goods></van-tab>
      <van-tab title="文章"><search-article></search-article></van-tab>
      <van-tab title="心得"><search-xinde></search-xinde></van-tab>
      <van-tab title="用户"><search-people></search-people></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Toast } from "vant";
Vue.use(Toast);
import Vue from "vue";
import { NavBar } from "vant";
Vue.use(NavBar);
import { Search } from "vant";
Vue.use(Search);
import { Tab, Tabs } from "vant";
Vue.use(Tab).use(Tabs);
import searchHot from "../components/searchcomponents/searchHot.vue";
import searchGoods from "../components/searchcomponents/searchGoods.vue";
import searchArticle from "../components/searchcomponents/searchArticle.vue";
import searchPeople from "../components/searchcomponents/searchPeople.vue";
import searchXinde from "../components/searchcomponents/searchXinde.vue";
export default {
  components: {
    searchHot,
    searchGoods,
    searchArticle,
    searchPeople,
    searchXinde
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    }
  }
};
</script>

<style></style>
