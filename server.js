/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const http = require('http');
const express = require('express');
const httpProxy = require('http-proxy');
const path = require('path');

const proxy = httpProxy.createProxyServer({});

const app = express();

app.use(require('morgan')('short'));

(function initWebpack() {
  const webpack = require('webpack');
  const webpackConfig = require('./webpack/common.config');

  const compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    // noInfo: false,
    publicPath: webpackConfig.output.publicPath,
  }));

  app.use(require('webpack-hot-middleware')(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000,
  }));

  app.use(express.static(path.join(__dirname, '/')));
}());

app.all(/^\/api\/(.*)\/v1\/(.*)/, (req, res) => {
  proxy.web(req, res, { target: `http://${process.env.API_HOST || 'localhost'}:${process.env.API_PORT || 5002}` });
});

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

const server = http.createServer(app);
server.listen(process.env.PORT || 3002, () => {});
