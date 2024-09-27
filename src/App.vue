<script setup>
import useTheme from "@/utils/useTheme.js";
const { theme } = useTheme();
// 切换主题
const changeTheme = () => {
  theme.value = theme.value == "light" ? "dark" : "light";
};
</script>

<template>
  <div class="app">
    <h1 @click="changeTheme" class="theme">点击切换主题</h1>
    <span @click="$router.push('/')">首页</span>
    <span @click="$router.push('/about')">关于</span>
    <span @click="$router.push('/contact')">内容</span>
    <span @click="$router.push('/user')">用户</span>
  </div>
  <router-view></router-view>
</template>

<style scoped>
.app {
  background-color: var(--bg1);
  min-height: 100vh;
}
.theme {
  cursor: pointer;
}
</style>
