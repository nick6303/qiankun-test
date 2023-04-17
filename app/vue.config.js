const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:
    process.env.NODE_ENV === 'development'
      ? '/'
      : '/mywork/qiankun-example/subapp/app/',
  configureWebpack: {
    output: {
      library: 'micro-app-[name]',
      libraryTarget: 'umd',
      chunkLoadingGlobal: 'webpackJsonp_[name]',
    },
  },

  devServer: {
    port: 8081,
    headers: {
      'Access-Control-Allow-Origin': '*', // 主应用获取子应用时跨域响应头
    },
  },
})
