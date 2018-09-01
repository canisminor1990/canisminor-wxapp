"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var img1 = "/asset/images/24213.jpg";
var img2 = "/asset/images/24280.jpg";
var img3 = "/asset/images/1444983318907-_DSC1826.jpg";
var img4 = "/asset/images/icon1.jpeg";
var img5 = "/asset/images/icon8.jpg";
var img6 = "/asset/images/icon9.jpeg";

var Discovery = function (_BaseComponent) {
  _inherits(Discovery, _BaseComponent);

  function Discovery() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Discovery);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Discovery.__proto__ || Object.getPrototypeOf(Discovery)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray0", "imgUrls", "currentNavtab", "navTab", "feed"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Discovery, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Discovery.prototype.__proto__ || Object.getPrototypeOf(Discovery.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        imgUrls: [img1, img2, img3],
        currentNavtab: 0,
        navTab: ['推荐', '圆桌', '热门', '收藏'],
        feed: [{
          question_id: 1,
          answer_id: 3,
          feed_source_id: 23,
          feed_source_name: 'Rebecca1',
          feed_source_txt: '赞了回答1',
          feed_source_img: img4,
          question: '选择 Kindle 而不是纸质书的原因是什么？',
          answer_ctnt: '难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的怎么真心不懂了...',
          good_num: '112',
          comment_num: '18'
        }, {
          question_id: 2,
          answer_id: 25,
          feed_source_id: 24,
          feed_source_name: 'Alex2',
          feed_source_txt: '回答了问题2',
          feed_source_img: img5,
          question: '如何评价周杰伦的「中文歌才是最屌的」的言论？',
          answer_ctnt: '不知道题主是否是学音乐的。 音乐有公认的经典，也有明显的流行趋势没有错。但归根结底，音乐是一种艺术，艺术是很主观的东西。跟画作一个道理，毕加索是大家，但很多人看不懂他的话，甚至觉得很难看...',
          good_num: '112',
          comment_num: '18'
        }, {
          question_id: 3,
          answer_id: 61,
          feed_source_id: 25,
          feed_source_name: 'George3',
          feed_source_txt: '赞了回答3',
          feed_source_img: img6,
          question: '气象铁塔的辐射大吗？',
          answer_ctnt: '我不知道那个铁塔的情况，不过气象铁塔上会有一些测太阳辐射的设备，如果说辐射的话，太阳辐射那么多，大家赶紧躲进地底下呀~~~~~要不然辐射量这么大，会变异的呀~~~~',
          good_num: '112',
          comment_num: '18'
        }, {
          question_id: 4,
          answer_id: 3,
          feed_source_id: 23,
          feed_source_name: 'Rebecca4',
          feed_source_txt: '赞了回答4',
          feed_source_img: img4,
          question: '选择 Kindle 而不是纸质书的原因是什么？',
          answer_ctnt: '难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的怎么真心不懂了...',
          good_num: '112',
          comment_num: '18'
        }, {
          question_id: 5,
          answer_id: 25,
          feed_source_id: 24,
          feed_source_name: 'Alex5',
          feed_source_txt: '回答了问题5',
          feed_source_img: img5,
          question: '如何评价周杰伦的「中文歌才是最屌的」的言论？',
          answer_ctnt: '不知道题主是否是学音乐的。 音乐有公认的经典，也有明显的流行趋势没有错。但归根结底，音乐是一种艺术，艺术是很主观的东西。跟画作一个道理，毕加索是大家，但很多人看不懂他的话，甚至觉得很难看...',
          good_num: '112',
          comment_num: '18'
        }, {
          question_id: 6,
          answer_id: 61,
          feed_source_id: 25,
          feed_source_name: 'George6',
          feed_source_txt: '赞了回答6',
          feed_source_img: img6,
          question: '气象铁塔的辐射大吗？',
          answer_ctnt: '我不知道那个铁塔的情况，不过气象铁塔上会有一些测太阳辐射的设备，如果说辐射的话，太阳辐射那么多，大家赶紧躲进地底下呀~~~~~要不然辐射量这么大，会变异的呀~~~~',
          good_num: '112',
          comment_num: '18'
        }, {
          question_id: 7,
          answer_id: 3,
          feed_source_id: 23,
          feed_source_name: 'Rebecca7',
          feed_source_txt: '赞了回答7',
          feed_source_img: img4,
          question: '选择 Kindle 而不是纸质书的原因是什么？',
          answer_ctnt: '难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的怎么真心不懂了...',
          good_num: '112',
          comment_num: '18'
        }, {
          question_id: 8,
          answer_id: 25,
          feed_source_id: 24,
          feed_source_name: 'Alex8',
          feed_source_txt: '回答了问题8',
          feed_source_img: img5,
          question: '如何评价周杰伦的「中文歌才是最屌的」的言论？',
          answer_ctnt: '不知道题主是否是学音乐的。 音乐有公认的经典，也有明显的流行趋势没有错。但归根结底，音乐是一种艺术，艺术是很主观的东西。跟画作一个道理，毕加索是大家，但很多人看不懂他的话，甚至觉得很难看...',
          good_num: '112',
          comment_num: '18'
        }]
      };
    }
  }, {
    key: "switchTab",
    value: function switchTab(index, e) {
      this.setState({
        currentNavtab: index
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};

      var loopArray0 = this.__state.feed.map(function (item, index) {
        var $loopState__temp2 = "dis_" + index;
        return _extends({}, item, {
          $loopState__temp2: $loopState__temp2
        });
      });

      Object.assign(this.__state, {
        loopArray0: loopArray0
      });
      return this.__state;
    }
  }]);

  return Discovery;
}(_index.Component);

Discovery.properties = {};
Discovery.$$events = ["switchTab"];
exports.default = Discovery;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Discovery, true));