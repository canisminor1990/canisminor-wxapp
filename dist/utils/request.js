"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = request;

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function request(opt) {
  return _index2.default.request(opt).then(function (res) {
    var statusCode = res.statusCode,
        data = res.data;

    if (statusCode >= 200 && statusCode < 300) {
      return data;
    } else {
      throw new Error("\u7F51\u7EDC\u8BF7\u6C42\u9519\u8BEF\uFF0C\u72B6\u6001\u7801" + statusCode);
    }
  });
}