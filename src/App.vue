<script setup>
import { provide,ref } from "vue";
import Home from './components/Home.vue'

//窗口显示状态
const isShow = ref(false)
const setIsShow = (value) =>{
  isShow.value = value
}
provide('dialog-visible',{
  isShow,
  setIsShow
})

</script>

<template>
  <Home></Home>
</template>

<style scoped>

</style>
