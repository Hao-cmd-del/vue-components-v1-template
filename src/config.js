/**
 * 引入一些配置 然后再引入到main.js中
 */

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "@/assets/styles/reset.css";
import pinia from "@/store";

export function configureApp(app) {
  app.use(ElementPlus);
  app.use(pinia);
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }
}
