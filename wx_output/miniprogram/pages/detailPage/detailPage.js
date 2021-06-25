(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/detailPage/detailPage"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/detailPage/detailPage.tsx?taro&type=script&parse=PAGE&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/detailPage/detailPage.tsx?taro&type=script&parse=PAGE& ***!
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

__webpack_require__(/*! ./detailPage.scss */ "./src/pages/detailPage/detailPage.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var detailPage = (_temp2 = _class = function (_BaseComponent) {
  _inherits(detailPage, _BaseComponent);

  function detailPage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, detailPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = detailPage.__proto__ || Object.getPrototypeOf(detailPage)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "poetryInfo", "$compid__12", "$compid__13", "$compid__14", "tag", "hasAuthor", "num", "_id", "dispatch", "poetryDetail", "author"], _this.switchTag = function () {
      var _this$props$poetryDet = _this.props.poetryDetail,
          poetryInfo = _this$props$poetryDet.poetryInfo,
          tag = _this$props$poetryDet.tag;

      switch (tag) {
        case 'yuanqu':
          _this.setTitle(poetryInfo.title);
          break;
        case 'lunyu':
          _this.setTitle(poetryInfo.chapter);
          break;
        case 'shijing':
          var title = poetryInfo.chapter + '·' + poetryInfo.section + '-' + poetryInfo.title;
          _this.setTitle(title);
          break;
        case 'youmengying':
          _this.setTitle('幽梦影');
          break;
        case 'sishuwujing':
          _this.setTitle(poetryInfo.chapter);
          break;
        default:
          _this.setTitle('诗词详情');
          break;
      }
    }, _this.setTitle = function (title) {
      _taroWeapp2.default.setNavigationBarTitle({
        title: title
      });
    }, _this.toAuthorInfo = function () {
      var _this$props$author = _this.props.author,
          hasAuthor = _this$props$author.hasAuthor,
          authorInfo = _this$props$author.authorInfo;

      if (hasAuthor) {
        (0, _log2.default)('detail_page', {
          action: '点击查看作者详情',
          author_name: authorInfo.name
        });
        _taroWeapp2.default.navigateTo({
          url: '/pages/author/authorInfo/authorInfo'
        });
      }
    }, _this.config = {
      navigationBarBackgroundColor: '#fff'
    }, _this.customComponents = ["Play"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(detailPage, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(detailPage.prototype.__proto__ || Object.getPrototypeOf(detailPage.prototype), "_constructor", this).call(this, props);

      this.state = {
        num: 1,
        _id: ''
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.switchTag();
      // 获取随机数设置背景
      var num = Math.floor(Math.random() * 5) + 1;
      this.setState({
        num: num
      });
      // 有参数时
      var tag = this.$router.params['tag'];
      var _id = this.$router.params['_id'];
      if (tag && _id) {
        var dispatch = this.props.dispatch;

        dispatch({
          type: 'poetryDetail/poetryApi',
          payload: {
            action: 'getPoetryDetail',
            data: {
              tag: tag,
              _id: _id
            }
          },
          callback: function callback(poetryRes) {
            // 查询作者相关信息
            if (poetryRes.poetryInfo.author) {
              dispatch({
                type: 'author/searchAuthor',
                payload: {
                  data: {
                    author: poetryRes.poetryInfo.author,
                    isReg: false
                  }
                }
              });
            }
            // 诗词详情
            dispatch({
              type: 'poetryDetail/save',
              payload: {
                tag: tag,
                poetryInfo: poetryRes.poetryInfo
              }
            });
            _this2.setState({
              _id: _id
            });
            _this2.switchTag();
          }
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var dispatch = this.props.dispatch;

      dispatch({
        type: 'author/save',
        payload: {
          hasAuthor: false
        }
      });
    }
  }, {
    key: "onShareAppMessage",
    value: function onShareAppMessage() {
      var _id = this.state._id;
      var tag = this.props.poetryDetail.tag;

      return {
        title: '诗词鉴赏',
        path: "/pages/detailPage/detailPage?tag=" + tag + "&_id=" + _id + "&is_share=1"
      };
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__12"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__12 = _genCompid2[0],
          $compid__12 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__13"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__13 = _genCompid4[0],
          $compid__13 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__14"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__14 = _genCompid6[0],
          $compid__14 = _genCompid6[1];

      var _props = this.__props,
          _props$poetryDetail = _props.poetryDetail,
          poetryInfo = _props$poetryDetail.poetryInfo,
          tag = _props$poetryDetail.tag,
          hasAuthor = _props.author.hasAuthor;
      var num = this.__state.num;

      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)({ backgroundImage: "url(https://cdn.jsdelivr.net/gh/haveyuan/poetry_img/bg/bg" + num + ".webp)" });
      var anonymousState__temp2 = poetryInfo.notes && poetryInfo.notes.length > 0 ? (0, _taroWeapp.internal_inline_style)({ fontWeight: 'bold' }) : null;
      var anonymousState__temp3 = tag === 'youmengying' ? (0, _taroWeapp.internal_inline_style)({ fontWeight: 'bold' }) : null;
      (tag === 'yuanqu' || tag === 'nantang' || tag === 'huajianji') && _taroWeapp.propsManager.set({
        "content": poetryInfo.paragraphs
      }, $compid__12, $prevCompid__12);
      tag === 'shijing' && _taroWeapp.propsManager.set({
        "content": poetryInfo.content
      }, $compid__13, $prevCompid__13);
      tag === 'youmengying' && _taroWeapp.propsManager.set({
        "content": poetryInfo.content
      }, $compid__14, $prevCompid__14);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        poetryInfo: poetryInfo,
        $compid__12: $compid__12,
        $compid__13: $compid__13,
        $compid__14: $compid__14,
        tag: tag,
        hasAuthor: hasAuthor
      });
      return this.__state;
    }
  }]);

  return detailPage;
}(_taroWeapp.Component), _class.$$events = ["toAuthorInfo"], _class.$$componentPath = "pages/detailPage/detailPage", _temp2);
detailPage = (0, _tslib.__decorate)([(0, _redux.connect)(function (_ref2) {
  var poetryDetail = _ref2.poetryDetail,
      author = _ref2.author;
  return { poetryDetail: poetryDetail, author: author };
})], detailPage);
exports.default = detailPage;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(detailPage, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=W:\\lyy\\pro\\taroPro\\songs\\poetry\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/detailPage/detailPage.tsx?taro&type=template&parse=PAGE&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=W:/lyy/pro/taroPro/songs/poetry/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/detailPage/detailPage.tsx?taro&type=template&parse=PAGE& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/detailPage/detailPage.wxml";

/***/ }),

