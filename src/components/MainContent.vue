<template>
  <div>
    <!-- PC -->
    <el-row
      :gutter="20"
      class="hidden-md-and-down"
    >
      <el-col :span="12">
        <Experience :is-anonymous="isAnonymous" />
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
      <Experience :is-anonymous="isAnonymous" />
      <Skill />
      <OtherSkill />
      <Education />
      <Language />
    </el-row>
  </div>
</template>

<script setup>
import Experience from './ExperienceSection.vue'
import Skill from './SkillSection.vue'
import OtherSkill from './OtherSkillSection.vue'
import Education from './EducationSection.vue'
import Language from './LanguageSection.vue'

defineProps({
  isAnonymous: {
    type: Boolean,
    default: false
  }
})

</script>
