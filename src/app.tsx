import Taro, { Component, Config } from '@tarojs/taro'
import {Provider} from '@tarojs/redux'
import models from './models/index'
import dva from './utils/dva'
import Index from './pages/index'
import logApi from '@/utils/log'

import './app.scss'

const dvaApp = dva.createApp( {
  initialState: {},
  models
});  
const store = dvaApp.getStore();

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  componentDidMount () {
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init({
        // env: process.env.NODE_ENV === 'development' ? 'test-hhh' : '',
        env: 'test-hhh',
        traceUser: true
      })

      Taro.cloud.callFunction({
        name: 'login',
        complete: (res:any) => {
          console.log('callFunction test result: ', res)
          if(res.result.openid) {
            Taro.setStorageSync('openid', res.result.openid)
          }
        }
      })
    }

    const params:params = this.$router.params;
    const scene = params.query!['scene'];
    let action = '自主进入';

    if(params.query!['from'] === 'code') {
      action = '小程序码进入'
    }

    if(params.query!['is_share']) {
      action = '分享页面进入'
    }

    if(scene) {
      action = '分享海报进入'
    }

    // api上报
    logApi('load_page', {
      action: action
    })
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index/index',
      'pages/poetryList/poetryList',
      'pages/detailPage/detailPage',
      'pages/about/about',
      'pages/my/my',
      'pages/author/authorIndex/authorIndex',
      'pages/author/authorInfo/authorInfo',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    plugins: {
      'WechatSI': {
        'version': '0.3.3',
        'provider': 'wx069ba97219f66d99'
        }
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store} >
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
