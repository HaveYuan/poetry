
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