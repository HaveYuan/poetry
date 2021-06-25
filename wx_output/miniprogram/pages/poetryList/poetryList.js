(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/poetryList/poetryList"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/poetryList/poetryList.tsx?taro&type=script&parse=PAGE&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/poetryList/poetryList.tsx?taro&type=script&parse=PAGE& ***!
  \***********************************************************************************************************************************************************/
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

var _log = __webpack_require__(/*! ../../utils/log */ "./src/utils/log.ts");

var _log2 = _interopRequireDefault(_log);

__webpack_require__(/*! ./poetryList.scss */ "./src/pages/poetryList/poetryList.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var poetryList = (_temp2 = _class = function (_BaseComponent) {
  _inherits(poetryList, _BaseComponent);

  function poetryList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, poetryList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = poetryList.__proto__ || Object.getPrototypeOf(poetryList)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray10", "$compid__10", "$compid__11", "poetryListData", "loading", "tag", "pageNo", "inputVal", "dispatch", "author"], _this.config = {
      navigationBarBackgroundColor: '#D9C1A5'
    }, _this.getpoetryList = function (pageNo) {
      var dispatch = _this.props.dispatch;
      var inputVal = _this.state.inputVal;

      dispatch({
        type: 'poetryDetail/poetryApi',
        payload: {
          action: 'getPoetryList',
          data: {
            pageNo: pageNo,
            pageSize: 20,
            tag: _this.state.tag,
            value: inputVal
          }
        },
        callback: function callback(res) {
          var poetryListData = _this.state.poetryListData;

          if (res.data) {
            if (pageNo == 1) {
              var _pageNo = pageNo + 1;
              _this.setState({
                poetryListData: res.data,
                pageNo: _pageNo
              });
            } else {
              var _pageNo2 = pageNo + 1;
              _this.setState({
                poetryListData: poetryListData.concat(res.data),
                pageNo: _pageNo2
              });
            }
            if (pageNo === res.totalPage || res.totalPage === 0) {
              _this.setState({
                loading: false
              });
            } else {
              _this.setState({
                loading: true
              });
            }
          }
        }
      });
    }, _this.toDetail = function (item) {
      var tag = _this.state.tag;
      var _this$props = _this.props,
          dispatch = _this$props.dispatch,
          authorInfo = _this$props.author.authorInfo;

      if (item.author && item.author === authorInfo.name) {
        dispatch({
          type: 'author/save',
          payload: {
            hasAuthor: true
          }
        });
      }
      if (item.author && item.author !== authorInfo.name) {
        // 查询作者相关信息
        dispatch({
          type: 'author/searchAuthor',
          payload: {
            data: {
              author: item.author,
              isReg: false
            }
          }
        });
      }
      dispatch({
        type: 'poetryDetail/save',
        payload: {
          tag: tag,
          poetryInfo: item
        }
      });
      _taroWeapp2.default.navigateTo({
        url: '/pages/detailPage/detailPage'
      });
      (0, _log2.default)('poetry_list', {
        action: '点击诗词详情',
        poetry: JSON.stringify(item)
      });
    }, _this.searchInput = function (e) {
      _this.setState({
        inputVal: e.detail.value
      }, function () {
        _this.getpoetryList(1);
        if (e.detail.value !== '') {
          (0, _log2.default)('poetry_list', {
            action: '搜索诗词内容',
            inputVal: JSON.stringify(e.detail.value)
          });
        }
      });
    }, _this.customComponents = ["Search", "ListItem", "Loading"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(poetryList, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(poetryList.prototype.__proto__ || Object.getPrototypeOf(poetryList.prototype), "_constructor", this).call(this, props);

      this.state = {
        loading: true,
        tag: '',
        pageNo: 1,
        poetryListData: [],
        inputVal: ''
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _taroWeapp2.default.setNavigationBarTitle({
        title: this.$router.params.name
      });
      var tag = this.$router.params.tag;
      this.setState({
        tag: tag
      }, function () {
        _this2.getpoetryList(1);
      });
    }
  }, {
    key: "onReachBottom",
    value: function onReachBottom() {
      var _state = this.state,
          loading = _state.loading,
          pageNo = _state.pageNo;

      if (loading) {
        this.getpoetryList(pageNo);
      }
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this3 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__10"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__10 = _genCompid2[0],
          $compid__10 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__11"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__11 = _genCompid4[0],
          $compid__11 = _genCompid4[1];

      var _state2 = this.__state,
          loading = _state2.loading,
          poetryListData = _state2.poetryListData,
          tag = _state2.tag;

      var loopArray10 = poetryListData.map(function (item, _anonIdx) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var $loopState__temp2 = function $loopState__temp2() {
          return _this3.toDetail(item.$original);
        };

        var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "ezzzzzzzzz" + _anonIdx, true),
            _genCompid6 = _slicedToArray(_genCompid5, 2),
            $prevCompid__9 = _genCompid6[0],
            $compid__9 = _genCompid6[1];

        _taroWeapp.propsManager.set({
          "tag": tag,
          "poetryObj": item.$original,
          "clickFn": $loopState__temp2
        }, $compid__9, $prevCompid__9);
        return {
          $loopState__temp2: $loopState__temp2,
          $compid__9: $compid__9,
          $original: item.$original
        };
      });
      _taroWeapp.propsManager.set({
        "placeholder": "\u8BF7\u8F93\u5165\u5173\u952E\u5B57\u641C\u7D22",
        "searchInput": this.searchInput
      }, $compid__10, $prevCompid__10);
      _taroWeapp.propsManager.set({
        "len": poetryListData.length,
        "loading": loading
      }, $compid__11, $prevCompid__11);
      Object.assign(this.__state, {
        loopArray10: loopArray10,
        $compid__10: $compid__10,
        $compid__11: $compid__11
      });
      return this.__state;
    }
  }]);

  return poetryList;
}(_taroWeapp.Component), _class.$$events = [], _class.$$componentPath = "pages/poetryList/poetryList", _temp2);
poetryList = (0, _tslib.__decorate)([(0, _redux.connect)(function (_ref2) {
  var poetryDetail = _ref2.poetryDetail,
      author = _ref2.author;
  return { poetryDetail: poetryDetail, author: author };
})], poetryList);
exports.default = poetryList;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(poetryList, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=W:\\lyy\\pro\\taroPro\\songs\\poetry\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/poetryList/poetryList.tsx?taro&type=template&parse=PAGE&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=W:/lyy/pro/taroPro/songs/poetry/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/poetryList/poetryList.tsx?taro&type=template&parse=PAGE& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/poetryList/poetryList.wxml";

/***/ }),

