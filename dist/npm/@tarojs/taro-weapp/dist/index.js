'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/* eslint-disable */

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';
/** Used to stand-in for `undefined` hash values. */

var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used as references for various `Number` constants. */

var INFINITY = 1 / 0;
/** `Object#toString` result references. */

var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';
/** Used to match property names within property paths. */

var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */

var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to match backslashes in property paths. */

var reEscapeChar = /\\(\\)?/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Detect free variable `global` from Node.js. */

var freeGlobal = (typeof global === "undefined" ? "undefined" : _typeof(global)) === 'object' && global && global.Object === Object && global;
/** Detect free variable `self`. */

var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) === 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
/** Used as references for various `Number` constants. */

var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */

function getValue(object, key) {
  return object == null ? undefined : object[key];
}
/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */

function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;

  if (value != null && typeof value.toString !== 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }

  return result;
}
/** Used for built-in method references. */

var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to detect overreaching core-js shims. */

var coreJsData = root['__core-js_shared__'];
/** Used to detect methods masquerading as native. */

var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var objectToString = objectProto.toString;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/** Built-in value references. */

var _Symbol = root.Symbol,
    splice = arrayProto.splice;
/* Built-in method references that are verified to be native. */

var Map$1 = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');
/** Used to convert symbols to primitives and strings. */

var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */

function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function hashGet(key) {
  var data = this.__data__;

  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */

function hashSet(key, value) {
  var data = this.__data__;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
} // Add methods to `Hash`.


Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */

function listCacheClear() {
  this.__data__ = [];
}
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  var lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  return true;
}
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */

function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
} // Add methods to `ListCache`.


ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */

function mapCacheClear() {
  this.__data__ = {
    hash: new Hash(),
    map: new (Map$1 || ListCache)(),
    string: new Hash()
  };
}
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */

function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
} // Add methods to `MapCache`.


MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */

function assocIndexOf(array, key) {
  var length = array.length;

  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}
/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */

function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);
  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }

  return index && index == length ? object : undefined;
}
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */

function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }

  var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */

function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value === 'string') {
    return value;
  }

  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */

function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */

function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key === 'string' ? 'string' : 'hash'] : data.map;
}
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */

function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}
/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */

function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }

  var type = _typeof(value);

  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
    return true;
  }

  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */

