const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcDirectory = [
  path.join(process.cwd(), 'src'),
  path.join(process.cwd(), 'demo')
];

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './demo/index.js'
  ],

  output: {
    publicPath: '/',
    path: 'build',
    filename: 'bundle.js'
  },

  devtool: 'eval-source-map',

  module: {
    loaders: [
      {
        test: /\.woff$/,
        loader: 'url?limit=100000',
        include: srcDirectory
      },
      {
        test: /\.css$/,
        loader: 'style!css',
        include: srcDirectory
      },
      {
        test: /\.less$/,
        loader: 'style!css!less',
        include: srcDirectory
      },
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        include: srcDirectory
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file',
        include: srcDirectory
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      __DEV__ : (process.env.NODE_ENV !== 'production'),
      __VERSION__ : JSON.stringify(require('./package.json').version)
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'React Plan Demo',
      template: path.join('demo', 'index.tpl.html')
    })
  ],

  devServer: {
    publicPath: '/',
    contentBase: 'build',
    host: '0.0.0.0',
    port: 8080,
    hot: true,
    historyApiFallback: true,
    progress: true,
    colors: true,
    noInfo: true
  }
};
