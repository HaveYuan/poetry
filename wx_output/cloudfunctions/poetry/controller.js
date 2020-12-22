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

  failMsg() {
    return {
      code: -1,
      msg: '请求失败'
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
    try {
      const _ = db.command;
      const data = await db.collection(params.tag).where(
        {
          _id: _.eq(params._id)
        }
      ).get();
      const poetryInfo = {poetryInfo: data.data[0]};
      return await this.success(poetryInfo);
    }catch(err) {
      console.log(err)
      return await this.failMsg(err);
    }

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
            _.eq('辛弃疾'),
            _.eq('范仲淹')
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
      const isReg = params.isReg || true; // 是否模糊搜索，默认是
      if(data.data.length === 0 && isReg) {
        const _data = await db.collection('author').where(
          {
            name: db.RegExp({
              regexp: params.author,
              options: 'i',
            })
          }
        ).get();
        return await this.success(_data);
      }
      return await this.success(data);
    }catch(err) {
      console.log(err)
      return await this.failMsg(err);
    }
  }

  async getCode(params) {// 获取小程序码
    console.log(params)
    try {
      const result = await cloud.openapi.wxacode.getUnlimited({
          scene: params.scene,
          page: params.pgae,
          width: params.width || 100,
          autoColor: params.autoColor || false,
          lineColor: params.lineColor || {"r":0,"g":0,"b":0},
          isHyaline: params.isHyaline || false
      })
      return this.success(result);
    } catch (err) {
      console.log(err)
      return await this.failMsg();
    }
  }
}

module.exports = poetry;