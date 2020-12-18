import Taro from '@tarojs/taro'
import showToast from '@/utils/showToast';

export function requestCloud(params:requestCloudParams) {
  return new Promise((resolve) => {
    const {clounFnName, controller, action, data} = params;
    Taro.cloud.callFunction({
      name: clounFnName,
      data: {
        controller,
        action,
        data
      }
    }).then((res:any) => {
      if(res.result.code === 0) {
        resolve(res.result);
      }else {
        showToast({title:res.result.msg})
      }
    }).catch(err => {
      showToast({title: err.message});
    })
  })
}