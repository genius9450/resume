<template>
  <div>
    <el-row>
      <section-title
        :title="$t('education')"
        :icon="School"
      />
    </el-row>
    <el-row style="margin-left: 5%;">      
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

<script setup>
import sectionTitle from './SectionTitle.vue'
import { School } from '@element-plus/icons-vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const activities = [
  {
    dept: t('hami'),
    school: t('kmu'),
    timestamp: '2012/09 - 2016/06'
  }
]
</script>
