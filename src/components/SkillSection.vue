<template>
  <div>
    <el-row>
      <section-title title="Skills" icon="el-icon-folder"></section-title>
    </el-row>
    <el-row style="margin-left: 5%;">
      <el-tag
        v-for="skill in skillList"   
        :key="skill"
        color="#008080"
        effect="dark"
      >
        <Label style="font-size: large;">{{ skill }}</Label>
      </el-tag>
    </el-row>
  </div>    
</template>

<script>
import sectionTitle from './SectionTitle.vue'

// Skill區塊
export default {
  name: 'SkillSection',
  components: {
    sectionTitle
  },
  data: function () {
    return {
        skillList: [
          'DotNet Core',
          'ASP.NET MVC',
          'ASP.NET Webform',
          'Xamarin',
          'SQL',
          'jQuery',
          'LINQ',
          'KendoUI',
          'Element UI'
        ]
      };
    },
}
</script>

<style scoped>
  .el-tag {
    margin: 2.5px 5px;
  }
</style>
