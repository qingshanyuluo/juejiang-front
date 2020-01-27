<template>
  <div style="margin: 8px">
    <van-col span="12">
      <article2 :isFirst="true"
        :image="first.image"
        :title="first.title"
        :subtitle="first.subtitle"
        :description1="first.description1"
        :description2="first.description2"
        :likes="first.likes"
        :author="first.author"
        :authorImage="first.authorImage"
      />
      <article2  v-for="(item, index) in articles[index]" :key="index"
        :isFirst="false"
        :image="item.image"
        :title="item.title"
        :subtitle="item.subtitle"
        :description1="item.description1"
        :description2="item.description2"
        :likes="item.likes"
        :author="item.author"
        :authorImage="item.authorImage"/>
    </van-col>
    <van-col span="12">
      <article2  v-for="(item, index) in articles[index]" :key="index"
        :isFirst="false"
        :image="item.image"
        :title="item.title"
        :subtitle="item.subtitle"
        :description1="item.description1"
        :description2="item.description2"
        :likes="item.likes"
        :author="item.author"
        :authorImage="item.authorImage"/>
    </van-col>
  </div>
</template>

<script>
import Article2 from "./Article2"
export default {
  props: ["index"],
  components: {
    Article2
  },
  data() {
    return {
      first: {
        articleId: 11,
        image: require('../../image/homeimage/11.png'),
        title: '标题撒酒疯拉萨解放沙拉题',
        subtitle: '副标题',
        description1: '描述放大范德萨范德萨发发',
        description2: '描述放大范德萨范德萨发发',
        likes: 42,
        author: '作者名',
        authorImage: require('../../image/homeimage/3.png')
      },
      // 二维数组，第一维的个体表示一类文章的集合，第二维的个体才是文章
      articles: [
        [
          {
            articleId: 11,
            image: require('../../image/homeimage/11.png'),
            title: '标题撒酒疯拉萨解放沙拉题',
            subtitle: '副标题',
            description1: '描述放大范德萨范德萨发发',
            description2: '描述放大范德萨范德萨发发',
            likes: 42,
            author: '作者名',
            authorImage: require('../../image/homeimage/3.png')
          }, {
            articleId: 12,
            image: require('../../image/homeimage/11.png'),
            title: '标题标题标题标题标题标发撒分厘卡撒酒疯拉萨解放沙拉题',
            description: '描述放大范德萨范德萨发发',
            comments: 21,
            likes: 42,
            author: '作者名',
            authorImage: require('../../image/homeimage/3.png')
          }, {
            articleId: 13,
            image: require('../../image/homeimage/11.png'),
            title: '标题标题标题标题标题标发撒分厘卡撒酒疯拉萨解放沙拉题',
            description: '描述放大范德萨范德萨发发',
            comments: 21,
            likes: 42,
            author: '作者名',
            authorImage: require('../../image/homeimage/3.png')
          }, {
            articleId: 14,
            image: require('../../image/homeimage/11.png'),
            title: '标题标题标题标题标题标发撒分厘卡撒酒疯拉萨解放沙拉题',
            description: '描述放大范德萨范德萨发发',
            comments: 21,
            likes: 42,
            author: '作者名',
            authorImage: require('../../image/homeimage/3.png')
          }, {
            articleId: 15,
            image: require('../../image/homeimage/11.png'),
            title: '标题标题标题标题标题标发撒分厘卡撒酒疯拉萨解放沙拉题',
            description: '描述放大范德萨范德萨发发',
            comments: 21,
            likes: 42,
            author: '作者名',
            authorImage: require('../../image/homeimage/3.png')
          }
        ], [
          {
            articleId: 21,
            image: require('../../image/homeimage/11.png'),
            title: '标题标题标题标题标题标发撒分厘卡撒酒疯拉萨解放沙拉题',
            description: '描述放大范德萨范德萨发发',
            comments: 21,
            likes: 42,
            author: '作者名',
            authorImage: require('../../image/homeimage/3.png')
          }, {
            articleId: 22,
            image: require('../../image/homeimage/11.png'),
            title: '标题标题标题标题标题标发撒分厘卡撒酒疯拉萨解放沙拉题',
            description: '描述放大范德萨范德萨发发',
            comments: 21,
            likes: 42,
            author: '作者名',
            authorImage: require('../../image/homeimage/3.png')
          }, {
            articleId: 23,
            image: require('../../image/homeimage/11.png'),
            title: '标题标题标题标题标题标发撒分厘卡撒酒疯拉萨解放沙拉题',
            description: '描述放大范德萨范德萨发发',
            comments: 21,
            likes: 42,
            author: '作者名',
            authorImage: require('../../image/homeimage/3.png')
          }, {
            articleId: 24,
            image: require('../../image/homeimage/11.png'),
            title: '标题标题标题标题标题标发撒分厘卡撒酒疯拉萨解放沙拉题',
            description: '描述放大范德萨范德萨发发',
            comments: 21,
            likes: 42,
            author: '作者名',
            authorImage: require('../../image/homeimage/3.png')
          }, {
            articleId: 25,
            image: require('../../image/homeimage/11.png'),
            title: '标题标题标题标题标题标发撒分厘卡撒酒疯拉萨解放沙拉题',
            description: '描述放大范德萨范德萨发发',
            comments: 21,
            likes: 42,
            author: '作者名',
            authorImage: require('../../image/homeimage/3.png')
          }
        ], [
          {
            articleId: 31,
            image: require('../../image/homeimage/11.png'),
            title: '标题标题标题标题标题标发撒分厘卡撒酒疯拉萨解放沙拉题',
            description: '描述放大范德萨范德萨发发',
            comments: 21,
            likes: 42,
            author: '作者名',
            authorImage: require('../../image/homeimage/3.png')
          }, {
            articleId: 32,
            image: require('../../image/homeimage/11.png'),
            title: '标题标题标题标题标题标发撒分厘卡撒酒疯拉萨解放沙拉题',
            description: '描述放大范德萨范德萨发发',
            comments: 21,
            likes: 42,
            author: '作者名',
            authorImage: require('../../image/homeimage/3.png')
          }, {
            articleId: 33,
            image: require('../../image/homeimage/11.png'),
            title: '标题标题标题标题标题标发撒分厘卡撒酒疯拉萨解放沙拉题',
            description: '描述放大范德萨范德萨发发',
            comments: 21,
            likes: 42,
            author: '作者名',
            authorImage: require('../../image/homeimage/3.png')
          }, {
            articleId: 34,
            image: require('../../image/homeimage/11.png'),
            title: '标题标题标题标题标题标发撒分厘卡撒酒疯拉萨解放沙拉题',
            description: '描述放大范德萨范德萨发发',
            comments: 21,
            likes: 42,
            author: '作者名',
            authorImage: require('../../image/homeimage/3.png')
          }, {
            articleId: 35,
            image: require('../../image/homeimage/11.png'),
            title: '标题标题标题标题标题标发撒分厘卡撒酒疯拉萨解放沙拉题',
            description: '描述放大范德萨范德萨发发',
            comments: 21,
            likes: 42,
            author: '作者名',
            authorImage: require('../../image/homeimage/3.png')
          }
        ], [
          {
            articleId: 41,
            image: require('../../image/homeimage/11.png'),
            title: '标题标题标题标题标题标发撒分厘卡撒酒疯拉萨解放沙拉题',
            description: '描述放大范德萨范德萨发发',
            comments: 21,
            likes: 42,
            author: '作者名',
            authorImage: require('../../image/homeimage/3.png')
          }, {
            articleId: 42,
            image: require('../../image/homeimage/11.png'),
            title: '标题标题标题标题标题标发撒分厘卡撒酒疯拉萨解放沙拉题',
            description: '描述放大范德萨范德萨发发',
            comments: 21,
            likes: 42,
            author: '作者名',
            authorImage: require('../../image/homeimage/3.png')
          }, {
            articleId: 43,
            image: require('../../image/homeimage/11.png'),
            title: '标题标题标题标题标题标发撒分厘卡撒酒疯拉萨解放沙拉题',
            description: '描述放大范德萨范德萨发发',
            comments: 21,
            likes: 42,
            author: '作者名',
            authorImage: require('../../image/homeimage/3.png')
          }, {
            articleId: 44,
            image: require('../../image/homeimage/11.png'),
            title: '标题标题标题标题标题标发撒分厘卡撒酒疯拉萨解放沙拉题',
            description: '描述放大范德萨范德萨发发',
            comments: 21,
            likes: 42,
            author: '作者名',
            authorImage: require('../../image/homeimage/3.png')
          }, {
            articleId: 45,
            image: require('../../image/homeimage/11.png'),
            title: '标题标题标题标题标题标发撒分厘卡撒酒疯拉萨解放沙拉题',
            description: '描述放大范德萨范德萨发发',
            comments: 21,
            likes: 42,
            author: '作者名',
            authorImage: require('../../image/homeimage/3.png')
          }
        ]
      ]
    }
   }
};
</script>

<style>
</style>