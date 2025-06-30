<template>
  <div>
    <!-- PC -->
    <el-row
      :gutter="20"
      class="hidden-md-and-down"
    >
      <el-col :span="12">
        <Experience />
      </el-col>
      <el-col :span="12">
        <Skill />
        <OtherSkill />
        <Education />
        <Language />
      </el-col>
    </el-row>

    <!-- Mobile -->
    <el-row class="hidden-md-and-up">
      <Experience />
      <Skill />
      <OtherSkill />
      <Education />
      <Language />
    </el-row>
  </div>
</template>

<script>
import Experience from './ExperienceSection.vue'
import Skill from './SkillSection.vue'
import OtherSkill from './OtherSkillSection.vue'
import Education from './EducationSection.vue'
import Language from './LanguageSection.vue'

export default {
  name: 'MainContent',
  components: {
    Experience,
    Skill,
    OtherSkill,
    Education,
    Language
  }
}
</script>
