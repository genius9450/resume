<template>
  <div>
    <el-row>
      <section-title title="學歷" icon="el-icon-school"></section-title>
    </el-row>
    <el-row  style="margin-left: 5%;">      
      <div
        v-for="(activity, index) in activities"
        :key="index"
        size="large"
      >
          <span style="font-size: x-large; font-weight: bold;">{{ activity.dept }}</span><br>
          <span style="font-size: large;">{{ activity.school }}</span><br>
          <span style="font-size: large;color: #008080;">{{ activity.timestamp }}</span> 
      </div>      
    </el-row>
  </div>    
</template>

<script>
import sectionTitle from './SectionTitle.vue'

// 學歷區塊
export default {
  name: 'EductionSection',
  components: {
    sectionTitle
  },
  data: function () {
    return {
        activities: [
        {
          dept: '醫務管理暨醫療資訊學系',
          school: '高雄醫學大學',
          timestamp: '2012/09 - 2016/06'
        }]
      };
    },
}
</script>
