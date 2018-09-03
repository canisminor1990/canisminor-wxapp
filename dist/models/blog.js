"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _request = require("../utils/request.js");

var _request2 = _interopRequireDefault(_request);

var _action = require("../utils/action.js");

var _action2 = _interopRequireDefault(_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = {
  namespace: 'blog',
  state: {
    toc: []
  },
  reducers: {
    save: function save(state, _ref) {
      var payload = _ref.payload;
      var page = payload.page,
          pages = payload.pages,
          toc = payload.toc;

      state.page = page;
      state.pages = pages;
      state.toc = [].concat(_toConsumableArray(state.toc), _toConsumableArray(toc));
      return state;
    }
  },
  effects: {
    get: /*#__PURE__*/regeneratorRuntime.mark(function get(_ref2, _ref3) {
      var payload = _ref2.payload;
      var call = _ref3.call,
          put = _ref3.put;
      var data;
      return regeneratorRuntime.wrap(function get$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return call(_request2.default, {
                url: "https://canisminor.cc/v2/blog/toc?page=" + payload
              });

            case 2:
              data = _context.sent;

              console.log(data);
              _context.next = 6;
              return put((0, _action2.default)('save', data));

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, get, this);
    })
  }
};