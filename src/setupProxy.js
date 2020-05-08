const proxy = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/method',
    proxy({
      target: 'https://api.vk.com',
      changeOrigin: true,
    })
  );
};
