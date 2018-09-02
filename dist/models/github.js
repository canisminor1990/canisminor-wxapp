"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _request = require("../utils/request.js");

var _request2 = _interopRequireDefault(_request);

var _lodash = require("../npm/lodash/lodash.js");

var _lodash2 = _interopRequireDefault(_lodash);

var _dataCash = require("../utils/dataCash.js");

var _dataCash2 = _interopRequireDefault(_dataCash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cash = new _dataCash2.default('github', 24 * 60 * 60 * 1000);

exports.default = {
  namespace: 'github',
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
      var data, local, raw, Contributions;
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
              _context.next = 12;
              break;

            case 6:
              _context.next = 8;
              return call(function () {
                return (0, _request2.default)('https://github-contributions-api.now.sh/v1/canisminor1990');
              });

            case 8:
              raw = _context.sent;
              Contributions = _lodash2.default.get(raw, 'data.contributions');

              data = handleData(Contributions);
              Cash.set(data);

            case 12:
              _context.next = 14;
              return put({
                type: 'save',
                payload: data
              });

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, get, this);
    })
  }
};


function handleData(raw) {
  var date = [];
  var start = false;
  _lodash2.default.forEach(raw, function (item) {
    if (!start) {
      if (item.count > 0) {
        start = true;
      } else {
        return;
      }
    }
    if (date.length < 7 * 52) date.push(item);
  });
  date = date.reverse();
  var group = [];
  var count = -1;
  _lodash2.default.forEach(date, function (item, i) {
    if (i % 7 === 0) count++;
    if (!group[count]) group[count] = [];
    group[count].push(item);
  });
  return group;
}