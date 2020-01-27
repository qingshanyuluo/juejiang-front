<template>
  <div>
    <van-row>
      <van-col span="10"></van-col>
      <van-col span="14">
        <div :class="{ active: active === 0 }" class="tab" @click="change(0)">关注</div>
        <div :class="{ active: active === 1 }" class="tab" @click="change(1)">精选</div>
        <div :class="{ active: active === 2 }" class="tab" @click="change(2)">护肤</div>
        <div :class="{ active: active === 3 }" class="tab" @click="change(3)">美妆</div>
      </van-col>
    </van-row>
    <page :index="active" />
  </div>
</template>

<script>
import Page from './ExplorePage'
export default {
  components: { Page },
  data(){
    return {
      active: 0,
      content: [
        "1",
        "2",
        "3",
        "4"
      ]
    }
  },
  methods: {
    change(val){
      this.active = val
    }
  }
}
</script>

<style>
.tab {
  display: inline-block;
  padding: 7px;
  font-size: large;
  color: slategray
}
.active {
  color: gold
}
</style>