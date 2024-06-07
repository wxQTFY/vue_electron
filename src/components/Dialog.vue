<script setup>
   import { inject,ref } from 'vue'

   const { isShow,setIsShow } = inject('dialog-visible')

   const handAddClick = () => {
    setIsShow(false),
    console.log('添加成功')
   }

   const handCancelClick = () => {
    setIsShow(false)
   }
   
</script>

<template>
   <div class="dialog-warp" v-if="isShow">
      <div class="content">
        <div class="input">
            <el-input   placeholder="请输入网址" />
        </div>
        <div class="btns">
            <el-button @click="handAddClick" >添加</el-button>
            <el-button @click="handCancelClick" >取消</el-button>
      </div>
      </div>
   </div>
</template>

<style lang="stylus">
   .dialog-warp
     position absolute
     top 0px
     left 0px
     right 0px
     bottom 0px
     background rgba(0,0,0,0.8)
     display flex 
     align-items center
     justify-content center
     z-index 1000
     .content
       width 100%
       padding 0 20px 
       .input
         width 100%
         outline none
         margin-bottom 10px
       .btns
         margin-right 10px
</style>
