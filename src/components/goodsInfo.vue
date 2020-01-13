<template>
    <div>
        <van-nav-bar title="开封" right-text="确定" left-arrow>
        </van-nav-bar>
        <main>
            <div class="shop-info">
                <div class="shop-img">
                    <img src="@/assets/img/阿玛尼giorgio 乳霜.png" alt="">
                </div>
                <div class="shop-tips">
                    <p class="shop-name">
                        阿玛尼giorgio Armani银钥密集乳霜
                    </p>
                    <p class="shop-price">
                        <span>
                            ￥
                        </span>
                        1080.00
                    </p>
                </div>
            </div>
            <div class="start-wrap">
                <span>开封时间：</span>
                <select name="" id="">
                    <option value="2019.12.22">2019.12.22</option>
                    <option value="2019.12.23">2019.12.23</option>
                </select>
            </div>
            <div class="start-wrap">
                <span>开封保鲜期：</span>
                <select name="" id="">
                    <option value="2019.12.22">5个月</option>
                    <option value="2019.12.22">6个月</option>
                    <option value="2019.12.22">7个月</option>
                </select>
            </div>
            <div class="start-wrap">
                <span>保鲜期结束提前提醒：</span>
                <select name="" id="">
                    <option value="2019.12.22">5个月</option>
                    <option value="2019.12.22">6个月</option>
                    <option value="2019.12.22">7个月</option>
                </select>
            </div>
            <div class="start-wrap">
                <span>购买时间：</span>
                <select name="" id="">
                    <option value="2019.12.22">2019.12.22</option>
                    <option value="2019.12.23">2019.12.23</option>
                </select>
            </div>
            <div class="start-wrap">
                <span>购买价格：</span>
                <div>
                    <van-field v-model="value" placeholder="129.00" />
                </div>
            </div>
            <div class="start-wrap">
                <span>购买渠道：</span>
                <div>
                    <van-field v-model="value" placeholder="选填" />
                </div>
            </div>
        </main>
    </div>
</template>

<style scoped>
.start-wrap div{
    flex: .3;
    text-align: right;
    font-size: 12px;
}
.start-wrap{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: #ccc;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
}
.shop-price span{
    font-size: 16px;
}
.shop-price{
    color: #cccccc;
    font-size: 14px;
    padding: 10px 0;
}
.shop-info .shop-name{
    white-space: 1px;
    font-size: 14px;
    letter-spacing: 1px;
    padding-right: 18px;
}
.shop-info .shop-img{
    width: 100px;
    height: 100px;
}
.shop-info{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
main{
    padding: 20px 0 0 20px;
}
img{
    width: 100%;
    height: 100%;
}
p{
    margin: 0;
}
select{
    border: none;
    padding: 10px;
    outline: none;
}
</style>