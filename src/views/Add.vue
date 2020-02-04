<template>
  <div>
    <header>
      <div style=" background: #f5f5f5;">
        <van-icon
          size="30"
          @click="back"
          color="darkgray"
          style=" background: #f5f5f5;"
          name="arrow-up"
        />
      </div>
      <div class="bg-img"></div>
      <div class="check-btn">
        <van-image
          style="margin-top: 5px;"
          round
          width="2rem"
          height="2rem"
          fit="fill"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <span>&nbsp; &nbsp;今天是你加入护肤的第100天</span>
      </div>
      <div class="problem-wrap">
        <div class="problem">
          <img src="@/assets/img/wh.png" alt />
          <span>向小助手提个问题</span>
        </div>
      </div>
      <div class="diy-wrap">
        <br />
        <div class="diy-content">
          <div class="diy-items">
            <div></div>
            <span>写心得</span>
          </div>
          <van-uploader :after-read="afterRead">
            <div class="diy-items">
                <div></div>
                <span>测肤</span>
            </div>
          </van-uploader>
          <div class="diy-items" @click="goAddGoods">
            <div></div>
            <span>添加开封</span>
          </div>
          <div class="diy-items">
            <div></div>
            <span>朋友们</span>
          </div>
        </div>
      </div>
    </header>
    <main>
      <br />
      <div class="state-wrap">
        <div class="state">
          <div class="state-tips">
            <span>我的肤质状况</span>
            <p>
              <span class="number">72</span>
              <span>综合得分</span>
            </p>
          </div>
          <div class="state-content">
            <p>肤质：</p>
            <span>XXXXXXXXXXXXXXXXXXXXXXXX</span>
          </div>
          <div class="state-content">
            <p>肤质：</p>
            <span>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span>
          </div>
          <div class="state-footer">根据11月5日——11月11日的检测记录生成</div>
        </div>
      </div>
      <!-- 按需定制 -->
      <div class="diy-wrap">
        <h4>按需定制</h4>
        <div class="diy-content">
          <div class="diy-items">
            <div></div>
            <span>白成一道光</span>
          </div>
          <div class="diy-items">
            <div></div>
            <span>年年十八岁</span>
          </div>
          <div class="diy-items" @click="goReport">
            <div></div>
            <span>逃离月球</span>
          </div>
          <div class="diy-items">
            <div></div>
            <span>干掉草莓鼻</span>
          </div>
          <div class="diy-items">
            <div></div>
            <span>我要水光肌</span>
          </div>
          <div class="diy-items">
            <div></div>
            <span>毛孔收缩术</span>
          </div>
          <div class="diy-items">
            <div></div>
            <span>我要试试妆</span>
            <!-- 妆容部分，暂不使用 -->
          </div>
          <div class="diy-items">
            <div></div>
            <span>我该怎么画</span>
            <!-- 妆容部分，暂不使用 -->
          </div>
        </div>
      </div>
      <!-- 我的开封 -->
      <div class="mine-wrap">
        <h4>我的开封</h4>
        <p>护肤品有效期，我帮你记录</p>
        <van-button round type="primary" size="small">添加开封</van-button>
        <div class="mine-list">
          <div class="mine-items" v-for="(items,index) in mineList" :key="index">
            <div></div>
            <!-- 放置图片处 -->
            <span>剩余 {{items.mineDays}} 天</span>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Vue from 'vue';
import { Uploader } from 'vant';

Vue.use(Uploader);
export default {
  data() {
    return {
      checked: false,
      mineList: [
        {
          mineIcons: "",
          mineDays: 183
        },
        {
          mineIcons: "",
          mineDays: 183
        },
        {
          mineIcons: "",
          mineDays: 183
        },
        {
          mineIcons: "",
          mineDays: 183
        }
      ]
    };
  },
  methods: {
    goAddGoods() {
      this.$router.push({ path: "/Goods" });
    },
    back() {
      this.$router.go(-1);
    },
    goReport() {
      this.$router.push({ path: "/report" });
    },
    afterRead(file) {
      var settings = {
        "url": "https://api.yimei.ai/v2/api/face/analysis/1",
        "method": "POST",
        "tixmeout": 0,
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Basic MDYyNjI4ZWNlOWU1ZmNmYjpiMjRjN2YyMmNlZjQyZTUxZjIyZmZlZmI0ZWZjZjY4Yg=="
        },
        "data": {
            "image": file
        }
      };
      
      console.log(file);
    }
  }
};
</script>

<style scoped>
/* 我的开封 */
.mine-list .mine-items span {
  text-align: center;
  font-size: 12px;
  padding-top: 10px;
}
.mine-list .mine-items {
  flex: 0.3;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
}
.mine-list .mine-items div {
  width: 100px;
  height: 100px;
  border-radius: 20px;
  background-color: #fff;
}
.mine-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
.mine-wrap p {
  font-size: 14px;
}
.mine-wrap h4,
.mine-wrap p {
  margin: 10px 0;
}
.mine-wrap {
  background-color: #f5f5f5;
  padding: 20px;
}
/* 按需定制 */
.diy-wrap .diy-items span {
  font-size: 14px;
  color: #ccc;
  padding: 15px 0;
}
.diy-wrap .diy-items div {
  background-color: #ccc;
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.diy-wrap .diy-items {
  flex-basis: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.diy-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.diy-wrap {
  background-color: #f5f5f5;
  padding: 20px;
}
/* 肤质状况 */
.state-footer {
  color: #83c5d5;
  font-size: 12px;
  text-align: center;
}
.state-content span {
  width: 80%;
  display: inline-block;
  font-size: 13px;
  color: #666;
  word-break: break-all;
  word-wrap: break-word;
}
.state-content p {
  font-size: 16px;
  color: #333;
  display: inline-block;
}
.state-content {
  padding: 10px;
}
.state-tips p span {
  font-size: 14px;
}
.state-tips p .number {
  font-size: 50px;
}
.state-tips p {
  display: flex;
  flex-direction: column;
  color: #60b2cd;
  margin: 0;
  padding-right: 20px;
}
.state-tips {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.state-wrap .state {
  background-color: #bfe6e4;
  padding: 10px;
  border-radius: 10px;
}
.state-wrap {
  padding: 20px;
  background-color: #f5f5f5;
  margin-top: -30px;
}

/* 分类 */
.sort-wrap .items-sort span {
  font-size: 14px;
  font-weight: 550;
  padding-top: 10px;
  color: #555;
}
.sort-wrap .items-sort .sort-icons {
  background-color: #fff;
  border: 1px solid #ccc;
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.sort-wrap .items-sort {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sort-wrap {
  background-color: #f5f5f5;
  padding: 30px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* 头部照片 */
.problem span {
  padding-left: 10px;
}
.problem img {
  width: 20px;
  height: 20px;
}
.problem {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  margin: 0 40px;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
}
.problem-wrap {
  background-color: #f5f5f5;
}
.van-checkbox {
  justify-content: center;
}
.check-btn {
  text-align: center;
  font-size: 14px;
  color: #ccc;
  padding: 20px 0;
  background-color: #f5f5f5;
}
.bg-img {
  height: 250px;
  background: #f5f5f5;
}
p {
  margin: 0;
}
</style>