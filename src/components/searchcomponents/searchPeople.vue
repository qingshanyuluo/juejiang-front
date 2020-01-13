<template>
	<div id="searchPeople">
		<span v-for="item of sites" v-bind:key=item>
		<van-row type="flex" style="margin-top: 8px;">
			<van-col span ="6" >
				<van-image
				  round
				  width="3rem"
				  height="3rem"
				  :src=item.peopleimage
				/>
			</van-col>
			<van-col span="3">
			</van-col>
			<van-col span="13"></van-col>
		</van-row>	
		<van-row type="flex" style="margin-top: -40px;">
			<van-col span ="6" ></van-col>
			<van-col span="8">
				<span style="font-weight: 500;">{{item.peoplename}}</span>
				
				<van-col span="6"></van-col>
<!-- 判断关注了吗，改变图标 --><van-col span="4"   style="margin-left: 210px; margin-top: -25px;"><van-icon  size="24px" name=":item.guanzhu==1?star-o:chat-o;" /></van-col>
			</van-col>
			
		</van-row>
			<van-divider style="margin-top: 30px;" />
		</span>
	</div>
</template>

<script>
import Vue from "vue";
import { Row, Col } from 'vant';
Vue.use(Row).use(Col);
import { Divider } from 'vant';
Vue.use(Divider);
import { Icon } from 'vant';
Vue.use(Icon);
export default {
	name:"searchPeople",
	data(){
		return{
			sites:[{peoplename:'香弟弟',peopleimage:require('../../image/homeimage/3.png'),guanzhu:1},
			{peoplename:'香弟弟',peopleimage:require('../../image/homeimage/3.png'),guanzhu:1}]
		}
	}

	
}
</script>

<style>
</style>
