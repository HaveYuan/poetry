

export default {
  namespace: 'poetryDetail',

  state: {
    poetryInfo: {},
    authorInfo: {},
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