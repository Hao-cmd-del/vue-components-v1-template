<template>
  <div class="layout-container">
    <el-container>
      <el-container>
        <el-header class="header">
          <div class="header-content">
            <div class="breadcrumb"></div>
            <div class="user-info">
              <!-- 登录、注册 -->
              <el-button type="primary" plain @click="login">登录</el-button>
              <el-button type="primary" @click="register">注册</el-button>
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
        <el-footer class="footer">
          <Footer />
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Footer from "@/layout/footer/index.vue";
</script>

<style lang="scss">
@use "@/assets/styles/layout-style.scss";
</style>
