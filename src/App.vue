<script setup>
import useTheme from "@/utils/useTheme.js";
const { theme } = useTheme();
</script>

<template>
  <div class="app">
    <!-- 下拉栏 -->
    <div style="display: flex; align-items: center; margin-bottom: 20px">
      <h2>主题切换</h2>
      <select v-model="theme" class="theme-select">
        <option value="dark">暗色</option>
        <option value="light">亮色</option>
        <option value="OS">跟随系统</option>
      </select>
    </div>
    <span @click="$router.push('/')">首页</span>
    <span @click="$router.push('/about')">表单</span>
    <span @click="$router.push('/contact')">内容</span>
    <span @click="$router.push('/user')">用户</span>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.app {
  /* 渐变 */
  background: linear-gradient(135deg, var(--bg1) 50%, var(--bg2) 100%);
  padding: 20px;
  min-height: 100vh;
  box-sizing: border-box;
}
h2 {
  color: var(--text-color);
}
span {
  margin: 0 10px;
  cursor: pointer;
  color: var(--text-color);
}

.theme-select {
  padding: 5px 20px;
  cursor: pointer;
}
</style>
