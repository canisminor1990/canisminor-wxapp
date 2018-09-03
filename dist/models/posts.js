"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _request = require("../utils/request.js");

var _request2 = _interopRequireDefault(_request);

var _action = require("../utils/action.js");

var _action2 = _interopRequireDefault(_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  namespace: 'posts',
  state: {},
  reducers: {
    save: function save(state, _ref) {
      var payload = _ref.payload;

      return _extends({}, state, payload);
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
                url: "https://canisminor.cc/v2/blog/posts/" + payload
              });

            case 2:
              data = _context.sent;
              _context.next = 5;
              return put((0, _action2.default)('save', data));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, get, this);
    })
  }
};