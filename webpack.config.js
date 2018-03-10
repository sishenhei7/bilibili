// webpack.config.js
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'none',

  entry: {
    index: './view/entry.js'
  },

  output: {
    path: __dirname + '/build',
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
    poll: 1000,//监测修改的时间(ms)
    aggregateTimeout: 500,//防止重复按键，500毫秒内算按一次
    ignored: /node_modules/,//不监测
  },

  module: {
    rules: [
      {
        test: /\.jsx|\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader',
            options: {
              modules: false,
              localIdentName: '[name]__[local]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
      new webpack.BannerPlugin('This file is created by sishenhei7'),
      new HtmlWebpackPlugin({
        filename:'index.html',
        template: 'ejs-compiled-loader!model/template.html',
        title:'this is index',
        chunks: ['index']
      }),
      new webpack.HotModuleReplacementPlugin()//热加载插件
    ]
};
