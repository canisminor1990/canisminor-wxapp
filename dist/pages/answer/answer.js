"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var img2 = "/asset/images/good-bad.png";
var img3 = "/asset/images/flag.png";
var img4 = "/asset/images/heart2.png";
var img5 = "/asset/images/star2.png";
var img6 = "/asset/images/comment.png";
var img7 = "/asset/images/icon1.jpeg";

var Answer = function (_BaseComponent) {
  _inherits(Answer, _BaseComponent);

  function Answer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Answer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Answer.__proto__ || Object.getPrototypeOf(Answer)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["img7", "img2", "img3", "img4", "img5", "img6"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Answer, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Answer.prototype.__proto__ || Object.getPrototypeOf(Answer.prototype), "_constructor", this).apply(this, arguments);
    }
  }, {
    key: "navigateTo",
    value: function navigateTo(url) {
      _index2.default.navigateTo({ url: url });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      Object.assign(this.__state, {
        img7: img7,
        img2: img2,
        img3: img3,
        img4: img4,
        img5: img5,
        img6: img6
      });
      return this.__state;
    }
  }]);

  return Answer;
}(_index.Component);

Answer.properties = {};
Answer.$$events = ["navigateTo"];
exports.default = Answer;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Answer, true));