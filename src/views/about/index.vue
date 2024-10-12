<template>
  <div style="width: 500px">
    <ElementFormPlus
      :ref="ElementFormPlus"
      :formList="formList"
    ></ElementFormPlus>
  </div>
</template>
<script setup>
import ElementFormPlus from "@/components/ElementFormPlus/index.vue";
import { ref } from "vue";
import { formList } from "@/views/about/formConfig.js";
</script>
<style lang="scss" scoped>
</style>
