<template>
  <div>
    <ElementFormPlus :formList="formConfig" ref="formRef"></ElementFormPlus>
  </div>
</template>

<script setup>
import ElementFormPlus from "@/components/ElementFormPlus/index.vue";
import { formConfig } from "./config";
</script>

<style scoped lang="scss"></style>
