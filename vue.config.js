const path = require('path');
// 載入 prerender-spa-plugin (第一步)
const PrerenderSPAPlugin = require('prerender-spa-plugin');
// 載入 PuppeteerRenderer (第二步)
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  assetsDir: 'static',
  configureWebpack: {
    resolve: {
      //配置别名
      alias: {
        assets: '@/assets',
        components: '@/components',
        router: '@/router',
        views: '@/views',
      },
    },
  },

  // configureWebpack(config) {
  //     if (process.env.NODE_ENV === 'production') {
  //         config.plugins.push(
  //             // 創建實例 (第三步)
  //             new PrerenderSPAPlugin({
  //                 staticDir: path.join(__dirname, 'dist'),
  //                 routes: ['/'],
  //                 renderer: new Renderer({
  //                     renderAfterDocumentEvent: 'render-event',
  //                 }),
  //             })
  //         );
  //     }
  // },
};
