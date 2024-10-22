import Taro from '@tarojs/taro';

export default function showToast(params:ToastParams) {
  Taro.showToast({
    title: params.title,
    duration: params.duration || 2000,
    icon: params.icon || 'none'
  });
}