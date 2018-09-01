"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
};