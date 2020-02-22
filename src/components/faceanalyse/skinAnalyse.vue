<template>
  <div id="skinAnalyse">
    <van-tabs v-model="active" scrollspy="true" sticky="true" color="#a2dcc9">
      <van-tab>
        <div slot="title">概况</div>
        <br />
        <div
          style=" margin-left: 9px; text-align: left;font-size: large; font-weight: 1000; "
        >
          概况
        </div>
        <van-image width="350" height="250" :src="lianimg1" />

        <div
          style=" padding-left: 8px; padding-right: 8px;  background:rgba(8, 206, 200, 0.1); border-radius:10px;margin-top: -8px;  border: 10px solid white ; "
        >
          <p style="  font-size:small; text-align: left;">
            你的肌肤正常偏油，耐受性很好，现阶段护理要点如下：<br />·洗脸时不要追求涩感，要温和清洁，并做好基础保湿哦
            <br />
            ·针对黑头问题，要注意清洁别过度，可以搭配调理角质代谢、疏通毛孔的护肤品<br />
            ·黑眼圈以血管型和结构型为主，除了健康作息外，还可以使用促进眼周循环的眼霜
            <br />
            ·要坚持防晒哦，不仅能防晒黑，还能防晒老哈
          </p>
        </div>
        <van-divider style="margin-top: 0px;" />
      </van-tab>
      <van-tab :title="1">
        <div slot="title">评分</div>
        <div
          style=" margin-left: 9px; text-align: left;font-size: large; font-weight: 1000; "
        >
          评分
        </div>
        <br />
        <van-circle
          style="margin-left: 0px;"
          v-model="age"
          :rate="age"
          :text="age"
          size="140px"
          layer-color="#ebedf0"
          :stroke-width="60"
        />
        <van-circle
          style="margin-left: 60px;"
          v-model="ratedata"
          :rate="ratedata"
          :text="ratedata"
          size="140px"
          layer-color="#ebedf0"
          :stroke-width="60"
        />
        <br /><br />
        <span>肌龄</span>
        <span style="margin-left: 173px;">总分</span>
        <br /><br />
        <van-divider style="margin-top: 0px;" />
      </van-tab>
      <van-tab>
        <div slot="title">出油情况</div>
        <van-row>
          <van-col span="6">
            <span
              style=" margin-left: 9px; text-align: left;font-size: large; font-weight: 1000; "
              >出油情况</span
            >
          </van-col>
          <van-col span="1"></van-col>
          <van-col>
            <div class="youmessage">中性偏油</div>
          </van-col>
        </van-row>
        <br />
        <br />
        <div :style="backgroundYou">
          <van-row type="flex">
            <van-col span="3"></van-col>
            <van-col span="8" style="margin-top: -11px;">偏干</van-col>
            <van-col span="4" style="margin-top: -11px;">中性</van-col>
            <van-col span="8" style="margin-top: -11px;">偏油</van-col>
          </van-row>
          <br /><br />

          <span v-for="(item, index) of oillist" :key="index">
            <van-row>
              <van-col span="3" style="margin-top: -16px;">{{
                item.text
              }}</van-col>
              <van-col span="19">
                <van-progress
                  style="margin-top: -11px;"
                  :percentage="item.number"
                  track-color="#f5fbf9"
                  color="#a2dcc9"
                  stroke-width="10"
                  :show-pivot="false"
                />
              </van-col>

              <br /><br />
            </van-row>
          </span>
          <div
            style=" padding-left: 8px padding-right: 8px; border-radius:10px;margin-top: -8px;  border: 10px solid white ; "
          >
            <p style="  font-size:small; text-align: left;">
              你的肌肤正常偏油，耐受性很好，现阶段护理要点如下：<br />·洗脸时不要追求涩感，要温和清洁，并做好基础保湿哦
              <br />
              ·针对黑头问题，要注意清洁别过度，可以搭配调理角质代谢、疏通毛孔的护肤品<br />
              ·黑眼圈以血管型和结构型为主，除了健康作息外，还可以使用促进眼周循环的眼霜
              <br />
              ·要坚持防晒哦，不仅能防晒黑，还能防晒老哈
            </p>
          </div>
          <br />
        </div>

        <van-divider style="margin-top: 0px;" />
      </van-tab>
      <van-tab>
        <div slot="title">细纹</div>
        <div
          style=" margin-left: 9px; text-align: left;font-size: large; font-weight: 1000; "
        >
          细纹
        </div>
        <br />
        <van-row type="flex">
          <van-col span="6"
            ><van-image width="70" height="80" :src="taitou1"></van-image
          ></van-col>
          <van-col span="6"
            ><van-image width="70" height="80" :src="leigou1"></van-image
          ></van-col>
          <van-col span="6"
            ><van-image width="70" height="80" :src="faling1"></van-image
          ></van-col>
          <van-col span="6"
            ><van-image width="70" height="80" :src="xiaoji"></van-image
          ></van-col>
        </van-row>
        <br />
        <div
          style=" padding-left: 8px;  padding-right: 8px; border-radius:10px;margin-top: -8px;  border: 10px solid white ; "
        >
          <p style="  font-size:small; text-align: left;">
            你的肌肤正常偏油，耐受性很好，现阶段护理要点如下：<br />·洗脸时不要追求涩感，要温和清洁，并做好基础保湿哦
            <br />
            ·针对黑头问题，要注意清洁别过度，可以搭配调理角质代谢、疏通毛孔的护肤品<br />
            ·黑眼圈以血管型和结构型为主，除了健康作息外，还可以使用促进眼周循环的眼霜
            <br />
            ·要坚持防晒哦，不仅能防晒黑，还能防晒老哈
          </p>
        </div>
        <van-divider style="margin-top: 0px;" />
      </van-tab>
      <van-tab>
        <div slot="title">痘痘</div>
        <div
          style=" margin-left: 9px; text-align: left;font-size: large; font-weight: 1000; "
        >
          痘痘
        </div>
        <br />
        <van-row>
          <van-col span="11"
            ><div>
              <span style=" font-size: x-large; color: #a2dcc9;">0</span
              ><br /><span style="font-size: small ; color:#999999"
                >明显痘痘数量</span
              >
            </div>
          </van-col>
          <van-col span="2"
            ><div
              style=" margin-top: 6px; margin-left: 13px; width: 1px;height: 30px; background:#DCDCDC"
            ></div>
          </van-col>
          <van-col span="11"
            ><div style="border-left: #C8C9CC;">
              <span style=" font-size: x-large;  color: #a2dcc9;">0</span
              ><br /><span style="font-size: small ; color:#999999"
                >明显痘印数量</span
              >
            </div></van-col
          >
        </van-row>
        <br /><br />
        <div :style="backgroundDou">
          <van-row type="flex">
            <van-col span="3"></van-col>
            <van-col span="8" style="margin-top: -11px;">轻度</van-col>
            <van-col span="4" style="margin-top: -11px;">中度</van-col>
            <van-col span="8" style="margin-top: -11px;">重度</van-col>
          </van-row>
          <br /><br />

          <span v-for="(item, index) of doulist" :key="index">
            <van-row>
              <van-col span="3" style="margin-top: -16px;">{{
                item.text
              }}</van-col>
              <van-col span="19">
                <van-progress
                  style="margin-top: -11px;"
                  :percentage="item.number"
                  track-color="#f5fbf9"
                  color="#a2dcc9"
                  stroke-width="10"
                  :show-pivot="false"
                />
              </van-col>

              <br /><br />
            </van-row>
          </span>
          <div
            style=" padding-left: 8px; padding-right: 8px; border-radius:10px;margin-top: -8px;  border: 10px solid white ; "
          >
            <p style="  font-size:small; text-align: left;">
              你的肌肤正常偏油，耐受性很好，现阶段护理要点如下：<br />·洗脸时不要追求涩感，要温和清洁，并做好基础保湿哦
              <br />
              ·针对黑头问题，要注意清洁别过度，可以搭配调理角质代谢、疏通毛孔的护肤品<br />
              ·黑眼圈以血管型和结构型为主，除了健康作息外，还可以使用促进眼周循环的眼霜
              <br />
              ·要坚持防晒哦，不仅能防晒黑，还能防晒老哈
            </p>
          </div>
          <br />
        </div>

        <van-divider style="margin-top: 0px;" />
      </van-tab>
      <van-tab>
        <div slot="title">黑头</div>
        <div
          style=" margin-left: 9px; text-align: left;font-size: large; font-weight: 1000; "
        >
          黑头
        </div>
        <br />
        <van-row type="flex">
          <van-col span="12"
            ><van-image width="70" height="80" :src="hei1"></van-image>
            <br /><span style="font-size: ; color:#a2dcc9 ;">{{
              heilist.heige
            }}</span>
          </van-col>
          <van-col span="12"
            ><van-image width="70" height="80" :src="hei"></van-image>
            <br /><span style="font-size:; color:#a2dcc9 ;"
              >{{ heilist.heizhanbi }}%</span
            >
          </van-col>
        </van-row>
        <br />
        <div
          style=" padding-left: 8px;padding-right: 8px; border-radius:10px;margin-top: -8px;  border: 10px solid white ; "
        >
          <p style="  font-size:small; text-align: left;">
            你的肌肤正常偏油，耐受性很好，现阶段护理要点如下：<br />·洗脸时不要追求涩感，要温和清洁，并做好基础保湿哦
            <br />
            ·针对黑头问题，要注意清洁别过度，可以搭配调理角质代谢、疏通毛孔的护肤品<br />
            ·黑眼圈以血管型和结构型为主，除了健康作息外，还可以使用促进眼周循环的眼霜
            <br />
            ·要坚持防晒哦，不仅能防晒黑，还能防晒老哈
          </p>
        </div>
        <van-divider style="margin-top: 0px;" />
      </van-tab>
      <van-tab>
        <div slot="title">毛孔</div>
        <div
          style=" margin-left: 9px; text-align: left;font-size: large; font-weight: 1000; "
        >
          毛孔
        </div>
        <br />
        <van-row type="flex">
          <van-col span="2"></van-col>
          <van-col span="12">
            <van-image height="" width="" :src="mao"> </van-image>
          </van-col>
          <van-col span="9"
            ><br /><br /><br /><span
              style=" font-size:xx-large; color: #a2dcc9;"
              >0.33%</span
            ><br /><span style="font-size: medium ; color:#999999"
              >毛孔占比</span
            >
          </van-col>
        </van-row>
        <div
          style=" padding-left: 8px;  padding-right: 8px; border-radius:10px;margin-top: -8px;  border: 10px solid white ; "
        >
          <p style="  font-size:small; text-align: left;">
            你的肌肤正常偏油，耐受性很好，现阶段护理要点如下：<br />·洗脸时不要追求涩感，要温和清洁，并做好基础保湿哦
            <br />
            ·针对黑头问题，要注意清洁别过度，可以搭配调理角质代谢、疏通毛孔的护肤品<br />
            ·黑眼圈以血管型和结构型为主，除了健康作息外，还可以使用促进眼周循环的眼霜
            <br />
            ·要坚持防晒哦，不仅能防晒黑，还能防晒老哈
          </p>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";
