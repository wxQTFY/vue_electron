<script setup>
   import { ref } from 'vue'
   import SearchBar from './SearchBar.vue'
   import Dialog from  './Dialog.vue'
   import List from './list/list.vue'
      
</script>
<template>
   <SearchBar></SearchBar>
   <Teleport to="body">
      <Dialog></Dialog>
   </Teleport>
   <List></List>
</template>

<style lang="stylus">
   
</style>
