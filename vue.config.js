const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    hot: true,
    port: 8080,
  },
  publicPath: process.env.NODE_ENV === 'production' 
    ? '/resifund/' 
    : '/',
})
