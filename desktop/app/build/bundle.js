/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fs = __webpack_require__(0);

module.exports = clone(fs);

function clone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;

  if (obj instanceof Object) var copy = { __proto__: obj.__proto__ };else var copy = Object.create(null);

  Object.getOwnPropertyNames(obj).forEach(function (key) {
    Object.defineProperty(copy, key, Object.getOwnPropertyDescriptor(obj, key));
  });

  return copy;
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// const inputTool = require(`${__dirname}/list/input`);
// const { join } = require('path');
const tag = __webpack_require__(4);
const settings = __webpack_require__(5);

const container = document.body;

__webpack_require__(19);

function renderVideo(video) {
  return tag('tr', [tag('td.folder', video.file.folder), tag('td.title', video.title, {
    title: video.title
  }), tag('td.extension', video.file.ext), tag('td.size', `${Math.floor(video.file.size / 1024)}kb`), tag('td.created', video.file.created.substr(0, 10))]);
}

function renderSettings() {
  const prepareEl = tag('input', {
    checked: settings.get('prepare', false),
    type: 'checkbox',

    // C:\Users\autio\AppData\Roaming\your-app
    onchange: ev => settings.set('prepare', !!ev.target.checked)
  });

  container.appendChild(tag('table.settings', [tag('tr', [tag('td', 'Prepare folders'), tag('td', prepareEl)])]));
}

function renderVideos(videos) {
  container.appendChild(tag('table.list', videos.sort((a, b) => a.file.folder.localeCompare(b.file.folder)).map(renderVideo)));
}

__webpack_require__(0).readFile('videos.json', 'utf8', (err, videosJson) => {
  renderSettings();
  renderVideos(JSON.parse(videosJson));
});

// inputTool([], {
//   inputPath: join('d:', 'videos')
// })
//   .then((videos) => {
//     // require('fs').writeFile('videos.json', JSON.stringify(videos, null, '  '), 'utf8', () => {});
//   });

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function (t) {
  function e(o) {
    if (n[o]) return n[o].exports;var r = n[o] = { exports: {}, id: o, loaded: !1 };return t[o].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports;
  }var n = {};return e.m = t, e.c = n, e.p = "", e(0);
}([function (t, e) {
  "use strict";
  function n(t, e) {
    for (var n = 0; n < t.length; n++) e(t[n]);
  }function o(t, e) {
    for (var n = Object.keys(t), o = 0; o < n.length; o++) e(t[n[o]], n[o]);
  }function r(t) {
    return t && (t.nodeName && t.nodeType || t instanceof Text);
  }function i() {
    function t(t) {
      for (var i = void 0, f = arguments.length, p = Array(f > 1 ? f - 1 : 0), a = 1; a < f; a++) p[a - 1] = arguments[a];if ("string" == typeof t) {
        var l = t.split("."),
            d = l[0],
            y = l.slice(1);i = document.createElement("" === d ? "div" : d), y.length && (i.className = y.join(" "));
      } else i = document.createElement("div"), void 0 !== t && p.unshift(t);return n(p, function (t) {
        Array.isArray(t) ? n(t, function (t) {
          return i.appendChild(r(t) ? t : document.createTextNode(t));
        }) : r(t) ? i.appendChild(t) : null !== t && "object" === ("undefined" == typeof t ? "undefined" : u(t)) ? o(t, function (t, n) {
          "function" == typeof t ? (i.addEventListener(n.substring(c), t, !1), e.push(function () {
            return i.removeEventListener(n.substring(c), t, !1);
          })) : "style" === n ? "string" == typeof t ? i.style.cssText = t : o(t, function (t, e) {
            var n = t.match(s);n ? i.style.setProperty(e, n[1], "important") : i.style.setProperty(e, t);
          }) : "attrs" === n ? o(t, function (t, e) {
            return i.setAttribute(e, t);
          }) : i[n] = t;
        }) : i.appendChild(document.createTextNode(t));
      }), i;
    }var e = [];return t.cleanup = function () {
      n(e, function (t) {
        return t();
      }), e.length = 0;
    }, t;
  }var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
    return typeof t;
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  },
      c = 2,
      s = /(.*)\W+!important\W*$/;t.exports = i(), t.exports.context = i;
}]);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * A simple persistent user settings framework for Electron.
 *
 * @module main
 * @author Nathan Buchar
 * @copyright 2016-2017 Nathan Buchar <hello@nathanbuchar.com>
 * @license ISC
 */

const Settings = __webpack_require__(6);

module.exports = new Settings();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * A module that handles read and writing to the disk.
 *
 * @module settings
 * @author Nathan Buchar
 * @copyright 2016-2017 Nathan Buchar <hello@nathanbuchar.com>
 * @license ISC
 */

const assert = __webpack_require__(1);
const electron = __webpack_require__(7);
const { EventEmitter } = __webpack_require__(8);
const fs = __webpack_require__(0);
const jsonfile = __webpack_require__(9);
const path = __webpack_require__(16);

const Helpers = __webpack_require__(17);
const Observer = __webpack_require__(18);

/**
 * A reference to the Electron app. If this framework is required within a
 * renderer processes, we need to load the app via `remote`.
 *
 * @type {string}
 */
const app = electron.app || electron.remote.app;

/**
 * The Electron app's user data path.
 *
 * @type {string}
 */
const userDataPath = app.getPath('userData');

/**
 * The name of the settings file.
 *
 * @type {string}
 */
