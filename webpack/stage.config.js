/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable array-callback-return */
const path = require('path');
const webpack = require('webpack');
const fs = require('fs');

const currentPath = path.join(__dirname);
const basePath = `${currentPath}/env/app/`;
const envPath = `${basePath}.env.json`;
const env = fs.readFileSync(envPath, 'utf8');
const jsonEnv = JSON.parse(env);
const envKeys = {};
envKeys['process.env.NODE_ENV'] = '"stage"';
Object.keys(jsonEnv).map((key) => {
  envKeys[`process.env.${key}`] = JSON.stringify(jsonEnv[key]);
}, {});

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const PATHS = {
  build: path.join(__dirname, '../dist'),
};

module.exports = {

  mode: 'production',

  stats: {
    colors: false,
    hash: true,
    timings: true,
    assets: true,
    chunks: true,
    chunkModules: true,
    modules: true,
    children: true,
  },

  output: {
    path: PATHS.build,
    publicPath: '/dist/',
    filename: '[name].[contenthash].js',
  },

  entry: ['./src/index'],

  watch: false,
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 1,
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: 'dist/',
          },
        }, {
          loader: 'css-loader',
        }],
      }, {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'postcss-loader',
          options: {
            plugins() {
              return [
                require('autoprefixer'),
              ];
            },
          },
        }, {
          loader: 'sass-loader',
        }],
      }, {
        test: /\.less$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'less-loader',
        }],
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin(envKeys),
    new webpack.NoEmitOnErrorsPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      title: 'caching',
      inject: true,
      template: './prod.html',
      filename: '../public/index.html',
    }),
    new CompressionPlugin(),
  ],
};
