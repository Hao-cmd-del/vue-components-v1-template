// 自定义指令
import { VRule } from "./VRule"
import { VMove } from "./VMove"
import { VLazy } from "./VLazy";
export const Directive = (app) => {
    app.directive("rule", VRule);
    app.directive("move", VMove);
    app.directive("lazy", VLazy);

}