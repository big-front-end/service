// // 生产环境
// const webapckMerge = require('webpack-merge');
// const baseWebpackConfig = require('./webpack.config.base');
// const TerserWebpackPlugin = require('terser-webpack-plugin');

// const webpackConfig = webapckMerge(baseWebpackConfig, {
//     mode: 'production',
//     stats: { children: false, warings: false },
//     optimization: {
//         minimize: true,
//         minimizer: [
//             new TerserWebpackPlugin({
//                 terserOptions: {
//                     warnings: false,
//                     compress: {
//                         warnings: false,
//                         dead_code: true,
//                         drop_console: false,
//                         drop_debugger: true,
//                     },
//                     output: {
//                         beautify: false,
//                         comments: false,
//                     },
//                     mangle: true
//                 },
//                 parallel: true,
//                 sourceMap: false,
//             }),
//         ],
//         splitChunks: {
//             cacheGroups: {
//                 comments: {
//                     name: 'commons',
//                     chunks: 'initial',
//                     minChunks: 2,
//                     enforce: true
//                 }
//             }
//         }
//     },
// })

// module.exports = webpackConfig;

const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config.base')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  stats: { children: false, warnings: false },
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
          warnings: false,
          compress: {
            warnings: false,
            // 是否注释掉console
            drop_console: false,
            dead_code: true,
            drop_debugger: true
          },
          output: {
            comments: false,
            beautify: false
          },
          mangle: true
        },
        parallel: true,
        sourceMap: false
      })
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 3,
          enforce: true
        }
      }
    }
  }
})

module.exports = webpackConfig