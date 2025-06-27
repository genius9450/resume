<template>
  <div>
    <el-row>
      <section-title
        :title="$t('workExperience')"
        icon="el-icon-suitcase-1"
      />
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
              v-for="(task, taskIndex) in activity.taskList"               
              :key="taskIndex"
            >
              <el-row>
                <el-col :span="2">
                  <span style="color:#5A5A5A;">
                    <i
                      style="font-size: large;"
                      class="el-icon-caret-right"
                    />
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
import { useI18n } from 'vue-i18n'

// 工作經歷區塊
export default {
  name: 'ExperienceSection',
  components: {
    sectionTitle
  },
  setup() {
    const { t } = useI18n()

    const activities = [
      {
        title: t('productDeveloper'),
        company: t('telexpress'),
        timestamp: '2023/02 - Present',
        taskList: [
          t('telexpress_task1'),
          t('telexpress_task2'),
          t('telexpress_task3'),
          t('telexpress_task4')
        ]
      }, 
      {
        title: t('developmentEngineer'),
        company: t('altob'),
        timestamp: '2020/06 - 2023/01',
        taskList: [
          t('altob_task1'),
          t('altob_task2'),
          t('altob_task3'),
          t('altob_task4'),
          t('altob_task5'),
          t('altob_task6')
        ]
      }, 
      {
        title: t('programmer'),
        company: t('shinya'),
        timestamp: '2019/05 - 2020/05',
        taskList: [
          t('shinya_task1'),
          t('shinya_task2')
        ]
      }, 
      {
        title: t('programAnalyst'),
        company: t('dajin'),
        timestamp: '2018/01 - 2019/02',
        taskList: [
          t('dajin_task1'),
          t('dajin_task2'),
          t('dajin_task3'),
          t('dajin_task4')
        ]
      }, 
      {
        title: t('programmer'),
        company: t('gss'),
        timestamp: '2016/07 - 2017/12',
        taskList: [
          t('gss_task1'),
          t('gss_task2'),
          t('gss_task3'),
          t('gss_task4')
        ]
      }, 
      {
        title: t('assistantProgrammer'),
        company: t('gss'),
        timestamp: '2015/07 - 2016/06',
        taskList: [
          t('gss_task1')
        ]
      }
    ]
    return {
      activities
    }
  }
}
</script>
