import Vue from "vue";
import VueRouter from "vue-router";
import goodsInfo from "../components/goodsInfo.vue";
import goodsComment from "./../components/goodComment.vue";

import SignIn from "../views/SignIn.vue";
import myorder from "../views/myorder.vue";
import report from "../components/report.vue";
import Main from "../views/main/Main.vue"
import Home from "../views/main/Home.vue"
import Explorer from "../views/main/Explorer.vue"
import Shop from "../views/main/Shop.vue"
import Personal from "../views/main/Personal.vue"
import search from "../views/search.vue";
import Add from "../views/Add.vue";
import Article from "../views/Article.vue";
import Info from "../views/Info.vue"
import Goods from "../views/Goods.vue"
import Tag from "../views/infos/Tag.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home
      },
      {
        path: "/explorer",
        name: "Explorer",
        component: Explorer
      },
      {
        path: "/shop",
        name: "Shop",
        component: Shop
      },
      {
        path: "/personal",
        name: "Personal",
        component: Personal
      },
    ]
  },

  {
    path: "/search",
    name: "search",
    component: search
  },
  {
    path: "/article",
    name: "Article",
    component: Article
  },
  {
    path: "/myorder",
    name: "myorder",
    component: myorder
  },
  {
    path: "/report",
    component: report
  },
  {
    path: "/goodsComment",
    component: goodsComment,
  },
  {
    path: "/goodsInfo",
    component: goodsInfo,
  },
  {
    path: "/goods",
    component: Goods,
  },
  {
    path: "/add",
    component: Add,
  },
  {
    path: "/sign-in",
    component: SignIn,
  },
  {
    path: "/info",
    component: Info
  },
  {
    path: "/tag",
    component: Tag
  }

];

const router = new VueRouter({
  routes
});

export default router;
