<template>
  <div>
    <el-menu :default-active="activeIndex" @select="menuSelect" router>
      <template v-for="item in menuList" :key="item.path">
        <MenuItem :data="item" />
      </template>
    </el-menu>
  </div>
</template>

<script setup>
import MenuItem from "./menu.vue";
const route = useRoute();
const router = useRouter();
// 当前激活的菜单
const activeIndex = ref(route.path);

// 菜单点击处理
const menuSelect = (path, keyPath) => {
  router.push(path);
  activeIndex.value = path;
};

// 菜单列表
const menuList = computed(() => {
  const routes = router.getRoutes();
  const layoutRoute = routes.find((r) => r.path === "/");
  return layoutRoute?.children || [];
});
</script>

<style scoped lang="scss"></style>
