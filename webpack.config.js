/* eslint-disable */
const path = require('path')

module.exports = {
  mode:process.env.NODE_ENV,
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
    library: 'reactP5',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true,
    globalObject: 'this'
  },
  externals: {
    react: 'react',
    React: "React",
    react: "React",
    "window.react": "React",
    "window.React": "React"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
}
