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

var _TaroComponentClass = (_dec = (0, _index3.connect)(function (_ref) {
  var hola = _ref.hola,
      loading = _ref.loading;
  return _extends({}, hola, {
    loading: loading.effects['hola/get']
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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = _TaroComponentClass.__proto__ || Object.getPrototypeOf(_TaroComponentClass)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["loopArray0", "loading", "article", "intro", "design", "coding"], _this.componentDidMount = function () {
      _this.props.dispatch((0, _action2.default)('hola/get'));
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_TaroComponentClass, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(_TaroComponentClass.prototype.__proto__ || Object.getPrototypeOf(_TaroComponentClass.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};

      var _props = this.__props,
          intro = _props.intro,
          _props$design = _props.design,
          design = _props$design === undefined ? [] : _props$design,
          _props$coding = _props.coding,
          coding = _props$coding === undefined ? [] : _props$coding,
          _props$article = _props.article,
          article = _props$article === undefined ? [] : _props$article,
          loading = _props.loading;

      var loopArray0 = article.map(function (item, i) {
        if (i > 4) return;
        var cover = item.cover.m ? item.cover.m : item.cover.l + '!m';
        return _extends({}, item, {
          cover: cover
        });
      });
      Object.assign(this.__state, {
        loopArray0: loopArray0,
        loading: loading,
        article: article,
        intro: intro,
        design: design,
        coding: coding
      });
      return this.__state;
    }
  }]);

  return _TaroComponentClass;
}(_index.Component)) || _class);

_TaroComponentClass.properties = {
  "dispatch": null,
  "intro": null,
  "design": null,
  "coding": null,
  "article": null,
  "loading": null
};
_TaroComponentClass.$$events = [];
exports.default = _TaroComponentClass;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(_TaroComponentClass, true));