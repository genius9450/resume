<template>
  <div>    
    <el-row>
      <section-title
        :title="$t('language')"
        :icon="Collection"
      />
    </el-row>
    <el-row
      v-for="language in languages"
      :key="language.lang"
      style="margin-left: 5%;"
      :gutter="10"
    >
      <el-col :span="9">
        <span style="font-size: x-large;font-weight: bold;">{{ language.lang }}</span><br>
      </el-col>
      <el-col :span="15">
        <el-rate
          v-model="language.rank"
          disabled
          text-color="#ff9900"
        />
      </el-col>
    </el-row>    
  </div>
</template>

<script>
import sectionTitle from './SectionTitle.vue'
import { Collection } from '@element-plus/icons-vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'LanguageSection',
  components: {
    sectionTitle
  },
  setup() {
    const { t } = useI18n()

    const languages = [
      { 
        lang: t('chinese'),
        rank: 5
      },
      { 
        lang: t('taiwanese'),
        rank: 4
      },
      { 
        lang: t('english'),
        rank: 3
      }
    ]

    return {
      languages,
      Collection
    }
  }
}
</script>
