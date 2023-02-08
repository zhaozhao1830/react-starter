const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const base = require('./webpack.config.base')
const antdTheme = require('../common/antd-theme')
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const { DefinePlugin } = webpack

const configPath = path.resolve(__dirname, '../config/debug.js')
const serviceProxyTarget = 'http://192.168.1.205'
const proxyTarget = 'http://192.168.1.205'
// const proxyTarget = 'http://192.168.1.53:8080/transfusionbe'

const target = process.env.NODE_ENV
console.log('debug in enviroment ', target)

module.exports = (env) => {
  const field = (env && env.field) || 'default'
  console.log('-------------  Target field:', field, ' ----------------')
  const fieldConfigPath = `${path.resolve(__dirname, '../config/fields')}/${field}.json`

  return merge(base, {
    mode: 'development',
    devtool: 'source-map',
    entry: {
      bundle: path.resolve(__dirname, '../src/index.js')
    },
    output: {
      path: path.resolve(__dirname, '../dev/dist'),
      publicPath: '/drg/dist/'
    },
    devServer: {
      hot: true,
      static: {
        directory: path.resolve(__dirname, '../dev')
      },
      compress: true,
      historyApiFallback: true,
      // proxy https request to http server
      proxy: {
        '/authorization/api/web/**': {
          target: serviceProxyTarget,
          secure: false,
          changeOrigin: true
        },
        '/drgbe/api/web/**': {
          target: proxyTarget,
          secure: false,
          changeOrigin: true
        },
        '/oidcserver/token': {
          target: serviceProxyTarget,
          secure: false,
          changeOrigin: true
        }
      }
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                modules: {
                  localIdentName: '[name]__[local]__[hash:base64:10]'
                }
              }
            },
            {
              loader: 'postcss-loader'
            },
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  includePaths: [path.resolve(__dirname, '../src'), path.resolve(__dirname, '../libs')]
                }
              }
            },
            {
              loader: 'sass-resources-loader',
              options: {
                resources: [path.resolve(__dirname, '../common/styles/theme.scss')]
              }
            }
          ]
        },
        {
          test: /\.less$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'less-loader',
              options: {
                modifyVars: antdTheme,
                javascriptEnabled: true
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new ReactRefreshPlugin(),
      new MiniCssExtractPlugin(),
      new DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
      }),
      new webpack.ProvidePlugin({
        globalConfig: configPath,
        fieldConfig: fieldConfigPath
      })
    ],
    resolve: {
      alias: {}
    }
  })
}
