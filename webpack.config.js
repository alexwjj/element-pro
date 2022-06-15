
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'production',
  // 根据不同的执行环境配置不同的入口
  entry: './src/main.js',
  output: {
    // 修改打包出口，在最外级目录打包出一个index.js 文件，我们 import 默认会指向这个文件
    path: path.resolve(__dirname, './libs'),
    publicPath: '/libs/',
    filename: 'element-pro.js',
    library: 'element-pro', // 指定的就是你使用require时的模块名
    libraryTarget: 'umd', // libraryTarget会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的
    umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      // 它会应用到普通的 `.js` 文件
      // 以及 `.vue` 文件中的 `<script>` 块
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
  ]
}