const defaultSettingsFileName = 'Settings';

/**
 * The absolute path to the settings file.
 *
 * @type {string}
 */
const defaultSettingsFilePath = path.join(userDataPath, defaultSettingsFileName);

/**
 * The electron-settings class.
 *
 * @extends EventEmitter
 * @class
 */
class Settings extends EventEmitter {

  constructor() {
    super();

    /**
     * The absolute path to the default settings file on the disk.
     *
     * @type {string}
     * @private
     */
    this._defaultSettingsFilePath = defaultSettingsFilePath;

    /**
     * The absolute path to the custom settings file on the disk.
     *
     * @type {string}
     * @default null
     * @private
     */
    this._customSettingsFilePath = null;

    /**
     * The FSWatcher instance. This will watch if the settings file and
     * notify key path observers.
     *
     * @type {FSWatcher}
     * @default null
     * @private
     */
    this._fsWatcher = null;

    /**
     * Called when the settings file is changed or renamed.
     *
     * @type {Object}
     * @private
     */
    this._handleSettingsFileChange = this._onSettingsFileChange.bind(this);
  }

  /**
   * Returns the settings file path.
   *
   * @returns {string}
   * @private
   */
  _getSettingsFilePath() {
    return this._customSettingsFilePath ? this._customSettingsFilePath : this._defaultSettingsFilePath;
  }

  /**
   * Sets a custom settings file path.
   *
   * @param {string} filePath
   * @private
   */
  _setSettingsFilePath(filePath) {
    this._customSettingsFilePath = filePath;

    // Reset FSWatcher.
    this._unwatchSettings(true);
  }

  /**
   * Clears the custom settings file path.
   *
   * @private
   */
  _clearSettingsFilePath() {
    this._setSettingsFilePath(null);
  }

  /**
   * Watches the settings file for changes using the native `FSWatcher`
   * class in case the settings file is changed outside of
   * ElectronSettings' jursidiction.
   *
   * @private
   */
  _watchSettings() {
    if (!this._fsWatcher) {
      try {
        this._fsWatcher = fs.watch(this._getSettingsFilePath(), this._handleSettingsFileChange);
      } catch (err) {
        // File may not exist yet or the user may not have permission to
        // access the file or directory. Fail gracefully.
      }
    }
  }

  /**
   * Unwatches the settings file by closing the FSWatcher and nullifying its
   * references. If the `reset` parameter is true, attempt to watch the
   * settings file again.
   *
   * @param {boolean} [reset=false]
   * @private
   */
  _unwatchSettings(reset = false) {
    if (this._fsWatcher) {
      this._fsWatcher.close();
      this._fsWatcher = null;

      if (reset) {
        this._watchSettings();
      }
    }
  }

  /**
   * Ensures that the settings file exists, then initializes the FSWatcher.
   *
   * @private
   */
  _ensureSettings() {
    const settingsFilePath = this._getSettingsFilePath();

    try {
      jsonfile.readFileSync(settingsFilePath);
    } catch (err) {
      try {
        jsonfile.writeFileSync(settingsFilePath, {});
      } catch (err) {
        // Cannot read or write file. The user may not have permission to
        // access the file or directory. Throw error.
        throw err;
      }
    }

    this._watchSettings();
  }

  /**
   * Writes the settings to the disk.
   *
   * @param {Object} [obj={}]
   * @param {Object} [opts={}]
   * @private
   */
  _writeSettings(obj = {}, opts = {}) {
    this._ensureSettings();

    try {
      const spaces = opts.prettify ? 2 : 0;

      jsonfile.writeFileSync(this._getSettingsFilePath(), obj, { spaces });
    } catch (err) {
      // Could not write the file. The user may not have permission to
      // access the file or directory. Throw error.
      throw err;
    }
  }

  /**
   * Returns the parsed contents of the settings file.
   *
   * @returns {Object}
   * @private
   */
  _readSettings() {
    this._ensureSettings();

    try {
      return jsonfile.readFileSync(this._getSettingsFilePath());
    } catch (err) {
      // Could not read the file. The user may not have permission to
      // access the file or directory. Throw error.
      throw err;
    }
  }

  /**
   * Called when the settings file has been changed or
   * renamed (moved/deleted).
   *
   * @type {string} eventType
   * @private
   */
  _onSettingsFileChange(eventType) {
    switch (eventType) {
      case Settings.FSWatcherEvents.CHANGE:
        {
          this._emitChangeEvent();
          break;
        }
      case Settings.FSWatcherEvents.RENAME:
        {
          this._unwatchSettings(true);
          break;
        }
    }
  }

  /**
   * Broadcasts the internal "change" event.
   *
   * @emits ElectronSettings:change
   * @private
   */
  _emitChangeEvent() {
    this.emit(Settings.Events.CHANGE);
  }

  /**
   * Returns a boolean indicating whether the settings object contains
   * the given key path.
   *
   * @param {string} keyPath
   * @returns {boolean}
   * @private
   */
  _checkKeyPathExists(keyPath) {
    const obj = this._readSettings();
    const exists = Helpers.hasKeyPath(obj, keyPath);

    return exists;
  }

  /**
   * Sets the value at the given key path, or the entire settings object if
   * an empty key path is given.
   *
   * @param {string} keyPath
   * @param {any} value
   * @param {Object} opts
   * @private
   */
  _setValueAtKeyPath(keyPath, value, opts) {
    let obj = value;

    if (keyPath !== '') {
      obj = this._readSettings();

      Helpers.setValueAtKeyPath(obj, keyPath, value);
    }

    this._writeSettings(obj, opts);
  }

