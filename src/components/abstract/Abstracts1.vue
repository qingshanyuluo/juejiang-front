<template>
  <div>
    <div v-for="(item, index) in articles[type]" :key="index">
      <article1
        :image="item.image"
        :title="item.title"
        :description="item.description"
        :comments="item.comments"
        :likes="item.likes"
        :author="item.author"
        :authorImage="item.authorImage"
      ></article1>
    </div>
  </div>
</template>

<script>
import Article1 from "./Article1";
export default {
  props: ['type'], // 数字 0~5 对应6页
  components: { Article1 },
  data() {
    return {
      // 二维数组，第一维的个体表示一类文章的集合，第二维的个体才是文章
      articles: [
        [
          {
            articleId: 11,
            image: require('../../image/homeimage/11.png'),
            title: '标题标题标题标题标题标发撒分厘卡撒酒疯拉萨解放沙拉题',
            description: '描述放大范德萨范德萨发发',
            comments: 21,
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
        ], [
          {
            articleId: 51,
            image: require('../../image/homeimage/11.png'),
            title: '标题标题标题标题标题标发撒分厘卡撒酒疯拉萨解放沙拉题',
            description: '描述放大范德萨范德萨发发',
            comments: 21,
            likes: 42,
            author: '作者名',
            authorImage: require('../../image/homeimage/3.png')
          }, {
            articleId: 52,
            image: require('../../image/homeimage/11.png'),
            title: '标题标题标题标题标题标发撒分厘卡撒酒疯拉萨解放沙拉题',
            description: '描述放大范德萨范德萨发发',
            comments: 21,
            likes: 42,
            author: '作者名',
            authorImage: require('../../image/homeimage/3.png')
          }, {
            articleId: 53,
            image: require('../../image/homeimage/11.png'),
            title: '标题标题标题标题标题标发撒分厘卡撒酒疯拉萨解放沙拉题',
            description: '描述放大范德萨范德萨发发',
            comments: 21,
            likes: 42,
            author: '作者名',
            authorImage: require('../../image/homeimage/3.png')
          }, {
            articleId: 54,
            image: require('../../image/homeimage/11.png'),
            title: '标题标题标题标题标题标发撒分厘卡撒酒疯拉萨解放沙拉题',
            description: '描述放大范德萨范德萨发发',
            comments: 21,
            likes: 42,
            author: '作者名',
            authorImage: require('../../image/homeimage/3.png')
          }, {
            articleId: 55,
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
            articleId: 61,
            image: require('../../image/homeimage/11.png'),
            title: '标题标题标题标题标题标发撒分厘卡撒酒疯拉萨解放沙拉题',
            description: '描述放大范德萨范德萨发发',
            comments: 21,
            likes: 42,
            author: '作者名',
            authorImage: require('../../image/homeimage/3.png')
          }, {
            articleId: 62,
            image: require('../../image/homeimage/11.png'),
            title: '标题标题标题标题标题标发撒分厘卡撒酒疯拉萨解放沙拉题',
            description: '描述放大范德萨范德萨发发',
            comments: 21,
            likes: 42,
            author: '作者名',
            authorImage: require('../../image/homeimage/3.png')
          }, {
            articleId: 63,
            image: require('../../image/homeimage/11.png'),
            title: '标题标题标题标题标题标发撒分厘卡撒酒疯拉萨解放沙拉题',
            description: '描述放大范德萨范德萨发发',
            comments: 21,
            likes: 42,
            author: '作者名',
            authorImage: require('../../image/homeimage/3.png')
          }, {
            articleId: 64,
            image: require('../../image/homeimage/11.png'),
            title: '标题标题标题标题标题标发撒分厘卡撒酒疯拉萨解放沙拉题',
            description: '描述放大范德萨范德萨发发',
            comments: 21,
            likes: 42,
            author: '作者名',
            authorImage: require('../../image/homeimage/3.png')
          }, {
            articleId: 65,
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
    };
  }
};
</script>

<style>
</style>