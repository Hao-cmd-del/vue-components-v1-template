<template>
  <div class="layout-container">
    <el-container>
      <el-container>
        <el-header class="header" v-if="!isShow">
          <div class="header-content">
            <div class="breadcrumb"></div>
            <div class="user-info">
              <!-- 登录、注册 -->
              <el-button type="primary" plain @click="handleLogin">登录</el-button>
              <el-button type="primary" @click="handleRegister">注册</el-button>
            </div>
          </div>
        </el-header>
        <el-main class="main">
          <div class="content-card">
            <!-- Component 是当前路由匹配到的组件 -->
            <router-view v-slot="{ Component }">
              <transition name="fade" mode="out-in">
                <component :is="Component" />
              </transition>
            </router-view>
          </div>
        </el-main>
        <el-footer class="footer" v-if="!isShow">
          <Footer />
        </el-footer oter>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Footer from "@/layout/footer/index.vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const isShow = computed(() => route.meta.isShow);

const handleLogin = () => {
  router.push("/login");
};
const handleRegister = () => {
  router.push("/register");
};
</script>

<style lang="scss">
@use "@/assets/styles/layout-style.scss";
</style>