  /**
   * Returns the value at the given key path, or sets the value at that key
   * path to the default value, if provided, if the key does not exist. If an
   * empty key path is given, the entire settings object will be returned.
   *
   * @param {string} keyPath
   * @param {any} defaultValue
   * @param {Object} opts
   * @returns {any}
   * @private
   */
  _getValueAtKeyPath(keyPath, defaultValue, opts) {
    const obj = this._readSettings();

    if (keyPath !== '') {
      const exists = Helpers.hasKeyPath(obj, keyPath);
      const value = Helpers.getValueAtKeyPath(obj, keyPath);

      // The key does not exist but a default value does. Set the value at the
      // key path to the default value and then get the new value.
      if (!exists && typeof defaultValue !== 'undefined') {
        this._setValueAtKeyPath(keyPath, defaultValue, opts);

        // Get the new value now that the default has been set.
        return this._getValueAtKeyPath(keyPath);
      }

      return value;
    }

    return obj;
  }

  /**
   * Deletes the key and value at the given key path, or clears the entire
   * settings object if an empty key path is given.
   *
   * @param {string} keyPath
   * @param {Object} opts
   * @private
   */
  _deleteValueAtKeyPath(keyPath, opts) {
    if (keyPath === '') {
      this._writeSettings({}, opts);
    } else {
      const obj = this._readSettings();
      const exists = Helpers.hasKeyPath(obj, keyPath);

      if (exists) {
        Helpers.deleteValueAtKeyPath(obj, keyPath);
        this._writeSettings(obj, opts);
      }
    }
  }

  /**
   * Watches the given key path for changes and calls the given handler
   * if the value changes. To unsubscribe from changes, call `dispose()`
   * on the Observer instance that is returned.
   *
   * @param {string} keyPath
   * @param {Function} handler
   * @returns {Observer}
   * @private
   */
  _watchValueAtKeyPath(keyPath, handler) {
    const currentValue = this._getValueAtKeyPath(keyPath);

    return new Observer(this, keyPath, handler, currentValue);
  }

  /**
   * Returns a boolean indicating whether the settings object contains
   * the given key path.
   *
   * @param {string} keyPath
   * @returns {boolean}
   * @public
   */
  has(keyPath) {
    assert.strictEqual(typeof keyPath, 'string', 'First parameter must be a string');

    return this._checkKeyPathExists(keyPath);
  }

  /**
   * Sets the value at the given key path.
   *
   * @param {string} keyPath
   * @param {any} value
   * @param {Object} [opts={}]
   * @param {boolean} [opts.prettify=false]
   * @returns {Settings}
   * @public
   */
  set(keyPath, value, opts = {}) {
    assert.strictEqual(typeof keyPath, 'string', 'First parameter must be a string. Did you mean to use `setAll()` instead?');
    assert.strictEqual(typeof opts, 'object', 'Second parameter must be an object');

    this._setValueAtKeyPath(keyPath, value, opts);

    return this;
  }

  /**
   * Sets all settings.
   *
   * @param {Object} obj
   * @param {Object} [opts={}]
   * @param {boolean} [opts.prettify=false]
   * @returns {Settings}
   * @public
   */
  setAll(obj, opts = {}) {
    assert.strictEqual(typeof obj, 'object', 'First parameter must be an object');
    assert.strictEqual(typeof opts, 'object', 'Second parameter must be an object');

    this._setValueAtKeyPath('', obj, opts);

    return this;
  }

  /**
   * Returns the value at the given key path, or sets the value at that key
   * path to the default value, if provided, if the key does not exist.
   *
   * @param {string} keyPath
   * @param {any} [defaultValue]
   * @param {Object} [opts={}]
   * @returns {any}
   * @public
   */
  get(keyPath, defaultValue, opts = {}) {
    assert.strictEqual(typeof keyPath, 'string', 'First parameter must be a string. Did you mean to use `getAll()` instead?');

    return this._getValueAtKeyPath(keyPath, defaultValue, opts);
  }

  /**
   * Returns all settings.
   *
   * @returns {Object}
   * @public
   */
  getAll() {
    return this._getValueAtKeyPath('');
  }

  /**
   * Deletes the key and value at the given key path.
   *
   * @param {string} keyPath
   * @param {Object} [opts={}]
   * @param {boolean} [opts.prettify=false]
   * @returns {Settings}
   * @public
   */
  delete(keyPath, opts = {}) {
    assert.strictEqual(typeof keyPath, 'string', 'First parameter must be a string. Did you mean to use `deleteAll()` instead?');
    assert.strictEqual(typeof opts, 'object', 'Second parameter must be an object');

    this._deleteValueAtKeyPath(keyPath, opts);

    return this;
  }

  /**
   * Deletes all settings.
   *
   * @param {Object} [opts={}]
   * @param {boolean} [opts.prettify=false]
   * @returns {Settings}
   * @public
   */
  deleteAll(opts = {}) {
    assert.strictEqual(typeof opts, 'object', 'First parameter must be an object');

    this._deleteValueAtKeyPath('', opts);

    return this;
  }