/***/ "./src/pages/detailPage/detailPage.scss":
/*!**********************************************!*\
  !*** ./src/pages/detailPage/detailPage.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/detailPage/detailPage.tsx":
/*!*********************************************!*\
  !*** ./src/pages/detailPage/detailPage.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detailPage_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detailPage.tsx?taro&type=template&parse=PAGE& */ "./src/pages/detailPage/detailPage.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _detailPage_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detailPage.tsx?taro&type=script&parse=PAGE& */ "./src/pages/detailPage/detailPage.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _detailPage_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _detailPage_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/detailPage/detailPage.tsx?taro&type=script&parse=PAGE&":
/*!**************************************************************************!*\
  !*** ./src/pages/detailPage/detailPage.tsx?taro&type=script&parse=PAGE& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_detailPage_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./detailPage.tsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/detailPage/detailPage.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_detailPage_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_detailPage_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_detailPage_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_detailPage_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_detailPage_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/detailPage/detailPage.tsx?taro&type=template&parse=PAGE&":
/*!****************************************************************************!*\
  !*** ./src/pages/detailPage/detailPage.tsx?taro&type=template&parse=PAGE& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_W_lyy_pro_taroPro_songs_poetry_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_detailPage_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=W:/lyy/pro/taroPro/songs/poetry/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./detailPage.tsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=W:\\lyy\\pro\\taroPro\\songs\\poetry\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/detailPage/detailPage.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_W_lyy_pro_taroPro_songs_poetry_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_detailPage_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_W_lyy_pro_taroPro_songs_poetry_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_detailPage_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_W_lyy_pro_taroPro_songs_poetry_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_detailPage_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_W_lyy_pro_taroPro_songs_poetry_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_detailPage_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/detailPage/detailPage.tsx","runtime","vendors","common"]]]);