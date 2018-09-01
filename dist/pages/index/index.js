"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/@tarojs/redux/index.js");

var _action = require("../../utils/action.js");

var _action2 = _interopRequireDefault(_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var searchPng = "/asset/images/search.png";
var lightingPng = "/asset/images/lighting.png";

var Index = (_dec = (0, _index3.connect)(function (_ref) {
  var feeds = _ref.feeds,
      loading = _ref.loading;
  return _extends({}, feeds, {
    isLoad: loading.effects["feeds/load"],
    isLoadMore: loading.effects["feeds/loadMore"]
  });
}), _dec(_class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["searchPng", "lightingPng", "list", "isLoad", "isLoadMore"], _this.componentDidMount = function () {
      _this.props.dispatch((0, _action2.default)("feeds/load"));
    }, _this.onPullDownRefresh = function () {
      _this.props.dispatch((0, _action2.default)("feeds/load"));
    }, _this.onReachBottom = function () {
      _this.props.dispatch((0, _action2.default)("feeds/loadMore"));
    }, _this.updateList = function () {
      _this.props.dispatch((0, _action2.default)("feeds/search", true));
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).apply(this, arguments);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};

      var _props = this.__props,
          _props$list = _props.list,
          list = _props$list === undefined ? [] : _props$list,
          isLoad = _props.isLoad,
          isLoadMore = _props.isLoadMore;

      Object.assign(this.__state, {
        searchPng: searchPng,
        lightingPng: lightingPng,
        list: list,
        isLoad: isLoad,
        isLoadMore: isLoadMore
      });
      return this.__state;
    }
  }]);

  return Index;
}(_index.Component)) || _class);
Index.properties = {
  "dispatch": null,
  "list": null,
  "isLoad": null,
  "isLoadMore": null
};
Index.$$events = ["updateList"];
exports.default = Index;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));