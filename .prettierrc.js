// .prettierrc.js (ファイル名を変更し、内容をJS形式にする)
module.exports = {
  semi: true, // 文末にセミコロンを付ける
  singleQuote: true, // シングルクォートを使用する (JSXを除く)
  jsxSingleQuote: false, // JSX ではダブルクォートを使用する
  trailingComma:
    'es5', // 末尾のカンマを ES5 互換の方法で追加 (オブジェクト、配列など)
  printWidth: 80, // 1行の最大文字数
  tabWidth: 2, // タブの幅（スペース数）
  useTabs: false, // タブの代わりにスペースを使用する
  arrowParens:
    'always',
  endOfLine: 'lf',
  plugins: [
    'prettier-plugin-tailwindcss',
  ],
};
