/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_BundleEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/BundleEditor */ "./src/components/BundleEditor/index.js");


function App() {
  var editorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var log = function log() {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_BundleEditor__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onInit: function onInit(evt, editor) {
      return editorRef.current = editor;
    },
    initialValue: "<p>This is the initial content of the editor.</p>",
    init: {
      height: 500,
      menubar: false,
      plugins: ['advlist', 'anchor', 'autolink', 'help', 'image', 'link', 'lists', 'searchreplace', 'table', 'wordcount'],
      toolbar: 'undo redo | blocks | ' + 'bold italic forecolor | alignleft aligncenter ' + 'alignright alignjustify | bullist numlist outdent indent | ' + 'removeformat | help',
      content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: log
  }, "Log editor content"));
}

/***/ }),

/***/ "./src/components/BundleEditor/BundleEditor.js":
/*!*****************************************************!*\
  !*** ./src/components/BundleEditor/BundleEditor.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BundledEditor)
/* harmony export */ });
/* harmony import */ var _tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tinymce/tinymce-react */ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/index.js");
/* harmony import */ var tinymce_tinymce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tinymce/tinymce */ "./node_modules/tinymce/tinymce.js");
/* harmony import */ var tinymce_tinymce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tinymce_tinymce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tinymce_models_dom_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tinymce/models/dom/model */ "./node_modules/tinymce/models/dom/model.js");
/* harmony import */ var tinymce_models_dom_model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tinymce_models_dom_model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tinymce_themes_silver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tinymce/themes/silver */ "./node_modules/tinymce/themes/silver/index.js");
/* harmony import */ var tinymce_themes_silver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tinymce_themes_silver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tinymce_icons_default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tinymce/icons/default */ "./node_modules/tinymce/icons/default/index.js");
/* harmony import */ var tinymce_icons_default__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tinymce_icons_default__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tinymce_skins_ui_oxide_skin_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tinymce/skins/ui/oxide/skin.min.css */ "./node_modules/tinymce/skins/ui/oxide/skin.min.css");
/* harmony import */ var tinymce_skins_ui_oxide_skin_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tinymce_skins_ui_oxide_skin_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var tinymce_plugins_advlist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tinymce/plugins/advlist */ "./node_modules/tinymce/plugins/advlist/index.js");
/* harmony import */ var tinymce_plugins_advlist__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_advlist__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var tinymce_plugins_anchor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tinymce/plugins/anchor */ "./node_modules/tinymce/plugins/anchor/index.js");
/* harmony import */ var tinymce_plugins_anchor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_anchor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var tinymce_plugins_autolink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tinymce/plugins/autolink */ "./node_modules/tinymce/plugins/autolink/index.js");
/* harmony import */ var tinymce_plugins_autolink__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_autolink__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var tinymce_plugins_autoresize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tinymce/plugins/autoresize */ "./node_modules/tinymce/plugins/autoresize/index.js");
/* harmony import */ var tinymce_plugins_autoresize__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_autoresize__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var tinymce_plugins_autosave__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tinymce/plugins/autosave */ "./node_modules/tinymce/plugins/autosave/index.js");
/* harmony import */ var tinymce_plugins_autosave__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_autosave__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var tinymce_plugins_charmap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tinymce/plugins/charmap */ "./node_modules/tinymce/plugins/charmap/index.js");
/* harmony import */ var tinymce_plugins_charmap__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_charmap__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var tinymce_plugins_code__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tinymce/plugins/code */ "./node_modules/tinymce/plugins/code/index.js");
/* harmony import */ var tinymce_plugins_code__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_code__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var tinymce_plugins_codesample__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tinymce/plugins/codesample */ "./node_modules/tinymce/plugins/codesample/index.js");
/* harmony import */ var tinymce_plugins_codesample__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_codesample__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var tinymce_plugins_directionality__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tinymce/plugins/directionality */ "./node_modules/tinymce/plugins/directionality/index.js");
/* harmony import */ var tinymce_plugins_directionality__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_directionality__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var tinymce_plugins_emoticons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tinymce/plugins/emoticons */ "./node_modules/tinymce/plugins/emoticons/index.js");
/* harmony import */ var tinymce_plugins_emoticons__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_emoticons__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var tinymce_plugins_fullscreen__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tinymce/plugins/fullscreen */ "./node_modules/tinymce/plugins/fullscreen/index.js");
/* harmony import */ var tinymce_plugins_fullscreen__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_fullscreen__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var tinymce_plugins_help__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tinymce/plugins/help */ "./node_modules/tinymce/plugins/help/index.js");
/* harmony import */ var tinymce_plugins_help__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_help__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var tinymce_plugins_image__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tinymce/plugins/image */ "./node_modules/tinymce/plugins/image/index.js");
/* harmony import */ var tinymce_plugins_image__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_image__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var tinymce_plugins_importcss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tinymce/plugins/importcss */ "./node_modules/tinymce/plugins/importcss/index.js");
/* harmony import */ var tinymce_plugins_importcss__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_importcss__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var tinymce_plugins_insertdatetime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! tinymce/plugins/insertdatetime */ "./node_modules/tinymce/plugins/insertdatetime/index.js");
/* harmony import */ var tinymce_plugins_insertdatetime__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_insertdatetime__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var tinymce_plugins_link__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! tinymce/plugins/link */ "./node_modules/tinymce/plugins/link/index.js");
/* harmony import */ var tinymce_plugins_link__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_link__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var tinymce_plugins_lists__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! tinymce/plugins/lists */ "./node_modules/tinymce/plugins/lists/index.js");
/* harmony import */ var tinymce_plugins_lists__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_lists__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var tinymce_plugins_media__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! tinymce/plugins/media */ "./node_modules/tinymce/plugins/media/index.js");
/* harmony import */ var tinymce_plugins_media__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_media__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var tinymce_plugins_nonbreaking__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! tinymce/plugins/nonbreaking */ "./node_modules/tinymce/plugins/nonbreaking/index.js");
/* harmony import */ var tinymce_plugins_nonbreaking__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_nonbreaking__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var tinymce_plugins_pagebreak__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! tinymce/plugins/pagebreak */ "./node_modules/tinymce/plugins/pagebreak/index.js");
/* harmony import */ var tinymce_plugins_pagebreak__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_pagebreak__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var tinymce_plugins_preview__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! tinymce/plugins/preview */ "./node_modules/tinymce/plugins/preview/index.js");
/* harmony import */ var tinymce_plugins_preview__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_preview__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var tinymce_plugins_quickbars__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! tinymce/plugins/quickbars */ "./node_modules/tinymce/plugins/quickbars/index.js");
/* harmony import */ var tinymce_plugins_quickbars__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_quickbars__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var tinymce_plugins_save__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! tinymce/plugins/save */ "./node_modules/tinymce/plugins/save/index.js");
/* harmony import */ var tinymce_plugins_save__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_save__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var tinymce_plugins_searchreplace__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! tinymce/plugins/searchreplace */ "./node_modules/tinymce/plugins/searchreplace/index.js");
/* harmony import */ var tinymce_plugins_searchreplace__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_searchreplace__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var tinymce_plugins_table__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! tinymce/plugins/table */ "./node_modules/tinymce/plugins/table/index.js");
/* harmony import */ var tinymce_plugins_table__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_table__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var tinymce_plugins_template__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! tinymce/plugins/template */ "./node_modules/tinymce/plugins/template/index.js");
/* harmony import */ var tinymce_plugins_template__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_template__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var tinymce_plugins_visualblocks__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! tinymce/plugins/visualblocks */ "./node_modules/tinymce/plugins/visualblocks/index.js");
/* harmony import */ var tinymce_plugins_visualblocks__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_visualblocks__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var tinymce_plugins_visualchars__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! tinymce/plugins/visualchars */ "./node_modules/tinymce/plugins/visualchars/index.js");
/* harmony import */ var tinymce_plugins_visualchars__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_visualchars__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var tinymce_plugins_wordcount__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! tinymce/plugins/wordcount */ "./node_modules/tinymce/plugins/wordcount/index.js");
/* harmony import */ var tinymce_plugins_wordcount__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_wordcount__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var tinymce_plugins_emoticons_js_emojis__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! tinymce/plugins/emoticons/js/emojis */ "./node_modules/tinymce/plugins/emoticons/js/emojis.js");
/* harmony import */ var tinymce_plugins_emoticons_js_emojis__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_emoticons_js_emojis__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _raw_loader_tinymce_skins_content_default_content_min_css__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! !!raw-loader!tinymce/skins/content/default/content.min.css */ "./node_modules/raw-loader/dist/cjs.js!./node_modules/tinymce/skins/content/default/content.min.css");
/* harmony import */ var _raw_loader_tinymce_skins_ui_oxide_content_min_css__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! !!raw-loader!tinymce/skins/ui/oxide/content.min.css */ "./node_modules/raw-loader/dist/cjs.js!./node_modules/tinymce/skins/ui/oxide/content.min.css");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["init"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


// TinyMCE so the global var exists
// eslint-disable-next-line no-unused-vars

// DOM model

// Theme

// Toolbar icons

// Editor styles


// importing the plugin js.
// if you use a plugin that is not listed here the editor will fail to load






























// importing plugin resources


// Content styles, including inline UI like fake cursors
/* eslint import/no-webpack-loader-syntax: off */


function BundledEditor(props) {
  var init = props.init,
    rest = _objectWithoutProperties(props, _excluded);
  // note that skin and content_css is disabled to avoid the normal
  // loading process and is instead loaded as a string via content_style
  return /*#__PURE__*/React.createElement(_tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_0__.Editor, _extends({
    init: _objectSpread(_objectSpread({}, init), {}, {
      skin: false,
      content_css: false,
      content_style: [_raw_loader_tinymce_skins_content_default_content_min_css__WEBPACK_IMPORTED_MODULE_36__["default"], _raw_loader_tinymce_skins_ui_oxide_content_min_css__WEBPACK_IMPORTED_MODULE_37__["default"], init.content_style || ''].join('\n')
    })
  }, rest));
}

/***/ }),

