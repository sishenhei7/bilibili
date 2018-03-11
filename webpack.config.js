// webpack.config.js
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'none',

  entry: {
    index: './view/entry.js'
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    //publicPath: '/assets/', //相对路径替换
    filename: 'bundle-[hash].js'
  },

  devServer: {
    port: 3030, //端口
    contentBase: './public', //本地服务器所加载的页面所在的目录
    historyApiFallback: true, //不跳转
    inline: true, //实时刷新
    hot: true
  },

  watchOptions: {
    poll: 1000, //监测修改的时间(ms)
    aggregateTimeout: 500, //防止重复按键，500毫秒内算按一次
    ignored: /node_modules/, //不监测
  },

  module: {
    rules: [
      {
        test: /\.jsx|\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true, //启用缓存
            plugins: ['transform-runtime']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false, //是否启用css-module
              localIdentName: '[name]__[local]' //类名转换
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')
              ]
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use:[
          'url-loader?limit=8192&name=[name]-[hash:5].[ext]',
          {
            loader: 'image-webpack-loader',
            options: {
                    mozjpeg: {
                      progressive: true,
                      quality: 65
                    },
                    optipng: {
                      enabled: false,
                    },
                    pngquant: {
                      quality: 80,
                      speed: 4
                    },
                    gifsicle: {
                      interlaced: false,
                    },
                    webp: {
                      quality: 75
                    }
            }
          }
        ]
      }
    ]
  },
  plugins: [
      new webpack.BannerPlugin('This file is created by sishenhei7'),
      //使用模板生成html文件
      new HtmlWebpackPlugin({
        filename:'index.html',
        template: 'ejs-compiled-loader!model/template.html',
        title:'this is index',
        chunks: ['index']
      }),
      new webpack.HotModuleReplacementPlugin() //热加载插件
      //new ExtractTextPlugin('styles.css') //把CSS文件分离出来
    ]
};
