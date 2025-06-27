<template>
  <div>
    <span class="sectionTitle text-uppercase">        
      <i :class="icon" />
      {{ title }}
    </span>
    <div class="line" />
  </div>  
</template>

<script>
// 區塊表頭
export default {
  name: 'SectionTitle',
  props: {
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
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