(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/utils/cloudFn.ts":
/*!******************************!*\
  !*** ./src/utils/cloudFn.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestCloud = requestCloud;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function requestCloud(params) {
  return new Promise(function (resolve, reject) {
    var clounFnName = params.clounFnName,
        controller = params.controller,
        action = params.action,
        data = params.data;

    _taroWeapp2.default.cloud.callFunction({
      name: clounFnName,
      data: {
        controller: controller,
        action: action,
        data: data
      },
      success: function success(res) {
        resolve(res.result);
      },
      fail: function fail(err) {
        reject(err);
      }
    });
  });
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