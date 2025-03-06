import { createProxyMiddleware } from 'http-proxy-middleware';

export default (app) => {
  app.use(
    createProxyMiddleware('/search/blog', {
      target: 'https://twcommunity-server.store',
      changeOrigin: true,
    }),
  );
};