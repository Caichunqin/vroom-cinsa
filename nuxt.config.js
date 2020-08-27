const LessFunction = require("less-plugin-functions");
const LessEst = require("less-plugin-est");
const title = process.env.npm_package_company + "-虚拟展厅";
const companyEn = process.env.npm_package_companyEn;
module.exports = {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "renderer", content: "webkit" },
      { name: "format-detection", content: "telephone=no,email=no" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
      { name: "author", content: "DigitalGD" },
      { name: "keywords", content: "2020广东省网络安全宣传周" },
      { "http-equiv": "X-UA-Compatible", content: "IE=edge,chrome=1" },
      { name: "robots", content: "index,follow" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "//s1.pstatp.com/cdn/expire-1-M/minireset.css/0.0.2/minireset.min.css",
      },
    ],
    script: [
      {
        // 华为WEB播放器SDK
        src:
          "//media-cache.huaweicloud.com/video/hwplayer/1.4.0/dist/hwplayer.js",
      },
      {
        src: "//s0.pstatp.com/cdn/expire-1-M/jquery/1.12.4/jquery.min.js",
      },
      {
        // 浏览器版本检测，低版本提示更新
        src: "//static.gdzwfw.gov.cn/mhyy/browser-upgrade/index.js",
      },
      {
        // 用于处理页面转发，如手机端打开//waz.cagd.gov.cn/vroom/digitalgd 转发 //waz.cagd.gov.cn/vroom/digitalgd/h5
        src: "//waz.cagd.gov.cn/assets/middleware.js",
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ["vue-photo-preview/dist/skin.css", "swiper/swiper-bundle.css"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: "@/plugins/vue-photo-preview", ssr: false },
    { src: "@/plugins/vue-awesome-swiper", ssr: false },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    // '@nuxtjs/stylelint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extend(config, ctx) {},
    crossorigin: true,
    extractCSS: true,
    optimizeCSS: true,
    publicPath: `/assets/${companyEn}/`,
    loaders: {
      less: {
        lessOptions: {
          plugins: [new LessFunction(), new LessEst()],
          javascriptEnabled: true,
        },
      },
    },
  },
};
