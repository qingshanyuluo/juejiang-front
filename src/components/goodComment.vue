<template>
    <div>
        <header>
            <div class="shop-info">
                <div class="shop-img">
                    <img src="@/assets/img/阿玛尼giorgio 乳霜.png" alt="">
                </div>
                <div class="info-wrap">
                    <span>8.4</span>
                    <p>
                         <van-rate size='14px' v-model="star" readonly />
                    </p>
                    <p class="want">12222人想买·3362人评价</p>
                    <p class="prices">￥400.00/50ml</p>
                </div>
            </div>
            <p class="btn-group">
                    <van-button icon="star-o" round color="#e4efd3">种草</van-button>
                    <van-button icon="star-o" round color="#fae3d8">开封</van-button>
                
            </p>
            <div class="tag-wrap">
                <span>产品信息</span>
                <div>
                    <van-tag round color="#fdc8f0" size="large">#玫柯菲</van-tag>
                    <van-tag round color="#fdc8f0" size="large">#粉底</van-tag>
                </div>
                <div>
                    <van-icon name="arrow" />
                </div>
            </div>
            <div class="top-wrap">
                <h5>入围榜单</h5>
                <p>
                    <van-icon color='#c257b4' name="award" />
                    <span>2018美妆心得年终大赏 粉底榜NO.3</span>
                </p>
                <p>
                    <van-icon color='#c257b4' name="award" />
                    <span>2017美妆心得大赏 粉底榜NO.1</span>
                </p>
            </div>
            <div class="all-wrap">
                <div class="age-wrap">
                    <h6>年龄结构</h6>
                    <div>
                        <p v-for="(items,index) in ageList" :key="index">
                            <span>{{items.age}}</span>
                                <van-progress :percentage="items.speed" color="#68c1f9" stroke-width="8" :show-pivot='false' />
                            <span>{{items.speed}}%</span>
                        </p>
                    </div>
                </div>
                <div class="age-wrap">
                    <h6>皮肤比例</h6>
                    <div>
                        <p v-for="(items,index) in skinList" :key="index">
                            <span>{{items.skin}}</span>
                                <van-progress :percentage="items.speed" color="#f29cb9" stroke-width="8" :show-pivot='false' />
                            <span>{{items.speed}}%</span>
                        </p>
                    </div>
                </div>
            </div>
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
                    <div class="item-content" v-for="(items,index) in commentsList" :key="index">
                        <div class="content-header">
                            <div class="user-logo"></div>
                            <div class="name-wrap" >
                                <div class="name">
                                    <span>{{items.name}}</span>
                                    <span>{{items.age}}</span>
                                    <span>{{items.skin}}</span>
                                </div>
                                <div>
                                    <van-rate size="12px" v-model="items.star" readonly />
                                </div>
                            </div>
                        </div>
                        <div class="content-main"></div>
                        <div class="content-footer">
                            <span>一年前</span>
                            <span>
                                <van-icon name="like-o" />
                                130
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    data() {
        return {
            star:4,
            ageList: [
                {
                    age: '18岁以下',
                    speed: 0.5,
                },
                {
                    age: '19-24岁',
                    speed: 21.5,
                },
                {
                    age: '25-30岁',
                    speed: 55,
                },
                {
                    age: '31-39岁',
                    speed: 22.7,
                },
                {
                    age: '40岁以上',
                    speed: 0.3,
                }
            ],
            skinList: [
                {
                    skin: '干性',
                    speed: 13,
                },
                {
                    skin: '油性',
                    speed: 6,
                },
                {
                    skin: '中性',
                    speed: 11,
                },
                {
                    skin: '混合',
                    speed: 54,
                },
                {
                    skin: '敏感',
                    speed: 16,
                }
            ],
            commentsList: [
                {
                    name: '小香香',
                    age: '00后',
                    skin: '干',
                    star: 4
                },
                {
                    name: '小香香',
                    age: '00后',
                    star: 4,
                    skin: '干',
                },
                {
                    name: '小香香',
                    age: '00后',
                    star: 4,
                    skin: '干',
                },
                {
                    name: '小香香',
                    age: '00后',
                    star: 4,
                    skin: '干',
                },
                
            ]
        }
    },
}
</script>
<style scoped>
.content-footer span:last-child{
    padding-right: 20px;
}
.content-footer{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    font-size: 13px;
    color: #ccc;
    border-bottom: 1px solid #eee;
    padding-bottom: 20px;
}
.content-main{
    height: 100px;
}
.name-wrap{
    padding-left: 20px;
}
.name-wrap .name span:nth-child(3){
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border-radius: 50%;
    background-color: #f0ad6f;
    color: #fff;
}
.name-wrap .name span:nth-child(2){
    font-size: 13px;
    padding: 4px;
}
.name-wrap .name{
    font-size: 14px;
}
.content-header .user-logo{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #ccc;
}
.content-header{
    display: flex;
    align-items: center;
}
.item-content{
    /* border-top: 1px solid #eee; */
        padding: 10px 0 10px 0;
    margin-left: 20px;
}

.comment-wrap .comment-tips div span:first-child{
    color: #f2c67d;
}
.comment-wrap .comment-tips div{
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    font-size: 12px;
}
.comment-wrap .comment-tips{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0 10px 0;
    margin-left: 20px;

    font-size: 14px;
    border-bottom: 1px solid #eee;
}
.comment-wrap{
}
.age-wrap div p >>> .van-progress{
    flex: 1;
    margin: 0 4px;
}
.age-wrap div p{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ccc;
    font-size: 12px;
}
.age-wrap h6{
    padding-bottom: 10px;
}
.age-wrap,.skin-wrap{
    flex: .45;
}
h6{
    margin: 0;
}
.all-wrap{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 10px solid #eee;
}
.top-wrap p span{
    margin-left: 20px; 
}
.top-wrap p{
    font-size: 14px;
    color: #999;
    display: flex;
    align-items: center;
    padding: 2px 0;
}
.top-wrap h5{
    font-weight: normal;
    font-size: 14px;
    margin: 0;
    padding-bottom: 4px;
}
.top-wrap{
    border-bottom: 1px solid #eee;
    padding: 20px 0;
    margin-left: 20px;
}
.tag-wrap{
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
.btn-group{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px 30px;
}
.info-wrap .want,.info-wrap .prices{
    font-size: 12px;
    color: #ccc;
    padding: 4px;
}
.info-wrap span{
    flex-wrap: 600;
    font-size: 30px;
}
.shop-info div{
    flex: .5;
}
.shop-info .info-wrap{
    text-align: center;
}
.shop-info .shop-img{
    width: 120px;
    height: 120px;
}
.shop-info{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 40px 30px 10px;
}
img{
    width: 100%;
    height: 100%;
}
p{
    margin: 0;
}
</style>