<template>
  <div class="container">
    <button v-rule="'shop:create'">创建</button>
    <button v-rule="'shop:edit'">编辑</button>
    <button v-rule="'shop:delete'">删除</button>
  </div>
</template>
<script setup>
localStorage.setItem("userId", "xiaoxin-bt");
</script>
<style lang="scss" scoped>
</style>
