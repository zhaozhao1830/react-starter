const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const antdTheme = require('../common/antd-theme')
const base = require('./webpack.config.base')

const { ProvidePlugin, DefinePlugin } = webpack

const configPath = path.resolve(__dirname, '../config/standalone.js')

const target = process.env.NODE_ENV
console.log('debug in enviroment ', target)

module.exports = (env) => {
  const field = (env && env.field) || 'default'
  console.log('-------------  Target field:', field, ' ----------------')
  const fieldConfigPath = `${path.resolve(__dirname, '../config/fields')}/${field}.json`

  return merge(base, {
    optimization: {
      minimize: true,
      minimizer: [
        new CssMinimizerPlugin(),
        new TerserPlugin({
          test: /\.js(x?)$/i,
          extractComments: false
        })
      ]
    },
    mode: 'production',
    entry: {
      bundle: path.resolve(__dirname, '../src/index.js')
    },
    output: {
      filename: '[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, '../dist'),
      publicPath: '/transfusion/i18n/dist/'
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
      new DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['**/*', '!ico/**', '!font/**', '!logos/**', '!styles/**', '!js/**']
      }),
      new HtmlWebpackPlugin({
        inject: true,
        filename: path.resolve(__dirname, '../index.html'),
        template: path.resolve(__dirname, '../indexTemplate.html')
      }),
      new ProvidePlugin({
        fieldConfig: fieldConfigPath,
        globalConfig: configPath
      }),
      // new BundleAnalyzerPlugin({
      //   openAnalyzer: false
      // }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css'
      })
    ]
  })
}
