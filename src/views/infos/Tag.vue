<template>
  <van-picker
  show-toolbar
  title="选择标签"
  :columns="columns"
  @cancel="onCancel"
  @confirm="onConfirm"
/>
</template>

<script>
import Vue from 'vue';
import { Picker } from 'vant';
import { Toast } from 'vant';

Vue.use(Picker);
export default {
  data() {
    return {
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
    }
  },
  methods: {
    onConfirm(value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onCancel() {
      Toast('取消');
    }
  }
};
</script>

<style>

</style>