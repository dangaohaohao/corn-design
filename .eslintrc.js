/**
 * eslint 配置: @see https://eslint.org/docs/user-guide/configuring/language-options
 * .eslintrc.js 输出一个配置对象
 * .eslintrc.yaml 定义配置的结构
 * .eslintrc.yml 定义配置的结构
 * .eslintrc.json 定义配置的结构，允许 JavaScript 风格的注释
 * package.json 在 package.json 里创建一个 eslintConfig属性，在那里定义你的配置
 */

module.exports = {
  // env 关键字指定你想启用的环境，并设置它们为 true
  env: {
    // 启用浏览器
    browser: true,
    // 启用node环境
    node: true,
    // 引入的新es2021环境
    es2021: true,
  },
  /**
   * globals 配置属性设置为一个对象，该对象包含以你希望使用的每个全局变量
   *      对应的值设置为 "writable" 以允许重写变量
   *      "readonly" 不允许重写变量
   */
  globals: {},
  /**
   * 共享配置旨在与文件extends功能一起使用.eslintrc @see https://eslint.org/docs/developer-guide/shareable-configs
   * plugin与extend的区别：extend提供了eslint现有规则的一系列预设, plugin则提供了除预设之外的自定义规则
   */
  extends: [
    // 该配置项启用一系列核心规则，这些规则报告一些常见问题，即在(规则页面)中打勾的规则
    'eslint:recommended',
    // eslint-plugin-react 的 可共享配置包 plugin：包名/配置名称
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  //  指定解析器选项
  parserOptions: {
    // 指示您要使用哪些其他语言功能
    ecmaFeatures: {
      //允许在全局作用域下使用return语句
      globalReturn: false,
      //启用全局严格模式（如果ecmaVersion大于等于5）
      impliedStrict: false,
      // jsx-启用JSX
      jsx: true,
    },
    // 指定要使用的ECMAScript语法的版本 2021（与12相同）, 默认为5
    ecmaVersion: 12,
    // sourceType-设置为"script"（默认），或者"module"代码在ECMAScript模块中
    sourceType: 'module',
  },
  // plugins 关键字来存放插件名字的列表。插件名称可以省略 eslint-plugin- 前缀
  plugins: ['react', '@typescript-eslint', 'prettier'],
  /**
   * 配置规则 @see https://eslint.org/docs/rules/
   *      "off" 或 0 - 关闭规则
   *      "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
   *      "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
   */
  rules: {},
};
