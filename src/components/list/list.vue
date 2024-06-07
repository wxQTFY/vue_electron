<script setup>
   import { ref } from 'vue'
   import { CircleCloseFilled } from '@element-plus/icons-vue'
</script>

<template>
   <div>
      <el-empty description="暂无数据"  />
      <div id="items"  >
        <div class="read-item">
            <el-image  class="img"  />
            <h2>百度一下哈哈哈</h2>
            <!-- <el-button type="primary" :icon="Delete" /> -->
            <el-icon  class="delect">
                <CircleCloseFilled />
            </el-icon>
        </div>
      </div>
   </div>
</template>

<style lang="stylus">
.read-item
  display flex 
  align-items center
  align-content center
  border-bottom lightgray 2px solid
  background #fafafa
  border-left 10px solid lightgray
  position relative
  padding 10px
  .img
    width 20%
    margin-right 25px
    border 1px solid #ccc
  &:hover
    background #eee
  .delect
   position absolute
   right 10px
   top 10px

</style>
