"use strict";

var _interopRequireDefault = require("../../@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixNamespace;

var _keys = _interopRequireDefault(require("../../@babel/runtime/core-js/object/keys.js"));

var _warning = _interopRequireDefault(require("../../warning/warning.js"));

var _utils = require("./utils");

var _constants = require("./constants");

function prefix(obj, namespace, type) {
  return (0, _keys.default)(obj).reduce(function (memo, key) {
    (0, _warning.default)(key.indexOf("".concat(namespace).concat(_constants.NAMESPACE_SEP)) !== 0, "[prefixNamespace]: ".concat(type, " ").concat(key, " should not be prefixed with namespace ").concat(namespace));
    var newKey = "".concat(namespace).concat(_constants.NAMESPACE_SEP).concat(key);
    memo[newKey] = obj[key];
    return memo;
  }, {});
}

function prefixNamespace(model) {
  var namespace = model.namespace,
      reducers = model.reducers,
      effects = model.effects;

  if (reducers) {
    if ((0, _utils.isArray)(reducers)) {
      model.reducers[0] = prefix(reducers[0], namespace, 'reducer');
    } else {
      model.reducers = prefix(reducers, namespace, 'reducer');
    }
  }

  if (effects) {
    model.effects = prefix(effects, namespace, 'effect');
  }

  return model;
}