<template>
  <div id="shop">
    <header>
      <div class="header-tips">
        <span>分类</span>
        <span>品牌</span>
      </div>
      <van-icon name="search" />
    </header>
    <div class="bg"></div>
    <section class="type-wrap">
      <div class="type-items" v-for="(items,index) in typeList" :key="index">
        <div class="type-icons" @click="changeTypeList(index)">
          <img :src="items.typeIcons" alt />
        </div>
        <span>{{items.typeName}}</span>
      </div>
    </section>
    <div class="goods-list">
      <p>
        <span></span>
        热门分类
      </p>
      <van-grid :border="false">
        <van-grid-item
          :to="{path:'/goods'}"
          :icon="items.icons"
          :text="items.name"
          v-for="(items,index) in showList"
          :key="index"
        />
      </van-grid>
	  <br><br>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typeList: [
        {
          typeIcons: require("@/assets/img/tjian.png"),
          typeName: "推荐"
        },
        {
          typeIcons: require("@/assets/img/hf1.png"),
          typeName: "护肤"
        },
        {
          typeIcons: require("@/assets/img/caizhuang.png"),
          typeName: "彩妆"
        },
        {
          typeIcons: require("@/assets/img/meiti.png"),
          typeName: "美体"
        },
        {
          typeIcons: require("@/assets/img/gehu.png"),
          typeName: "个护"
        }
      ],
      goodsList: [
        [
          {
            icons: require("@/assets/img/jiemian.png"),
            name: "洁面"
          },
          {
            icons: require("@/assets/img/huazhuangs.png"),
            name: "化妆水"
          },
          {
            icons: require("@/assets/img/jinghua.png"),
            name: "精华"
          },
          {
            icons: require("@/assets/img/luye.png"),
            name: "乳液"
          },
          {
            icons: require("@/assets/img/面霜.png"),
            name: "面霜"
          },
          {
            icons: require("@/assets/img/眼部护理.png"),
            name: "眼部护理"
          },
          {
            icons: require("@/assets/img/防晒.png"),
            name: "防晒"
          },
          {
            icons: require("@/assets/img/妆前隔离.png"),
            name: "妆前隔离"
          },
          {
            icons: require("@/assets/img/粉底.png"),
            name: "粉底"
          },
          {
            icons: require("@/assets/img/粉饼.png"),
            name: "粉饼"
          },
          {
            icons: require("@/assets/img/遮瑕.png"),
            name: "遮瑕"
          },
          {
            icons: require("@/assets/img/唇膏.png"),
            name: "唇膏"
          },
          {
            icons: require("@/assets/img/卸妆.png"),
            name: "卸妆"
          },
          {
            icons: require("@/assets/img/BB霜.png"),
            name: "BB霜"
          },
          {
            icons: require("@/assets/img/CC霜.png"),
            name: "CC霜"
          },
          {
            icons: require("@/assets/img/面部护理油.png"),
            name: "面部护理油"
          }
        ],
        [
          {
            icons: require("@/assets/img/乳液面霜1.png"),
            name: "乳液面霜1"
          },
          {
            icons: require("@/assets/img/乳液面霜2.jpg"),
            name: "乳液面霜2"
          },
          {
            icons: require("@/assets/img/乳液面霜3.jpg"),
            name: "乳液面霜3"
          }
        ],
        [
          {
            icons: require("@/assets/img/精华1.png"),
            name: "精华1"
          },
          {
            icons: require("@/assets/img/精华2.png"),
            name: "精华2"
          },
          {
            icons: require("@/assets/img/精华3.png"),
            name: "精华3"
          }
        ],
        [
          {
            icons: require("@/assets/img/阿玛尼giorgio 乳霜.png"),
            name: "乳霜"
          }
        ],
        [
          {
            icons: require("@/assets/img/兰蔻.png"),
            name: "兰蔻"
          }
        ],
        [
          {
            icons: require("@/assets/img/护肤水1.png"),
            name: "护肤水1"
          },
          {
            icons: require("@/assets/img/护肤水2.png"),
            name: "护肤水2"
          },
          {
            icons: require("@/assets/img/护肤水3.png"),
            name: "护肤水3"
          }
        ]
      ],
      showList: [
          {
            icons: require("@/assets/img/jiemian.png"),
            name: "洁面"
          },
          {
            icons: require("@/assets/img/huazhuangs.png"),
            name: "化妆水"
          },
          {
            icons: require("@/assets/img/jinghua.png"),
            name: "精华"
          },
          {
            icons: require("@/assets/img/luye.png"),
            name: "乳液"
          },
          {
            icons: require("@/assets/img/面霜.png"),
            name: "面霜"
          },
          {
            icons: require("@/assets/img/眼部护理.png"),
            name: "眼部护理"
          },
          {
            icons: require("@/assets/img/防晒.png"),
            name: "防晒"
          },
          {
            icons: require("@/assets/img/妆前隔离.png"),
            name: "妆前隔离"
          },
          {
            icons: require("@/assets/img/粉底.png"),
            name: "粉底"
          },
          {
            icons: require("@/assets/img/粉饼.png"),
            name: "粉饼"
          },
          {
            icons: require("@/assets/img/遮瑕.png"),
            name: "遮瑕"
          },
          {
            icons: require("@/assets/img/唇膏.png"),
            name: "唇膏"
          },
          {
            icons: require("@/assets/img/卸妆.png"),
            name: "卸妆"
          },
          {
            icons: require("@/assets/img/BB霜.png"),
            name: "BB霜"
          },
          {
            icons: require("@/assets/img/CC霜.png"),
            name: "CC霜"
          },
          {
            icons: require("@/assets/img/面部护理油.png"),
            name: "面部护理油"
          }
        ],
    };
  },
  methods: {
   
    changeTypeList(e) {
        this.showList = this.goodsList[e]
    }
  }
};
</script>

<style scoped>
@import "../../assets/css/remove-scrollBar.css";

/* 商品列表 */
.van-grid-item >>> .van-grid-item__icon {
  font-size: 46px;
}
.goods-list p span {
  display: inline-block;
  width: 2px;
  height: 10px;
  background-color: rgb(240, 135, 135);
}
.goods-list p {
  padding-left: 10px;
  font-size: 13px;
  color: #555555;
}
.goods-list {
  background-color: #fff;
  border: 10px solid #f5f5f5;
  padding: 10px;
  border-radius: 20px;
}
/* 分类 */
.bg {
  width: 100%;
  height: 82vh;
  z-index: -1;
  background-color: #f5f5f5;
}
.type-icons {
  width: 30px;
  height: 30px;
}
.type-icons img {
  width: 100%;
  height: 100%;
}
.type-wrap .type-items {
  flex: 0.2;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  margin-left: 10px;
  font-size: 14px;
  color: #999;
  border-radius: 10px;
}
.type-wrap {
  display: flex;
  align-items: center;
  margin-top: -150%;
}
/* 头部 */
header .header-tips span:first-child {
  color: #333;
  font-weight: 550;
  border-bottom: 1px solid rgb(240, 119, 119);
}
header .header-tips span:last-child {
  color: #999;
}
header .header-tips span {
  padding-bottom: 5px;
  margin-left: 10px;
}
header .header-tips {
  flex: 1;
  font-size: 16px;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 30px 10px 70px 10px;
  background-image: url("../../assets/img/goodsbg.png");
}
p {
  margin: 0;
}
</style>>
    