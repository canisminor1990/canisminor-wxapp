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

var more = "/asset/images/more.png";

var Feed = function (_BaseComponent) {
  _inherits(Feed, _BaseComponent);

  function Feed() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Feed);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Feed.__proto__ || Object.getPrototypeOf(Feed)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["more", "feed_source_img", "feed_source_name", "feed_source_txt", "question", "answer_ctnt", "good_num", "comment_num"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Feed, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Feed.prototype.__proto__ || Object.getPrototypeOf(Feed.prototype), "_constructor", this).call(this, props);
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
        more: more
      });
      return this.__state;
    }
  }]);

  return Feed;
}(_index.Component);

Feed.properties = {
  "feed_source_img": null,
  "feed_source_name": null,
  "feed_source_txt": null,
  "question": null,
  "answer_ctnt": null,
  "good_num": null,
  "comment_num": null
};
Feed.$$events = ["navigateTo"];
exports.default = Feed;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Feed));