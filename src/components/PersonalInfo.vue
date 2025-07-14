<template>
  <div style="margin: 0% 5%;">
    <!-- PC -->
    <div class="hidden-md-and-down">
      <el-row>
        <el-col :span="14">
          <el-avatar :size="100">                        
            <img v-if="isAnonymous" src="../assets/anonymous.png" />
            <img v-else src="../assets/photo.png" />          
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
            @click="switchLang"
          >
            {{ lang }}
            <el-icon><View /></el-icon>
          </el-link>
          <br>
          <el-link
            :href="'mailto:' + email"
            type="info"
          >
            {{ email }}
            <el-icon><Message /></el-icon>
          </el-link>
          <br>
          <el-link           
            v-if="!isAnonymous" 
            :href="'tel:' + phone"
            type="info"
          >
            {{ phone }}
            <el-icon><Phone /></el-icon>
          </el-link>
          <br v-if="!isAnonymous">
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
            <img v-if="isAnonymous" src="../assets/anonymous.png" />
            <img v-else src="../assets/photo.png" />
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
            @click="switchLang"
          >
            <el-icon><View /></el-icon>
            {{ lang }}
          </el-link>
          <br>
          <el-link
            :href="'mailto:' + email"
            type="info"
          >
            <el-icon><Promotion /></el-icon>
            {{ email }}
          </el-link>
          <br>
          <el-link  
            v-if="!isAnonymous"          
            :href="'tel:' + phone"
            type="info"
          >
            <el-icon><Phone /></el-icon>
            {{ phone }}
          </el-link>
          <br v-if="!isAnonymous">
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

<script setup>
import { useI18n } from 'vue-i18n'
import { defineProps, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const props = defineProps({
  isAnonymous: {
    type: Boolean,
    default: false
  }
})

const route = useRoute();
const router = useRouter();
const { t, locale } = useI18n()

const email = 'genius9450@gmail.com'
const phone = '+886919689866'
const github = 'https://github.com/genius9450'

const title = computed(() => t('myTitle'))
const introduction = computed(() => t('introduction'))
const name = computed(() => props.isAnonymous ? t('myNickName') : t('myName'))

const lang = computed(() => {
  return locale.value == 'en' ? '閱讀中文' : 'Read in English';
})

const switchLang = () => {
  const newLang = locale.value === 'zh' ? 'en' : 'zh';
  router.push({ name: route.name, params: { lang: newLang } });
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
