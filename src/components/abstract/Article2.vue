<template>
  <div>
    <div v-if="isFirst" 
    style="
      margin: 8px;
      height: 280px;
      border-radius: 10px;
      border: solid;
      border-color: lightgrey;" 
    >
      <van-row>
        <router-link to="/article">
          <van-image
            style=" border-radius: 10px 10px 10px 10px; left:3.3px  "
            height="120"
            :src="image"
          />
          <h5 style="margin-left:9px ;text-align: left;margin-top: 5px; color: #000; margin-bottom: 3px;">{{ title }}</h5>
          <h6 style="margin-left:9px ;text-align: left;margin-top: 5px; color: #000; margin-bottom: 3px;">{{ subtitle }}</h6>
          <h6 style="margin-left:9px ;text-align: left;margin-top: 5px; color: #000; margin-bottom: 3px; color: lightgrey">{{ description1 }}</h6>
          <h6 style="margin-left:9px ;text-align: left;margin-top: 5px; color: #000; margin-bottom: 23px; color: lightgrey">{{ description2 }}</h6>
        </router-link>
      </van-row>

      <van-row>
        <van-col span="6">
          <van-image
            style="margin-left: 9px ; margin-top: -10px;"
            round
            fit="fill"
            width="1.5rem"
            height="1.5rem"
            :src="authorImage"
          />
        </van-col>
        <van-col span="10">
          <h6 style="font-weight:normal; color: darkgrey;margin-top: -4px;  margin-right: -8px; text-align: left">{{author}}</h6>
        </van-col>
        <van-col span="1.5">
          <van-icon style="margin-top: 1px; margin-left: 1px;" name="good-job-o" />
        </van-col>
        <van-col span="1.5">
          <h5 style="margin-left: 8px; margin-top: 1px;">{{ likes }}</h5>
        </van-col>
      </van-row>
    </div>
    <div v-if="!isFirst" 
    style="
      margin: 8px;
      height: 370px;
      border-radius: 10px;
      border: solid;
      border-color: lightgrey;" 
    >
      <van-row>
        <router-link to="/article">
          <van-image
            style=" border-radius: 10px 10px 10px 10px; left:3.3px  "
            height="220"
            :src="image"
          />
          <h5 style="margin-left:9px ;text-align: left;margin-top: 5px; color: #000; margin-bottom: 3px;">{{ title }}</h5>
          <h6 style="margin-left:9px ;text-align: left;margin-top: 5px; color: #000; margin-bottom: 3px;">{{ subtitle }}</h6>
          <h6 style="margin-left:9px ;text-align: left;margin-top: 5px; color: #000; margin-bottom: 3px; color: lightgrey">{{ description1 }}</h6>
          <h6 style="margin-left:9px ;text-align: left;margin-top: 5px; color: #000; margin-bottom: 23px; color: lightgrey">{{ description2 }}</h6>
        </router-link>
      </van-row>

      <van-row>
        <van-col span="6">
          <van-image
            style="margin-left: 9px ; margin-top: -10px;"
            round
            fit="fill"
            width="1.5rem"
            height="1.5rem"
            :src="authorImage"
          />
        </van-col>
        <van-col span="10">
          <h6 style="font-weight:normal; color: darkgrey;margin-top: -4px;  margin-right: -8px; text-align: left">{{author}}</h6>
        </van-col>
        <van-col span="1.5">
          <van-icon style="margin-top: 1px; margin-left: 1px;" name="good-job-o" />
        </van-col>
        <van-col span="1.5">
          <h5 style="margin-left: 8px; margin-top: 1px;">{{ likes }}</h5>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isFirst: Boolean,
    image: String,
    title: String,
    subtitle: String,
    description1: String,
    description2: String,
    author: String,
    authorImage: String,
    likes: Number
  }

}
</script>

<style>

</style>