(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/author/authorIndex/authorIndex"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/author/authorIndex/authorIndex.tsx?taro&type=script&parse=PAGE&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/author/authorIndex/authorIndex.tsx?taro&type=script&parse=PAGE& ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _tslib = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _cloudFn = __webpack_require__(/*! ../../../utils/cloudFn */ "./src/utils/cloudFn.ts");

var _showToast = __webpack_require__(/*! ../../../utils/showToast */ "./src/utils/showToast.ts");

var _showToast2 = _interopRequireDefault(_showToast);

__webpack_require__(/*! ./authorIndex.scss */ "./src/pages/author/authorIndex/authorIndex.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var authorIndex = (_temp2 = _class = function (_BaseComponent) {
  _inherits(authorIndex, _BaseComponent);

  function authorIndex() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, authorIndex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = authorIndex.__proto__ || Object.getPrototypeOf(authorIndex)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__217", "$compid__218", "$compid__219", "searchAuthorInfo", "hotAuthor", "dispatch"], _this.config = {
      navigationBarTitleText: '作者'
    }, _this.searchContent = function (e) {
      console.log(e);
      var value = e.detail.value.replace(" ", "");
      if (value) {
        _taroWeapp2.default.showLoading({
          title: '正在搜索',
          mask: true
        });
        (0, _cloudFn.requestCloud)({
          clounFnName: 'poetry',
          controller: 'poetry',
          action: 'searchAuthor',
          data: {
            author: value
          }
        }).then(function (res) {
          if (res.data.length > 0) {
            _taroWeapp2.default.hideLoading();
            _this.setState({
              searchAuthorInfo: res.data
            });
          } else {
            (0, _showToast2.default)({ title: '查无此人' });
            _this.setState({
              searchAuthorInfo: []
            });
          }
        }).catch(function (_) {
          (0, _showToast2.default)({ title: '网络异常' });
        });
      }
    }, _this.getAuthorInfo = function (item) {
      var dispatch = _this.props.dispatch;

      dispatch({
        type: 'poetryDetail/save',
        payload: {
          authorInfo: item
        }
      });
      _taroWeapp2.default.navigateTo({
        url: '/pages/author/authorInfo/authorInfo'
      });
    }, _this.customComponents = ["Search", "Author"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(authorIndex, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(authorIndex.prototype.__proto__ || Object.getPrototypeOf(authorIndex.prototype), "_constructor", this).call(this, props);

      this.state = {
        hotAuthor: [],
        searchAuthorInfo: []
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      (0, _cloudFn.requestCloud)({
        clounFnName: 'poetry',
        controller: 'poetry',
        action: 'getHotAuthor'
      }).then(function (res) {
        console.log(res);
        if (res.data.length > 0) {
          _this2.setState({
            hotAuthor: res.data
          });
        }
      }).catch(function (err) {
        (0, _showToast2.default)({ title: '网络异常' });
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__217"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__217 = _genCompid2[0],
          $compid__217 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__218"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__218 = _genCompid4[0],
          $compid__218 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__219"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__219 = _genCompid6[0],
          $compid__219 = _genCompid6[1];

      var _state = this.__state,
          hotAuthor = _state.hotAuthor,
          searchAuthorInfo = _state.searchAuthorInfo;

      _taroWeapp.propsManager.set({
        "searchFn": this.searchContent,
        "placeholder": "\u8BF7\u8F93\u5165\u4F5C\u8005\u540D\u79F0"
      }, $compid__217, $prevCompid__217);
      searchAuthorInfo.length > 0 && _taroWeapp.propsManager.set({
        "authorInfo": searchAuthorInfo,
        "getAuthorInfo": this.getAuthorInfo
      }, $compid__218, $prevCompid__218);
      _taroWeapp.propsManager.set({
        "authorInfo": hotAuthor,
        "getAuthorInfo": this.getAuthorInfo
      }, $compid__219, $prevCompid__219);
      Object.assign(this.__state, {
        $compid__217: $compid__217,
        $compid__218: $compid__218,
        $compid__219: $compid__219
      });
      return this.__state;
    }
  }]);

  return authorIndex;
}(_taroWeapp.Component), _class.$$events = [], _class.$$componentPath = "pages/author/authorIndex/authorIndex", _temp2);
authorIndex = (0, _tslib.__decorate)([(0, _redux.connect)(function (_ref2) {
  var poetryDetail = _ref2.poetryDetail;
  return { poetryDetail: poetryDetail };
})], authorIndex);
exports.default = authorIndex;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(authorIndex, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=W:\\lyy\\pro\\taroPro\\songs\\poetry\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/author/authorIndex/authorIndex.tsx?taro&type=template&parse=PAGE&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=W:/lyy/pro/taroPro/songs/poetry/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/author/authorIndex/authorIndex.tsx?taro&type=template&parse=PAGE& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/author/authorIndex/authorIndex.wxml";

/***/ }),

/***/ "./src/pages/author/authorIndex/authorIndex.scss":
/*!*******************************************************!*\
  !*** ./src/pages/author/authorIndex/authorIndex.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/author/authorIndex/authorIndex.tsx":
/*!******************************************************!*\
  !*** ./src/pages/author/authorIndex/authorIndex.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _authorIndex_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authorIndex.tsx?taro&type=template&parse=PAGE& */ "./src/pages/author/authorIndex/authorIndex.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _authorIndex_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authorIndex.tsx?taro&type=script&parse=PAGE& */ "./src/pages/author/authorIndex/authorIndex.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _authorIndex_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _authorIndex_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/author/authorIndex/authorIndex.tsx?taro&type=script&parse=PAGE&":
/*!***********************************************************************************!*\
  !*** ./src/pages/author/authorIndex/authorIndex.tsx?taro&type=script&parse=PAGE& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_authorIndex_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./authorIndex.tsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/author/authorIndex/authorIndex.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_authorIndex_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_authorIndex_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_authorIndex_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_authorIndex_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_authorIndex_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/author/authorIndex/authorIndex.tsx?taro&type=template&parse=PAGE&":
/*!*************************************************************************************!*\
  !*** ./src/pages/author/authorIndex/authorIndex.tsx?taro&type=template&parse=PAGE& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_W_lyy_pro_taroPro_songs_poetry_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_authorIndex_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=W:/lyy/pro/taroPro/songs/poetry/src!../../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./authorIndex.tsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=W:\\lyy\\pro\\taroPro\\songs\\poetry\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/author/authorIndex/authorIndex.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_W_lyy_pro_taroPro_songs_poetry_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_authorIndex_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_W_lyy_pro_taroPro_songs_poetry_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_authorIndex_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_W_lyy_pro_taroPro_songs_poetry_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_authorIndex_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_W_lyy_pro_taroPro_songs_poetry_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_authorIndex_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/author/authorIndex/authorIndex.tsx","runtime","vendors","common"]]]);