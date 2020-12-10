

export default {
  namespace: 'poetryDetail',

  state: {
    poetryInfo: {

    },
    tag: ''
  },

  effects: {

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