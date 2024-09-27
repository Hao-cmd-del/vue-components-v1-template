import { createRouter, createWebHistory } from 'vue-router'

// const routes = [];

// 自动生成路由文件
let pagesMoudles = import.meta.glob('../views/**/page.js', {
    eager: true, // eager: true     
    import: 'default'
})

// 导入组件模块
let comMoudles = import.meta.glob('../views/**/index.vue')

console.log(comMoudles, 'comMoudles');


// console.log(pagesMoudles, 'pagesMoudles');
const routes = Object.entries(pagesMoudles).map(([pagePath, config]) => {
    let path = pagePath.replace('../views', '').replace('/page.js', '')
    path = path || '/'
    const name = path?.split('/').filter(Boolean).join('-')
    // console.log(pagePath, 'pagePath');
    const component = pagePath.replace('page.js', 'index.vue')
    console.log(component, 'component');

    return {
        path, // 路由路径
        name,
        component: comMoudles[component],
        meta: config
    }
})
console.log(routes, 'routes');




export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), // 使用正确的环境变量
    routes, // 使用定义好的路由数组
})

export default router;