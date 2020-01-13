<template>
	<van-row justify="center" type="flex">
	 <van-sticky>   <van-col span="0.5" ><van-icon class="btn"  name="arrow-left" size="20" /></van-col></van-sticky>
	    <van-col span="23"  ><van-search input-align="center" shape="round" placeholder="请输入搜索关键词" v-model="value" /></van-col>
	    <van-col span="0.5"><van-icon style="right:5px;" class="btn" name="share" size="20" /></van-col>
	  </van-row>
</template>

<script>
import Vue from 'vue';
import { Sticky } from 'vant';
Vue.use(Sticky);
import { Row, Col } from 'vant';
Vue.use(Row).use(Col);
import { Icon } from 'vant';
Vue.use(Icon);
</script>

<style>
</style>
