<template>
	<div id="featureAnalyse">
	<van-tabs v-model="active" scrollspy  sticky="true" color="#a2dcc9">
	  <van-tab title="我的形象">


		 <br>
		 <div style=" margin-left: 9px; text-align: left;font-size: large; font-weight: 1000; " >我的形象</div>
		 <br>
		 <div :style="backgroundMan" >
			<van-row type="flex" style="float: left;  margin-top: 8px;" v-for="(item,index) of intro.slice(0,8)"  v-bind:key="index" >
				<van-col span="23">
					<span class="circle" >{{item}}</span>
				</van-col>
				<van-col span="1">
					
				</van-col>
			</van-row> 
			 
			 <br><br><br><br><br><br><br><br><br><br><br><br></div>
			 			<van-divider style="margin-top: 0px;" />
	  </van-tab>
	  <van-tab title="眉眼">
	   <div style=" margin-left: 9px; text-align: left;font-size: large; font-weight: 1000; " >眉眼</div>
	  <br>
	  <van-image
		:src="eyes"
		width="250"
		> 
	  </van-image>
	  <br><br>
	  <van-row >
	    <van-col span="11" ><div><span style=" font-size: large;">眼睛类型</span><br><span style="font-size: small ; color: #a2dcc9;" >大眼</span></div>
	    </van-col>
	    <van-col span="2"><div style=" margin-top: 6px; margin-left: 13px; width: 1px;height: 30px; background:#DCDCDC"></div> </van-col>
	    <van-col span="11"><div  style="border-left: #C8C9CC;">
	    <span style=" font-size: large;">眼间距</span><br><span style="font-size: small ; color: #a2dcc9;" >眼间距正常</span></div></van-col>
	  </van-row>
	  <br>
	  <van-row type="flex">
		  <van-col span="5"><div><span style="   color: #969799;          font-size: medium;">眉形</span><br><span style="font-size: small ; color: #a2dcc9;" >细眉</span></div></van-col>
		  <van-col span="1"><div style=" margin-top: 6px; margin-left: 13px; width: 1px;height: 30px; background:#DCDCDC"></div></van-col>
		   <van-col span="5"><div><span style="   color: #969799;          font-size: medium;">眉浓度</span><br><span style="font-size: small ; color: #a2dcc9;" >稀眉</span></div></van-col>
		   <van-col span="1"><div style=" margin-top: 6px; margin-left: 13px; width: 1px;height: 30px; background:#DCDCDC"></div></van-col>
		   <van-col span="5"><div><span style="   color: #969799;          font-size: medium;">眉间距</span><br><span style="font-size: small ; color: #a2dcc9;" >过宽</span></div></van-col>
		   <van-col span="1"><div style=" margin-top: 6px; margin-left: 13px; width: 1px;height: 30px; background:#DCDCDC"></div></van-col>
			<van-col span="5"><div><span style="   color: #969799;          font-size: medium;">眉长</span><br><span style="font-size: small ; color: #a2dcc9;" >长眉</span></div></van-col>
	  </van-row><br><br>
	  <van-divider style="margin-top: 0px;" />
	  </van-tab>
	  <van-tab title="鼻子">
	  <div style=" margin-left: 9px; text-align: left;font-size: large; font-weight: 1000; " >鼻子</div>
	  <br>
	  <van-row type="flex"  >
				<van-col span="2"></van-col>
	  			 <van-col span="13">
	  				 <van-image
	  				 height="200"
	  				 width=""
	  				 :src="nose"
	  				 >
	  					 
	  					 
	  				 </van-image>
	  			 </van-col> 
	  			  <van-col span="10" ><br><br><br><span style=" font-size:xx-large; color: #a2dcc9;">翘头鼻</span><br><span style="font-size: medium ; color:#999999">鼻型</span> </van-col>
	  			  
	  </van-row>
	  <br><br>
	  <van-divider style="margin-top: 0px;" />
	  </van-tab>
	  <van-tab title="下脸">
	  <div style=" margin-left: 9px; text-align: left;font-size: large; font-weight: 1000; " >嘴巴</div>
	  <br>
	  <br>
	  <van-image
	  		:src="mouth"
	  		width="250"
	  		> 
	  </van-image>
	  <br><br>
	  <van-row type="flex">
	  <van-col span="7"><div><span style="   color: #969799;          font-size: x-large;">大小</span><br><span style="font-size: medium ; color: #a2dcc9;" >小嘴</span></div></van-col>
	  <van-col span="1"><div style=" margin-top: 6px; margin-left: 13px; width: 1px;height: 30px; background:#DCDCDC"></div></van-col>
	   <van-col span="7"><div><span style="   color: #969799;          font-size: x-large;">厚度</span><br><span style="font-size: mediun ; color: #a2dcc9;" >上唇薄</span></div></van-col>
	   <van-col span="1"><div style=" margin-top: 6px; margin-left: 13px; width: 1px;height: 30px; background:#DCDCDC"></div></van-col>
	   <van-col span="7"><div><span style="   color: #969799;          font-size: x-large;">唇形</span><br><span style="font-size: medium ; color: #a2dcc9;" >u型</span></div></van-col>
	  </van-row><br>
	  <van-row >
	    <van-col span="11" ><div><span style="color: #969799; font-size: large;">下巴类型</span><br><span style="font-size: small ; color: #a2dcc9;" >尖下巴</span></div>
	    </van-col>
	    <van-col span="2"><div style=" margin-top: 6px; margin-left: 13px; width: 1px;height: 30px; background:#DCDCDC"></div> </van-col>
	    <van-col span="11"><div  style="border-left: #C8C9CC;">
	    <span style=" color:#969799 ;font-size: large;">下巴长度</span><br><span style="font-size: small ; color: #a2dcc9;" >略长</span></div></van-col>
	  </van-row>
	  <br><br>
	 
	  </van-tab>
	  
	</van-tabs>
	</div>
</template>

<script>
import { Col, Row } from 'vant';
Vue.use(Col);
Vue.use(Row);
import Vue from 'vue';
import { Tab, Tabs } from 'vant';
Vue.use(Tab);
Vue.use(Tabs);
	import { Image } from 'vant';
	Vue.use(Image);
	export default {
		name:"featureAnalyse",
		data(){
			return{
				backgroundMan: {
				backgroundImage:'url(' + require('@/assets/img/man.png') + ')',
				backgroundRepeat:'no-repeat'
		    },
			intro:["高鼻梁","黄头发","蓝眼睛","戴眼镜","没戴眼镜","高鼻梁","黄头发","蓝眼睛","戴眼镜","没戴眼镜","高鼻梁"],
			eyes:require("@/assets/img/eyes.png"),
			nose:require("@/assets/img/nose.png"),
			mouth:require("@/assets/img/mouth.png")
			}
		},
		computed:{
			age: function() {
			// 通过vuex的getters方法来获取state里面的数据
				return this.$store.getters.getAge;
			}
		}
	}
</script>

<style scoped>
	.circle{
		border :1px solid rgba(8, 206, 200, 0.1);
		width:80px;
		height:30px;
		border-radius: 30px;
		background-color: rgba(8, 206, 200, 0.1);
		margin-left: 60px;
		margin-right: 30px;
		margin-top: 8px;
		float: right;
	}
</style>
