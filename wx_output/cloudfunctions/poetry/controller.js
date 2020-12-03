const cloud = require("wx-server-sdk");

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database({
  env: cloud.DYNAMIC_CURRENT_ENV
});

class resMsg {
  success(data) {
    const obj = Object.assign({}, {code:0,msg:'调用成功'}, data)
    return obj;
  }

  failMsg(data) {
    return {
      code: -1,
      msg: '调用失败',
      data
    }
  }
}

class poetry extends resMsg {
  async allCategories(params) {// 获取所有诗词类别
    try {
      const data = await db.collection('catalog').get();
      return await this.success(data);
    }catch(err) {
      return await this.failMsg(err);
    }
  }
}

module.exports = poetry;