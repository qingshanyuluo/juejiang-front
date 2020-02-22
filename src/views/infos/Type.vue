<template>
  <van-picker
    show-toolbar
    title="选择肤质"
    :columns="columns"
    @cancel="onCancel"
    @confirm="onConfirm"
  />
</template>

<script>
import Vue from "vue";
import { Picker } from "vant";
import { Toast } from "vant";

Vue.use(Picker);
export default {
  data() {
    return {
      columns: ["干", "油", "中性", "明杆"]
    };
  },
  methods: {
    onConfirm(value, index) {
      Toast(`${value}`);
    },
    onCancel() {
      Toast("取消");
    }
  }
};
</script>

<style></style>
