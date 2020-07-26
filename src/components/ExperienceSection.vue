<template>
  <div>
    <el-row>
      <section-title title="工作經歷" icon="el-icon-suitcase-1"></section-title>
    </el-row>
    <el-row>
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          size="large"
          >
          <el-card :body-style="{ padding: '3px, 5px' }">
            <span style="font-size: x-large; font-weight: bold;">{{ activity.title }}</span><br>
            <span style="font-size: large;">{{ activity.company }}</span><br>
            <span style="font-size: large;color: #008080;">{{ activity.timestamp }}</span> 

            <div
              v-for="(task, index) in activity.taskList"               
              :key="index"
            >
            <el-row>
              <el-col :span="2">
                <span style="color:#5A5A5A;">
                  <i style="font-size: large;" class="el-icon-caret-right" ></i>
                </span>
              </el-col>
              <el-col :span="22">
                <span style="font-size: large;">{{ task }}</span>
              </el-col>
            </el-row>
              
            </div>
          </el-card>
          
        </el-timeline-item>
      </el-timeline>
    </el-row>
  </div>    
</template>

<script>
import sectionTitle from './SectionTitle.vue'

// 工作經歷區塊
export default {
  name: 'ExperienceSection',
  components: {
    sectionTitle
  },
  data: function () {
    return {
        activities: [
        {
          title: '研發工程師',
          company: '歐特儀股份有限公司',
          timestamp: '2020/06 - Present',
          taskList: [
            '金流API規劃、文件規格撰寫',
            'Seq系統Log日誌規劃',
            '介接Telegram訊息即時通知模組'
          ]
        }, 
        {
          title: '程式設計師',
          company: '信業國際',
          timestamp: '2019/05 - 2020/05',
          taskList: [
            '遊戲產品開發WebSite：前後台資料即時更新(SignalR)、系統排程設計(Hangfire)、規劃前台資料讀取流程、虛擬化機器應用(Docker)',
            '介接API：說明文件規格撰寫、API撰寫'
          ]
        }, 
        {
          title: '程式分析師',
          company: '達璟資訊',
          timestamp: '2018/01 - 2019/02',
          taskList: [
            '程式分析、產品開發、指導或協助同仁開發上問題',
            'CRM 3.0產品開發：跨裝置之客戶管理系統(RWD)，功能並涵蓋行銷、SNS(ASP.NET MVC C#.NET)',
            '幼教親子型APP、POS系統APP：使用Xamarin開發雙平台(iOS、Android)、手機推播發送(google Firebase)、營業報表產製(KendoUI Chart)',
            '知識管理：Solr應用(全文檢索)'
          ]
        }, 
        {
          title: '程式設計師',
          company: '叡揚資訊',
          timestamp: '2016/07 - 2017/12',
          taskList: [
            '程式撰寫、專案開發、系統維護',
            '政府機關民意信箱WebSite：前後台系統開發/維護(ASP.NET MVC C#.NET / ASP.NET Webform VB.NET)、Email發送、API撰寫/介接、表單/報表繪製、資料轉檔匯出等功能',
            '資訊安全：Checkmarx原始碼安全漏洞補強',
            '知識管理：Lucene應用(全文檢索)'
          ]
        }, 
        {
          title: '助理工程師',
          company: '叡揚資訊',
          timestamp: '2015/07 - 2016/06',
          taskList: [
            '程式撰寫、繪製UI雛形、系統維護'
          ]
        }]
      };
    },
}
</script>
