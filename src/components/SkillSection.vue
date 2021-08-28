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
        :style="{'font-size': 'large', 'cursor': (skill.link != '' ? 'pointer' : 'default') }"
        @click="openLink(skill.link)"
      >
        {{ skill.name }}
        <i v-if="skill.link != ''" class="el-icon-share"></i>
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
        { name: 'DotNet Core', link: 'https://github.com/genius9450/DotNetCoreApi.Template' },
        { name: 'ASP.NET MVC', link: '' },
        { name: 'ASP.NET Webform', link: '' },
        { name: 'Xamarin', link: '' },
        { name: 'Angular', link: '' },
        { name: 'Vue', link: 'https://github.com/genius9450/mask-query-system' },
        { name: 'KendoUI', link: '' },
        { name: 'ElementUI', link: '' },
        { name: 'CoreUI', link: '' },
        { name: 'Bootstrap', link: '' }
      ]
    };
  },
  methods: {
    openLink(link) {
      window.open(link, '_blank');
    }
  }
}
</script>

<style scoped>
  .el-tag {
    margin: 2.5px 5px;
  }
</style>