function isKeyable(value) {
  var type = _typeof(value);

  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */

function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */

var stringToPath = memoize(function (string) {
  string = toString(string);
  var result = [];

  if (reLeadingDot.test(string)) {
    result.push('');
  }

  string.replace(rePropName, function (match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */

function toKey(value) {
  if (typeof value === 'string' || isSymbol(value)) {
    return value;
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */

function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */

function memoize(func, resolver) {
  if (typeof func !== 'function' || resolver && typeof resolver !== 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  var memoized = function memoized() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }

    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };

  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
} // Assign cache to `_.memoize`.


memoize.Cache = MapCache;
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */

function eq(value, other) {
  return value === other || value !== value && other !== other;
}
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */

var isArray = Array.isArray;
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */

function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */

function isObject(value) {
  var type = _typeof(value);

  return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */

function isObjectLike(value) {
  return !!value && _typeof(value) === 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */

function isSymbol(value) {
  return _typeof(value) === 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */

function toString(value) {
  return value == null ? '' : baseToString(value);
}
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */

function isIndex(value, length) {
  var type = _typeof(value);

  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function baseAssignValue(object, key, value) {
  if (key == '__proto__') {
    Object.defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}
/** Used to check objects for own properties. */

var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function assignValue(object, key, value) {
  var objValue = object[key];

  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
/**
 * The base implementation of `set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */

function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }

  path = castPath(path, object);
  var length = path.length;
  var lastIndex = length - 1;
  var index = -1;
  var nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]);
    var newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;

      if (newValue === undefined) {
        newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
      }
    }

    assignValue(nested, key, newValue);
    nested = nested[key];
  }

  return object;
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */

function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @see has, hasIn, get, unset
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': 3 } }] }
 *
 * set(object, 'a[0].b.c', 4)
 * console.log(object.a[0].b.c)
 * // => 4
 *
 * set(object, ['x', '0', 'y', 'z'], 5)
 * console.log(object.x[0].y.z)
 * // => 5
 */

function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

function dynamicRecursive(component, param, data, uid) {
  data = data || [];
  return param.map(function (paramItem, idx) {
    var inData = paramItem.subscript ? data[paramItem.subscript] || [] : data;
    var res = {
      name: paramItem.name || '',
      path: paramItem.path || '',
      subscript: paramItem.subscript
    };
    res.components = [];

    if (res.name) {
      res.components = inData.map(function (d, index) {
        var res = {
          fn: "dy_".concat(uid, "_").concat(paramItem.subscript, "_").concat(paramItem.name).concat(index, "_").concat(idx),
          body: function (d) {
            return Object.assign({
              $name: "dy_".concat(uid, "_").concat(paramItem.subscript, "_").concat(paramItem.name).concat(index)
            }, paramItem.args && paramItem.args.call(component, d, index));
          }(d)
        };

        if (paramItem.children && paramItem.children.length) {
          res.children = dynamicRecursive(component, paramItem.children, d, uid);
        }

        return res;
      });
    } else if (paramItem.children && paramItem.children.length) {
      res.children = inData.map(function (d, index) {
        return dynamicRecursive(component, paramItem.children, d, uid);
      });
    }

    return res;
  });
}

/*!
 * dashify <https://github.com/jonschlinkert/dashify>
 *
 * console.log(dashify('fooBar'));
 * => 'foo-bar'
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function dashify(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  }

  return str.trim().replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\W/g, function (m) {
    return (/[À-ž]/.test(m) ? m : '-'
    );
  }).replace(/^-+|-+$/g, '').replace(/-{2,}/g, function (m) {
    return options && options.condense ? '-' : m;
  }).toLowerCase();
}

function isObject$1(val) {
  return val != null && _typeof(val) === 'object' && Array.isArray(val) === false;
}

function inlineStyle(obj) {
  if (obj == null) {
    return '';
  }

  if (typeof obj === 'string') {
    return obj;
  }

  if (obj === null || obj === undefined) {
    return '';
  }

  if (!isObject$1(obj)) {
    throw new TypeError('style 只能是一个对象或字符串。');
  }

  return Object.keys(obj).map(function (key) {
    return dashify(key).concat(':').concat(obj[key]);
  }).join(';');
}

var ENV_TYPE = {
  WEAPP: 'WEAPP',
  WEB: 'WEB',
  RN: 'RN'
};
function getEnv() {
  if (typeof wx !== 'undefined' && wx.getSystemInfo) {
    return ENV_TYPE.WEAPP;
  }

  if (typeof window !== 'undefined') {
    return ENV_TYPE.WEB;
  }

  if (typeof global !== 'undefined' && global.ErrorUtils) {
    return ENV_TYPE.RN;
  }

  return 'Unknown environment';
}

var Events =
/*#__PURE__*/
function () {
  function Events(opts) {
    _classCallCheck(this, Events);

    if (typeof opts !== 'undefined' && opts.callbacks) {
      this.callbacks = opts.callbacks;
    } else {
      this.callbacks = {};
    }
  }

  _createClass(Events, [{
    key: "on",
    value: function on(events, callback, context) {
      var calls, event, node, tail, list;

      if (!callback) {
        return this;
      }

      events = events.split(Events.eventSplitter);
      calls = this.callbacks;

      while (event = events.shift()) {
        list = calls[event];
        node = list ? list.tail : {};
        node.next = tail = {};
        node.context = context;
        node.callback = callback;
        calls[event] = {
          tail: tail,
          next: list ? list.next : node
        };
      }

      return this;
    }
  }, {
    key: "off",
    value: function off(events, callback, context) {
      var event, calls, node, tail, cb, ctx;

      if (!(calls = this.callbacks)) {
        return this;
      }

      if (!(events || callback || context)) {
        delete this.callbacks;
        return this;
      }

      events = events ? events.split(Events.eventSplitter) : Object.keys(calls);

      while (event = events.shift()) {
        node = calls[event];
        delete calls[event];

        if (!node || !(callback || context)) {
          continue;
        }

        tail = node.tail;

        while ((node = node.next) !== tail) {
          cb = node.callback;
          ctx = node.context;

          if (callback && cb !== callback || context && ctx !== context) {
            this.on(event, cb, ctx);
          }
        }
      }

      return this;
    }
  }, {
    key: "trigger",
    value: function trigger(events) {
      var event, node, calls, tail, rest;

      if (!(calls = this.callbacks)) {
        return this;
      }

      events = events.split(Events.eventSplitter);
      rest = [].slice.call(arguments, 1);

      while (event = events.shift()) {
        if (node = calls[event]) {
          tail = node.tail;

          while ((node = node.next) !== tail) {
            node.callback.apply(node.context || this, rest);
          }
        }
      }

      return this;
    }
  }]);

  return Events;
}();

Events.eventSplitter = /\s+/;

function render() {}

var onAndSyncApis = {
  onSocketOpen: true,
  onSocketError: true,
  onSocketMessage: true,
  onSocketClose: true,
  onBackgroundAudioPlay: true,
  onBackgroundAudioPause: true,
  onBackgroundAudioStop: true,
  onNetworkStatusChange: true,
  onAccelerometerChange: true,
  onCompassChange: true,
  onBluetoothAdapterStateChange: true,
  onBluetoothDeviceFound: true,
  onBLEConnectionStateChange: true,
  onBLECharacteristicValueChange: true,
  onBeaconUpdate: true,
  onBeaconServiceChange: true,
  onUserCaptureScreen: true,
  onHCEMessage: true,
  onGetWifiList: true,
  onWifiConnected: true,
  setStorageSync: true,
  getStorageSync: true,
  getStorageInfoSync: true,
  removeStorageSync: true,
  clearStorageSync: true,
  getSystemInfoSync: true,
  getExtConfigSync: true,
  getLogManager: true
};
var noPromiseApis = {
  // 媒体
  stopRecord: true,
  getRecorderManager: true,
  pauseVoice: true,
  stopVoice: true,
  pauseBackgroundAudio: true,
  stopBackgroundAudio: true,
  getBackgroundAudioManager: true,
  createAudioContext: true,
  createInnerAudioContext: true,
  createVideoContext: true,
  createCameraContext: true,
  // 位置
  createMapContext: true,
  // 设备
  canIUse: true,
  startAccelerometer: true,
  stopAccelerometer: true,
  startCompass: true,
  stopCompass: true,
  // 界面
  hideToast: true,
  hideLoading: true,
  showNavigationBarLoading: true,
  hideNavigationBarLoading: true,
  createAnimation: true,
  pageScrollTo: true,
  createSelectorQuery: true,
  createCanvasContext: true,
  createContext: true,
  drawCanvas: true,
  hideKeyboard: true,
  stopPullDownRefresh: true,
  // 拓展接口
  arrayBufferToBase64: true,
  base64ToArrayBuffer: true,
  getUpdateManager: true,
  createWorker: true
};
var otherApis = {
  // 网络
  uploadFile: true,
  downloadFile: true,
  connectSocket: true,
  sendSocketMessage: true,
  closeSocket: true,
  // 媒体
  chooseImage: true,
  previewImage: true,
  getImageInfo: true,
  saveImageToPhotosAlbum: true,
  startRecord: true,
  playVoice: true,
  getBackgroundAudioPlayerState: true,
  playBackgroundAudio: true,
  seekBackgroundAudio: true,
  chooseVideo: true,
  saveVideoToPhotosAlbum: true,
  loadFontFace: true,
  // 文件
  saveFile: true,
  getFileInfo: true,
  getSavedFileList: true,
  getSavedFileInfo: true,
  removeSavedFile: true,
  openDocument: true,
  // 数据缓存
  setStorage: true,
  getStorage: true,
  getStorageInfo: true,
  removeStorage: true,
  clearStorage: true,
  // 导航
  navigateBack: true,
  navigateTo: true,
  redirectTo: true,
  switchTab: true,
  reLaunch: true,
  // 位置
  getLocation: true,
  chooseLocation: true,
  openLocation: true,
  // 设备
  getSystemInfo: true,
  getNetworkType: true,
  makePhoneCall: true,
  scanCode: true,
  setClipboardData: true,
  getClipboardData: true,
  openBluetoothAdapter: true,
  closeBluetoothAdapter: true,
  getBluetoothAdapterState: true,
  startBluetoothDevicesDiscovery: true,
  stopBluetoothDevicesDiscovery: true,
  getBluetoothDevices: true,
  getConnectedBluetoothDevices: true,
  createBLEConnection: true,
  closeBLEConnection: true,
  getBLEDeviceServices: true,
  getBLEDeviceCharacteristics: true,
  readBLECharacteristicValue: true,
  writeBLECharacteristicValue: true,
  notifyBLECharacteristicValueChange: true,
  startBeaconDiscovery: true,
  stopBeaconDiscovery: true,
  getBeacons: true,
  setScreenBrightness: true,
  getScreenBrightness: true,
  setKeepScreenOn: true,
  vibrateLong: true,
  vibrateShort: true,
  addPhoneContact: true,
  getHCEState: true,
  startHCE: true,
  stopHCE: true,
  sendHCEMessage: true,
  startWifi: true,
  stopWifi: true,
  connectWifi: true,
  getWifiList: true,
  setWifiList: true,
  getConnectedWifi: true,
  // 界面
  showToast: true,
  showLoading: true,
  showModal: true,
  showActionSheet: true,
  setNavigationBarTitle: true,
  setNavigationBarColor: true,
  setTabBarBadge: true,
  removeTabBarBadge: true,
  showTabBarRedDot: true,
  hideTabBarRedDot: true,
  setTabBarStyle: true,
  setTabBarItem: true,
  showTabBar: true,
  hideTabBar: true,
  setTopBarText: true,
  startPullDownRefresh: true,
  canvasToTempFilePath: true,
  canvasGetImageData: true,
  canvasPutImageData: true,
  // 第三方平台
  getExtConfig: true,
  // 开放接口
  login: true,
  checkSession: true,
  authorize: true,
  getUserInfo: true,
  checkIsSupportFacialRecognition: true,
  startFacialRecognitionVerify: true,
  startFacialRecognitionVerifyAndUploadVideo: true,
  requestPayment: true,
  showShareMenu: true,
  hideShareMenu: true,
  updateShareMenu: true,
  getShareInfo: true,
  chooseAddress: true,
  addCard: true,
  openCard: true,
  openSetting: true,
  getSetting: true,
  getWeRunData: true,
  navigateToMiniProgram: true,
  navigateBackMiniProgram: true,
  chooseInvoiceTitle: true,
  checkIsSupportSoterAuthentication: true,
  startSoterAuthentication: true,
  checkIsSoterEnrolledInDevice: true //

};

function initPxTransform(config) {
  var _config$designWidth = config.designWidth,
      designWidth = _config$designWidth === void 0 ? 700 : _config$designWidth,
      _config$deviceRatio = config.deviceRatio,
      deviceRatio = _config$deviceRatio === void 0 ? {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  } : _config$deviceRatio;
  this.config = this.config || {};
  this.config.designWidth = designWidth;
  this.config.deviceRatio = deviceRatio;
}

/* eslint-disable camelcase */
var eventCenter = new Events();

var nextTick = function nextTick(fn) {
  var _fn;

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  fn = typeof fn === 'function' ? (_fn = fn).bind.apply(_fn, [null].concat(args)) : fn;
  var timerFunc = wx.nextTick ? wx.nextTick : setTimeout;
  timerFunc(fn);
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

/** Detect free variable `global` from Node.js. */

var freeGlobal$1 = _typeof(commonjsGlobal) == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;

/** Detect free variable `self`. */

var freeSelf$1 = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root$1 = _freeGlobal || freeSelf$1 || Function('return this')();
var _root = root$1;

/** Built-in value references. */

var _Symbol2 = _root.Symbol;
var _Symbol$1 = _Symbol2;

/** Used for built-in method references. */

var objectProto$1 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto$1.toString;
/** Built-in value references. */

var symToStringTag = _Symbol$1 ? _Symbol$1.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag(value) {
  var isOwn = hasOwnProperty$1.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString$1 = objectProto$2.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function objectToString$1(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString$1;

/** `Object#toString` result references. */

var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag$1 = _Symbol$1 ? _Symbol$1.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag$1 && symToStringTag$1 in Object(value) ? _getRawTag(value) : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;

/** Built-in value references. */

var getPrototype = _overArg(Object.getPrototypeOf, Object);
var _getPrototype = getPrototype;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike$1(value) {
  return value != null && _typeof(value) == 'object';
}

var isObjectLike_1 = isObjectLike$1;

/** `Object#toString` result references. */

var objectTag = '[object Object]';
/** Used for built-in method references. */

var funcProto$1 = Function.prototype,
    objectProto$3 = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString$1 = funcProto$1.toString;
/** Used to check objects for own properties. */

var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
/** Used to infer the `Object` constructor. */

var objectCtorString = funcToString$1.call(Object);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */

function isPlainObject(value) {
  if (!isObjectLike_1(value) || _baseGetTag(value) != objectTag) {
    return false;
  }

  var proto = _getPrototype(value);

  if (proto === null) {
    return true;
  }

  var Ctor = hasOwnProperty$2.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString$1.call(Ctor) == objectCtorString;
}

var isPlainObject_1 = isPlainObject;

function isEmptyObject(obj) {
  if (!obj || !isPlainObject_1(obj)) {
    return false;
  }

  for (var n in obj) {
    if (obj.hasOwnProperty(n)) {
      return false;
    }
  }

  return true;
}
function noop() {}
function isFunction$1(arg) {
  return typeof arg === 'function';
}
function isArray$1(arg) {
  return Array.isArray(arg);
}
function shakeFnFromObject(obj) {
  var newObj;

  if (isArray$1(obj)) {
    newObj = [];
    var len = obj.length;

    for (var i = 0; i < len; i++) {
      newObj.push(shakeFnFromObject(obj[i]));
    }
  } else if (isPlainObject_1(obj)) {
    newObj = {};

    for (var key in obj) {
      if (isFunction$1(obj[key])) {
        continue;
      }

      var ret = shakeFnFromObject(obj[key]);
      newObj[key] = ret;
    }
  } else {
    return obj;
  }

  return newObj;
}
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

function diffArrToPath(to, from) {
  var res = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var keyPrev = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var len = to.length;

  for (var i = 0; i < len; i++) {
    var toItem = to[i];
    var fromItem = from[i];
    var targetKey = "".concat(keyPrev, "[").concat(i, "]");

    if (toItem === fromItem) {
      continue;
    } else if (_typeof(toItem) !== _typeof(fromItem)) {
      res[targetKey] = toItem;
    } else {
      if (_typeof(toItem) !== 'object') {
        res[targetKey] = toItem;
      } else {
        var arrTo = isArray$1(toItem);
        var arrFrom = isArray$1(fromItem);

        if (arrTo !== arrFrom) {
          res[targetKey] = toItem;
        } else if (arrTo && arrFrom) {
          if (toItem.length < fromItem.length) {
            res[targetKey] = toItem;
          } else {
            // 数组
            diffArrToPath(toItem, fromItem, res, "".concat(targetKey));
          }
        } else {
          if (!toItem || !fromItem || keyList(toItem).length < keyList(fromItem).length) {
            res[targetKey] = toItem;
          } else {
            // 对象
            diffObjToPath(toItem, fromItem, res, "".concat(targetKey, "."));
          }
        }
      }
    }
  }

  return res;
} // 比较的对象均为plainObject，且函数已被过滤


function diffObjToPath(to, from) {
  var res = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var keyPrev = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var keys = keyList(to);
  var len = keys.length;

  for (var i = 0; i < len; i++) {
    var key = keys[i];
    var toItem = to[key];
    var fromItem = from[key];
    var targetKey = "".concat(keyPrev).concat(key);

    if (toItem === fromItem) {
      continue;
    } else if (!hasProp.call(from, key)) {
      res[targetKey] = toItem;
    } else if (_typeof(toItem) !== _typeof(fromItem)) {
      res[targetKey] = toItem;
    } else {
      if (_typeof(toItem) !== 'object') {
        res[targetKey] = toItem;
      } else {
        var arrTo = isArray$1(toItem);
        var arrFrom = isArray$1(fromItem);

        if (arrTo !== arrFrom) {
          res[targetKey] = toItem;
        } else if (arrTo && arrFrom) {
          if (toItem.length < fromItem.length) {
            res[targetKey] = toItem;
          } else {
            // 数组
            diffArrToPath(toItem, fromItem, res, "".concat(targetKey));
          }
        } else {
          // null
          if (!toItem || !fromItem || keyList(toItem).length < keyList(fromItem).length) {
            res[targetKey] = toItem;
          } else {
            // 对象
            diffObjToPath(toItem, fromItem, res, "".concat(targetKey, "."));
          }
        }
      }
    }
  }

  return res;
}
function queryToJson(str) {
  var dec = decodeURIComponent;
  var qp = str.split('&');
  var ret = {};
  var name;
  var val;

  for (var i = 0, l = qp.length, item; i < l; ++i) {
    item = qp[i];

    if (item.length) {
      var s = item.indexOf('=');

      if (s < 0) {
        name = dec(item);
        val = '';
      } else {
        name = dec(item.slice(0, s));
        val = dec(item.slice(s + 1));
      }

      if (typeof ret[name] === 'string') {
        // inline'd type check
        ret[name] = [ret[name]];
      }

      if (isArray$1(ret[name])) {
        ret[name].push(val);
      } else {
        ret[name] = val;
      }
    }
  }

  return ret; // Object
}

var _loadTime = new Date().getTime().toString();

var _i = 1;
function getUniqueKey() {
  return _loadTime + _i++;
}

var data = {};
function cacheDataSet(key, val) {
  data[key] = val;
}
function cacheDataGet(key, delelteAfterGet) {
  var temp = data[key];
  delelteAfterGet && delete data[key];
  return temp;
}
function cacheDataHas(key) {
  return key in data;
}

var privatePropValName = '__triggerObserer';
var anonymousFnNamePreffix = 'func__';
var componentFnReg = /^__fn_/;
var routerParamsPrivateKey = '__key_';
var pageExtraFns = ['onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll', 'onTabItemTap'];

function bindProperties(weappComponentConf, ComponentClass, isPage) {
  weappComponentConf.properties = ComponentClass.properties || {};
  var defaultProps = ComponentClass.defaultProps || {};

  for (var key in defaultProps) {
    if (defaultProps.hasOwnProperty(key)) {
      weappComponentConf.properties[key] = null;
    }
  }

  if (isPage) {
    weappComponentConf.properties[routerParamsPrivateKey] = null;
    var defaultParams = ComponentClass.defaultParams || {};

    for (var _key in defaultParams) {
      if (defaultParams.hasOwnProperty(_key)) {
        weappComponentConf.properties[_key] = null;
      }
    }
  } // 拦截props的更新，插入生命周期
  // 调用小程序setData或会造成性能消耗


  weappComponentConf.properties[privatePropValName] = {
    type: null,
    observer: function observer() {
      if (!this.$component || !this.$component.__isReady) return;
      var nextProps = filterProps(ComponentClass.properties, ComponentClass.defaultProps, this.$component.props, this.data);
      this.$component.props = nextProps;
      this.$component._unsafeCallUpdate = true;
      updateComponent(this.$component);
      this.$component._unsafeCallUpdate = false;
    }
  };
}

function bindBehaviors(weappComponentConf, ComponentClass) {
  if (ComponentClass.behaviors) {
    weappComponentConf.behaviors = ComponentClass.behaviors;
  }
}

function bindStaticOptions(weappComponentConf, ComponentClass) {
  if (ComponentClass.options) {
    weappComponentConf.options = ComponentClass.options;
  }
}

function bindStaticFns(weappComponentConf, ComponentClass) {
  for (var key in ComponentClass) {
    typeof ComponentClass[key] === 'function' && (weappComponentConf[key] = ComponentClass[key]);
  } // 低版本 IOS 下部分属性不能直接访问


  Object.getOwnPropertyNames(ComponentClass).forEach(function (key) {
    var excludes = ['arguments', 'caller', 'length', 'name', 'prototype'];

    if (excludes.indexOf(key) < 0) {
      typeof ComponentClass[key] === 'function' && (weappComponentConf[key] = ComponentClass[key]);
    }
  });
}

function processEvent(eventHandlerName, obj) {
  if (obj[eventHandlerName]) return;

  obj[eventHandlerName] = function (event) {
    if (event) {
      event.preventDefault = function () {};

      event.stopPropagation = function () {};

      event.currentTarget = event.currentTarget || event.target || {};
      Object.assign(event.target, event.detail);
      Object.assign(event.currentTarget, event.detail);
    }

    var scope = this.$component;
    var callScope = scope;
    var isAnonymousFn = eventHandlerName.indexOf(anonymousFnNamePreffix) > -1;
    var realArgs = [];
    var detailArgs = [];
    var datasetArgs = []; // 解析从dataset中传过来的参数

    var dataset = event.currentTarget.dataset || {};
    var bindArgs = {};
    var eventHandlerNameLower = eventHandlerName.toLocaleLowerCase();
    Object.keys(dataset).forEach(function (key) {
      var keyLower = key.toLocaleLowerCase();

      if (/^e/.test(keyLower)) {
        // 小程序属性里中划线后跟一个下划线会解析成不同的结果
        keyLower = keyLower.replace(/^e/, '');
        keyLower = keyLower.toLocaleLowerCase();

        if (keyLower.indexOf(eventHandlerNameLower) >= 0) {
          var argName = keyLower.replace(eventHandlerNameLower, '');
          bindArgs[argName] = dataset[key];
        }
      }
    }); // 如果是通过triggerEvent触发,并且带有参数

    if (event.detail && event.detail.__arguments && event.detail.__arguments.length > 0) {
      detailArgs = event.detail.__arguments;
    } // 普通的事件（非匿名函数），会直接call


    if (!isAnonymousFn) {
      if ('so' in bindArgs) {
        if (bindArgs['so'] !== 'this') {
          callScope = bindArgs['so'];
        }

        delete bindArgs['so'];
      }

      if (detailArgs.length > 0) {
        detailArgs[0] && (callScope = detailArgs[0]);
        detailArgs.shift();
      }

      if (!isEmptyObject(bindArgs)) {
        datasetArgs = Object.keys(bindArgs).sort().map(function (key) {
          return bindArgs[key];
        });
      }

      realArgs = _toConsumableArray(datasetArgs).concat(_toConsumableArray(detailArgs), [event]);
    } else {
      // 匿名函数，会将scope作为第一个参数
      var _scope = null;

      if ('so' in bindArgs) {
        if (bindArgs['so'] !== 'this') {
          _scope = bindArgs['so'];
        }

        delete bindArgs['so'];
      }

      if (detailArgs.length > 0) {
        detailArgs[0] && (callScope = detailArgs[0]);
        detailArgs.shift();
      }

      if (!isEmptyObject(bindArgs)) {
        datasetArgs = Object.keys(bindArgs).sort().map(function (key) {
          return bindArgs[key];
        });
      }

      realArgs = [callScope || _scope].concat(_toConsumableArray(datasetArgs), _toConsumableArray(detailArgs), [event]);
    }

    scope[eventHandlerName].apply(callScope, realArgs);
  };
}

function bindEvents(weappComponentConf, events, isPage) {
  weappComponentConf.methods = weappComponentConf.methods || {};
  var target = weappComponentConf.methods;
  events.forEach(function (name) {
    processEvent(name, target);
  });
}

function filterProps(properties) {
  var defaultProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var componentProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var weappComponentData = arguments.length > 3 ? arguments[3] : undefined;
  var newProps = Object.assign({}, componentProps);

  for (var propName in properties) {
    if (propName === privatePropValName) {
      continue;
    }

    if (typeof componentProps[propName] === 'function') {
      newProps[propName] = componentProps[propName];
    } else if (propName in weappComponentData && (properties[propName] !== null || weappComponentData[propName] !== null)) {
      newProps[propName] = weappComponentData[propName];
    }

    if (componentFnReg.test(propName)) {
      if (weappComponentData[propName] === true) {
        var fnName = propName.replace(componentFnReg, '');
        newProps[fnName] = noop;
      }

      delete newProps[propName];
    }
  }

  if (!isEmptyObject(defaultProps)) {
    for (var _propName in defaultProps) {
      if (newProps[_propName] === undefined) {
        newProps[_propName] = defaultProps[_propName];
      }
    }
  }

  return newProps;
}

function filterParams(data) {
  var defaultParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var res = {};

  for (var paramName in defaultParams) {
    res[paramName] = paramName in data ? data[paramName] : defaultParams[paramName];
  }

  return res;
}

function componentTrigger(component, key, args) {
  var _component$key;

  args = args || [];

  if (key === 'componentWillMount') {
    if (component['$$refs'] && component['$$refs'].length > 0) {
      var refs = {};
      component['$$refs'].forEach(function (ref) {
        var target;

        if (ref.type === 'component') {
          target = component.$scope.selectComponent("#".concat(ref.id));
          target = target.$component || target;

          if ('refName' in ref && ref['refName']) {
            refs[ref.refName] = target;
          } else if ('fn' in ref && typeof ref['fn'] === 'function') {
            ref['fn'].call(component, target);
          }
        }
      });
      component.refs = Object.assign({}, component.refs || {}, refs);
    }
  }

  if (key === 'componentDidMount') {
    if (component['$$refs'] && component['$$refs'].length > 0) {
      var _refs = {};
      component['$$refs'].forEach(function (ref) {
        var target;
        var query = wx.createSelectorQuery().in(component.$scope);

        if (ref.type === 'dom') {
          target = query.select("#".concat(ref.id));

          if ('refName' in ref && ref['refName']) {
            _refs[ref.refName] = target;
          } else if ('fn' in ref && typeof ref['fn'] === 'function') {
            ref['fn'].call(component, target);
          }
        }
      });
      component.refs = Object.assign({}, component.refs || {}, _refs);
    }
  }

  if (key === 'componentDidMount') {
    if (component['$$refs'] && component['$$refs'].length > 0) {
      var _refs2 = {};
      component['$$refs'].forEach(function (ref) {
        var target;
        var query = wx.createSelectorQuery().in(component.$scope);

        if (ref.type === 'component') {
          target = component.$scope.selectComponent("#".concat(ref.id));
          target = target.$component || target;
        } else {
          target = query.select("#".concat(ref.id));
        }

        if ('refName' in ref && ref['refName']) {
          _refs2[ref.refName] = target;
        } else if ('fn' in ref && typeof ref['fn'] === 'function') {
          ref['fn'].call(component, target);
        }
      });
      component.refs = _refs2;
    }
  }

  if (key === 'componentWillUnmount') {
    component._dirty = true;
    component._disable = true;
    component.$router = {
      params: {}
    };
    component._pendingStates = [];
    component._pendingCallbacks = [];
  }

  component[key] && typeof component[key] === 'function' && (_component$key = component[key]).call.apply(_component$key, [component].concat(_toConsumableArray(args)));

  if (key === 'componentWillMount') {
    component._dirty = false;
    component._disable = false;
    component.state = component.getState();
  }
}

function initComponent(ComponentClass, isPage) {
  if (this.$component.__isReady) return; // ready之后才可以setData,
  // ready之前，小程序组件初始化时仍然会触发observer，__isReady为否的时候放弃处理observer

  this.$component.__isReady = true; // 页面Ready的时候setData更新，此时并未didMount,触发observer但不会触发子组件更新
  // 小程序组件ready，但是数据并没有ready，需要通过updateComponent来初始化数据，setData完成之后才是真正意义上的组件ready
  // 动态组件执行改造函数副本的时,在初始化数据前计算好props

  if (!isPage) {
    var nextProps = filterProps(ComponentClass.properties, ComponentClass.defaultProps, this.$component.props, this.data);
    this.$component.props = nextProps;
  }

  updateComponent(this.$component);
}

function createComponent(ComponentClass, isPage) {
  var initData = {
    _componentProps: 1
  };
  var componentProps = filterProps({}, ComponentClass.defaultProps);
  var componentInstance = new ComponentClass(componentProps);
  componentInstance._constructor && componentInstance._constructor(componentProps);

  try {
    componentInstance.state = componentInstance._createData();
  } catch (err) {
    var errLine = err.stack.toString().split(/\n/)[2] || '';
    console.warn("[Taro warn]\n      ".concat(err.message, "\n      ").concat(errLine, ": \u8BF7\u7ED9\u7EC4\u4EF6\u63D0\u4F9B\u4E00\u4E2A `defaultProps` \u4EE5\u63D0\u9AD8\u521D\u6B21\u6E32\u67D3\u6027\u80FD\uFF01"));
  }

  initData = Object.assign({}, initData, componentInstance.props, componentInstance.state);
  var weappComponentConf = {
    data: initData,
    created: function created() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.$component = componentInstance.$scope ? new ComponentClass() : componentInstance;

      this.$component._init(this);

      this.$component.render = this.$component._createData;
      Object.assign(this.$component.$router.params, options);
    },
    attached: function attached() {
      var hasParamsCache;

      if (isPage) {
        var params = {};
        hasParamsCache = cacheDataHas(this.data[routerParamsPrivateKey]);

        if (hasParamsCache) {
          params = Object.assign({}, ComponentClass.defaultParams, cacheDataGet(this.data[routerParamsPrivateKey], true));
        } else {
          // 直接启动，非内部跳转
          params = filterParams(this.data, ComponentClass.defaultParams);
        }

        Object.assign(this.$component.$router.params, params);
      }

      if (!isPage || hasParamsCache || ComponentClass.defaultParams) {
        initComponent.apply(this, [ComponentClass, isPage]);
      }
    },
    ready: function ready() {
      if (!isPage && !this.$component.__mounted) {
        this.$component.__mounted = true;
        componentTrigger(this.$component, 'componentDidMount');
      }
    },
    detached: function detached() {
      componentTrigger(this.$component, 'componentWillUnmount');
    }
  };

  if (isPage) {
    weappComponentConf.methods = weappComponentConf.methods || {};

    weappComponentConf.methods['onLoad'] = function () {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (this.$component.__isReady) return;
      Object.assign(this.$component.$router.params, options);
      initComponent.apply(this, [ComponentClass, isPage]);
    };

    weappComponentConf.methods['onReady'] = function () {
      this.$component.__mounted = true;
      componentTrigger(this.$component, 'componentDidMount');
    };

    weappComponentConf.methods['onShow'] = function () {
      componentTrigger(this.$component, 'componentDidShow');
    };

    weappComponentConf.methods['onHide'] = function () {
      componentTrigger(this.$component, 'componentDidHide');
    };

    pageExtraFns.forEach(function (fn) {
      if (componentInstance[fn] && typeof componentInstance[fn] === 'function') {
        weappComponentConf.methods[fn] = function () {
          var component = this.$component;

          if (component[fn] && typeof component[fn] === 'function') {
            var _component$fn;

            return (_component$fn = component[fn]).call.apply(_component$fn, [component].concat(Array.prototype.slice.call(arguments)));
          }
        };
      }
    });
  }

  bindProperties(weappComponentConf, ComponentClass, isPage);
  bindBehaviors(weappComponentConf, ComponentClass);
  bindStaticFns(weappComponentConf, ComponentClass);
  bindStaticOptions(weappComponentConf, ComponentClass);
  ComponentClass['$$events'] && bindEvents(weappComponentConf, ComponentClass['$$events'], isPage);

  if (ComponentClass['externalClasses'] && ComponentClass['externalClasses'].length) {
    weappComponentConf['externalClasses'] = ComponentClass['externalClasses'];
  }

  return weappComponentConf;
}

var privatePropKeyName = '_triggerObserer';
function updateComponent(component) {
  var props = component.props;
  var prevProps = component.prevProps || props;
  component.props = prevProps;

  if (component.__mounted && component._unsafeCallUpdate === true && component.componentWillReceiveProps) {
    component._disable = true;
    component.componentWillReceiveProps(props);
    component._disable = false;
  } // 在willMount前执行构造函数的副本


  if (!component.__componentWillMountTriggered) {
    component._constructor && component._constructor(props);
  }

  var state = component.getState();
  var prevState = component.prevState || state;
  var skip = false;

  if (component.__mounted) {
    if (typeof component.shouldComponentUpdate === 'function' && component.shouldComponentUpdate(props, state) === false) {
      skip = true;
    } else if (typeof component.componentWillUpdate === 'function') {
      component.componentWillUpdate(props, state);
    }
  }

  component.props = props;
  component.state = state;
  component._dirty = false;

  if (!component.__componentWillMountTriggered) {
    component.__componentWillMountTriggered = true;
    componentTrigger(component, 'componentWillMount');
  }

  if (!skip) {
    if (component.__mounted && typeof component.componentDidUpdate === 'function') {
      component.componentDidUpdate(prevProps, prevState);
    }

    doUpdate(component);
  }

  component.prevProps = component.props;
  component.prevState = component.state;
}

function doUpdate(component) {
  var state = component.state,
      _component$props = component.props,
      props = _component$props === void 0 ? {} : _component$props;
  var data = state || {};

  if (component._createData) {
    data = component._createData(state, props);
  }

  var privatePropKeyVal = component.$scope.data[privatePropKeyName] || false;
  data = Object.assign({}, props, data);

  if (component.$usedState && component.$usedState.length) {
    var _data = {};
    component.$usedState.forEach(function (key) {
      var val = get(data, key);

      if (typeof val === 'undefined') {
        return;
      }

      if (_typeof(val) === 'object') {
        val = shakeFnFromObject(val);

        if (!isEmptyObject(val)) {
          set(_data, key, val);
        }
      } else {
        set(_data, key, val);
      }
    });
    data = _data;
  } // 改变这个私有的props用来触发(observer)子组件的更新


  data[privatePropKeyName] = !privatePropKeyVal;
  var dataDiff = diffObjToPath(data, component.$scope.data);
  component.$scope.setData(dataDiff, function () {
    if (component._pendingCallbacks) {
      while (component._pendingCallbacks.length) {
        component._pendingCallbacks.pop().call(component);
      }
    }
  });
}

var items = [];
function enqueueRender(component) {
  // tslint:disable-next-line:no-conditional-assignment
  if (!component._dirty && (component._dirty = true) && items.push(component) === 1) {
    nextTick(rerender);
  }
}
function rerender() {
  var p;
  var list = items;
  items = []; // tslint:disable-next-line:no-conditional-assignment

  while (p = list.pop()) {
    if (p._dirty) {
      updateComponent(p, true);
    }
  }
}

// #私有的__componentProps更新用于触发子组件中对应obsever，生命周期componentWillReciveProps,componentShouldUpdate在这里处理
// #父组件传过来的props放到data.__props中供模板使用，这么做的目的是模拟reciveProps生命周期
// 执行顺序：组件setState -> 组件_createData() -> 对应的小程序组件setData（组件更新）-> 子组件的__componentProps.observer执行
//          -> 触发子组件componentWillReciveProps，更新子组件props,componentShouldUpdate -> 子组件_createData -> 子组件setData

var BaseComponent =
/*#__PURE__*/
function () {
  // _createData的时候生成，小程序中通过data.__createData访问
  // this.props,小程序中通过data.__props访问
  // 会在componentDidMount后置为true
  function BaseComponent() {
    _classCallCheck(this, BaseComponent);

    Object.defineProperty(this, "__computed", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "__props", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "__isReady", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "__mounted", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "nextProps", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_dirty", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: true
    });
    Object.defineProperty(this, "_disable", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: true
    });
    Object.defineProperty(this, "_pendingStates", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_pendingCallbacks", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "$router", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        params: {}
      }
    });
    this.state = {};
    this.props = {};
  }

  _createClass(BaseComponent, [{
    key: "_constructor",
    value: function _constructor(props) {
      this.props = props || {};
    }
  }, {
    key: "_init",
    value: function _init(scope) {
      this.$scope = scope;
    }
  }, {
    key: "setState",
    value: function setState(state, callback) {
      if (state) {
        (this._pendingStates = this._pendingStates || []).push(state);
      }

      if (typeof callback === 'function') {
        (this._pendingCallbacks = this._pendingCallbacks || []).push(callback);
      }

      if (!this._disable) {
        enqueueRender(this);
      }
    }
  }, {
    key: "getState",
    value: function getState() {
      var _this = this;

      var _pendingStates = this._pendingStates,
          state = this.state,
          props = this.props;
      var stateClone = Object.assign({}, state);
      delete stateClone.__data;

      if (!_pendingStates.length) {
        return stateClone;
      }

      var queue = _pendingStates.concat();

      this._pendingStates.length = 0;
      queue.forEach(function (nextState) {
        if (typeof nextState === 'function') {
          nextState = nextState.call(_this, stateClone, props);
        }

        Object.assign(stateClone, nextState);
      });
      return stateClone;
    }
  }, {
    key: "forceUpdate",
    value: function forceUpdate(callback) {
      if (typeof callback === 'function') {
        (this._pendingCallbacks = this._pendingCallbacks || []).push(callback);
      }

      updateComponent(this);
    } // 会被匿名函数调用

  }, {
    key: "__triggerPropsFn",
    value: function __triggerPropsFn(key, args) {
      var keyChain = key.split('.');
      var reduxFnPrefix = '__event_';
      var reduxFnName = reduxFnPrefix + keyChain.shift(); // redux标识过的方法，直接调用

      if (reduxFnName in this) {
        var scope = args.shift();
        var fn;

        if (keyChain.length > 0) {
          fn = get(this[reduxFnName], keyChain.join('.'));
        } else {
          fn = this[reduxFnName];
        }

        fn.apply(scope, args);
      } else {
        // 普通的
        var keyLower = key.toLocaleLowerCase();
        this.$scope.triggerEvent(keyLower, {
          __isCustomEvt: true,
          __arguments: args
        });
      }
    }
  }]);

  return BaseComponent;
}();

/* eslint-disable */
Object.is = Object.is || function (x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  }

  return x !== x && y !== y;
};

function shallowEqual(obj1, obj2) {
  if (obj1 === null || obj2 === null) {
    return false;
  }

  if (Object.is(obj1, obj2)) {
    return true;
  }

  var obj1Keys = obj1 ? Object.keys(obj1) : [];
  var obj2Keys = obj2 ? Object.keys(obj2) : [];

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (var i = 0; i < obj1Keys.length; i++) {
    var obj1KeyItem = obj1Keys[i];

    if (!obj2.hasOwnProperty(obj1KeyItem) || !Object.is(obj1[obj1KeyItem], obj2[obj1KeyItem])) {
      return false;
    }
  }

  return true;
}

var PureComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(PureComponent, _Component);

  function PureComponent() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, PureComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = PureComponent.__proto__ || Object.getPrototypeOf(PureComponent)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "isPureComponent", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: true
    }), _temp));
  }

  _createClass(PureComponent, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
    }
  }]);

  return PureComponent;
}(BaseComponent);

