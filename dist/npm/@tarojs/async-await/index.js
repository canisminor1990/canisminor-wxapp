var global = typeof window !== 'undefined' && window.Math === Math ? window : typeof self !== 'undefined' && self.Math === Math ? self : this;

if (!global.Promise) {
  global.Promise = require("../../promise-polyfill/lib/index.js");
}
if (!global.regeneratorRuntime) {
  global.regeneratorRuntime = require("../../regenerator-runtime/runtime.js");
}