<template>
  <div>
    <el-row>
      <section-title title="Other Skills" icon="el-icon-folder-opened"></section-title>
    </el-row>
    <el-row style="margin-left: 5%;">
      <div
        v-for="skill in otherSkillList"   
        :key="skill.type"
        style="margin-bottom: 15px;"
      >
        <span style="font-weight: bold;">{{ skill.type }}</span><br>
        <span style="font-size: large;">{{ skill.desc }}</span>

      </div>
    </el-row>
  </div>    
</template>

<script>
import sectionTitle from './SectionTitle.vue'

// Other Skill區塊
export default {
  name: 'OtherSkillSection',
  components: {
    sectionTitle
  },
  data: function () {
    return {
        otherSkillList: [
         {
           type: 'Languages',
           desc: 'C#.NET, VB.NET, JavaScript, CSS, HTML, SQL'
         },
        //  {
        //    type: 'Backend Framework',
        //    desc: 'DotNetCore, Abp, ASP.NET MVC, ASP.NET Webform'
        //  },
        //  {
        //    type: 'Frontend Framework',
        //    desc: 'Angualr, Vue, Bootstrap'
        //  },
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
           desc: 'SignalR, Lucene, Solr, Seq'
         }
        ]
      };
    },
}
</script>
