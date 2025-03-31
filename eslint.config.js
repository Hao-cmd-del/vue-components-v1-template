import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    files: ["**/*.vue"],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
  {
    /**
     * "off" 或 0    ==>  关闭规则
     * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
     * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
     */
    rules: {
      // 'semi': [2, 'never'], // 不使用分号
      "prefer-template": 1, // 建议使用模板字符串
      "prefer-destructuring": [
        1,
        { object: true, array: false }, // 建议使用解构赋值
      ],
      "no-console": "warn", // 禁止使用console

      "no-var": 2, // 要求使用 let 或 const 而不是 var
      // "no-undef": 2, // 禁止使用未定义的变量
      "no-multi-spaces": 2, // 不允许多个连续的空格
      "no-duplicate-imports": 2, // 禁止重复导入
      "no-duplicate-case": 2, //switch中的case标签不能重复
      "no-empty": 2, //块语句中的内容不能为空
      "no-extra-bind": 2, //禁止不必要的函数绑定
      "default-case": 2, //switch语句最后必须有default
      "no-undef-init": 2, //变量初始化时不能直接给它赋值为undefined
      "no-undefined": 2, //不能使用undefined
      "no-unneeded-ternary": 2, //禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
      "for-direction": 2, // 禁止for循环中出现方向错误的迭代
      "no-compare-neg-zero": 2, // 禁止与-0比较
      "array-callback-return": 2, // 强制数组方法的回调函数中有返回值
      "block-scoped-var": 2, // 限制块语句中声明的变量
      "no-redeclare": "error", // 禁止重复声明变量
      "no-shadow": 2, // 禁止变量声明与外层作用域的变量同名
      "no-use-before-define": 2, // 禁止在变量定义之前使用它们

      "vue/no-mutating-props": "off", // 不允许组件 prop的改变
      "vue/multi-word-component-names": "off", // 组件名称必须多单词
      camelcase: 2, //强制驼峰法命名
      "no-else-return": 2, //如果if语句里面有return,后面不能跟else语句
      "no-case-declarations": 2, //禁止在case或default子句中出现词法声明
    },
  },
];
