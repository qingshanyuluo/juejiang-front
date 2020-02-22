<template>
  <div>
    <van-nav-bar left-arrow @click-left="back">
      <template slot="title">
        <h3>全部任务</h3>
      </template>
    </van-nav-bar>

    <!-- 头部 -->
    <header>
      <div class="avator">
        <img src="../assets/img/tx.png" alt />
      </div>
      <div class="user-wrap">
        <div class="user-name">
          <div>我的购物基金</div>
          <img src="../assets/img/wh.png" alt />
        </div>
        <div class="user-counts">
          <img src="../assets/img/jb.png" alt />
          <div>{{ allIntegral }}</div>
        </div>
      </div>

      <van-button
        icon="flag-o"
        round
        type="info"
        size="small"
        @click="signin()"
        >{{ sign ? "已签到" : "点击签到" }}</van-button
      >
    </header>

    <main>
      <div class="days-wrap">
        <p>
          加油！已连续签到
          <span>{{ days }}</span>
          天
        </p>
        <div>
          <div class="calendar-wrap">
            <div
              :class="{ gold: index < days, grey: index >= days }"
              v-for="(items, index) in calendarList"
              :key="index"
            >
              <div class="calendar">+{{ items.integral }}</div>
              <span>{{ items.date }}</span>
            </div>
          </div>
          <span class="calendar-more">
            连签赚取更多基金
            <van-icon name="arrow-down" />
          </span>
        </div>
      </div>

      <div class="new-wrap">
        <div class="new-info">
          <h4>新人任务</h4>
          <p>
            已完成
            <span>0/1</span>
          </p>
        </div>
        <div class="new-content">
          <div class="new-icon"></div>
          <div class="new-txt">
            <div>
              <p>用户-完善资料</p>
              <p>基金 +16</p>
            </div>
            <div class="new-rate">已完成 70%</div>
          </div>
          <div class="new-tips">继续完善</div>
        </div>
      </div>

      <div class="new-wrap">
        <div class="new-info">
          <h4>日常任务</h4>
          <p>
            已完成
            <span>1/7</span>
          </p>
        </div>
        <div class="task-content">
          <div
            class="new-content"
            v-for="(items, index) in taskList"
            :key="index"
          >
            <div class="new-icon"></div>
            <div class="new-txt">
              <div>
                <p>{{ items.taskName }}</p>
                <p>基金 +{{ items.taskReward }}</p>
              </div>
            </div>
            <div class="new-tips">{{ items.taskTips }}</div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Vue from "vue";
import { Button } from "vant";
Vue.use(Button);
import { NavBar } from "vant";
import { Toast } from "vant";

Vue.use(Toast);
Vue.use(NavBar);
export default {
  methods: {
    signin() {
      this.days++;
      this.sign = true;
      Toast.success("签到成功");
    },
    back() {
      this.$router.go(-1);
    }
  },
  data() {
    return {
      allIntegral: "1",
      days: 2,
      today: 3,
      sign: false,
      calendarList: [
        {
          integral: 1,
          date: "第一天",
          isCheck: false
        },
        {
          integral: 1,
          date: "第二天",
          isCheck: false
        },
        {
          integral: 1,
          date: "第三天",
          isCheck: false
        },
        {
          integral: 1,
          date: "第四天",
          isCheck: false
        },
        {
          integral: 1,
          date: "第五天",
          isCheck: false
        },
        {
          integral: 1,
          date: "第六天",
          isCheck: false
        },
        {
          integral: 5,
          date: "第七天",
          isCheck: false
        }
      ],
      taskList: [
        {
          taskIcon: "",
          taskName: "点亮爱心，为内容点赞",
          taskReward: 1,
          taskTips: "去点赞"
        },
        {
          taskIcon: "",
          taskName: "点亮爱心，收藏内容",
          taskReward: 1,
          taskTips: "去收藏"
        },
        {
          taskIcon: "",
          taskName: "发布评论",
          taskReward: 3,
          taskTips: "去评论"
        },
        {
          taskIcon: "",
          taskName: "分享喜爱的内容",
          taskReward: 10,
          taskTips: "去分享"
        },
        {
          taskIcon: "",
          taskName: "发布新内容",
          taskReward: 5,
          taskTips: "去发布"
        },
        {
          taskIcon: "",
          taskName: "发布内容入选首页编辑推荐",
          taskReward: 25,
          taskTips: "去发布"
        },
        {
          taskIcon: "",
          taskName: "今日签到",
          taskReward: 1,
          taskTips: "去签到"
        }
      ]
    };
  }
};
</script>

<style scoped>
/* 日常任务 */
.task-content .task-icon {
  background-color: #ddd;
}
.task-content {
  display: flex;
  flex-direction: column;
}
.new-txt .new-rate {
  font-size: 12px;
  color: #ccc;
}
.new-content .new-txt p:first-child {
  font-weight: 550;
}
.new-content .new-txt p:last-child {
  color: #d6c29d;
}
.new-content .new-txt p {
  margin: 0;
}
.new-content .new-txt {
  flex: 0.9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}
.new-content .new-tips {
  font-size: 12px;
  color: #d6c29d;
  border: 1px solid #d6c29d;
  padding: 6px 10px;
  border-radius: 20px;
}
.new-content .new-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ccc;
}
.new-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 0;
  border-bottom: 1px solid #eee;
}
.new-info p span {
  font-size: 16px;
}
.new-info p {
  margin: 0;
  font-size: 14px;
  color: #ccc;
}
.new-info h4 {
  margin: 0;
  padding: 0;
  font-size: 18px;
}
.new-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.new-wrap {
  padding: 20px 10px 0 10px;
  border-top: 10px solid #f5f5f5;
}
/* 签到日历 */
.calendar-more {
  font-size: 13px;
  color: #ccc;
}
span {
  font-size: 12px;
  color: #ccc;
}
.calendar {
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
}
.calendar-wrap {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 40px;
}
.days-wrap p::before {
  content: "—";
}
.days-wrap p::after {
  content: "—";
}
.days-wrap p span {
  color: #fdad54;
}
.days-wrap p {
  font-weight: 550;
  font-size: 17px;
}
.days-wrap {
  text-align: center;
  padding-bottom: 10px;
}
/* 头部 */
h3 {
  text-align: center;
  margin: 10px;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-image: url(../assets/img/qdbg.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.avator {
  flex: 0.2;
}
header .avator img {
  width: 60px;
  overflow: hidden;
  background-origin: 2px solid #fff;
  border-radius: 30px;
}
header .user-wrap {
  flex: 0.6;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-left: 6px;
}
.user-wrap .user-name {
  display: flex;
  align-items: center;
  color: #666;
  font-size: 16px;
}
.user-wrap .user-name img {
  width: 14px;
  padding-left: 6px;
}
.user-counts {
  display: flex;
  align-items: center;
  padding-top: 10px;
  font-size: 18px;
  color: #fdad54;
}
.user-counts img {
  width: 22px;
  padding-right: 4px;
}
.sign-wrap {
  flex: 0.2;
  height: 10px;
  line-height: 10px;
  font-size: 14px;
  color: #fff;
  padding: 10px 10px;
  background-color: #dcdcdc;
  text-align: center;
  border-radius: 20px;
}
.gold {
  font-size: 12px;
  color: #ccc;
  border-radius: 20px;
  color: #d6c29d;
  border: 1px solid #d6c29d;
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
}
.grey {
  font-size: 12px;
  color: #ccc;
  border-radius: 20px;
  color: #ccc;
  border: 1px solid #ccc;
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
}
</style>
