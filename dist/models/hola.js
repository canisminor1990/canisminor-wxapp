"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _request = require("../utils/request.js");

var _request2 = _interopRequireDefault(_request);

var _dataCash = require("../utils/dataCash.js");

var _dataCash2 = _interopRequireDefault(_dataCash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cash = new _dataCash2.default('hola');

exports.default = {
  namespace: 'hola',
  state: {},
  reducers: {
    save: function save(state, action) {
      state = action.payload;
      return state;
    }
  },
  effects: {
    get: /*#__PURE__*/regeneratorRuntime.mark(function get(action, _ref) {
      var call = _ref.call,
          put = _ref.put;

      var data, local, _data;

      return regeneratorRuntime.wrap(function get$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              data = void 0;
              local = Cash.get();

              if (!local) {
                _context.next = 6;
                break;
              }

              data = local;
              _context.next = 10;
              break;

            case 6:
              _context.next = 8;
              return call(function () {
                return (0, _request2.default)("https://canisminor.cc/v2/hola");
              });

            case 8:
              _data = _context.sent;

              Cash.set(_data);

            case 10:
              _context.next = 12;
              return put({
                type: 'save',
                payload: data
              });

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, get, this);
    })
  }
};