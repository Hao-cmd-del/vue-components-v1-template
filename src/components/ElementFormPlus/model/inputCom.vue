<template>
  <el-input
    v-model="object[meta.prop]"
    :placeholder="meta.placeholder"
    :clearable="clearable"
    :disabled="meta.disabled"
  >
    <template #prepend v-if="meta.prepend">{{ meta.prepend }}</template>
    <template #append v-if="meta.append">{{ meta.append }}</template>
  </el-input>
</template>
<script setup>
import { ref, defineProps } from "vue";
const props = defineProps({
  clearable: {
    type: Boolean,
    default: true,
  },
  meta: {
    type: Object,
    default: () => {},
  },
  object: {
    type: Object,
    default: () => {
      return {};
    },
  },
});
</script>
<style lang="scss" scoped></style>
