<template>
  <div>
    <el-row>
      <section-title
        :title="$t('otherSkill')"
        :icon="FolderOpened"
      />
    </el-row>
    <el-row style="margin-left: 5%;">
      <div
        v-for="skill in otherSkillList"
        :key="skill.type"
        style="margin-bottom: 15px; width: 100%;"
      >
        <span style="font-weight: bold;">{{ skill.type }}</span><br>
        <span style="font-size: large;">{{ skill.desc }}</span>
      </div>
    </el-row>
  </div>
</template>

<script setup>
import sectionTitle from './SectionTitle.vue'
import { FolderOpened } from '@element-plus/icons-vue'

const otherSkillList = [
  {
    type: 'Languages',
    desc: 'C#, VB, JavaScript, SQL'
  },
  {
    type: 'Frameworks',
    desc: '.NET Core, ABP, ASP.NET MVC, ASP.NET WebForm, Vue, Angular'
  },
  {
    type: 'Database',
    desc: 'Ms-SQL, MySQL, MongoDb, Redis'
  },
  {
    type: 'Version Control',
    desc: 'Subversion, Git'
  },
  {
    type: 'IDE/Editor',
    desc: 'Visual Studio,Visual Code'
  },
  {
    type: 'Issue Trackers',
    desc: 'Jira, Mantis, Redmine, Trello'
  },
  {
    type: 'Others',
    desc: 'SignalR, Lucene, Solr, Seq, RabbitMQ'
  }
]
</script>
