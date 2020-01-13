<template>
	<div id="myInfo">
		<br>
		<van-row type="flex">
			<van-col span="11"></van-col>
		<van-col span="3"><span style="font-size: larger;   margin-left: -11px; ">我的</span></van-col>
		<van-col span="6" ></van-col>
		<van-col span="4"><van-icon style=" margin-right:0px;" size="30" name="sign" />
		</van-col>
		</van-row>
		<van-divider  style="margin-top: 2px;"/>
		<van-row type="flex">
			<van-col span="1"></van-col>
			<van-col span="3">
				<router-link to="/myinfoEdit">
				<van-image
				  round
				  width="5rem"
				  height="5rem"
				  fit="fill"
				  src="https://img.yzcdn.cn/vant/cat.jpeg"
				/></router-link>
			</van-col>
			<van-col span="4"></van-col>
			<van-col span="3" style="margin-top: 18px;">
				
				<span style=" font-size:large ;font-weight: 600;">0</span><br>
				<span style=" color: darkgray; font-size:x-small; font-weight:500  " >粉丝</span>
				</van-col>
				<van-col span="2"></van-col>
			<van-col span="3" style="margin-top: 18px;">
				
				<span style=" font-size:large ;font-weight: 600;">0</span><br>
				<span style=" color: darkgray; font-size:x-small; font-weight:500  " >关注</span>
				</van-col>
				<van-col span="2"></van-col>
				<van-col span="3" style="margin-top: 18px;">
					
					<span style=" font-size:large ;font-weight: 600;">0</span><br>
					<span style=" color: darkgray; font-size:x-small; font-weight:500  " >赞和收藏</span>
					</van-col>
					</van-row>
					<br>
					<router-link to="/myorder">
			<van-row type="flex"  >
				<van-col span="1"></van-col>
				<van-col span="5" class="van-hairline--bottom">
					<span style="font-weight: 600; font-size: smaller; " >我的订单</span>
				</van-col>
				<van-col span="12"></van-col>
				<van-col span="5">
					<span style=" color: darkgray; font-size: small; " >查看全部></span>
				</van-col>
				<van-col span="1"></van-col>
			</van-row>
			<br>
			<van-row type="flex" >
				<van-col span="2" ></van-col>
				<van-col span="2"><van-icon size="30" name="paid" />
				<span style="font-size: x-small;"  >待付款</span>
				</van-col>
				<van-col span="4" ></van-col>
				<van-col span="2"><van-icon size="30" name="paid" />
				<span style="font-size: x-small;"  >待付款</span>
				</van-col>
				<van-col span="4" ></van-col>
				<van-col span="2"><van-icon size="30" name="paid" />
				<span style="font-size: x-small;"  >待收获</span>
				</van-col>
				<van-col span="4" ></van-col>
				<van-col span="2"><van-icon size="30" name="paid" />
				<span style="font-size: x-small;"  >待评价</span>
				</van-col>
			</van-row>
			</router-link>
			<br>
			<van-tabs v-model="active"  sticky>
			  <van-tab title="主页"><myinfo-zhuye></myinfo-zhuye></van-tab>
			  <van-tab title="动态"><myinfo-dongtai></myinfo-dongtai></van-tab>
			  <van-tab title="收藏"><myinfo-Shoucang></myinfo-Shoucang></van-tab>
			</van-tabs>
	</div>
</template>

<script>
import Vue from 'vue';
import { Row, Col } from "vant";
Vue.use(Row).use(Col);
import { Image } from 'vant';
Vue.use(Image);
import { Divider } from "vant";
Vue.use(Divider);
import { Button } from 'vant';
Vue.use(Button);
import { Icon } from 'vant';
Vue.use(Icon);
import myinfoZhuye from "../components/myinfo/myinfoZhuye"
import myinfoShoucang from "../components/myinfo/myinfoShoucang"
import myinfoDongtai from "../components/myinfo/myinfoDongtai"
export default {
	name:"myInfo",
	components:{myinfoZhuye,myinfoShoucang,myinfoDongtai},
	data() {
	    return {
	      active: 2
	    };
	  }
	
} 
</script>

<style>
</style>
