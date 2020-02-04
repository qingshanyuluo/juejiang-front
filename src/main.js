import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {Icon,Toast,Notify,Checkbox,Button,Grid, GridItem,NavBar,Rate,Field,Tag,Progress,Circle } from 'vant';
  Vue.use(Icon).use(Toast).use(Notify).use(Checkbox).use(Button).use(Grid).use(NavBar).use(Circle ).use(Field).use(GridItem).use(Tag).use(Progress).use(Rate);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
