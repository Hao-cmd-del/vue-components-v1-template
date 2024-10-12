<template>
  <el-switch v-model="object[meta.prop]" :disabled="meta.disabled" />
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
<style lang="scss" scoped>
</style>
