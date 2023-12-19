/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/BundleEditor/BundleEditor.js":
/*!*****************************************************!*\
  !*** ./src/components/BundleEditor/BundleEditor.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BundledEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tinymce/tinymce-react */ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/index.js");
/* harmony import */ var tinymce_tinymce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tinymce/tinymce */ "./node_modules/tinymce/tinymce.js");
/* harmony import */ var tinymce_tinymce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tinymce_tinymce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tinymce_models_dom_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tinymce/models/dom/model */ "./node_modules/tinymce/models/dom/model.js");
/* harmony import */ var tinymce_models_dom_model__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tinymce_models_dom_model__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tinymce_themes_silver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tinymce/themes/silver */ "./node_modules/tinymce/themes/silver/index.js");
/* harmony import */ var tinymce_themes_silver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tinymce_themes_silver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tinymce_icons_default__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tinymce/icons/default */ "./node_modules/tinymce/icons/default/index.js");
/* harmony import */ var tinymce_icons_default__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tinymce_icons_default__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var tinymce_skins_ui_oxide_skin_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tinymce/skins/ui/oxide/skin.min.css */ "./node_modules/tinymce/skins/ui/oxide/skin.min.css");
/* harmony import */ var tinymce_skins_ui_oxide_skin_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tinymce_skins_ui_oxide_skin_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var tinymce_plugins_advlist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tinymce/plugins/advlist */ "./node_modules/tinymce/plugins/advlist/index.js");
/* harmony import */ var tinymce_plugins_advlist__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_advlist__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var tinymce_plugins_anchor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tinymce/plugins/anchor */ "./node_modules/tinymce/plugins/anchor/index.js");
/* harmony import */ var tinymce_plugins_anchor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_anchor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var tinymce_plugins_autolink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tinymce/plugins/autolink */ "./node_modules/tinymce/plugins/autolink/index.js");
/* harmony import */ var tinymce_plugins_autolink__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_autolink__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var tinymce_plugins_autoresize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tinymce/plugins/autoresize */ "./node_modules/tinymce/plugins/autoresize/index.js");
/* harmony import */ var tinymce_plugins_autoresize__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_autoresize__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var tinymce_plugins_autosave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tinymce/plugins/autosave */ "./node_modules/tinymce/plugins/autosave/index.js");
/* harmony import */ var tinymce_plugins_autosave__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_autosave__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var tinymce_plugins_charmap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tinymce/plugins/charmap */ "./node_modules/tinymce/plugins/charmap/index.js");
/* harmony import */ var tinymce_plugins_charmap__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_charmap__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var tinymce_plugins_code__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tinymce/plugins/code */ "./node_modules/tinymce/plugins/code/index.js");
/* harmony import */ var tinymce_plugins_code__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_code__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var tinymce_plugins_codesample__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tinymce/plugins/codesample */ "./node_modules/tinymce/plugins/codesample/index.js");
/* harmony import */ var tinymce_plugins_codesample__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_codesample__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var tinymce_plugins_directionality__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tinymce/plugins/directionality */ "./node_modules/tinymce/plugins/directionality/index.js");
/* harmony import */ var tinymce_plugins_directionality__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_directionality__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var tinymce_plugins_emoticons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tinymce/plugins/emoticons */ "./node_modules/tinymce/plugins/emoticons/index.js");
/* harmony import */ var tinymce_plugins_emoticons__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_emoticons__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var tinymce_plugins_fullscreen__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tinymce/plugins/fullscreen */ "./node_modules/tinymce/plugins/fullscreen/index.js");
/* harmony import */ var tinymce_plugins_fullscreen__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_fullscreen__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var tinymce_plugins_help__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tinymce/plugins/help */ "./node_modules/tinymce/plugins/help/index.js");
/* harmony import */ var tinymce_plugins_help__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_help__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var tinymce_plugins_image__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tinymce/plugins/image */ "./node_modules/tinymce/plugins/image/index.js");
/* harmony import */ var tinymce_plugins_image__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_image__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var tinymce_plugins_importcss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! tinymce/plugins/importcss */ "./node_modules/tinymce/plugins/importcss/index.js");
/* harmony import */ var tinymce_plugins_importcss__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_importcss__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var tinymce_plugins_insertdatetime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! tinymce/plugins/insertdatetime */ "./node_modules/tinymce/plugins/insertdatetime/index.js");
/* harmony import */ var tinymce_plugins_insertdatetime__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_insertdatetime__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var tinymce_plugins_link__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! tinymce/plugins/link */ "./node_modules/tinymce/plugins/link/index.js");
/* harmony import */ var tinymce_plugins_link__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_link__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var tinymce_plugins_lists__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! tinymce/plugins/lists */ "./node_modules/tinymce/plugins/lists/index.js");
/* harmony import */ var tinymce_plugins_lists__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_lists__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var tinymce_plugins_media__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! tinymce/plugins/media */ "./node_modules/tinymce/plugins/media/index.js");
/* harmony import */ var tinymce_plugins_media__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_media__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var tinymce_plugins_nonbreaking__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! tinymce/plugins/nonbreaking */ "./node_modules/tinymce/plugins/nonbreaking/index.js");
/* harmony import */ var tinymce_plugins_nonbreaking__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_nonbreaking__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var tinymce_plugins_pagebreak__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! tinymce/plugins/pagebreak */ "./node_modules/tinymce/plugins/pagebreak/index.js");
/* harmony import */ var tinymce_plugins_pagebreak__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_pagebreak__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var tinymce_plugins_preview__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! tinymce/plugins/preview */ "./node_modules/tinymce/plugins/preview/index.js");
/* harmony import */ var tinymce_plugins_preview__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_preview__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var tinymce_plugins_quickbars__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! tinymce/plugins/quickbars */ "./node_modules/tinymce/plugins/quickbars/index.js");
/* harmony import */ var tinymce_plugins_quickbars__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_quickbars__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var tinymce_plugins_save__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! tinymce/plugins/save */ "./node_modules/tinymce/plugins/save/index.js");
/* harmony import */ var tinymce_plugins_save__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_save__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var tinymce_plugins_searchreplace__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! tinymce/plugins/searchreplace */ "./node_modules/tinymce/plugins/searchreplace/index.js");
/* harmony import */ var tinymce_plugins_searchreplace__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_searchreplace__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var tinymce_plugins_table__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! tinymce/plugins/table */ "./node_modules/tinymce/plugins/table/index.js");
/* harmony import */ var tinymce_plugins_table__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_table__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var tinymce_plugins_template__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! tinymce/plugins/template */ "./node_modules/tinymce/plugins/template/index.js");
/* harmony import */ var tinymce_plugins_template__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_template__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var tinymce_plugins_visualblocks__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! tinymce/plugins/visualblocks */ "./node_modules/tinymce/plugins/visualblocks/index.js");
/* harmony import */ var tinymce_plugins_visualblocks__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_visualblocks__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var tinymce_plugins_visualchars__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! tinymce/plugins/visualchars */ "./node_modules/tinymce/plugins/visualchars/index.js");
/* harmony import */ var tinymce_plugins_visualchars__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_visualchars__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var tinymce_plugins_wordcount__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! tinymce/plugins/wordcount */ "./node_modules/tinymce/plugins/wordcount/index.js");
/* harmony import */ var tinymce_plugins_wordcount__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_wordcount__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var tinymce_plugins_emoticons_js_emojis__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! tinymce/plugins/emoticons/js/emojis */ "./node_modules/tinymce/plugins/emoticons/js/emojis.js");
/* harmony import */ var tinymce_plugins_emoticons_js_emojis__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_emoticons_js_emojis__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _raw_loader_tinymce_skins_content_default_content_min_css__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! !!raw-loader!tinymce/skins/content/default/content.min.css */ "./node_modules/raw-loader/dist/cjs.js!./node_modules/tinymce/skins/content/default/content.min.css");
/* harmony import */ var _raw_loader_tinymce_skins_ui_oxide_content_min_css__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! !!raw-loader!tinymce/skins/ui/oxide/content.min.css */ "./node_modules/raw-loader/dist/cjs.js!./node_modules/tinymce/skins/ui/oxide/content.min.css");
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_1__.Editor, _extends({
    init: _objectSpread(_objectSpread({}, init), {}, {
      skin: false,
      content_css: false,
      content_style: [_raw_loader_tinymce_skins_content_default_content_min_css__WEBPACK_IMPORTED_MODULE_37__["default"], _raw_loader_tinymce_skins_ui_oxide_content_min_css__WEBPACK_IMPORTED_MODULE_38__["default"], init.content_style || ''].join('\n')
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

/***/ "./src/components/Page404/Page404.js":
/*!*******************************************!*\
  !*** ./src/components/Page404/Page404.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Page404() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "404");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page404);

/***/ }),

/***/ "./src/modules/NewPost/NewPost.js":
/*!****************************************!*\
  !*** ./src/modules/NewPost/NewPost.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NewPost)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_BundleEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/BundleEditor */ "./src/components/BundleEditor/index.js");


function NewPost() {
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
    initialValue: "<p>I gonna be the very best...</p>",
    init: {
      height: 500,
      menubar: false,
      plugins: ['advlist', 'anchor', 'autolink',
      // 'help', // causes error because plugin is 404
      'image', 'link', 'lists', 'searchreplace', 'table', 'wordcount'],
      toolbar: 'undo redo | blocks | ' + 'bold italic forecolor | alignleft aligncenter ' + 'alignright alignjustify | bullist numlist outdent indent | ' + 'removeformat | help',
      content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: log
  }, "Log editor content"));
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@tailwind base;
@tailwind components;
@tailwind utilities;
`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA,cAAc;AACd,oBAAoB;AACpB,mBAAmB","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _src_styles_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/App */ "./src/App.tsx");





// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';
// Render React component instead
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById('app'));
root.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null,
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_App__WEBPACK_IMPORTED_MODULE_3__["default"], null))));


/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ "./src/routes.tsx");



function App() {
    var renderRoutes = function () {
        return _routes__WEBPACK_IMPORTED_MODULE_1__.routes.map(function (route) { return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, { key: route.path, path: route.path, element: route.element }); });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Routes, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, { path: "/", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Layout, null) }, renderRoutes()))));
}
function Layout() {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("aside", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, { to: "/", className: 'text-3xl font-bold underline' }, "Home")),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, { to: "/new-post" }, "About")))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Outlet, null)));
}


/***/ }),

/***/ "./src/routes.tsx":
/*!************************!*\
  !*** ./src/routes.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_NewPost_NewPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/NewPost/NewPost */ "./src/modules/NewPost/NewPost.js");
/* harmony import */ var _components_Page404_Page404__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Page404/Page404 */ "./src/components/Page404/Page404.js");



var routes = [
    {
        path: "new-post",
        element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_modules_NewPost_NewPost__WEBPACK_IMPORTED_MODULE_1__["default"], { key: 'new-post' }),
    },
    {
        path: "*",
        element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Page404_Page404__WEBPACK_IMPORTED_MODULE_2__["default"], { key: 'page-404' }),
    },
];


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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["tinymce","vendors-node_modules_tinymce_tinymce-react_lib_es2015_main_ts_index_js-node_modules_css-loade-d1de1f"], () => (__webpack_require__("./index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Q7V0FDdEQsc0NBQXNDLGlFQUFpRTtXQUN2RztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDSkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztXQ2hEQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29kZWd5LWFkbWluZXIvLi9zcmMvY29tcG9uZW50cy9CdW5kbGVFZGl0b3IvQnVuZGxlRWRpdG9yLmpzIiwid2VicGFjazovL2NvZGVneS1hZG1pbmVyLy4vc3JjL2NvbXBvbmVudHMvQnVuZGxlRWRpdG9yL2luZGV4LmpzIiwid2VicGFjazovL2NvZGVneS1hZG1pbmVyLy4vc3JjL2NvbXBvbmVudHMvUGFnZTQwNC9QYWdlNDA0LmpzIiwid2VicGFjazovL2NvZGVneS1hZG1pbmVyLy4vc3JjL21vZHVsZXMvTmV3UG9zdC9OZXdQb3N0LmpzIiwid2VicGFjazovL2NvZGVneS1hZG1pbmVyLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL2NvZGVneS1hZG1pbmVyLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzP2U0NWIiLCJ3ZWJwYWNrOi8vY29kZWd5LWFkbWluZXIvLi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vY29kZWd5LWFkbWluZXIvLi9zcmMvQXBwLnRzeCIsIndlYnBhY2s6Ly9jb2RlZ3ktYWRtaW5lci8uL3NyYy9yb3V0ZXMudHN4Iiwid2VicGFjazovL2NvZGVneS1hZG1pbmVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvZGVneS1hZG1pbmVyL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vY29kZWd5LWFkbWluZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY29kZWd5LWFkbWluZXIvd2VicGFjay9ydW50aW1lL2NyZWF0ZSBmYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY29kZWd5LWFkbWluZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NvZGVneS1hZG1pbmVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY29kZWd5LWFkbWluZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb2RlZ3ktYWRtaW5lci93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL2NvZGVneS1hZG1pbmVyL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2NvZGVneS1hZG1pbmVyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9jb2RlZ3ktYWRtaW5lci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2NvZGVneS1hZG1pbmVyL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9jb2RlZ3ktYWRtaW5lci93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRWRpdG9yIH0gZnJvbSAnQHRpbnltY2UvdGlueW1jZS1yZWFjdCc7XG5cbi8vIFRpbnlNQ0Ugc28gdGhlIGdsb2JhbCB2YXIgZXhpc3RzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmltcG9ydCB0aW55bWNlIGZyb20gJ3RpbnltY2UvdGlueW1jZSc7XG4vLyBET00gbW9kZWxcbmltcG9ydCAndGlueW1jZS9tb2RlbHMvZG9tL21vZGVsJ1xuLy8gVGhlbWVcbmltcG9ydCAndGlueW1jZS90aGVtZXMvc2lsdmVyJztcbi8vIFRvb2xiYXIgaWNvbnNcbmltcG9ydCAndGlueW1jZS9pY29ucy9kZWZhdWx0Jztcbi8vIEVkaXRvciBzdHlsZXNcbmltcG9ydCAndGlueW1jZS9za2lucy91aS9veGlkZS9za2luLm1pbi5jc3MnO1xuXG4vLyBpbXBvcnRpbmcgdGhlIHBsdWdpbiBqcy5cbi8vIGlmIHlvdSB1c2UgYSBwbHVnaW4gdGhhdCBpcyBub3QgbGlzdGVkIGhlcmUgdGhlIGVkaXRvciB3aWxsIGZhaWwgdG8gbG9hZFxuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvYWR2bGlzdCc7XG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy9hbmNob3InO1xuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvYXV0b2xpbmsnO1xuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvYXV0b3Jlc2l6ZSc7XG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy9hdXRvc2F2ZSc7XG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy9jaGFybWFwJztcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL2NvZGUnO1xuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvY29kZXNhbXBsZSc7XG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy9kaXJlY3Rpb25hbGl0eSc7XG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy9lbW90aWNvbnMnO1xuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvZnVsbHNjcmVlbic7XG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy9oZWxwJztcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL2ltYWdlJztcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL2ltcG9ydGNzcyc7XG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy9pbnNlcnRkYXRldGltZSc7XG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy9saW5rJztcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL2xpc3RzJztcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL21lZGlhJztcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL25vbmJyZWFraW5nJztcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL3BhZ2VicmVhayc7XG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy9wcmV2aWV3JztcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL3F1aWNrYmFycyc7XG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy9zYXZlJztcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL3NlYXJjaHJlcGxhY2UnO1xuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvdGFibGUnO1xuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvdGVtcGxhdGUnO1xuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvdmlzdWFsYmxvY2tzJztcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL3Zpc3VhbGNoYXJzJztcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL3dvcmRjb3VudCc7XG5cbi8vIGltcG9ydGluZyBwbHVnaW4gcmVzb3VyY2VzXG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy9lbW90aWNvbnMvanMvZW1vamlzJztcblxuLy8gQ29udGVudCBzdHlsZXMsIGluY2x1ZGluZyBpbmxpbmUgVUkgbGlrZSBmYWtlIGN1cnNvcnNcbi8qIGVzbGludCBpbXBvcnQvbm8td2VicGFjay1sb2FkZXItc3ludGF4OiBvZmYgKi9cbmltcG9ydCBjb250ZW50Q3NzIGZyb20gJyEhcmF3LWxvYWRlciF0aW55bWNlL3NraW5zL2NvbnRlbnQvZGVmYXVsdC9jb250ZW50Lm1pbi5jc3MnO1xuaW1wb3J0IGNvbnRlbnRVaUNzcyBmcm9tICchIXJhdy1sb2FkZXIhdGlueW1jZS9za2lucy91aS9veGlkZS9jb250ZW50Lm1pbi5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdW5kbGVkRWRpdG9yKHByb3BzKSB7XG4gICAgY29uc3Qge2luaXQsIC4uLnJlc3R9ID0gcHJvcHM7XG4gICAgLy8gbm90ZSB0aGF0IHNraW4gYW5kIGNvbnRlbnRfY3NzIGlzIGRpc2FibGVkIHRvIGF2b2lkIHRoZSBub3JtYWxcbiAgICAvLyBsb2FkaW5nIHByb2Nlc3MgYW5kIGlzIGluc3RlYWQgbG9hZGVkIGFzIGEgc3RyaW5nIHZpYSBjb250ZW50X3N0eWxlXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEVkaXRvclxuICAgICAgICAgICAgaW5pdD17e1xuICAgICAgICAgICAgICAgIC4uLmluaXQsXG4gICAgICAgICAgICAgICAgc2tpbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29udGVudF9jc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRfc3R5bGU6IFtjb250ZW50Q3NzLCBjb250ZW50VWlDc3MsIGluaXQuY29udGVudF9zdHlsZSB8fCAnJ10uam9pbignXFxuJyksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIC8+XG4gICAgKTtcbn0iLCJpbXBvcnQgQnVuZGxlZEVkaXRvciBmcm9tIFwiLi9CdW5kbGVFZGl0b3JcIjtcbmV4cG9ydCBkZWZhdWx0IEJ1bmRsZWRFZGl0b3I7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gUGFnZTQwNCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgNDA0XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U0MDQ7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdW5kbGVkRWRpdG9yIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQnVuZGxlRWRpdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3UG9zdCgpIHtcbiAgICBjb25zdCBlZGl0b3JSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgbG9nID0gKCkgPT4ge1xuICAgICAgICBpZiAoZWRpdG9yUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVkaXRvclJlZi5jdXJyZW50LmdldENvbnRlbnQoKSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8QnVuZGxlZEVkaXRvclxuICAgICAgICAgICAgICAgIG9uSW5pdD17KGV2dCwgZWRpdG9yKSA9PiBlZGl0b3JSZWYuY3VycmVudCA9IGVkaXRvcn1cbiAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9JzxwPkkgZ29ubmEgYmUgdGhlIHZlcnkgYmVzdC4uLjwvcD4nXG4gICAgICAgICAgICAgICAgaW5pdD17e1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgbWVudWJhcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICdhZHZsaXN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdhbmNob3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2F1dG9saW5rJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICdoZWxwJywgLy8gY2F1c2VzIGVycm9yIGJlY2F1c2UgcGx1Z2luIGlzIDQwNFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdsaW5rJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdsaXN0cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAnc2VhcmNocmVwbGFjZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAndGFibGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3dvcmRjb3VudCdcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgdG9vbGJhcjogJ3VuZG8gcmVkbyB8IGJsb2NrcyB8ICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2JvbGQgaXRhbGljIGZvcmVjb2xvciB8IGFsaWdubGVmdCBhbGlnbmNlbnRlciAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdhbGlnbnJpZ2h0IGFsaWduanVzdGlmeSB8IGJ1bGxpc3QgbnVtbGlzdCBvdXRkZW50IGluZGVudCB8ICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3JlbW92ZWZvcm1hdCB8IGhlbHAnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50X3N0eWxlOiAnYm9keSB7IGZvbnQtZmFtaWx5OkhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmOyBmb250LXNpemU6MTRweCB9J1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtsb2d9PkxvZyBlZGl0b3IgY29udGVudDwvYnV0dG9uPlxuICAgICAgICA8Lz5cbiAgICApO1xufSIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAdGFpbHdpbmQgYmFzZTtcbkB0YWlsd2luZCBjb21wb25lbnRzO1xuQHRhaWx3aW5kIHV0aWxpdGllcztcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGNBQWM7QUFDZCxvQkFBb0I7QUFDcEIsbUJBQW1CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB0YWlsd2luZCBiYXNlO1xcbkB0YWlsd2luZCBjb21wb25lbnRzO1xcbkB0YWlsd2luZCB1dGlsaXRpZXM7XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tICdyZWFjdC1kb20vY2xpZW50JztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbXBvcnQgXCIuL3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wiXG5cbmltcG9ydCBBcHAgZnJvbSBcIi4vc3JjL0FwcFwiO1xuXG4vLyBDbGVhciB0aGUgZXhpc3RpbmcgSFRNTCBjb250ZW50XG5kb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICc8ZGl2IGlkPVwiYXBwXCI+PC9kaXY+JztcblxuLy8gUmVuZGVyIFJlYWN0IGNvbXBvbmVudCBpbnN0ZWFkXG5jb25zdCByb290ID0gY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykhKTtcbnJvb3QucmVuZGVyKFxuICAgIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgICAgICA8QnJvd3NlclJvdXRlcj5cbiAgICAgICAgICAgIDxBcHAvPlxuICAgICAgICA8L0Jyb3dzZXJSb3V0ZXI+XG4gICAgPC9SZWFjdC5TdHJpY3RNb2RlPlxuKTsiLCJpbXBvcnQgUmVhY3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlcywgUm91dGUsIE91dGxldCwgTGluayB9ICAgICAgZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuaW1wb3J0IHsgcm91dGVzIH0gICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuL3JvdXRlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgICBjb25zdCByZW5kZXJSb3V0ZXMgPSAoKT0+IHtcbiAgICAgICAgcmV0dXJuIHJvdXRlcy5tYXAocm91dGUgPT4gPFJvdXRlIGtleT17cm91dGUucGF0aH0gcGF0aD17cm91dGUucGF0aH0gZWxlbWVudD17cm91dGUuZWxlbWVudH0vPilcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxSb3V0ZXM+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PExheW91dCAvPn0+XG4gICAgICAgICAgICAgICAgICAgIHtyZW5kZXJSb3V0ZXMoKX1cbiAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgPC9Sb3V0ZXM+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIExheW91dCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8YXNpZGU+XG4gICAgICAgICAgICB7LyogQSBcImxheW91dCByb3V0ZVwiIGlzIGEgZ29vZCBwbGFjZSB0byBwdXQgbWFya3VwIHlvdSB3YW50IHRvXG4gICAgICAgICAgc2hhcmUgYWNyb3NzIGFsbCB0aGUgcGFnZXMgb24geW91ciBzaXRlLCBsaWtlIG5hdmlnYXRpb24uICovfVxuICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT17J3RleHQtM3hsIGZvbnQtYm9sZCB1bmRlcmxpbmUnfT5Ib21lPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9uZXctcG9zdFwiPkFib3V0PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L25hdj5cblxuICAgICAgICAgICAgPGhyIC8+XG5cbiAgICAgICAgICAgIHsvKiBBbiA8T3V0bGV0PiByZW5kZXJzIHdoYXRldmVyIGNoaWxkIHJvdXRlIGlzIGN1cnJlbnRseSBhY3RpdmUsXG4gICAgICAgICAgc28geW91IGNhbiB0aGluayBhYm91dCB0aGlzIDxPdXRsZXQ+IGFzIGEgcGxhY2Vob2xkZXIgZm9yXG4gICAgICAgICAgdGhlIGNoaWxkIHJvdXRlcyB3ZSBkZWZpbmVkIGFib3ZlLiAqL31cbiAgICAgICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgPC9hc2lkZT5cbiAgICApO1xufSIsImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSAgICAgICAgIGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgTmV3UG9zdCAgICAgICAgICAgICAgICAgICAgICBmcm9tIFwiLi9tb2R1bGVzL05ld1Bvc3QvTmV3UG9zdFwiO1xuaW1wb3J0IFBhZ2U0MDQgICAgICAgICAgICAgICAgICAgICAgZnJvbSBcIi4vY29tcG9uZW50cy9QYWdlNDA0L1BhZ2U0MDRcIjtcblxudHlwZSBSb3V0ZURhdGEgPSB7XG4gICAgcGF0aDogc3RyaW5nLFxuICAgIGVsZW1lbnQ6IFJlYWN0Tm9kZSAsXG59XG5leHBvcnQgY29uc3Qgcm91dGVzOlJvdXRlRGF0YVtdID0gW1xuICAgIHtcbiAgICAgICAgcGF0aDogXCJuZXctcG9zdFwiLFxuICAgICAgICBlbGVtZW50OiA8TmV3UG9zdCBrZXk9eyduZXctcG9zdCd9Lz4sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiKlwiLFxuICAgICAgICBlbGVtZW50OiA8UGFnZTQwNCBrZXk9eydwYWdlLTQwNCd9Lz4sXG4gICAgfSxcbl1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsInZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiA/IChvYmopID0+IChPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSkgOiAob2JqKSA9PiAob2JqLl9fcHJvdG9fXyk7XG52YXIgbGVhZlByb3RvdHlwZXM7XG4vLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLy8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8vIG1vZGUgJiAxNjogcmV0dXJuIHZhbHVlIHdoZW4gaXQncyBQcm9taXNlLWxpa2Vcbi8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbl9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG5cdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IHRoaXModmFsdWUpO1xuXHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuXHRpZih0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlKSB7XG5cdFx0aWYoKG1vZGUgJiA0KSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG5cdFx0aWYoKG1vZGUgJiAxNikgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbicpIHJldHVybiB2YWx1ZTtcblx0fVxuXHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuXHR2YXIgZGVmID0ge307XG5cdGxlYWZQcm90b3R5cGVzID0gbGVhZlByb3RvdHlwZXMgfHwgW251bGwsIGdldFByb3RvKHt9KSwgZ2V0UHJvdG8oW10pLCBnZXRQcm90byhnZXRQcm90byldO1xuXHRmb3IodmFyIGN1cnJlbnQgPSBtb2RlICYgMiAmJiB2YWx1ZTsgdHlwZW9mIGN1cnJlbnQgPT0gJ29iamVjdCcgJiYgIX5sZWFmUHJvdG90eXBlcy5pbmRleE9mKGN1cnJlbnQpOyBjdXJyZW50ID0gZ2V0UHJvdG8oY3VycmVudCkpIHtcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhjdXJyZW50KS5mb3JFYWNoKChrZXkpID0+IChkZWZba2V5XSA9ICgpID0+ICh2YWx1ZVtrZXldKSkpO1xuXHR9XG5cdGRlZlsnZGVmYXVsdCddID0gKCkgPT4gKHZhbHVlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBkZWYpO1xuXHRyZXR1cm4gbnM7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjb2RlZ3lfYWRtaW5lclwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjb2RlZ3lfYWRtaW5lclwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ0aW55bWNlXCIsXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc190aW55bWNlX3RpbnltY2UtcmVhY3RfbGliX2VzMjAxNV9tYWluX3RzX2luZGV4X2pzLW5vZGVfbW9kdWxlc19jc3MtbG9hZGUtZDFkZTFmXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vaW5kZXgudHN4XCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiUmVhY3QiLCJFZGl0b3IiLCJ0aW55bWNlIiwiY29udGVudENzcyIsImNvbnRlbnRVaUNzcyIsIkJ1bmRsZWRFZGl0b3IiLCJwcm9wcyIsImluaXQiLCJyZXN0IiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiY3JlYXRlRWxlbWVudCIsIl9leHRlbmRzIiwiX29iamVjdFNwcmVhZCIsInNraW4iLCJjb250ZW50X2NzcyIsImNvbnRlbnRfc3R5bGUiLCJqb2luIiwiUGFnZTQwNCIsInVzZVJlZiIsIk5ld1Bvc3QiLCJlZGl0b3JSZWYiLCJsb2ciLCJjdXJyZW50IiwiY29uc29sZSIsImdldENvbnRlbnQiLCJGcmFnbWVudCIsIm9uSW5pdCIsImV2dCIsImVkaXRvciIsImluaXRpYWxWYWx1ZSIsImhlaWdodCIsIm1lbnViYXIiLCJwbHVnaW5zIiwidG9vbGJhciIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9