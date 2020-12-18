const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database({
  env: cloud.DYNAMIC_CURRENT_ENV
});

exports.main = async () => {
  const wxContext = cloud.getWXContext()
  db.collection('user').where({
    openid: wxContext.OPENID
  }).get().then(res => {
    console.log(res)
    if(res.data.length === 0) {
      db.collection('user').add({
        data: {
          openid: wxContext.OPENID
        }
      })
    }
  })

  return {
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}