module.exports = {
  devServer: {
    // devServer在发送请求时，会先走到before指定的函数中进行处理，如果before中没有对应的接口路由，才会请求外网等
    before: require('./mock/index.js')
  }
}