# Vue3 组件库模板

一个基于 Vue3、Element Plus 和 Vite 的现代化组件库开发模板。

## 🌟 特性

- 🚀 基于 Vue3 + Vite 构建，提供极速的开发体验
- 📦 集成 Element Plus UI 框架，提供丰富的组件支持
- 🎨 支持主题定制和布局配置
- 📱 响应式设计，完美适配移动端
- 🔐 内置权限管理系统
- 🧩 组件自动注册机制
- 📝 自动路由配置生成
- 🎯 封装常用表单组件
- 🔧 完整的开发工具链支持

## 🛠️ 技术栈

- **核心框架**：Vue3
- **构建工具**：Vite
- **UI 框架**：Element Plus
- **路由管理**：Vue Router
- **状态管理**：Pinia
- **样式处理**：Sass
- **代码规范**：ESLint + Prettier
- **版本控制**：Git

## 📁 项目结构

```
├── src/                    # 源代码目录
│   ├── assets/            # 静态资源文件
│   ├── components/        # 公共组件
│   ├── layout/           # 布局相关组件
│   ├── router/           # 路由配置
│   ├── store/            # Pinia 状态管理
│   ├── styles/           # 全局样式文件
│   ├── utils/            # 工具函数
│   └── views/            # 页面视图组件
├── public/                # 公共资源目录
├── .env                   # 环境变量配置
├── .env.dev              # 开发环境变量
├── vite.config.js        # Vite 配置文件
├── eslint.config.js      # ESLint 配置
├── .prettierrc           # Prettier 配置
└── package.json          # 项目依赖配置
```

## 🚀 快速开始

### 环境要求

- Node.js >= 16.0.0
- npm >= 7.0.0 或 yarn >= 1.22.0

### 安装依赖

```bash
# 使用 npm
npm install

# 使用 yarn
yarn install
```

### 开发环境运行

```bash
# 使用 npm
npm run dev

# 使用 yarn
yarn dev
```

### 生产环境构建

```bash
# 使用 npm
npm run build

# 使用 yarn
yarn build
```

## 📝 功能特性详解

### 1. 自动路由生成

系统会自动扫描 `views` 目录下的组件，根据目录结构生成路由配置：

```javascript
// 目录结构示例
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

### 2. 表单组件系统

内置多种常用表单组件，支持配置化使用：

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

### 3. 布局系统

提供灵活的布局配置：

- 可配置的侧边栏
- 响应式头部导航
- 面包屑导航
- 标签页导航
- 页面切换动画

## 🎨 主题定制

支持通过修改 SCSS 变量实现主题定制：

```scss
:root {
  --primary-color: #2b5dff;
  --menu-bg: #1a1f37;
  --header-bg: #ffffff;
  --main-bg: #f8f9fa;
}
```

## 📚 开发指南

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

## 🤝 贡献指南

1. Fork 本仓库
2. 创建新的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 📄 许可证

本项目采用 [MIT](LICENSE) 许可证

## 👥 作者

- 作者：[Mr.Hao]
- 邮箱：[19931845446@163.com]

## 🙏 致谢

感谢所有为本项目做出贡献的开发者们！
