<template>
  <el-checkbox-group v-model="object[meta.prop]" :disabled="meta.disabled">
    <el-checkbox
      v-for="item in meta.options"
      :value="item.value"
      size="large"
      :key="item"
    >
      {{ item.label }}
    </el-checkbox>
  </el-checkbox-group>
</template>
<script setup>
import { defineProps } from "vue";
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
