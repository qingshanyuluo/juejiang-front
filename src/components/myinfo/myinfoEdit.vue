<template>
	<div id="myinfoEdit">
	<van-nav-bar
	  title="个人信息"
	  left-arrow
	  @click-left="onClickLeft"
	/>
	<van-cell value="修改头像" is-link>
	  <!-- 使用 title 插槽来自定义标题 -->
	  <template slot="title">
	<van-image style="margin-left: -100px;"
	  round
	  width="2.5rem"
	  height="2.5rem"
	  fit="fill"
	  src="https://img.yzcdn.cn/vant/cat.jpeg"
	/>
	  </template>
	</van-cell>
	<div style="margin-left: -70px;">
	<van-cell title="单元格" is-link value="内容" />
	<van-cell title="单元格" is-link value="内容" />
	</div></div>
</template>

<script>
import Vue from 'vue';
import { NavBar } from 'vant';
import { Toast } from 'vant';
Vue.use(Toast);
Vue.use(NavBar);
import { Cell, CellGroup } from 'vant';
Vue.use(Cell).use(CellGroup);
import { Image } from 'vant';
Vue.use(Image);
	export default{
		name:"myinfoEdit",
		methods: {
		    onClickLeft() {
		      Toast('返回');
		    }
		  }
	}
</script>

<style>
</style>
