<template>
  <div>
    <div id="articleMessage" >
      <van-sticky :offset-top="0">
        <van-nav-bar
          style="background:rgba(x,x,x,0.3);"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickRight"
        >
          <van-icon name="search" slot="right"></van-icon>
        </van-nav-bar>
      </van-sticky>
      <van-image
        style=" border-radius: 10px 10px 10px 10px; "
        width="380"
        height="180"
        :src="arti.iurl"
      />
      <br />
      <h2
        style=" font-weight:normal; margin-left:9px ;text-align: left;margin-top: 3px;"
      >
        {{ arti.ititle }}
      </h2>
      <van-row justify="center" type="flex">
        <van-col span="4">
          <van-image
            style="margin-left: 9px ; margin-top: -8px;"
            round
            fit="fill"
            width="2.3rem"
            height="2.3rem"
            :src="arti.writerimage"
          />
        </van-col>
        <van-col span="8">
          <h5
            style="font-weight:normal; font-weight: 500; margin-top: -7px;  margin-right: 0px;"
          >
            {{ arti.writername }}
          </h5>
          <h6
            style="font-weight:normal; font-weight: 500; color: darkgrey; margin-top: -20px;  margin-right: -8px;"
          >
            {{ arti.writerinfo }}
          </h6>
        </van-col>
        <van-col span="3">
          <van-icon
            size="22"
            style="margin-top: -15px; margin-left: -8px;"
            name="new-arrival-o"
          />
        </van-col>
        <van-col span="4"></van-col>
        <van-col span="6">
          <van-icon size="25" name="vip-card-o" />
        </van-col>
      </van-row>
      <div
        style="text-align: justify;text-indent: 2em; padding-left: 5px; padding-right: 5px;"
      >
        <p>{{ arti.itext1 }}</p>
        <p>{{ arti.itext2 }}</p>
        <p>{{ arti.itext17 }}</p>
        <p>{{ arti.itext31 }}</p>
        <p>{{ arti.itext32 }}</p>
      </div>
      <van-image
        style="text-align: center;"
        width="350px"
        height="180"
        :src="arti.textimg1"
      ></van-image>

      <div style="text-align: center;font-weight: 700;">
        <p>{{ arti.message1 }}</p>
      </div>
      <div
        style="text-align: justify;text-indent: 2em; padding-left: 5px; padding-right: 5px;"
      >
        <p>{{ arti.message2 }}</p>
        <p>{{ arti.message3 }}</p>
        <p>{{ arti.message4 }}</p>
        <p>{{ arti.message6 }}</p>
      </div>
      <div style="text-align: center;font-weight: 700;">
        <p>{{ arti.message5 }}</p>
      </div>
      <div
        style="text-align: justify;text-indent: 2em; padding-left: 5px; padding-right: 5px;"
      >
        <p>{{ arti.message6 }}</p>
        <p>{{ arti.message23 }}</p>
        <p>{{ arti.message24 }}</p>
        <p>{{ arti.message26 }}</p>
        <p>{{ arti.message27 }}</p>
        <p>{{ arti.message28 }}</p>
        <p>{{ arti.message29 }}</p>
      </div>
      <div
        style="text-align: justify; padding-left: 5px; padding-right: 5px;font-weight: 700;"
      >
        {{ arti.itext18 }}
      </div>
      <div
        style="text-align: justify;text-indent: 2em; padding-left: 5px; padding-right: 5px;"
      >
        {{ arti.itext19 }}
      </div>
      <van-image
        style="text-align: center;"
        width="350px"
        height="180"
        :src="arti.textimg2"
      ></van-image>
      <div style="text-align: center;font-weight: 700;">
        <p>{{ arti.itext3 }}</p>
      </div>
      <div
        style="text-align: justify;text-indent: 2em; padding-left: 5px; padding-right: 5px;"
      >
        <p>{{ arti.itext4 }}</p>
        <p>{{ arti.itext5 }}</p>
        <p>{{ arti.itext6 }}</p>
        <p>{{ arti.itext7 }}</p>
        <p>{{ arti.itext8 }}</p>
        <p>{{ arti.itext9 }}</p>
        <p>{{ arti.itext10 }}</p>
      </div>
      <div
        style="text-align: justify; padding-left: 5px; padding-right: 5px;font-weight: 700;"
      >
        <p>{{ arti.itext20 }}</p>
      </div>
      <div
        style="text-align: justify;text-indent: 2em; padding-left: 5px; padding-right: 5px;"
      >
        <p>{{ arti.itext21 }}</p>
        <p>{{ arti.itext22 }}</p>
        <p>{{ arti.itext23 }}</p>
      </div>
      <van-image
        style="text-align: center;"
        width="350px"
        height="180"
        :src="arti.textimg3"
      ></van-image>
      <div
        style="text-align: justify;text-indent: 2em; padding-left: 5px; padding-right: 5px;"
      >
        <p>{{ arti.message7 }}</p>
        <p>{{ arti.message8 }}</p>
        <p>{{ arti.message9 }}</p>
        <p>{{ arti.message10 }}</p>
        <p>{{ arti.message11 }}</p>
        <p>{{ arti.message25 }}</p>
      </div>
      <van-image
        style="text-align: center;"
        width="350px"
        height="180"
        :src="arti.textimg4"
      ></van-image>
      <div
        style="text-align: justify; padding-left: 5px; padding-right: 5px;font-weight: 700;"
      >
        <p>{{ arti.message12 }}</p>
      </div>
      <div
        style="text-align: justify;text-indent: 2em; padding-left: 5px; padding-right: 5px;"
      >
        <p>{{ arti.message13 }}</p>
      </div>
      <div
        style="text-align: justify; padding-left: 5px; padding-right: 5px;font-weight: 700;"
      >
        <p>{{ arti.message14 }}</p>
      </div>
      <div
        style="text-align: justify;text-indent: 2em; padding-left: 5px; padding-right: 5px;"
      >
        <p>{{ arti.itext11 }}</p>
        <p>{{ arti.itext12 }}</p>
        <p>{{ arti.itext13 }}</p>
        <p>{{ arti.itext14 }}</p>
        <p>{{ arti.itext15 }}</p>
        <p>{{ arti.itext16 }}</p>
      </div>

      <div
        style="text-align: justify;text-indent: 2em; padding-left: 5px; padding-right: 5px;"
      >
        <p>{{ arti.message15 }}</p>
      </div>
      <div
        style="text-align: justify;text-indent: 2em; padding-left: 5px; padding-right: 5px;"
      >
        <p>{{ arti.message16 }}</p>
      </div>
      <div
        style="text-align: justify; padding-left: 5px; padding-right: 5px;font-weight: 700;"
      >
        <p>{{ arti.message17 }}</p>
      </div>
      <div
        style="text-align: justify;text-indent: 2em; padding-left: 5px; padding-right: 5px;"
      >
        <p>{{ arti.message18 }}</p>
        <p>{{ arti.message19 }}</p>
        <p>{{ arti.message20 }}</p>
        <p>{{ arti.message21 }}</p>
        <p>{{ arti.message22 }}</p>
      </div>

      <div
        style="text-align: justify;text-indent: 2em; padding-left: 5px; padding-right: 5px;"
      >
        <p>{{ arti.itext24 }}</p>
        <p>{{ arti.itext25 }}</p>
      </div>
      <div
        style="text-align: justify; padding-left: 5px; padding-right: 5px;font-weight: 700;"
      >
        <p>{{ arti.itext26 }}</p>
      </div>
      <div
        style="text-align: justify;text-indent: 2em; padding-left: 5px; padding-right: 5px;"
      >
        <p>{{ arti.itext27 }}</p>
        <p>{{ arti.itext28 }}</p>
        <p>{{ arti.itext29 }}</p>
        <p>{{ arti.itext30 }}</p>
      </div>
      <van-card
        style=" ; text-align: left;"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
      >
        <div slot="tags">
          <br />
          <span style="color: darkgray;">楼主打分：</span>
          <van-rate size="13" v-model="arti.zanmount" />
          <br />
          <span style="color: darkgray;">用户打分：</span>
          <van-rate size="13" v-model="arti.zanmount" />
        </div>
        <div slot="price">
          <span style="color: darkgray;">￥58</span>
        </div>
        <div slot="footer">
          <van-icon
            style="margin-top: -10px; "
            v-on:click="addsuccess()"
            name="star-o"
            size="20"
          />
        </div>
      </van-card>
      <div class="comment-wrap">
        <div class="comment-tips">
          <span>用户评价</span>
          <div>
            <span>8.4分</span>
            <span>3363条</span>
          </div>
          <p>
            <van-icon name="arrow" />
          </p>
        </div>
        <div class="comment-content">
          <div
            class="item-content"
            v-for="(items, index) in arti.commentsList"
            :key="index"
          >
            <div class="content-header">
              <div class="user-logo">
                <van-image
                  round
                  width="3rem"
                  height="3rem"
                  :src="items.userimg"
                />
              </div>
              <div class="name-wrap">
                <div class="name">
                  <span>{{ items.name }}</span>
                  <span>{{ items.age }}</span>
                  <span>{{ items.skin }}</span>
                </div>
                <div>
                  <van-rate size="12px" v-model="items.star" readonly />
                </div>
              </div>
            </div>
            <div
              class="content-main"
              style="text-align: justify; text-indent: 2em; padding-left: 5px; padding-right: 5px;"
            >
              {{ items.textc }}
            </div>
            <div class="content-footer">
              <span>{{ items.time }}</span>
              <span>
                <van-icon name="chat-o" />{{ items.com }}
                <van-icon name="like-o" />{{ items.zan }}
              </span>
            </div>
            <div class="content-footer">
              <span>一年前</span>
              <span>
                <van-icon name="chat-o" />130 <van-icon name="like-o" />130
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Card } from "vant";
Vue.use(Card);
import { Rate } from "vant";
Vue.use(Rate);
import { Divider } from "vant";
Vue.use(Divider);
import { Button } from "vant";
Vue.use(Button);
import { Row, Col } from "vant";
Vue.use(Row).use(Col);
import { Image } from "vant";
Vue.use(Image);
import { Sticky } from "vant";
Vue.use(Sticky);
import { Toast } from "vant";
Vue.use(Toast);
import { NavBar } from "vant";
Vue.use(NavBar);
export default {
  created: function() {
    console.log(this.$route.query.id)
    var id = this.$route.query.id
    this.article.forEach(element => {
      element.forEach(element => {
        if (element.id == id) {
          this.arti = element
        }
      });
    });
  },
  data() {
    return {
      arti: {},
      //二维数组，第一维代表类别第二维代表每个文章 id 直接由两个下标表示，从0到9一共十个类别
      article: [
        [
          {
            id: 11,
            ititle: "种草丨别慌！冬季干燥护肤攻略已经帮你准备好了",
            itext1:
              "大家如果有关注一些护肤动态的话，都能感觉到现在大部分消费者更关心的是产品的功效性，比如抗氧化、美白以及抗老等功能性的诉求，反而忽略了保湿这类基础性的工作。其实保湿这件事，反而是日常护肤的三块基石之一，打好了基础，才能往上叠加更高的诉求，而且护肤这件事本身就是一个整体，将日常的保湿做好，不仅能缓解皮肤的干燥紧绷，而且角质层的水分充盈饱满本身也是健康皮肤的一种表现，长远来看，皮肤长期的干燥更是容易造成干纹并最终演化成真性的细纹，所以保湿本来就是综合抗老的一环。",
            itext2:
              "而既然说到保湿，尤其是秋冬保湿，我们要了解到为什么皮肤容易在秋冬变得干燥。",
            textimg1: require("../image/homeimage/11_1.png"),
            message1: "皮脂膜与角质层",
            message2:
              "首先，在皮肤的构造上，与保湿这件事息息相关的就是我们的皮脂膜与角质层。其中皮脂膜是一层由皮脂腺分泌的皮脂与汗腺分泌的汗水在皮肤表面形成的弱酸性保护膜，它具有保湿，防止内部水分蒸发等作用。",
            message3:
              "皮脂膜下，就是我们的角质层，它由角质层细胞与细胞间质构成。其中，角质层细胞中的主要物质多为我们自身的天然保湿因子（NMF），它们帮助皮肤吸收并维持正常所需的水分。而细胞间质主要是一些脂性的基质，它与 NMF 相互配合，构成了皮肤天然的屏障功能，帮助皮肤保持水分。",
            message4:
              "而皮脂腺分泌油脂的程度与温度息息相关，当秋冬气温较低的情况下，皮肤本身分泌的油脂就会变少，皮肤表面就没有充足的皮脂保护水分不流失，再加上空气中的湿度降低，皮肤长期处于干燥的环境中，不但不能从周围环境中吸收水分，反而加剧内部的水分流失，久而久之，皮肤自然变得干燥紧绷。",
            message5: "保湿的误区",
            message6:
              "针对上述现象，我们可以了解到，一套合理的保湿系统除了你自身多喝水要摄入充足的水分之外，在护肤上一方面要使用一些水溶性保湿剂着重补充皮肤流失的水分，另一方面则是利用一些封闭性的油脂来模拟皮脂膜，帮助我们锁住内部的水分，最后，针对一些屏障功能不健全的敏弱肌肤，还可以利用一些修护保湿类的成分来强化皮肤自身的屏障功能，从而提高保水能力。不是一味的强调“补水”拼命拿着化妆水湿敷，或者随便来个油糊糊的面霜就以为万事俱全了。",
            textimg2: require("../image/homeimage/11_2.png"),
            itext3: "保湿三步走",
            itext4:
              "所以我在此就按照大家平时更能理解的习惯，将保湿分为了三大块：",
            itext5: "“补水”——充分浸润角质层。",
            itext6:
              "这一块就是我们熟悉的各类水性保湿剂，比如常见的以下几类，它们广泛的出现于各类保湿产品中，质感都普遍轻盈水润，我们主要借助其充分湿润角质层，即时的缓解干燥，这也是油性皮肤在秋冬保湿需要注重的一点。",
            itext7:
              "多元醇，多元醇几乎是最常见的保湿剂了，常见的有甘油（丙三醇），丙二醇，丁二醇、山梨醇等等，通常具有分子小，可以大量溶于护肤品中的特点，但抓水能力较差，其保湿作用主要来源于结构中的羟基，在湿润的环境下，使用含有多元醇的产品，就能很好的维持皮肤的水分，但如果在干燥的环境中，多元醇无法从外界从抓取水分时，就反而会从皮肤内部吸收，所以保湿这个体系本身就是一个整体，不是光靠某一种成分就能解决所有问题的。",
            itext8:
              "除甘油外，大多数多元醇质感都比较清爽，但基质为大量多元醇的产品还是会有一些“油感”，虽然它们都是水性保湿剂，但在面部涂开的时候就会有一种类似糖浆的腻跟黏糊。此外，丙二醇还可以作为促渗剂使用。",
            itext9:
              "NMF，即天然保湿因子（Natural Moisturizing Factor），广泛存在于我们的角质细胞中，是皮肤自身原有的成分，通常具有安全性高，吸湿性强，亲肤性好的特点，它们决定了皮肤自身吸水能力的高低。它们并不是单一的一种成分，而是多种成分的混合体。包括了各种氨基酸，PCA，乳酸，糖类以及无机酸等等。",
            itext10:
              "透明质酸，其实广义上也能算作一种天然保湿因子，只不过他们主要存在于结缔组织跟真皮内部。本质上是一种酸性粘多糖，其独特的分子结构及特性决定了它是非常理想的一类保湿剂，吸水能力非常强大，各类皮肤均可适用，能有效的维持皮肤水分，同时还能增强皮肤弹性，延缓衰老。",
            textimg3: require("../image/homeimage/11_3.gif"),
            message7: "“修护”——提升皮肤屏障功能，强化皮肤保水能力。",
            message8:
              "通过上文的叙述，我们了解到皮肤屏障由皮脂膜跟角质层构成，如果将我们的皮肤比作一个蓄水池，皮肤屏障就好似一堵墙，其中的角质细胞与细胞间质就是这堵墙上的砖头与泥浆，当它失去正常的功能，“泥浆”的粘合性不高的时候，任你往池中加多少水，最终也是无济于事，各类干燥敏感的现象也由此而生。",
            message9:
              "由此可以得出结论，上文介绍的成分在于解决角质细胞“含水量”的问题，同样也是提升屏障功能的一环，而针对细胞间质的维护，考虑到细胞间质主要由一些脂质（神经酰胺、胆甾醇、脂肪酸）构成，因此这一步骤主要牵扯了以下的几类脂质成分：",
            message10:
              "神经酰胺，本身也是一类天然保湿因子，是天然存在于皮肤中的脂质。其作为细胞间质中的主要成分，占据了40-50％ 的比重，承担着保护皮肤、保湿及滋润的作用，是维持皮肤屏障功能健全的必要物质。其主要由三类鞘氨醇与脂肪酸构成，且关键的一点在于它具有亲水性跟亲脂性的特性，能帮助结合皮脂中的胆固醇和游离脂肪酸，增强角质细胞间的粘合力，从而进一步帮助皮肤留住水分。",
            message11:
              "植物鞘氨醇，是细胞膜的组成成分之一，也称作神经酰胺前体，由于神经酰胺的合成需要鞘氨醇与脂肪酸来构成，且植物鞘氨醇与我们自身的脂质相类似，故而植物鞘氨醇也被称作神经酰胺前体，使用这类成分也有助于维护皮肤的屏障功能。",
            textimg4: require("../image/homeimage/11_4.gif"),
            itext11:
              "胆甾醇，同样也是细胞膜的重要组成成分，作为保湿剂，它能为皮肤提供额外的脂肪，防止水分流失。除了化妆品中直接添加之外，我们还可以留意一些含有角鲨烷的产品，角鲨烷在进入皮肤后进过一系列的转化能变成胆甾醇，从而在提供保湿滋润之余还附带了一些许的修护效果。",
            itext12:
              "脂肪酸，人体必须的两种脂肪酸主要是 Omega—6 和 Omega—3，它们在皮肤美容上的应用主要是帮助恢复正常的屏障功能，缓解皮肤干燥现象。护肤品中通常直接添加的亚麻酸或者亚油酸，或者很多植物油所含有的大量不饱和脂肪酸也同样具备这一效果。",
            itext13:
              "“保湿”——提供封闭功能，防止水分流失（这一步油皮或者油痘皮可以忽略）。",
            itext14:
              "水“补”进来了，屏障健康了之后，对于秋冬的一些干皮仍然是不够的，还需要通过外用一层封闭性的油脂来强化最终的保湿，防止水分流失。而既然提到封闭，就自然牵扯到以下的一些油脂性成分了：",
            itext15:
              "矿物油：包括矿油、矿脂（凡士林）、石蜡，是最常见的一种封闭性保湿剂，本身无法被皮肤吸收，只是防止皮肤内部的水分蒸发流失，等没有什么特别的保养价值，属于封闭性的保湿成分，通俗点就是广告里常说的“把水锁住”。且由于它是一种稳定性较高的化合物，本身并不具有致痘的性质，只是封闭性太高，不建议油痘皮去使用。",
            itext16:
              "植物油：既然身为油类，最大的一个作用就是提供封闭性的滋润，防止皮肤水分流失，同时一些植物油中含有的不饱和脂肪酸（比如前文提到的亚油酸、亚麻酸等等）以及各类微量元素，可以完成维护屏障功能，缓解干燥跟衰老等效果。",
            iurl: require("../image/homeimage/11.png"),
            writerimage: require("../image/homeimage/11_5.png"),
            writername: "晨安",
            zanmount: 139,
            talkmount: 18,
            writerinfo: "27 | 混合肤质",
            commentsList: [
              {
                userimg: require("../image/homeimage/11_6.png"),
                name: "小香香",
                age: "19",
                skin: "干",
                star: 4,
                textc:
                  "欧莱雅双萃精华乳!虽然只用了半个月，但是已经决定要回购了，开始用这个之后，就没出现过了,假性抬头纹和法令纹也浅了很多，这个精华只要不停产，买爆好吗"
              },
              {
                userimg: require("../image/homeimage/11_7.png"),
                name: "Z",
                age: "22",
                star: 5,
                skin: "油",
                textc:
                  "效果是真的有的，不过要坚持使用,不然慢慢会回去，我就是因为嫌冬天洗脖子太冷所以中断了，但是放心，就算回去了也比之前要好很多，不会反弹成更严重的颈纹的"
              },
              {
                userimg: require("../image/homeimage/11_8.png"),
                name: "一半",
                age: "20",
                star: 4,
                skin: "油",
                textc: "天，这是我见过的效果对比最诚恳的了。的确显效!马上入手!"
              },
              {
                userimg: require("../image/homeimage/11_9.png"),
                name: "﹏冷情绪。",
                age: "24",
                star: 3,
                skin: "混",
                textc:
                  "安利一个东西,叫做不熬夜，叫做保养，叫做不要作!那张脸啊,  现在作一作总感觉差别不大，日积月累才是问题!所以，不要随便种草!不要跟风就买，理智护肤!仙女们冲鸭!"
              }
            ]
          },
          {
            id: 12,
            ititle: "干货丨纠正护肤误区，你的护肤品真的吸收了吗？",
            itext1:
              "护肤文章写了这么多，大家一直都在问的问题之一，就是「我用的护肤品到底吸收了没？」",
            itext2:
              "毕竟瓶瓶罐罐的也都不便宜，如果没吸收浪费了不仅心疼，钱包更疼啊...",
            itext17: "所以，我们今天就说说护肤品的吸收那些事儿吧～",
            textimg1: require("../image/homeimage/12_2.png"),
            message1: "护肤品是怎么吸收的",
            message2: "首先，当然是要了解下护肤品究竟是从哪里吸收的了～",
            itext18: "No.1主要的吸收路径：细胞间脂质",
            itext19: "我们知道，皮肤表层的结构大概是这个样子的：",
            textimg2: require("../image/homeimage/12_3.png"),
            itext4: "而护肤品在皮肤中的吸收路径主要是这么几个：",
            itext5: "•通过细胞",
            itext6: "•通过附属器，比如毛孔",
            itext7: "•通过细胞间脂质",
            itext8:
              "虽然很多同学设想中护肤成分的吸收，好像是通过途径1 这样穿过皮肤表面的一层又一层细胞。",
            itext9:
              "但绝大多数，估计在 90% 甚至更高，护肤成分都是通过途径 3，顺着细胞间的脂质来逐渐渗透进去。",
            itext20: "No.2很多时候，就是在角质层内发挥作用",
            itext21:
              "护肤品想要渗透进皮肤深层是还是很难的，绝大多数就是在表皮层发挥作用，甚至就只是在角质层发挥作用。",
            itext22:
              "护肤品如果不采用一些特殊手段的话，想要到达表皮层的较深位置，也是不那么容易的，想要达到更深的真皮层就更是难上加难了。",
            itext23:
              "很多强调深层吸收的护肤品，如果你看看图片上的小字，很可能会发现所谓「深度渗透」就渗透进角质层了。",
            textimg3: require("../image/homeimage/12_4.gif"),
            message7:
              "但是，大家也不要失望，觉得「只能在表皮层甚至角质层玩儿的话，还有啥用啊？」",
            message8:
              "作用还是挺大的，表皮层已经足够让大家在一些方面产生很好的护肤效果了，比如让大家变黑的黑色素就在表皮的基底层，美白精华做得好的话是可以对这里产生一定作用的。",
            textimg4: require("../image/homeimage/12_5.png"),
            message12: "吸收感 vs 吸收",
            message13:
              "吸收是一个微观过程，我们平时觉得「吸收了」很大可能性是「有吸收的感觉」，很可能和实际的「吸收」没有直接的对应关系。",
            message14: "No.1液体干了，应该是吸收了",
            itext11: "不一定。",
            itext12:
              "涂上去的水、精华、面霜看起来干了，也许只是水分蒸发掉了，这和成分被吸收了还是不太一样的。",
            itext13:
              "有时候产品加一些容易挥发的成分，比如酒精、挥发性硅油，就会营造出好像很快就干了的感觉。但如果使用的一些不容易挥发的产品，比如一些护肤油，那一直糊在脸上也并不意味着它没有吸收。",
            itext14:
              "所以常看我们文章的同学可能有留意到，我们经常说「吸收感很好/不好」，几乎不太说「吸收很快」，是有意在做这样的区分的。",
            message15:
              "吸收感是使用感受的一部分，我也不喜欢糊一脸油过 5 分钟好像都没变化的感觉，它是护肤品的一个重要特点。",
            message16:
              "但功效成分的吸收是肉眼不可见的过程，通过「吸收感」来判断成分是否吸收，并不是一个特别合理的方法。",
            message17: "No.2有刺痛，应该是吸收了吧",
            message18: "不一定。",
            message19:
              "刺痛感有时候是吸收过程中引起的，但也有的是功效成分一接触皮肤就引起的。",
            message20:
              "有些成分会激活皮肤表面的一些感觉受体，进而让你产生灼热、刺痛的感觉，这并不意味着功效成分在努力向皮肤深处渗透，只是说你对这个成分有点敏感。",
            message21:
              "有的时候也许用几次之后，这个感觉就会变轻，但也有的就会一直存在着。",
            message22:
              "所以，这一方面一定要留意观察，程度是否严重，是否可以忍受。",
            itext24:
              "护肤品是非常强调使用感的一个东西，应该是一个让你的心情 UP (至少不会更 DOWN ) 的事情。",
            itext25:
              "所以，如果你每天用护肤品都胆战心惊的，真的没有必要这样，换一个产品吧。",
            itext26: "No.3搓泥了，一定没吸收",
            itext27: "并不能这么说。",
            itext28:
              "很多同学觉得「哎呀搓泥了，那我的功效成分不就进到泥里面了么，那不就浪费了么...」",
            itext29:
              "倒不是说完全没这个可能，但是功效成分的吸收有时候也是很快的，等到你开始搓泥的时候，也许能吸收的已经吸收的差不多了。",
            itext30:
              "解决这一点的话，涂抹护肤品之后稍微等几分钟，再做后续步骤，也别一直用手揉啊揉的。",
            iurl: require("../image/homeimage/12.png"),
            writerimage: require("../image/homeimage/12_1.png"),
            writername: "女神进化论",
            zanmount: 435,
            talkmount: 43,
            writerinfo: "19 | 干性肤质",
            commentsList: [
              {
                userimg: require("../image/homeimage/12_6.png"),
                name: "十年饮冰",
                age: "17",
                skin: "干",
                star: 4,
                textc: "真心推荐，好用，准备三购，缺水皮肤赶紧入手！！！"
              },
              {
                userimg: require("../image/homeimage/12_7.png"),
                name: "随烟 〃",
                age: "22",
                star: 5,
                skin: "干",
                textc: "护肤品应该都是干在了脸上吧。"
              },
              {
                userimg: require("../image/homeimage/12_8.png"),
                name: "青春",
                age: "20",
                star: 4,
                skin: "混",
                textc: "什么都没说清楚。。。"
              },
              {
                userimg: require("../image/homeimage/12_9.png"),
                name: "蜡笔小丸子",
                age: "21",
                star: 5,
                skin: "干",
                textc: "看完之后依然很懵。"
              }
            ]
          },
          {
            id: 13,
            ititle: "干货丨那些关于“清洁”的谣言，集中起来说一下吧",
            itext1:
              "“清洁”这个系列，我们已经写了不少文章。看到这里，大家也都明白了，在护肤品行业，“清洁”更多的是“预防”，而不是“治疗”。",
            itext2:
              "然而市面上还是有太多的谣言，用“清洁”或者“深层清洁”作为理由，给了用户太多不切实际的幻想。",
            itext17:
              "本文就来说一说这些幻想，“清洁”为什么做不到，以及应该怎么办。",
            textimg1: require("../image/homeimage/13_1.gif"),
            message2: "读大学的时候，听高晓松师兄的歌，现在只零星地记得碎片。",
            message3:
              "其中有一句，是“那些年少时不经意许下的愿”，不知道怎么印象深刻，大概在所有“骚柔”的句子里显得特立独行吧。我们大概都曾经夸下过海口，然而十年二十年以后，回头看只剩下壮志未酬。",
            textimg2: require("../image/homeimage/13_2.png"),
            itext4:
              "嗯……扯远了，我们今天说的是一些其他的诺言，柜姐信誓旦旦，“深层清洁”可以帮你做到的，实际上一件都兑现不了。",
            itext5: "先把这两个最不靠谱的说了。",
            itext6:
              "清洁产品在脸部的停留时间，一般不超过两分钟。这点儿时间，就算是渗透的条件很好，活性物也没办法钻到皮肤里面去，何况此时满脸都是水，表面活性剂又正在进攻脸上的污物油脂。",
            itext7:
              "这时候要是还有美白和祛斑的活性物，能够在一片嘈杂的战场中穿越火线，进入皮肤深层，那就真是见了鬼了。",
            itext8: "这不是让老母鸡在搬家的院子里抱窝孵小鸡么？",
            itext9: "不可能。",
            textimg3: require("../image/homeimage/13_3.png"),
            message7:
              "但是，大家也不要失望，觉得「只能在表皮层甚至角质层玩儿的话，还有啥用啊？」",
            message8:
              "作用还是挺大的，表皮层已经足够让大家在一些方面产生很好的护肤效果了，比如让大家变黑的黑色素就在表皮的基底层，美白精华做得好的话是可以对这里产生一定作用的。",
            message9:
              "凡是看到“美白洗面奶”的名字，甭管多么大牌，你就笑笑好了——也许我孤陋寡闻，但是我真的想不到哪个技术可以让洗面奶美白的。",
            message10:
              "“痘痘”是个太宽泛的命名，“痤疮样皮疹”的“痘痘”来自于敏感皮，“寻常痤疮”的“痘痘”可能是大油皮，而“玫瑰痤疮”和“脂溢性皮炎”也会让普通消费者觉得是“痘痘”。",
            message11:
              "我强烈建议，所有觉得自己有“痘痘”的朋友，先去医生那里确认一下自己是不是“寻常痤疮”——我见过太多得玫瑰痤疮的朋友，自己在家里用护肤品处理，越用越糟心的。",
            textimg4: require("../image/homeimage/13_4.png"),
            message13: "如果医生已经告诉我，的确是“寻常痤疮”呢？",
            itext11: "清洁产品的抗痘，往往是加入了【水杨酸】或者是【BPO】。",
            itext12:
              "在没有其他产品配合的前提下，单独靠清洁产品中的【水杨酸】，很难对“寻常痤疮”的罪魁祸首（“痤疮丙酸杆菌”）起到强烈的抑制作用——毕竟清洁产品停留的时间短。",
            itext13: "建议先听从医生的意见，治疗之后，再考虑护肤品。",
            itext14:
              "而【BPO】类的产品，往往是海淘的（跨境电商），可能你并不是特别知道如何使用，你可以带着问一下医生，到底能不能用，以及使用方法。",
            message15: "建议是类似的，治疗痊愈之后，再考虑护肤品。",
            message16:
              "清洁类的产品，对于“痘痘”主要是预防作用，不能“去除”——这也符合我们给“清洁”定下的大框架，更多的是“预防”，而非“治疗”。",
            message18: "清洁就是清洁，是个预防措施，要温和，不要粗暴。",
            iurl: require("../image/homeimage/13.png"),
            writerimage: require("../image/homeimage/13_5.png"),
            writername: "基础颜究",
            zanmount: 31,
            talkmount: 213,
            writerinfo: "22 | 干性肤质",
            commentsList: [
              {
                userimg: require("../image/homeimage/13_6.png"),
                name: "花季岁月",
                age: "16",
                skin: "混",
                star: 3,
                textc:
                  "感觉这样的话清洁产品不用选过于大牌，最好是平价产品，这样才能有好的性价比，那样的话可以把剩下的钱买些好的驻留型产品，  就是有一个问题，如果这样那些说洗面奶会导致清洁过度的话是不是也是不存在的"
              },
              {
                userimg: require("../image/homeimage/13_7.png"),
                name: "Sunshine",
                age: "22",
                star: 5,
                skin: "干",
                textc:
                  "文章中提到的去黑头荷荷巴油结合抗氧化这个是怎么弄的什么产品怎么结合抗氧化谢谢"
              },
              {
                userimg: require("../image/homeimage/13_8.png"),
                name: "久夏青",
                age: "23",
                star: 4,
                skin: "油",
                textc:
                  "认同，洗面奶只要温和的。皮肤的稳定健康才是最重要的。其他的还是靠后续的护肤或者健康饮食生活靠谱些!"
              },
              {
                userimg: require("../image/homeimage/13_9.png"),
                name: "不二心",
                age: "22",
                star: 5,
                skin: "混",
                textc:
                  "感觉这样的话清洁产品不用选过于大牌，最好是平价产品，这样才能有好的性价比，那样的话可以把剩下的钱买些好的驻留型产品，就是有一-个问题，如果这样那些说洗面奶会导致清洁过度的话是不是也是不存在的"
              }
            ]
          },
          {
            id: 14,
            ititle: "科普丨面部毛孔粗大这种世纪难题究竟该怎么办？",
            itext1:
              "尽管面部毛孔粗大不是紧急的医疗问题，然而对大多数人来说，粗大的毛孔严重影响外观，因此是很多人平日护肤过程中比较关心的一个问题。不过，对于毛孔粗大的定义、成因和解决方法仍然没有比较科学和系统的介绍，本文旨在解决这些问题。",
            itext2:
              "关于毛孔粗大尚缺乏统一的定义，在一项报道中，研究人员使用 Robo Skin Analyzer CS50 对毛孔进行研究，毛孔直径在 0.1-0.6mm2 时就肉眼可见，而 0.3-0.6mm2 的毛孔可以称作为粗大毛孔；如果毛孔中含有脂栓、黑头时又可以称作“黑头嵌入的毛孔”。 ",
            textimg1: require("../image/homeimage/14_1.png"),
            message2:
              "面部毛孔的形态不是固定不变的，粗大的毛孔影响着所有种族、性别和年龄段的人群。",
            message3:
              "许多外源性因素和内源性因素都参与到毛孔粗大的发生发展中，包括性别、遗传易感性、年龄、慢性 UV 辐射、使用致粉刺成分、一些皮肤病等。Roh 等人发现，毛孔粗大程度与皮脂腺分泌活动密切相关，并且他们发现女性毛孔粗大程度显著高于男性；然而，在另一项研究中发现，男性毛孔粗大程度比女性更高，同时伴有更多的黑头。",
            message4:
              "毛孔周围的支撑组织和粗大毛孔的发生有关，但是相关研究较少。真表皮连接处起起伏伏的石笋样结构在部分报道中提示与毛孔粗大有关。",
            message6:
              "而 Kim 等人利用 PRIMOS 和 Facial stage DM3 发现，毛孔的容积与毛孔粗大程度是显著相关的。毛孔的体积与真皮乳头层细胞的体积相关，真皮乳头层细胞含有大量雄激素受体，而雄激素能够显著影响毛囊体积，因此，毛发厚度也会影响毛孔大小。",
            message23:
              "大家普遍了解到的，面部皮脂量和毛孔大小显著相关。在女性月经周期中，面部皮脂量会显著增加，而且有研究观察到，女性在月经期毛孔增大，这提示两者存在关系。女性生理期过程中促黄体生成素和促卵泡生成素的激增会增加皮脂腺的活性；同样的胰岛素样生长因子-1（IGF-1）也会通过 phosphoinositide 3-kinase/Akt 通路加速皮脂腺分泌大量的皮脂，已有研究证实，面部皮脂量与血清中的 IGF-1 相关。",
            message24:
              "大多数的粗大毛孔集中在鼻翼和脸颊内侧，这些位置的油脂分泌也是面部较高的部位。有研究人员使用 Sebumeter，将 12 名 20-31 岁的韩国志愿者面部随机分为 81 个部位，的确也证实鼻翼及脸颊内侧的皮脂水平较高",
            textimg2: require("../image/homeimage/14_2.png"),
            itext4:
              "而有研究发现，严重的痤疮会导致在毛管部位形成微疤痕，并且在雄激素刺激下更容易发生堵塞，这会导致毛囊细胞发生变化，进而引起毛孔粗大。",
            itext5:
              "当然，毛孔粗大与年龄也有着密切关系。Zheng 等人发现，一种参与到弹力蛋白的结构蛋白，微纤维相关糖蛋白-1，会睡着年龄和光老化的加重流失，这一变化会导致真皮弹性的下降，以及毛囊周围支撑结构的脆弱，最终引起皮肤的下垂和毛孔粗大。",
            itext6:
              "因此总结下来，导致面部毛孔粗大的最主要的三大成因是：大量的油脂分泌、毛孔周围弹力结构的破坏和毛囊体积的增大（例如毛发变粗）。除此之外，慢性反复发作的青春痘、性激素分泌失衡、不恰当的皮肤护理、紫外线暴晒等都会影响毛孔外观。",
            textimg3: require("../image/homeimage/14_3.png"),
            message7:
              "尽管目前对于粗大毛孔有许多治疗选择，但是遗憾的是，它们往往缺乏强有力的证据支持。因此，粗大毛孔的处理应该根据人群不同实现个体化选择。",
            message8:
              "可以看到，关于改善毛孔粗大的研究，证据质量都不够高。我们仍然需要高质量的研究。",
            message9: "控制油脂分泌，口服或者外用治疗",
            message10:
              "异维 a 酸是阻断皮脂分泌最强有力的药物之一，而抗雄治疗也能减少面部油脂分泌。这并不是首选推荐，因为考虑到这些药物长期服用所带来的副作用。",
            message11:
              "而选择外用产品是一个相对安全的选择，Vogelgesang 等人发现，肾茶提取物外用能够很好的改善油性肌肤的皮脂分泌；而 beiersdor 则证实，L-左旋肉碱也能够很好的调节皮脂腺活性；Drealos 等人通过随机双盲对照试验证实，2% 烟酰胺能够改善皮脂腺分泌，并且目前被广泛运用； Grimes 等人发现，采用表浅的水杨酸换肤能够改善油性肌肤粗大毛孔，并且是一种对于 V 和 VI 皮肤分型（深色肌肤）的人群来说，也是种相对安全有效的方法。油性肌肤在选择护肤产品时尤其要注意尽可能使用通过“致粉刺测试”的或者不含油分的产品。",
            textimg4: require("../image/homeimage/14_4.png"),
            message13:
              "越来越多的皮肤科医生推崇光动力治疗或者激光治疗。Kosaka 等人发现，ALA-PDT 光动力能够定向破坏皮脂腺，减少其分泌。2.5%-5% 的 ALA 联合短时间的治疗（<2h）被证实是有效的。也有研究发现，1450nm 的二氧化碳激光也能够减少面部的皮脂腺功能；而一项纳入 20 例韩国痤疮患者的研究发现，一种 fractional RF 微针也能够抑制皮脂腺功能。而最近的一项非随机的临床试验发现，一种选择性的电热解技术能够减少皮脂量，最大 31.5%。",
            itext11:
              "饮食中的油脂是皮脂腺合成皮脂的来源。高 GI 饮食能够显著增加血清中的 IGF-1。Pochi 等人发现，在经过 4-8 周的卡路里限制后，18 名肥胖患者的面部皮脂量平均下降 40%。尽管具体的机制尚未完全阐明，但是饮食对于面部皮脂量的影响是肯定存在的。",
            itext12:
              "有研究发现，皮下注射肉毒菌素能够减少皮脂腺活性并且减小毛孔。",
            itext13:
              "大量的产品和方法标榜可以提升肌肤弹力，其中一部分对于毛孔粗大可能是有效的。每日防晒是避免毛孔持续变大的有效手段，此外，外用维甲酸类也是有效的方法。维甲酸类能够显著增加皮肤中胶原数量，减少其分解并且促进其合成，维持毛囊周围的支撑结构。而 2790nm 的钇钪镓石榴石激光能够改善皮肤毛孔问题并且有更小的副作用。Suh 等人发现，1410nm 的掺铒光纤激光对于有色皮肤来说也是安全的；而 1440nm 的非剥脱二氧化碳激光也能够降低面部毛孔评分接近 17%。",
            itext14:
              "将面部绒毛去除能够让毛孔视觉上变小，尤其是对于绒毛/毛发较粗的深色肌肤。",
            message15:
              "毛孔粗大与多种因素有关，因此需要根据患者不同的特点进行个性化的治疗。然而，关于毛孔粗大的原因仍然缺乏系统的研究，我们需要更多的试验进一步说明毛孔粗大的本质以及可能的应对手段。",
            iurl: require("../image/homeimage/14.png"),
            writerimage: require("../image/homeimage/14_5.png"),
            writername: "护肤达人",
            zanmount: 176,
            talkmount: 91,
            writerinfo: "21 | 混合肤质",
            commentsList: [
              {
                userimg: require("../image/homeimage/14_6.png"),
                name: "安小念",
                age: "19",
                skin: "油",
                star: 4,
                textc: "毛孔粗大人士默默攒钱去医美....."
              },
              {
                userimg: require("../image/homeimage/14_7.png"),
                name: "简美",
                age: "20",
                star: 5,
                skin: "混",
                textc: "我买了hpf的抗糖原液有点效果还不贵。"
              },
              {
                userimg: require("../image/homeimage/14_8.png"),
                name: "痴于你",
                age: "23",
                star: 4,
                skin: "干",
                textc: "我可能就是黑头潜入型了，毛孔里面黑黑的。"
              },
              {
                userimg: require("../image/homeimage/14_9.png"),
                name: "草长莺飞",
                age: "22",
                star: 4,
                skin: "混",
                textc:
                  "选择适合自己的洗面奶哦，我是油皮，用的芙丽芳丝,  感觉很好。  现在用着玫瑰纯露早和晚会拍打t区，发现毛孔变小啦,  得坚持"
              }
            ]
          },
          {
            id: 15,
            ititle: "干货丨衰老竟不是匀速的？3 个突然变老的年龄你还差多久",
            itext1: "换句话说，你可能在 34岁、60岁、78 岁突然变老。",
            itext2:
              "在本次研究中，斯坦福大学收集了 4263 名年龄在 18 岁至 95 岁之间的健康受试者的血浆样本，并系统分析了 2925 种蛋白的表达水平。",
            textimg1: require("../image/homeimage/15_1.png"),
            message2:
              "通过分析这些志愿者血液中的血浆蛋白浓度来推测他们的生理年龄，结果发现，在 34岁、60岁、78 岁时出现明显的血浆蛋白浓度峰。",
            message3:
              "以此推测，人的生理年龄可能并不是匀速增长，而可能是在三个重要节点突然衰老。该项研究对于研究人体衰老具有重要意义。",
            message4: "皮肤作为人体最大的器官，也会随着人体衰老而逐渐衰老。",
            message6: "而导致皮肤衰老的原因主要有以下两个：",
            message23:
              "内源性老化，也就是人体自身老化，可能与基因等因素有关，每个人的老化程度、老化速度也不同。",
            message24:
              "参照斯坦福大学的研究，皮肤也可能在 34岁、60 岁、78 岁时达到重要衰老节点，出现内源性老化。内源性老化主要变现为皮肤变白，出现细小皱纹、弹性下降、皮肤松弛。",
            textimg2: require("../image/homeimage/15_2.png"),
            itext4:
              "这种内源性老化是无法避免的，有些人看起来老得比常人慢，跟吃了防腐剂一样，只能说家里的基因太好了。",
            itext5:
              "外源性老化，由于环境因素导致的皮肤老化，其中有 80% 以上的外源性老化是光老化，是不涂防晒霜惹的祸。",
            itext6:
              "外源性老化表现为皱纹、皮肤松弛、粗糙、淡黄或灰黄色的皮肤变色、毛细血管扩张、色素斑形成等。",
            textimg3: require("../image/homeimage/15_3.png"),
            message7:
              "出门即涂防晒，或使用防晒装备如太阳伞、墨镜、防晒服，能够有效地缓解外源性老化。",
            message8:
              "衰老既然不可避免，我们如何才能让解决衰老带来的皱纹、色斑等一系列问题呢？",
            message9: "毕竟只有青春的外表，才配得上我们年轻的心态。",
            message10:
              "皱纹可分为静态皱纹和动态皱纹两种，顾名思义就是在脸部无表情和脸部有表情时的皱纹。对于这两种不同的皱纹，其实处理方式也不尽相同。",
            textimg4: require("../image/homeimage/15_4.png"),
            message13:
              "静态皱纹可以使用热拉提/热玛吉、玻尿酸注射、光子嫩肤等方式，抚平皱纹，恢复皮肤弹性。",
            itext11:
              "动态皱纹，A 型肉毒毒素注射是消除动态皱纹最简洁有效的方式，可以减少引起皱纹形成的面部肌肉收缩，一方面使原有的皱纹减轻，另一方面防止形成新的皱纹。",
            itext12:
              "治疗色斑目前最有效的医美疗法是超皮秒激光、皮秒激光、调 Q 激光，它们也被称为“祛斑小能手”。",
            itext13:
              "这几类医美疗法都是通过破坏皮肤内部的色素颗粒，粉碎的色素颗粒会被人体的被巨噬细胞吞噬，或通过表皮代谢，从而达到祛斑的效果。",
            itext14:
              "以上就是为大家介绍的关于如何解救皮肤衰老的医美方法，你还想了解哪些医美项目呢？留言告诉我吧！",
            iurl: require("../image/homeimage/15.png"),
            writerimage: require("../image/homeimage/15_5.png"),
            writername: "三亩",
            zanmount: 155,
            talkmount: 41,
            writerinfo: "24 | 油性肤质",
            commentsList: [
              {
                userimg: require("../image/homeimage/15_6.png"),
                name: "  卮言。",
                age: "24",
                skin: "干",
                star: 4,
                textc:
                  "和我的感觉一样，但是我还没到34呢，我是怎么感觉出来的呢...."
              },
              {
                userimg: require("../image/homeimage/15_7.png"),
                name: "总会腻, ",
                age: "20",
                star: 5,
                skin: "油",
                textc: "我大学的时候没有皱纹，一毕业就有了，工作压力大。"
              },
              {
                userimg: require("../image/homeimage/15_8.png"),
                name: "紫尘傲雪",
                age: "21",
                star: 4,
                skin: "干",
                textc:
                  "刚测完皮肤状态，四十多，平时也经常有四五十的路.人问事叫我大姐，二三十的路人叫我阿姨,几岁十几岁的叫我奶奶，我这样从十二岁被叫到二十岁。34的“小妹妹”们别慌，你们还来得及，奶奶我垫底。"
              },
              {
                userimg: require("../image/homeimage/15_9.png"),
                name: "这一刻",
                age: "22",
                star: 4,
                skin: "混",
                textc:
                  "刚过完34，突然发现这就是我啊，今年断崖式衰老。尽管早早就早c晚a+医美"
              }
            ]
          },
          {
            id: 16,
            ititle: "科普丨想美白抗老，这类成分你不能不了解",
            itext1:
              "先八一个事暖场——我胸口前有几个巨大的凸起型陈旧疤痕，以前长痘留下的纪念，最近一年使用两种改善疤痕的产品联合涂抹，居然有很明显的改善，其中一个疤痕变得非常平坦了。其实我并不是想说这两个改善疤痕的产品有多好，再好也不可能完全消除，只是给长痘的各位提个醒，日常抗痘护理一定要认真做，虽然痘无法根治，但是认真护理，减少后痘痘遗症很重要，特别是痘疤痘坑，真的很难完美解决。 ",
            itext2: "除了粉刺痤疮，油皮还有两个痛苦就是黑头与毛孔。",
            itext17:
              "美容坊间流传着很扯的一件事就是告诉消费者这两个问题是缺水出油引起的，要靠补水来解决！然后一年 6000 片面膜贴起来！可是这两个问题的根源在皮脂腺，一味补水有卵用，实在想不通。",
            itext31:
              "顺便吐槽一句，补水二字现在简直成了保养万金油，干了要补水，油了要补水，长痘要补水，晒黑了要补水，受损了要补水，妆花了要补水......",
            textimg1: require("../image/homeimage/21_1.png"),
            message2:
              "这张图显示了黑头生成的根本原因，毛孔开口不畅通，过量的皮脂排不出去，堵在毛孔开口处进而氧化成黑头，拼了老命去补水对皮脂腺有毛作用啊，又被骗了吧，多来喝点我的胡麻汤，少看点没用的鸡汤。",
            message3:
              "如果基因决定了是油性皮肤，就别纠结了，只要皮脂腺还活跃着，油就洗不尽，也控不住！一般要到了皮肤明显衰老之后皮脂腺才会慢慢减少皮腺分泌。",
            message4:
              "影响皮脂分泌的一个重要环境因素是温度，春夏温暖高温的季节，皮脂腺大量分泌皮脂，油光满面，痤疮粉刺也随之加多，黑头几乎天天有，毛孔看着大一圈，秋冬季节温度变低，相应的这些问题多少会有一些改善。",
            message6:
              "黑头其实是比较容易解决的，建议用温水毛巾热敷一下需要清除黑头的部位，多是鼻尖，然后用粉刺针尾部小孔轻轻刮除，或是使用专业的清黑头镊子，清除之后，涂抹一些帮助减缓皮脂分泌的产品。没有任何产品能终止黑头，定期清除就好！",
            textimg2: require("../image/homeimage/21_2.png"),
            itext4:
              "主打减缓皮脂分泌的产品一般含有葡萄糖酸锌，吡咯烷酮酸锌之类的产品可能会放缓皮脂腺分泌油脂的速度，酒精类即时清凉，制造短暂的干爽收敛效果，微海绵球体等原料可以帮助吸附分泌的皮脂，某些精油，植物提取物等也能起到辅助作用，但无论哪种手段或复合作用都敌不过天气影响，只是阶段性减少皮脂分泌的速度罢了。",
            textimg3: require("../image/homeimage/21_3.png"),
            message7:
              "这些都是我用过觉得可以放缓皮肤出油的好东西，效果都还不错， Darphin 更是我 10 年前就推荐过的，不知道这款产品后来升级了没有，到了高温 38 度桑拿天的时候，爱咋咋的吧~神仙也救不了，就别为难化妆品了！",
            message8:
              "耐受性好的油性皮肤应该定期去角质，或使用含有果酸与水杨酸的产品，是否选择驻留型产品这个根据护理流程搭配的情况，泥浆类面膜清洁也相当推荐！",
            message9:
              "对于耐受性差的油性皮肤，建议使用低浓度的果酸与水杨酸化妆水，不必天天使用，每周或定期以绵片擦拭去角质，清洁面膜使用纯天然未经复合配方的矿物泥粉。",
            message10:
              "这两类产品我前面都推荐过！这些可以帮助减少毛孔开口处角质细胞的堆积，让皮脂更顺畅的排出，对于油性皮肤是有好处的。",
            message11:
              "毛孔这个老梗目前只有医学美容可以帮助改善，但和红血丝问题差不多，改善有限。",
            message25:
              "油性皮肤的毛孔看起来一是大，二是多。多是没办法解决的，油性皮肤每平方厘米皮脂腺可能多达好几百个，毛孔就是皮脂腺的开口，没有化妆品能物理性的减少毛孔数量。毛孔因皮脂分泌过多变大这个可以靠医学美容改善，但也存在变数，治疗后仍可能反弹，不过这仍然是目前最理想的解决办法。",
            textimg4: require("../image/homeimage/21_4.png"),
            itext11:
              "从我这些年的观察来看，存在很多不确定性，关键是相关产品都存在较强的刺激性，建议有专业指导情况下再使用，而且要坚持很久很久。",
            itext12:
              "所以，我说黑头毛孔都不是事儿，定期清理，春夏季节使用些产品放缓出油，有必要再做做医美治疗，坚持这样护理，忽然某一年发现自己变干皮了，就再不会报怨自产润肤油，光阴似箭，油田变沙漠很快的就来了，相信我。",
            iurl: require("../image/homeimage/16.png"),
            writerimage: require("../image/homeimage/16_1.png"),
            writername: "kenjijoel",
            zanmount: 312,
            talkmount: 42,
            writerinfo: "20 | 干性肤质",
            commentsList: [
              {
                userimg: require("../image/homeimage/16_6.png"),
                name: "盏茶作酒 ",
                age: "21",
                skin: "干",
                star: 3,
                textc:
                  "上水和肌真是挺良心的品牌了没有太多的营销成分肤感也是方方面面都不错而且双十一的活动也没有一变再变就是简简单单的双十一当天拍下就优惠也没有乱码七糟的预售抢货真的是良心品牌了会一直种草他家新品"
              },
              {
                userimg: require("../image/homeimage/16_7.png"),
                name: "余溫。",
                age: "25",
                star: 4,
                skin: "干",
                textc: "看着动不动上千，我心痛啊"
              },
              {
                userimg: require("../image/homeimage/16_8.png"),
                name: "邮个拥抱",
                age: "31",
                star: 4,
                skin: "混",
                textc: "darphin这个系列都很贵"
              },
              {
                userimg: require("../image/homeimage/16_9.png"),
                name: "樱花雨落",
                age: "22",
                star: 4,
                skin: "干",
                textc: "挺好用的，就是贵了点！"
              }
            ]
          },
          {
            id: 17,
            ititle: "测评丨没想到，9 块 9 眉笔完胜 200 元大牌",
            itext1:
              "每个曾饱受痘痘困扰的人，应该都有过早晨看着自己像是月球表面的脸，无可奈何地开始新一天的经历。但如果这些痘痘只是长在身体上，你会不会稍微觉得没有那么难受呢？",
            itext2:
              "其实痘痘起在身体上的痛，一点都不比起在脸上小。胸部、背部、手臂这些位置，如果在裹成粽子的冬季，倒是不会对美貌指数造成什么影响，反正除了自己和男盆友，别人也看不到。但一到夏天，就得露馅了，尤其是今夏大爆款的露背装，你说这一后背的繁星点点，总不能全指望遮瑕膏来搞定吧。",
            textimg1: require("../image/homeimage/22_1.png"),
            message2:
              "其实，身体长痘痘比你所想象的要常见，每个脸部爆痘的童鞋，身体上也可能会伴随着长痘。毕竟大多数痘痘都是由激素分泌水平引起的，没道理只挑脸上长痘。想当初美羊羊因为爆痘去看医生，第一句被问的就是“身上也有不？”",
            message3:
              "我们的皮肤有数以百万计的毛囊，它们不止存在于脸部，更遍布全身皮肤。这些毛囊内的皮脂腺会产生保护皮肤的天然油脂。如果一不小心皮脂生产过多，又赶上皮肤细胞的更新换代效率变高，就会导致毛囊中有额外的皮屑，出现毛孔堵塞的现象。这时，毛孔内那些以吃我们的皮脂为生的痤疮杆菌就愉快地开始作乱，导致炎症和肿胀，炎性痘痘就形成了。",
            message4:
              "正因如此，痤疮经常出现在皮脂腺或毛囊附近。在身体上，痘痘则多发于背部，胸部和颈部，有些神奇的人还会长在手掌心里，甚至脚底板上",
            message6:
              "身体痘痘可能比面部痤疮更加顽强——因为身体的皮肤较厚，毛孔通常比脸上的更大，因此更易堵塞；再加上这些区域经常与衣物接触；还不像面部痘痘那样，可以及时被发现和治疗……也就一直处于春风吹又生的状态。",
            message23:
              "身体痘的症状和治疗手段，其实与长在脸上的痘痘没什么不同，只要我们多一点关注，还是可以达到预防和治疗的目的。",
            message24:
              "保持良好的卫生习惯，可以有效的预防痤疮，特别是在身体上的。当皮脂与死皮细胞混合在一起堵塞住毛孔，那个地方就变成了细菌的繁殖地，继而形成粉刺。每天清洁皮肤、定期的角质管理，都可以帮助防止毛孔堵塞，将一些痘痘扼杀在萌芽期。",
            message26:
              "因为过强清洁力的表面活性剂反而会刺激皮肤，诱发痘痘。所以要使用含有温和表面活性剂的沐浴露，并确保洗到身体的所有部位，特别是身体痘的重灾区——背部。如果大油皮觉得洗的不够干净，可以配合柔软的海绵一起使用，还可以起到轻微去除废旧角质的作用。",
            message27:
              "在剧烈运动之后，洗澡尤其重要。我们曾经写过，汗水长时间停留在皮肤表面，会对皮肤造成刺激。",
            message28:
              "适当使用含有水杨酸或过氧化苯甲酰的沐浴露。这些成分可以温和地去除废旧角质，并帮助清理毛孔。",
            message29:
              "虽然洗澡很重要，但过于频繁的沐浴、搓澡巾太硬、用滚烫的热水洗澡……这些都可能使皮肤变得更糟。因此，请确保每天清洁皮肤的次数不超过两次，并使用温水。",
            textimg2: require("../image/homeimage/22_2.png"),
            itext4:
              "在美国开架货里，露得清绝对是其中的抗痘良心品牌，果酸、水杨酸、视黄醇、过氧化苯甲酰这些非处方类的常用抗痘成分，你都可以在露得清的产品线中找到浓度靠谱的对应产品，其中有些还是美国的皮肤科医生经常推荐给病人的产品。",
            itext5:
              "这个抗痘沐浴露含有 2% 的水杨酸，便宜大碗，且有大品牌的品质加持。",
            textimg3: require("../image/homeimage/22_3.png"),
            message7:
              "一个小众品牌，这个产品是美国亚马逊上的 #1 Best Seller, 有 1330 个反馈，总评分 4.3。",
            message8:
              "含有 10% 的过氧化苯甲酰，最大优点是 237 毫升的大包装，价格还很实惠（$22 美元），洗脸之余也可以用来洗身体～～那些后背起痘的童鞋们，这个值得你拥有。",
            message9:
              "有一种身体痘的起因比较奇葩，它主要由皮肤与其他介质的摩擦引起。这种情况经常发生在穿紧身制服或戴头盔运动时。所以，在这些情况下，你要额外留意那些被剧烈摩擦过的部位。",
            message10:
              "有痘痘的你，可能已经听烦了那些江湖道士传授的抗痘指南，很多食物都被扣上了致痘的帽子，比如巧克力，花生，辣椒（又辣又油除外）……",
            textimg4: require("../image/homeimage/22_4.png"),
            itext11:
              "但其实这些食物并没有被证明与痘痘有关，反而是那些看起来特别“傻白甜”的无害食物——奶制品和糖（高升糖指数的食物），才是致痘高手。",
            itext12: "此外，慢性压力，也是成人痘的主要贡献者之一。",
            itext13:
              "压力水平过高将使痤疮恶化，因为它会影响你体内的激素平衡。当我们的身体感觉到压力时，肾上腺会分泌更多的皮质醇，这种激素水平的变化会导致皮脂腺产生更多的油脂，引起痤疮。压力水平过高同时还会影响身体的免疫系统，把它的自愈能力降低 40％。",
            itext14:
              "但生活不易，咱们不可能生活在一个完全没有任何压力的世界里，焦虑放得过谁？所以我们要有意识的寻找一些方法为自己减压，比如运动、旅行，或者索性放肆的买买买。让自己开心和放松起来，可以帮助缓解痤疮，这可不是无意义的心灵鸡汤。",
            iurl: require("../image/homeimage/17.png"),
            writerimage: require("../image/homeimage/17_1.png"),
            writername: "医美喵",
            zanmount: 753,
            talkmount: 89,
            writerinfo: "25 | 混合肤质",
            commentsList: [
              {
                userimg: require("../image/homeimage/17_6.png"),
                name: "一袖飞花 ",
                age: "23",
                skin: "油",
                star: 4,
                textc:
                  "我刚买了另一支9. 9的Flortte用惯砍刀式的眉笔这种圆头极细的还不是很会用毕竟我画眉毛的功力不是很深但是用后感觉还不错也很推荐"
              },
              {
                userimg: require("../image/homeimage/17_8.png"),
                name: "曲流觞",
                age: "22",
                star: 5,
                skin: "干",
                textc:
                  "我感觉卡其色彩也长痘痘还是闭口，反正眉毛那里就是会长东西，以前用的眉笔都没用出现这种情况"
              },
              {
                userimg: require("../image/homeimage/17_9.png"),
                name: "夜久泪长",
                age: "25",
                star: 5,
                skin: "混",
                textc: "完全打不开大图，不管是点击还是长按。截图放大也不清晰"
              },
              {
                userimg: require("../image/homeimage/17_7.png"),
                name: "要毁吗*",
                age: "23",
                star: 4,
                skin: "干",
                textc:
                  "植村秀确实好用，而且不是那种很显色的，新手画错了也方便改"
              }
            ]
          },
          {
            id: 18,
            ititle: "吃惑丨吵着吃素减肥的，咋都没成功？",
            itext1:
              "睫毛对颜值的提升作用有多大呢？日杂 Vivi 里 2 位模特都将妆容的重点放到了眼部，纤长的睫毛时而充满少女的无辜感，时而又野性性感。",
            textimg1: require("../image/homeimage/23_1.png"),
            message2: "如果天生木有纤长卷翘的睫毛肿么办？",
            message3: "不要怕啦~还有假睫毛可以来拯救一下稀疏短小的睫毛。",
            message4:
              "今天，JK 就来和大家来看几款自己爱用的假睫毛和平时常用的最最最简单易上手的贴法，帮助一下平时假睫毛手残的 J 宝们~",
            textimg2: require("../image/homeimage/23_2.png"),
            itext4:
              "市面上的假睫毛按照梗大概可以分成 3 种：棉线梗，透明梗，机织梗。",
            itext5:
              "棉线梗其实就是黑色棉线梗，梗比较柔软，可以自己弯曲出想要的形状，舒适度相当高，棉线梗可以充当眼线，佩戴时不太容易开胶。但是清洗过程中容易掉毛或者毛发变形，不过总体 Okay 啦~",
            itext6:
              "透明梗基本是渔线，它自带弧度，大部分透明梗真的比较硬，所以弧度很难改变。质量差的透明梗非常戳眼睛，敏感眼被戳到眼泪流一吨（说起来都是伤）！透明梗有一定支撑度，隐形效果是最好的，但是有些角度容易反光，头尾超级容易开胶，还容易掉毛！",
            itext7:
              "机织梗有粗有细，大多数偏硬，形状难以自己调整。太硬的机织梗还是会降低舒适度，建议敏感眼购买细梗。不想画眼线的时候，机织梗可以充当眼线，它支撑力非常强，能瞬间让内双眼睛翻出双眼皮，但是它真的不耐洗，洗多了毛就会一根根地掉。",
            textimg3: require("../image/homeimage/23_3.png"),
            message7: "剪刀：修建假睫毛长度",
            message8: "平头镊子：用来把假睫毛从包装内取下，佩戴时的细节处理",
            message9:
              "箭头镊子：用来佩戴假睫毛使用，也可以自己徒手佩戴假睫毛，这个看个人习惯",
            textimg4: require("../image/homeimage/23_4.png"),
            itext11:
              "用镊子将假睫毛从盒子里取出来，不要徒手拉扯！使用镊子对假睫毛的损坏要比手指小很多",
            itext12: "新的假睫毛根部都会有多余的胶水，可以用镊子将余胶去除",
            itext13:
              "根据自己的眼形调整睫毛长度，可以分别剪去眼头眼尾过长的部分，如果假睫毛长度刚刚好，可以跳过此步骤。",
            itext14: "弯曲假睫毛，给它来个马杀鸡，使假睫毛的弧度更加贴合眼睛",
            itext15: "JK 建议画好眼影和内眼线再贴假睫毛",
            itext16:
              "睫毛采用三段式夹法，分别夹睫毛的根部，中部和尾部，这样出来的睫毛才会更翘（平时自己刷睫毛也可以参考这个夹法，再硬直的睫毛也一天不塌）",
            message18:
              "均匀的沿假睫毛根部涂满胶水，注意两头稍微多一点，以防两头开胶，但是胶水也不能太多，太多会溢出。切记不要涂上胶水就立刻佩戴，等到睫毛半干状态时粘性最强。",
            message19: "先将假睫毛中间与自己的真睫毛根部固定",
            message20: "先快速固定前半段",
            message21: "然后固定眼尾，也可以先眼尾后眼头，这个顺序看个人爱好啦",
            message22:
              "贴好后用镊子往里推一推，让真假睫毛融合更紧密，并检查睫毛各段是否紧贴睫毛根部",
            itext24: "把眼线补全，填补一下真假睫毛之间的空隙",
            itext25:
              "今天的假睫毛分享到这啦～J 宝们到底粉哪一款呢？小仙女们平时化妆会戴假睫毛吗？欢迎评论区留言！",
            iurl: require("../image/homeimage/18.png"),
            writerimage: require("../image/homeimage/18_1.png"),
            writername: "混子谈命",
            zanmount: 911,
            talkmount: 76,
            writerinfo: "21 | 干性肤质",
            commentsList: [
              {
                userimg: require("../image/homeimage/18_6.png"),
                name: "阳光一夏",
                age: "21",
                skin: "干",
                star: 4,
                textc: "其实吃的分量控制住，吃什么就没有太多干系的"
              },
              {
                userimg: require("../image/homeimage/18_7.png"),
                name: " 厌刺@",
                age: "20",
                star: 4,
                skin: "油",
                textc: "血糖低为什么会有饱腹感？不是血糖低会有饥饿感吗"
              },
              {
                userimg: require("../image/homeimage/18_8.png"),
                name: " 烟花巷陌",
                age: "22",
                star: 5,
                skin: "干",
                textc:
                  "吃素没啥效果，我喝了几次酸奶差不多掉了十斤，肚子上的肉肉可终于少了，不容易啊~"
              },
              {
                userimg: require("../image/homeimage/18_9.png"),
                name: "潇湘烟雨",
                age: "26",
                star: 3,
                skin: "干",
                textc:
                  "我发现其实看情况，至少我胡吃的话，与GI值无关，也会影响体重。相反，天天巧克力，零食,不要海塞，也不会胖。至少在我这里完全看分量的。"
              }
            ]
          },
          {
            id: 19,
            ititle: "私奔丨VC+鸡尾酒精华怎么搭配？A 醇这样用会更刺激？",
            itext1: "又见面啦，握个爪吧ฅ",
            itext2: "我是话少草多、能拔会种的种草喵～",
            textimg1: require("../image/homeimage/24_1.png"),
            message2:
              "之前一直帮大家收集博主大大们的安利，但是喵发现，咱们话题区也有超多宝宝喜欢分享自己的心得体会，可以说又是一大型种草基地了。",
            message3:
              "今天喵就把部分“草”搬到了现场，快来一起探一探，究竟是哪些宝贝助他们实现美白大业的呢~",
            textimg2: require("../image/homeimage/24_2.png"),
            itext4:
              "乐敦 CC ，网上好坏说法都有，也不算贵嘛，我也就抱着试试的心态买了，主要是为了对付我的痘印，所以首先得说我感觉它对付新痘印是有效的，再说就是我都全脸用嘛，用了一段时间我照镜子看着自己好像有哪不对但又说不上来，然后我身边的一些人都说我好像变白了我才反应过来...所以我觉得它有效是真的，但起效慢也是真的...",
            itext5:
              "脸上用了乐敦 CC ，好久没见的朋友晚上卸了妆以后说感觉我皮肤透亮了好多。",
            textimg3: require("../image/homeimage/24_3.png"),
            message7:
              "混合两天从 4 级到冷 3 ，我已经很满意了。。 但因为是美白猛药，敏感肌别作死！",
            message8:
              "The Ordinary 的 30% VC精华，我是敏感皮但不知道为啥对这个就是不敏感。使用感蛮糟糕，有点蛰皮肤，会搓泥，只能拍着吸收，但真的有奇效啊啊啊，一管还没用完白了一个度了！而且便宜啊（找代购）百元内了！但敏感皮一定慎选！毕竟谁家钱都不是刮来的！",
            textimg4: require("../image/homeimage/24_4.png"),
            itext11:
              "自然哲理维他命 C 粉，粉末状的 VC 比较好保存，干燥情况下不容易失活，每次用的时候跟肌底液或者水乳混合在一起使用，真的有变白。",
            itext12:
              "我今天下半年开始用的自然哲理的 VC 粉，用了三四个月，朋友都说我变白了，皮肤还有光泽，暗沉改善了。",
            itext13:
              "PS：喵只是挑选了部分内容呈现在首页，想了解更多分享可以查看话题“一人说一件真的让你变白的护肤品 ”，更多精彩内容在等你哈~",
            itext14:
              "好啦，今天安利就到这儿啦，以后喵也会经常为大家整理一些优秀的用户分享，如果你也有心得体会，记得来和我们 share ~",
            itext15:
              "喵喵头条贴下期预告：“夏天头发出油好厉害！求控油洗发水”，宝宝们也可以去该话题下发表自己的见解，有机会被 pick 到首页哦~",
            iurl: require("../image/homeimage/19.png"),
            writerimage: require("../image/homeimage/19_1.png"),
            writername: "糊奔奔",
            zanmount: 643,
            talkmount: 99,
            writerinfo: "21 | 干性肤质",
            commentsList: [
              {
                userimg: require("../image/homeimage/19_6.png"),
                name: "夏末未央",
                age: "22",
                skin: "干",
                star: 4,
                textc:
                  "奔奔，混合型皮肤，坐标南方，两侧鼻翼经常泛红也容易长痘，为什么啊?请问怎么修复呢?(锦鲤保佑我被抽中)"
              },
              {
                userimg: require("../image/homeimage/19_7.png"),
                name: "无休无止っ",
                age: "27",
                star: 5,
                skin: "混",
                textc:
                  "奔奔可以推荐一下身体乳吗目前就是腿上有白白的屑还有点鸡皮什么的是要用果杨酸的嘛"
              },
              {
                userimg: require("../image/homeimage/19_8.png"),
                name: "无心无愧i  ",
                age: "22",
                star: 4,
                skin: "油",
                textc:
                  "举爪提问奔奔:用完水杨酸棉片洗掉之后可以在后续护肤时用a醇咩?"
              },
              {
                userimg: require("../image/homeimage/19_9.png"),
                name: "我明白",
                age: "17",
                star: 4,
                skin: "干",
                textc:
                  "奔奔请问你有用过wonjin原辰的面膜吗他家的面膜怎么样呢? app. 上都没什么相关产品"
              }
            ]
          }
        ],
        [
          {
            id: 21,
            ititle: "闲谈丨我的黑头毛孔护理心得",
            itext1:
              "先八一个事暖场——我胸口前有几个巨大的凸起型陈旧疤痕，以前长痘留下的纪念，最近一年使用两种改善疤痕的产品联合涂抹，居然有很明显的改善，其中一个疤痕变得非常平坦了。其实我并不是想说这两个改善疤痕的产品有多好，再好也不可能完全消除，只是给长痘的各位提个醒，日常抗痘护理一定要认真做，虽然痘无法根治，但是认真护理，减少后痘痘遗症很重要，特别是痘疤痘坑，真的很难完美解决。 ",
            itext2: "除了粉刺痤疮，油皮还有两个痛苦就是黑头与毛孔。",
            itext17:
              "美容坊间流传着很扯的一件事就是告诉消费者这两个问题是缺水出油引起的，要靠补水来解决！然后一年 6000 片面膜贴起来！可是这两个问题的根源在皮脂腺，一味补水有卵用，实在想不通。",
            itext31:
              "顺便吐槽一句，补水二字现在简直成了保养万金油，干了要补水，油了要补水，长痘要补水，晒黑了要补水，受损了要补水，妆花了要补水......",
            textimg1: require("../image/homeimage/21_1.png"),
            message2:
              "这张图显示了黑头生成的根本原因，毛孔开口不畅通，过量的皮脂排不出去，堵在毛孔开口处进而氧化成黑头，拼了老命去补水对皮脂腺有毛作用啊，又被骗了吧，多来喝点我的胡麻汤，少看点没用的鸡汤。",
            message3:
              "如果基因决定了是油性皮肤，就别纠结了，只要皮脂腺还活跃着，油就洗不尽，也控不住！一般要到了皮肤明显衰老之后皮脂腺才会慢慢减少皮腺分泌。",
            message4:
              "影响皮脂分泌的一个重要环境因素是温度，春夏温暖高温的季节，皮脂腺大量分泌皮脂，油光满面，痤疮粉刺也随之加多，黑头几乎天天有，毛孔看着大一圈，秋冬季节温度变低，相应的这些问题多少会有一些改善。",
            message6:
              "黑头其实是比较容易解决的，建议用温水毛巾热敷一下需要清除黑头的部位，多是鼻尖，然后用粉刺针尾部小孔轻轻刮除，或是使用专业的清黑头镊子，清除之后，涂抹一些帮助减缓皮脂分泌的产品。没有任何产品能终止黑头，定期清除就好！",
            textimg2: require("../image/homeimage/21_2.png"),
            itext4:
              "主打减缓皮脂分泌的产品一般含有葡萄糖酸锌，吡咯烷酮酸锌之类的产品可能会放缓皮脂腺分泌油脂的速度，酒精类即时清凉，制造短暂的干爽收敛效果，微海绵球体等原料可以帮助吸附分泌的皮脂，某些精油，植物提取物等也能起到辅助作用，但无论哪种手段或复合作用都敌不过天气影响，只是阶段性减少皮脂分泌的速度罢了。",
            textimg3: require("../image/homeimage/21_3.png"),
            message7:
              "这些都是我用过觉得可以放缓皮肤出油的好东西，效果都还不错， Darphin 更是我 10 年前就推荐过的，不知道这款产品后来升级了没有，到了高温 38 度桑拿天的时候，爱咋咋的吧~神仙也救不了，就别为难化妆品了！",
            message8:
              "耐受性好的油性皮肤应该定期去角质，或使用含有果酸与水杨酸的产品，是否选择驻留型产品这个根据护理流程搭配的情况，泥浆类面膜清洁也相当推荐！",
            message9:
              "对于耐受性差的油性皮肤，建议使用低浓度的果酸与水杨酸化妆水，不必天天使用，每周或定期以绵片擦拭去角质，清洁面膜使用纯天然未经复合配方的矿物泥粉。",
            message10:
              "这两类产品我前面都推荐过！这些可以帮助减少毛孔开口处角质细胞的堆积，让皮脂更顺畅的排出，对于油性皮肤是有好处的。",
            message11:
              "毛孔这个老梗目前只有医学美容可以帮助改善，但和红血丝问题差不多，改善有限。",
            message25:
              "油性皮肤的毛孔看起来一是大，二是多。多是没办法解决的，油性皮肤每平方厘米皮脂腺可能多达好几百个，毛孔就是皮脂腺的开口，没有化妆品能物理性的减少毛孔数量。毛孔因皮脂分泌过多变大这个可以靠医学美容改善，但也存在变数，治疗后仍可能反弹，不过这仍然是目前最理想的解决办法。",
            textimg4: require("../image/homeimage/21_4.png"),
            itext11:
              "从我这些年的观察来看，存在很多不确定性，关键是相关产品都存在较强的刺激性，建议有专业指导情况下再使用，而且要坚持很久很久。",
            itext12:
              "所以，我说黑头毛孔都不是事儿，定期清理，春夏季节使用些产品放缓出油，有必要再做做医美治疗，坚持这样护理，忽然某一年发现自己变干皮了，就再不会报怨自产润肤油，光阴似箭，油田变沙漠很快的就来了，相信我。",
            iurl: require("../image/homeimage/21.png"),
            writerimage: require("../image/homeimage/21_5.png"),
            writername: "-RoX-",
            zanmount: 312,
            talkmount: 42,
            writerinfo: "20 | 干性肤质",
            commentsList: [
              {
                userimg: require("../image/homeimage/21_7.png"),
                name: "未闻花香",
                age: "23",
                skin: "油",
                star: 4,
                textc: "我脸上长黑色的毛可怎么办呀？我觉得这个比黑头更可怕啊"
              },
              {
                userimg: require("../image/homeimage/21_8.png"),
                name: "yw11.com",
                age: "24",
                skin: "干",
                star: 3,
                textc: "emmm如果是手挤出来的毛孔，要是我不在挤它的话会变小吗"
              },
              {
                userimg: require("../image/homeimage/21_9.png"),
                name: "晚街听风",
                age: "21",
                skin: "干",
                star: 5,
                textc:
                  "我用牙刷挤上牙膏后刷鼻子黑头就会少效果很明显就是刷的时候有点睁不开眼睛鼻子有麻麻的感觉挺好用的"
              },
              {
                userimg: require("../image/homeimage/21_10.png"),
                name: "特别",
                age: "24",
                skin: "油",
                star: 5,
                textc:
                  "之前用过清洁面膜没有及时收缩毛孔现在毛孔粗大也有黑头了怎么办"
              }
            ]
          },
          {
            id: 22,
            ititle: "战痘心得丨身体痘看着心烦，去起来却不算难",
            itext1:
              "每个曾饱受痘痘困扰的人，应该都有过早晨看着自己像是月球表面的脸，无可奈何地开始新一天的经历。但如果这些痘痘只是长在身体上，你会不会稍微觉得没有那么难受呢？",
            itext2:
              "其实痘痘起在身体上的痛，一点都不比起在脸上小。胸部、背部、手臂这些位置，如果在裹成粽子的冬季，倒是不会对美貌指数造成什么影响，反正除了自己和男盆友，别人也看不到。但一到夏天，就得露馅了，尤其是今夏大爆款的露背装，你说这一后背的繁星点点，总不能全指望遮瑕膏来搞定吧。",
            textimg1: require("../image/homeimage/22_1.png"),
            message2:
              "其实，身体长痘痘比你所想象的要常见，每个脸部爆痘的童鞋，身体上也可能会伴随着长痘。毕竟大多数痘痘都是由激素分泌水平引起的，没道理只挑脸上长痘。想当初美羊羊因为爆痘去看医生，第一句被问的就是“身上也有不？”",
            message3:
              "我们的皮肤有数以百万计的毛囊，它们不止存在于脸部，更遍布全身皮肤。这些毛囊内的皮脂腺会产生保护皮肤的天然油脂。如果一不小心皮脂生产过多，又赶上皮肤细胞的更新换代效率变高，就会导致毛囊中有额外的皮屑，出现毛孔堵塞的现象。这时，毛孔内那些以吃我们的皮脂为生的痤疮杆菌就愉快地开始作乱，导致炎症和肿胀，炎性痘痘就形成了。",
            message4:
              "正因如此，痤疮经常出现在皮脂腺或毛囊附近。在身体上，痘痘则多发于背部，胸部和颈部，有些神奇的人还会长在手掌心里，甚至脚底板上",
            message6:
              "身体痘痘可能比面部痤疮更加顽强——因为身体的皮肤较厚，毛孔通常比脸上的更大，因此更易堵塞；再加上这些区域经常与衣物接触；还不像面部痘痘那样，可以及时被发现和治疗……也就一直处于春风吹又生的状态。",
            message23:
              "身体痘的症状和治疗手段，其实与长在脸上的痘痘没什么不同，只要我们多一点关注，还是可以达到预防和治疗的目的。",
            message24:
              "保持良好的卫生习惯，可以有效的预防痤疮，特别是在身体上的。当皮脂与死皮细胞混合在一起堵塞住毛孔，那个地方就变成了细菌的繁殖地，继而形成粉刺。每天清洁皮肤、定期的角质管理，都可以帮助防止毛孔堵塞，将一些痘痘扼杀在萌芽期。",
            message26:
              "因为过强清洁力的表面活性剂反而会刺激皮肤，诱发痘痘。所以要使用含有温和表面活性剂的沐浴露，并确保洗到身体的所有部位，特别是身体痘的重灾区——背部。如果大油皮觉得洗的不够干净，可以配合柔软的海绵一起使用，还可以起到轻微去除废旧角质的作用。",
            message27:
              "在剧烈运动之后，洗澡尤其重要。我们曾经写过，汗水长时间停留在皮肤表面，会对皮肤造成刺激。",
            message28:
              "适当使用含有水杨酸或过氧化苯甲酰的沐浴露。这些成分可以温和地去除废旧角质，并帮助清理毛孔。",
            message29:
              "虽然洗澡很重要，但过于频繁的沐浴、搓澡巾太硬、用滚烫的热水洗澡……这些都可能使皮肤变得更糟。因此，请确保每天清洁皮肤的次数不超过两次，并使用温水。",
            textimg2: require("../image/homeimage/22_2.png"),
            itext4:
              "在美国开架货里，露得清绝对是其中的抗痘良心品牌，果酸、水杨酸、视黄醇、过氧化苯甲酰这些非处方类的常用抗痘成分，你都可以在露得清的产品线中找到浓度靠谱的对应产品，其中有些还是美国的皮肤科医生经常推荐给病人的产品。",
            itext5:
              "这个抗痘沐浴露含有 2% 的水杨酸，便宜大碗，且有大品牌的品质加持。",
            textimg3: require("../image/homeimage/22_3.png"),
            message7:
              "一个小众品牌，这个产品是美国亚马逊上的 #1 Best Seller, 有 1330 个反馈，总评分 4.3。",
            message8:
              "含有 10% 的过氧化苯甲酰，最大优点是 237 毫升的大包装，价格还很实惠（$22 美元），洗脸之余也可以用来洗身体～～那些后背起痘的童鞋们，这个值得你拥有。",
            message9:
              "有一种身体痘的起因比较奇葩，它主要由皮肤与其他介质的摩擦引起。这种情况经常发生在穿紧身制服或戴头盔运动时。所以，在这些情况下，你要额外留意那些被剧烈摩擦过的部位。",
            message10:
              "有痘痘的你，可能已经听烦了那些江湖道士传授的抗痘指南，很多食物都被扣上了致痘的帽子，比如巧克力，花生，辣椒（又辣又油除外）……",
            textimg4: require("../image/homeimage/22_4.png"),
            itext11:
              "但其实这些食物并没有被证明与痘痘有关，反而是那些看起来特别“傻白甜”的无害食物——奶制品和糖（高升糖指数的食物），才是致痘高手。",
            itext12: "此外，慢性压力，也是成人痘的主要贡献者之一。",
            itext13:
              "压力水平过高将使痤疮恶化，因为它会影响你体内的激素平衡。当我们的身体感觉到压力时，肾上腺会分泌更多的皮质醇，这种激素水平的变化会导致皮脂腺产生更多的油脂，引起痤疮。压力水平过高同时还会影响身体的免疫系统，把它的自愈能力降低 40％。",
            itext14:
              "但生活不易，咱们不可能生活在一个完全没有任何压力的世界里，焦虑放得过谁？所以我们要有意识的寻找一些方法为自己减压，比如运动、旅行，或者索性放肆的买买买。让自己开心和放松起来，可以帮助缓解痤疮，这可不是无意义的心灵鸡汤。",
            iurl: require("../image/homeimage/22.png"),
            writerimage: require("../image/homeimage/22_5.png"),
            writername: "美容大王",
            zanmount: 111,
            talkmount: 23,
            writerinfo: "25 | 混合肤质",
            commentsList: [
              {
                userimg: require("../image/homeimage/22_7.png"),
                name: "她丶告诉我",
                age: "20",
                skin: "干",
                star: 5,
                textc:
                  "真的太好了，我背上痘痘特别严重，而且逐渐蔓延到全身，又痒又痛"
              },
              {
                userimg: require("../image/homeimage/22_8.png"),
                name: "苏景烟",
                age: "24",
                skin: "混",
                star: 4,
                textc:
                  "之前用sana的美背喷雾，背上痘痘好很多，只可惜还剩一大瓶忘在了学校没有带出来"
              },
              {
                userimg: require("../image/homeimage/22_9.png"),
                name: "疏离",
                age: "22",
                skin: "干",
                star: 4,
                textc:
                  "想问背上的增生性痘疤怎么办?痘痘差不多好了，可惜当时年轻不懂事，现在楼下了好几个顽.固的痘疤。想问有没有有经验的同学?难道真的只能去医美了吗"
              },
              {
                userimg: require("../image/homeimage/22_10.png"),
                name: "时光倒影",
                age: "21",
                skin: "油",
                star: 3,
                textc: "可以把to的2%水杨酸加进沐浴露里面用吗？"
              }
            ]
          },
          {
            id: 23,
            ititle: "教程丨假睫毛佩戴心得，从此妈妈再也不用担心你的睫毛！",
            itext1:
              "睫毛对颜值的提升作用有多大呢？日杂 Vivi 里 2 位模特都将妆容的重点放到了眼部，纤长的睫毛时而充满少女的无辜感，时而又野性性感。",
            textimg1: require("../image/homeimage/23_1.png"),
            message2: "如果天生木有纤长卷翘的睫毛肿么办？",
            message3: "不要怕啦~还有假睫毛可以来拯救一下稀疏短小的睫毛。",
            message4:
              "今天，JK 就来和大家来看几款自己爱用的假睫毛和平时常用的最最最简单易上手的贴法，帮助一下平时假睫毛手残的 J 宝们~",
            textimg2: require("../image/homeimage/23_2.png"),
            itext4:
              "市面上的假睫毛按照梗大概可以分成 3 种：棉线梗，透明梗，机织梗。",
            itext5:
              "棉线梗其实就是黑色棉线梗，梗比较柔软，可以自己弯曲出想要的形状，舒适度相当高，棉线梗可以充当眼线，佩戴时不太容易开胶。但是清洗过程中容易掉毛或者毛发变形，不过总体 Okay 啦~",
            itext6:
              "透明梗基本是渔线，它自带弧度，大部分透明梗真的比较硬，所以弧度很难改变。质量差的透明梗非常戳眼睛，敏感眼被戳到眼泪流一吨（说起来都是伤）！透明梗有一定支撑度，隐形效果是最好的，但是有些角度容易反光，头尾超级容易开胶，还容易掉毛！",
            itext7:
              "机织梗有粗有细，大多数偏硬，形状难以自己调整。太硬的机织梗还是会降低舒适度，建议敏感眼购买细梗。不想画眼线的时候，机织梗可以充当眼线，它支撑力非常强，能瞬间让内双眼睛翻出双眼皮，但是它真的不耐洗，洗多了毛就会一根根地掉。",
            textimg3: require("../image/homeimage/23_3.png"),
            message7: "剪刀：修建假睫毛长度",
            message8: "平头镊子：用来把假睫毛从包装内取下，佩戴时的细节处理",
            message9:
              "箭头镊子：用来佩戴假睫毛使用，也可以自己徒手佩戴假睫毛，这个看个人习惯",
            textimg4: require("../image/homeimage/23_4.png"),
            itext11:
              "用镊子将假睫毛从盒子里取出来，不要徒手拉扯！使用镊子对假睫毛的损坏要比手指小很多",
            itext12: "新的假睫毛根部都会有多余的胶水，可以用镊子将余胶去除",
            itext13:
              "根据自己的眼形调整睫毛长度，可以分别剪去眼头眼尾过长的部分，如果假睫毛长度刚刚好，可以跳过此步骤。",
            itext14: "弯曲假睫毛，给它来个马杀鸡，使假睫毛的弧度更加贴合眼睛",
            itext15: "JK 建议画好眼影和内眼线再贴假睫毛",
            itext16:
              "睫毛采用三段式夹法，分别夹睫毛的根部，中部和尾部，这样出来的睫毛才会更翘（平时自己刷睫毛也可以参考这个夹法，再硬直的睫毛也一天不塌）",
            message18:
              "均匀的沿假睫毛根部涂满胶水，注意两头稍微多一点，以防两头开胶，但是胶水也不能太多，太多会溢出。切记不要涂上胶水就立刻佩戴，等到睫毛半干状态时粘性最强。",
            message19: "先将假睫毛中间与自己的真睫毛根部固定",
            message20: "先快速固定前半段",
            message21: "然后固定眼尾，也可以先眼尾后眼头，这个顺序看个人爱好啦",
            message22:
              "贴好后用镊子往里推一推，让真假睫毛融合更紧密，并检查睫毛各段是否紧贴睫毛根部",
            itext24: "把眼线补全，填补一下真假睫毛之间的空隙",
            itext25:
              "今天的假睫毛分享到这啦～J 宝们到底粉哪一款呢？小仙女们平时化妆会戴假睫毛吗？欢迎评论区留言！",
            iurl: require("../image/homeimage/23.png"),
            writerimage: require("../image/homeimage/23_5.png"),
            writername: "Janicekidd",
            zanmount: 435,
            talkmount: 43,
            writerinfo: "21 | 干性肤质",
            commentsList: [
              {
                userimg: require("../image/homeimage/23_7.png"),
                name: "诗酒趁年少",
                age: "21",
                skin: "混",
                star: 4,
                textc: "眼：一学就会  手：一做就废"
              },
              {
                userimg: require("../image/homeimage/23_8.png"),
                name: "笙歌欢颜",
                age: "26",
                skin: "混",
                star: 5,
                textc: "买了假睫毛还要买胶水，镊子，收纳盒,洗液..女生太麻烦了"
              },
              {
                userimg: require("../image/homeimage/23_9.png"),
                name: "少惹Ｗǒ ",
                age: "22",
                skin: "干",
                star: 4,
                textc:
                  "想问一下，睫毛很长也很密但是不翘需不需要贴假睫毛?我夹睫毛的技术惨不忍睹，睫毛膏买了还没到(*'^'*)"
              },
              {
                userimg: require("../image/homeimage/23_10.png"),
                name: "如若 ",
                age: "21",
                skin: "油",
                star: 5,
                textc:
                  "曾经初粘睫毛扯掉半只眼睫毛的我，现在不用粘了耶!因为我胶水过敏了..."
              }
            ]
          },
          {
            id: 24,
            ititle: "喵喵头条帖丨亲测有效的美白产品在这里！",
            itext1: "又见面啦，握个爪吧ฅ",
            itext2: "我是话少草多、能拔会种的种草喵～",
            textimg1: require("../image/homeimage/24_1.png"),
            message2:
              "之前一直帮大家收集博主大大们的安利，但是喵发现，咱们话题区也有超多宝宝喜欢分享自己的心得体会，可以说又是一大型种草基地了。",
            message3:
              "今天喵就把部分“草”搬到了现场，快来一起探一探，究竟是哪些宝贝助他们实现美白大业的呢~",
            textimg2: require("../image/homeimage/24_2.png"),
            itext4:
              "乐敦 CC ，网上好坏说法都有，也不算贵嘛，我也就抱着试试的心态买了，主要是为了对付我的痘印，所以首先得说我感觉它对付新痘印是有效的，再说就是我都全脸用嘛，用了一段时间我照镜子看着自己好像有哪不对但又说不上来，然后我身边的一些人都说我好像变白了我才反应过来...所以我觉得它有效是真的，但起效慢也是真的...",
            itext5:
              "脸上用了乐敦 CC ，好久没见的朋友晚上卸了妆以后说感觉我皮肤透亮了好多。",
            textimg3: require("../image/homeimage/24_3.png"),
            message7:
              "混合两天从 4 级到冷 3 ，我已经很满意了。。 但因为是美白猛药，敏感肌别作死！",
            message8:
              "The Ordinary 的 30% VC精华，我是敏感皮但不知道为啥对这个就是不敏感。使用感蛮糟糕，有点蛰皮肤，会搓泥，只能拍着吸收，但真的有奇效啊啊啊，一管还没用完白了一个度了！而且便宜啊（找代购）百元内了！但敏感皮一定慎选！毕竟谁家钱都不是刮来的！",
            textimg4: require("../image/homeimage/24_4.png"),
            itext11:
              "自然哲理维他命 C 粉，粉末状的 VC 比较好保存，干燥情况下不容易失活，每次用的时候跟肌底液或者水乳混合在一起使用，真的有变白。",
            itext12:
              "我今天下半年开始用的自然哲理的 VC 粉，用了三四个月，朋友都说我变白了，皮肤还有光泽，暗沉改善了。",
            itext13:
              "PS：喵只是挑选了部分内容呈现在首页，想了解更多分享可以查看话题“一人说一件真的让你变白的护肤品 ”，更多精彩内容在等你哈~",
            itext14:
              "好啦，今天安利就到这儿啦，以后喵也会经常为大家整理一些优秀的用户分享，如果你也有心得体会，记得来和我们 share ~",
            itext15:
              "喵喵头条贴下期预告：“夏天头发出油好厉害！求控油洗发水”，宝宝们也可以去该话题下发表自己的见解，有机会被 pick 到首页哦~",
            iurl: require("../image/homeimage/24.png"),
            writerimage: require("../image/homeimage/24_5.png"),
            writername: "种草喵",
            zanmount: 142,
            talkmount: 9,
            writerinfo: "20 | 混合肤质",
            commentsList: [
              {
                userimg: require("../image/homeimage/24_7.png"),
                name: "如履薄冰° ",
                age: "19",
                skin: "干",
                star: 4,
                textc: "怎么没人说全身美白！！身体美白也很重要姐妹们！！"
              },
              {
                userimg: require("../image/homeimage/24_8.png"),
                name: "柔眸 ",
                age: "17",
                skin: "干",
                star: 4,
                textc:
                  "olay图配错了啊啊啊图是紧致小白瓶文字是光感小白瓶啊能不能用点心"
              },
              {
                userimg: require("../image/homeimage/24_9.png"),
                name: "人生如梦",
                age: "19",
                skin: "混",
                star: 5,
                textc:
                  "耐受度要怎么建立啊我用了olay方程式美白的那个不耐受脸上起了小疙瘩"
              },
              {
                userimg: require("../image/homeimage/24_10.png"),
                name: "秋月春花",
                age: "20",
                skin: "油",
                star: 4,
                textc:
                  "我脸上是从小长的遗传雀斑，今年用了四个多月的菲泊丝丽把脸上的斑给去掉了"
              }
            ]
          },
          {
            id: 25,
            ititle: "支招丨多管齐下除黑头，跟草莓鼻说 byebye",
            itext1:
              "上一篇文章说过，我给很多人做过护肤指导。其中我发现大量的人都在咨询黑头问题，的确黑头问题很普遍，而且不是很容易一招见效解决的，淘宝上或者朋友圈里常常宣传所谓对黑头有神效的产品，其实都是骗人的。撕拉型面膜、黑头导出液、黑头鼻贴、去黑头神器、黑头一抹净。很多小可爱被宣传中招，结果发现全都是一时有效，后续留下更大的毛孔！ ",
            textimg1: require("../image/homeimage/25_1.png"),
            message2:
              "下面就给大家介绍一下科学的，长期研究下来对黑头有用的一些方法。",
            message3: "我个人长期研究下来觉得对黑头最有用的方法：刷酸。",
            message4:
              "使用含低浓度水杨酸、果酸类成分的产品，单独涂抹在鼻子上面，可以减轻黑头。",
            message6:
              "最首推的产品是宝拉的水杨酸焕彩精华液，因为这个产品有个 30 毫升装的，赶上活动什么的，只要 78 元就可以买到。",
            textimg2: require("../image/homeimage/25_2.png"),
            itext4:
              "推荐原因：水杨酸能够深入毛孔彻底清除废旧角质，疏通毛孔，减轻黑头。坚持使用可以看到黑头有明显缩小。",
            itext5: "其他也有一些酸类的精华，比如，修丽可果酸焕活复颜精华液。",
            textimg3: require("../image/homeimage/25_3.png"),
            message7:
              "复配了乳酸，乙醇酸，柠檬酸，水杨酸，辛酰水杨酸，多种酸协同作用，不但能疏通毛孔，还可以刺激胶原蛋白再生。功效要比宝拉水杨酸强大很多，可惜价钱贵了点。",
            message8: "刷酸的正确打开方式",
            message9:
              "当你按照上面我讲的办法，用含酸类的产品去黑头，就已经是在刷酸了。",
            message10:
              "刷酸最担心的一个现象是皮肤不耐受，出现刺痛灼热等反应，前面刚开始刷酸的时候，要注意少量，逐渐培养皮肤适应。",
            textimg4: require("../image/homeimage/25_4.png"),
            itext11: "对于已经形成的严重黑头，可以考虑一些医美手段。",
            itext12:
              "以前美容院流行小气泡项目去黑头，很多都只是噱头，还会把毛孔越弄越大。如果在正规的医美机构进行刷酸，（酸浓度比我前面推荐的两个产品高很多）也是个不错的方法。",
            itext13: "现在有个很不错也正规的治疗方法叫做，Hydrafacial 海菲秀。",
            itext14:
              "原理就是将负压和刷酸结合，吸附出毛孔沉积的皮脂黑头，相对于在家刷酸，多了一个负压抽吸，效果更明显一些。但价格也贵，500-1000RMB 左右。并且也会复发，不是一劳永逸。我建议黑头比较严重的妹子们可以去做一次，来个深层次大扫除，但日常还是靠自己在家刷酸来控制。",
            itext15:
              "我有几个朋友去体验过，效果都很满意。医美喵还组织过这样的项目团购，反馈很不错。不方便暴露她们的图片，我找了海菲秀官网上的宣传图。",
            iurl: require("../image/homeimage/25.png"),
            writerimage: require("../image/homeimage/25_5.png"),
            writername: "配方师Gigi",
            zanmount: 666,
            talkmount: 23,
            writerinfo: "21 | 油性肤质",
            commentsList: [
              {
                userimg: require("../image/homeimage/25_7.png"),
                name: " 秋奈櫻舞、",
                age: "17",
                skin: "油",
                star: 5,
                textc: "自己养黑头？？是个狼灭啊。。。。"
              },
              {
                userimg: require("../image/homeimage/25_8.png"),
                name: "情娇女.",
                age: "28",
                skin: "干",
                star: 4,
                textc: "Gigi费心了，要为我们养黑头，太敬业了哈哈哈，手动点赞"
              },
              {
                userimg: require("../image/homeimage/25_9.png"),
                name: "青衫如故.",
                age: "20",
                skin: "干",
                star: 4,
                textc:
                  "可是我就是鼻子干抹面霜的时候总喜欢鼻子多抹点(找到我黑头多的原因了呜呜呜"
              },
              {
                userimg: require("../image/homeimage/25_10.png"),
                name: "浅黛っ ",
                age: "19",
                skin: "混",
                star: 5,
                textc: "请问抹了酸以后还需要搭配什么收缩毛孔的产品吗? qwq"
              }
            ]
          },
          {
            id: 26,
            ititle: "经验 | 不只是用护手霜就可以！护手还要这些方法",
            itext1:
              "自从胖友们看过我的小手馊之后，就一直追问，如此瘦艳绝伦，十指如笋，腕似白莲藕，甲如粉水晶的玉手，到底是如何保养的呢？所以今天我要分享一下，我的护手心得。",
            itext2: "？？你说到底谁问的？……雨女无瓜",
            itext17:
              "我对于手部护理的思路和面部是类似的，既然面部皮肤要遭遇紫外线、污染、自由基的伤害，那么身体其他部位是同样的，只是根据部位的不同，接受到的紫外线伤害会有差异，皮脂腺分泌也不同，但只要活在这个世界上，无论速度快慢，我们每天都比昨天的自己更老一些。所以如果你也很在意自己的手部皮肤，希望若干年后，手部还能配得上脸蛋，那么在悉心保养面部的同时，手部的抗老也需要提上日程了。",
            itext31:
              "由于手部皮肤基本没啥大问题，所以我对于手部护理的功效需求是：抗老+防晒+强保湿。",
            itext32:
              "而肤感需求是在日间必须不能粘腻，夜间可以稍稍油润些。产品的价格不能太贵，一般会选择平价产品。",
            textimg1: require("../image/homeimage/26_1.png"),
            message2:
              "先说清洁产品，由于大部分洗手液不公开配料表，估计售价低廉的洗手液的配方也不会太温和，我一般会用配方温和的洁面乳或者沐浴露来代替，出门时就带一管洁面乳小样，方便又好用。",
            message3:
              "有抗菌需求时，会用舒肤佳儿童洗手泡泡，含有杀菌成分，从洗感判断不是特别刺激，最重要的是柚子味很好闻！",
            message4:
              "原则上也会减少不必要洗手的次数，一方面减少清洁刺激，另一方面是不想浪费早上抹的精华，所以做家务什么的会戴手套等。",
            message6:
              "日间的护理核心是：抗氧化+防晒+清爽保湿不粘腻,举例搭配：timeless cef 精华+apieu 积雪草护手霜+kiss me 防晒",
            textimg2: require("../image/homeimage/26_2.png"),
            itext4:
              "cef 精华是在年度爱用中分享过的产品，实惠大碗，抗氧化效果不错，非常适合用在日间提升防护作用；",
            itext5:
              "apieu 积雪草护手霜是随便买的，没想到使用感很好，清爽水润又不粘腻，配方也漂亮，有点烟酰胺和低浓度的积雪草、腺苷提升抗氧化性算是额外加成；",
            itext6:
              "防晒霜没什么特别的，典型的日系防晒凝露，涂抹起来足够轻薄，防护力不苛求了。",
            itext7:
              "由于不粘腻的防晒霜大多防护力有缺陷，大部分情况我会选择戴防晒手套，偶尔使用防晒霜，暴晒的情况下肯定是戴手套/高倍防晒霜。暴晒期间就不考虑肤感粘不粘了。",
            itext8:
              "经常有胖友问有什么防晒护手霜推荐吗？我的回答一直是，首先市面上这类产品选择性少，其次防护力好、使用感不错的防晒护手霜价格都不便宜，所以不如直接挑点面部防晒擦手。",
            itext9:
              "夜间的护理思路是：抗老修护+高滋润保湿,举例搭配：art naturals a 醇精华+trirlogy antioxidant 抗氧化玫瑰果油+missha 护手霜",
            textimg3: require("../image/homeimage/26_3.png"),
            message7:
              "抗老精华以 VA 类为主，可选择的实惠型产品比较多，而且功效有保障。art naturals 2.5%A 醇精华是在 iherb 上随便买的，宣传是 2.5% 的 A 醇，估计是原料复合物的浓度，实际使用下来的温和度和成分表的排名判断应该没有这么高，质地几乎就是有一点滋润度的水状，肤感不算差，味道难闻。价格差不多百元，同样价位我还是倾向于选择回购露得清或者 the ordinary 的 A 醇。",
            message8:
              "精华油是可以跳过的，会加一步精华油的最重要因素是为了消耗囤货，去年秋冬开的精华油根本用不完！！再不不用完就要变质啦！",
            textimg4: require("../image/homeimage/26_4.png"),
            itext11:
              "图中的几款都是配方价格实惠，配方比较优秀的产品，滋润的同时还能增加一些油溶性抗氧化物，一举两得，最喜欢用trirlogy antioxidant+，这不是爆款的纯玫瑰果油，而是在玫瑰果油的基础上增加了茄红素、VE、蓝莓籽油、番茄籽油的抗氧化加强版，喜欢用玫瑰果油的胖友，更推荐这款，反正都是类似的质地和功效，不如多点抗氧化效果。",
            itext12:
              "坚持使用已经很多年了，愈发的细腻，手部皮肤真是比面部好养，给点阳光就能灿烂。",
            itext13:
              "最后，请注意不要老是用手摸脸、蹭脸，容易把细菌带到脸上，现在还多了那么多保养品的刺激，其次物理性的揉搓对皮肤也不是好事。",
            iurl: require("../image/homeimage/26.png"),
            writerimage: require("../image/homeimage/26_5.png"),
            writername: "糊奔奔",
            zanmount: 422,
            talkmount: 21,
            writerinfo: "21 | 干性肤质",
            commentsList: [
              {
                userimg: require("../image/homeimage/26_7.png"),
                name: "千囚栀愿",
                age: "17",
                skin: "油",
                star: 4,
                textc:
                  "肤感需求是在日间必须不能粘腻，夜间可以稍稍油润些。产品的价格不能太贵，一般会选择平价产品。"
              },
              {
                userimg: require("../image/homeimage/26_8.png"),
                name: "柠栀。",
                age: "20",
                skin: "干",
                star: 4,
                textc:
                  "抗老精华以 VA 类为主，可选择的实惠型产品比较多，而且功效有保障"
              },
              {
                userimg: require("../image/homeimage/26_9.png"),
                name: "孽心°",
                age: "24",
                skin: "干",
                star: 4,
                textc:
                  "坚持使用已经很多年了，愈发的细腻，手部皮肤真是比面部好养，给点阳光就能灿烂。"
              },
              {
                userimg: require("../image/homeimage/26_10.png"),
                name: "女人。",
                age: "21",
                skin: "混",
                star: 5,
                textc:
                  "有抗菌需求时，会用舒肤佳儿童洗手泡泡，含有杀菌成分，从洗感判断不是特别刺激，最重要的是柚子味很好闻！"
              }
            ]
          },
          {
            id: 27,
            ititle: "种草丨8 支椰香护手霜大合集，总有一支是你的菜....",
            itext1:
              "大家如果有关注一些护肤动态的话，都能感觉到现在大部分消费者更关心的是产品的功效性，比如抗氧化、美白以及抗老等功能性的诉求，反而忽略了保湿这类基础性的工作。其实保湿这件事，反而是日常护肤的三块基石之一，打好了基础，才能往上叠加更高的诉求，而且护肤这件事本身就是一个整体，将日常的保湿做好，不仅能缓解皮肤的干燥紧绷，而且角质层的水分充盈饱满本身也是健康皮肤的一种表现，长远来看，皮肤长期的干燥更是容易造成干纹并最终演化成真性的细纹，所以保湿本来就是综合抗老的一环。",
            itext2:
              "而既然说到保湿，尤其是秋冬保湿，我们要了解到为什么皮肤容易在秋冬变得干燥。",
            textimg1: require("../image/homeimage/11_1.png"),
            message1: "皮脂膜与角质层",
            message2:
              "首先，在皮肤的构造上，与保湿这件事息息相关的就是我们的皮脂膜与角质层。其中皮脂膜是一层由皮脂腺分泌的皮脂与汗腺分泌的汗水在皮肤表面形成的弱酸性保护膜，它具有保湿，防止内部水分蒸发等作用。",
            message3:
              "皮脂膜下，就是我们的角质层，它由角质层细胞与细胞间质构成。其中，角质层细胞中的主要物质多为我们自身的天然保湿因子（NMF），它们帮助皮肤吸收并维持正常所需的水分。而细胞间质主要是一些脂性的基质，它与 NMF 相互配合，构成了皮肤天然的屏障功能，帮助皮肤保持水分。",
            message4:
              "而皮脂腺分泌油脂的程度与温度息息相关，当秋冬气温较低的情况下，皮肤本身分泌的油脂就会变少，皮肤表面就没有充足的皮脂保护水分不流失，再加上空气中的湿度降低，皮肤长期处于干燥的环境中，不但不能从周围环境中吸收水分，反而加剧内部的水分流失，久而久之，皮肤自然变得干燥紧绷。",
            message5: "保湿的误区",
            message6:
              "针对上述现象，我们可以了解到，一套合理的保湿系统除了你自身多喝水要摄入充足的水分之外，在护肤上一方面要使用一些水溶性保湿剂着重补充皮肤流失的水分，另一方面则是利用一些封闭性的油脂来模拟皮脂膜，帮助我们锁住内部的水分，最后，针对一些屏障功能不健全的敏弱肌肤，还可以利用一些修护保湿类的成分来强化皮肤自身的屏障功能，从而提高保水能力。不是一味的强调“补水”拼命拿着化妆水湿敷，或者随便来个油糊糊的面霜就以为万事俱全了。",
            textimg2: require("../image/homeimage/11_2.png"),
            itext3: "保湿三步走",
            itext4:
              "所以我在此就按照大家平时更能理解的习惯，将保湿分为了三大块：",
            itext5: "“补水”——充分浸润角质层。",
            itext6:
              "这一块就是我们熟悉的各类水性保湿剂，比如常见的以下几类，它们广泛的出现于各类保湿产品中，质感都普遍轻盈水润，我们主要借助其充分湿润角质层，即时的缓解干燥，这也是油性皮肤在秋冬保湿需要注重的一点。",
            itext7:
              "多元醇，多元醇几乎是最常见的保湿剂了，常见的有甘油（丙三醇），丙二醇，丁二醇、山梨醇等等，通常具有分子小，可以大量溶于护肤品中的特点，但抓水能力较差，其保湿作用主要来源于结构中的羟基，在湿润的环境下，使用含有多元醇的产品，就能很好的维持皮肤的水分，但如果在干燥的环境中，多元醇无法从外界从抓取水分时，就反而会从皮肤内部吸收，所以保湿这个体系本身就是一个整体，不是光靠某一种成分就能解决所有问题的。",
            itext8:
              "除甘油外，大多数多元醇质感都比较清爽，但基质为大量多元醇的产品还是会有一些“油感”，虽然它们都是水性保湿剂，但在面部涂开的时候就会有一种类似糖浆的腻跟黏糊。此外，丙二醇还可以作为促渗剂使用。",
            itext9:
              "NMF，即天然保湿因子（Natural Moisturizing Factor），广泛存在于我们的角质细胞中，是皮肤自身原有的成分，通常具有安全性高，吸湿性强，亲肤性好的特点，它们决定了皮肤自身吸水能力的高低。它们并不是单一的一种成分，而是多种成分的混合体。包括了各种氨基酸，PCA，乳酸，糖类以及无机酸等等。",
            itext10:
              "透明质酸，其实广义上也能算作一种天然保湿因子，只不过他们主要存在于结缔组织跟真皮内部。本质上是一种酸性粘多糖，其独特的分子结构及特性决定了它是非常理想的一类保湿剂，吸水能力非常强大，各类皮肤均可适用，能有效的维持皮肤水分，同时还能增强皮肤弹性，延缓衰老。",
            textimg3: require("../image/homeimage/11_3.gif"),
            message7: "“修护”——提升皮肤屏障功能，强化皮肤保水能力。",
            message8:
              "通过上文的叙述，我们了解到皮肤屏障由皮脂膜跟角质层构成，如果将我们的皮肤比作一个蓄水池，皮肤屏障就好似一堵墙，其中的角质细胞与细胞间质就是这堵墙上的砖头与泥浆，当它失去正常的功能，“泥浆”的粘合性不高的时候，任你往池中加多少水，最终也是无济于事，各类干燥敏感的现象也由此而生。",
            message9:
              "由此可以得出结论，上文介绍的成分在于解决角质细胞“含水量”的问题，同样也是提升屏障功能的一环，而针对细胞间质的维护，考虑到细胞间质主要由一些脂质（神经酰胺、胆甾醇、脂肪酸）构成，因此这一步骤主要牵扯了以下的几类脂质成分：",
            message10:
              "神经酰胺，本身也是一类天然保湿因子，是天然存在于皮肤中的脂质。其作为细胞间质中的主要成分，占据了40-50％ 的比重，承担着保护皮肤、保湿及滋润的作用，是维持皮肤屏障功能健全的必要物质。其主要由三类鞘氨醇与脂肪酸构成，且关键的一点在于它具有亲水性跟亲脂性的特性，能帮助结合皮脂中的胆固醇和游离脂肪酸，增强角质细胞间的粘合力，从而进一步帮助皮肤留住水分。",
            message11:
              "植物鞘氨醇，是细胞膜的组成成分之一，也称作神经酰胺前体，由于神经酰胺的合成需要鞘氨醇与脂肪酸来构成，且植物鞘氨醇与我们自身的脂质相类似，故而植物鞘氨醇也被称作神经酰胺前体，使用这类成分也有助于维护皮肤的屏障功能。",
            textimg4: require("../image/homeimage/11_4.gif"),
            itext11:
              "胆甾醇，同样也是细胞膜的重要组成成分，作为保湿剂，它能为皮肤提供额外的脂肪，防止水分流失。除了化妆品中直接添加之外，我们还可以留意一些含有角鲨烷的产品，角鲨烷在进入皮肤后进过一系列的转化能变成胆甾醇，从而在提供保湿滋润之余还附带了一些许的修护效果。",
            itext12:
              "脂肪酸，人体必须的两种脂肪酸主要是 Omega—6 和 Omega—3，它们在皮肤美容上的应用主要是帮助恢复正常的屏障功能，缓解皮肤干燥现象。护肤品中通常直接添加的亚麻酸或者亚油酸，或者很多植物油所含有的大量不饱和脂肪酸也同样具备这一效果。",
            itext13:
              "“保湿”——提供封闭功能，防止水分流失（这一步油皮或者油痘皮可以忽略）。",
            itext14:
              "水“补”进来了，屏障健康了之后，对于秋冬的一些干皮仍然是不够的，还需要通过外用一层封闭性的油脂来强化最终的保湿，防止水分流失。而既然提到封闭，就自然牵扯到以下的一些油脂性成分了：",
            itext15:
              "矿物油：包括矿油、矿脂（凡士林）、石蜡，是最常见的一种封闭性保湿剂，本身无法被皮肤吸收，只是防止皮肤内部的水分蒸发流失，等没有什么特别的保养价值，属于封闭性的保湿成分，通俗点就是广告里常说的“把水锁住”。且由于它是一种稳定性较高的化合物，本身并不具有致痘的性质，只是封闭性太高，不建议油痘皮去使用。",
            itext16:
              "植物油：既然身为油类，最大的一个作用就是提供封闭性的滋润，防止皮肤水分流失，同时一些植物油中含有的不饱和脂肪酸（比如前文提到的亚油酸、亚麻酸等等）以及各类微量元素，可以完成维护屏障功能，缓解干燥跟衰老等效果。",
            iurl: require("../image/homeimage/27.png"),
            writerimage: require("../image/homeimage/27_5.png"),
            writername: "指上菁芜",
            zanmount: 176,
            talkmount: 37,
            writerinfo: "20 | 混合肤质",
            commentsList: [
              {
                userimg: require("../image/homeimage/27_7.png"),
                name: "沐雪 ",
                age: "24",
                skin: "油",
                star: 3,
                textc:
                  "当秋冬气温较低的情况下，皮肤本身分泌的油脂就会变少，皮肤表面就没有充足的皮脂保护水分不流失，再加上空气中的湿度降低，皮肤长期处于干燥的环境中，不但不能从周围环境中吸收水分，反而加剧内部的水分流失，久而久之，皮肤自然变得干燥紧绷。"
              },
              {
                userimg: require("../image/homeimage/27_8.png"),
                name: "盲心。",
                age: "18",
                skin: "干",
                star: 4,
                textc:
                  "水“补”进来了，屏障健康了之后，对于秋冬的一些干皮仍然是不够的，还需要通过外用一层封闭性的油脂来强化最终的保湿，防止水分流失。"
              },
              {
                userimg: require("../image/homeimage/27_9.png"),
                name: " 离人过客",
                age: "19",
                skin: "混",
                star: 5,
                textc:
                  "保湿，尤其是秋冬保湿，我们要了解到为什么皮肤容易在秋冬变得干燥。"
              },
              {
                userimg: require("../image/homeimage/27_10.png"),
                name: "冷色调",
                age: "21",
                skin: "干",
                star: 4,
                textc:
                  "矿油、矿脂（凡士林）、石蜡，是最常见的一种封闭性保湿剂，本身无法被皮肤吸收，只是防止皮肤内部的水分蒸发流失"
              }
            ]
          },
          {
            id: 28,
            ititle: "种拔草丨记录近期用的护肤单品（最后一款巨雷！）",
            itext1:
              "护肤文章写了这么多，大家一直都在问的问题之一，就是「我用的护肤品到底吸收了没？」",
            itext2:
              "毕竟瓶瓶罐罐的也都不便宜，如果没吸收浪费了不仅心疼，钱包更疼啊...",
            itext17: "所以，我们今天就说说护肤品的吸收那些事儿吧～",
            textimg1: require("../image/homeimage/12_2.png"),
            message1: "护肤品是怎么吸收的",
            message2: "首先，当然是要了解下护肤品究竟是从哪里吸收的了～",
            itext18: "No.1主要的吸收路径：细胞间脂质",
            itext19: "我们知道，皮肤表层的结构大概是这个样子的：",
            textimg2: require("../image/homeimage/12_3.png"),
            itext4: "而护肤品在皮肤中的吸收路径主要是这么几个：",
            itext5: "•通过细胞",
            itext6: "•通过附属器，比如毛孔",
            itext7: "•通过细胞间脂质",
            itext8:
              "虽然很多同学设想中护肤成分的吸收，好像是通过途径1 这样穿过皮肤表面的一层又一层细胞。",
            itext9:
              "但绝大多数，估计在 90% 甚至更高，护肤成分都是通过途径 3，顺着细胞间的脂质来逐渐渗透进去。",
            itext20: "No.2很多时候，就是在角质层内发挥作用",
            itext21:
              "护肤品想要渗透进皮肤深层是还是很难的，绝大多数就是在表皮层发挥作用，甚至就只是在角质层发挥作用。",
            itext22:
              "护肤品如果不采用一些特殊手段的话，想要到达表皮层的较深位置，也是不那么容易的，想要达到更深的真皮层就更是难上加难了。",
            itext23:
              "很多强调深层吸收的护肤品，如果你看看图片上的小字，很可能会发现所谓「深度渗透」就渗透进角质层了。",
            textimg3: require("../image/homeimage/12_4.gif"),
            message7:
              "但是，大家也不要失望，觉得「只能在表皮层甚至角质层玩儿的话，还有啥用啊？」",
            message8:
              "作用还是挺大的，表皮层已经足够让大家在一些方面产生很好的护肤效果了，比如让大家变黑的黑色素就在表皮的基底层，美白精华做得好的话是可以对这里产生一定作用的。",
            textimg4: require("../image/homeimage/12_5.png"),
            message12: "吸收感 vs 吸收",
            message13:
              "吸收是一个微观过程，我们平时觉得「吸收了」很大可能性是「有吸收的感觉」，很可能和实际的「吸收」没有直接的对应关系。",
            message14: "No.1液体干了，应该是吸收了",
            itext11: "不一定。",
            itext12:
              "涂上去的水、精华、面霜看起来干了，也许只是水分蒸发掉了，这和成分被吸收了还是不太一样的。",
            itext13:
              "有时候产品加一些容易挥发的成分，比如酒精、挥发性硅油，就会营造出好像很快就干了的感觉。但如果使用的一些不容易挥发的产品，比如一些护肤油，那一直糊在脸上也并不意味着它没有吸收。",
            itext14:
              "所以常看我们文章的同学可能有留意到，我们经常说「吸收感很好/不好」，几乎不太说「吸收很快」，是有意在做这样的区分的。",
            message15:
              "吸收感是使用感受的一部分，我也不喜欢糊一脸油过 5 分钟好像都没变化的感觉，它是护肤品的一个重要特点。",
            message16:
              "但功效成分的吸收是肉眼不可见的过程，通过「吸收感」来判断成分是否吸收，并不是一个特别合理的方法。",
            message17: "No.2有刺痛，应该是吸收了吧",
            message18: "不一定。",
            message19:
              "刺痛感有时候是吸收过程中引起的，但也有的是功效成分一接触皮肤就引起的。",
            message20:
              "有些成分会激活皮肤表面的一些感觉受体，进而让你产生灼热、刺痛的感觉，这并不意味着功效成分在努力向皮肤深处渗透，只是说你对这个成分有点敏感。",
            message21:
              "有的时候也许用几次之后，这个感觉就会变轻，但也有的就会一直存在着。",
            message22:
              "所以，这一方面一定要留意观察，程度是否严重，是否可以忍受。",
            itext24:
              "护肤品是非常强调使用感的一个东西，应该是一个让你的心情 UP (至少不会更 DOWN ) 的事情。",
            itext25:
              "所以，如果你每天用护肤品都胆战心惊的，真的没有必要这样，换一个产品吧。",
            itext26: "No.3搓泥了，一定没吸收",
            itext27: "并不能这么说。",
            itext28:
              "很多同学觉得「哎呀搓泥了，那我的功效成分不就进到泥里面了么，那不就浪费了么...」",
            itext29:
              "倒不是说完全没这个可能，但是功效成分的吸收有时候也是很快的，等到你开始搓泥的时候，也许能吸收的已经吸收的差不多了。",
            itext30:
              "解决这一点的话，涂抹护肤品之后稍微等几分钟，再做后续步骤，也别一直用手揉啊揉的。",
            iurl: require("../image/homeimage/28.png"),
            writerimage: require("../image/homeimage/28_5.png"),
            writername: "诗与彼方",
            zanmount: 190,
            talkmount: 24,
            writerinfo: "19 | 混合肤质",
            commentsList: [
              {
                userimg: require("../image/homeimage/28_7.png"),
                name: "莱茵河畔。",
                age: "22",
                skin: "油",
                star: 4,
                textc:
                  "毕竟瓶瓶罐罐的也都不便宜，如果没吸收浪费了不仅心疼，钱包更疼啊..."
              },
              {
                userimg: require("../image/homeimage/28_8.png"),
                name: "阔野",
                age: "18",
                skin: "油",
                star: 3,
                textc:
                  "涂上去的水、精华、面霜看起来干了，也许只是水分蒸发掉了，这和成分被吸收了还是不太一样的。"
              },
              {
                userimg: require("../image/homeimage/28_9.png"),
                name: "空心人.",
                age: "23",
                skin: "干",
                star: 5,
                textc:
                  "哎呀搓泥了，那我的功效成分不就进到泥里面了么，那不就浪费了么..."
              },
              {
                userimg: require("../image/homeimage/28_10.png"),
                name: "旧巷听风 ",
                age: "20",
                skin: "干",
                star: 4,
                textc:
                  "有的时候也许用几次之后，这个感觉就会变轻，但也有的就会一直存在着。"
              }
            ]
          },
          {
            id: 29,
            ititle: "喵喵头条帖丨摆脱“干”尬境地，先从温和洁面开始",
            itext1:
              "“清洁”这个系列，我们已经写了不少文章。看到这里，大家也都明白了，在护肤品行业，“清洁”更多的是“预防”，而不是“治疗”。",
            itext2:
              "然而市面上还是有太多的谣言，用“清洁”或者“深层清洁”作为理由，给了用户太多不切实际的幻想。",
            itext17:
              "本文就来说一说这些幻想，“清洁”为什么做不到，以及应该怎么办。",
            textimg1: require("../image/homeimage/13_1.gif"),
            message2: "读大学的时候，听高晓松师兄的歌，现在只零星地记得碎片。",
            message3:
              "其中有一句，是“那些年少时不经意许下的愿”，不知道怎么印象深刻，大概在所有“骚柔”的句子里显得特立独行吧。我们大概都曾经夸下过海口，然而十年二十年以后，回头看只剩下壮志未酬。",
            textimg2: require("../image/homeimage/13_2.png"),
            itext4:
              "嗯……扯远了，我们今天说的是一些其他的诺言，柜姐信誓旦旦，“深层清洁”可以帮你做到的，实际上一件都兑现不了。",
            itext5: "先把这两个最不靠谱的说了。",
            itext6:
              "清洁产品在脸部的停留时间，一般不超过两分钟。这点儿时间，就算是渗透的条件很好，活性物也没办法钻到皮肤里面去，何况此时满脸都是水，表面活性剂又正在进攻脸上的污物油脂。",
            itext7:
              "这时候要是还有美白和祛斑的活性物，能够在一片嘈杂的战场中穿越火线，进入皮肤深层，那就真是见了鬼了。",
            itext8: "这不是让老母鸡在搬家的院子里抱窝孵小鸡么？",
            itext9: "不可能。",
            textimg3: require("../image/homeimage/13_3.png"),
            message7:
              "但是，大家也不要失望，觉得「只能在表皮层甚至角质层玩儿的话，还有啥用啊？」",
            message8:
              "作用还是挺大的，表皮层已经足够让大家在一些方面产生很好的护肤效果了，比如让大家变黑的黑色素就在表皮的基底层，美白精华做得好的话是可以对这里产生一定作用的。",
            message9:
              "凡是看到“美白洗面奶”的名字，甭管多么大牌，你就笑笑好了——也许我孤陋寡闻，但是我真的想不到哪个技术可以让洗面奶美白的。",
            message10:
              "“痘痘”是个太宽泛的命名，“痤疮样皮疹”的“痘痘”来自于敏感皮，“寻常痤疮”的“痘痘”可能是大油皮，而“玫瑰痤疮”和“脂溢性皮炎”也会让普通消费者觉得是“痘痘”。",
            message11:
              "我强烈建议，所有觉得自己有“痘痘”的朋友，先去医生那里确认一下自己是不是“寻常痤疮”——我见过太多得玫瑰痤疮的朋友，自己在家里用护肤品处理，越用越糟心的。",
            textimg4: require("../image/homeimage/13_4.png"),
            message13: "如果医生已经告诉我，的确是“寻常痤疮”呢？",
            itext11: "清洁产品的抗痘，往往是加入了【水杨酸】或者是【BPO】。",
            itext12:
              "在没有其他产品配合的前提下，单独靠清洁产品中的【水杨酸】，很难对“寻常痤疮”的罪魁祸首（“痤疮丙酸杆菌”）起到强烈的抑制作用——毕竟清洁产品停留的时间短。",
            itext13: "建议先听从医生的意见，治疗之后，再考虑护肤品。",
            itext14:
              "而【BPO】类的产品，往往是海淘的（跨境电商），可能你并不是特别知道如何使用，你可以带着问一下医生，到底能不能用，以及使用方法。",
            message15: "建议是类似的，治疗痊愈之后，再考虑护肤品。",
            message16:
              "清洁类的产品，对于“痘痘”主要是预防作用，不能“去除”——这也符合我们给“清洁”定下的大框架，更多的是“预防”，而非“治疗”。",
            message18: "清洁就是清洁，是个预防措施，要温和，不要粗暴。",
            iurl: require("../image/homeimage/29.png"),
            writerimage: require("../image/homeimage/29_5.png"),
            writername: "青丝茧",
            zanmount: 30,
            talkmount: 203,
            writerinfo: "22 | 干性肤质",
            commentsList: [
              {
                userimg: require("../image/homeimage/29_7.png"),
                name: "客梦回",
                age: "24",
                skin: "干",
                star: 4,
                textc: "读大学的时候，听高晓松师兄的歌，现在只零星地记得碎片。"
              },
              {
                userimg: require("../image/homeimage/29_8.png"),
                name: "旧城 ",
                age: "16",
                skin: "混",
                star: 4,
                textc:
                  "清洁产品在脸部的停留时间，一般不超过两分钟。这点儿时间，就算是渗透的条件很好，活性物也没办法钻到皮肤里面去，何况此时满脸都是水，表面活性剂又正在进攻脸上的污物油脂。"
              },
              {
                userimg: require("../image/homeimage/29_9.png"),
                name: "简单、爱",
                age: "21",
                skin: "油",
                star: 5,
                textc: "清洁产品的抗痘，往往是加入了【水杨酸】或者是【BPO】。"
              },
              {
                userimg: require("../image/homeimage/29_10.png"),
                name: "几番情绪  ",
                age: "20",
                skin: "混",
                star: 4,
                textc:
                  "清洁类的产品，对于“痘痘”主要是预防作用，不能“去除”——这也符合我们给“清洁”定下的大框架，更多的是“预防”，而非“治疗”"
              }
            ]
          },
          {
            id: 30,
            ititle: "种草丨油敏皮保湿挑这些",
            itext1:
              "尽管面部毛孔粗大不是紧急的医疗问题，然而对大多数人来说，粗大的毛孔严重影响外观，因此是很多人平日护肤过程中比较关心的一个问题。不过，对于毛孔粗大的定义、成因和解决方法仍然没有比较科学和系统的介绍，本文旨在解决这些问题。",
            itext2:
              "关于毛孔粗大尚缺乏统一的定义，在一项报道中，研究人员使用 Robo Skin Analyzer CS50 对毛孔进行研究，毛孔直径在 0.1-0.6mm2 时就肉眼可见，而 0.3-0.6mm2 的毛孔可以称作为粗大毛孔；如果毛孔中含有脂栓、黑头时又可以称作“黑头嵌入的毛孔”。 ",
            textimg1: require("../image/homeimage/14_1.png"),
            message2:
              "面部毛孔的形态不是固定不变的，粗大的毛孔影响着所有种族、性别和年龄段的人群。",
            message3:
              "许多外源性因素和内源性因素都参与到毛孔粗大的发生发展中，包括性别、遗传易感性、年龄、慢性 UV 辐射、使用致粉刺成分、一些皮肤病等。Roh 等人发现，毛孔粗大程度与皮脂腺分泌活动密切相关，并且他们发现女性毛孔粗大程度显著高于男性；然而，在另一项研究中发现，男性毛孔粗大程度比女性更高，同时伴有更多的黑头。",
            message4:
              "毛孔周围的支撑组织和粗大毛孔的发生有关，但是相关研究较少。真表皮连接处起起伏伏的石笋样结构在部分报道中提示与毛孔粗大有关。",
            message6:
              "而 Kim 等人利用 PRIMOS 和 Facial stage DM3 发现，毛孔的容积与毛孔粗大程度是显著相关的。毛孔的体积与真皮乳头层细胞的体积相关，真皮乳头层细胞含有大量雄激素受体，而雄激素能够显著影响毛囊体积，因此，毛发厚度也会影响毛孔大小。",
            message23:
              "大家普遍了解到的，面部皮脂量和毛孔大小显著相关。在女性月经周期中，面部皮脂量会显著增加，而且有研究观察到，女性在月经期毛孔增大，这提示两者存在关系。女性生理期过程中促黄体生成素和促卵泡生成素的激增会增加皮脂腺的活性；同样的胰岛素样生长因子-1（IGF-1）也会通过 phosphoinositide 3-kinase/Akt 通路加速皮脂腺分泌大量的皮脂，已有研究证实，面部皮脂量与血清中的 IGF-1 相关。",
            message24:
              "大多数的粗大毛孔集中在鼻翼和脸颊内侧，这些位置的油脂分泌也是面部较高的部位。有研究人员使用 Sebumeter，将 12 名 20-31 岁的韩国志愿者面部随机分为 81 个部位，的确也证实鼻翼及脸颊内侧的皮脂水平较高",
            textimg2: require("../image/homeimage/14_2.png"),
            itext4:
              "而有研究发现，严重的痤疮会导致在毛管部位形成微疤痕，并且在雄激素刺激下更容易发生堵塞，这会导致毛囊细胞发生变化，进而引起毛孔粗大。",
            itext5:
              "当然，毛孔粗大与年龄也有着密切关系。Zheng 等人发现，一种参与到弹力蛋白的结构蛋白，微纤维相关糖蛋白-1，会睡着年龄和光老化的加重流失，这一变化会导致真皮弹性的下降，以及毛囊周围支撑结构的脆弱，最终引起皮肤的下垂和毛孔粗大。",
            itext6:
              "因此总结下来，导致面部毛孔粗大的最主要的三大成因是：大量的油脂分泌、毛孔周围弹力结构的破坏和毛囊体积的增大（例如毛发变粗）。除此之外，慢性反复发作的青春痘、性激素分泌失衡、不恰当的皮肤护理、紫外线暴晒等都会影响毛孔外观。",
            textimg3: require("../image/homeimage/14_3.png"),
            message7:
              "尽管目前对于粗大毛孔有许多治疗选择，但是遗憾的是，它们往往缺乏强有力的证据支持。因此，粗大毛孔的处理应该根据人群不同实现个体化选择。",
            message8:
              "可以看到，关于改善毛孔粗大的研究，证据质量都不够高。我们仍然需要高质量的研究。",
            message9: "控制油脂分泌，口服或者外用治疗",
            message10:
              "异维 a 酸是阻断皮脂分泌最强有力的药物之一，而抗雄治疗也能减少面部油脂分泌。这并不是首选推荐，因为考虑到这些药物长期服用所带来的副作用。",
            message11:
              "而选择外用产品是一个相对安全的选择，Vogelgesang 等人发现，肾茶提取物外用能够很好的改善油性肌肤的皮脂分泌；而 beiersdor 则证实，L-左旋肉碱也能够很好的调节皮脂腺活性；Drealos 等人通过随机双盲对照试验证实，2% 烟酰胺能够改善皮脂腺分泌，并且目前被广泛运用； Grimes 等人发现，采用表浅的水杨酸换肤能够改善油性肌肤粗大毛孔，并且是一种对于 V 和 VI 皮肤分型（深色肌肤）的人群来说，也是种相对安全有效的方法。油性肌肤在选择护肤产品时尤其要注意尽可能使用通过“致粉刺测试”的或者不含油分的产品。",
            textimg4: require("../image/homeimage/14_4.png"),
            message13:
              "越来越多的皮肤科医生推崇光动力治疗或者激光治疗。Kosaka 等人发现，ALA-PDT 光动力能够定向破坏皮脂腺，减少其分泌。2.5%-5% 的 ALA 联合短时间的治疗（<2h）被证实是有效的。也有研究发现，1450nm 的二氧化碳激光也能够减少面部的皮脂腺功能；而一项纳入 20 例韩国痤疮患者的研究发现，一种 fractional RF 微针也能够抑制皮脂腺功能。而最近的一项非随机的临床试验发现，一种选择性的电热解技术能够减少皮脂量，最大 31.5%。",
            itext11:
              "饮食中的油脂是皮脂腺合成皮脂的来源。高 GI 饮食能够显著增加血清中的 IGF-1。Pochi 等人发现，在经过 4-8 周的卡路里限制后，18 名肥胖患者的面部皮脂量平均下降 40%。尽管具体的机制尚未完全阐明，但是饮食对于面部皮脂量的影响是肯定存在的。",
            itext12:
              "有研究发现，皮下注射肉毒菌素能够减少皮脂腺活性并且减小毛孔。",
            itext13:
              "大量的产品和方法标榜可以提升肌肤弹力，其中一部分对于毛孔粗大可能是有效的。每日防晒是避免毛孔持续变大的有效手段，此外，外用维甲酸类也是有效的方法。维甲酸类能够显著增加皮肤中胶原数量，减少其分解并且促进其合成，维持毛囊周围的支撑结构。而 2790nm 的钇钪镓石榴石激光能够改善皮肤毛孔问题并且有更小的副作用。Suh 等人发现，1410nm 的掺铒光纤激光对于有色皮肤来说也是安全的；而 1440nm 的非剥脱二氧化碳激光也能够降低面部毛孔评分接近 17%。",
            itext14:
              "将面部绒毛去除能够让毛孔视觉上变小，尤其是对于绒毛/毛发较粗的深色肌肤。",
            message15:
              "毛孔粗大与多种因素有关，因此需要根据患者不同的特点进行个性化的治疗。然而，关于毛孔粗大的原因仍然缺乏系统的研究，我们需要更多的试验进一步说明毛孔粗大的本质以及可能的应对手段。",
            iurl: require("../image/homeimage/30.png"),
            writerimage: require("../image/homeimage/30_5.png"),
            writername: "初晓微芒",
            zanmount: 768,
            talkmount: 91,
            writerinfo: "21 | 油性肤质",
            commentsList: [
              {
                userimg: require("../image/homeimage/30_7.png"),
                name: "小香香",
                age: "00后",
                skin: "干",
                star: 4,
                textc:
                  "面部毛孔的形态不是固定不变的，粗大的毛孔影响着所有种族、性别和年龄段的人群。"
              },
              {
                userimg: require("../image/homeimage/30_8.png"),
                name: " 妓",
                age: "19",
                skin: "干",
                star: 4,
                textc: "毛孔粗大与年龄也有着密切关系。"
              },
              {
                userimg: require("../image/homeimage/30_9.png"),
                name: "几度枫红。",
                age: "24",
                skin: "油",
                star: 4,
                textc:
                  "毛孔粗大与多种因素有关，因此需要根据患者不同的特点进行个性化的治疗。然而，关于毛孔粗大的原因仍然缺乏系统的研究，我们需要更多的试验进一步说明毛孔粗大的本质以及可能的应对手段。"
              },
              {
                userimg: require("../image/homeimage/30_10.png"),
                name: "回首释然",
                age: "20",
                skin: "干",
                star: 4,
                textc: "皮下注射肉毒菌素能够减少皮脂腺活性并且减小毛孔。"
              }
            ]
          },
          {
            id: 31,
            ititle: "私奔丨虽然各平台都在疯狂吹捧，但我还是想客观地聊聊这 9 款",
            itext1: "换句话说，你可能在 34岁、60岁、78 岁突然变老。",
            itext2:
              "在本次研究中，斯坦福大学收集了 4263 名年龄在 18 岁至 95 岁之间的健康受试者的血浆样本，并系统分析了 2925 种蛋白的表达水平。",
            textimg1: require("../image/homeimage/15_1.png"),
            message2:
              "通过分析这些志愿者血液中的血浆蛋白浓度来推测他们的生理年龄，结果发现，在 34岁、60岁、78 岁时出现明显的血浆蛋白浓度峰。",
            message3:
              "以此推测，人的生理年龄可能并不是匀速增长，而可能是在三个重要节点突然衰老。该项研究对于研究人体衰老具有重要意义。",
            message4: "皮肤作为人体最大的器官，也会随着人体衰老而逐渐衰老。",
            message6: "而导致皮肤衰老的原因主要有以下两个：",
            message23:
              "内源性老化，也就是人体自身老化，可能与基因等因素有关，每个人的老化程度、老化速度也不同。",
            message24:
              "参照斯坦福大学的研究，皮肤也可能在 34岁、60 岁、78 岁时达到重要衰老节点，出现内源性老化。内源性老化主要变现为皮肤变白，出现细小皱纹、弹性下降、皮肤松弛。",
            textimg2: require("../image/homeimage/15_2.png"),
            itext4:
              "这种内源性老化是无法避免的，有些人看起来老得比常人慢，跟吃了防腐剂一样，只能说家里的基因太好了。",
            itext5:
              "外源性老化，由于环境因素导致的皮肤老化，其中有 80% 以上的外源性老化是光老化，是不涂防晒霜惹的祸。",
            itext6:
              "外源性老化表现为皱纹、皮肤松弛、粗糙、淡黄或灰黄色的皮肤变色、毛细血管扩张、色素斑形成等。",
            textimg3: require("../image/homeimage/15_3.png"),
            message7:
              "出门即涂防晒，或使用防晒装备如太阳伞、墨镜、防晒服，能够有效地缓解外源性老化。",
            message8:
              "衰老既然不可避免，我们如何才能让解决衰老带来的皱纹、色斑等一系列问题呢？",
            message9: "毕竟只有青春的外表，才配得上我们年轻的心态。",
            message10:
              "皱纹可分为静态皱纹和动态皱纹两种，顾名思义就是在脸部无表情和脸部有表情时的皱纹。对于这两种不同的皱纹，其实处理方式也不尽相同。",
            textimg4: require("../image/homeimage/15_4.png"),
            message13:
              "静态皱纹可以使用热拉提/热玛吉、玻尿酸注射、光子嫩肤等方式，抚平皱纹，恢复皮肤弹性。",
            itext11:
              "动态皱纹，A 型肉毒毒素注射是消除动态皱纹最简洁有效的方式，可以减少引起皱纹形成的面部肌肉收缩，一方面使原有的皱纹减轻，另一方面防止形成新的皱纹。",
            itext12:
              "治疗色斑目前最有效的医美疗法是超皮秒激光、皮秒激光、调 Q 激光，它们也被称为“祛斑小能手”。",
            itext13:
              "这几类医美疗法都是通过破坏皮肤内部的色素颗粒，粉碎的色素颗粒会被人体的被巨噬细胞吞噬，或通过表皮代谢，从而达到祛斑的效果。",
            itext14:
              "以上就是为大家介绍的关于如何解救皮肤衰老的医美方法，你还想了解哪些医美项目呢？留言告诉我吧！",
            iurl: require("../image/homeimage/31.png"),
            writerimage: require("../image/homeimage/31_5.png"),
            writername: "萌傻卿",
            zanmount: 105,
            talkmount: 19,
            writerinfo: "20 | 油性肤质",
            commentsList: [
              {
                userimg: require("../image/homeimage/31_7.png"),
                name: "哼哼︶ε╰",
                age: "19",
                skin: "混",
                star: 5,
                textc: "皮肤作为人体最大的器官，也会随着人体衰老而逐渐衰老。"
              },
              {
                userimg: require("../image/homeimage/31_8.png"),
                name: "故人寻旧",
                age: "18",
                skin: "混",
                star: 4,
                textc: "毕竟只有青春的外表，才配得上我们年轻的心态。"
              },
              {
                userimg: require("../image/homeimage/31_9.png"),
                name: "闺怨无梦",
                age: "27",
                skin: "油",
                star: 4,
                textc:
                  "A 型肉毒毒素注射是消除动态皱纹最简洁有效的方式，可以减少引起皱纹形成的面部肌肉收缩，一方面使原有的皱纹减轻，另一方面防止形成新的皱纹。"
              },
              {
                userimg: require("../image/homeimage/31_10.png"),
                name: "歌枕肩",
                age: "23",
                skin: "油",
                star: 4,
                textc:
                  "出门即涂防晒，或使用防晒装备如太阳伞、墨镜、防晒服，能够有效地缓解外源性老化。"
              }
            ]
          }
        ]
      ]
    };
  },
  methods: {
    addsuccess() {
      this.$toast({
        message: "自定义图标",
        icon: "like-o"
      });
    },
    onClickLeft() {
      history.go(-1);
    },
    onClickRight() {
      Toast("按钮");
    }
  }
};
</script>

