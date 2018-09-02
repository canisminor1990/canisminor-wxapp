'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _request = require('../utils/request.js');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  namespace: 'posts',
  state: {},
  reducers: {
    save: function save(state, action) {
      state = action.payload.data;
      return state;
    }
  },
  effects: {
    get: /*#__PURE__*/regeneratorRuntime.mark(function get(action, _ref) {
      var call = _ref.call,
          put = _ref.put;
      var id, data;
      return regeneratorRuntime.wrap(function get$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              id = action.payload;
              _context.next = 3;
              return call(function () {
                return (0, _request2.default)('https://canisminor.cc/v2/blog/posts/' + id);
              });

            case 3:
              data = _context.sent;
              _context.next = 6;
              return put({
                type: 'save',
                payload: data
              });

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, get, this);
    })
  }
};