  /**
   * Watches the given key path for changes and calls the given handler
   * if the value changes. To unsubscribe from changes, call `dispose()`
   * on the Observer instance that is returned.
   *
   * @param {string} keyPath
   * @param {Function} handler
   * @returns {Observer}
   * @public
   */
  watch(keyPath, handler) {
    assert.strictEqual(typeof keyPath, 'string', 'First parameter must be a string');
    assert.strictEqual(typeof handler, 'function', 'Second parameter must be a function');

    return this._watchValueAtKeyPath(keyPath, handler);
  }

  /**
   * Sets a custom settings file path.
   *
   * @param {string} filePath
   * @returns {Settings}
   * @public
   */
  setPath(filePath) {
    assert.strictEqual(typeof filePath, 'string', 'First parameter must be a string');

    this._setSettingsFilePath(filePath);

    return this;
  }

  /**
   * Clears the custom settings file path.
   *
   * @returns {Settings}
   * @public
   */
  clearPath() {
    this._clearSettingsFilePath();

    return this;
  }

  /**
   * Returns the absolute path to where the settings file is or will be stored.
   *
   * @returns {string}
   * @public
   */
  file() {
    return this._getSettingsFilePath();
  }
}

/**
 * ElectronSettings event names.
 *
 * @enum {string}
 * @readonly
 */
Settings.FSWatcherEvents = {
  CHANGE: 'change',
  RENAME: 'rename'
};

/**
 * ElectronSettings event names.
 *
 * @enum {string}
 * @readonly
 */
Settings.Events = {
  CHANGE: 'change'
};

module.exports = Settings;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var _fs;
try {
  _fs = __webpack_require__(10);
} catch (_) {
  _fs = __webpack_require__(0);
}

function readFile(file, options, callback) {
  if (callback == null) {
    callback = options;
    options = {};
  }

  if (typeof options === 'string') {
    options = { encoding: options };
  }

  options = options || {};
  var fs = options.fs || _fs;

  var shouldThrow = true;
  if ('throws' in options) {
    shouldThrow = options.throws;
  }

  fs.readFile(file, options, function (err, data) {
    if (err) return callback(err);

    data = stripBom(data);

    var obj;
    try {
      obj = JSON.parse(data, options ? options.reviver : null);
    } catch (err2) {
      if (shouldThrow) {
        err2.message = file + ': ' + err2.message;
        return callback(err2);
      } else {
        return callback(null, null);
      }
    }

    callback(null, obj);
  });
}

function readFileSync(file, options) {
  options = options || {};
  if (typeof options === 'string') {
    options = { encoding: options };
  }

  var fs = options.fs || _fs;

  var shouldThrow = true;
  if ('throws' in options) {
    shouldThrow = options.throws;
  }

  try {
    var content = fs.readFileSync(file, options);
    content = stripBom(content);
    return JSON.parse(content, options.reviver);
  } catch (err) {
    if (shouldThrow) {
      err.message = file + ': ' + err.message;
      throw err;
    } else {
      return null;
    }
  }
}

function stringify(obj, options) {
  var spaces;
  var EOL = '\n';
  if (typeof options === 'object' && options !== null) {
    if (options.spaces) {
      spaces = options.spaces;
    }
    if (options.EOL) {
      EOL = options.EOL;
    }
  }

  var str = JSON.stringify(obj, options ? options.replacer : null, spaces);

  return str.replace(/\n/g, EOL) + EOL;
}

function writeFile(file, obj, options, callback) {
  if (callback == null) {
    callback = options;
    options = {};
  }
  options = options || {};
  var fs = options.fs || _fs;

  var str = '';
  try {
    str = stringify(obj, options);
  } catch (err) {
    // Need to return whether a callback was passed or not
    if (callback) callback(err, null);
    return;
  }

  fs.writeFile(file, str, options, callback);
}

function writeFileSync(file, obj, options) {
  options = options || {};
  var fs = options.fs || _fs;

  var str = stringify(obj, options);
  // not sure if fs.writeFileSync returns anything, but just in case
  return fs.writeFileSync(file, str, options);
}

function stripBom(content) {
  // we do this because JSON.parse would convert it to a utf8 string if encoding wasn't specified
  if (Buffer.isBuffer(content)) content = content.toString('utf8');
  content = content.replace(/^\uFEFF/, '');
  return content;
}

var jsonfile = {
  readFile: readFile,
  readFileSync: readFileSync,
  writeFile: writeFile,
  writeFileSync: writeFileSync
};

module.exports = jsonfile;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var fs = __webpack_require__(0);
var polyfills = __webpack_require__(11);
var legacy = __webpack_require__(13);
var queue = [];

var util = __webpack_require__(15);

function noop() {}

var debug = noop;
if (util.debuglog) debug = util.debuglog('gfs4');else if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || '')) debug = function () {
  var m = util.format.apply(util, arguments);
  m = 'GFS4: ' + m.split(/\n/).join('\nGFS4: ');
  console.error(m);
};

if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || '')) {
  process.on('exit', function () {
    debug(queue);
    __webpack_require__(1).equal(queue.length, 0);
  });
}

module.exports = patch(__webpack_require__(2));
if (process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH) {
  module.exports = patch(fs);
}

// Always patch fs.close/closeSync, because we want to
// retry() whenever a close happens *anywhere* in the program.
// This is essential when multiple graceful-fs instances are
// in play at the same time.
module.exports.close = fs.close = function (fs$close) {
  return function (fd, cb) {
    return fs$close.call(fs, fd, function (err) {
      if (!err) retry();

      if (typeof cb === 'function') cb.apply(this, arguments);
    });
  };
}(fs.close);

