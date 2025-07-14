<template>
  <el-card
    :style="{ backgroundImage:'url('+bgImg+')'}"
    :body-style="{ padding: '0px' }"
    class="bg"
    shadow="always"
  >
    <el-container id="app">
      <el-main style="padding: 20px">        
        <PersonalInfo :is-anonymous="isAnonymous" />
        <MainContent :is-anonymous="isAnonymous" />
      </el-main>
    </el-container>
  </el-card>
</template>

<script setup>
import { computed } from 'vue'
import BgImg from "../assets/bg.png"
import PersonalInfo from '../components/PersonalInfo.vue'
import MainContent from '../components/MainContent.vue'

const bgImg = BgImg
const isAnonymous = computed(() => {
  return window.location.pathname.includes('/anonymous');
})
</script>

<style>
#app {
  font-family: 微軟正黑體, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: start;
  color: #494f55;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
}

.bg:before {
  background-repeat: no-repeat;
  background-size: cover;
}

span {
  color:#5A5A5A;
  line-break: auto;
}

.el-row {
  margin-top: 10px;
  margin-bottom: 10px;
}

</style>
