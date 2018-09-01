"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _action = require("../utils/action.js");

var _action2 = _interopRequireDefault(_action);

var _request = require("../utils/request.js");

var _request2 = _interopRequireDefault(_request);

var _delay = require("../utils/delay.js");

var _delay2 = _interopRequireDefault(_delay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = {
  namespace: 'feeds',
  state: { list: [] },
  reducers: {
    save: function save(state, _ref) {
      var payload = _ref.payload;

      return _extends({}, state, payload);
    },
    saveMore: function saveMore(state, _ref2) {
      var list = _ref2.payload;

      return _extends({}, state, { list: [].concat(_toConsumableArray(state.list), _toConsumableArray(list)) });
    }
  },
  effects: {
    search: /*#__PURE__*/regeneratorRuntime.mark(function search(_, _ref3) {
      var all = _ref3.all,
          call = _ref3.call,
          put = _ref3.put;
      var loadPro;
      return regeneratorRuntime.wrap(function search$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _index2.default.showLoading({
                title: '搜索中...'
              });
              _context.prev = 1;
              _context.next = 4;
              return put((0, _action2.default)('load'));

            case 4:
              loadPro = _context.sent;
              _context.next = 7;
              return call(function () {
                return loadPro;
              });

            case 7:
              _context.prev = 7;

              _index2.default.hideLoading();
              return _context.finish(7);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, search, this, [[1,, 7, 10]]);
    }),
    load: /*#__PURE__*/regeneratorRuntime.mark(function load(_ref4, _ref5) {
      var payload = _ref4.payload;
      var all = _ref5.all,
          call = _ref5.call,
          put = _ref5.put;

      var _ref6, data;

      return regeneratorRuntime.wrap(function load$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return call(_request2.default, {
                url: 'https://easy-mock.com/mock/5b21d97f6b88957fa8a502f2/example/feed'
              });

            case 2:
              _ref6 = _context2.sent;
              data = _ref6.data;
              _context2.next = 6;
              return call(_delay2.default, 2000);

            case 6:
              _context2.next = 8;
              return put((0, _action2.default)('save', { list: data }));

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, load, this);
    }),
    loadMore: /*#__PURE__*/regeneratorRuntime.mark(function loadMore(_ref7, _ref8) {
      var payload = _ref7.payload;
      var all = _ref8.all,
          call = _ref8.call,
          put = _ref8.put;

      var _ref9, data;

      return regeneratorRuntime.wrap(function loadMore$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return call(_request2.default, {
                url: 'https://easy-mock.com/mock/5b21d97f6b88957fa8a502f2/example/feed'
              });

            case 2:
              _ref9 = _context3.sent;
              data = _ref9.data;
              _context3.next = 6;
              return call(_delay2.default, 2000);

            case 6:
              _context3.next = 8;
              return put((0, _action2.default)('saveMore', data));

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, loadMore, this);
    })
  }
};