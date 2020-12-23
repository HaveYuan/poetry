import Taro from '@tarojs/taro';

export default function logApi(name:string, logObj:logObj) {
  const time = formateTime(new Date().getTime());
  const storageRes:string = Taro.getStorageSync('openid');
  let system_info = Taro.getSystemInfoSync();
  Taro.reportAnalytics(name, {
    time,
    system_info: JSON.stringify(system_info),
    window_width: system_info.windowWidth || '',
    window_height: system_info.windowHeight || '',
    model: system_info.model || '',
    version: system_info.version || '',
    openid: storageRes || '',
    action: logObj.action,
    catalog: logObj.catalog,
    poetry: logObj.poetry,
    author_name: logObj.author_name,
    inputVal: logObj.inputVal
  });
}

function formateTime(time) {
  if (typeof time !== 'number' || time < 0) {
    return time
  }
  const date = new Date(time);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : '0' + n
}