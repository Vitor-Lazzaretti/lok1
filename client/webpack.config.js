const path = require("path");
const nodeExternals = require('webpack-node-externals');

console.log(__dirname);


module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, '../server/public/build'),
    filename: 'main.js'
  },
  target: 'node',
  mode: 'development',
  module: {
    rules: [{
      test: /\.js/,
      exclude: /node_modules/,
      use: "babel-loader"
    }]
  },
  externals: [nodeExternals()]
}