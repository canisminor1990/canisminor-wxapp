"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _request = require("../utils/request.js");

var _request2 = _interopRequireDefault(_request);

var _index = require("../npm/query-string/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  namespace: 'mail',
  state: {
    id: ''
  },
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

      var _action$payload, subject, text, Query, data;

      return regeneratorRuntime.wrap(function get$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _action$payload = action.payload, subject = _action$payload.subject, text = _action$payload.text;
              Query = _index2.default.stringify({ subject: subject, text: text });
              _context.next = 4;
              return call(function () {
                return (0, _request2.default)(['https://canisminor.cc/v2/mail', Query].join('?'), {
                  method: 'POST',
                  credentials: 'include'
                });
              });

            case 4:
              data = _context.sent;
              _context.next = 7;
              return put({
                type: 'save',
                payload: data.data
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, get, this);
    })
  }
};