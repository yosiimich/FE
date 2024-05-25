const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/v1',
    createProxyMiddleware({
      target: 'http://34.22.93.189:8080', // 프록시를 통해 요청을 보낼 대상 서버의 주소
      changeOrigin: true, // 변경된 원본 주소를 요청 헤더에 포함
    })
  );
};
