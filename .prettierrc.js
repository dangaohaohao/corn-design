module.exports = {
  // 使用共享配置
  // ...require("@company/prettier-config"),
  tabWidth: 2,
  singleQuote: true,
  overrides: [
    {
      files: '.prettierrc',
      options: { parser: 'json' },
    },
  ],
};
