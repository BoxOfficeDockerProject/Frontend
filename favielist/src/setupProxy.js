// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {

  //CORS ERROR
    app.use(
        '/movie',
        createProxyMiddleware({
          target: 'http://localhost:8080',
          changeOrigin: true,
        })
      );
      
      app.use(
        '/user',
        createProxyMiddleware({
          target: 'http://localhost:8080',
          changeOrigin: true,
        })
      );

  app.use(
    '/v1',
    createProxyMiddleware({
      target: 'https://openapi.naver.com',
      changeOrigin: true,
    })
  );
};