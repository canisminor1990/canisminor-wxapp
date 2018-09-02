'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _request = require('../utils/request.js');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  namespace: 'blog',
  state: {},
  reducers: {
    save: function save(state, action) {
      var _action$payload = action.payload,
          page = _action$payload.page,
          data = _action$payload.data;

      state[page] = data.data;
      return state;
    }
  },
  effects: {
    get: /*#__PURE__*/regeneratorRuntime.mark(function get(action, _ref) {
      var call = _ref.call,
          put = _ref.put;
      var page, data;
      return regeneratorRuntime.wrap(function get$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              page = action.payload;
              _context.next = 3;
              return call(function () {
                return (0, _request2.default)('https://canisminor.cc/v2/blog/toc?page=' + page);
              });

            case 3:
              data = _context.sent;
              _context.next = 6;
              return put({
                type: 'save',
                payload: { page: page, data: data }
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