/***/ "./src/components/BundleEditor/index.js":
/*!**********************************************!*\
  !*** ./src/components/BundleEditor/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BundleEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BundleEditor */ "./src/components/BundleEditor/BundleEditor.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_BundleEditor__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./index.tsx":
/*!*******************!*\
  !*** ./index.tsx ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/App */ "./src/App.js");



// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';
// Render your React component instead
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById('app'));
root.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_App__WEBPACK_IMPORTED_MODULE_2__["default"], null));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcodegy_adminer"] = self["webpackChunkcodegy_adminer"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["tinymce","vendors-node_modules_tinymce_tinymce-react_lib_es2015_main_ts_index_js-node_modules_raw-loade-9c7f14"], () => (__webpack_require__("./index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LWFkbWluZXIvLi9zcmMvQXBwLmpzIiwid2VicGFjazovL2NvZGVneS1hZG1pbmVyLy4vc3JjL2NvbXBvbmVudHMvQnVuZGxlRWRpdG9yL0J1bmRsZUVkaXRvci5qcyIsIndlYnBhY2s6Ly9jb2RlZ3ktYWRtaW5lci8uL3NyYy9jb21wb25lbnRzL0J1bmRsZUVkaXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb2RlZ3ktYWRtaW5lci8uL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9jb2RlZ3ktYWRtaW5lci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb2RlZ3ktYWRtaW5lci93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2NvZGVneS1hZG1pbmVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2NvZGVneS1hZG1pbmVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jb2RlZ3ktYWRtaW5lci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvZGVneS1hZG1pbmVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY29kZWd5LWFkbWluZXIvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9jb2RlZ3ktYWRtaW5lci93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9jb2RlZ3ktYWRtaW5lci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2NvZGVneS1hZG1pbmVyL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9jb2RlZ3ktYWRtaW5lci93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdW5kbGVkRWRpdG9yIGZyb20gJy4vY29tcG9uZW50cy9CdW5kbGVFZGl0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gICAgY29uc3QgZWRpdG9yUmVmID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IGxvZyA9ICgpID0+IHtcbiAgICAgICAgaWYgKGVkaXRvclJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlZGl0b3JSZWYuY3VycmVudC5nZXRDb250ZW50KCkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEJ1bmRsZWRFZGl0b3JcbiAgICAgICAgICAgICAgICBvbkluaXQ9eyhldnQsIGVkaXRvcikgPT4gZWRpdG9yUmVmLmN1cnJlbnQgPSBlZGl0b3J9XG4gICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlPSc8cD5UaGlzIGlzIHRoZSBpbml0aWFsIGNvbnRlbnQgb2YgdGhlIGVkaXRvci48L3A+J1xuICAgICAgICAgICAgICAgIGluaXQ9e3tcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MDAsXG4gICAgICAgICAgICAgICAgICAgIG1lbnViYXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAnYWR2bGlzdCcsICdhbmNob3InLCAnYXV0b2xpbmsnLCAnaGVscCcsICdpbWFnZScsICdsaW5rJywgJ2xpc3RzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdzZWFyY2hyZXBsYWNlJywgJ3RhYmxlJywgJ3dvcmRjb3VudCdcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgdG9vbGJhcjogJ3VuZG8gcmVkbyB8IGJsb2NrcyB8ICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2JvbGQgaXRhbGljIGZvcmVjb2xvciB8IGFsaWdubGVmdCBhbGlnbmNlbnRlciAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdhbGlnbnJpZ2h0IGFsaWduanVzdGlmeSB8IGJ1bGxpc3QgbnVtbGlzdCBvdXRkZW50IGluZGVudCB8ICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3JlbW92ZWZvcm1hdCB8IGhlbHAnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50X3N0eWxlOiAnYm9keSB7IGZvbnQtZmFtaWx5OkhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmOyBmb250LXNpemU6MTRweCB9J1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtsb2d9PkxvZyBlZGl0b3IgY29udGVudDwvYnV0dG9uPlxuICAgICAgICA8Lz5cbiAgICApO1xufSIsImltcG9ydCB7IEVkaXRvciB9IGZyb20gJ0B0aW55bWNlL3RpbnltY2UtcmVhY3QnO1xuXG4vLyBUaW55TUNFIHNvIHRoZSBnbG9iYWwgdmFyIGV4aXN0c1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5pbXBvcnQgdGlueW1jZSBmcm9tICd0aW55bWNlL3RpbnltY2UnO1xuLy8gRE9NIG1vZGVsXG5pbXBvcnQgJ3RpbnltY2UvbW9kZWxzL2RvbS9tb2RlbCdcbi8vIFRoZW1lXG5pbXBvcnQgJ3RpbnltY2UvdGhlbWVzL3NpbHZlcic7XG4vLyBUb29sYmFyIGljb25zXG5pbXBvcnQgJ3RpbnltY2UvaWNvbnMvZGVmYXVsdCc7XG4vLyBFZGl0b3Igc3R5bGVzXG5pbXBvcnQgJ3RpbnltY2Uvc2tpbnMvdWkvb3hpZGUvc2tpbi5taW4uY3NzJztcblxuLy8gaW1wb3J0aW5nIHRoZSBwbHVnaW4ganMuXG4vLyBpZiB5b3UgdXNlIGEgcGx1Z2luIHRoYXQgaXMgbm90IGxpc3RlZCBoZXJlIHRoZSBlZGl0b3Igd2lsbCBmYWlsIHRvIGxvYWRcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL2Fkdmxpc3QnO1xuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvYW5jaG9yJztcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL2F1dG9saW5rJztcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL2F1dG9yZXNpemUnO1xuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvYXV0b3NhdmUnO1xuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvY2hhcm1hcCc7XG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy9jb2RlJztcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL2NvZGVzYW1wbGUnO1xuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvZGlyZWN0aW9uYWxpdHknO1xuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvZW1vdGljb25zJztcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL2Z1bGxzY3JlZW4nO1xuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvaGVscCc7XG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy9pbWFnZSc7XG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy9pbXBvcnRjc3MnO1xuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvaW5zZXJ0ZGF0ZXRpbWUnO1xuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvbGluayc7XG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy9saXN0cyc7XG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy9tZWRpYSc7XG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy9ub25icmVha2luZyc7XG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy9wYWdlYnJlYWsnO1xuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvcHJldmlldyc7XG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy9xdWlja2JhcnMnO1xuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvc2F2ZSc7XG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy9zZWFyY2hyZXBsYWNlJztcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL3RhYmxlJztcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL3RlbXBsYXRlJztcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL3Zpc3VhbGJsb2Nrcyc7XG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy92aXN1YWxjaGFycyc7XG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy93b3JkY291bnQnO1xuXG4vLyBpbXBvcnRpbmcgcGx1Z2luIHJlc291cmNlc1xuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvZW1vdGljb25zL2pzL2Vtb2ppcyc7XG5cbi8vIENvbnRlbnQgc3R5bGVzLCBpbmNsdWRpbmcgaW5saW5lIFVJIGxpa2UgZmFrZSBjdXJzb3JzXG4vKiBlc2xpbnQgaW1wb3J0L25vLXdlYnBhY2stbG9hZGVyLXN5bnRheDogb2ZmICovXG5pbXBvcnQgY29udGVudENzcyBmcm9tICchIXJhdy1sb2FkZXIhdGlueW1jZS9za2lucy9jb250ZW50L2RlZmF1bHQvY29udGVudC5taW4uY3NzJztcbmltcG9ydCBjb250ZW50VWlDc3MgZnJvbSAnISFyYXctbG9hZGVyIXRpbnltY2Uvc2tpbnMvdWkvb3hpZGUvY29udGVudC5taW4uY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnVuZGxlZEVkaXRvcihwcm9wcykge1xuICAgIGNvbnN0IHtpbml0LCAuLi5yZXN0fSA9IHByb3BzO1xuICAgIC8vIG5vdGUgdGhhdCBza2luIGFuZCBjb250ZW50X2NzcyBpcyBkaXNhYmxlZCB0byBhdm9pZCB0aGUgbm9ybWFsXG4gICAgLy8gbG9hZGluZyBwcm9jZXNzIGFuZCBpcyBpbnN0ZWFkIGxvYWRlZCBhcyBhIHN0cmluZyB2aWEgY29udGVudF9zdHlsZVxuICAgIHJldHVybiAoXG4gICAgICAgIDxFZGl0b3JcbiAgICAgICAgICAgIGluaXQ9e3tcbiAgICAgICAgICAgICAgICAuLi5pbml0LFxuICAgICAgICAgICAgICAgIHNraW46IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRfY3NzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb250ZW50X3N0eWxlOiBbY29udGVudENzcywgY29udGVudFVpQ3NzLCBpbml0LmNvbnRlbnRfc3R5bGUgfHwgJyddLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAvPlxuICAgICk7XG59IiwiaW1wb3J0IEJ1bmRsZWRFZGl0b3IgZnJvbSBcIi4vQnVuZGxlRWRpdG9yXCI7XG5leHBvcnQgZGVmYXVsdCBCdW5kbGVkRWRpdG9yOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XG5pbXBvcnQgQXBwIGZyb20gXCIuL3NyYy9BcHBcIjtcbi8vIENsZWFyIHRoZSBleGlzdGluZyBIVE1MIGNvbnRlbnRcbmRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJzxkaXYgaWQ9XCJhcHBcIj48L2Rpdj4nO1xuXG4vLyBSZW5kZXIgeW91ciBSZWFjdCBjb21wb25lbnQgaW5zdGVhZFxuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbnJvb3QucmVuZGVyKDxBcHAvPik7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rY29kZWd5X2FkbWluZXJcIl0gPSBzZWxmW1wid2VicGFja0NodW5rY29kZWd5X2FkbWluZXJcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInRpbnltY2VcIixcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3RpbnltY2VfdGlueW1jZS1yZWFjdF9saWJfZXMyMDE1X21haW5fdHNfaW5kZXhfanMtbm9kZV9tb2R1bGVzX3Jhdy1sb2FkZS05YzdmMTRcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9pbmRleC50c3hcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsIkJ1bmRsZWRFZGl0b3IiLCJBcHAiLCJlZGl0b3JSZWYiLCJsb2ciLCJjdXJyZW50IiwiY29uc29sZSIsImdldENvbnRlbnQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJvbkluaXQiLCJldnQiLCJlZGl0b3IiLCJpbml0aWFsVmFsdWUiLCJpbml0IiwiaGVpZ2h0IiwibWVudWJhciIsInBsdWdpbnMiLCJ0b29sYmFyIiwiY29udGVudF9zdHlsZSIsIm9uQ2xpY2siLCJFZGl0b3IiLCJ0aW55bWNlIiwiY29udGVudENzcyIsImNvbnRlbnRVaUNzcyIsInByb3BzIiwicmVzdCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsIl9leHRlbmRzIiwiX29iamVjdFNwcmVhZCIsInNraW4iLCJjb250ZW50X2NzcyIsImpvaW4iXSwic291cmNlUm9vdCI6IiJ9