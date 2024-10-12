/**
 * 引入一些配置 然后再引入到main.js中
 */

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

export function configureApp(app) {
    app.use(ElementPlus)
}