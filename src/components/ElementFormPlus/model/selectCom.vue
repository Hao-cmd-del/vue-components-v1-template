<template>
  <el-select
    v-model="object[meta.prop]"
    :clearable="clearable"
    :placeholder="meta.placeholder"
    :disabled="meta.disabled"
  >
    <el-option
      :label="item.label"
      :value="item.value"
      v-for="item in meta.options"
      :key="item"
    />
  </el-select>
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
