<script  setup>
   import { inject,ref } from 'vue'
   import { Plus } from '@element-plus/icons-vue'

   const { setIsShow } = inject('dialog-visible')
   const handclick = () => {
    setIsShow(true)
   } 
      
</script>

<template>
   <div class="search-container">
        <el-button class="button"  type="primary" :icon="Plus" @click="handclick" />
        <div class="input">
            <el-input class="input-c" style="width: 100%" placeholder="请输入关键字" />
        </div>
    </div>

</template>

<style lang="stylus">
   .search-container
      height 60px
      background-color #E6E8EB
      display  flex 
      align-items center
      justity-content center
      padding-left 10px
      .button
        height 40px
        width 40px
        text-align center
        font-size 30px
        font-weight bold
        cursor default
      .input
        flex 1
        height 36px
        padding 0 10px 
        

</style>
