import {create} from 'dva-core'
import createLoading from 'dva-loading'

let app: {use: (arg0: any) => void; model: (arg0: any) => any; start: () => void; _store: any; getStore: () => any; dispatch: any};
let store: {dispatch: any};
let dispatch: any;
let registered: boolean;

const createApp = (opt: {models: any[]; initialState: any }) => {

  app = create(opt);
  app.use(createLoading({}));

  if (!registered) opt.models.forEach(model => app.model(model));
  registered = true;
  app.start();

  const store = app._store;
  app.getStore = () => store;

  const dispatch = store.dispatch;
  app.dispatch = dispatch;

  return app
};

export default {
  createApp,
  getDispatch() {
    return app.dispatch
  },
  getStore() { // 这个是在非组件的文件中获取Store的方法, 不需要可以不暴露
    return app.getStore();
  },
}
