<script setup>
   import { inject,ref } from 'vue'

   import  useWebsiteStore  from '@/store/websiteStore'

   const websiteStore = useWebsiteStore()
   const { isShow,setIsShow } = inject('dialog-visible')
   
   const url = ref('https://wwww.baidu.com/')

   const isSubmit = ref(false)

   const handAddClick = async () => {
    isSubmit.value = true
    const result = await myApi.sendUrl(url.value)

    if(result.msg){
      myApi.alert(result.msg)
      isSubmit.value = false
    }else{
      websiteStore.add(result)
      setIsShow(false)
      isSubmit.value = false
    }

    url.value=''
      
   }

   const handCancelClick = () => {
    setIsShow(false)
    url.value=''
   }
   
</script>

<template>
   <div class="dialog-warp"  v-if="isShow">
      <div class="content">
        <div class="input">
            <el-input  v-model="url" @keyup.enter="handAddClick" :disabled="isSubmit" placeholder="请输入网址" />
        </div>
        <div class="btns">
            <el-button :disabled="isSubmit" @click="handAddClick"  >添加</el-button>
            <el-button :disabled="isSubmit" @click="handCancelClick" >取消</el-button>
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
