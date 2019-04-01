const path = require('path')

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    libraryTarget: 'umd', // 采用通用模块定义
    libraryExport: 'default', // 兼容 ES6(ES2015) 的模块系统、CommonJS 和 AMD 模块规范
    globalObject: 'this', // 兼容node和浏览器运行，避免window is not undefined情况
    library: 'time',
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader'
      }
    ]
  }
}
