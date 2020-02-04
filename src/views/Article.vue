<template>
  <div>
    <div id="articleMessage" v-for="(arti,i) in article[0]" v-bind:key="i">
      <van-sticky :offset-top="0">
        <van-nav-bar
          style="background:rgba(x,x,x,0.3);"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickRight"
        >
          <van-icon name="search" slot="right"></van-icon>
        </van-nav-bar>
      </van-sticky>
      <van-image
        style=" border-radius: 10px 10px 10px 10px; "
        width="360"
        height="180"
        :src="arti.iurl"
      />
      <br />
      <h2
        style=" font-weight:normal; margin-left:9px ;text-align: left;margin-top: 3px;"
      >{{ arti.ititle }}</h2>
      <van-row justify="center" type="flex">
        <van-col span="4">
          <van-image
            style="margin-left: 9px ; margin-top: -8px;"
            round
            fit="fill"
            width="2.3rem"
            height="2.3rem"
            :src="arti.writerimage"
          />
        </van-col>
        <van-col span="8">
          <h5
            style="font-weight:normal; font-weight: 500; margin-top: -7px;  margin-right: 0px;"
          >{{arti.writername}}</h5>
          <h6
            style="font-weight:normal; font-weight: 500; color: darkgrey; margin-top: -20px;  margin-right: -8px;"
          >{{arti.writerinfo}}</h6>
        </van-col>
        <van-col span="3">
          <van-icon size="22" style="margin-top: -15px; margin-left: -8px;" name="new-arrival-o" />
        </van-col>
        <van-col span="4"></van-col>
        <van-col span="6">
          <van-icon size="25" name="vip-card-o" />
        </van-col>
      </van-row>
      <van-card
        style=" ; text-align: left;"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
      >
        <div slot="tags">
          <br />
          <span style="color: darkgray;">楼主打分：</span>
          <van-rate size="13" v-model="arti.zanmount" />
          <br />
          <span style="color: darkgray;">用户打分：</span>
          <van-rate size="13" v-model="arti.zanmount" />
        </div>
        <div slot="price">
          <span style="color: darkgray;">￥58</span>
        </div>
        <div slot="footer">
          <van-icon style="margin-top: -10px; " v-on:click="addsuccess()" name="star-o" size="20" />
        </div>
      </van-card>
      <div class="comment-wrap">
        <div class="comment-tips">
          <span>用户评价</span>
          <div>
            <span>8.4分</span>
            <span>3363条</span>
          </div>
          <p>
            <van-icon name="arrow" />
          </p>
        </div>
        <div class="comment-content">
          <div class="item-content" v-for="(items,index) in commentsList" :key="index">
            <div class="content-header">
              <div class="user-logo"></div>
              <div class="name-wrap">
                <div class="name">
                  <span>{{items.name}}</span>
                  <span>{{items.age}}</span>
                  <span>{{items.skin}}</span>
                </div>
                <div>
                  <van-rate size="12px" v-model="items.star" readonly />
                </div>
              </div>
            </div>
            <div class="content-main"></div>
            <div class="content-footer">
              <span>一年前</span>
              <span>
                <van-icon name="chat-o" />130
                <van-icon name="like-o" />130
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Card } from "vant";
Vue.use(Card);
import { Rate } from "vant";
Vue.use(Rate);
import { Divider } from "vant";
Vue.use(Divider);
import { Button } from "vant";
Vue.use(Button);
import { Row, Col } from "vant";
Vue.use(Row).use(Col);
import { Image } from "vant";
Vue.use(Image);
import { Sticky } from "vant";
Vue.use(Sticky);
import { Toast } from "vant";
Vue.use(Toast);
import { NavBar } from "vant";
Vue.use(NavBar);
export default {
  data() {
    return {
      //二维数组，第一维代表类别第二维代表每个文章 id 直接由两个下标表示，从0到9一共十个类别
      article: [
        [
          {
            id: 11,
            ititle: "标题标题标题标题标题标发撒分厘卡撒酒疯拉萨解放沙拉题",
            itext: "内弗萨卡拉封杀了封杀了飞洒容内容",
            iurl: require("../image/homeimage/11.png"),
            writerimage: require("../image/homeimage/3.png"),
            writername: "作者名",
            zanmount: 1,
            talkmount: 3,
            writerinfo: "80后 | 混合肤质",
            message: "三个等级是两个极端飞洒飞洒啊飞洒飞洒飞洒飞洒撒飞洒飞洒飞洒飞洒发生",
            commentsList: [
              {
                name: "小香香",
                age: "00后",
                skin: "干",
                star: 4
              },
              {
                name: "小香香",
                age: "00后",
                star: 4,
                skin: "干"
              },
              {
                name: "小香香",
                age: "00后",
                star: 4,
                skin: "干"
              },
              {
                name: "小香香",
                age: "00后",
                star: 4,
                skin: "干"
              }
            ]
          },{
            id: 12,
            ititle: "标题标题标题标题标题标发撒分厘卡撒酒疯拉萨解放沙拉题",
            itext: "内弗萨卡拉封杀了封杀了飞洒容内容",
            iurl: require("../image/homeimage/11.png"),
            writerimage: require("../image/homeimage/3.png"),
            writername: "作者名",
            zanmount: 1,
            talkmount: 3,
            writerinfo: "80后 | 混合肤质",
            message: "三个等级是两个极端飞洒飞洒啊飞洒飞洒飞洒飞洒撒飞洒飞洒飞洒飞洒发生",
            commentsList: [
              {
                name: "小香香",
                age: "00后",
                skin: "干",
                star: 4
              },
              {
                name: "小香香",
                age: "00后",
                star: 4,
                skin: "干"
              },
              {
                name: "小香香",
                age: "00后",
                star: 4,
                skin: "干"
              },
              {
                name: "小香香",
                age: "00后",
                star: 4,
                skin: "干"
              }
            ]
          }



        ], [
          {
            id: 21,
            ititle: "标题标题标题标题标题标发撒分厘卡撒酒疯拉萨解放沙拉题",
            itext: "内弗萨卡拉封杀了封杀了飞洒容内容",
            iurl: require("../image/homeimage/11.png"),
            writerimage: require("../image/homeimage/3.png"),
            writername: "作者名",
            zanmount: 1,
            talkmount: 3,
            writerinfo: "80后 | 混合肤质",
            message: "三个等级是两个极端飞洒飞洒啊飞洒飞洒飞洒飞洒撒飞洒飞洒飞洒飞洒发生",
            commentsList: [
              {
                name: "小香香",
                age: "00后",
                skin: "干",
                star: 4
              },
              {
                name: "小香香",
                age: "00后",
                star: 4,
                skin: "干"
              },
              {
                name: "小香香",
                age: "00后",
                star: 4,
                skin: "干"
              },
              {
                name: "小香香",
                age: "00后",
                star: 4,
                skin: "干"
              }
            ]
          },{
            id: 22,
            ititle: "标题标题标题标题标题标发撒分厘卡撒酒疯拉萨解放沙拉题",
            itext: "内弗萨卡拉封杀了封杀了飞洒容内容",
            iurl: require("../image/homeimage/11.png"),
            writerimage: require("../image/homeimage/3.png"),
            writername: "作者名",
            zanmount: 1,
            talkmount: 3,
            writerinfo: "80后 | 混合肤质",
            message: "三个等级是两个极端飞洒飞洒啊飞洒飞洒飞洒飞洒撒飞洒飞洒飞洒飞洒发生",
            commentsList: [
              {
                name: "小香香",
                age: "00后",
                skin: "干",
                star: 4
              },
              {
                name: "小香香",
                age: "00后",
                star: 4,
                skin: "干"
              },
              {
                name: "小香香",
                age: "00后",
                star: 4,
                skin: "干"
              },
              {
                name: "小香香",
                age: "00后",
                star: 4,
                skin: "干"
              }
            ]
          }

        ]
      ]
    }
  },
  methods: {
    addsuccess() {
      this.$toast({
        message: "自定义图标",
        icon: "like-o"
      });
    },
    onClickLeft() {
      history.go(-1);
    },
    onClickRight() {
      Toast("按钮");
    }
  }
};
</script>

