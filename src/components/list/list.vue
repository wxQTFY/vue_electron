<script setup>
   import { ref } from 'vue'
   import { CircleCloseFilled } from '@element-plus/icons-vue'

   import  useWebsiteStore  from '@/store/websiteStore'

   const websiteStore = useWebsiteStore()
</script>

<template>
   <div>
      <el-empty description="暂无数据"  v-if="websiteStore.websites.length <= 0" />
      <div id="items"  v-else>
        <div class="read-item" v-for="ws, i in websiteStore.websites">
            <el-image :src="ws.screenshot" class="img"  />
            <h2>{{ws.title}}</h2>
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
