<template>
  <div style="width: 100%;">
    <span class="sectionTitle text-uppercase">
      <el-icon><component :is="icon" /></el-icon>
      {{ title }}
    </span>
    <div class="line" />
  </div>
</template>

<script setup>
// 區塊表頭
defineProps({
  title: {
    type: String,
    default: ''
  },
  icon: {
    type: Object,
    default: null
  }
})
</script>


<style scoped>
  .sectionTitle {
    font-size: xx-large;
    font-weight: bold;
    margin-left: 5%;
  }
  .line {
    width: 85%;
    height: 5px;
    background: linear-gradient(to right, #008080	, #ECFFFF);
  }
</style>