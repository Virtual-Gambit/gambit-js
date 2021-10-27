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
envKeys['process.env.NODE_ENV'] = '"production"';
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

  performance: {
    hints: 'warning',
  },

  stats: {
    colors: false,
    hash: true,
    timings: true,
    assets: true,
    chunks: true,
    chunkModules: true,
    modules: true,
    children: true,
    errorDetails: true,
  },

  output: {
    path: PATHS.build,
    publicPath: '/',
    filename: '[name].[contenthash].js',
  },

  entry: ['./src/index'],

  watch: false,
  optimization: {
    minimize: true,
    minimizer: [() => ({ terserOptions: { mangle: false } })],
    runtimeChunk: 'single',
    moduleIds: 'deterministic',
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'node_vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
        }
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
        }, {
          loader: 'css-loader',
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
      template: path.join(__dirname, '../prod.html'),
      filename: 'index.html',
      path: PATHS.build,
    }),
    new CompressionPlugin(),
  ],
};