module.exports.closeSync = fs.closeSync = function (fs$closeSync) {
  return function (fd) {
    // Note that graceful-fs also retries when fs.closeSync() fails.
    // Looks like a bug to me, although it's probably a harmless one.
    var rval = fs$closeSync.apply(fs, arguments);
    retry();
    return rval;
  };
}(fs.closeSync);

function patch(fs) {
  // Everything that references the open() function needs to be in here
  polyfills(fs);
  fs.gracefulify = patch;
  fs.FileReadStream = ReadStream; // Legacy name.
  fs.FileWriteStream = WriteStream; // Legacy name.
  fs.createReadStream = createReadStream;
  fs.createWriteStream = createWriteStream;
  var fs$readFile = fs.readFile;
  fs.readFile = readFile;
  function readFile(path, options, cb) {
    if (typeof options === 'function') cb = options, options = null;

    return go$readFile(path, options, cb);

    function go$readFile(path, options, cb) {
      return fs$readFile(path, options, function (err) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE')) enqueue([go$readFile, [path, options, cb]]);else {
          if (typeof cb === 'function') cb.apply(this, arguments);
          retry();
        }
      });
    }
  }

  var fs$writeFile = fs.writeFile;
  fs.writeFile = writeFile;
  function writeFile(path, data, options, cb) {
    if (typeof options === 'function') cb = options, options = null;

    return go$writeFile(path, data, options, cb);

    function go$writeFile(path, data, options, cb) {
      return fs$writeFile(path, data, options, function (err) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE')) enqueue([go$writeFile, [path, data, options, cb]]);else {
          if (typeof cb === 'function') cb.apply(this, arguments);
          retry();
        }
      });
    }
  }

  var fs$appendFile = fs.appendFile;
  if (fs$appendFile) fs.appendFile = appendFile;
  function appendFile(path, data, options, cb) {
    if (typeof options === 'function') cb = options, options = null;

    return go$appendFile(path, data, options, cb);

    function go$appendFile(path, data, options, cb) {
      return fs$appendFile(path, data, options, function (err) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE')) enqueue([go$appendFile, [path, data, options, cb]]);else {
          if (typeof cb === 'function') cb.apply(this, arguments);
          retry();
        }
      });
    }
  }

  var fs$readdir = fs.readdir;
  fs.readdir = readdir;
  function readdir(path, options, cb) {
    var args = [path];
    if (typeof options !== 'function') {
      args.push(options);
    } else {
      cb = options;
    }
    args.push(go$readdir$cb);

    return go$readdir(args);

    function go$readdir$cb(err, files) {
      if (files && files.sort) files.sort();

      if (err && (err.code === 'EMFILE' || err.code === 'ENFILE')) enqueue([go$readdir, [args]]);else {
        if (typeof cb === 'function') cb.apply(this, arguments);
        retry();
      }
    }
  }

  function go$readdir(args) {
    return fs$readdir.apply(fs, args);
  }

  if (process.version.substr(0, 4) === 'v0.8') {
    var legStreams = legacy(fs);
    ReadStream = legStreams.ReadStream;
    WriteStream = legStreams.WriteStream;
  }

  var fs$ReadStream = fs.ReadStream;
  ReadStream.prototype = Object.create(fs$ReadStream.prototype);
  ReadStream.prototype.open = ReadStream$open;

  var fs$WriteStream = fs.WriteStream;
  WriteStream.prototype = Object.create(fs$WriteStream.prototype);
  WriteStream.prototype.open = WriteStream$open;

  fs.ReadStream = ReadStream;
  fs.WriteStream = WriteStream;

  function ReadStream(path, options) {
    if (this instanceof ReadStream) return fs$ReadStream.apply(this, arguments), this;else return ReadStream.apply(Object.create(ReadStream.prototype), arguments);
  }

  function ReadStream$open() {
    var that = this;
    open(that.path, that.flags, that.mode, function (err, fd) {
      if (err) {
        if (that.autoClose) that.destroy();

        that.emit('error', err);
      } else {
        that.fd = fd;
        that.emit('open', fd);
        that.read();
      }
    });
  }

  function WriteStream(path, options) {
    if (this instanceof WriteStream) return fs$WriteStream.apply(this, arguments), this;else return WriteStream.apply(Object.create(WriteStream.prototype), arguments);
  }

  function WriteStream$open() {
    var that = this;
    open(that.path, that.flags, that.mode, function (err, fd) {
      if (err) {
        that.destroy();
        that.emit('error', err);
      } else {
        that.fd = fd;
        that.emit('open', fd);
      }
    });
  }

  function createReadStream(path, options) {
    return new ReadStream(path, options);
  }

  function createWriteStream(path, options) {
    return new WriteStream(path, options);
  }

  var fs$open = fs.open;
  fs.open = open;
  function open(path, flags, mode, cb) {
    if (typeof mode === 'function') cb = mode, mode = null;

    return go$open(path, flags, mode, cb);

    function go$open(path, flags, mode, cb) {
      return fs$open(path, flags, mode, function (err, fd) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE')) enqueue([go$open, [path, flags, mode, cb]]);else {
          if (typeof cb === 'function') cb.apply(this, arguments);
          retry();
        }
      });
    }
  }

  return fs;
}

