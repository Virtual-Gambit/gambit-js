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
envKeys['process.env.NODE_ENV'] = '"development"';
Object.keys(jsonEnv).map((key) => {
  envKeys[`process.env.${key}`] = JSON.stringify(jsonEnv[key]);
}, {});

module.exports = {
  mode: 'development',

  devtool: 'source-map',

  entry: [
    'webpack-hot-middleware/client',
    './src/index',
  ],

  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }],
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin(envKeys),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
};
