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

var AtActivityIndicator = function (_AtComponent) {
  _inherits(AtActivityIndicator, _AtComponent);

  function AtActivityIndicator() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtActivityIndicator);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtActivityIndicator.__proto__ || Object.getPrototypeOf(AtActivityIndicator)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["rootClassName", "size", "color", "content"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtActivityIndicator, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(AtActivityIndicator.prototype.__proto__ || Object.getPrototypeOf(AtActivityIndicator.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};

      var _props = this.__props,
          color = _props.color,
          size = _props.size,
          mode = _props.mode,
          content = _props.content;


      var rootClassName = ['at-activity-indicator'];

      if (mode === 'center') {
        rootClassName.push('at-activity-indicator--center');
      }

      Object.assign(this.__state, {
        rootClassName: rootClassName,
        size: size,
        color: color,
        content: content
      });
      return this.__state;
    }
  }]);

  return AtActivityIndicator;
}(_component2.default);

AtActivityIndicator.properties = {
  "color": null,
  "size": null,
  "mode": null,
  "content": null
};
AtActivityIndicator.$$events = [];


AtActivityIndicator.defaultProps = {
  size: 24,
  color: '#6190E8'
};

AtActivityIndicator.propTypes = {
  size: _index4.default.number,
  mode: _index4.default.string,
  color: _index4.default.string,
  content: _index4.default.string
};
exports.default = AtActivityIndicator;

Component(require('../../../../../@tarojs/taro-weapp/index.js').default.createComponent(AtActivityIndicator));