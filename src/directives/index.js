// 自定义指令
import { VRule } from "./VRule"
export const Directive = (app) => {
    app.directive("rule", VRule);
}