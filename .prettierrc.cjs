/** @type {import("prettier").Config} */
module.exports = {
  // 句尾不添加分号
  semi: false,
  // 使用单引号代替双引号
  singleQuote: true,
  // 在 JSX 中使用单引号代替双引号
  jsxSingleQuote: true,
  // 缩进字节数
  tabWidth: 2,
  // 超过最大值换行
  printWidth: 80,
  // 缩进不使用 tab，使用空格
  useTabs: false,
  // (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  arrowParens: 'avoid',
  // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  bracketSpacing: true,
  // 尾随逗号
  trailingComma: 'all',
  // 代码超出是否要换行
  proseWrap: 'never',
}
