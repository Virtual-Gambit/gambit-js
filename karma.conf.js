// const path = require('path');
const testConfig = require('./webpack/common.config');

// process.env.CHROME_BIN = path.join(__dirname, '../');
process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = (config) => {
  config.set({
    client: {
      mocha: {
        timeout: 20000 // 20 seconds - upped from 2 seconds
      }
    },
    basePath: 'src',
    singleRun: true,
    frameworks: ['mocha', 'chai', 'sinon', 'webpack'],
    plugins: [
      'karma-chrome-launcher',
      'karma-webpack',
      'karma-mocha',
      'karma-chai',
      'karma-sinon',
    ],
    browsers: ['ChromeHeadless'],
    mode: 'development',
    files: [
      {
        pattern: 'assets/logo.png',
        watched: false,
        included: false,
        served: true
      },
      // VIEWS
      'test/views/public.test.spec.js',
    ],
    preprocessors: {
      // VIEWS
      'test/views/public.test.spec.js': ['webpack'],
    },
    proxies: {
      '/test/dummy.png': '/base/assets/logo.png',
    },
    webpack: testConfig,
    webpackMiddleware: {
      stats: {
        color: true,
        chunkModules: false,
        modules: false,
      },
    },
    customLaunchers: {
      Chrome_with_debugging: {
        base: 'ChromeHeadless',
        // chromeDataDir: path.resolve(__dirname, '../')
      }
    }
  });
};
