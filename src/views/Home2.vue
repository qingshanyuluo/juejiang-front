<template>
 <div id="Home2"><div >
  <van-row justify="center" type="flex">
      <van-col span="0.5" ><router-link to="/Home"><van-icon class="btn"  name="star-o" size="20" /></router-link></van-col>
    <van-col span="23"  > <router-link to="/search"><van-search   input-align="center" shape="round" placeholder="请输入搜索关键词" v-model="value" /></router-link></van-col>
    <van-col span="0.5"><van-icon style="right:5px;" class="btn" name="star-o" size="20" /></van-col>
    </van-row>
<van-row justify="center" type="flex">
      <van-col span="0.5" ></van-col>
      <van-col span="23"  >
		  <van-swipe style="border-radius: 5px 5px 5px 5px; " :autoplay="3000" width="400" height="200">
                 <van-swipe-item v-for="(image, index) in images" :key="index" >
                     <img :src="image" @click="Preview_img(images,index)"/>
                 </van-swipe-item>
             </van-swipe>
			 </van-col>
      <van-col span="0.5"></van-col>
    </van-row>
	<!-- <van-row justify="center" type="flex">
<van-col span="4"><router-link to="/fuGuanzhu"><van-button type="default" >关注</van-button></router-link></van-col>
	<van-col span="4"><van-button type="default">推荐</van-button></van-col>
	<van-col span="6"><van-button type="default">百元护肤</van-button></van-col>
	<van-col span="6"><van-button type="default">圣诞限定</van-button></van-col>
	<van-col span="4"></van-col>
		  </van-row> -->
		  <van-tabs v-model="active">
		    <van-tab title="推荐"><article-guanzhu></article-guanzhu></van-tab>
		    <van-tab title="关注"><article-guanzhu></article-guanzhu></van-tab>
		    <van-tab title="流行妆容"><article-guanzhu></article-guanzhu></van-tab>
		    <van-tab title="百元彩妆"><article-guanzhu></article-guanzhu></van-tab>
		  </van-tabs>
		
	</div>
		<menu-tabbar></menu-tabbar>
	<router-view> </router-view>
	</div>
</template> 

<script>
import articleGuanzhu from"../components/articlefu/articleGuanzhu.vue"
import menuTabbar from "../components/menuTabbar.vue"
import Vue from 'vue';
import { Row, Col } from 'vant';
Vue.use(Row).use(Col);
import { Search } from 'vant';
Vue.use(Search);
import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);
import { Icon } from 'vant';
Vue.use(Icon);
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar).use(TabbarItem);
import { Button } from 'vant';
Vue.use(Button);
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);

export default {
name:"Home2",

  data() { return{
	  
	  active:2,
                  images: [ 
					require('../image/homeimage/2.png'),
					require('../image/homeimage/3.png'),
					require('../image/homeimage/4.png'),
					require('../image/homeimage/11.png')
                  ],
				/*文章外部信息*/}
          }, 
		  components:{articleGuanzhu, menuTabbar},
		  methods: {
            // 轮播图预览
            Preview_img(images, index) {
                ({
                    images: images,//图片数组
                    showIndex: true,
                    loop: false,
                    startPosition: index
                })
            }
        }
		  
}
</script>
<style scoped>
	.btn{
		color:darksalmon;
		top:15px;
		margin-left: 4px;
	}
</style>
