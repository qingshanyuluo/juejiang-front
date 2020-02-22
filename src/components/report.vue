<template>
  <div>
    <van-nav-bar title="美白" left-arrow @click-left="back"> </van-nav-bar>
    <header>
      <h4 class="kaitou">我的美白方案</h4>
      <div class="content-wrap">
        <p>
          你的肌肤偏油，比较敏感，基本上v空间的v空间的数据都是女方v南方的v富家女范巨峰v将敌人打死
        </p>
        <div>
          <p>【1,护理要点】</p>
          <span
            >当局啊好的数据都是v的恐惧的肌肤v肺结核放就放了三十六受到蒋介石零零</span
          >
        </div>
      </div>
      <div class="content-footer">
        展开
        <van-icon name="arrow-down" />
      </div>
      <van-grid :border="false">
        <van-grid-item icon="photo-o" text="精华" />
        <van-grid-item icon="photo-o" text="护肤水" />
        <van-grid-item icon="photo-o" text="面霜" />
        <van-grid-item icon="photo-o" text="医疗美容" />
      </van-grid>
    </header>
    <main>
      <div class="goods-list" v-for="(items, index) in list" :key="index">
        <h5>{{ items.tips }}</h5>
        <div
          v-for="(goods, index) in items.goodes"
          :key="index"
          class="goods-items"
        >
          <div class="goods-img">
            <img :src="goods.img" alt="" />
          </div>
          <div class="goods-info">
            <p>{{ goods.name }}</p>
            <p>{{ goods.info }}</p>
            <p>{{ goods.puduct }}</p>
          </div>
          <div class="rate-wrap">
            <van-circle
              v-model="currentRate"
              layer-color="#eee"
              color="#73c2c7"
              :rate="85"
              :speed="100"
              :text="text"
            />
          </div>
        </div>
        <div class="goods-footer">
          查看更多
          <!-- <van-icon name="arrow-down" /> -->
          <van-icon name="arrow" />
        </div>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    }
  },
  data() {
    return {
      text: "85%",
      currentRate: 0,
      list: [
        {
          tips: "精华",
          goodes: [
            {
              img: require("@/assets/img/兰蔻.png"),
              name: "亚芬芳新活美白锦润淡斑精华",
              info: "加入了美白活性成分，效果好，价格不高，就是完美，深受喜爱",
              puduct: "中国 内地 · ￥390/40ml"
            },
            {
              img: require("@/assets/img/兰蔻.png"),
              name: "亚芬芳新活美白锦润淡斑精华",
              info: "加入了美白活性成分，效果好，价格不高，就是完美，深受喜爱",
              puduct: "中国 内地 · ￥390/40ml"
            },
            {
              img: require("@/assets/img/兰蔻.png"),
              name: "亚芬芳新活美白锦润淡斑精华",
              info: "加入了美白活性成分，效果好，价格不高，就是完美，深受喜爱",
              puduct: "中国 内地 · ￥390/40ml"
            }
          ]
        },
        {
          tips: "精华",
          goodes: [
            {
              img: require("@/assets/img/兰蔻.png"),
              name: "亚芬芳新活美白锦润淡斑精华",
              info: "加入了美白活性成分，效果好，价格不高，就是完美，深受喜爱",
              puduct: "中国 内地 · ￥390/40ml"
            },
            {
              img: require("@/assets/img/兰蔻.png"),
              name: "亚芬芳新活美白锦润淡斑精华",
              info: "加入了美白活性成分，效果好，价格不高，就是完美，深受喜爱",
              puduct: "中国 内地 · ￥390/40ml"
            },
            {
              img: require("@/assets/img/兰蔻.png"),
              name: "亚芬芳新活美白锦润淡斑精华",
              info: "加入了美白活性成分，效果好，价格不高，就是完美，深受喜爱",
              puduct: "中国 内地 · ￥390/40ml"
            }
          ]
        },
        {
          tips: "精华",
          goodes: [
            {
              img: require("@/assets/img/兰蔻.png"),
              name: "亚芬芳新活美白锦润淡斑精华",
              info: "加入了美白活性成分，效果好，价格不高，就是完美，深受喜爱",
              puduct: "中国 内地 · ￥390/40ml"
            },
            {
              img: require("@/assets/img/兰蔻.png"),
              name: "亚芬芳新活美白锦润淡斑精华",
              info: "加入了美白活性成分，效果好，价格不高，就是完美，深受喜爱",
              puduct: "中国 内地 · ￥390/40ml"
            },
            {
              img: require("@/assets/img/兰蔻.png"),
              name: "亚芬芳新活美白锦润淡斑精华",
              info: "加入了美白活性成分，效果好，价格不高，就是完美，深受喜爱",
              puduct: "中国 内地 · ￥390/40ml"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.kaitou {
  text-align: left;
  font-weight: 600;
}
.goods-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
  color: #73c2c7;
  font-size: 13px;
  padding: 20px;
}
.rate-wrap {
  padding-right: 10px;
}
.goods-info p {
  margin: 4px;
}
.goods-info p:nth-child(2) {
  color: #666;
  font-size: 14px;
  line-clamp: 2;
  text-overflow: ellipsis;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.goods-info p:nth-child(3) {
  color: #999;
  font-size: 12px;
}
.goods-info {
  margin: 0 10px;
  font-size: 16px;
  color: #333;
  flex: 1;
}
.goods-items .goods-img {
  width: 100px;
  height: 100px;
}
.goods-list .goods-items {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 20px 0;
}
.goods-list h5 {
  font-size: 20px;
  font-weight: 550;
  padding: 20px;
}
img {
  width: 100%;
  height: 100%;
}
h5 {
  margin: 0;
}
.content-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
  color: aquamarine;
  font-size: 13px;
  padding: 20px;
  border-bottom: 1px solid #eee;
}
header .content-wrap {
  padding: 10px;
  font-size: 14px;
}
header h4 {
  margin: 0;
  padding-left: 10px;
  font-weight: normal;
}
header {
  letter-spacing: 1px;
}</style
>>
