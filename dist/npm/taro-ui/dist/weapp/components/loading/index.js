"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _index = require("../../../../../@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../../../../prop-types/index.js");

var _index4 = _interopRequireDefault(_index3);

var _component = require("../../common/component.js");

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AtLoading = function (_AtComponent) {
  _inherits(AtLoading, _AtComponent);

  function AtLoading() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtLoading);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtLoading.__proto__ || Object.getPrototypeOf(AtLoading)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtLoading, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(AtLoading.prototype.__proto__ || Object.getPrototypeOf(AtLoading.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};

      var _props = this.__props,
          color = _props.color,
          size = _props.size;

      var sizeStyle = {
        width: size + "px",
        height: size + "px"
      };
      var colorStyle = {
        'border': "1px solid " + color,
        'border-color': color + " transparent transparent transparent"
      };
      var ringStyle = Object.assign({}, colorStyle, sizeStyle);
      var anonymousState__temp = (0, _index.internal_inline_style)(sizeStyle);
      var anonymousState__temp2 = (0, _index.internal_inline_style)(ringStyle);
      var anonymousState__temp3 = (0, _index.internal_inline_style)(ringStyle);
      var anonymousState__temp4 = (0, _index.internal_inline_style)(ringStyle);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4
      });
      return this.__state;
    }
  }]);

  return AtLoading;
}(_component2.default);

AtLoading.properties = {
  "color": null,
  "size": null
};
AtLoading.$$events = [];


AtLoading.defaultProps = {
  size: '18',
  color: '#fff'
};
AtLoading.propTypes = {
  size: _index4.default.oneOfType([_index4.default.string, _index4.default.number]),
  color: _index4.default.oneOfType([_index4.default.string, _index4.default.number])
};
exports.default = AtLoading;

Component(require('../../../../../@tarojs/taro-weapp/index.js').default.createComponent(AtLoading));