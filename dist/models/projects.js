"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _request = require("../utils/request.js");

var _request2 = _interopRequireDefault(_request);

var _dataCash = require("../utils/dataCash.js");

var _dataCash2 = _interopRequireDefault(_dataCash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cash = new _dataCash2.default('projects');

exports.default = {
  namespace: 'projects',
  state: [],
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
      var data, local, raw;
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
              _context.next = 11;
              break;

            case 6:
              _context.next = 8;
              return call(function () {
                return (0, _request2.default)("https://canisminor.cc/v2/projects");
              });

            case 8:
              raw = _context.sent;

              data = raw.data;
              Cash.set(data);

            case 11:
              _context.next = 13;
              return put({
                type: 'save',
                payload: data
              });

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, get, this);
    })
  }
};