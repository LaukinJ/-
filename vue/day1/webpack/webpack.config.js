const path = require('path');

module.exports = {
    mode: 'development', // 可以设置为开发模式或者生产模式 development和production
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};