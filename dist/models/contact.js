"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _request = require("../utils/request.js");

var _request2 = _interopRequireDefault(_request);

var _dataCash = require("../utils/dataCash.js");

var _dataCash2 = _interopRequireDefault(_dataCash);

var _action = require("../utils/action.js");

var _action2 = _interopRequireDefault(_action);

var _lodash = require("../npm/lodash/lodash.js");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cash = new _dataCash2.default('contact');

exports.default = {
  namespace: 'contact',
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
      var data, local;
      return regeneratorRuntime.wrap(function get$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              data = void 0;
              local = Cash.get();

              if (!(local && _lodash2.default.size(local) > 0)) {
                _context.next = 6;
                break;
              }

              data = local;
              _context.next = 10;
              break;

            case 6:
              _context.next = 8;
              return call(_request2.default, {
                url: 'https://canisminor.cc/v2/contact'
              });

            case 8:
              data = _context.sent;

              Cash.set(data);

            case 10:
              _context.next = 12;
              return put((0, _action2.default)('save', data));

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, get, this);
    })
  }
};