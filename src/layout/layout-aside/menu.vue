<template>
  <!-- 有子路由 -->
  <el-sub-menu
    :index="data.path"
    v-if="data && data.children && data.children.length > 0"
  >
    <template #title>
      <el-icon>
        <component :is="data.meta.icon"></component>
      </el-icon>
      <span>{{ data.meta.name }}</span>
    </template>
    <MenuItem v-for="item in data.children" :key="item.path" :data="item" />
  </el-sub-menu>
  <!-- 没有子路由 -->
  <el-menu-item :index="data.path" v-else>
    <el-icon>
      <component :is="data.meta.icon"></component>
    </el-icon>
    <span>{{ data.meta.name }}</span>
  </el-menu-item>
</template>

<script setup>
import MenuItem from "./menu.vue";
const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
});
</script>

<style scoped lang="scss"></style>
