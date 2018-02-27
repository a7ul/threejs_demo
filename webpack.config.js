const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: './index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    index: 'index.html',
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  plugins: [
    new UglifyJSPlugin(),
    new CompressionPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|dae)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },
};
