<template>
	<div id="myorder">
		
		<van-nav-bar
		  title="我的订单"
		  left-arrow
		  @click-left="onClickLeft"
		  @click-right="onClickRight"
		>
		<van-icon name="search" slot="right" />
		</van-nav-bar>
		<van-tabs v-model="active">
		  <van-tab title="未付款"><myorder-nopay></myorder-nopay></van-tab>
		  <van-tab title="未发货"><myorder-noship></myorder-noship></van-tab>
		  <van-tab title="未收货"><myorder-noreceive></myorder-noreceive></van-tab>
		  <van-tab title="未评价"><myorder-nocomment></myorder-nocomment></van-tab>  
		</van-tabs>
	</div>
</template>

<script>
import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);
import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);
import myorderNocomment from "../components/myorder/myorderNocomment.vue";
import myorderNoreceive from "../components/myorder/myorderNoreceive.vue";
import myorderNoship from "../components/myorder/myorderNoship.vue";
import myorderNopay from "../components/myorder/myorderNopay.vue";
export default{
	name:"myorder",
	components:{myorderNocomment,myorderNopay,myorderNoship,myorderNoreceive},
	data(){
		return{
			active:2
		}
	},
	methods: {
	  onClickLeft() {
	    Toast('返回');
	  },
	  onClickRight() {
	    Toast('按钮');
	  }
	}
}
</script>

<style>
</style>
