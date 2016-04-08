(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["ReactPlan"] = factory(require("react"));
	else
		root["ReactPlan"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Viewport = exports.Row = exports.Responsive = exports.Item = exports.Column = undefined;

	var _Column = __webpack_require__(4);

	var _Column2 = _interopRequireDefault(_Column);

	var _Item = __webpack_require__(1);

	var _Item2 = _interopRequireDefault(_Item);

	var _Responsive = __webpack_require__(5);

	var _Responsive2 = _interopRequireDefault(_Responsive);

	var _Row = __webpack_require__(6);

	var _Row2 = _interopRequireDefault(_Row);

	var _Viewport = __webpack_require__(7);

	var _Viewport2 = _interopRequireDefault(_Viewport);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// this should be the entry point to your library
	exports.Column = _Column2.default;
	exports.Item = _Item2.default;
	exports.Responsive = _Responsive2.default;
	exports.Row = _Row2.default;
	exports.Viewport = _Viewport2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Item = function (_React$Component) {
	  _inherits(Item, _React$Component);

	  function Item(props, context) {
	    _classCallCheck(this, Item);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Item).call(this, props, context));
	  }

	  _createClass(Item, [{
	    key: 'componentStyle',
	    value: function componentStyle(breakpoint) {
	      //Sends a warning if responsive props are used withoyt using the Responsive Component
	      if (!breakpoint) {
	        (0, _utils.warning)('Couldn\'t find breakpoints');
	      }
	      var BreakpointProp = this.props[breakpoint];
	      //If the matching breakpoint is set to 'hide', we skip styling and rendering the children.
	      if (BreakpointProp === 'hide' && breakpoint) {
	        return null;
	      } else {
	        var style = this.props.style || {};
	        var size = BreakpointProp ? BreakpointProp : this.props.size;

	        //Assign breakpoint or default size
	        if (size) {
	          style.flex = typeof size === 'number' ? size : '1 ' + size;
	        }
	        //If the Item is a Row or Column apply specific flex container styles
	        if (this.direction) {
	          var reverse = this.props.reverse ? '-reverse' : '';
	          style.display = 'flex';
	          style.flex = style.flex || 1;
	          style.alignItems = this.props.align;
	          style.flexDirection = this.direction + reverse;
	          style.justifyContent = this.props.justify;
	          style.flexWrap = this.props.noWrap ? 'nowrap' : 'wrap' + reverse;
	        } else {
	          style.alignSelf = this.props.align;
	          style.order = this.props.order;
	        }
	        return style;
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var breakpoint = this.context.breakpoint;
	      var style = this.componentStyle(breakpoint);
	      var className = this.props.className ? this.props.className + ' ' + breakpoint : breakpoint;
	      var children = this.props.itemDefaults && this.direction ? _react2.default.Children.map(this.props.children, function (child) {
	        return _react2.default.cloneElement(child, _this2.props.itemDefaults);
	      }) : this.props.children;
	      return style ? _react2.default.createElement(
	        'div',
	        { className: className, style: style },
	        children
	      ) : null;
	    }
	  }]);

	  return Item;
	}(_react2.default.Component);

	Item.contextTypes = {
	  breakpoint: _react2.default.PropTypes.string
	};

	Item.propTypes = {
	  align: _react2.default.PropTypes.oneOf(_utils.flexAlignments),
	  children: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.arrayOf(_react2.default.PropTypes.node), _react2.default.PropTypes.node]),
	  className: _react2.default.PropTypes.string,
	  debug: _react2.default.PropTypes.bool,
	  itemDefaults: _react2.default.PropTypes.object,
	  justify: _react2.default.PropTypes.oneOf(_utils.flexJustifications),
	  noWrap: _react2.default.PropTypes.bool,
	  order: _react2.default.PropTypes.number,
	  reverse: _react2.default.PropTypes.bool,
	  size: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.string]),
	  style: _react2.default.PropTypes.object
	};

	exports.default = Item;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.warning = warning;
	var flexAlignments = exports.flexAlignments = ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'];
	var flexJustifications = exports.flexJustifications = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'];

	var defaultBreakpoints = exports.defaultBreakpoints = {
	  small: '(min-width: 0em)',
	  medium: '(min-width: 48em)',
	  large: '(min-width: 62em)',
	  wide: '(min-width: 75em)'
	};

	function warning(message) {
	  if ((undefined) !== 'production') {
	    console.warn(message);
	  }
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Item2 = __webpack_require__(1);

	var _Item3 = _interopRequireDefault(_Item2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Column = function (_Item) {
	  _inherits(Column, _Item);

	  function Column(props, context) {
	    _classCallCheck(this, Column);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Column).call(this, props, context));

	    _this.direction = 'column';
	    return _this;
	  }

	  return Column;
	}(_Item3.default);

	exports.default = Column;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _utils = __webpack_require__(3);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Responsive = function (_Component) {
	  _inherits(Responsive, _Component);

	  _createClass(Responsive, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return { breakpoint: this.state.breakpoint };
	    }
	  }]);

	  function Responsive(props, context) {
	    _classCallCheck(this, Responsive);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Responsive).call(this, props, context));

	    _this.state = {
	      breakpoints: Object.assign({}, _utils.defaultBreakpoints, _this.props.breakpoints),
	      breakpoint: null
	    };
	    return _this;
	  }

	  _createClass(Responsive, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.windowResizeHandler();
	      window.addEventListener('resize', this.windowResizeHandler.bind(this));
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener(this.windowResizeHandler);
	    }
	  }, {
	    key: 'matchMediaQuery',
	    value: function matchMediaQuery() {
	      var _this2 = this;

	      return Object.keys(this.state.breakpoints).filter(function (breakpoint) {
	        return window.matchMedia(_this2.state.breakpoints[breakpoint]).matches;
	      });
	    }
	  }, {
	    key: 'windowResizeHandler',
	    value: function windowResizeHandler() {
	      var breakpoint = this.matchMediaQuery().slice(-1)[0];
	      if (breakpoint !== this.state.breakpoint) {
	        this.setState({
	          breakpoint: breakpoint
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var children = this.props.children;

	      return _react.Children.only(children);
	    }
	  }]);

	  return Responsive;
	}(_react.Component);

	Responsive.propTypes = {
	  children: _react.PropTypes.element.isRequired,
	  breakpoints: _react.PropTypes.shape({
	    mobile: _react.PropTypes.number,
	    tablet: _react.PropTypes.number,
	    laptop: _react.PropTypes.number,
	    desktop: _react.PropTypes.number
	  })
	};

	Responsive.childContextTypes = {
	  breakpoint: _react.PropTypes.string
	};

	exports.default = Responsive;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Item2 = __webpack_require__(1);

	var _Item3 = _interopRequireDefault(_Item2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Row = function (_Item) {
	  _inherits(Row, _Item);

	  function Row(props, context) {
	    _classCallCheck(this, Row);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Row).call(this, props, context));

	    _this.direction = 'row';
	    return _this;
	  }

	  return Row;
	}(_Item3.default);

	exports.default = Row;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Viewport = function Viewport(props) {
	  return _react2.default.createElement(
	    'div',
	    { style: { height: '100vh' } },
	    props.children
	  );
	};

	Viewport.propTypes = {
	  children: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.arrayOf(_react2.default.PropTypes.node), _react2.default.PropTypes.node])
	};

	exports.default = Viewport;

/***/ }
/******/ ])
});
;