// 云函数入口文件
const cloud = require('wx-server-sdk')
const poetry = require("./controller");

const api = {
  poetry: new poetry()
}

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
exports.main = async (event, context) => {
  const { controller, action, data={} } = event
  const result = await api[controller][action](data)
  return result
}