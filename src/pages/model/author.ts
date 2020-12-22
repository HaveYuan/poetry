
import { requestCloud }  from '@/utils/cloudFn'

export default {
  namespace: 'author',

  state: {
    authorInfo: {},
    hasAuthor: false, // 是否有该作者信息
  },

  effects: {
    *authorApi({payload, callback}, {call, put}) {
      requestCloud({
				clounFnName: 'poetry',
				controller: 'poetry',
        action: payload.action,
        data: payload.data
      }).then((res:any) => {
        callback(res)
      })
    },

    *searchAuthor({payload, callback}, {call, put}) {// 查询作者相关信息
      const getGuthorFn = function() {
        return requestCloud({
          clounFnName: 'poetry',
          controller: 'poetry',
          action: 'searchAuthor',
          data: payload.data
        })
      }

      const res = yield call(getGuthorFn, payload.data)

      if(res.data.length>0) {
        // 保存作者信息
        yield put({
          type: 'save',
          payload: {
            authorInfo: res.data[0],
            hasAuthor: true
          }
        });
      }
    }
  },

  reducers: {
    save(state, {payload}) {
      return {
        ...state,
        ...payload
      }
    }
  }

}