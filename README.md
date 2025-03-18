# Vue3 Admin Template

一个基于 Vue3、Element Plus 和 Vite 的现代化后台管理系统模板。

## 特性

- 🚀 使用 Vue3 + Vite 构建，快速的开发体验
- 📦 基于 Element Plus UI 框架
- 🎨 可配置的主题和布局
- 📱 响应式设计，支持移动端
- 🔐 内置权限管理
- 🧩 组件自动注册
- 📝 自动生成路由配置
- 🎯 封装了常用的表单组件

## 技术栈

- Vue3
- Vite
- Element Plus
- Vue Router
- Pinia
- Sass
- ESLint
- Prettier

## 项目结构

```bash
├── src/
│   ├── assets/          # 静态资源
│   ├── components/      # 公共组件
│   ├── layout/         # 布局组件
│   ├── router/         # 路由配置
│   ├── store/          # 状态管理
│   ├── styles/         # 全局样式
│   ├── utils/          # 工具函数
│   └── views/          # 页面组件
├── public/             # 公共资源
├── .env               # 环境变量
├── vite.config.js     # Vite 配置
└── package.json       # 项目依赖
```

## 快速开始

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 开发环境运行

```bash
npm run dev
# 或
yarn dev
```

### 生产环境构建

```bash
npm run build
# 或
yarn build
```

## 功能特性

### 自动路由生成

系统会自动扫描 `views` 目录下的组件，根据目录结构生成路由配置：

```javascript
// 示例目录结构
views/
  ├── dashboard/
  │   ├── index.vue
  │   └── page.js
  └── system/
      ├── index.vue
      ├── page.js
      └── user/
          ├── index.vue
          └── page.js
```

### 表单组件

内置了多种常用的表单组件，支持配置化使用：

- Input 输入框
- Select 选择器
- DateTimePicker 日期时间选择器
- Radio 单选框
- Checkbox 多选框
- Switch 开关

使用示例：

```javascript
const formConfig = {
  formData: {
    name: "",
    type: "",
  },
  formDataType: [
    {
      type: "input",
      label: "名称",
      meta: {
        prop: "name",
        placeholder: "请输入名称",
      },
    },
  ],
};
```

### 布局组件

提供了灵活的布局配置：

- 可配置的侧边栏
- 响应式头部导航
- 面包屑导航
- 标签页导航
- 页面切换动画

## 主题定制

支持自定义主题颜色和布局样式，通过修改 SCSS 变量实现：

```scss
:root {
  --primary-color: #2b5dff;
  --menu-bg: #1a1f37;
  --header-bg: #ffffff;
  --main-bg: #f8f9fa;
}
```

## 开发指南

### 新增页面

1. 在 `views` 目录下创建页面组件
2. 创建对应的 `page.js` 配置文件
3. 系统会自动生成路由配置

### 使用表单组件

```vue
<template>
  <ElementFormPlus :formList="formConfig" />
</template>

<script setup>
import { formConfig } from "./config";
</script>
```

## 贡献指南

1. Fork 本仓库
2. 创建新的特性分支
3. 提交您的更改
4. 推送到分支
5. 创建 Pull Request

## 许可证

[MIT](LICENSE)
