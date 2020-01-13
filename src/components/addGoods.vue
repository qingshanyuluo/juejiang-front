<template>
    <div>
        <van-nav-bar title="化妆水" left-arrow>
        </van-nav-bar>
        <div class="select-wrap">
            <select class="brand-select">
                <option value="品牌">品牌</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
            </select>
            <select class="show-select">
                <option value="大赏">大赏</option>
                <option value="查看所有大赏">查看所有大赏</option>
                <option value="查看19年大赏">查看19年大赏</option>
                <option value="查看18年大赏">查看18年大赏</option>
                <option value="查看17年大赏">查看17年大赏</option>
                <option value="查看16年大赏">查看16年大赏</option>
            </select>
        </div>
        <div class="list-wrap">
             <div class="list-items" v-for="(items,index) in shopList" :key="index" @click="goGoodsInfo">
                 <span class="items-top">{{items.shopTop}}</span>
                 <div class="items-info">
                 <div class="items-img">
                     <img :src="items.shopImg" alt="">
                 </div>
                 <div class="items-tips">
                     <p>{{items.shopName}}</p>
                     <p class="star">
                         <van-rate v-model="items.star" readonly />
                         ({{items.person}})人点评
                     </p>
                     <p class="prices">
                         <span>￥</span>
                         {{items.prices}}
                     </p>
                 </div>
                 </div>                 
             </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            shopList: [
                {
                    shopTop: 1,
                    shopImg: require('@/assets/img/阿玛尼giorgio 乳霜.png'),
                    shopName: '阿玛尼giorgio Armani银钥密集乳霜',
                    star: 4,
                    person: 8,
                    prices: '1080.00',
                },
                {
                    shopTop: 2,
                    
                },
                {
                    shopTop: 3,
                   
                },
                {
                    shopTop: 4,
                   
                },
            ]
        }
    },   
    methods: {
        goGoodsInfo(){
            this.$router.push({path: '/goodsInfo'})
        }
    }
}
</script>

<style scoped>
.prices{
    color: #ccc;
}
.items-tips .prices span{
    font-size: 14px;
    color: #ccc;
}
.items-tips .star{
    display: flex;
    align-items: center;
}
.items-tips{
    flex: 1;
}
.list-items .items-info{
    flex: 1;
    font-size: 12px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.list-items .items-img{
    width: 100px;
    height: 100px;
}
.list-items .items-top{
    width: 20px;
    height: 20px;
    background-color: #cf2828;
    font-size: 14px;
    text-align: center;
}
    .list-items{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0 10px 10px;
    }
    .select-wrap .brand-select,.select-wrap .show-select{
        padding: 10px;
        flex: .5;
        border: none;
        outline: none;
    }
    .select-wrap{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #f0eeee;
    }
    img{
        width: 100%;
        height: 100%;
    }
</style>