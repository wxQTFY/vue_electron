<script setup>
   import { CircleCloseFilled } from '@element-plus/icons-vue'
   import  useWebsites  from './useWebsites'
   import  useIndex  from './useIndex'

   const { websiteStore,keywords } = useWebsites()
   
   const { currentIndex,handleItemClick } = useIndex()

   const handDeleteItem = ( ws ) => {
    websiteStore.deleteItem( ws.url ),
    currentIndex.value = 0
   }

</script>

<template>
   <div>
      <el-empty description="暂无数据"  v-if="websiteStore.find(keywords).length <= 0" />
      <div id="items"  v-else>
        <div class="read-item "  
        v-for="ws, i in websiteStore.find(keywords)"  
        :class="{ selected:currentIndex === i }"
        @click="handleItemClick(i,ws.url)"
        >
            <el-image :src="ws.screenshot" class="img"  />
            <h2>{{ws.title}}</h2>
            <!-- <el-button type="primary" :icon="Delete" /> -->
            <el-icon  class="delect" @click.stop="handDeleteItem(ws)" >
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
  border-left 5px solid lightgray
  position relative
  padding 10px
  &.selected
    border-left-color blue
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
