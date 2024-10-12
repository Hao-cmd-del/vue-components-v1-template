<template>
  <el-date-picker
    v-model="object[meta.prop]"
    :type="meta.type"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
    :placeholder="meta.placeholder"
    :format="meta.format"
    :value-format="meta.valueFormat"
    :date-format="meta.dateFormat"
    :time-format="meta.timeFormat"
  />
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
