self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ (function(module) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/***/ (function(module) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/***/ (function(module) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/amp-context.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/amp-context.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AmpStateContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var AmpStateContext = _react["default"].createContext({});

exports.AmpStateContext = AmpStateContext;

if (true) {
  AmpStateContext.displayName = 'AmpStateContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/shared/lib/amp.js":
/*!**************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/amp.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _s = $RefreshSig$();

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isInAmpMode = isInAmpMode;
exports.useAmp = useAmp;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/shared/lib/amp-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

function useAmp() {
  _s();

  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(_react["default"].useContext(_ampContext.AmpStateContext));
}

_s(useAmp, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/shared/lib/head-manager-context.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/head-manager-context.js ***!
  \*******************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.HeadManagerContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var HeadManagerContext = _react["default"].createContext({});

exports.HeadManagerContext = HeadManagerContext;

if (true) {
  HeadManagerContext.displayName = 'HeadManagerContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/shared/lib/head.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/head.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _defineProperty = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.defaultHead = defaultHead;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _sideEffect = _interopRequireDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/shared/lib/side-effect.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/shared/lib/amp-context.js");

var _headManagerContext = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/shared/lib/head-manager-context.js");

var _amp = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/shared/lib/amp.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [/*#__PURE__*/_react["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push( /*#__PURE__*/_react["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === _react["default"].Fragment) {
    return list.concat(_react["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var isUnique = true;
    var hasKey = false;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      hasKey = true;
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        isUnique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          isUnique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              isUnique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if ((metatype !== 'name' || !hasKey) && categories.has(category)) {
              isUnique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return isUnique;
  };
}
/**
 *
 * @param headElements List of multiple <Head> instances
 */


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = _react["default"].Children.toArray(headElement.props.children);

    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;

    if (false) { var newProps; }

    return /*#__PURE__*/_react["default"].cloneElement(c, {
      key: key
    });
  });
}
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */


function Head(_ref) {
  _s();

  var children = _ref.children;
  var ampState = (0, _react).useContext(_ampContext.AmpStateContext);
  var headManager = (0, _react).useContext(_headManagerContext.HeadManagerContext);
  return /*#__PURE__*/_react["default"].createElement(_sideEffect["default"], {
    reduceComponentsToState: reduceComponents,
    headManager: headManager,
    inAmpMode: (0, _amp).isInAmpMode(ampState)
  }, children);
}

_s(Head, "sCUayZmr5V93tUjujy03KdMBCec=");

_c = Head;
var _default = Head;
exports.default = _default;

var _c;

$RefreshReg$(_c, "Head");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/shared/lib/side-effect.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/side-effect.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _toConsumableArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _assertThisInitialized = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _inherits = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

var _class = /*#__PURE__*/function (_react$Component) {
  _inherits(_class, _react$Component);

  var _super = _createSuper(_class);

  function _class(props) {
    var _this;

    _classCallCheck(this, _class);

    _this = _super.call(this, props);

    _this.emitChange = function () {
      if (_this._hasHeadManager) {
        _this.props.headManager.updateHead(_this.props.reduceComponentsToState(_toConsumableArray(_this.props.headManager.mountedInstances), _this.props));
      }
    };

    _this._hasHeadManager = _this.props.headManager && _this.props.headManager.mountedInstances;

    if (isServer && _this._hasHeadManager) {
      _this.props.headManager.mountedInstances.add(_assertThisInitialized(_this));

      _this.emitChange();
    }

    return _this;
  }

  _createClass(_class, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances.add(this);
      }

      this.emitChange();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.emitChange();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances["delete"](this);
      }

      this.emitChange();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "/home/troias/udemy/project-12-next-js/06-onwards-to-a-bigger-project-starting-project/pages/index.js",
    _this = undefined;





console.log("process.env.MONGO_DB_USERNAME", "mongodb+srv://");

var HomePage = function HomePage(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__.default, {
      meetups: props.meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_c = HomePage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/shared/lib/head */ "./node_modules/next/dist/shared/lib/head.js")


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTgwYjFmNjlkYzhjMGM0ZGQ3YjEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHVCQUF1QixtQkFBTyxDQUFDLHdGQUF1Qjs7QUFFdEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXlCLG1CQUFtQix5QkFBeUI7Ozs7Ozs7Ozs7QUNQckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNCQUF5QixtQkFBbUIseUJBQXlCOzs7Ozs7Ozs7O0FDaEJyRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBeUIsbUJBQW1CLHlCQUF5Qjs7Ozs7Ozs7OztBQ0xyRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBeUIsbUJBQW1CLHlCQUF5Qjs7Ozs7Ozs7OztBQ0xyRSx3QkFBd0IsbUJBQU8sQ0FBQywwRkFBd0I7O0FBRXhELHNCQUFzQixtQkFBTyxDQUFDLHNGQUFzQjs7QUFFcEQsaUNBQWlDLG1CQUFPLENBQUMsNEdBQWlDOztBQUUxRSx3QkFBd0IsbUJBQU8sQ0FBQywwRkFBd0I7O0FBRXhEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUF5QixtQkFBbUIseUJBQXlCOzs7Ozs7Ozs7Ozs7QUNieEQ7O0FBQ2JBLDhDQUE2QztBQUN6Q0csRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0FELHVCQUFBLEdBQTBCLEtBQUssQ0FBL0I7O0FBQ0EsSUFBSUcsTUFBTSxHQUFHQyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyw0Q0FBRCxDQUFSLENBQW5DOztBQUNBLFNBQVNELHNCQUFULENBQWdDRSxHQUFoQyxFQUFxQztBQUNqQyxTQUFPQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWCxHQUF3QkQsR0FBeEIsR0FBOEI7QUFDakMsZUFBU0E7QUFEd0IsR0FBckM7QUFHSDs7QUFDRCxJQUFNSixlQUFl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QUMxRCxLQUFELEVBQVc7QUFFMUIsc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyxtRUFBRDtBQUFZLGFBQU8sRUFBR0EsS0FBSyxDQUFDMkQ7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBS0QsQ0FQRDs7S0FBTUQ7O0FBaUNOLCtEQUFlQSxRQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NBLGlIQUFrRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvYW1wLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9hbXAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLW1hbmFnZXItY29udGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9zaWRlLWVmZmVjdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2hlYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkFtcFN0YXRlQ29udGV4dCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBBbXBTdGF0ZUNvbnRleHQgPSBfcmVhY3QuZGVmYXVsdC5jcmVhdGVDb250ZXh0KHtcbn0pO1xuZXhwb3J0cy5BbXBTdGF0ZUNvbnRleHQgPSBBbXBTdGF0ZUNvbnRleHQ7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIEFtcFN0YXRlQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdBbXBTdGF0ZUNvbnRleHQnO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbXAtY29udGV4dC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuaXNJbkFtcE1vZGUgPSBpc0luQW1wTW9kZTtcbmV4cG9ydHMudXNlQW1wID0gdXNlQW1wO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfYW1wQ29udGV4dCA9IHJlcXVpcmUoXCIuL2FtcC1jb250ZXh0XCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gaXNJbkFtcE1vZGUoeyBhbXBGaXJzdCA9ZmFsc2UgLCBoeWJyaWQgPWZhbHNlICwgaGFzUXVlcnkgPWZhbHNlICwgIH0gPSB7XG59KSB7XG4gICAgcmV0dXJuIGFtcEZpcnN0IHx8IGh5YnJpZCAmJiBoYXNRdWVyeTtcbn1cbmZ1bmN0aW9uIHVzZUFtcCgpIHtcbiAgICAvLyBEb24ndCBhc3NpZ24gdGhlIGNvbnRleHQgdmFsdWUgdG8gYSB2YXJpYWJsZSB0byBzYXZlIGJ5dGVzXG4gICAgcmV0dXJuIGlzSW5BbXBNb2RlKF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX2FtcENvbnRleHQuQW1wU3RhdGVDb250ZXh0KSk7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFtcC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuSGVhZE1hbmFnZXJDb250ZXh0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IEhlYWRNYW5hZ2VyQ29udGV4dCA9IF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUNvbnRleHQoe1xufSk7XG5leHBvcnRzLkhlYWRNYW5hZ2VyQ29udGV4dCA9IEhlYWRNYW5hZ2VyQ29udGV4dDtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgSGVhZE1hbmFnZXJDb250ZXh0LmRpc3BsYXlOYW1lID0gJ0hlYWRNYW5hZ2VyQ29udGV4dCc7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhlYWQtbWFuYWdlci1jb250ZXh0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0SGVhZCA9IGRlZmF1bHRIZWFkO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3NpZGVFZmZlY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3NpZGUtZWZmZWN0XCIpKTtcbnZhciBfYW1wQ29udGV4dCA9IHJlcXVpcmUoXCIuL2FtcC1jb250ZXh0XCIpO1xudmFyIF9oZWFkTWFuYWdlckNvbnRleHQgPSByZXF1aXJlKFwiLi9oZWFkLW1hbmFnZXItY29udGV4dFwiKTtcbnZhciBfYW1wID0gcmVxdWlyZShcIi4vYW1wXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gICAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBuZXdPYmogPSB7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChvYmogIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yKHZhciBrZXkgaW4gb2JqKXtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGVzYyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXNjLmdldCB8fCBkZXNjLnNldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbmV3T2JqLmRlZmF1bHQgPSBvYmo7XG4gICAgICAgIHJldHVybiBuZXdPYmo7XG4gICAgfVxufVxuZnVuY3Rpb24gZGVmYXVsdEhlYWQoaW5BbXBNb2RlID0gZmFsc2UpIHtcbiAgICBjb25zdCBoZWFkID0gW1xuICAgICAgICAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGNoYXJTZXQ6IFwidXRmLThcIlxuICAgICAgICB9KVxuICAgIF07XG4gICAgaWYgKCFpbkFtcE1vZGUpIHtcbiAgICAgICAgaGVhZC5wdXNoKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAgbmFtZTogXCJ2aWV3cG9ydFwiLFxuICAgICAgICAgICAgY29udGVudDogXCJ3aWR0aD1kZXZpY2Utd2lkdGhcIlxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIHJldHVybiBoZWFkO1xufVxuZnVuY3Rpb24gb25seVJlYWN0RWxlbWVudChsaXN0LCBjaGlsZCkge1xuICAgIC8vIFJlYWN0IGNoaWxkcmVuIGNhbiBiZSBcInN0cmluZ1wiIG9yIFwibnVtYmVyXCIgaW4gdGhpcyBjYXNlIHdlIGlnbm9yZSB0aGVtIGZvciBiYWNrd2FyZHMgY29tcGF0XG4gICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGNoaWxkID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gbGlzdDtcbiAgICB9XG4gICAgLy8gQWRkcyBzdXBwb3J0IGZvciBSZWFjdC5GcmFnbWVudFxuICAgIGlmIChjaGlsZC50eXBlID09PSBfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCkge1xuICAgICAgICByZXR1cm4gbGlzdC5jb25jYXQoX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4udG9BcnJheShjaGlsZC5wcm9wcy5jaGlsZHJlbikucmVkdWNlKChmcmFnbWVudExpc3QsIGZyYWdtZW50Q2hpbGQpPT57XG4gICAgICAgICAgICBpZiAodHlwZW9mIGZyYWdtZW50Q2hpbGQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBmcmFnbWVudENoaWxkID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmcmFnbWVudExpc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZnJhZ21lbnRMaXN0LmNvbmNhdChmcmFnbWVudENoaWxkKTtcbiAgICAgICAgfSwgW10pKTtcbiAgICB9XG4gICAgcmV0dXJuIGxpc3QuY29uY2F0KGNoaWxkKTtcbn1cbmNvbnN0IE1FVEFUWVBFUyA9IFtcbiAgICAnbmFtZScsXG4gICAgJ2h0dHBFcXVpdicsXG4gICAgJ2NoYXJTZXQnLFxuICAgICdpdGVtUHJvcCdcbl07XG4vKlxuIHJldHVybnMgYSBmdW5jdGlvbiBmb3IgZmlsdGVyaW5nIGhlYWQgY2hpbGQgZWxlbWVudHNcbiB3aGljaCBzaG91bGRuJ3QgYmUgZHVwbGljYXRlZCwgbGlrZSA8dGl0bGUvPlxuIEFsc28gYWRkcyBzdXBwb3J0IGZvciBkZWR1cGxpY2F0ZWQgYGtleWAgcHJvcGVydGllc1xuKi8gZnVuY3Rpb24gdW5pcXVlKCkge1xuICAgIGNvbnN0IGtleXMgPSBuZXcgU2V0KCk7XG4gICAgY29uc3QgdGFncyA9IG5ldyBTZXQoKTtcbiAgICBjb25zdCBtZXRhVHlwZXMgPSBuZXcgU2V0KCk7XG4gICAgY29uc3QgbWV0YUNhdGVnb3JpZXMgPSB7XG4gICAgfTtcbiAgICByZXR1cm4gKGgpPT57XG4gICAgICAgIGxldCBpc1VuaXF1ZSA9IHRydWU7XG4gICAgICAgIGxldCBoYXNLZXkgPSBmYWxzZTtcbiAgICAgICAgaWYgKGgua2V5ICYmIHR5cGVvZiBoLmtleSAhPT0gJ251bWJlcicgJiYgaC5rZXkuaW5kZXhPZignJCcpID4gMCkge1xuICAgICAgICAgICAgaGFzS2V5ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGgua2V5LnNsaWNlKGgua2V5LmluZGV4T2YoJyQnKSArIDEpO1xuICAgICAgICAgICAgaWYgKGtleXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgICAgICBpc1VuaXF1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBrZXlzLmFkZChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWZhdWx0LWNhc2VcbiAgICAgICAgc3dpdGNoKGgudHlwZSl7XG4gICAgICAgICAgICBjYXNlICd0aXRsZSc6XG4gICAgICAgICAgICBjYXNlICdiYXNlJzpcbiAgICAgICAgICAgICAgICBpZiAodGFncy5oYXMoaC50eXBlKSkge1xuICAgICAgICAgICAgICAgICAgICBpc1VuaXF1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhZ3MuYWRkKGgudHlwZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbWV0YSc6XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMCwgbGVuID0gTUVUQVRZUEVTLmxlbmd0aDsgaSA8IGxlbjsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWV0YXR5cGUgPSBNRVRBVFlQRVNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmICghaC5wcm9wcy5oYXNPd25Qcm9wZXJ0eShtZXRhdHlwZSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWV0YXR5cGUgPT09ICdjaGFyU2V0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1ldGFUeXBlcy5oYXMobWV0YXR5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNVbmlxdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YVR5cGVzLmFkZChtZXRhdHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXRlZ29yeSA9IGgucHJvcHNbbWV0YXR5cGVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IG1ldGFDYXRlZ29yaWVzW21ldGF0eXBlXSB8fCBuZXcgU2V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKG1ldGF0eXBlICE9PSAnbmFtZScgfHwgIWhhc0tleSkgJiYgY2F0ZWdvcmllcy5oYXMoY2F0ZWdvcnkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNVbmlxdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllcy5hZGQoY2F0ZWdvcnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFDYXRlZ29yaWVzW21ldGF0eXBlXSA9IGNhdGVnb3JpZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzVW5pcXVlO1xuICAgIH07XG59XG4vKipcbiAqXG4gKiBAcGFyYW0gaGVhZEVsZW1lbnRzIExpc3Qgb2YgbXVsdGlwbGUgPEhlYWQ+IGluc3RhbmNlc1xuICovIGZ1bmN0aW9uIHJlZHVjZUNvbXBvbmVudHMoaGVhZEVsZW1lbnRzLCBwcm9wcykge1xuICAgIHJldHVybiBoZWFkRWxlbWVudHMucmVkdWNlKChsaXN0LCBoZWFkRWxlbWVudCk9PntcbiAgICAgICAgY29uc3QgaGVhZEVsZW1lbnRDaGlsZHJlbiA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLnRvQXJyYXkoaGVhZEVsZW1lbnQucHJvcHMuY2hpbGRyZW4pO1xuICAgICAgICByZXR1cm4gbGlzdC5jb25jYXQoaGVhZEVsZW1lbnRDaGlsZHJlbik7XG4gICAgfSwgW10pLnJlZHVjZShvbmx5UmVhY3RFbGVtZW50LCBbXSkucmV2ZXJzZSgpLmNvbmNhdChkZWZhdWx0SGVhZChwcm9wcy5pbkFtcE1vZGUpKS5maWx0ZXIodW5pcXVlKCkpLnJldmVyc2UoKS5tYXAoKGMsIGkpPT57XG4gICAgICAgIGNvbnN0IGtleSA9IGMua2V5IHx8IGk7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50JyAmJiBwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfRk9OVFMgJiYgIXByb3BzLmluQW1wTW9kZSkge1xuICAgICAgICAgICAgaWYgKGMudHlwZSA9PT0gJ2xpbmsnICYmIGMucHJvcHNbJ2hyZWYnXSAmJiAvLyBUT0RPKHByYXRlZWtiaEApOiBSZXBsYWNlIHRoaXMgd2l0aCBjb25zdCBmcm9tIGBjb25zdGFudHNgIHdoZW4gdGhlIHRyZWUgc2hha2luZyB3b3Jrcy5cbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MnLFxuICAgICAgICAgICAgICAgICdodHRwczovL3VzZS50eXBla2l0Lm5ldC8nXG4gICAgICAgICAgICBdLnNvbWUoKHVybCk9PmMucHJvcHNbJ2hyZWYnXS5zdGFydHNXaXRoKHVybClcbiAgICAgICAgICAgICkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uYy5wcm9wcyB8fCB7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG5ld1Byb3BzWydkYXRhLWhyZWYnXSA9IG5ld1Byb3BzWydocmVmJ107XG4gICAgICAgICAgICAgICAgbmV3UHJvcHNbJ2hyZWYnXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAvLyBBZGQgdGhpcyBhdHRyaWJ1dGUgdG8gbWFrZSBpdCBlYXN5IHRvIGlkZW50aWZ5IG9wdGltaXplZCB0YWdzXG4gICAgICAgICAgICAgICAgbmV3UHJvcHNbJ2RhdGEtb3B0aW1pemVkLWZvbnRzJ10gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjLCBuZXdQcm9wcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjLCB7XG4gICAgICAgICAgICBrZXlcbiAgICAgICAgfSkpO1xuICAgIH0pO1xufVxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBpbmplY3RzIGVsZW1lbnRzIHRvIGA8aGVhZD5gIG9mIHlvdXIgcGFnZS5cbiAqIFRvIGF2b2lkIGR1cGxpY2F0ZWQgYHRhZ3NgIGluIGA8aGVhZD5gIHlvdSBjYW4gdXNlIHRoZSBga2V5YCBwcm9wZXJ0eSwgd2hpY2ggd2lsbCBtYWtlIHN1cmUgZXZlcnkgdGFnIGlzIG9ubHkgcmVuZGVyZWQgb25jZS5cbiAqLyBmdW5jdGlvbiBIZWFkKHsgY2hpbGRyZW4gIH0pIHtcbiAgICBjb25zdCBhbXBTdGF0ZSA9ICgwLCBfcmVhY3QpLnVzZUNvbnRleHQoX2FtcENvbnRleHQuQW1wU3RhdGVDb250ZXh0KTtcbiAgICBjb25zdCBoZWFkTWFuYWdlciA9ICgwLCBfcmVhY3QpLnVzZUNvbnRleHQoX2hlYWRNYW5hZ2VyQ29udGV4dC5IZWFkTWFuYWdlckNvbnRleHQpO1xuICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3NpZGVFZmZlY3QuZGVmYXVsdCwge1xuICAgICAgICByZWR1Y2VDb21wb25lbnRzVG9TdGF0ZTogcmVkdWNlQ29tcG9uZW50cyxcbiAgICAgICAgaGVhZE1hbmFnZXI6IGhlYWRNYW5hZ2VyLFxuICAgICAgICBpbkFtcE1vZGU6ICgwLCBfYW1wKS5pc0luQW1wTW9kZShhbXBTdGF0ZSlcbiAgICB9LCBjaGlsZHJlbikpO1xufVxudmFyIF9kZWZhdWx0ID0gSGVhZDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1oZWFkLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCc7XG5jbGFzcyBfY2xhc3MgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5lbWl0Q2hhbmdlID0gKCk9PntcbiAgICAgICAgICAgIGlmICh0aGlzLl9oYXNIZWFkTWFuYWdlcikge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIudXBkYXRlSGVhZCh0aGlzLnByb3BzLnJlZHVjZUNvbXBvbmVudHNUb1N0YXRlKFtcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzXG4gICAgICAgICAgICAgICAgXSwgdGhpcy5wcm9wcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9oYXNIZWFkTWFuYWdlciA9IHRoaXMucHJvcHMuaGVhZE1hbmFnZXIgJiYgdGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzO1xuICAgICAgICBpZiAoaXNTZXJ2ZXIgJiYgdGhpcy5faGFzSGVhZE1hbmFnZXIpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlcy5hZGQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmVtaXRDaGFuZ2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2hhc0hlYWRNYW5hZ2VyKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXMuYWRkKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW1pdENoYW5nZSgpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIHRoaXMuZW1pdENoYW5nZSgpO1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2hhc0hlYWRNYW5hZ2VyKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXMuZGVsZXRlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW1pdENoYW5nZSgpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IF9jbGFzcztcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2lkZS1lZmZlY3QuanMubWFwIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCJcclxuaW1wb3J0IE1lZXR1cExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0XCI7XHJcblxyXG5cclxuY29uc29sZS5sb2coXCJwcm9jZXNzLmVudi5NT05HT19EQl9VU0VSTkFNRVwiLCBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NT05HT19EQl9IT1NUKVxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgSG9tZVBhZ2UgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNZWV0dXBMaXN0IG1lZXR1cHM9eyBwcm9wcy5tZWV0dXBzfSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuXHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NT05HT19EQl9IT1NUfSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTU9OR09fREJfVVNFUk5BTUV9OiR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTU9OR09fREJfUEFTU30ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01PTkdPX0RCX0hPU1RfQ0xVU1RFUn1gKVxyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKClcclxuICBjb25zdCBtZWV0dXBDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpXHJcbiAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cENvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKVxyXG4gIGNvbnNvbGUubG9nKG1lZXR1cHMpXHJcbiAgY2xpZW50LmNsb3NlKClcclxuICBcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG1lZXR1cHM6IG1lZXR1cHMubWFwKHggPT4gKHtcclxuICAgICAgICB0aXRsZTogeC50aXRsZSxcclxuICAgICAgICBhZGRyZXNzOiB4LmFkZHJlc3MsXHJcbiAgICAgICAgaW1hZ2U6IHguaW1hZ2UsXHJcbiAgICAgICAgaWQ6IHguX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgIH0pKVxyXG4gICAgfSxcclxuICAgIHJldmFsaWRhdGU6IDM2MDAwLFxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9zaGFyZWQvbGliL2hlYWQnKVxuIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiQW1wU3RhdGVDb250ZXh0IiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJvYmoiLCJfX2VzTW9kdWxlIiwiY3JlYXRlQ29udGV4dCIsImRpc3BsYXlOYW1lIiwiaXNJbkFtcE1vZGUiLCJ1c2VBbXAiLCJfYW1wQ29udGV4dCIsImFtcEZpcnN0IiwiaHlicmlkIiwiaGFzUXVlcnkiLCJ1c2VDb250ZXh0IiwiSGVhZE1hbmFnZXJDb250ZXh0IiwiZGVmYXVsdEhlYWQiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsIl9zaWRlRWZmZWN0IiwiX2hlYWRNYW5hZ2VyQ29udGV4dCIsIl9hbXAiLCJuZXdPYmoiLCJrZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0Iiwic2V0IiwiaW5BbXBNb2RlIiwiaGVhZCIsImNyZWF0ZUVsZW1lbnQiLCJjaGFyU2V0IiwicHVzaCIsIm5hbWUiLCJjb250ZW50Iiwib25seVJlYWN0RWxlbWVudCIsImxpc3QiLCJjaGlsZCIsInR5cGUiLCJGcmFnbWVudCIsImNvbmNhdCIsIkNoaWxkcmVuIiwidG9BcnJheSIsInByb3BzIiwiY2hpbGRyZW4iLCJyZWR1Y2UiLCJmcmFnbWVudExpc3QiLCJmcmFnbWVudENoaWxkIiwiTUVUQVRZUEVTIiwidW5pcXVlIiwia2V5cyIsIlNldCIsInRhZ3MiLCJtZXRhVHlwZXMiLCJtZXRhQ2F0ZWdvcmllcyIsImgiLCJpc1VuaXF1ZSIsImhhc0tleSIsImluZGV4T2YiLCJzbGljZSIsImhhcyIsImFkZCIsImkiLCJsZW4iLCJsZW5ndGgiLCJtZXRhdHlwZSIsImNhdGVnb3J5IiwiY2F0ZWdvcmllcyIsInJlZHVjZUNvbXBvbmVudHMiLCJoZWFkRWxlbWVudHMiLCJoZWFkRWxlbWVudCIsImhlYWRFbGVtZW50Q2hpbGRyZW4iLCJyZXZlcnNlIiwiZmlsdGVyIiwibWFwIiwiYyIsInByb2Nlc3MiLCJlbnYiLCJfX05FWFRfT1BUSU1JWkVfRk9OVFMiLCJzb21lIiwidXJsIiwic3RhcnRzV2l0aCIsIm5ld1Byb3BzIiwidW5kZWZpbmVkIiwiY2xvbmVFbGVtZW50IiwiSGVhZCIsImFtcFN0YXRlIiwiaGVhZE1hbmFnZXIiLCJyZWR1Y2VDb21wb25lbnRzVG9TdGF0ZSIsIl9kZWZhdWx0IiwiaXNTZXJ2ZXIiLCJfY2xhc3MiLCJlbWl0Q2hhbmdlIiwiX2hhc0hlYWRNYW5hZ2VyIiwidXBkYXRlSGVhZCIsIm1vdW50ZWRJbnN0YW5jZXMiLCJDb21wb25lbnQiLCJNZWV0dXBMaXN0IiwiY29uc29sZSIsImxvZyIsIk5FWFRfUFVCTElDX01PTkdPX0RCX0hPU1QiLCJIb21lUGFnZSIsIm1lZXR1cHMiXSwic291cmNlUm9vdCI6IiJ9