/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
// import { merge } from 'webpack-merge';

const { merge } = require('webpack-merge');
const path = require('path');
const postcssImport = require('postcss-import');
const webpack = require('webpack');

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, '../src'),
};

process.env.BABEL_ENV = TARGET;

process.traceDeprecation = true;

const common = {
  entry: [
    PATHS.app,
  ],

  resolve: {
    symlinks: false,
    fallback: {},
    extensions: ['.jsx', '.js', '.json', '.css'],
    modules: ['node_modules', PATHS.app],
  },
  resolveLoader: {
    modules: ['node_modules', PATHS.app],
  },
  module: {
    rules: [
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'asset/resource',
      }, {
        test: /\.png/,
        type: 'asset/resource',
      }, {
        test: /\.jpg/,
        type: 'asset/resource',
      }, {
        test: /\.mdx?$/,
        use: ['babel-loader', '@mdx-js/loader']
      }, {
        test: /\.js$|jsx/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          }
        ]
      }, {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },

  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          postcssImport({
            addDependencyTo: webpack,
          }),
        ],
      },
    }),
  ],
};

if (TARGET === 'dev' || TARGET === 'start') {
  console.log('DEVELOPMENT');
  const development = require('./dev.config');
  module.exports = merge(development, common);
}

if (TARGET === 'stage') {
  console.log('STAGE');
  const stage = require('./stage.config');
  module.exports = merge(stage, common);
}

if (TARGET === 'build' || !TARGET) {
  console.log('PRODUCTION');
  const production = require('./prod.config');
  module.exports = merge(production, common);
}

if (TARGET === 'test') {
  console.log('TEST');
  const development = require('./dev.config');
  module.exports = merge(development, common);
}