function enqueue(elem) {
  debug('ENQUEUE', elem[0].name, elem[1]);
  queue.push(elem);
}

function retry() {
  var elem = queue.shift();
  if (elem) {
    debug('RETRY', elem[0].name, elem[1]);
    elem[0].apply(null, elem[1]);
  }
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var fs = __webpack_require__(2);
var constants = __webpack_require__(12);

var origCwd = process.cwd;
var cwd = null;

var platform = process.env.GRACEFUL_FS_PLATFORM || process.platform;

process.cwd = function () {
  if (!cwd) cwd = origCwd.call(process);
  return cwd;
};
try {
  process.cwd();
} catch (er) {}

var chdir = process.chdir;
process.chdir = function (d) {
  cwd = null;
  chdir.call(process, d);
};

module.exports = patch;

function patch(fs) {
  // (re-)implement some things that are known busted or missing.

  // lchmod, broken prior to 0.6.2
  // back-port the fix here.
  if (constants.hasOwnProperty('O_SYMLINK') && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) {
    patchLchmod(fs);
  }

  // lutimes implementation, or no-op
  if (!fs.lutimes) {
    patchLutimes(fs);
  }

  // https://github.com/isaacs/node-graceful-fs/issues/4
  // Chown should not fail on einval or eperm if non-root.
  // It should not fail on enosys ever, as this just indicates
  // that a fs doesn't support the intended operation.

  fs.chown = chownFix(fs.chown);
  fs.fchown = chownFix(fs.fchown);
  fs.lchown = chownFix(fs.lchown);

  fs.chmod = chmodFix(fs.chmod);
  fs.fchmod = chmodFix(fs.fchmod);
  fs.lchmod = chmodFix(fs.lchmod);

  fs.chownSync = chownFixSync(fs.chownSync);
  fs.fchownSync = chownFixSync(fs.fchownSync);
  fs.lchownSync = chownFixSync(fs.lchownSync);

  fs.chmodSync = chmodFixSync(fs.chmodSync);
  fs.fchmodSync = chmodFixSync(fs.fchmodSync);
  fs.lchmodSync = chmodFixSync(fs.lchmodSync);

  fs.stat = statFix(fs.stat);
  fs.fstat = statFix(fs.fstat);
  fs.lstat = statFix(fs.lstat);

  fs.statSync = statFixSync(fs.statSync);
  fs.fstatSync = statFixSync(fs.fstatSync);
  fs.lstatSync = statFixSync(fs.lstatSync);

  // if lchmod/lchown do not exist, then make them no-ops
  if (!fs.lchmod) {
    fs.lchmod = function (path, mode, cb) {
      if (cb) process.nextTick(cb);
    };
    fs.lchmodSync = function () {};
  }
  if (!fs.lchown) {
    fs.lchown = function (path, uid, gid, cb) {
      if (cb) process.nextTick(cb);
    };
    fs.lchownSync = function () {};
  }

  // on Windows, A/V software can lock the directory, causing this
  // to fail with an EACCES or EPERM if the directory contains newly
  // created files.  Try again on failure, for up to 60 seconds.

  // Set the timeout this long because some Windows Anti-Virus, such as Parity
  // bit9, may lock files for up to a minute, causing npm package install
  // failures. Also, take care to yield the scheduler. Windows scheduling gives
  // CPU to a busy looping process, which can cause the program causing the lock
  // contention to be starved of CPU by node, so the contention doesn't resolve.
  if (platform === "win32") {
    fs.rename = function (fs$rename) {
      return function (from, to, cb) {
        var start = Date.now();
        var backoff = 0;
        fs$rename(from, to, function CB(er) {
          if (er && (er.code === "EACCES" || er.code === "EPERM") && Date.now() - start < 60000) {
            setTimeout(function () {
              fs.stat(to, function (stater, st) {
                if (stater && stater.code === "ENOENT") fs$rename(from, to, CB);else cb(er);
              });
            }, backoff);
            if (backoff < 100) backoff += 10;
            return;
          }
          if (cb) cb(er);
        });
      };
    }(fs.rename);
  }

  // if read() returns EAGAIN, then just try it again.
  fs.read = function (fs$read) {
    return function (fd, buffer, offset, length, position, callback_) {
      var callback;
      if (callback_ && typeof callback_ === 'function') {
        var eagCounter = 0;
        callback = function (er, _, __) {
          if (er && er.code === 'EAGAIN' && eagCounter < 10) {
            eagCounter++;
            return fs$read.call(fs, fd, buffer, offset, length, position, callback);
          }
          callback_.apply(this, arguments);
        };
      }
      return fs$read.call(fs, fd, buffer, offset, length, position, callback);
    };
  }(fs.read);

  fs.readSync = function (fs$readSync) {
    return function (fd, buffer, offset, length, position) {
      var eagCounter = 0;
      while (true) {
        try {
          return fs$readSync.call(fs, fd, buffer, offset, length, position);
        } catch (er) {
          if (er.code === 'EAGAIN' && eagCounter < 10) {
            eagCounter++;
            continue;
          }
          throw er;
        }
      }
    };
  }(fs.readSync);
}

function patchLchmod(fs) {
  fs.lchmod = function (path, mode, callback) {
    fs.open(path, constants.O_WRONLY | constants.O_SYMLINK, mode, function (err, fd) {
      if (err) {
        if (callback) callback(err);
        return;
      }
      // prefer to return the chmod error, if one occurs,
      // but still try to close, and report closing errors if they occur.
      fs.fchmod(fd, mode, function (err) {
        fs.close(fd, function (err2) {
          if (callback) callback(err || err2);
        });
      });
    });
  };

  fs.lchmodSync = function (path, mode) {
    var fd = fs.openSync(path, constants.O_WRONLY | constants.O_SYMLINK, mode);

    // prefer to return the chmod error, if one occurs,
    // but still try to close, and report closing errors if they occur.
    var threw = true;
    var ret;
    try {
      ret = fs.fchmodSync(fd, mode);
      threw = false;
    } finally {
      if (threw) {
        try {
          fs.closeSync(fd);
        } catch (er) {}
      } else {
        fs.closeSync(fd);
      }
    }
    return ret;
  };
}

function patchLutimes(fs) {
  if (constants.hasOwnProperty("O_SYMLINK")) {
    fs.lutimes = function (path, at, mt, cb) {
      fs.open(path, constants.O_SYMLINK, function (er, fd) {
        if (er) {
          if (cb) cb(er);
          return;
        }
        fs.futimes(fd, at, mt, function (er) {
          fs.close(fd, function (er2) {
            if (cb) cb(er || er2);
          });
        });
      });
    };

    fs.lutimesSync = function (path, at, mt) {
      var fd = fs.openSync(path, constants.O_SYMLINK);
      var ret;
      var threw = true;
      try {
        ret = fs.futimesSync(fd, at, mt);
        threw = false;
      } finally {
        if (threw) {
          try {
            fs.closeSync(fd);
          } catch (er) {}
        } else {
          fs.closeSync(fd);
        }
      }
      return ret;
    };
  } else {
    fs.lutimes = function (_a, _b, _c, cb) {
      if (cb) process.nextTick(cb);
    };
    fs.lutimesSync = function () {};
  }
}

function chmodFix(orig) {
  if (!orig) return orig;
  return function (target, mode, cb) {
    return orig.call(fs, target, mode, function (er) {
      if (chownErOk(er)) er = null;
      if (cb) cb.apply(this, arguments);
    });
  };
}

function chmodFixSync(orig) {
  if (!orig) return orig;
  return function (target, mode) {
    try {
      return orig.call(fs, target, mode);
    } catch (er) {
      if (!chownErOk(er)) throw er;
    }
  };
}

function chownFix(orig) {
  if (!orig) return orig;
  return function (target, uid, gid, cb) {
    return orig.call(fs, target, uid, gid, function (er) {
      if (chownErOk(er)) er = null;
      if (cb) cb.apply(this, arguments);
    });
  };
}

function chownFixSync(orig) {
  if (!orig) return orig;
  return function (target, uid, gid) {
    try {
      return orig.call(fs, target, uid, gid);
    } catch (er) {
      if (!chownErOk(er)) throw er;
    }
  };
}

function statFix(orig) {
  if (!orig) return orig;
  // Older versions of Node erroneously returned signed integers for
  // uid + gid.
  return function (target, cb) {
    return orig.call(fs, target, function (er, stats) {
      if (!stats) return cb.apply(this, arguments);
      if (stats.uid < 0) stats.uid += 0x100000000;
      if (stats.gid < 0) stats.gid += 0x100000000;
      if (cb) cb.apply(this, arguments);
    });
  };
}

function statFixSync(orig) {
  if (!orig) return orig;
  // Older versions of Node erroneously returned signed integers for
  // uid + gid.
  return function (target) {
    var stats = orig.call(fs, target);
    if (stats.uid < 0) stats.uid += 0x100000000;
    if (stats.gid < 0) stats.gid += 0x100000000;
    return stats;
  };
}

// ENOSYS means that the fs doesn't support the op. Just ignore
// that, because it doesn't matter.
//
// if there's no getuid, or if getuid() is something other
// than 0, and the error is EINVAL or EPERM, then just ignore
// it.
//
// This specific case is a silent failure in cp, install, tar,
// and most other unix tools that manage permissions.
//
// When running as root, or if other types of errors are
// encountered, then it's strict.
function chownErOk(er) {
  if (!er) return true;

  if (er.code === "ENOSYS") return true;

  var nonroot = !process.getuid || process.getuid() !== 0;
  if (nonroot) {
    if (er.code === "EINVAL" || er.code === "EPERM") return true;
  }

  return false;
}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("constants");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var Stream = __webpack_require__(14).Stream;

module.exports = legacy;

function legacy(fs) {
  return {
    ReadStream: ReadStream,
    WriteStream: WriteStream
  };

  function ReadStream(path, options) {
    if (!(this instanceof ReadStream)) return new ReadStream(path, options);

    Stream.call(this);

    var self = this;

    this.path = path;
    this.fd = null;
    this.readable = true;
    this.paused = false;

    this.flags = 'r';
    this.mode = 438; /*=0666*/
    this.bufferSize = 64 * 1024;

    options = options || {};

    // Mixin options into this
    var keys = Object.keys(options);
    for (var index = 0, length = keys.length; index < length; index++) {
      var key = keys[index];
      this[key] = options[key];
    }

    if (this.encoding) this.setEncoding(this.encoding);

    if (this.start !== undefined) {
      if ('number' !== typeof this.start) {
        throw TypeError('start must be a Number');
      }
      if (this.end === undefined) {
        this.end = Infinity;
      } else if ('number' !== typeof this.end) {
        throw TypeError('end must be a Number');
      }

      if (this.start > this.end) {
        throw new Error('start must be <= end');
      }

      this.pos = this.start;
    }

    if (this.fd !== null) {
      process.nextTick(function () {
        self._read();
      });
      return;
    }

    fs.open(this.path, this.flags, this.mode, function (err, fd) {
      if (err) {
        self.emit('error', err);
        self.readable = false;
        return;
      }

      self.fd = fd;
      self.emit('open', fd);
      self._read();
    });
  }

  function WriteStream(path, options) {
    if (!(this instanceof WriteStream)) return new WriteStream(path, options);

    Stream.call(this);

    this.path = path;
    this.fd = null;
    this.writable = true;

    this.flags = 'w';
    this.encoding = 'binary';
    this.mode = 438; /*=0666*/
    this.bytesWritten = 0;

    options = options || {};

    // Mixin options into this
    var keys = Object.keys(options);
    for (var index = 0, length = keys.length; index < length; index++) {
      var key = keys[index];
      this[key] = options[key];
    }

    if (this.start !== undefined) {
      if ('number' !== typeof this.start) {
        throw TypeError('start must be a Number');
      }
      if (this.start < 0) {
        throw new Error('start must be >= zero');
      }

      this.pos = this.start;
    }

    this.busy = false;
    this._queue = [];

    if (this.fd === null) {
      this._open = fs.open;
      this._queue.push([this._open, this.path, this.flags, this.mode, undefined]);
      this.flush();
    }
  }
}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

/**
 * A module that contains key path helpers. Adapted from atom/key-path-helpers.
 *
 * @module settings-helpers
 * @author Nathan Buchar
 * @copyright 2016-2017 Nathan Buchar <hello@nathanbuchar.com>
 * @license ISC
 */

/**
 * Checks if the given object contains the given key path.
 *
 * @param {Object} obj
 * @param {string} keyPath
 * @returns {boolean}
 */
module.exports.hasKeyPath = (obj, keyPath) => {
  const keys = keyPath.split(/\./);

  for (let i = 0, len = keys.length; i < len; i++) {
    const key = keys[i];

    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      obj = obj[key];
    } else {
      return false;
    }
  }

  return true;
};