/***/ "./src/pages/poetryList/poetryList.scss":
/*!**********************************************!*\
  !*** ./src/pages/poetryList/poetryList.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/poetryList/poetryList.tsx":
/*!*********************************************!*\
  !*** ./src/pages/poetryList/poetryList.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _poetryList_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./poetryList.tsx?taro&type=template&parse=PAGE& */ "./src/pages/poetryList/poetryList.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _poetryList_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./poetryList.tsx?taro&type=script&parse=PAGE& */ "./src/pages/poetryList/poetryList.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _poetryList_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _poetryList_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/poetryList/poetryList.tsx?taro&type=script&parse=PAGE&":
/*!**************************************************************************!*\
  !*** ./src/pages/poetryList/poetryList.tsx?taro&type=script&parse=PAGE& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_poetryList_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./poetryList.tsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/poetryList/poetryList.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_poetryList_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_poetryList_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_poetryList_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_poetryList_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_poetryList_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/poetryList/poetryList.tsx?taro&type=template&parse=PAGE&":
/*!****************************************************************************!*\
  !*** ./src/pages/poetryList/poetryList.tsx?taro&type=template&parse=PAGE& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_W_lyy_pro_taroPro_songs_poetry_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_poetryList_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=W:/lyy/pro/taroPro/songs/poetry/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./poetryList.tsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=W:\\lyy\\pro\\taroPro\\songs\\poetry\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/poetryList/poetryList.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_W_lyy_pro_taroPro_songs_poetry_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_poetryList_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_W_lyy_pro_taroPro_songs_poetry_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_poetryList_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_W_lyy_pro_taroPro_songs_poetry_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_poetryList_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_W_lyy_pro_taroPro_songs_poetry_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_poetryList_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/poetryList/poetryList.tsx","runtime","vendors","common"]]]);