function createApp(AppClass) {
  var app = new AppClass();
  var weappAppConf = {
    onLaunch: function onLaunch(options) {
      app.$app = this;
      app.$router = {
        params: options
      };

      if (app.componentWillMount) {
        app.componentWillMount();
      }

      if (app.componentDidMount) {
        app.componentDidMount();
      }
    },
    onShow: function onShow(options) {
      Object.assign(app.$router.params, options);

      if (app.componentDidShow) {
        app.componentDidShow();
      }
    },
    onHide: function onHide() {
      if (app.componentDidHide) {
        app.componentDidHide();
      }
    },
    onError: function onError(err) {
      if (app.componentDidCatchError) {
        app.componentDidCatchError(err);
      }
    },
    onPageNotFound: function onPageNotFound(obj) {
      if (app.componentDidNotFound) {
        app.componentDidNotFound(obj);
      }
    }
  };
  return Object.assign(weappAppConf, app);
}

var RequestQueue = {
  MAX_REQUEST: 5,
  queue: [],
  request: function request(options) {
    this.push(options);
    this.run();
  },
  push: function push(options) {
    this.queue.push(options);
  },
  run: function run() {
    var _this = this,
        _arguments = arguments;

    if (!this.queue.length) {
      return;
    }

    if (this.queue.length <= this.MAX_REQUEST) {
      var options = this.queue.shift();
      var completeFn = options.complete;

      options.complete = function () {
        completeFn && completeFn.apply(options, _toConsumableArray(_arguments));

        _this.run();
      };

      wx.request(options);
    }
  }
};

