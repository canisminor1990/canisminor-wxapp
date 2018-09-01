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

var img1 = "/asset/images/eye.png";
var img2 = "/asset/images/comment2.png";
var img3 = "/asset/images/invite.png";
var img4 = "/asset/images/write.png";
var img5 = "/asset/images/icon1.jpeg";

var Question = function (_BaseComponent) {
  _inherits(Question, _BaseComponent);

  function Question() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Question);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Question.__proto__ || Object.getPrototypeOf(Question)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["img1", "img2", "img3", "img4", "img5"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Question, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Question.prototype.__proto__ || Object.getPrototypeOf(Question.prototype), "_constructor", this).apply(this, arguments);
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
        img1: img1,
        img2: img2,
        img3: img3,
        img4: img4,
        img5: img5
      });
      return this.__state;
    }
  }]);

  return Question;
}(_index.Component);

Question.properties = {};
Question.$$events = ["navigateTo"];
exports.default = Question;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Question, true));