var webpack = require('webpack');
var path = require('path');


module.exports = {

 entry: path.join(__dirname, 'src'),

  output: {
    library: 'ReactPlan',
    libraryTarget: 'umd',
    path: path.join(__dirname, 'dist'),
    filename: 'index.js'
  },

  externals: {
    'react': {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React'
    }
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      }
    ]
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]

}