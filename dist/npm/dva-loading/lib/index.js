"use strict";

var _interopRequireDefault = require("../../@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("../../@babel/runtime/regenerator/index.js"));

var _keys = _interopRequireDefault(require("../../@babel/runtime/core-js/object/keys.js"));

var _defineProperty2 = _interopRequireDefault(require("../../@babel/runtime/helpers/defineProperty.js"));

var _objectSpread6 = _interopRequireDefault(require("../../@babel/runtime/helpers/objectSpread.js"));

var SHOW = '@@DVA_LOADING/SHOW';
var HIDE = '@@DVA_LOADING/HIDE';
var NAMESPACE = 'loading';

function createLoading() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var namespace = opts.namespace || NAMESPACE;
  var _opts$only = opts.only,
      only = _opts$only === void 0 ? [] : _opts$only,
      _opts$except = opts.except,
      except = _opts$except === void 0 ? [] : _opts$except;

  if (only.length > 0 && except.length > 0) {
    throw Error('It is ambiguous to configurate `only` and `except` items at the same time.');
  }

  var initialState = {
    global: false,
    models: {},
    effects: {}
  };
  var extraReducers = (0, _defineProperty2.default)({}, namespace, function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

    var _ref = arguments.length > 1 ? arguments[1] : undefined,
        type = _ref.type,
        payload = _ref.payload;

    var _ref2 = payload || {},
        namespace = _ref2.namespace,
        actionType = _ref2.actionType;

    var ret;

    switch (type) {
      case SHOW:
        ret = (0, _objectSpread6.default)({}, state, {
          global: true,
          models: (0, _objectSpread6.default)({}, state.models, (0, _defineProperty2.default)({}, namespace, true)),
          effects: (0, _objectSpread6.default)({}, state.effects, (0, _defineProperty2.default)({}, actionType, true))
        });
        break;

      case HIDE:
        // eslint-disable-line
        var effects = (0, _objectSpread6.default)({}, state.effects, (0, _defineProperty2.default)({}, actionType, false));
        var models = (0, _objectSpread6.default)({}, state.models, (0, _defineProperty2.default)({}, namespace, (0, _keys.default)(effects).some(function (actionType) {
          var _namespace = actionType.split('/')[0];
          if (_namespace !== namespace) return false;
          return effects[actionType];
        })));
        var global = (0, _keys.default)(models).some(function (namespace) {
          return models[namespace];
        });
        ret = (0, _objectSpread6.default)({}, state, {
          global: global,
          models: models,
          effects: effects
        });
        break;

      default:
        ret = state;
        break;
    }

    return ret;
  });

  function onEffect(effect, _ref3, model, actionType) {
    var put = _ref3.put;
    var namespace = model.namespace;

    if (only.length === 0 && except.length === 0 || only.length > 0 && only.indexOf(actionType) !== -1 || except.length > 0 && except.indexOf(actionType) === -1) {
      return (
        /*#__PURE__*/
        _regenerator.default.mark(function _callee() {
          var _args = arguments;
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return put({
                    type: SHOW,
                    payload: {
                      namespace: namespace,
                      actionType: actionType
                    }
                  });

                case 2:
                  _context.next = 4;
                  return effect.apply(void 0, _args);

                case 4:
                  _context.next = 6;
                  return put({
                    type: HIDE,
                    payload: {
                      namespace: namespace,
                      actionType: actionType
                    }
                  });

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        })
      );
    } else {
      return effect;
    }
  }

  return {
    extraReducers: extraReducers,
    onEffect: onEffect
  };
}

var _default = createLoading;
exports.default = _default;