<template>
  <div>
    <el-row>
      <section-title
        :title="$t('skills')"
        :icon="Folder"
      />
    </el-row>
    <el-row style="margin-left: 5%;">
      <el-tag
        v-for="skill in skillList"
        :key="skill.name"
        color="#008080"
        size="large"
        :style="{'font-size': 'large', 'cursor': (skill.link != '' ? 'pointer' : 'default') }"
        @click="openLink(skill.link)"
      >
        <span style="color: #FFFFFF;">{{ skill.name }}</span>
        <el-icon
          v-if="skill.link != ''"
          color="#FFFFFF"
        >
          <Share />
        </el-icon>
      </el-tag>
    </el-row>
  </div>
</template>

<script setup>
import sectionTitle from './SectionTitle.vue'
import { Folder, Share } from '@element-plus/icons-vue'

const skillList = [
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

function openLink(link) {
  if(link) window.open(link, '_blank');
}
</script>

<style scoped>
  .el-tag {
    margin: 2.5px 5px;
  }
</style>
