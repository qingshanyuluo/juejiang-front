<template>
	<div id="faceAnalyse">
		<br>
	<van-row type="flex" v-if="pagenumber">
		<van-col span="5" >
			<span  style="font-weight: 600;font-size: x-large;">肌肤</span>
		</van-col>
		<van-col span="6" style="margin-top: 5px;">
			<span @click="change()" style="font-weight: 600;font-size: large; color: #969799;">面部特征</span>
		</van-col>
	</van-row>
	
	<van-row type="flex" v-if="!pagenumber">
		<van-col span="5" style="margin-top: 5px;">
			<span  @click="change()" style="font-weight: 600;font-size: large;  color: #969799;">肌肤</span>
		</van-col>
		<van-col span="7" >
			<span style="font-weight: 600;font-size: x-large;">面部特征</span>
		</van-col>
	</van-row>	
	<br>
	<skin-analyse v-if="pagenumber"></skin-analyse>	
	<feature-analyse v-if="!pagenumber"></feature-analyse>
	</div>
</template>

<script>
import Vue from 'vue';
import { Col, Row } from 'vant';
Vue.use(Col);
Vue.use(Row);
import { Sticky } from 'vant';
Vue.use(Sticky);
import skinAnalyse from '../components/faceanalyse/skinAnalyse.vue'
import featureAnalyse from '../components/faceanalyse/featureAnalyse.vue'
	export default{
		name:"faceAnalyse",
		components:{skinAnalyse,featureAnalyse},
		data(){
			return{
				pagenumber:true
			}
			
		
		},
		methods:{
			
			change(){
				this.pagenumber=!this.pagenumber;
			},
		}
	}
</script>

<style>
</style>
