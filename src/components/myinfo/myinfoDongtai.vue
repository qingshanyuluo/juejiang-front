<template>
	<div id="myinfoDongtai">
	<div v-for="ite in sites"  :key="ite.time1" >
		<br>
		<van-row type="flex" >
			<van-col span="14">
				<span style="font-size: x-large; font-weight: 600;" >{{ite.time1}}</span>
				<span style="color: darkgray; font-size: large;">&nbsp;{{ite.time2}}</span>
			</van-col>
		</van-row>
		<br>
		<van-image
		  width="280"
		  height="300"
		  :src=ite.pic
		/>
		<br>
		<br>	
		<van-row type="flex">
			<van-col span="2"></van-col>
			<van-col span="15">
				<span style=" font-size: small; text-align: right;">{{ite.title}}</span>
			</van-col>
		</van-row>
	</div>
		
	</div>
</template>

<script>
import Vue from 'vue';
import { Row, Col } from 'vant';
Vue.use(Row).use(Col);	
import { Image } from 'vant';
Vue.use(Image);
export default{
	name:"myinfoDongtai",
	data(){
		return{
			sites:[{time1:'2020.01.12',time2:'18:32',pic:"https://img.yzcdn.cn/vant/cat.jpeg",title:'是发飞洒反倒是开了房间都是飞洒飞洒飞洒'},
			{time1:'2020.01.12',time2:'18:32',pic:"https://img.yzcdn.cn/vant/cat.jpeg",title:'是发飞洒反倒是开了房间都是飞洒飞洒飞洒'}]
		}
	}
	
	
}
</script>

<style>
</style>
