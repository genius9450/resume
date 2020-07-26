<template>
  <div>
    <!-- PC -->
    <el-row :gutter="20" class="hidden-md-and-down">
      <el-col :span="12">
        <Experience></Experience>
      </el-col>    
      <el-col :span="12">
        <Skill></Skill>
        <OtherSkill></OtherSkill>
        <Eduction></Eduction>
        <Language></Language>
      </el-col>
    </el-row>

    <!-- Mobile -->
    <el-row class="hidden-md-and-up">
      <Experience></Experience>
      <Skill></Skill>
      <OtherSkill></OtherSkill>
      <Eduction></Eduction>
      <Language></Language>
    </el-row>

  </div>  
</template>

<script>
import Experience from './ExperienceSection.vue'
import Skill from './SkillSection.vue'
import OtherSkill from './OtherSkillSection.vue'
import Eduction from './EductionSection.vue'
import Language from './LanguageSection.vue'

export default {
  name: 'Content',
  components: {
    Experience,
    Skill,
    OtherSkill,
    Eduction,
    Language
  }
}
</script>
