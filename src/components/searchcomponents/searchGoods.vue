<template>
	<div id="searchGoods">
		<van-dropdown-menu style="height:35px;">
		  <van-dropdown-item v-model="value1" :options="option1" />
		  <van-dropdown-item v-model="value2" :options="option2" />
		  <van-dropdown-item v-model="value3" :options="option3" />
		</van-dropdown-menu>
		<br>
		<span v-for="item of sites" v-bind:key=item>
		<van-row justify="center" type="flex" style="margin-bottom: -5px;">
			<van-col span="9" style="margin-left:0px;">
			<van-image
			  width="80"
			  height="80"
			  :src=item.goodspics></van-image
			></van-col>
			<van-col span="13">
				<div style="margin-top: -10px; ;">
				<p style=" font-size: small; text-align: left;">{{item.goodsname}}</p>
				<p style=" font-size: smaller;  margin-left: -3px;  font-weight: 600; margin-top: -8px;  color:darkgrey; text-align: left;">￥{{item.goodsprics}}</p>
				</div>
			</van-col>
			<van-col span="3"></van-col>
		</van-row>
		<van-row justify="center" type="flex">
			<van-col span="10" >
			</van-col>
			<van-col span="6">
				<div style="margin-top: -10px; ">
			
				<van-rate style="margin-left: -20px; margin-top: -8px;" v-model="item.goodsrate" />
							</div>
			</van-col>
			<van-col span="8" >
			</van-col>
			
		</van-row>
		<van-divider />
		</span>
	</div>
</template>

<script>
import Vue from "vue";
import { DropdownMenu, DropdownItem } from 'vant';
Vue.use(DropdownMenu).use(DropdownItem);
import { Image } from 'vant';
Vue.use(Image);
import { Row, Col } from 'vant';
Vue.use(Row).use(Col);
import { Divider } from 'vant';
Vue.use(Divider);
import { Rate } from 'vant';
Vue.use(Rate);
export default {
	name:"searchGoods",
  data() {
    return {
      value1: 0,
      value2: '-',
	  value3: 0,
	  sites:[{goodspic:"require('../../image/homeimage/3.png')",goodsname:'是广东省尽快搞定了十几个看到了世界各地大概是广东省',goodsprics:123,goodsrate:3},{goodspic:require('../../image/homeimage/3.png'),
	  goodsname:'是广东省尽快搞定了十几个看到了世界各地大概是广东省'
	  ,goodsprics:123,goodsrate:3}],
      option1: [
        { text: '分类', value: 0 },
        { text: '护肤', value: 1 },
        { text: '彩妆', value: 2 }
      ],
      option2: [
		{ text: '品牌', value: '-' },
        { text: 'A', value: 'a' },
        { text: 'B', value: 'b' },
        { text: 'C', value: 'c' },
		{ text: 'D', value: 'd' },
		{ text: 'E', value: 'e' },
		{ text: 'F', value: 'f' },
		{ text: 'G', value: 'g' },
		{ text: 'H', value: 'h' },
		{ text: 'I', value: 'i' },
		{ text: 'J', value: 'j' },
		{ text: 'K', value: 'k' },
		{ text: 'L', value: 'l' },
		{ text: 'M', value: 'm' },
		{ text: 'N', value: 'n' },
		{ text: 'O', value: 'o' },
		{ text: 'P', value: 'p' },
		{ text: 'Q', value: 'q' },
		{ text: 'R', value: 'r' },
		{ text: 'S', value: 's' },
		{ text: 'T', value: 't' },
		{ text: 'U', value: 'u' },
		{ text: 'V', value: 'v' },
		{ text: 'W', value: 'w' },
		{ text: 'X', value: 'x' },
		{ text: 'Y', value: 'y' },
		{ text: 'Z', value: 'z' }
      ],
	  option3: [
	    { text: '大赏', value: 0 },
	    { text: '仅查看19年大赏', value: 1 },
	    { text: '仅查看18年大赏', value: 2 },
		{ text: '仅查看17年大赏', value: 3 },
		{ text: '仅查看16年大赏', value: 4 },
		{ text: '仅查看15年大赏', value: 5 },
		{ text: '仅查看14年大赏', value: 6 },
		{ text: '仅查看13年大赏', value: 7 }
	  ]
    }
  }
};
</script>

<style>
</style>
