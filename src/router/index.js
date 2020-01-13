import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import articleGuanzhu from"../components/articlefu/articleGuanzhu.vue";
import articleMessage from"../views/articleMessage.vue" ;
import now from "../views/search.vue";
import Explorer from "../views/Explorer.vue";
import myInfo from "../views/myInfo.vue";
import myorder from "../views/myorder.vue";
import myinfoEdit from "../components/myinfo/myinfoEdit.vue";
import search from "../views/search.vue";
import Home2 from "../views/Home2.vue";
import ExplorerQiandao from './../components/Explorer/ExplorerQiandao.vue';
import Add from './../components/add.vue';
import Goods from './../components/Goods.vue';
import shop from './../components/shop.vue';
import addGoods from './../components/addGoods.vue';
import goodsInfo from './../components/goodsInfo.vue';
import goodsComment from './../components/goodComment.vue';
import report from './../components/report.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: "/Home",
    name: "home",
    component: Home 
  },
  {
    path: "/Explorer",
    name: "explorer",
    component: Explorer
  },
  {
	  path:"/fuGuanzhu",
	  name:"fuguanzhu",
	  component:articleGuanzhu
  },
  {
  	  path:"/search",
  	  name:"search",
  	  component:search
  },
  {
	  path:"/articleMessage",
	  name:"articlemessage", 
	  component:articleMessage
  },
  {
  	  path:"/now",
  	  name:"now", 
  	  component:now
  },
  {
	  path:"/myInfo",
	  name:"myinfo",
	  component:myInfo
  },
  {
  	  path:"/Home2",
  	  name:"Home2",
  	  component:Home2
  },
  {
	  path:"/myorder",
	  name:"myorder",
	  component:myorder
  },
  {
	  path:"/myinfoEdit",
	  name:"myinfoEdit",
	  component:myinfoEdit
  }, {
      path: '/report',
      component: report
    },
    {
      path: '/goodsComment',
      component: goodsComment,
    },
    {
      path: '/goodsInfo',
      component: goodsInfo,
    },
    {
      path: '/addGoods',
      component: addGoods,
    },
    {
      path: '/add',
      component: Add,
    },
    {
      path: '/Goods',
      component: Goods,
    },
    {
      path:'/ExplorerQiandao',
      component: ExplorerQiandao,
    },
    {
      path:'/',
      redirect:'/Home'
    },
	{
	  path:'/shop',
	  component:shop
	}
	
];

const router = new VueRouter({
  routes
});

export default router;
