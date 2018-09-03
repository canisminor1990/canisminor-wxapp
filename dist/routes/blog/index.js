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

var _moment = require("../../npm/moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

var _index4 = require("../../npm/queryString/index.js");

var _index5 = _interopRequireDefault(_index4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _TaroComponentClass = (_dec = (0, _index3.connect)(function (_ref) {
  var blog = _ref.blog,
      loading = _ref.loading;
  return _extends({}, blog, {
    loading: loading.effects['blog/get']
  });
}), _dec(_class = function (_BaseComponent) {
  _inherits(_TaroComponentClass, _BaseComponent);

  function _TaroComponentClass() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, _TaroComponentClass);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = _TaroComponentClass.__proto__ || Object.getPrototypeOf(_TaroComponentClass)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["loopArray0", "loopArray1", "toc", "loading"], _this.componentDidMount = function () {
      _this.props.dispatch((0, _action2.default)('blog/get', 1));
    }, _this.onReachBottom = function () {
      if (_this.props.page < _this.props.pages) {
        _this.props.dispatch((0, _action2.default)('blog/get', _this.props.page + 1));
      }
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_TaroComponentClass, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(_TaroComponentClass.prototype.__proto__ || Object.getPrototypeOf(_TaroComponentClass.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "navigateTo",
    value: function navigateTo(filename) {
      var url = '/routes/post/index?' + _index5.default.stringify({
        id: filename
      });
      _index2.default.navigateTo({ url: url });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};

      var _props = this.__props,
          _props$toc = _props.toc,
          toc = _props$toc === undefined ? [] : _props$toc,
          loading = _props.loading;

      var loopArray0 = toc.map(function (item, i) {
        var cover = void 0;
        if (item.cover.l) {
          cover = item.cover.m ? item.cover.m : item.cover.l + '!m';
        } else {
          cover = item.cover.s;
        }
        var $loopState__temp2 = toc.length > 0 ? (0, _moment2.default)(item.date).format('MMM Do, YYYY') : null;
        return _extends({}, item, {
          cover: cover,
          $loopState__temp2: $loopState__temp2
        });
      });
      var loopArray1 = toc.map(function (item, i) {
        var cover = void 0;if (item.cover.l) {
          cover = item.cover.m ? item.cover.m : item.cover.l + '!m';
        } else {
          cover = item.cover.s;
        }var $loopState__temp2 = toc.length > 0 ? (0, _moment2.default)(item.date).format('MMM Do, YYYY') : null;
        return _extends({}, item, {
          cover: cover,
          $loopState__temp2: $loopState__temp2
        });
      });
      Object.assign(this.__state, {
        loopArray0: loopArray0,
        loopArray1: loopArray1,
        toc: toc,
        loading: loading
      });
      return this.__state;
    }
  }]);

  return _TaroComponentClass;
}(_index.Component)) || _class);

_TaroComponentClass.properties = {
  "dispatch": null,
  "page": null,
  "pages": null,
  "toc": null,
  "loading": null
};
_TaroComponentClass.$$events = ["navigateTo"];
exports.default = _TaroComponentClass;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(_TaroComponentClass, true));