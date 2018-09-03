"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require("../../../../@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _isFunction2 = require("../../../../lodash/isFunction.js");

var _isFunction3 = _interopRequireDefault(_isFunction2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AtComponent = function (_Component) {
  _inherits(AtComponent, _Component);

  function AtComponent() {
    _classCallCheck(this, AtComponent);

    return _possibleConstructorReturn(this, (AtComponent.__proto__ || Object.getPrototypeOf(AtComponent)).apply(this, arguments));
  }

  _createClass(AtComponent, [{
    key: "isFunction",
    value: function isFunction() {
      return _isFunction3.default.apply(undefined, arguments);
    }
  }]);

  return AtComponent;
}(_index.Component);

AtComponent.options = {
  addGlobalClass: true
};
exports.default = AtComponent;