<script setup>
   import { HomeFilled,PictureFilled } from '@element-plus/icons-vue'
      
</script>

<template>
    <div class="header-tab">
        <router-link 
         to="/home"
         custom
         v-slot="{  isActive,navigate }"
        >
            <div :class="{active:isActive}" @click="navigate">
                <el-icon><HomeFilled /></el-icon>
                网站收藏
            </div>
        </router-link>
        <router-link 
         to="/imageGallery"
         custom
         v-slot="{  isActive,navigate }"
        >
            <div :class="{active:isActive}" @click="navigate">
                <el-icon><PictureFilled /></el-icon>
                图片收藏
            </div>
        </router-link>
    </div>
   
  </template>
  

<style lang="stylus">
.header-tab
   display flex
   background #1e90ff
   height 44px
   div
    padding-left 10px
    padding-right 20px
    display flex
    justify-content center
    align-items center
    color #ccc
    cursor pointer
    &.active
      color #fff
    &.active svg
     fill #fff
   
</style>
