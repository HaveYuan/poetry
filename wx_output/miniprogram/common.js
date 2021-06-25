(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/utils/log.ts":
/*!**************************!*\
  !*** ./src/utils/log.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = logApi;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function logApi(name, logObj) {
  var time = formateTime(new Date().getTime());
  var storageRes = _taroWeapp2.default.getStorageSync('openid');
  var system_info = _taroWeapp2.default.getSystemInfoSync();
  _taroWeapp2.default.reportAnalytics(name, {
    time: time,
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
    return time;
  }
  var date = new Date(time);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':');
}
function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : '0' + n;
}

/***/ }),

/***/ "./src/utils/showToast.ts":
/*!********************************!*\
  !*** ./src/utils/showToast.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = showToast;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function showToast(params) {
  _taroWeapp2.default.showToast({
    title: params.title,
    duration: params.duration || 2000,
    icon: params.icon || 'none'
  });
}

/***/ })

}]);