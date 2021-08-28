<template>
  <div>
    <el-row>
      <section-title :title="$t('workExperience')" icon="el-icon-suitcase-1"></section-title>
    </el-row>
    <el-row>
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          size="large"
          >
          <el-card :body-style="{ padding: '3px, 5px' }">
            <span style="font-size: x-large; font-weight: bold;">{{ activity.title }}</span><br>
            <span style="font-size: large;">{{ activity.company }}</span><br>
            <span style="font-size: large;color: #008080;">{{ activity.timestamp }}</span> 

            <div
              v-for="(task, index) in activity.taskList"               
              :key="index"
            >
            <el-row>
              <el-col :span="2">
                <span style="color:#5A5A5A;">
                  <i style="font-size: large;" class="el-icon-caret-right" ></i>
                </span>
              </el-col>
              <el-col :span="22">
                <span style="font-size: large;">{{ task }}</span>
              </el-col>
            </el-row>
              
            </div>
          </el-card>
          
        </el-timeline-item>
      </el-timeline>
    </el-row>
  </div>    
</template>

<script>
import sectionTitle from './SectionTitle.vue'

// 工作經歷區塊
export default {
  name: 'ExperienceSection',
  components: {
    sectionTitle
  },
  data: function () {
    return {
        activities: [
        {
          title: this.$i18n.t('developmentEngineer'),
          company: this.$i18n.t('altob'),
          timestamp: '2020/06 - Present',
          taskList: [
            this.$i18n.t('altob_task1'),
            this.$i18n.t('altob_task2'),
            this.$i18n.t('altob_task3'),
            this.$i18n.t('altob_task4'),
            this.$i18n.t('altob_task5'),
            this.$i18n.t('altob_task6')
          ]
        }, 
        {
          title: this.$i18n.t('programmer'),
          company: this.$i18n.t('shinya'),
          timestamp: '2019/05 - 2020/05',
          taskList: [
            this.$i18n.t('shinya_task1'),
            this.$i18n.t('shinya_task2')
          ]
        }, 
        {
          title: this.$i18n.t('programAnalyst'),
          company: this.$i18n.t('dajin'),
          timestamp: '2018/01 - 2019/02',
          taskList: [
            this.$i18n.t('dajin_task1'),
            this.$i18n.t('dajin_task2'),
            this.$i18n.t('dajin_task3'),
            this.$i18n.t('dajin_task4')
          ]
        }, 
        {
          title: this.$i18n.t('programmer'),
          company: this.$i18n.t('gss'),
          timestamp: '2016/07 - 2017/12',
          taskList: [
            this.$i18n.t('gss_task1'),
            this.$i18n.t('gss_task2'),
            this.$i18n.t('gss_task3'),
            this.$i18n.t('gss_task4')
          ]
        }, 
        {
          title: this.$i18n.t('assistantProgrammer'),
          company: this.$i18n.t('gss'),
          timestamp: '2015/07 - 2016/06',
          taskList: [
            this.$i18n.t('gss_task1')
          ]
        }]
      };
    },
}
</script>
