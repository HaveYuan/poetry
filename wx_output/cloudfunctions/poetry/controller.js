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

      const data = await db.collection(params.tag)
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

  async getHotAuthor(params) {// 获取热门作者
    try {
      const _ = db.command;
      const data = await db.collection('author').where(
        {
          name: _.or([
            _.eq('李白'),
            _.eq('杜甫'),
            _.eq('王安石'),
            _.eq('苏轼'),
            _.eq('李清照'),
            _.eq('欧阳修'),
            _.eq('陆游'),
            _.eq('杜牧'),
            _.eq('柳永'),
            _.eq('李煜'),
          ])
        }
      ).get();
      return await this.success(data);
    }catch(err) {
      return await this.failMsg(err);
    }
  }

  async searchAuthor(params) {// 搜索作者
    try {
      const _ = db.command;
      const data = await db.collection('author').where(
        {
          name: _.eq(params.author)
        }
      ).get();
      return await this.success(data);
    }catch(err) {
      return await this.failMsg(err);
    }
  }
}

module.exports = poetry;