<style scoped>
.content-footer span:last-child {
  padding-right: 20px;
}
.content-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 13px;
  color: #ccc;
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
}
.content-main {
  height: 100px;
}
.name-wrap {
  padding-left: 20px;
}
.name-wrap .name span:nth-child(3) {
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border-radius: 50%;
  background-color: #f0ad6f;
  color: #fff;
}
.name-wrap .name span:nth-child(2) {
  font-size: 13px;
  padding: 4px;
}
.name-wrap .name {
  font-size: 14px;
}
.content-header .user-logo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ccc;
}
.content-header {
  display: flex;
  align-items: center;
}
.item-content {
  /* border-top: 1px solid #eee; */
  padding: 10px 0 10px 0;
  margin-left: 20px;
}

.comment-wrap .comment-tips div span:first-child {
  color: #f2c67d;
}
.comment-wrap .comment-tips div {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  font-size: 12px;
}
.comment-wrap .comment-tips {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 10px 0;
  margin-left: 20px;

  font-size: 14px;
  border-bottom: 1px solid #eee;
}
.age-wrap div p >>> .van-progress {
  flex: 1;
  margin: 0 4px;
}
.age-wrap div p {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ccc;
  font-size: 12px;
}
.age-wrap h6 {
  padding-bottom: 10px;
}
.age-wrap,
.skin-wrap {
  flex: 0.45;
}
h6 {
  margin: 0;
}
.all-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 10px solid #eee;
}
.top-wrap p span {
  margin-left: 20px;
}
.top-wrap p {
  font-size: 14px;
  color: #999;
  display: flex;
  align-items: center;
  padding: 2px 0;
}
.top-wrap h5 {
  font-weight: normal;
  font-size: 14px;
  margin: 0;
  padding-bottom: 4px;
}
.top-wrap {
  border-bottom: 1px solid #eee;
  padding: 20px 0;
  margin-left: 20px;
}
.tag-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 10px 0;
  margin-left: 20px;
  font-size: 14px;
}
.btn-group >>> .van-button {
  width: 120px;
  height: 38px;
  line-height: 38px;
}
.btn-group {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 30px;
}
.info-wrap .want,
.info-wrap .prices {
  font-size: 12px;
  color: #ccc;
  padding: 4px;
}
.info-wrap span {
  flex-wrap: 600;
  font-size: 30px;
}
.shop-info div {
  flex: 0.5;
}
.shop-info .info-wrap {
  text-align: center;
}
.shop-info .shop-img {
  width: 120px;
  height: 120px;
}
.shop-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px 30px 10px;
}
img {
  width: 100%;
  height: 100%;
}
p {
  margin: 0;
}
</style>
