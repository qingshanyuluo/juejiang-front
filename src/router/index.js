import Vue from "vue";
import VueRouter from "vue-router";
import articleGuanzhu from "../components/articlefu/articleGuanzhu.vue";
import articleMessage from "../views/articleMessage.vue";
import now from "../views/search.vue";
import myorder from "../views/myorder.vue";
import myinfoEdit from "../components/myinfo/myinfoEdit.vue";
import search from "../views/search.vue";
import ExplorerQiandao from "./../components/Explorer/ExplorerQiandao.vue";
import Add from "./../components/add.vue";
import Goods from "./../components/Goods.vue";
import addGoods from "./../components/addGoods.vue";
import goodsInfo from "./../components/goodsInfo.vue";
import goodsComment from "./../components/goodComment.vue";
import report from "./../components/report.vue";
import Main from "./../views/main/Main.vue"
import Home from "./../views/main/Home.vue"
import Explorer from "./../views/main/Explorer.vue"
import Shop from "./../views/main/Shop.vue"
import Personal from "./../views/main/Personal.vue"
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
    path: "/fuGuanzhu",
    name: "fuguanzhu",
    component: articleGuanzhu
  },
  {
    path: "/search",
    name: "search",
    component: search
  },
  {
    path: "/articleMessage",
    name: "articlemessage",
    component: articleMessage
  },
  {
    path: "/now",
    name: "now",
    component: now
  },
  {
    path: "/myorder",
    name: "myorder",
    component: myorder
  },
  {
    path: "/myinfoEdit",
    name: "myinfoEdit",
    component: myinfoEdit
  }, {
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
    path: "/addGoods",
    component: addGoods,
  },
  {
    path: "/add",
    component: Add,
  },
  {
    path: "/Goods",
    component: Goods,
  },
  {
    path: "/ExplorerQiandao",
    component: ExplorerQiandao,
  },
  {
    path: "/",
    redirect: "/Home"
  },

];

const router = new VueRouter({
  routes
});

export default router;