/**
 * Gets the value of the given object at the given key path.
 *
 * @param {Object} obj
 * @param {string} keyPath
 * @returns {any}
 */
module.exports.getValueAtKeyPath = (obj, keyPath) => {
  const keys = keyPath.split(/\./);

  for (let i = 0, len = keys.length; i < len; i++) {
    const key = keys[i];

    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      obj = obj[key];
    } else {
      return undefined;
    }
  }

  return obj;
};

/**
 * Sets the value of the given object at the given key path.
 *
 * @param {Object} obj
 * @param {string} keyPath
 * @param {any} value
 */
module.exports.setValueAtKeyPath = (obj, keyPath, value) => {
  const keys = keyPath.split(/\./);

  while (keys.length > 1) {
    const key = keys.shift();

    if (!Object.prototype.hasOwnProperty.call(obj, key)) {
      obj[key] = {};
    }

    obj = obj[key];
  }

  obj[keys.shift()] = value;
};

/**
 * Deletes the value of the given object at the given key path.
 *
 * @param {Object} obj
 * @param {string} keyPath
 */
module.exports.deleteValueAtKeyPath = (obj, keyPath) => {
  const keys = keyPath.split(/\./);

  while (keys.length > 1) {
    const key = keys.shift();

    if (!Object.prototype.hasOwnProperty.call(obj, key)) {
      return;
    }

    obj = obj[key];
  }

  delete obj[keys.shift()];
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * A module that delegates settings changes.
 *
 * @module settings-observer
 * @author Nathan Buchar
 * @copyright 2016-2017 Nathan Buchar <hello@nathanbuchar.com>
 * @license ISC
 */

const assert = __webpack_require__(1);

class SettingsObserver {

  constructor(settings, keyPath, handler, currentValue) {

    /**
     * A reference to the Settings instance.
     *
     * @type {Settings}
     * @private
     */
    this._settings = settings;

    /**
     * The key path that this observer instance is watching for changes.
     *
     * @type {string}
     * @private
     */
    this._keyPath = keyPath;

    /**
     * The handler function to be called when the value at the observed
     * key path is changed.
     *
     * @type {Function}
     * @private
     */
    this._handler = handler;

    /**
     * The current value of the setting at the given key path.
     *
     * @type {any}
     * @private
     */
    this._currentValue = currentValue;

    /**
     * Called when the settings file is changed.
     *
     * @type {Object}
     * @private
     */
    this._handleChange = this._onChange.bind(this);

    this._init();
  }

  /**
   * Initializes this instance.
   *
   * @private
   */
  _init() {
    this._settings.on('change', this._handleChange);
  }

  /**
   * Called when the settings file is changed.
   *
   * @private
   */
  _onChange() {
    const oldValue = this._currentValue;
    const newValue = this._settings.get(this._keyPath);

    try {
      assert.deepEqual(newValue, oldValue);
    } catch (err) {
      this._currentValue = newValue;

      // Call the watch handler and pass in the new and old values.
      this._handler.call(this, newValue, oldValue);
    }
  }

  /**
   * Disposes of this key path observer.
   *
   * @public
   */
  dispose() {
    this._settings.removeListener('change', this._handleChange);
  }
}

module.exports = SettingsObserver;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);