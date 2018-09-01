"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = {
  namespace: 'sys',
  state: {},
  reducers: {
    save: function save(state, _ref) {
      var payload = _ref.payload;

      return _extends({}, state, payload);
    }
  },
  effects: {
    error: /*#__PURE__*/regeneratorRuntime.mark(function error(_ref2, _ref3) {
      var e = _ref2.payload;
      var all = _ref3.all,
          call = _ref3.call,
          put = _ref3.put;
      return regeneratorRuntime.wrap(function error$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // debugger;
              console.error("error:", e);
              // if (e instanceof String) {
              //   toast(`${e}`);
              // } else if (e instanceof Error) {
              //   toast(`${e.message || e}`);
              // } else if (e && e.status) {
              //   let msg = '';
              //   if (e.status === -1) {
              //     yield put(action("account/login"));
              //   } else {
              //     if (e.status === 1) {
              //       const msgMap = e.msgMap;
              //       Object.keys(msgMap).forEach(key => {
              //         msg += msgMap[key];
              //         msg += '\n';
              //       });
              //       if (msg === null || msg.length === 0) {
              //         msg = e.msg;
              //       }
              //     } else {
              //       msg = e.msg;
              //     }
              //     toast(msg);
              //   }
              // } else {
              //   toast(e.msg || e);
              // }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, error, this);
    })
  }
};