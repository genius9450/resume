<template>
  <div>    
    <el-row>
      <section-title :title="$t('language')" icon="el-icon-collection"></section-title>
    </el-row>
    <el-row  style="margin-left: 5%;"
      v-for="language in languages"
      :key="language.lang"
      :gutter="10"
    >
      <el-col :span="9">
        <span style="font-size: x-large;font-weight: bold;">{{ language.lang }}</span><br>
      </el-col>
      <el-col :span="15">
        <el-rate
          v-model="language.rank"
          disabled
          text-color="#ff9900">
        </el-rate>
      </el-col>
    </el-row>    
  </div>
    
</template>

<script>
import sectionTitle from './SectionTitle.vue'

export default {
  name: 'LanguageSection',
  components: {
    sectionTitle
  },
  data: function(){
    return {
      languages: [
        { 
          lang: this.$i18n.t('chinese'),
          rank: 5
        },
        { 
          lang: this.$i18n.t('taiwanese'),
          rank: 4
        },
        { 
          lang: this.$i18n.t('english'),
          rank: 3
        }
      ]
    }
  }
}
</script>