Vue.use(Tab);
Vue.use(Tabs);
import { Image } from "vant";
Vue.use(Image);
import { Circle } from "vant";
Vue.use(Circle);
import { Divider } from "vant";
Vue.use(Divider);
import { Col, Row } from "vant";
Vue.use(Col);
Vue.use(Row);
export default {
  name: "skinAnalyse",
  computed: {
    age: function() {
      // 通过vuex的getters方法来获取state里面的数据
      return this.$store.getters.getAge;
    }
  },
  data() {
    return {
      backgroundYou: {
        backgroundImage: "url(" + require("@/assets/img/you.png") + ")",
        backgroundRepeat: "no-repeat"
      },
      backgroundDou: {
        backgroundImage: "url(" + require("@/assets/img/doudou.png") + ")",
        backgroundRepeat: "no-repeat"
      },
      oillist: [
        { text: "额头", number: 56 },
        { text: "鼻子", number: 56 },
        { text: "左脸", number: 32 },
        { text: "右脸", number: 78 },
        { text: "下巴", number: 65 }
      ],
      doulist: [
        { text: "痘痘", number: 2 },
        { text: "痘印", number: 23 }
      ],
      heilist: {
        heige: 2,
        heizhanbi: 0.33
      },

      xiding: "true",
      ratedata: 86 /* 评分 */,
      lianimg: require("@/assets/img/renlian.png") /* 80分90以下顶部显示的人脸 */,
      lianimg1: require("@/assets/img/renlian1.png") /* 90分以上顶部显示的人脸 */,
      oilimg: require("@/assets/img/oil.png") /* 出油情况背景图片 */,
      taitou1: require("@/assets/img/taitou1.png"),
      leigou1: require("@/assets/img/leigou1.png"),
      faling1: require("@/assets/img/faling1.png"),
      xiaoji: require("@/assets/img/xiaoji.png"),
      hei: require("@/assets/img/hei2.png"),
      hei1: require("@/assets/img/hei1.png"),
      mao: require("@/assets/img/mao.png")
    };
  }
};
</script>

<style scoped>
.youmessage {
  font-size: 12px;
  color: #a2dcc9;
  border: 1px solid #a2dcc9;
  padding: 6px 10px;
  border-radius: 20px;
  font-weight: 500;
  margin-top: px;
}
</style>
