<template>
  <van-tabbar route v-model="active" inactive-color="#777777" active-color="#000000">
    <van-tabbar-item v-for="(item,index) in tabbars" :key="index" :to="(item.name)">
      <span>{{item.title}}</span>
      <img slot="icon" slot-scope="props" :src="props.active ? item.active : item.normal" />
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: "menuTabbar",
  data() {
    return {
      active: 0,
      tabbars: [
        {
          name: "/",
          title: "首页",
          normal:
            "http://sucai.suoluomei.cn/sucai_zs/images/20190910093117-fx2.png",
          active:
            "http://sucai.suoluomei.cn/sucai_zs/images/20190910093117-fx.png"
        },
        {
          name: "/explorer",
          title: "发现",
          normal:
            "http://sucai.suoluomei.cn/sucai_zs/images/20190910093117-xx.png",
          active:
            "http://sucai.suoluomei.cn/sucai_zs/images/20190910093117-xx2.png"
        },
        {
          name: "/add",
          title: "加号页",
          normal:
            "http://sucai.suoluomei.cn/sucai_zs/images/20190910093117-wd.png",
          active:
            "http://sucai.suoluomei.cn/sucai_zs/images/20190910093117-wd2.png"
        },
        {
          name: "/shop",
          title: "产品库",
          normal:
            "http://sucai.suoluomei.cn/sucai_zs/images/20190910093117-wd.png",
          active:
            "http://sucai.suoluomei.cn/sucai_zs/images/20190910093117-wd2.png"
        },
        {
          name: "/personal",
          title: "我的",
          normal:
            "http://sucai.suoluomei.cn/sucai_zs/images/20190910093117-wd.png",
          active:
            "http://sucai.suoluomei.cn/sucai_zs/images/20190910093117-wd2.png"
        }
      ]
    };
  },
  methods: {},
  //通过路由跳转判断选中的样式
  created() {
    if (this.$route.name == "index") {
      this.active = 0;
    } else if (this.$route.name == "power") {
      this.active = 1;
    } else if (this.$route.name == "personal") {
      this.active = 2;
    }
  }
};
</script> 

<style>
</style>
