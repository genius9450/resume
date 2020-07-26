<template>
  <div>
      <span class="sectionTitle">        
        <i :class="icon"></i>
        {{ title }}
      </span>
      <div class="line"></div>
  </div>  
</template>

<script>
// 區塊表頭
export default {
  name: 'SectionTitle',
  props: {
    title: String,
    icon: String
  }
}
</script>


<style scoped>
  .sectionTitle {    
    font-size: xx-large;
    font-weight: bold;
    margin-left: 5%;
  }
  .line {
    width: 85%;
    height: 5px;
    background: linear-gradient(to right, #008080	, #ECFFFF);
  }
</style>