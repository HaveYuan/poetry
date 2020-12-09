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
      msg: '请求失败',
      ...data
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

  async getPoetryList(params) {// 获取诗词
    const pageSize = params.pageSize || 20;
    const pageNo = params.pageNo || 1;
    const skip = (pageNo-1)*pageSize;
    try {
      const resTotal = await db.collection(params.tag).count();
      const total = resTotal.total;
      const totalPage = Math.ceil(total/pageSize)

      const data = await db.collection(params.tag).field({
        paragraphs: false
      })
      .skip(skip)
      .limit(pageSize)
      .get();

      const obj = {
        total,
        pageSize,
        pageNo,
        totalPage,
        ...data
      }

      return await this.success(obj);
    }catch(err) {
      return await this.failMsg(err);
    }
  }

  async getPoetryDetail(params) {// 获取单条诗词内容


  }
}

module.exports = poetry;