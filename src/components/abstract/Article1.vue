<template>
  <div>
    <van-col span="0.5"><h1 /></van-col>
    <van-col span="23">
      <van-row>
          <van-image
            style=" border-radius: 10px 10px 10px 10px; left:3.3px  "
            width="353"
            height="180"
            :src="image"
          />
          <h2
            style=" font-weight:normal; margin-left:9px ;text-align: left;margin-top: 5px; color: #000;"
          >
            {{ title }}
          </h2>
          <h5
            style=" font-weight:normal; color: darkgrey; margin-left:9px ;text-align: left;margin-top: -17px;"
          >
            {{ description }}
          </h5>
      </van-row>

      <van-row>
        <van-col span="2">
          <van-image
            style="margin-left: 9px ; margin-top: -10px;"
            round
            fit="fill"
            width="1.5rem"
            height="1.5rem"
            :src="authorImage"
          />
        </van-col>
        <van-col span="3">
          <h6
            style="font-weight:normal; color: darkgrey;margin-top: -4px;  margin-right: -8px;"
          >
            {{ author }}
          </h6>
        </van-col>
        <van-col span="11">
          <h5></h5>
        </van-col>
        <van-col span="1.5">
          <van-icon
            style="margin-top: 1px; margin-left: 1px;"
            name="good-job-o"
          />
        </van-col>
        <van-col span="1.5">
          <h5 style="margin-left: 8px; margin-top: 1px;">{{ likes }}</h5>
        </van-col>
        <van-col span="2"></van-col>
        <van-col span="1.5">
          <van-icon name="chat-o" />
        </van-col>
        <van-col span="1.5">
          <h5 style="margin-left: 8px; margin-top: 1px;">{{ comments }}</h5>
        </van-col>
      </van-row>
    </van-col>
    <van-col span="0.5"><h1 /></van-col>
  </div>
</template>

<script>
import Vue from "vue";
import { Divider, Button, Row, Col, Image } from "vant";
Vue.use(Divider, Button, Row, Col, Image);
export default {
  props: {
    image: String,
    title: String,
    description: String,
    comments: Number,
    likes: Number,
    author: String,
    authorImage: String
  }
};
</script>

<style></style>
