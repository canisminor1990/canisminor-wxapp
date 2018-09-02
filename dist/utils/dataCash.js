"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _lodash = require("../npm/lodash/lodash.js");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataCash = function () {
  function DataCash(namespace) {
    var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60000;

    _classCallCheck(this, DataCash);

    this.namespace = namespace;
    this.timeout = timeout;
  }

  _createClass(DataCash, [{
    key: "get",
    value: function get() {
      var local = _index2.default.getStorageSync(this.namespace);
      if (local && _lodash2.default.size(local.data) > 0 && local.time && Date.now() - local.time < this.timeout) {
        return local.data;
      }
      return false;
    }
  }, {
    key: "set",
    value: function set(data) {
      _index2.default.setStorageSync(this.namespace, { time: Date.now(), data: data });
    }
  }]);

  return DataCash;
}();

exports.default = DataCash;