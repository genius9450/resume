<template>
  <div style="margin: 0% 5%;">
    <!-- PC -->
    <div class="hidden-md-and-down">
      <el-row>
        <el-col :span="14">
          <el-avatar :size="100">
            <img src="../assets/photo.png">
          </el-avatar>
          <div class="nameText">
            <span style="font-size: xx-large;font-weight: bold;">{{ name }}</span> <br>
            <span style="font-size: large;color: #008080;font-weight: bold;">{{ title }}</span>
          </div>
        </el-col>
        <el-col
          :span="10"
          class="contactInfoPC"
        >
          <el-link
            type="info"
            :href="switchLangUrl"
          >
            {{ lang }}
            <i class="el-icon-view" />
          </el-link>
          <br>
          <el-link
            :href="'mailto:' + email"
            type="info"
          >
            {{ email }}
            <i class="el-icon-message" />                        
          </el-link>
          <br>
          <el-link
            :href="'tel:' + phone"
            type="info"
          >
            {{ phone }}
            <i class="el-icon-phone" />
          </el-link>
          <br>
          <el-link
            :href="github"
            type="info"
            target="_blank;"
          >          
            <span>{{ github }}</span>
            <img
              style="width:16px;margin-left: 5px;"
              src="../assets/GitHub-Mark-32px.png"
            >
          </el-link>
        </el-col>
      </el-row>
    </div>
    
    <!-- Mobile -->
    <div class="hidden-md-and-up">
      <el-row>
        <el-col :span="10">
          <el-avatar :size="100">
            <img src="../assets/photo.png">
          </el-avatar>
        </el-col>
        <el-col :span="14">
          <span style="font-size: xx-large;">{{ name }}</span><br>
          <span style="font-size: large;color: #008080;">{{ title }}</span>
        </el-col>        
      </el-row>

      <el-row>
        <el-col class="contactInfoMobile">
          <el-link
            type="info"
            :href="switchLangUrl"
          >
            <i class="el-icon-view" />
            {{ lang }}            
          </el-link>
          <br>
          <el-link
            :href="'mailto:' + email"
            type="info"
          >
            <i class="el-icon-s-promotion" />
            {{ email }}            
          </el-link>
          <br>
          <el-link
            :href="'tel:' + phone"
            type="info"
          >
            <i class="el-icon-phone" />
            {{ phone }}            
          </el-link>
          <br>
          <el-link
            :href="github"
            type="info"
            target="_blank;"
          >
            <img
              style="width:16px;margin-right: 5px;"
              src="../assets/GitHub-Mark-32px.png"
            >
            <span>{{ github }}</span>            
          </el-link>
        </el-col>
      </el-row>
    </div>

    <el-row>
      <span style="font-size: large;">{{ introduction }}</span><br>
    </el-row>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'PersonalInfo',
  setup() {
    const { t } = useI18n()

    const name = t('myName')
    const title = t('myTitle')
    const introduction = t('introduction')

    return {
      name,
      title,
      email: 'genius9450@gmail.com',
      phone: '+886919689866',
      github: 'https://github.com/genius9450',
      introduction
    }
  },
  computed: {
    lang: function () {
      let currentLang = localStorage.getItem('lang');
      return currentLang == 'en' ? '閱讀中文' : 'Read in English';
    },
    switchLangUrl: function() {
      return localStorage.getItem('lang') == 'zh' ? '?lang=en' : '?lang=zh';
    }
  }  
}
</script>

<style scoped>
  .nameText {
    display: inline-block;
    vertical-align: top;
    margin-left: 20px;
  }

  .contactInfoPC {
    font-size: 20px;
    text-align: end;
  }

  .contactInfoMobile {
    font-size: 20px;
    text-align: start;
  }
</style>
