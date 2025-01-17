
import { requestCloud }  from '@/utils/cloudFn'
import showToast from '@/utils/showToast';


export default {
  namespace: 'poetryDetail',

  state: {
    poetryInfo: {},
  },

  effects: {
    *poetryApi({payload, callback}, {call, put}) {
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