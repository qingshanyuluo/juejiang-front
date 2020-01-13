<template>
	<div id="searchArticle">
		<van-row  type="flex" style="margin-top: 4px; margin-bottom: 5px;">
		  <van-col span="4" style="font-weight: 500; font-size: small;">热度</van-col>
		  <van-col span="6" style="font-weight: 500;font-size: small;">相关性</van-col>
		  <van-col span="6"></van-col>
		</van-row>
			<van-divider style="margin-top: 0px;"/>
			<span v-for="item of sites" v-bind:key=item>
			<van-row justify="center" type="flex" style="margin-bottom: -5px;">
				<van-col span="9" style="margin-left:0px;">
				<van-image
				  width="100"
				  height="70"
				  radius="8"
				  :src=item.goodspics></van-image
				>
				</van-col>
				<van-col span="13">
					<div style="margin-top: -10px; ;">
					<p style=" font-size: smaller; text-align: left;">{{item.goodsname}}</p>
					<p style=" font-size: small;  margin-left: -3px;  font-weight: 500; margin-top: -15px;  color:darkgrey; text-align: left;">打卡练腹肌是否独立设计开发雷达附近的罗斯福就打开拉萨</p>
					</div>
				</van-col>
				<van-col span="3"></van-col>
			</van-row>
			<van-row type="flex" style="margin-top: -10px;">
			<van-col span="3"><van-image style="margin-left: 10px;"
				  round
				  width="1.5rem"
				  height="1.5rem"
				  src="https://img.yzcdn.cn/vant/cat.jpeg"
				/>
			</van-col>
				<van-col span="3" style="margin-top: 3px;">
					<span style="font-size: smaller; ">香弟弟</span>
				</van-col>
				<van-col span="10"></van-col>
				<van-col span="2" style="margin-top: 3px;"><van-icon name="like-o" /></van-col>
				<van-col span="2" style="margin-top: 3px;margin-left: -5px;"><span style="font-size: small;">12</span></van-col>
				<van-col span="2" style="margin-top: 3px;"><van-icon name="chat-o" /></van-col>
				<van-col span="2" style="margin-top: 3px;margin-left: -5px;"><span style="font-size: small;">12</span></van-col>
			</van-row >	
			<van-divider style="margin-top: 0px;"></van-divider>
			</span>

	</div>
</template>

<script>
import Vue from 'vue';
import { Row, Col } from 'vant';
Vue.use(Row).use(Col);
import { Image } from 'vant';
Vue.use(Image);
import { Divider } from 'vant';
Vue.use(Divider);
import { Icon } from 'vant';
Vue.use(Icon);
export default {
	name:"searchArticle",
	data(){
		return{
			sites:[{goodspic:"require('../../image/homeimage/3.png')",goodsname:'是广东省尽快搞定了十几个看到了世界各地大概是广东省',goodsprics:123,goodsrate:3},{goodspic:require('../../image/homeimage/3.png'),
			goodsname:'是广东省尽快搞定了十几个看到了世界各地大概是广东省'
			,goodsprics:123,goodsrate:3}]
		}
	}
}
</script>

<style>
</style>