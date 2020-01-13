<template>
	<div id="searchHot">
		<br>
	<van-row justify="center" type="flex">
	    <van-col span="10" >
		<span style=" font-size:large; color: #FF7F50;">1&nbsp;</span>
		<span style="font-size:small">敏感肌补水</span><br>
		<span style="font-size: x-small ;color: gainsboro;">无印良品</span>
		</van-col>
		<van-col span="14" >
		<span style=" font-size:large; color:goldenrod">2&nbsp;</span>
		<span style="font-size:small">敏感肌补水</span><br>
		<span style="font-size: x-small ;color: gainsboro;">无印良品</span>
		</van-col>
	  </van-row>
	  <br>
	  <van-row justify="center" type="flex">
	      <van-col span="10" >
	  	<span style=" font-size:large; color:gold">3&nbsp;</span>
	  	<span style="font-size:small">敏感肌补水</span><br>
	  	<span style="font-size: x-small ;color: gainsboro;">无印良品</span>
	  	</van-col>
	  	<van-col span="14" >
	  	<span style=" font-size:large; color:darkgray;">4&nbsp;</span>
	  	<span style="font-size:small">敏感肌补水</span><br>
	  	<span style="font-size: x-small ;color: gainsboro;">无印良品</span>
	  	</van-col>
	    </van-row>
		<br>
		<van-row justify="center" type="flex">
		    <van-col span="10" >
			<span style=" font-size:large; color:darkgray;">5&nbsp;</span>
			<span style="font-size:small">敏感肌补水</span><br>
			<span style="font-size: x-small ;color: gainsboro;">无印良品</span>
			</van-col>
			<van-col span="14" >
			<span style=" font-size:large; color:darkgray;">6&nbsp;</span>
			<span style="font-size:small">敏感肌补水</span><br>
			<span style="font-size: x-small ;color: gainsboro;">无印良品</span>
			</van-col>
		  </van-row>
		  <br><br>
		  <van-row  justify="center" type="flex">
			  <van-col span="8">
				 <span style=" font-size:smaller;"> 历史记录</span> 
			  </van-col>
			  <van-col span="16"></van-col>
		  </van-row>
		  <van-list
		    v-model="loading"
		    :finished="finished"
		    finished-text="没有更多了"
		    @load="onLoad"
		  >
		    <van-cell
		      v-for="item in list"
		      :key="item"
		      :title="item"
		    />
		  </van-list>
	  </div>
	  
</template>

<script> 
import Vue from "vue";
import { Row, Col } from 'vant';
Vue.use(Row).use(Col);
import { List } from 'vant';
Vue.use(List);
export default {
	name:"searchHot",
	data() {
	    return {
	      list: [1,3,4],
	      loading: true,
	      finished: true
	    };
	  },
	  methods: {
	      onLoad() {
	        // 异步更新数据
	        setTimeout(() => {
	          for (let i = 0; i < 10; i++) {
	            this.list.push(this.list.length + 1);
	          }
	          // 加载状态结束
	          this.loading = false;
	  
	          // 数据全部加载完成
	          if (this.list.length >= 40) {
	            this.finished = true;
	          }
	        }, 500);
	      }
	    }
}
</script>

<style>
	
</style>
