<script setup>
import { provide,ref } from "vue";
import Header from './components/Header.vue'


//窗口显示状态
const isShow = ref(false)

const setIsShow = (value) =>{
  isShow.value = value
}
provide('dialog-visible',{
  isShow,
  setIsShow,
})

//定义搜索中关键字
const keywords = ref('')
const setKeywords = ( value ) => {
  keywords.value = value
}
provide('searchbar-keywords',{
  keywords,
  setKeywords
})
</script>

<template>
  <Header></Header>
  <router-view></router-view>
</template>

<style scoped>

</style>
