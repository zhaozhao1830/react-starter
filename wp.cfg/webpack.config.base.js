const path = require('path')
const webpack = require('webpack')

module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
          name: 'vendors'
        },
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)/,
          priority: -8,
          reuseExistingChunk: true,
          name: 'react'
        },
        antd: {
          test: /[\\/]node_modules[\\/]antd/,
          priority: -8,
          reuseExistingChunk: true,
          name: 'antd'
        },
        utils: {
          test: /[\\/]node_modules[\\/](lodash|moment|echarts)/,
          priority: -9,
          reuseExistingChunk: true,
          name: 'utils'
        }
      }
    }
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'images/[hash:20].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    enforceExtension: false,
    alias: {
      '@libs': path.join(__dirname, '../libs'),
      '@src': path.join(__dirname, '../src'),
      '@common': path.join(__dirname, '../common')
    },
    modules: [
      path.join(__dirname, '../src'),
      path.join(__dirname, '../libs'),
      path.join(__dirname, '../node_modules')
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      _: 'lodash',
      React: 'react',
      PropTypes: 'prop-types'
    }),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/)
  ]
}
