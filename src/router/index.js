import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layout/index.vue";
// const routes = [];

// 自动生成路由文件
let pagesMoudles = import.meta.glob("../views/**/page.js", {
  eager: true,
  import: "default",
});

// 导入组件模块
let comMoudles = import.meta.glob("../views/**/index.vue");

// 处理路径和父子关系的函数
function processRoutes(modules) {
  const routeMap = new Map();

  // 第一步：收集所有路由
  Object.entries(modules).forEach(([pagePath, config]) => {
    let path = pagePath.replace("../views", "").replace("/page.js", "");
    path = path === "/" ? "/" : path;

    const pathSegments = path.split("/").filter(Boolean);
    const name = pathSegments.join("-") || "home";
    const component = pagePath.replace("page.js", "index.vue");

    // 创建路由对象
    const route = {
      path: `/${pathSegments[pathSegments.length - 1]}` || "/",
      name,
      component: comMoudles[component],
      meta: {
        ...config,
        fullPath: path, // 保存完整路径用于构建父子关系
      },
      children: [],
    };

    routeMap.set(path, route);
  });

  // 第二步：构建父子关系
  const rootRoutes = [];
  routeMap.forEach((route, path) => {
    if (path === "/") {
      rootRoutes.push(route);
      return;
    }

    // 查找父路由
    const parentPath = path.substring(0, path.lastIndexOf("/"));

    const parent = routeMap.get(parentPath);

    if (parent) {
      parent.children.push({
        ...route,
      }); // 直接使用完整的路由对象
    } else {
      rootRoutes.push(route);
    }
  });

  return rootRoutes;
}

console.log(processRoutes(pagesMoudles), "processRoutes");
// 生成路由配置
const routes = [
  {
    path: "/",
    component: Layout,
    children: processRoutes(pagesMoudles),
    meta: {
      name: "首页",
    },
    redirect: processRoutes(pagesMoudles)[0].path,
  },
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
  },
];

// 用于调试
// console.log("Generated Routes:", JSON.stringify(routes, null, 2));

export const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