function request(options) {
  options = options || {};

  if (typeof options === 'string') {
    options = {
      url: options
    };
  }

  var originSuccess = options['success'];
  var originFail = options['fail'];
  var originComplete = options['complete'];
  var p = new Promise(function (resolve, reject) {
    options['success'] = function (res) {
      originSuccess && originSuccess(res);
      resolve(res);
    };

    options['fail'] = function (res) {
      originFail && originFail(res);
      reject(res);
    };

    options['complete'] = function (res) {
      originComplete && originComplete(res);
    };

    RequestQueue.request(options);
  });
  return p;
}

function processApis(taro) {
  var weApis = Object.assign({}, onAndSyncApis, noPromiseApis, otherApis);
  var useDataCacheApis = {
    'navigateTo': true,
    'redirectTo': true,
    'reLaunch': true
  };
  var routerParamsPrivateKey = '__key_';
  Object.keys(weApis).forEach(function (key) {
    if (!onAndSyncApis[key] && !noPromiseApis[key]) {
      taro[key] = function (options) {
        options = options || {};
        var task = null;
        var obj = Object.assign({}, options);

        if (typeof options === 'string') {
          return wx[key](options);
        }

        if (useDataCacheApis[key]) {
          var url = obj['url'] = obj['url'] || '';
          var MarkIndex = url.indexOf('?');
          var params = queryToJson(url.substring(MarkIndex + 1, url.length));
          var cacheKey = getUniqueKey();
          obj.url += (MarkIndex > -1 ? '&' : '?') + "".concat(routerParamsPrivateKey, "=").concat(cacheKey);
          cacheDataSet(cacheKey, params);
        }

        var p = new Promise(function (resolve, reject) {
          ['fail', 'success', 'complete'].forEach(function (k) {
            obj[k] = function (res) {
              options[k] && options[k](res);

              if (k === 'success') {
                if (key === 'connectSocket') {
                  resolve(task);
                } else {
                  resolve(res);
                }
              } else if (k === 'fail') {
                reject(res);
              }
            };
          });
          task = wx[key](obj);
        });

        if (key === 'uploadFile' || key === 'downloadFile') {
          p.progress = function (cb) {
            task.onProgressUpdate(cb);
            return p;
          };

          p.abort = function (cb) {
            cb && cb();
            task.abort();
            return p;
          };
        }

        return p;
      };
    } else {
      taro[key] = function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return wx[key].apply(wx, args);
      };
    }
  });
}