<style scoped>
.content-footer span:last-child {
  padding-right: 20px;
}
.content-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 13px;
  color: #ccc;
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
}
.content-main {
  height: 100px;
}
.name-wrap {
  padding-left: 20px;
}
.name-wrap .name span:nth-child(3) {
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border-radius: 50%;
  background-color: #f3c985;
  color: #fff;
}
.name-wrap .name span:nth-child(2) {
  font-size: 13px;
  padding: 4px;
}
.name-wrap .name {
  font-size: 14px;
}
.content-main {
  height: 120px;
  text-align: left;
  padding-top: 10px;
  padding-right: 30px;
  padding-left: 30px;
  line-height: 30px;
}
.content-header .user-logo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ccc;
}
.content-header {
  display: flex;
  align-items: center;
}
.item-content {
  /* border-top: 1px solid #eee; */
  padding: 10px 0 10px 0;
  margin-left: 20px;
}

.comment-wrap .comment-tips div span:first-child {
  color: #f2c67d;
}
.comment-wrap .comment-tips div {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  font-size: 12px;
}
.comment-wrap .comment-tips {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 10px 0;
  margin-left: 20px;

  font-size: 14px;
  border-bottom: 1px solid #eee;
}
.age-wrap div p >>> .van-progress {
  flex: 1;
  margin: 0 4px;
}
.age-wrap div p {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ccc;
  font-size: 12px;
}
.age-wrap h6 {
  padding-bottom: 10px;
}
.age-wrap,
.skin-wrap {
  flex: 0.45;
}
h6 {
  margin: 0;
}
.all-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 10px solid #eee;
}
.top-wrap p span {
  margin-left: 20px;
}
.top-wrap p {
  font-size: 14px;
  color: #999;
  display: flex;
  align-items: center;
  padding: 2px 0;
}
.top-wrap h5 {
  font-weight: normal;
  font-size: 14px;
  margin: 0;
  padding-bottom: 4px;
}
.top-wrap {
  border-bottom: 1px solid #eee;
  padding: 20px 0;
  margin-left: 20px;
}
.tag-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 10px 0;
  margin-left: 20px;
  font-size: 14px;
}
.btn-group >>> .van-button {
  width: 120px;
  height: 38px;
  line-height: 38px;
}
.btn-group {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 30px;
}
.info-wrap .want,
.info-wrap .prices {
  font-size: 12px;
  color: #ccc;
  padding: 4px;
}
.info-wrap span {
  flex-wrap: 600;
  font-size: 30px;
}
.shop-info div {
  flex: 0.5;
}
.shop-info .info-wrap {
  text-align: center;
}
.shop-info .shop-img {
  width: 120px;
  height: 120px;
}
.shop-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px 30px 10px;
}
img {
  width: 100%;
  height: 100%;
}
p {
  margin: 0;
}
</style>
