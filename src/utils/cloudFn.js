import Taro from '@tarojs/taro'

export function requestCloud(params) {
  return new Promise((resolve, reject) => {
    const {clounFnName, controller, action, data} = params;
    Taro.cloud.callFunction({
      name: clounFnName,
      data: {
        controller,
        action,
        data
      },
      success: res => {
        resolve(res.result);
      },
      fail: err => {
        reject(err);
      }
    })
  })
}