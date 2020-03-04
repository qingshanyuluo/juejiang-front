<template>
  <div>
    <div v-for="(item, index) in articles[type]" :key="index">
        <router-link :to="{ path: '/article', query: {id: item.articleId } }">
        <article1
          :image="item.image"
          :title="item.title"
          :description="item.description"
          :comments="item.comments"
          :likes="item.likes"
          :author="item.author"
          :authorImage="item.authorImage"
        ></article1>
        </router-link>
    </div>
  </div>
</template>

<script>
import Article1 from "./Article1";
export default {
  props: ["type"], // 数字 0~5 对应6页
  components: { Article1 },
  data() {
    return {
      // 二维数组，第一维的个体表示一类文章的集合，第二维的个体才是文章
      articles: [
        [
          {
            articleId: 11,
            image: require("../../image/homeimage/11.png"),
            title: "种草丨别慌！冬季干燥护肤攻略已经帮你准备好了",
            description: "让你水水润润美翻天！！！",
            comments: 18,
            likes: 139,
            author: "晨安",
            authorImage: require("../../image/homeimage/11_5.png")
          },
          {
            articleId: 12,
            image: require("../../image/homeimage/12.png"),
            title: "干货丨纠正护肤误区，你的护肤品真的吸收了吗？",
            description: "不能白白浪费money!",
            comments: 43,
            likes: 435,
            author: "女神进化论",
            authorImage: require("../../image/homeimage/12_1.png")
          },
          {
            articleId: 13,
            image: require("../../image/homeimage/13.png"),
            title: "干货丨那些关于“清洁”的谣言，集中起来说一下吧",
            description: "在其位，谋其政；不在其位，不谋其政",
            comments: 31,
            likes: 213,
            author: "基础颜究",
            authorImage: require("../../image/homeimage/13_5.png")
          },
          {
            articleId: 14,
            image: require("../../image/homeimage/14.png"),
            title: "科普丨面部毛孔粗大这种世纪难题究竟该怎么办？",
            description: "谁不讨厌毛孔啊？但咱也别太纠结了",
            comments: 91,
            likes: 176,
            author: "护肤达人",
            authorImage: require("../../image/homeimage/14_5.png")
          },
          {
            articleId: 15,
            image: require("../../image/homeimage/15.png"),
            title: "干货丨衰老竟不是匀速的？3 个突然变老的年龄你还差多久",
            description: "看完这篇你就有底了～",
            comments: 41,
            likes: 155,
            author: "三亩",
            authorImage: require("../../image/homeimage/15_5.png")
          },
          {
            articleId: 16,
            image: require("../../image/homeimage/16.png"),
            title: "科普丨想美白抗老，这类成分你不能不了解",
            description: "来了解一下胜肽（内含产品推荐）～",
            comments: 42,
            likes: 312,
            author: "kenjijoel",
            authorImage: require("../../image/homeimage/16_1.png")
          },
          {
            articleId: 17,
            image: require("../../image/homeimage/17.png"),
            title: "测评丨没想到，9 块 9 眉笔完胜 200 元大牌",
            description: "提供一个帮你选眉笔的「方向」～",
            comments: 89,
            likes: 753,
            author: "医美喵",
            authorImage: require("../../image/homeimage/17_1.png")
          },
          {
            articleId: 18,
            image: require("../../image/homeimage/18.png"),
            title: "吃惑丨吵着吃素减肥的，咋都没成功？",
            description: "GI 值了解一下～",
            comments: 76,
            likes: 911,
            author: "混子谈命",
            authorImage: require("../../image/homeimage/18_1.png")
          },
          {
            articleId: 19,
            image: require("../../image/homeimage/19.png"),
            title: "私奔丨VC+鸡尾酒精华怎么搭配？A 醇这样用会更刺激？",
            description: "关键词：保湿 胜肽 防晒 希思黎全能乳液",
            comments: 99,
            likes: 643,
            author: "糊奔奔",
            authorImage: require("../../image/homeimage/19_1.png")
          }
        ],
        [
          {
            articleId: 21,
            image: require("../../image/homeimage/21.png"),
            title: "闲谈丨我的黑头毛孔护理心得",
            description: "再给你们推荐几样放缓出油的好东西",
            comments: 42,
            likes: 312,
            author: "-RoX-",
            authorImage: require("../../image/homeimage/21_5.png")
          },
          {
            articleId: 22,
            image: require("../../image/homeimage/22.png"),
            title: "战痘心得丨身体痘看着心烦，去起来却不算难",
            description: "明年夏天，和露背装、吊带裙愉快招手~",
            comments: 23,
            likes: 111,
            author: "美容大王",
            authorImage: require("../../image/homeimage/22_5.png")
          },
          {
            articleId: 23,
            image: require("../../image/homeimage/23.png"),
            title: "教程丨假睫毛佩戴心得，从此妈妈再也不用担心你的睫毛！",
            description: "短小睫毛星人速速进来看～",
            comments: 43,
            likes: 435,
            author: "Janicekidd",
            authorImage: require("../../image/homeimage/23_5.png")
          },
          {
            articleId: 24,
            image: require("../../image/homeimage/24.png"),
            title: "喵喵头条帖丨亲测有效的美白产品在这里！",
            description: "看完忍不住 buy buy buy ~",
            comments: 37,
            likes: 142,
            author: "种草喵",
            authorImage: require("../../image/homeimage/24_5.png")
          },
          {
            articleId: 25,
            image: require("../../image/homeimage/25.png"),
            title: "支招丨多管齐下除黑头，跟草莓鼻说 byebye",
            description: "别再用黑头贴、撕拉面膜糟蹋你的鼻子啦",
            comments: 23,
            likes: 666,
            author: "配方师Gigi",
            authorImage: require("../../image/homeimage/25_5.png")
          },
          {
            articleId: 26,
            image: require("../../image/homeimage/26.png"),
            title: "经验 | 不只是用护手霜就可以！护手还要这些方法",
            description: "拯救你的第二张脸！",
            comments: 21,
            likes: 422,
            author: "糊奔奔",
            authorImage: require("../../image/homeimage/26_5.png")
          },
          {
            articleId: 27,
            image: require("../../image/homeimage/27.png"),
            title: "种草丨8 支椰香护手霜大合集，总有一支是你的菜....",
            description: "斩获男神还要呵护好自己的第二张脸鸭",
            comments: 37,
            likes: 176,
            author: "指上菁芜",
            authorImage: require("../../image/homeimage/27_5.png")
          },
          {
            articleId: 28,
            image: require("../../image/homeimage/28.png"),
            title: "种拔草丨记录近期用的护肤单品（最后一款巨雷！）",
            description: "精华、眼霜、喷雾、防晒都有~",
            comments: 23,
            likes: 190,
            author: "诗与彼方",
            authorImage: require("../../image/homeimage/28_5.png")
          },
          {
            articleId: 29,
            image: require("../../image/homeimage/29.png"),
            title: "喵喵头条帖丨摆脱“干”尬境地，先从温和洁面开始",
            description: "大干皮们无限回购的洗面奶在这里(～￣▽￣)～",
            comments: 30,
            likes: 203,
            author: "青丝茧",
            authorImage: require("../../image/homeimage/29_5.png")
          },
          {
            articleId: 30,
            image: require("../../image/homeimage/30.png"),
            title: "种草丨油敏皮保湿挑这些",
            description: "清爽保湿老司机开车啦~不是油敏皮也可以尽情用~",
            comments: 91,
            likes: 768,
            author: "初晓微芒",
            authorImage: require("../../image/homeimage/30_5.png")
          }
        ],
        [
          {
            articleId: 31,
            image: require("../../image/homeimage/31.png"),
            title: "私奔丨虽然各平台都在疯狂吹捧，但我还是想客观地聊聊这 9 款",
            description:
              "关键词：传明酸 虾青素 玫瑰果油 mad hippie 至本 富勒烯 新型A酯",
            comments: 19,
            likes: 105,
            author: "萌傻卿",
            authorImage: require("../../image/homeimage/31_5.png")
          }
        ]
      ]
    };
  }
};
</script>

<style></style>
