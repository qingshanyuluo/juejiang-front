<template>
  <div>
    <div
      style="background-color: lightgrey;
		text-align: left;
    width: 347px; margin-left: -3px;
    border:  solid lightgrey;
    padding: 5px;"
    >
      评论
    </div>

    <!-- <div>
      <van-row>
        <van-col span="4">
          <van-image
            style="margin-left: 9px ; margin-top: 5px; margin-bottom: 10px;"
            round
            fit="fill"
            width="2rem"
            height="2rem"
            :src="require('../../image/homeimage/2.png')"
          />
        </van-col>
        <van-col span="20"
          ><input
            style="  margin-top: 7px; margin-left: 1px;"
            type="text"
            value="Mickey"
        /></van-col>
      </van-row>
    </div> -->
    <!-- <div>
      <span v-for="(arti, i) in sites" v-bind:key="i">
        <van-row>
          <van-col span="2"
            ><van-image
              style="margin-left: 9px ; margin-top: -10px;"
              round
              fit="fill"
              width="1.5rem"
              height="1.5rem"
              :src="arti.writerimage"/></van-col
          ><van-col span="3"
            ><h6
              style="font-weight:normal; color: darkgrey;margin-top: -4px;  margin-right: -8px;"
            >
              {{ arti.writername }}
            </h6></van-col
          >
          <van-col span="11"><h5></h5></van-col>
          <van-col span="1.5">
            <van-icon
              style="margin-top: 1px; margin-left: 1px;"
              name="good-job-o"
            />
          </van-col>
          <van-col span="1.5"
            ><h5 style="margin-left: 8px; margin-top: 1px;">
              {{ arti.zanmount }}
            </h5></van-col
          >
          <van-col span="2"></van-col>
          <van-col span="1.5"><van-icon name="chat-o"/></van-col>
          <van-col span="1.5"
            ><h5 style="margin-left: 8px; margin-top: 1px;">
              {{ arti.talkmount }}
            </h5></van-col
          >
        </van-row>
        <van-divider style="margin-top: 1px;" />
      </span>
    </div> -->
    <div>
      <van-cell-group>
        <van-field
          v-model="username"
          required
          clearable
          right-icon="star-o"
          left-icon="star-o"
          placeholder="   千山万水总是情,留个评论行不行"
        />
      </van-cell-group>
      <br />
      <div v-for="arti of sites" v-bind:key="arti">
        <van-row>
          <van-col span="4"
            ><van-image
              style="margin-left: 10px ; margin-top: -10px;"
              round
              fit="fill"
              width="2rem"
              height="2rem"
              :src="arti.writerimage"/></van-col
          ><van-col span="3"
            ><h5
              style="font-weight:normal;margin-top: -15px;  margin-right: -8px;"
            >
              {{ arti.writername }}
            </h5>
            <h6
              style="font-weight:normal; color: darkgrey;margin-top: -15px;  margin-right: -3px;"
            >
              {{ arti.writername }}
            </h6></van-col
          >
          <van-col span="9"><h5></h5></van-col>
          <van-col span="1.5">
            <van-icon
              style="margin-top: 1px; margin-left: 1px;"
              name="good-job-o"
            />
          </van-col>
          <van-col span="1.5"
            ><h5 style="margin-left: 8px; margin-top: 1px;">
              {{ arti.zanmount }}
            </h5></van-col
          >
          <van-col span="2"></van-col>
          <van-col span="1.5"><van-icon name="chat-o"/></van-col>
          <van-col span="1.5"
            ><h5 style="margin-left: 8px; margin-top: 1px;">
              {{ arti.talkmount }}
            </h5></van-col
          >
        </van-row>
        <van-row>
          <van-col span="2"></van-col>
          <van-row span="20"
            ><h4 style=" font-weight: 600; margin-top: 2px;    ">
              安居房斯拉发撒联发科萨克利夫杀了飞洒飞洒发夫就撒了发吉萨雷锋精神拉法基
            </h4></van-row
          >
          <van-col span="2"></van-col>
        </van-row>
        <van-divider />
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Field } from "vant";
Vue.use(Field);
import { Row, Col } from "vant";
Vue.use(Row).use(Col);
import { Icon } from "vant";
Vue.use(Icon);
import { Image } from "vant";
Vue.use(Image);
import { Divider } from "vant";
Vue.use(Divider);
export default {
  props: {},
  components: {},
  data() {
    return {
      sites: [
        {
          ititle: "标题标题标题标题标题标发撒分厘卡撒酒疯拉萨解放沙拉题",
          itext: "内弗萨卡拉封杀了封杀了飞洒容内容",
          iurl: require("../../image/homeimage/11.png"),
          writerimage: require("../../image/homeimage/3.png"),
          writername: "作者名",
          zanmount: 1,
          talkmount: 3
        },
        {
          ititle: "标题标题",
          itext: "内容内容",
          iurl: require("../../image/homeimage/2.png"),
          writerimage: require("../../image/homeimage/2.png"),
          writername: "作者名",
          zanmount: 1,
          talkmount: 3
        }
      ]
    };
  }
};
</script>

<style></style>
