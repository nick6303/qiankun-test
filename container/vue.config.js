const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:
    process.env.NODE_ENV === 'development' ? '/' : '/mywork/qiankun-example',
  devServer: {
    port: 8080,
  },
})