function pxTransform(size) {
  var _config = this.config,
      designWidth = _config.designWidth,
      deviceRatio = _config.deviceRatio;

  if (!(designWidth in deviceRatio)) {
    throw new Error("deviceRatio \u914D\u7F6E\u4E2D\u4E0D\u5B58\u5728 ".concat(designWidth, " \u7684\u8BBE\u7F6E\uFF01"));
    return;
  }

  return parseInt(size, 10) / deviceRatio[designWidth] + 'rpx';
}

function initNativeApi(taro) {
  processApis(taro);
  taro.request = request;
  taro.getCurrentPages = getCurrentPages;
  taro.getApp = getApp;
  taro.initPxTransform = initPxTransform.bind(taro);
  taro.pxTransform = pxTransform.bind(taro);
}

/* eslint-disable camelcase */
var Taro = {
  Component: BaseComponent,
  PureComponent: PureComponent,
  createApp: createApp,
  initNativeApi: initNativeApi,
  Events: Events,
  eventCenter: eventCenter,
  getEnv: getEnv,
  render: render,
  ENV_TYPE: ENV_TYPE,
  internal_safe_get: get,
  internal_safe_set: set,
  internal_dynamic_recursive: dynamicRecursive,
  internal_inline_style: inlineStyle,
  createComponent: createComponent
};
initNativeApi(Taro);

exports.Taro = Taro;
exports.default = Taro;
//# sourceMappingURL=index.js.map