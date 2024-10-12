<template>
  <el-radio-group v-model="object[meta.prop]" :disabled="meta.disabled">
    <el-radio
      v-for="item in meta.options"
      :key="item.value"
      :value="item.value"
    >
      {{ item.label }}
    </el-radio>
  </el-radio-group>
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
