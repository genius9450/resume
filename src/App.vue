<template>  
    <el-card :style="{ backgroundImage:'url('+bgImg+')'}" :body-style="{ padding: '0px' }"  class="bg" shadow="always">
      <el-container id="app" >
        <el-main>
          <Personal></Personal>
          <Content></Content>
        </el-main>
      </el-container>
    </el-card>  
</template>

<script>
import BgImg from "./assets/bg.png"
import Personal from './components/PersonalInfo.vue'
import Content from './components/Content.vue'

export default {
  name: 'App',
  components: {
    Personal,
    Content
  },
  data: function() {
    return {
      bgImg: BgImg
    }
  }
}
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

@media print {
  .hidden-md-and-down {
    display: none;
  }
}
</style>
