(wx.webpackJsonp=wx.webpackJsonp||[]).push([[13],{"101":function(e,t,n){"use strict";n.r(t);n(102);var o,a=n(23);for(o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o)},"102":function(e,t,n){"use strict";n(50)},"103":function(e,t,n){},"23":function(e,t,n){"use strict";n.r(t);var o,a=n(9),r=n.n(a);for(o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t.default=r.a},"50":function(e,t,n){e.exports=n.p+"pages/index/index.wxml"},"9":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var o=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function D(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0!==o){if("value"in o)return o.value;o=o.get;return void 0!==o?o.call(n):void 0}if(e=Object.getPrototypeOf(e),null!==e)return D(e,t,n)}var a,r=n(5),i=n(0),s=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(i),u=n(3);function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}n(103);(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)})(Index,i.Component),o(Index,[{"key":"_constructor","value":function _constructor(e){D(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"_constructor",this).call(this,e),this.state={"barHeight":0,"catalog":[],"bgUrl":"","imgUrl":""},this.$$refs=new s.default.RefsArray}},{"key":"componentDidMount","value":function componentDidMount(){var t=this,e=s.default.getMenuButtonBoundingClientRect();s.default.getSystemInfo({"success":function success(){t.setState({"barHeight":e.top})}}),s.default.cloud.downloadFile({"fileID":"cloud://test-hhh.7465-test-hhh-1304398770/poetry/images/bg.webp","success":function success(e){-1<e.errMsg.indexOf("downloadFile:ok")&&t.setState({"bgUrl":e.tempFilePath})}}),this.getallTags()}},{"key":"onShareAppMessage","value":function onShareAppMessage(){return{"title":"这里有最全的诗词种类，快来看看吧！","imageUrl":"../../images/share.jpg","path":"/pages/index/index"}}},{"key":"_createData","value":function _createData(e,t,n){var o=this;this.__state=e||this.state||{},this.__props=t||this.props||{};this.$prefix;var a=this.__state,e=a.bgUrl,t=a.barHeight,n=a.catalog,e=(a.imgUrl,(0,i.internal_inline_style)({"backgroundImage":"url("+e+")"})),t=(0,i.internal_inline_style)({"top":t+"px"}),n=n.map(function(e,t){e={"$original":(0,i.internal_get_original)(e)};t="dzzzz"+t;return o.anonymousFunc0Map[t]=function(){return o.toListPage(e.$original.tag,e.$original.name)},{"_$indexKey":t,"$loopState__temp4":(0,i.internal_inline_style)({"whiteSpace":"pre-line"}),"$original":e.$original}});return Object.assign(this.__state,{"anonymousState__temp":e,"anonymousState__temp2":t,"loopArray9":n}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(e){for(var t,n=arguments.length,o=Array(1<n?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];return this.anonymousFunc0Map[e]&&(t=this.anonymousFunc0Map)[e].apply(t,o)}}]),o=a=Index,a.$$events=["anonymousFunc0"],a.$$componentPath="pages/index/index";function Index(){var e,t;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=t=_possibleConstructorReturn(this,(e=Index.__proto__||Object.getPrototypeOf(Index)).call.apply(e,[this].concat(o)))).$usedState=["anonymousState__temp","anonymousState__temp2","loopArray9","catalog","barHeight","bgUrl","imgUrl","dispatch"],t.config={"navigationStyle":"custom"},t.getallTags=function(){(0,t.props.dispatch)({"type":"poetryDetail/poetryApi","payload":{"action":"allCategories"},"callback":function callback(e){t.setState({"catalog":e.data})}})},t.toListPage=function(e,t){s.default.navigateTo({"url":"/pages/poetryList/poetryList?tag="+e+"&name="+t})},t.getCode=function(){(0,t.props.dispatch)({"type":"poetryDetail/poetryApi","payload":{"action":"getCode","data":{"scene":encodeURIComponent("from=code"),"page":"pages/index/index"}},"callback":function callback(e){console.log(e);e=new Uint8Array(e.buffer.data),e="data:image/png;base64,"+s.default.arrayBufferToBase64(e);console.log(e),t.setState({"imgUrl":e})}})},t.anonymousFunc0Map={},t.customComponents=["Tools"],_possibleConstructorReturn(t,e)}o=(0,r.__decorate)([(0,u.connect)(function(e){return{"poetryDetail":e.poetryDetail}})],o),t.default=o,Component(n(0).default.createComponent(o,!0))}},[[101,0,1]]]);