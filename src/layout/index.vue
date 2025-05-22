<template>
  <div class="layout-container">
    <el-container>
      <el-aside width="200px" class="aside">
        <div class="logo">
          <img src="@/assets/logo.png" alt="logo" />
          <h1>后台管理系统</h1>
        </div>
        <layoutAside />
      </el-aside>
      <el-container>
        <el-header class="header">
          <div class="breadcrumb">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>
                <router-link :to="route.path">
                  {{ route.meta.name }}
                </router-link>
              </el-breadcrumb-item>
            </el-breadcrumb>
          </div>

          <div class="user-info">
            <el-badge :value="3" class="notice-badge">
              <el-icon><Bell /></el-icon>
            </el-badge>
            <el-avatar class="avatar" :size="32" :src="userInfo?.avatar" />
            <el-dropdown trigger="click">
              <span class="username">{{ userInfo?.username ?? "admin" }}</span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="handleLogout"
                    >退出登录</el-dropdown-item
                  >
                </el-dropdown-menu>
                <el-dropdown-menu>
                  <el-dropdown-item @click="handleChangePassword"
                    >修改密码</el-dropdown-item
                  >
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </el-header>
        <el-main class="main">
          <div class="content-card">
            <!-- Component 是当前路由匹配到的组件 -->
            <router-view v-slot="{ Component }">
              <p class="title">{{ route.meta.name }}</p>
              <transition name="fade" mode="out-in">
                <component :is="Component" />
              </transition>
            </router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import layoutAside from "@/layout/layout-aside/index.vue";
const route = useRoute();
import { useUserStore } from "@/store";
import { ElMessage, ElMessageBox } from "element-plus";
const userStore = useUserStore();

const userInfo = computed(() => userStore.user);

// 退出登录
const handleLogout = () => {
  userStore.logout();
};

// 修改密码
const handleChangePassword = () => {
  console.log("修改密码");
};
</script>

<style lang="scss">
@use "@/assets/styles/layout-style.scss";
.username {
  cursor: pointer;
}
</style>
