'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (texts) {
  return texts.replace(/\|/g, '\n');
};