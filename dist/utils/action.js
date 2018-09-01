"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var action = function action(type, payload) {
  return { type: type, payload: payload };
};

exports.default = action;