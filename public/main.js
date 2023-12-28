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

/***/ "./src/components/CreateUpdatePostContent/CreateUpdatePostContent.js":
/*!***************************************************************************!*\
  !*** ./src/components/CreateUpdatePostContent/CreateUpdatePostContent.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateUpdatePostContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_BundleEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/BundleEditor */ "./src/components/BundleEditor/index.js");


function CreateUpdatePostContent(props) {
  var onTitleChange = props.onTitleChange,
    onEditorChange = props.onEditorChange,
    title = props.title,
    initialEditorValue = props.initialEditorValue;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("fieldset", {
    className: 'flex flex-col gap-5'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'flex flex-col gap-3'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: 'title'
  }, "Post title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: 'w-full max-w-[400px] border rounded-md p-2',
    type: 'text',
    id: 'title',
    placeholder: 'Enter your post\'s title',
    onChange: onTitleChange,
    value: title
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'flex flex-col gap-3'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: 'content'
  }, "Post content"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_BundleEditor__WEBPACK_IMPORTED_MODULE_1__["default"], {
    initialValue: initialEditorValue !== null && initialEditorValue !== void 0 ? initialEditorValue : '<h3 style="text-align: center;">Post heading</h3>',
    id: 'content',
    init: {
      setup: function setup(ed) {
        ed.on('NodeChange', function (e) {
          onEditorChange(ed.getContent());
        });
      },
      height: 500,
      menubar: false,
      plugins: ['advlist', 'anchor', 'autolink',
      // 'help', // causes error because plugin is 404
      'image', 'link', 'lists', 'searchreplace', 'table', 'wordcount'],
      toolbar: 'undo redo | blocks | ' + 'bold italic forecolor | alignleft aligncenter ' + 'alignright alignjustify | bullist numlist outdent indent | ' + ' image',
      content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
    }
  })));
}

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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles/styles.css":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles/styles.css ***!
  \***************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `/*
! tailwindcss v3.3.7 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
*/

html {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden] {
  display: none;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}
.container {
  width: 100%;
}
@media (min-width: 640px) {

  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {

  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {

  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {

  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {

  .container {
    max-width: 1536px;
  }
}
.static {
  position: static;
}
.relative {
  position: relative;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.mb-2 {
  margin-bottom: 0.5rem;
}
.mb-3 {
  margin-bottom: 0.75rem;
}
.mb-4 {
  margin-bottom: 1rem;
}
.mb-5 {
  margin-bottom: 1.25rem;
}
.mb-6 {
  margin-bottom: 1.5rem;
}
.me-2 {
  margin-inline-end: 0.5rem;
}
.line-clamp-3 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
.block {
  display: block;
}
.inline-block {
  display: inline-block;
}
.inline {
  display: inline;
}
.flex {
  display: flex;
}
.table {
  display: table;
}
.grid {
  display: grid;
}
.h-3 {
  height: 0.75rem;
}
.w-3 {
  width: 0.75rem;
}
.w-full {
  width: 100%;
}
.max-w-\\[290px\\] {
  max-width: 290px;
}
.max-w-\\[400px\\] {
  max-width: 400px;
}
.max-w-\\[600px\\] {
  max-width: 600px;
}
.max-w-\\[90px\\] {
  max-width: 90px;
}
.max-w-xs {
  max-width: 20rem;
}
.cursor-pointer {
  cursor: pointer;
}
.appearance-none {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
.grid-cols-main {
  grid-template-columns: minmax(200px, 1fr) 4fr;
}
.flex-col {
  flex-direction: column;
}
.flex-wrap {
  flex-wrap: wrap;
}
.items-center {
  align-items: center;
}
.justify-between {
  justify-content: space-between;
}
.gap-2 {
  gap: 0.5rem;
}
.gap-3 {
  gap: 0.75rem;
}
.gap-5 {
  gap: 1.25rem;
}
.gap-y-2 {
  row-gap: 0.5rem;
}
.rounded {
  border-radius: 0.25rem;
}
.rounded-full {
  border-radius: 9999px;
}
.rounded-lg {
  border-radius: 0.5rem;
}
.rounded-md {
  border-radius: 0.375rem;
}
.rounded-xl {
  border-radius: 0.75rem;
}
.border {
  border-width: 1px;
}
.bg-amber-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(245 158 11 / var(--tw-bg-opacity));
}
.bg-blue-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(59 130 246 / var(--tw-bg-opacity));
}
.bg-emerald-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(16 185 129 / var(--tw-bg-opacity));
}
.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}
.from-blue-500 {
  --tw-gradient-from: #3b82f6 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(59 130 246 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.via-blue-600 {
  --tw-gradient-to: rgb(37 99 235 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #2563eb var(--tw-gradient-via-position), var(--tw-gradient-to);
}
.to-blue-700 {
  --tw-gradient-to: #1d4ed8 var(--tw-gradient-to-position);
}
.p-2 {
  padding: 0.5rem;
}
.p-3 {
  padding: 0.75rem;
}
.p-5 {
  padding: 1.25rem;
}
.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}
.px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.py-2\\.5 {
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
}
.py-5 {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}
.pb-8 {
  padding-bottom: 2rem;
}
.pr-\\[40px\\] {
  padding-right: 40px;
}
.pt-5 {
  padding-top: 1.25rem;
}
.pt-6 {
  padding-top: 1.5rem;
}
.text-center {
  text-align: center;
}
.text-right {
  text-align: right;
}
.align-middle {
  vertical-align: middle;
}
.font-mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}
.font-bold {
  font-weight: 700;
}
.font-medium {
  font-weight: 500;
}
.italic {
  font-style: italic;
}
.leading-tight {
  line-height: 1.25;
}
.text-blue-600 {
  --tw-text-opacity: 1;
  color: rgb(37 99 235 / var(--tw-text-opacity));
}
.text-gray-700 {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}
.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
.underline {
  text-decoration-line: underline;
}
.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.transition-shadow {
  transition-property: box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

:root{
    --red: #c70909;
}

.red-x::after{
    content:'';

    display: inline-block;
    height: 2px;
    width: 12px;
    background-color: var(--red);

    position: absolute;
    right: 7.5px;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
}

.red-x::before{
    content:'';

    display: inline-block;
    height: 2px;
    width: 12px;
    background-color: var(--red);

    position: absolute;
    right: 7.5px;
    top: 50%;
    transform: translateY(-50%) rotate(-45deg);
}

.hover\\:border-red-600:hover {
  --tw-border-opacity: 1;
  border-color: rgb(220 38 38 / var(--tw-border-opacity));
}

.hover\\:bg-blue-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(29 78 216 / var(--tw-bg-opacity));
}

.hover\\:bg-gradient-to-br:hover {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}

.hover\\:shadow-md:hover {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.hover\\:shadow-indigo-200:hover {
  --tw-shadow-color: #c7d2fe;
  --tw-shadow: var(--tw-shadow-colored);
}

.focus\\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus\\:ring-4:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus\\:ring-blue-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(147 197 253 / var(--tw-ring-opacity));
}

@media (prefers-color-scheme: dark) {

  .dark\\:focus\\:ring-blue-800:focus {
    --tw-ring-opacity: 1;
    --tw-ring-color: rgb(30 64 175 / var(--tw-ring-opacity));
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n:root{\n    --red: #c70909;\n}\n\n.red-x::after{\n    content:'';\n\n    display: inline-block;\n    height: 2px;\n    width: 12px;\n    background-color: var(--red);\n\n    position: absolute;\n    right: 7.5px;\n    top: 50%;\n    transform: translateY(-50%) rotate(45deg);\n}\n\n.red-x::before{\n    content:'';\n\n    display: inline-block;\n    height: 2px;\n    width: 12px;\n    background-color: var(--red);\n\n    position: absolute;\n    right: 7.5px;\n    top: 50%;\n    transform: translateY(-50%) rotate(-45deg);\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ "./src/routes.tsx");


function App() {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: 'container mx-auto py-5 px-2' },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_routes__WEBPACK_IMPORTED_MODULE_1__.AppRouter, null)));
}


/***/ }),

/***/ "./src/components/Layout/Layout.tsx":
/*!******************************************!*\
  !*** ./src/components/Layout/Layout.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", { className: 'grid grid-cols-main' },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("aside", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: 'flex flex-col gap-y-2' },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, { to: "/", className: function (_a) {
                                var isActive = _a.isActive;
                                return isActive ? 'underline' : '';
                            } }, "Home")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, { to: "/new-post", className: function (_a) {
                                var isActive = _a.isActive;
                                return isActive ? 'underline' : '';
                            } }, "Create New Post"))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Outlet, null)));
}


/***/ }),

/***/ "./src/components/RequireAuth/RequireAuth.tsx":
/*!****************************************************!*\
  !*** ./src/components/RequireAuth/RequireAuth.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequireAuth: () => (/* binding */ RequireAuth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _services_RequestService_RequestsService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/RequestService/RequestsService */ "./src/services/RequestService/RequestsService.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var RequireAuth = function (_a) {
    var children = _a.children;
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), isLoaded = _b[0], setIsLoaded = _b[1];
    var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
    var checkTokenIsOk = function () { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 4, 5]);
                    return [4 /*yield*/, (0,_services_RequestService_RequestsService__WEBPACK_IMPORTED_MODULE_1__.verifyToken)()];
                case 1:
                    _a.sent(); //blank request to protected jwt api route, to verify token is valid
                    return [3 /*break*/, 5];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1, 'Trying to refresh token...');
                    return [4 /*yield*/, getNewToken()];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    setIsLoaded(true);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var getNewToken = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, token, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0,_services_RequestService_RequestsService__WEBPACK_IMPORTED_MODULE_1__.refreshToken)()];
                case 1:
                    response = _a.sent();
                    token = response.data.token;
                    return [2 /*return*/, localStorage.setItem('token', token)];
                case 2:
                    error_2 = _a.sent();
                    console.log('Token failed to refresh', error_2);
                    navigate("/sign-in");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        checkTokenIsOk();
    }, [children]);
    if (!isLoaded) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Loading...");
    }
    return children;
};


/***/ }),

/***/ "./src/components/TagsSelect/TagsSelect.tsx":
/*!**************************************************!*\
  !*** ./src/components/TagsSelect/TagsSelect.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function TagsSelect(_a) {
    var addTag = _a.addTag, tags = _a.tags, deleteTag = _a.deleteTag;
    var tagsInputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("fieldset", { className: 'pt-5 flex flex-col gap-2 mb-5' },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: 'flex w-full max-w-[400px] justify-between' },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { className: 'w-full max-w-[290px] border rounded-md p-2', ref: tagsInputRef, placeholder: 'Write a tag, for example: TypeScript', type: 'text' }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: 'w-full max-w-[90px] border rounded-md p-2', type: "button", onClick: function () { return addTag(tagsInputRef); } }, "Add a tag")),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: 'flex w-full max-w-[400px] gap-2  flex-wrap' }, renderTags(tags, deleteTag))));
}
function renderTags(tags, deleteTag) {
    return tags.map(function (tag, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { key: index, className: "border rounded-md p-2 pr-[40px] relative red-x hover:border-red-600", type: "button", onClick: function () { return deleteTag(index); } }, tag);
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TagsSelect);


/***/ }),

/***/ "./src/modules/Home/Home.tsx":
/*!***********************************!*\
  !*** ./src/modules/Home/Home.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_RequestService_RequestsService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/RequestService/RequestsService */ "./src/services/RequestService/RequestsService.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



function Home() {
    var _this = this;
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), isLoaded = _a[0], setIsLoaded = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), posts = _b[0], setPosts = _b[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        getPosts();
    }, []);
    var getPosts = function () { return __awaiter(_this, void 0, void 0, function () {
        var response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    return [4 /*yield*/, (0,_services_RequestService_RequestsService__WEBPACK_IMPORTED_MODULE_1__.getAllPosts)()];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, setPosts(response.data)];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 4];
                case 3:
                    setIsLoaded(true);
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return !isLoaded ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Loading...") : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, renderPosts(posts)));
}
function renderPosts(posts) {
    return posts.map(function (item) {
        var _id = item._id, body = item.body, title = item.title, status = item.status, author_id = item.author_id, created_at = item.created_at;
        var htmlTextLimited = body.slice(0, 300);
        var textFromHtml = removeHTMLTags(htmlTextLimited);
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, { to: "/post/".concat(_id) },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", { className: 'w-full max-w-[600px] p-3 mb-5 flex flex-col gap-2 rounded-md shadow cursor-pointer  hover:shadow-md hover:shadow-indigo-200 transition-shadow', onClick: function () { return _id; }, key: _id },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: 'flex justify-between align-middle' },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: 'text-xl' }, title),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "inline-block w-3 h-3 rounded-full ".concat(status === 1 ? 'bg-amber-500' : 'bg-emerald-500') })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: 'italic text-blue-600' }, "by: ".concat(author_id.username)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: 'line-clamp-3' }, textFromHtml),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: 'text-right font-mono text-xs' }, getFormattedDate(created_at)))));
    }).reverse();
}
function removeHTMLTags(html) {
    var regX = /(<([^>]+)>|&[a-zA-Z0-9]+;)/ig;
    return html.replace(regX, "");
}
function getFormattedDate(created_at) {
    var date = new Date(created_at);
    return [date.getMonth() + 1, date.getDate(), date.getFullYear()].join('.') + ' ' + [date.getHours(), date.getMinutes(),].join(':');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


/***/ }),

/***/ "./src/modules/LoginPage/LoginPage.tsx":
/*!*********************************************!*\
  !*** ./src/modules/LoginPage/LoginPage.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _services_RequestService_RequestsService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/RequestService/RequestsService */ "./src/services/RequestService/RequestsService.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



function LoginPage() {
    var _this = this;
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), username = _a[0], setUsername = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), password = _b[0], setPassword = _b[1];
    var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
    var setToken = function (token) {
        localStorage.setItem('token', token);
    };
    var onInputChange = function (event) {
        var _a = event.target, name = _a.name, value = _a.value;
        return name === 'username' ? setUsername(value) : setPassword(value);
    };
    var onSubmit = function (event) { return __awaiter(_this, void 0, void 0, function () {
        var payload, response, token, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    event.preventDefault();
                    payload = {
                        password: password,
                        username: username,
                        is_author: true,
                    };
                    return [4 /*yield*/, (0,_services_RequestService_RequestsService__WEBPACK_IMPORTED_MODULE_1__.sendLogin)(payload)];
                case 1:
                    response = _a.sent();
                    token = response.data.token;
                    setToken(token);
                    navigate('/');
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", { className: "w-full max-w-xs" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { className: "px-8 pt-6 pb-8 mb-4", onSubmit: onSubmit },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "mb-4" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { className: "block text-gray-700 text-sm font-bold mb-2", htmlFor: "username" }, "Username"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline", id: "username", type: "text", placeholder: "Username", name: 'username', value: username, onChange: onInputChange })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "mb-6" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { className: "block text-gray-700 text-sm font-bold mb-2", htmlFor: "password" }, "Password"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline", id: "password", type: "password", placeholder: "********", name: 'password', value: password, onChange: onInputChange })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex items-center justify-between" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline", type: "submit" }, "Sign In")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginPage);


/***/ }),

/***/ "./src/modules/NewPost/NewPost.tsx":
/*!*****************************************!*\
  !*** ./src/modules/NewPost/NewPost.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CreateUpdatePostContent_CreateUpdatePostContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/CreateUpdatePostContent/CreateUpdatePostContent */ "./src/components/CreateUpdatePostContent/CreateUpdatePostContent.js");
/* harmony import */ var _components_TagsSelect_TagsSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/TagsSelect/TagsSelect */ "./src/components/TagsSelect/TagsSelect.tsx");
/* harmony import */ var _services_RequestService_RequestsService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/RequestService/RequestsService */ "./src/services/RequestService/RequestsService.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};




function NewPost() {
    var _this = this;
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true), isLoaded = _a[0], setIsLoaded = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), title = _b[0], setTitle = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), body = _c[0], setBody = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(['JS', 'HTML',]), tags = _d[0], setTags = _d[1];
    var deleteTag = function (index) {
        // @ts-ignore
        console.log(tags.toSpliced(index, 1));
        // @ts-ignore
        setTags(tags.toSpliced(index, 1));
    };
    var addTag = function (inputRef) {
        var input = inputRef.current;
        var value = input.value;
        var valueIsEmpty = !value.trim();
        if (valueIsEmpty) {
            return;
        }
        setTags(__spreadArray(__spreadArray([], tags, true), [value], false));
        input.value = '';
    };
    var resetForm = function () {
        setTitle('');
        setBody('');
        setTags(['JS', 'HTML',]);
    };
    var handleSubmit = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var post, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    setIsLoaded(false);
                    e.preventDefault();
                    post = {
                        title: title,
                        body: body,
                        tags: tags
                    };
                    return [4 /*yield*/, (0,_services_RequestService_RequestsService__WEBPACK_IMPORTED_MODULE_3__.createPost)(post)];
                case 1:
                    _a.sent();
                    resetForm();
                    return [3 /*break*/, 4];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 4];
                case 3:
                    setIsLoaded(true);
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    if (!isLoaded) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "...Loading");
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { className: 'shadow p-5 rounded-xl' },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_CreateUpdatePostContent_CreateUpdatePostContent__WEBPACK_IMPORTED_MODULE_1__["default"], { onTitleChange: function (e) { return setTitle(e.target.value); }, onEditorChange: function (value) { return setBody(value); }, title: title }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TagsSelect_TagsSelect__WEBPACK_IMPORTED_MODULE_2__["default"], { deleteTag: deleteTag, addTag: addTag, tags: tags }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { type: 'submit', onClick: handleSubmit, className: "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 " }, "Create new post")));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewPost);


/***/ }),

/***/ "./src/modules/Post/Post.tsx":
/*!***********************************!*\
  !*** ./src/modules/Post/Post.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Post() {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}), post = _a[0], setPost = _a[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        // console.log()
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);


/***/ }),

/***/ "./src/routes.tsx":
/*!************************!*\
  !*** ./src/routes.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRouter: () => (/* binding */ AppRouter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _components_RequireAuth_RequireAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/RequireAuth/RequireAuth */ "./src/components/RequireAuth/RequireAuth.tsx");
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Layout/Layout */ "./src/components/Layout/Layout.tsx");
/* harmony import */ var _modules_NewPost_NewPost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/NewPost/NewPost */ "./src/modules/NewPost/NewPost.tsx");
/* harmony import */ var _components_Page404_Page404__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Page404/Page404 */ "./src/components/Page404/Page404.js");
/* harmony import */ var _modules_Home_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/Home/Home */ "./src/modules/Home/Home.tsx");
/* harmony import */ var _modules_LoginPage_LoginPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/LoginPage/LoginPage */ "./src/modules/LoginPage/LoginPage.tsx");
/* harmony import */ var _modules_Post_Post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/Post/Post */ "./src/modules/Post/Post.tsx");









//TODO: individual post page and be able:
//      -delete post
//      -change status
//      -change content
//      -moderate comments
//FINISH?
function AppRouter() {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Routes, null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, { path: "/", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null) }, protectedRoutes()),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, { path: "/" }, unprotectedRoutes())));
}
function protectedRoutes() {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, { index: true, element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_RequireAuth_RequireAuth__WEBPACK_IMPORTED_MODULE_1__.RequireAuth, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_modules_Home_Home__WEBPACK_IMPORTED_MODULE_5__["default"], null)) }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, { path: 'new-post', element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_RequireAuth_RequireAuth__WEBPACK_IMPORTED_MODULE_1__.RequireAuth, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_modules_NewPost_NewPost__WEBPACK_IMPORTED_MODULE_3__["default"], null)) }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, { path: '/post/:id', element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_RequireAuth_RequireAuth__WEBPACK_IMPORTED_MODULE_1__.RequireAuth, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_modules_Post_Post__WEBPACK_IMPORTED_MODULE_7__["default"], null)) })));
}
function unprotectedRoutes() {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, { path: 'sign-in', element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_modules_LoginPage_LoginPage__WEBPACK_IMPORTED_MODULE_6__["default"], null) }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, { path: '*', element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Page404_Page404__WEBPACK_IMPORTED_MODULE_4__["default"], null) })));
}


/***/ }),

/***/ "./src/services/RequestService/RequestsService.ts":
/*!********************************************************!*\
  !*** ./src/services/RequestService/RequestsService.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPost: () => (/* binding */ createPost),
/* harmony export */   getAllPosts: () => (/* binding */ getAllPosts),
/* harmony export */   getSinglePost: () => (/* binding */ getSinglePost),
/* harmony export */   refreshToken: () => (/* binding */ refreshToken),
/* harmony export */   sendLogin: () => (/* binding */ sendLogin),
/* harmony export */   verifyToken: () => (/* binding */ verifyToken)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _routesApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routesApi */ "./src/services/RequestService/routesApi.tsx");


var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_1__["default"].create();
axiosInstance.interceptors.request.use(function (config) {
    var authToken = localStorage.getItem('token');
    if (authToken) {
        config.headers.Authorization = "Bearer ".concat(authToken);
    }
    return config;
}, function (error) { return Promise.reject(error); });
var get = axiosInstance.get, post = axiosInstance.post, put = axiosInstance.put, del = axiosInstance.delete;
var getAllPosts = function () {
    return get(_routesApi__WEBPACK_IMPORTED_MODULE_0__.POSTS);
};
var getSinglePost = function (id) {
    return get("".concat(_routesApi__WEBPACK_IMPORTED_MODULE_0__.POSTS, "/").concat(id));
};
var createPost = function (payload) {
    return post(_routesApi__WEBPACK_IMPORTED_MODULE_0__.POSTS, payload);
};
var sendLogin = function (obj) {
    return post(_routesApi__WEBPACK_IMPORTED_MODULE_0__.LOGIN, obj);
};
var verifyToken = function () {
    return get(_routesApi__WEBPACK_IMPORTED_MODULE_0__.VERIFY_JWT);
};
var refreshToken = function () {
    return get(_routesApi__WEBPACK_IMPORTED_MODULE_0__.REFRESH_TOKEN);
};


/***/ }),

/***/ "./src/services/RequestService/routesApi.tsx":
/*!***************************************************!*\
  !*** ./src/services/RequestService/routesApi.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   API_GLOBAL: () => (/* binding */ API_GLOBAL),
/* harmony export */   AUTHORS: () => (/* binding */ AUTHORS),
/* harmony export */   LOGIN: () => (/* binding */ LOGIN),
/* harmony export */   POSTS: () => (/* binding */ POSTS),
/* harmony export */   POSTS_COMMENTS: () => (/* binding */ POSTS_COMMENTS),
/* harmony export */   POSTS_LIKES: () => (/* binding */ POSTS_LIKES),
/* harmony export */   REFRESH_TOKEN: () => (/* binding */ REFRESH_TOKEN),
/* harmony export */   USERS: () => (/* binding */ USERS),
/* harmony export */   VERIFY_JWT: () => (/* binding */ VERIFY_JWT)
/* harmony export */ });
var API_GLOBAL = '/api';
var USERS = "".concat(API_GLOBAL, "/users");
var AUTHORS = "".concat(API_GLOBAL, "/authors");
var POSTS = "".concat(API_GLOBAL, "/posts");
var POSTS_COMMENTS = "".concat(API_GLOBAL, "/posts-comments");
var POSTS_LIKES = "".concat(API_GLOBAL, "/posts-likes");
var LOGIN = "/login";
var REFRESH_TOKEN = "/refresh";
var VERIFY_JWT = "".concat(API_GLOBAL, "/verify-jwt");


/***/ }),

/***/ "data:image/gif;base64,R0lGODdhDAAMAIABAMzMzP///ywAAAAADAAMAAACFoQfqYeabNyDMkBQb81Uat85nxguUAEAOw==":
/*!**********************************************************************************************************!*\
  !*** data:image/gif;base64,R0lGODdhDAAMAIABAMzMzP///ywAAAAADAAMAAACFoQfqYeabNyDMkBQb81Uat85nxguUAEAOw== ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/gif;base64,R0lGODdhDAAMAIABAMzMzP///ywAAAAADAAMAAACFoQfqYeabNyDMkBQb81Uat85nxguUAEAOw==";

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
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["tinymce","vendors-node_modules_tinymce_tinymce-react_lib_es2015_main_ts_index_js-node_modules_raw-loade-ea7b91"], () => (__webpack_require__("./index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7QUFDOUIsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx5RkFBeUYsWUFBWSxNQUFNLE9BQU8scUJBQXFCLG9CQUFvQixxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxXQUFXLE1BQU0sV0FBVyxNQUFNLEtBQUsscUJBQXFCLHFCQUFxQixxQkFBcUIsVUFBVSxvQkFBb0IscUJBQXFCLHFCQUFxQixxQkFBcUIsTUFBTSxPQUFPLE1BQU0sS0FBSyxvQkFBb0IscUJBQXFCLE1BQU0sUUFBUSxNQUFNLEtBQUssb0JBQW9CLG9CQUFvQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sU0FBUyxNQUFNLFFBQVEscUJBQXFCLHFCQUFxQixxQkFBcUIsb0JBQW9CLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxRQUFRLE1BQU0sS0FBSyxvQkFBb0IscUJBQXFCLHFCQUFxQixNQUFNLFFBQVEsTUFBTSxTQUFTLHFCQUFxQixxQkFBcUIscUJBQXFCLG9CQUFvQixxQkFBcUIscUJBQXFCLG9CQUFvQixvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE9BQU8sTUFBTSxRQUFRLHFCQUFxQixxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sTUFBTSxLQUFLLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0saUJBQWlCLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE9BQU8sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sTUFBTSxLQUFLLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxZQUFZLG9CQUFvQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxXQUFXLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssTUFBTSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssV0FBVyxZQUFZLFdBQVcsVUFBVSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFdBQVcsWUFBWSxXQUFXLFVBQVUsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLE1BQU0sT0FBTyxNQUFNLFlBQVksTUFBTSxPQUFPLE1BQU0sS0FBSyxPQUFPLE1BQU0sWUFBWSxhQUFhLE1BQU0sT0FBTyxNQUFNLFlBQVksTUFBTSxPQUFPLE1BQU0sWUFBWSxNQUFNLE9BQU8sTUFBTSxZQUFZLGFBQWEsTUFBTSxPQUFPLE1BQU0sWUFBWSxNQUFNLE9BQU8sT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLHdDQUF3Qyx1QkFBdUIsc0JBQXNCLFVBQVUscUJBQXFCLEdBQUcsa0JBQWtCLGlCQUFpQiw4QkFBOEIsa0JBQWtCLGtCQUFrQixtQ0FBbUMsMkJBQTJCLG1CQUFtQixlQUFlLGdEQUFnRCxHQUFHLG1CQUFtQixpQkFBaUIsOEJBQThCLGtCQUFrQixrQkFBa0IsbUNBQW1DLDJCQUEyQixtQkFBbUIsZUFBZSxpREFBaUQsR0FBRyxtQkFBbUI7QUFDeHdNO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaDNCdkMsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBcUo7QUFDcko7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQywrSEFBTzs7OztBQUkrRjtBQUN2SCxPQUFPLGlFQUFlLCtIQUFPLElBQUksK0hBQU8sVUFBVSwrSEFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJuRDtBQUNvQjtBQUNHO0FBRWpCO0FBRUo7QUFFNUIsa0NBQWtDO0FBQ2xDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLHNCQUFzQixDQUFDO0FBRWpELGlDQUFpQztBQUNqQyxJQUFNLElBQUksR0FBRyw0REFBVSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBQztBQUN6RCxJQUFJLENBQUMsTUFBTSxDQUNQLDJEQUFDLHlEQUFnQjtJQUNiLDJEQUFDLDJEQUFhO1FBQ1YsMkRBQUMsZ0RBQUcsT0FBRSxDQUNNLENBQ0QsQ0FDdEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJ1RDtBQUNNO0FBRWhELFNBQVMsR0FBRztJQUV2QixPQUFPLENBQ0gsb0VBQUssU0FBUyxFQUFFLDZCQUE2QjtRQUN6QywyREFBQyw4Q0FBUyxPQUFFLENBQ1YsQ0FDVCxDQUFDO0FBQ04sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZnRDtBQUNWO0FBRXZDLDZCQUFlO0lBQ1gsT0FBTyxDQUNILHFFQUFNLFNBQVMsRUFBRSxxQkFBcUI7UUFHbEM7WUFDSTtnQkFDSSxtRUFBSSxTQUFTLEVBQUUsdUJBQXVCO29CQUNsQzt3QkFDSSwyREFBQyxxREFBTyxJQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLFVBQUMsRUFBVTtvQ0FBVCxRQUFRO2dDQUFLLGVBQVEsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFOzRCQUEzQixDQUEyQixXQUN2RCxDQUNkO29CQUNMO3dCQUNJLDJEQUFDLHFEQUFPLElBQUMsRUFBRSxFQUFDLFdBQVcsRUFBQyxTQUFTLEVBQUUsVUFBQyxFQUFVO29DQUFULFFBQVE7Z0NBQUssZUFBUSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUU7NEJBQTNCLENBQTJCLHNCQUEyQixDQUN2RyxDQUNKLENBQ0gsQ0FDRjtRQU1SLDJEQUFDLG9EQUFNLE9BQUcsQ0FDUCxDQUNWLENBQUM7QUFDTixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0J5RTtBQUNXO0FBRTZCO0FBSzNHLElBQU0sV0FBVyxHQUFvQixVQUFDLEVBQWdCO1FBQWYsUUFBUTtJQUM1QyxTQUEwQiwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUF4QyxRQUFRLFVBQUUsV0FBVyxRQUFtQixDQUFDO0lBRWhELElBQU0sUUFBUSxHQUFHLDZEQUFXLEVBQUUsQ0FBQztJQUMvQixJQUFNLGNBQWMsR0FBRzs7Ozs7O29CQUVmLHFCQUFNLHFGQUFXLEVBQUU7O29CQUFuQixTQUFtQixDQUFDLENBQUMsb0VBQW9FOzs7O29CQUV6RixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQUssRUFBRSw0QkFBNEIsQ0FBQztvQkFDaEQscUJBQU0sV0FBVyxFQUFFOztvQkFBbkIsU0FBbUIsQ0FBQzs7O29CQUVwQixXQUFXLENBQUMsSUFBSSxDQUFDOzs7OztTQUV4QjtJQUVELElBQU0sV0FBVyxHQUFHOzs7Ozs7b0JBRUsscUJBQU0sc0ZBQVksRUFBRTs7b0JBQS9CLFFBQVEsR0FBRyxTQUFvQjtvQkFDOUIsS0FBSyxHQUFJLFFBQVEsQ0FBQyxJQUFJLE1BQWpCLENBQWtCO29CQUM5QixzQkFBTyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBQzs7O29CQUU1QyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLE9BQUssQ0FBQztvQkFDN0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDOzs7OztTQUU1QjtJQUVELGdEQUFTLENBQUM7UUFDTixjQUFjLEVBQUUsQ0FBQztJQUNyQixDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBR2YsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ1osT0FBTyxvRkFBbUIsQ0FBQztJQUMvQixDQUFDO0lBRUQsT0FBTyxRQUFRLENBQUM7QUFDcEIsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVDOEU7QUFVaEYsU0FBUyxVQUFVLENBQUMsRUFBK0I7UUFBOUIsTUFBTSxjQUFFLElBQUksWUFBRSxTQUFTO0lBRXhDLElBQU0sWUFBWSxHQUFHLDZDQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2pDLE9BQU8sQ0FDSCx5RUFBVSxTQUFTLEVBQUUsK0JBQStCO1FBQ2hELG9FQUFLLFNBQVMsRUFBRSwyQ0FBMkM7WUFDdkQsc0VBQ0ksU0FBUyxFQUFFLDRDQUE0QyxFQUN2RCxHQUFHLEVBQUUsWUFBWSxFQUNqQixXQUFXLEVBQUUsc0NBQXNDLEVBQ25ELElBQUksRUFBRSxNQUFNLEdBQ2Q7WUFDRix1RUFDSSxTQUFTLEVBQUUsMkNBQTJDLEVBQ3RELElBQUksRUFBRSxRQUFRLEVBQ2QsT0FBTyxFQUFFLGNBQU0sYUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFwQixDQUFvQixnQkFHOUIsQ0FDUDtRQUNOLG9FQUFLLFNBQVMsRUFBRSw0Q0FBNEMsSUFDdkQsVUFBVSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FDMUIsQ0FDQyxDQUNkLENBQUM7QUFDTixDQUFDO0FBRUQsU0FBUyxVQUFVLENBQUMsSUFBYSxFQUFFLFNBQXdCO0lBQ3ZELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUcsRUFBRSxLQUFLO1FBQ3ZCLE9BQU8sdUVBQVEsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUscUVBQXFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsY0FBTSxnQkFBUyxDQUFDLEtBQUssQ0FBQyxFQUFoQixDQUFnQixJQUFHLEdBQUcsQ0FBVTtJQUNoTCxDQUFDLENBQUM7QUFDTixDQUFDO0FBRUQsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NxQztBQUN3QztBQUNqRTtBQWV0QyxTQUFTLElBQUk7SUFBYixpQkEwQkM7SUF6QlMsU0FBMEIsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBeEMsUUFBUSxVQUFFLFdBQVcsUUFBbUIsQ0FBQztJQUMxQyxTQUFvQiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUEvQixLQUFLLFVBQUUsUUFBUSxRQUFnQixDQUFDO0lBRXZDLGdEQUFTLENBQUU7UUFDUCxRQUFRLEVBQUUsQ0FBQztJQUNmLENBQUMsRUFBRSxFQUFFLENBQUM7SUFFTixJQUFNLFFBQVEsR0FBRzs7Ozs7O29CQUVRLHFCQUFNLHFGQUFXLEVBQUU7O29CQUE5QixRQUFRLEdBQUcsU0FBbUI7b0JBRXBDLHNCQUFPLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDOzs7b0JBRTlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBSyxDQUFDOzs7b0JBRWxCLFdBQVcsQ0FBQyxJQUFJLENBQUM7Ozs7O1NBRXhCO0lBR0QsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsbUZBQWlCLENBQUMsQ0FBQyxDQUFDLENBQ25DLDRFQUNLLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FDYixDQUNiLENBQUM7QUFDTixDQUFDO0FBR0QsU0FBUyxXQUFXLENBQUMsS0FBaUI7SUFDbEMsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLGNBQUk7UUFDVixPQUFHLEdBQWdELElBQUksSUFBcEQsRUFBRSxJQUFJLEdBQTBDLElBQUksS0FBOUMsRUFBRSxLQUFLLEdBQW1DLElBQUksTUFBdkMsRUFBRSxNQUFNLEdBQTJCLElBQUksT0FBL0IsRUFBRSxTQUFTLEdBQWdCLElBQUksVUFBcEIsRUFBRSxVQUFVLEdBQUksSUFBSSxXQUFSLENBQVM7UUFDL0QsSUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDM0MsSUFBTSxZQUFZLEdBQUcsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3JELE9BQU8sQ0FDSCwyREFBQyxrREFBSSxJQUFDLEVBQUUsRUFBRSxnQkFBUyxHQUFHLENBQUU7WUFDcEIsd0VBQVMsU0FBUyxFQUFFLCtJQUErSSxFQUFFLE9BQU8sRUFBRSxjQUFNLFVBQUcsRUFBSCxDQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7Z0JBQzdMLG9FQUFLLFNBQVMsRUFBRSxtQ0FBbUM7b0JBQy9DLG1FQUFJLFNBQVMsRUFBRSxTQUFTLElBQUcsS0FBSyxDQUFNO29CQUN0QyxxRUFBTSxTQUFTLEVBQUUsNENBQXFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUUsR0FBUyxDQUMvRztnQkFDTixrRUFBRyxTQUFTLEVBQUUsc0JBQXNCLElBQUcsY0FBTyxTQUFTLENBQUMsUUFBUSxDQUFFLENBQUs7Z0JBQ3ZFLGtFQUFHLFNBQVMsRUFBRSxjQUFjLElBQUcsWUFBWSxDQUFLO2dCQUNoRCxrRUFBRyxTQUFTLEVBQUUsOEJBQThCLElBQUcsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUssQ0FDMUUsQ0FDUCxDQUNWO0lBQ0wsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFO0FBQ2hCLENBQUM7QUFFRCxTQUFTLGNBQWMsQ0FBQyxJQUFXO0lBQy9CLElBQU0sSUFBSSxHQUFHLDhCQUE4QixDQUFDO0lBQzVDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDbEMsQ0FBQztBQUNELFNBQVMsZ0JBQWdCLENBQUMsVUFBaUI7SUFDdkMsSUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbEMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3BJLENBQUM7QUFDRCxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRWtDO0FBQ1c7QUFFNkI7QUFFOUYsU0FBUyxTQUFTO0lBQWxCLGlCQXdEQztJQXZEUyxTQUEwQiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUFyQyxRQUFRLFVBQUUsV0FBVyxRQUFnQixDQUFDO0lBQ3ZDLFNBQTBCLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQXJDLFFBQVEsVUFBRSxXQUFXLFFBQWdCLENBQUM7SUFFN0MsSUFBTSxRQUFRLEdBQUcsNkRBQVcsRUFBRSxDQUFDO0lBQy9CLElBQU0sUUFBUSxHQUFHLFVBQUMsS0FBWTtRQUMxQixZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7SUFDeEMsQ0FBQztJQUVELElBQU0sYUFBYSxHQUFHLFVBQUMsS0FBcUI7UUFDbEMsU0FBZ0IsS0FBSyxDQUFDLE1BQTJCLEVBQWhELElBQUksWUFBRSxLQUFLLFdBQXFDLENBQUM7UUFFeEQsT0FBTyxJQUFJLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBQ0QsSUFBTSxRQUFRLEdBQUcsVUFBTyxLQUFxQjs7Ozs7O29CQUVyQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBRWpCLE9BQU8sR0FBRzt3QkFDWixRQUFRO3dCQUFFLFFBQVE7d0JBQUUsU0FBUyxFQUFFLElBQUk7cUJBQ3RDO29CQUVnQixxQkFBTSxtRkFBUyxDQUFDLE9BQU8sQ0FBQzs7b0JBQW5DLFFBQVEsR0FBRyxTQUF3QjtvQkFDbEMsS0FBSyxHQUFJLFFBQVEsQ0FBQyxJQUFJLE1BQWpCLENBQWtCO29CQUM5QixRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBRWhCLFFBQVEsQ0FBQyxHQUFHLENBQUM7Ozs7b0JBRWIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFLLENBQUM7Ozs7O1NBRXpCO0lBR0QsT0FBTyxDQUNILHdFQUFTLFNBQVMsRUFBQyxpQkFBaUI7UUFDaEMscUVBQU0sU0FBUyxFQUFDLHFCQUFxQixFQUFDLFFBQVEsRUFBRSxRQUFRO1lBQ3BELG9FQUFLLFNBQVMsRUFBQyxNQUFNO2dCQUNqQixzRUFBTyxTQUFTLEVBQUMsNENBQTRDLEVBQUMsT0FBTyxFQUFDLFVBQVUsZUFFeEU7Z0JBQ1Isc0VBQU8sU0FBUyxFQUFDLDRIQUE0SCxFQUFDLEVBQUUsRUFBQyxVQUFVLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsYUFBYSxHQUFHLENBQzFQO1lBQ04sb0VBQUssU0FBUyxFQUFDLE1BQU07Z0JBQ2pCLHNFQUFPLFNBQVMsRUFBQyw0Q0FBNEMsRUFBQyxPQUFPLEVBQUMsVUFBVSxlQUV4RTtnQkFDUixzRUFBTyxTQUFTLEVBQUMsaUlBQWlJLEVBQUMsRUFBRSxFQUFDLFVBQVUsRUFBQyxJQUFJLEVBQUMsVUFBVSxFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxhQUFhLEdBQUcsQ0FDblE7WUFDTixvRUFBSyxTQUFTLEVBQUMsbUNBQW1DO2dCQUM5Qyx1RUFBUSxTQUFTLEVBQUMsOEdBQThHLEVBQUMsSUFBSSxFQUFDLFFBQVEsY0FFckksQ0FDUCxDQUNILENBQ0QsQ0FDYixDQUFDO0FBQ04sQ0FBQztBQUVELGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRG9CO0FBRTJEO0FBQzFCO0FBRU87QUFVckYsU0FBUyxPQUFPO0lBQWhCLGlCQXVFQztJQXRFUyxTQUEwQiwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQUF2QyxRQUFRLFVBQUUsV0FBVyxRQUFrQixDQUFDO0lBQ3pDLFNBQW9CLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQS9CLEtBQUssVUFBRSxRQUFRLFFBQWdCLENBQUM7SUFDakMsU0FBa0IsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBN0IsSUFBSSxVQUFFLE9BQU8sUUFBZ0IsQ0FBQztJQUMvQixTQUFrQiwrQ0FBUSxDQUFDLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRyxDQUFDLEVBQTNDLElBQUksVUFBRSxPQUFPLFFBQThCLENBQUM7SUFFbkQsSUFBTSxTQUFTLEdBQWtCLFVBQUMsS0FBSztRQUNuQyxhQUFhO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyQyxhQUFhO1FBQ2IsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQyxDQUFDO0lBRUYsSUFBTSxNQUFNLEdBQUcsVUFBQyxRQUF1QjtRQUNuQyxJQUFNLEtBQUssR0FBb0IsUUFBUSxDQUFDLE9BQVEsQ0FBQztRQUNqRCxJQUFNLEtBQUssR0FBVSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ2pDLElBQU0sWUFBWSxHQUFXLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRTNDLElBQUcsWUFBWSxFQUFDLENBQUM7WUFDYixPQUFNO1FBQ1YsQ0FBQztRQUVELE9BQU8saUNBQUssSUFBSSxVQUFFLEtBQUssVUFBRTtRQUN6QixLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsSUFBTSxTQUFTLEdBQUc7UUFDZCxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDYixPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDWixPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsSUFBTSxZQUFZLEdBQWtCLFVBQU8sQ0FBQzs7Ozs7O29CQUVwQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ25CLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFFYixJQUFJLEdBQVE7d0JBQ2QsS0FBSzt3QkFDTCxJQUFJO3dCQUNKLElBQUk7cUJBQ1A7b0JBQ0QscUJBQU0sb0ZBQVUsQ0FBQyxJQUFJLENBQUM7O29CQUF0QixTQUFzQixDQUFDO29CQUN2QixTQUFTLEVBQUUsQ0FBQzs7OztvQkFFWixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQUssQ0FBQyxDQUFDOzs7b0JBRW5CLFdBQVcsQ0FBQyxJQUFJLENBQUM7Ozs7O1NBRXhCO0lBRUQsSUFBRyxDQUFDLFFBQVEsRUFBQyxDQUFDO1FBQ1YsT0FBTyxtRkFBaUI7SUFDNUIsQ0FBQztJQUVELE9BQU8sQ0FDSCxxRUFBTSxTQUFTLEVBQUUsdUJBQXVCO1FBQ3BDLDJEQUFDLG1HQUF1QixJQUNwQixhQUFhLEVBQUUsVUFBQyxDQUFnQixJQUFLLGVBQVEsQ0FBRSxDQUFDLENBQUMsTUFBNEIsQ0FBQyxLQUFLLENBQUUsRUFBaEQsQ0FBZ0QsRUFDckYsY0FBYyxFQUFFLFVBQUMsS0FBWSxJQUFLLGNBQU8sQ0FBQyxLQUFLLENBQUMsRUFBZCxDQUFjLEVBQ2hELEtBQUssRUFBRSxLQUFLLEdBQ2Q7UUFDRiwyREFBQyx5RUFBVSxJQUNQLFNBQVMsRUFBRSxTQUFTLEVBQ3BCLE1BQU0sRUFBRSxNQUFNLEVBQ2QsSUFBSSxFQUFFLElBQUksR0FDWjtRQUVGLHVFQUFRLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUMsMk9BQTJPLHNCQUF5QixDQUMxVCxDQUNWLENBQUM7QUFDTixDQUFDO0FBQ0QsaUVBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVGMEI7QUFFakQsU0FBUyxJQUFJO0lBQ0gsU0FBa0IsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBN0IsSUFBSSxVQUFFLE9BQU8sUUFBZ0IsQ0FBQztJQUVyQyxnREFBUyxDQUFDO1FBQ04sZ0JBQWdCO0lBQ3BCLENBQUMsRUFBRSxFQUFFLENBQUM7SUFFTixPQUFPLENBQ0gsdUVBQVcsQ0FDZCxDQUFDO0FBQ04sQ0FBQztBQUVELGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2Q2QjtBQUNXO0FBRW9CO0FBRVg7QUFDQTtBQUNHO0FBQ1Q7QUFDVTtBQUNWO0FBRS9ELHlDQUF5QztBQUN6QyxvQkFBb0I7QUFDcEIsc0JBQXNCO0FBQ3RCLHVCQUF1QjtBQUN2QiwwQkFBMEI7QUFDMUIsU0FBUztBQUNGLFNBQVMsU0FBUztJQUNyQixPQUFPLENBQ0gsMkRBQUMsb0RBQU07UUFDSCwyREFBQyxtREFBSyxJQUFDLElBQUksRUFBQyxHQUFHLEVBQUMsT0FBTyxFQUFFLDJEQUFDLGlFQUFNLE9BQUcsSUFDN0IsZUFBZSxFQUFFLENBQ2Y7UUFDUiwyREFBQyxtREFBSyxJQUFDLElBQUksRUFBQyxHQUFHLElBQ1QsaUJBQWlCLEVBQUUsQ0FDakIsQ0FDSCxDQUNaO0FBRUwsQ0FBQztBQUVELFNBQVMsZUFBZTtJQUNwQixPQUFPLENBQ0g7UUFDSSwyREFBQyxtREFBSyxJQUFDLEtBQUssUUFBQyxPQUFPLEVBQ2hCLDJEQUFDLDRFQUFXO2dCQUNSLDJEQUFDLDBEQUFJLE9BQUUsQ0FDRyxHQUNmO1FBQ0gsMkRBQUMsbURBQUssSUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFDNUIsMkRBQUMsNEVBQVc7Z0JBQ1IsMkRBQUMsZ0VBQU8sT0FBRSxDQUNBLEdBQ2Y7UUFDSCwyREFBQyxtREFBSyxJQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUM3QiwyREFBQyw0RUFBVztnQkFDUiwyREFBQywwREFBSSxPQUFFLENBQ0csR0FDZixDQUNKLENBQ047QUFDTCxDQUFDO0FBRUQsU0FBUyxpQkFBaUI7SUFDdEIsT0FBTyxDQUNIO1FBQ0ksMkRBQUMsbURBQUssSUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFDM0IsMkRBQUMsb0VBQVMsT0FBRSxHQUNiO1FBQ0gsMkRBQUMsbURBQUssSUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFDckIsMkRBQUMsbUVBQU8sT0FBRSxHQUNYLENBQ0osQ0FDTjtBQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRWdEO0FBTU07QUFhdkQsSUFBTSxhQUFhLEdBQUcsNkNBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVyQyxhQUFhLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQ2xDLFVBQUMsTUFBTTtJQUNILElBQU0sU0FBUyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEQsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUNaLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLGlCQUFVLFNBQVMsQ0FBRSxDQUFDO0lBQ3pELENBQUM7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDLEVBQ0QsVUFBQyxLQUFLLElBQUssY0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBckIsQ0FBcUIsQ0FDbkMsQ0FBQztBQUVNLE9BQUcsR0FBOEIsYUFBYSxJQUEzQyxFQUFFLElBQUksR0FBd0IsYUFBYSxLQUFyQyxFQUFFLEdBQUcsR0FBbUIsYUFBYSxJQUFoQyxFQUFVLEdBQUcsR0FBTSxhQUFhLE9BQW5CLENBQW9CO0FBQ2hELElBQU0sV0FBVyxHQUFHO0lBQ3ZCLE9BQU8sR0FBRyxDQUFDLDZDQUFLLENBQUMsQ0FBQztBQUN0QixDQUFDO0FBRU0sSUFBTSxhQUFhLEdBQUcsVUFBQyxFQUFTO0lBQ25DLE9BQU8sR0FBRyxDQUFDLFVBQUcsNkNBQUssY0FBSSxFQUFFLENBQUUsQ0FBQyxDQUFDO0FBQ2pDLENBQUM7QUFFTSxJQUFNLFVBQVUsR0FBRyxVQUFDLE9BQW1CO0lBQzFDLE9BQU8sSUFBSSxDQUFDLDZDQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDaEMsQ0FBQztBQUVNLElBQU0sU0FBUyxHQUFHLFVBQUMsR0FBaUI7SUFDdkMsT0FBTyxJQUFJLENBQUMsNkNBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztBQUM1QixDQUFDO0FBQ00sSUFBTSxXQUFXLEdBQUc7SUFDdkIsT0FBTyxHQUFHLENBQUMsa0RBQVUsQ0FBQyxDQUFDO0FBQzNCLENBQUM7QUFDTSxJQUFNLFlBQVksR0FBRztJQUN4QixPQUFPLEdBQUcsQ0FBQyxxREFBYSxDQUFDLENBQUM7QUFDOUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRE0sSUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDO0FBRTFCLElBQU0sS0FBSyxHQUFHLFVBQUcsVUFBVSxXQUFRO0FBQ25DLElBQU0sT0FBTyxHQUFHLFVBQUcsVUFBVSxhQUFVO0FBQ3ZDLElBQU0sS0FBSyxHQUFHLFVBQUcsVUFBVSxXQUFRO0FBQ25DLElBQU0sY0FBYyxHQUFHLFVBQUcsVUFBVSxvQkFBaUI7QUFDckQsSUFBTSxXQUFXLEdBQUcsVUFBRyxVQUFVLGlCQUFjO0FBRS9DLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQztBQUN2QixJQUFNLGFBQWEsR0FBRyxVQUFVLENBQUM7QUFDakMsSUFBTSxVQUFVLEdBQUcsVUFBRyxVQUFVLGdCQUFhOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1ZwRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0M1QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSwrQkFBK0Isd0NBQXdDO1dBQ3ZFO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCLHFCQUFxQjtXQUN0QztXQUNBO1dBQ0Esa0JBQWtCLHFCQUFxQjtXQUN2QztXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esc0RBQXNEO1dBQ3RELHNDQUFzQyxpRUFBaUU7V0FDdkc7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ0pBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7V0NoREE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvZGVneS1hZG1pbmVyLy4vc3JjL2NvbXBvbmVudHMvQnVuZGxlRWRpdG9yL0J1bmRsZUVkaXRvci5qcyIsIndlYnBhY2s6Ly9jb2RlZ3ktYWRtaW5lci8uL3NyYy9jb21wb25lbnRzL0J1bmRsZUVkaXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb2RlZ3ktYWRtaW5lci8uL3NyYy9jb21wb25lbnRzL0NyZWF0ZVVwZGF0ZVBvc3RDb250ZW50L0NyZWF0ZVVwZGF0ZVBvc3RDb250ZW50LmpzIiwid2VicGFjazovL2NvZGVneS1hZG1pbmVyLy4vc3JjL2NvbXBvbmVudHMvUGFnZTQwNC9QYWdlNDA0LmpzIiwid2VicGFjazovL2NvZGVneS1hZG1pbmVyLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL2NvZGVneS1hZG1pbmVyLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzP2FkZjkiLCJ3ZWJwYWNrOi8vY29kZWd5LWFkbWluZXIvLi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vY29kZWd5LWFkbWluZXIvLi9zcmMvQXBwLnRzeCIsIndlYnBhY2s6Ly9jb2RlZ3ktYWRtaW5lci8uL3NyYy9jb21wb25lbnRzL0xheW91dC9MYXlvdXQudHN4Iiwid2VicGFjazovL2NvZGVneS1hZG1pbmVyLy4vc3JjL2NvbXBvbmVudHMvUmVxdWlyZUF1dGgvUmVxdWlyZUF1dGgudHN4Iiwid2VicGFjazovL2NvZGVneS1hZG1pbmVyLy4vc3JjL2NvbXBvbmVudHMvVGFnc1NlbGVjdC9UYWdzU2VsZWN0LnRzeCIsIndlYnBhY2s6Ly9jb2RlZ3ktYWRtaW5lci8uL3NyYy9tb2R1bGVzL0hvbWUvSG9tZS50c3giLCJ3ZWJwYWNrOi8vY29kZWd5LWFkbWluZXIvLi9zcmMvbW9kdWxlcy9Mb2dpblBhZ2UvTG9naW5QYWdlLnRzeCIsIndlYnBhY2s6Ly9jb2RlZ3ktYWRtaW5lci8uL3NyYy9tb2R1bGVzL05ld1Bvc3QvTmV3UG9zdC50c3giLCJ3ZWJwYWNrOi8vY29kZWd5LWFkbWluZXIvLi9zcmMvbW9kdWxlcy9Qb3N0L1Bvc3QudHN4Iiwid2VicGFjazovL2NvZGVneS1hZG1pbmVyLy4vc3JjL3JvdXRlcy50c3giLCJ3ZWJwYWNrOi8vY29kZWd5LWFkbWluZXIvLi9zcmMvc2VydmljZXMvUmVxdWVzdFNlcnZpY2UvUmVxdWVzdHNTZXJ2aWNlLnRzIiwid2VicGFjazovL2NvZGVneS1hZG1pbmVyLy4vc3JjL3NlcnZpY2VzL1JlcXVlc3RTZXJ2aWNlL3JvdXRlc0FwaS50c3giLCJ3ZWJwYWNrOi8vY29kZWd5LWFkbWluZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29kZWd5LWFkbWluZXIvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9jb2RlZ3ktYWRtaW5lci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jb2RlZ3ktYWRtaW5lci93ZWJwYWNrL3J1bnRpbWUvY3JlYXRlIGZha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb2RlZ3ktYWRtaW5lci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY29kZWd5LWFkbWluZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jb2RlZ3ktYWRtaW5lci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NvZGVneS1hZG1pbmVyL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vY29kZWd5LWFkbWluZXIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY29kZWd5LWFkbWluZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2NvZGVneS1hZG1pbmVyL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vY29kZWd5LWFkbWluZXIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2NvZGVneS1hZG1pbmVyL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBFZGl0b3IgfSBmcm9tICdAdGlueW1jZS90aW55bWNlLXJlYWN0JztcblxuLy8gVGlueU1DRSBzbyB0aGUgZ2xvYmFsIHZhciBleGlzdHNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuaW1wb3J0IHRpbnltY2UgZnJvbSAndGlueW1jZS90aW55bWNlJztcbi8vIERPTSBtb2RlbFxuaW1wb3J0ICd0aW55bWNlL21vZGVscy9kb20vbW9kZWwnXG4vLyBUaGVtZVxuaW1wb3J0ICd0aW55bWNlL3RoZW1lcy9zaWx2ZXInO1xuLy8gVG9vbGJhciBpY29uc1xuaW1wb3J0ICd0aW55bWNlL2ljb25zL2RlZmF1bHQnO1xuLy8gRWRpdG9yIHN0eWxlc1xuaW1wb3J0ICd0aW55bWNlL3NraW5zL3VpL294aWRlL3NraW4ubWluLmNzcyc7XG5cbi8vIGltcG9ydGluZyB0aGUgcGx1Z2luIGpzLlxuLy8gaWYgeW91IHVzZSBhIHBsdWdpbiB0aGF0IGlzIG5vdCBsaXN0ZWQgaGVyZSB0aGUgZWRpdG9yIHdpbGwgZmFpbCB0byBsb2FkXG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy9hZHZsaXN0JztcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL2FuY2hvcic7XG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy9hdXRvbGluayc7XG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy9hdXRvcmVzaXplJztcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL2F1dG9zYXZlJztcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL2NoYXJtYXAnO1xuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvY29kZSc7XG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy9jb2Rlc2FtcGxlJztcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL2RpcmVjdGlvbmFsaXR5JztcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL2Vtb3RpY29ucyc7XG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy9mdWxsc2NyZWVuJztcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL2hlbHAnO1xuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvaW1hZ2UnO1xuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvaW1wb3J0Y3NzJztcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL2luc2VydGRhdGV0aW1lJztcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL2xpbmsnO1xuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvbGlzdHMnO1xuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvbWVkaWEnO1xuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvbm9uYnJlYWtpbmcnO1xuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvcGFnZWJyZWFrJztcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL3ByZXZpZXcnO1xuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvcXVpY2tiYXJzJztcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL3NhdmUnO1xuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvc2VhcmNocmVwbGFjZSc7XG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy90YWJsZSc7XG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy90ZW1wbGF0ZSc7XG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy92aXN1YWxibG9ja3MnO1xuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvdmlzdWFsY2hhcnMnO1xuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvd29yZGNvdW50JztcblxuLy8gaW1wb3J0aW5nIHBsdWdpbiByZXNvdXJjZXNcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL2Vtb3RpY29ucy9qcy9lbW9qaXMnO1xuXG4vLyBDb250ZW50IHN0eWxlcywgaW5jbHVkaW5nIGlubGluZSBVSSBsaWtlIGZha2UgY3Vyc29yc1xuLyogZXNsaW50IGltcG9ydC9uby13ZWJwYWNrLWxvYWRlci1zeW50YXg6IG9mZiAqL1xuaW1wb3J0IGNvbnRlbnRDc3MgZnJvbSAnISFyYXctbG9hZGVyIXRpbnltY2Uvc2tpbnMvY29udGVudC9kZWZhdWx0L2NvbnRlbnQubWluLmNzcyc7XG5pbXBvcnQgY29udGVudFVpQ3NzIGZyb20gJyEhcmF3LWxvYWRlciF0aW55bWNlL3NraW5zL3VpL294aWRlL2NvbnRlbnQubWluLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1bmRsZWRFZGl0b3IocHJvcHMpIHtcblxuICAgIGNvbnN0IHtpbml0LCAuLi5yZXN0fSA9IHByb3BzO1xuICAgIC8vIG5vdGUgdGhhdCBza2luIGFuZCBjb250ZW50X2NzcyBpcyBkaXNhYmxlZCB0byBhdm9pZCB0aGUgbm9ybWFsXG4gICAgLy8gbG9hZGluZyBwcm9jZXNzIGFuZCBpcyBpbnN0ZWFkIGxvYWRlZCBhcyBhIHN0cmluZyB2aWEgY29udGVudF9zdHlsZVxuICAgIHJldHVybiAoXG4gICAgICAgIDxFZGl0b3JcbiAgICAgICAgICAgIGluaXQ9e3tcbiAgICAgICAgICAgICAgICAuLi5pbml0LFxuICAgICAgICAgICAgICAgIHNraW46IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRfY3NzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb250ZW50X3N0eWxlOiBbY29udGVudENzcywgY29udGVudFVpQ3NzLCBpbml0LmNvbnRlbnRfc3R5bGUgfHwgJyddLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAvPlxuICAgICk7XG59IiwiaW1wb3J0IEJ1bmRsZWRFZGl0b3IgZnJvbSBcIi4vQnVuZGxlRWRpdG9yXCI7XG5leHBvcnQgZGVmYXVsdCBCdW5kbGVkRWRpdG9yOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnVuZGxlZEVkaXRvciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0J1bmRsZUVkaXRvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZVVwZGF0ZVBvc3RDb250ZW50KHByb3BzKSB7XG4gICAgY29uc3Qge29uVGl0bGVDaGFuZ2UsIG9uRWRpdG9yQ2hhbmdlLCB0aXRsZSwgaW5pdGlhbEVkaXRvclZhbHVlfSA9IHByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9eydmbGV4IGZsZXgtY29sIGdhcC01J30+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZmxleCBmbGV4LWNvbCBnYXAtMyd9PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXsndGl0bGUnfT5cbiAgICAgICAgICAgICAgICAgICAgUG9zdCB0aXRsZVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J3ctZnVsbCBtYXgtdy1bNDAwcHhdIGJvcmRlciByb3VuZGVkLW1kIHAtMid9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9eyd0ZXh0J31cbiAgICAgICAgICAgICAgICAgICAgaWQ9eyd0aXRsZSd9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsnRW50ZXIgeW91ciBwb3N0XFwncyB0aXRsZSd9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblRpdGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2ZsZXggZmxleC1jb2wgZ2FwLTMnfT5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17J2NvbnRlbnQnfT5cbiAgICAgICAgICAgICAgICAgICAgUG9zdCBjb250ZW50XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8QnVuZGxlZEVkaXRvclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9e2luaXRpYWxFZGl0b3JWYWx1ZSA/PyAnPGgzIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyO1wiPlBvc3QgaGVhZGluZzwvaDM+J31cbiAgICAgICAgICAgICAgICAgICAgaWQ9eydjb250ZW50J31cbiAgICAgICAgICAgICAgICAgICAgaW5pdD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dXAgOiBmdW5jdGlvbihlZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWQub24oJ05vZGVDaGFuZ2UnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FZGl0b3JDaGFuZ2UoZWQuZ2V0Q29udGVudCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbnViYXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhZHZsaXN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYW5jaG9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXV0b2xpbmsnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICdoZWxwJywgLy8gY2F1c2VzIGVycm9yIGJlY2F1c2UgcGx1Z2luIGlzIDQwNFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpbWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xpbmsnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdsaXN0cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NlYXJjaHJlcGxhY2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWJsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3dvcmRjb3VudCdcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sYmFyOiAndW5kbyByZWRvIHwgYmxvY2tzIHwgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JvbGQgaXRhbGljIGZvcmVjb2xvciB8IGFsaWdubGVmdCBhbGlnbmNlbnRlciAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWxpZ25yaWdodCBhbGlnbmp1c3RpZnkgfCBidWxsaXN0IG51bWxpc3Qgb3V0ZGVudCBpbmRlbnQgfCAnICsgJyBpbWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50X3N0eWxlOiAnYm9keSB7IGZvbnQtZmFtaWx5OkhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmOyBmb250LXNpemU6MTRweCB9J1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gUGFnZTQwNCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgNDA0XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U0MDQ7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qXG4hIHRhaWx3aW5kY3NzIHYzLjMuNyB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly90YWlsd2luZGNzcy5jb21cbiovLypcbjEuIFByZXZlbnQgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGVsZW1lbnQgd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzQpXG4yLiBBbGxvdyBhZGRpbmcgYSBib3JkZXIgdG8gYW4gZWxlbWVudCBieSBqdXN0IGFkZGluZyBhIGJvcmRlci13aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9wdWxsLzExNilcbiovXG5cbiosXG46OmJlZm9yZSxcbjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXG4gIGJvcmRlci13aWR0aDogMDsgLyogMiAqL1xuICBib3JkZXItc3R5bGU6IHNvbGlkOyAvKiAyICovXG4gIGJvcmRlci1jb2xvcjogI2U1ZTdlYjsgLyogMiAqL1xufVxuXG46OmJlZm9yZSxcbjo6YWZ0ZXIge1xuICAtLXR3LWNvbnRlbnQ6ICcnO1xufVxuXG4vKlxuMS4gVXNlIGEgY29uc2lzdGVudCBzZW5zaWJsZSBsaW5lLWhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXG4yLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cbjMuIFVzZSBhIG1vcmUgcmVhZGFibGUgdGFiIHNpemUuXG40LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYHNhbnNcXGAgZm9udC1mYW1pbHkgYnkgZGVmYXVsdC5cbjUuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgc2Fuc1xcYCBmb250LWZlYXR1cmUtc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjYuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgc2Fuc1xcYCBmb250LXZhcmlhdGlvbi1zZXR0aW5ncyBieSBkZWZhdWx0LlxuKi9cblxuaHRtbCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7IC8qIDEgKi9cbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXG4gIC1tb3otdGFiLXNpemU6IDQ7IC8qIDMgKi9cbiAgLW8tdGFiLXNpemU6IDQ7XG4gICAgIHRhYi1zaXplOiA0OyAvKiAzICovXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIjsgLyogNCAqL1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDsgLyogNSAqL1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogbm9ybWFsOyAvKiA2ICovXG59XG5cbi8qXG4xLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXG4yLiBJbmhlcml0IGxpbmUtaGVpZ2h0IGZyb20gXFxgaHRtbFxcYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXMgYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgXFxgaHRtbFxcYCBlbGVtZW50LlxuKi9cblxuYm9keSB7XG4gIG1hcmdpbjogMDsgLyogMSAqL1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMiAqL1xufVxuXG4vKlxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXG4zLiBFbnN1cmUgaG9yaXpvbnRhbCBydWxlcyBhcmUgdmlzaWJsZSBieSBkZWZhdWx0LlxuKi9cblxuaHIge1xuICBoZWlnaHQ6IDA7IC8qIDEgKi9cbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4OyAvKiAzICovXG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cbiovXG5cbmFiYnI6d2hlcmUoW3RpdGxlXSkge1xuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XG59XG5cbi8qXG5SZW1vdmUgdGhlIGRlZmF1bHQgZm9udCBzaXplIGFuZCB3ZWlnaHQgZm9yIGhlYWRpbmdzLlxuKi9cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbn1cblxuLypcblJlc2V0IGxpbmtzIHRvIG9wdGltaXplIGZvciBvcHQtaW4gc3R5bGluZyBpbnN0ZWFkIG9mIG9wdC1vdXQuXG4qL1xuXG5hIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBFZGdlIGFuZCBTYWZhcmkuXG4qL1xuXG5iLFxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLypcbjEuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgbW9ub1xcYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxuMi4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBtb25vXFxgIGZvbnQtZmVhdHVyZS1zZXR0aW5ncyBieSBkZWZhdWx0LlxuMy4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBtb25vXFxgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG40LiBDb3JyZWN0IHRoZSBvZGQgXFxgZW1cXGAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuY29kZSxcbmtiZCxcbnNhbXAsXG5wcmUge1xuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlOyAvKiAxICovXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogbm9ybWFsOyAvKiAyICovXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBub3JtYWw7IC8qIDMgKi9cbiAgZm9udC1zaXplOiAxZW07IC8qIDQgKi9cbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuc21hbGwge1xuICBmb250LXNpemU6IDgwJTtcbn1cblxuLypcblByZXZlbnQgXFxgc3ViXFxgIGFuZCBcXGBzdXBcXGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cbiovXG5cbnN1YixcbnN1cCB7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBsaW5lLWhlaWdodDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnN1YiB7XG4gIGJvdHRvbTogLTAuMjVlbTtcbn1cblxuc3VwIHtcbiAgdG9wOiAtMC41ZW07XG59XG5cbi8qXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxuMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gYWxsIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTM1NzI5LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk1MDE2KVxuMy4gUmVtb3ZlIGdhcHMgYmV0d2VlbiB0YWJsZSBib3JkZXJzIGJ5IGRlZmF1bHQuXG4qL1xuXG50YWJsZSB7XG4gIHRleHQtaW5kZW50OiAwOyAvKiAxICovXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDsgLyogMiAqL1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyAvKiAzICovXG59XG5cbi8qXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cbjIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cbjMuIFJlbW92ZSBkZWZhdWx0IHBhZGRpbmcgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuYnV0dG9uLFxuaW5wdXQsXG5vcHRncm91cCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xuICBmb250LXdlaWdodDogaW5oZXJpdDsgLyogMSAqL1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMSAqL1xuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xuICBtYXJnaW46IDA7IC8qIDIgKi9cbiAgcGFkZGluZzogMDsgLyogMyAqL1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxuKi9cblxuYnV0dG9uLFxuc2VsZWN0IHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi8qXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuMi4gUmVtb3ZlIGRlZmF1bHQgYnV0dG9uIHN0eWxlcy5cbiovXG5cbmJ1dHRvbixcblt0eXBlPSdidXR0b24nXSxcblt0eXBlPSdyZXNldCddLFxuW3R5cGU9J3N1Ym1pdCddIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDIgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTsgLyogMiAqL1xufVxuXG4vKlxuVXNlIHRoZSBtb2Rlcm4gRmlyZWZveCBmb2N1cyBzdHlsZSBmb3IgYWxsIGZvY3VzYWJsZSBlbGVtZW50cy5cbiovXG5cbjotbW96LWZvY3VzcmluZyB7XG4gIG91dGxpbmU6IGF1dG87XG59XG5cbi8qXG5SZW1vdmUgdGhlIGFkZGl0aW9uYWwgXFxgOmludmFsaWRcXGAgc3R5bGVzIGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczNylcbiovXG5cbjotbW96LXVpLWludmFsaWQge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXG4qL1xuXG5wcm9ncmVzcyB7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLypcbkNvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIFNhZmFyaS5cbiovXG5cbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLypcbjEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXG4qL1xuXG5bdHlwZT0nc2VhcmNoJ10ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxuKi9cblxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4vKlxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gXFxgaW5oZXJpdFxcYCBpbiBTYWZhcmkuXG4qL1xuXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4qL1xuXG5zdW1tYXJ5IHtcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xufVxuXG4vKlxuUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxuKi9cblxuYmxvY2txdW90ZSxcbmRsLFxuZGQsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5ocixcbmZpZ3VyZSxcbnAsXG5wcmUge1xuICBtYXJnaW46IDA7XG59XG5cbmZpZWxkc2V0IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5sZWdlbmQge1xuICBwYWRkaW5nOiAwO1xufVxuXG5vbCxcbnVsLFxubWVudSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLypcblJlc2V0IGRlZmF1bHQgc3R5bGluZyBmb3IgZGlhbG9ncy5cbiovXG5kaWFsb2cge1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKlxuUHJldmVudCByZXNpemluZyB0ZXh0YXJlYXMgaG9yaXpvbnRhbGx5IGJ5IGRlZmF1bHQuXG4qL1xuXG50ZXh0YXJlYSB7XG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbi8qXG4xLiBSZXNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBvcGFjaXR5IGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRsYWJzL3RhaWx3aW5kY3NzL2lzc3Vlcy8zMzAwKVxuMi4gU2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIGNvbG9yIHRvIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBncmF5IDQwMCBjb2xvci5cbiovXG5cbmlucHV0OjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cbn1cblxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTsgLyogMSAqL1xuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xufVxuXG4vKlxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cbiovXG5cbmJ1dHRvbixcbltyb2xlPVwiYnV0dG9uXCJdIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKlxuTWFrZSBzdXJlIGRpc2FibGVkIGJ1dHRvbnMgZG9uJ3QgZ2V0IHRoZSBwb2ludGVyIGN1cnNvci5cbiovXG46ZGlzYWJsZWQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi8qXG4xLiBNYWtlIHJlcGxhY2VkIGVsZW1lbnRzIFxcYGRpc3BsYXk6IGJsb2NrXFxgIGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxuMi4gQWRkIFxcYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcXGAgdG8gYWxpZ24gcmVwbGFjZWQgZWxlbWVudHMgbW9yZSBzZW5zaWJseSBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL2plbnNpbW1vbnMvY3NzcmVtZWR5L2lzc3Vlcy8xNCNpc3N1ZWNvbW1lbnQtNjM0OTM0MjEwKVxuICAgVGhpcyBjYW4gdHJpZ2dlciBhIHBvb3JseSBjb25zaWRlcmVkIGxpbnQgZXJyb3IgaW4gc29tZSB0b29scyBidXQgaXMgaW5jbHVkZWQgYnkgZGVzaWduLlxuKi9cblxuaW1nLFxuc3ZnLFxudmlkZW8sXG5jYW52YXMsXG5hdWRpbyxcbmlmcmFtZSxcbmVtYmVkLFxub2JqZWN0IHtcbiAgZGlzcGxheTogYmxvY2s7IC8qIDEgKi9cbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogMiAqL1xufVxuXG4vKlxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxuKi9cblxuaW1nLFxudmlkZW8ge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLyogTWFrZSBlbGVtZW50cyB3aXRoIHRoZSBIVE1MIGhpZGRlbiBhdHRyaWJ1dGUgc3RheSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xuW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4qLCA6OmJlZm9yZSwgOjphZnRlciB7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xuICAtLXR3LXJvdGF0ZTogMDtcbiAgLS10dy1za2V3LXg6IDA7XG4gIC0tdHctc2tldy15OiAwO1xuICAtLXR3LXNjYWxlLXg6IDE7XG4gIC0tdHctc2NhbGUteTogMTtcbiAgLS10dy1wYW4teDogIDtcbiAgLS10dy1wYW4teTogIDtcbiAgLS10dy1waW5jaC16b29tOiAgO1xuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcbiAgLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uOiAgO1xuICAtLXR3LWdyYWRpZW50LXZpYS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC10by1wb3NpdGlvbjogIDtcbiAgLS10dy1vcmRpbmFsOiAgO1xuICAtLXR3LXNsYXNoZWQtemVybzogIDtcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XG4gIC0tdHctcmluZy1jb2xvcjogcmdiKDU5IDEzMCAyNDYgLyAwLjUpO1xuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgIzAwMDA7XG4gIC0tdHctc2hhZG93OiAwIDAgIzAwMDA7XG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCAjMDAwMDtcbiAgLS10dy1ibHVyOiAgO1xuICAtLXR3LWJyaWdodG5lc3M6ICA7XG4gIC0tdHctY29udHJhc3Q6ICA7XG4gIC0tdHctZ3JheXNjYWxlOiAgO1xuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctaW52ZXJ0OiAgO1xuICAtLXR3LXNhdHVyYXRlOiAgO1xuICAtLXR3LXNlcGlhOiAgO1xuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcbn1cblxuOjpiYWNrZHJvcCB7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xuICAtLXR3LXJvdGF0ZTogMDtcbiAgLS10dy1za2V3LXg6IDA7XG4gIC0tdHctc2tldy15OiAwO1xuICAtLXR3LXNjYWxlLXg6IDE7XG4gIC0tdHctc2NhbGUteTogMTtcbiAgLS10dy1wYW4teDogIDtcbiAgLS10dy1wYW4teTogIDtcbiAgLS10dy1waW5jaC16b29tOiAgO1xuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcbiAgLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uOiAgO1xuICAtLXR3LWdyYWRpZW50LXZpYS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC10by1wb3NpdGlvbjogIDtcbiAgLS10dy1vcmRpbmFsOiAgO1xuICAtLXR3LXNsYXNoZWQtemVybzogIDtcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XG4gIC0tdHctcmluZy1jb2xvcjogcmdiKDU5IDEzMCAyNDYgLyAwLjUpO1xuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgIzAwMDA7XG4gIC0tdHctc2hhZG93OiAwIDAgIzAwMDA7XG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCAjMDAwMDtcbiAgLS10dy1ibHVyOiAgO1xuICAtLXR3LWJyaWdodG5lc3M6ICA7XG4gIC0tdHctY29udHJhc3Q6ICA7XG4gIC0tdHctZ3JheXNjYWxlOiAgO1xuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctaW52ZXJ0OiAgO1xuICAtLXR3LXNhdHVyYXRlOiAgO1xuICAtLXR3LXNlcGlhOiAgO1xuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcbn1cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xuXG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNjQwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuXG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNzY4cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcblxuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xuXG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTI4MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTUzNnB4KSB7XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAxNTM2cHg7XG4gIH1cbn1cbi5zdGF0aWMge1xuICBwb3NpdGlvbjogc3RhdGljO1xufVxuLnJlbGF0aXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm14LWF1dG8ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLm1iLTIge1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG4ubWItMyB7XG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG59XG4ubWItNCB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4ubWItNSB7XG4gIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG59XG4ubWItNiB7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cbi5tZS0yIHtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDAuNXJlbTtcbn1cbi5saW5lLWNsYW1wLTMge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xufVxuLmJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaW5saW5lLWJsb2NrIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmlubGluZSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi50YWJsZSB7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuLmdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xufVxuLmgtMyB7XG4gIGhlaWdodDogMC43NXJlbTtcbn1cbi53LTMge1xuICB3aWR0aDogMC43NXJlbTtcbn1cbi53LWZ1bGwge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYXgtdy1cXFxcWzI5MHB4XFxcXF0ge1xuICBtYXgtd2lkdGg6IDI5MHB4O1xufVxuLm1heC13LVxcXFxbNDAwcHhcXFxcXSB7XG4gIG1heC13aWR0aDogNDAwcHg7XG59XG4ubWF4LXctXFxcXFs2MDBweFxcXFxdIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbn1cbi5tYXgtdy1cXFxcWzkwcHhcXFxcXSB7XG4gIG1heC13aWR0aDogOTBweDtcbn1cbi5tYXgtdy14cyB7XG4gIG1heC13aWR0aDogMjByZW07XG59XG4uY3Vyc29yLXBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYXBwZWFyYW5jZS1ub25lIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbn1cbi5ncmlkLWNvbHMtbWFpbiB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDIwMHB4LCAxZnIpIDRmcjtcbn1cbi5mbGV4LWNvbCB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZmxleC13cmFwIHtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLml0ZW1zLWNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uanVzdGlmeS1iZXR3ZWVuIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmdhcC0yIHtcbiAgZ2FwOiAwLjVyZW07XG59XG4uZ2FwLTMge1xuICBnYXA6IDAuNzVyZW07XG59XG4uZ2FwLTUge1xuICBnYXA6IDEuMjVyZW07XG59XG4uZ2FwLXktMiB7XG4gIHJvdy1nYXA6IDAuNXJlbTtcbn1cbi5yb3VuZGVkIHtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cbi5yb3VuZGVkLWZ1bGwge1xuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG59XG4ucm91bmRlZC1sZyB7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cbi5yb3VuZGVkLW1kIHtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG59XG4ucm91bmRlZC14bCB7XG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XG59XG4uYm9yZGVyIHtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG59XG4uYmctYW1iZXItNTAwIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1IDE1OCAxMSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5iZy1ibHVlLTUwMCB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU5IDEzMCAyNDYgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYmctZW1lcmFsZC01MDAge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNiAxODUgMTI5IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmJnLWdyYWRpZW50LXRvLXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXR3LWdyYWRpZW50LXN0b3BzKSk7XG59XG4uZnJvbS1ibHVlLTUwMCB7XG4gIC0tdHctZ3JhZGllbnQtZnJvbTogIzNiODJmNiB2YXIoLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uKTtcbiAgLS10dy1ncmFkaWVudC10bzogcmdiKDU5IDEzMCAyNDYgLyAwKSB2YXIoLS10dy1ncmFkaWVudC10by1wb3NpdGlvbik7XG4gIC0tdHctZ3JhZGllbnQtc3RvcHM6IHZhcigtLXR3LWdyYWRpZW50LWZyb20pLCB2YXIoLS10dy1ncmFkaWVudC10byk7XG59XG4udmlhLWJsdWUtNjAwIHtcbiAgLS10dy1ncmFkaWVudC10bzogcmdiKDM3IDk5IDIzNSAvIDApICB2YXIoLS10dy1ncmFkaWVudC10by1wb3NpdGlvbik7XG4gIC0tdHctZ3JhZGllbnQtc3RvcHM6IHZhcigtLXR3LWdyYWRpZW50LWZyb20pLCAjMjU2M2ViIHZhcigtLXR3LWdyYWRpZW50LXZpYS1wb3NpdGlvbiksIHZhcigtLXR3LWdyYWRpZW50LXRvKTtcbn1cbi50by1ibHVlLTcwMCB7XG4gIC0tdHctZ3JhZGllbnQtdG86ICMxZDRlZDggdmFyKC0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb24pO1xufVxuLnAtMiB7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cbi5wLTMge1xuICBwYWRkaW5nOiAwLjc1cmVtO1xufVxuLnAtNSB7XG4gIHBhZGRpbmc6IDEuMjVyZW07XG59XG4ucHgtMiB7XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG59XG4ucHgtMyB7XG4gIHBhZGRpbmctbGVmdDogMC43NXJlbTtcbiAgcGFkZGluZy1yaWdodDogMC43NXJlbTtcbn1cbi5weC00IHtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xufVxuLnB4LTUge1xuICBwYWRkaW5nLWxlZnQ6IDEuMjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDEuMjVyZW07XG59XG4ucHgtOCB7XG4gIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcbn1cbi5weS0yIHtcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbn1cbi5weS0yXFxcXC41IHtcbiAgcGFkZGluZy10b3A6IDAuNjI1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVyZW07XG59XG4ucHktNSB7XG4gIHBhZGRpbmctdG9wOiAxLjI1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMS4yNXJlbTtcbn1cbi5wYi04IHtcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XG59XG4ucHItXFxcXFs0MHB4XFxcXF0ge1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xufVxuLnB0LTUge1xuICBwYWRkaW5nLXRvcDogMS4yNXJlbTtcbn1cbi5wdC02IHtcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcbn1cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uYWxpZ24tbWlkZGxlIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5mb250LW1vbm8ge1xuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlO1xufVxuLnRleHQtc20ge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbn1cbi50ZXh0LXhsIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBsaW5lLWhlaWdodDogMS43NXJlbTtcbn1cbi50ZXh0LXhzIHtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBsaW5lLWhlaWdodDogMXJlbTtcbn1cbi5mb250LWJvbGQge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmZvbnQtbWVkaXVtIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5pdGFsaWMge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4ubGVhZGluZy10aWdodCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuLnRleHQtYmx1ZS02MDAge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYigzNyA5OSAyMzUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi50ZXh0LWdyYXktNzAwIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2IoNTUgNjUgODEgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi50ZXh0LXdoaXRlIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi51bmRlcmxpbmUge1xuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xufVxuLnNoYWRvdyB7XG4gIC0tdHctc2hhZG93OiAwIDFweCAzcHggMCByZ2IoMCAwIDAgLyAwLjEpLCAwIDFweCAycHggLTFweCByZ2IoMCAwIDAgLyAwLjEpO1xuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDFweCAzcHggMCB2YXIoLS10dy1zaGFkb3ctY29sb3IpLCAwIDFweCAycHggLTFweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xuICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO1xufVxuLnRyYW5zaXRpb24tc2hhZG93IHtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xufVxuXG46cm9vdHtcbiAgICAtLXJlZDogI2M3MDkwOTtcbn1cblxuLnJlZC14OjphZnRlcntcbiAgICBjb250ZW50OicnO1xuXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogMnB4O1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDcuNXB4O1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoNDVkZWcpO1xufVxuXG4ucmVkLXg6OmJlZm9yZXtcbiAgICBjb250ZW50OicnO1xuXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogMnB4O1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDcuNXB4O1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoLTQ1ZGVnKTtcbn1cblxuLmhvdmVyXFxcXDpib3JkZXItcmVkLTYwMDpob3ZlciB7XG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XG4gIGJvcmRlci1jb2xvcjogcmdiKDIyMCAzOCAzOCAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XG59XG5cbi5ob3ZlclxcXFw6YmctYmx1ZS03MDA6aG92ZXIge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSA3OCAyMTYgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG5cbi5ob3ZlclxcXFw6YmctZ3JhZGllbnQtdG8tYnI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCB2YXIoLS10dy1ncmFkaWVudC1zdG9wcykpO1xufVxuXG4uaG92ZXJcXFxcOnNoYWRvdy1tZDpob3ZlciB7XG4gIC0tdHctc2hhZG93OiAwIDRweCA2cHggLTFweCByZ2IoMCAwIDAgLyAwLjEpLCAwIDJweCA0cHggLTJweCByZ2IoMCAwIDAgLyAwLjEpO1xuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDRweCA2cHggLTFweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpLCAwIDJweCA0cHggLTJweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xuICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO1xufVxuXG4uaG92ZXJcXFxcOnNoYWRvdy1pbmRpZ28tMjAwOmhvdmVyIHtcbiAgLS10dy1zaGFkb3ctY29sb3I6ICNjN2QyZmU7XG4gIC0tdHctc2hhZG93OiB2YXIoLS10dy1zaGFkb3ctY29sb3JlZCk7XG59XG5cbi5mb2N1c1xcXFw6b3V0bGluZS1ub25lOmZvY3VzIHtcbiAgb3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBvdXRsaW5lLW9mZnNldDogMnB4O1xufVxuXG4uZm9jdXNcXFxcOnJpbmctNDpmb2N1cyB7XG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiB2YXIoLS10dy1yaW5nLWluc2V0KSAwIDAgMCB2YXIoLS10dy1yaW5nLW9mZnNldC13aWR0aCkgdmFyKC0tdHctcmluZy1vZmZzZXQtY29sb3IpO1xuICAtLXR3LXJpbmctc2hhZG93OiB2YXIoLS10dy1yaW5nLWluc2V0KSAwIDAgMCBjYWxjKDRweCArIHZhcigtLXR3LXJpbmctb2Zmc2V0LXdpZHRoKSkgdmFyKC0tdHctcmluZy1jb2xvcik7XG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdyksIHZhcigtLXR3LXJpbmctc2hhZG93KSwgdmFyKC0tdHctc2hhZG93LCAwIDAgIzAwMDApO1xufVxuXG4uZm9jdXNcXFxcOnJpbmctYmx1ZS0zMDA6Zm9jdXMge1xuICAtLXR3LXJpbmctb3BhY2l0eTogMTtcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2IoMTQ3IDE5NyAyNTMgLyB2YXIoLS10dy1yaW5nLW9wYWNpdHkpKTtcbn1cblxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuXG4gIC5kYXJrXFxcXDpmb2N1c1xcXFw6cmluZy1ibHVlLTgwMDpmb2N1cyB7XG4gICAgLS10dy1yaW5nLW9wYWNpdHk6IDE7XG4gICAgLS10dy1yaW5nLWNvbG9yOiByZ2IoMzAgNjQgMTc1IC8gdmFyKC0tdHctcmluZy1vcGFjaXR5KSk7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Q0FBYyxDQUFkOzs7Q0FBYzs7QUFBZDs7O0VBQUEsc0JBQWMsRUFBZCxNQUFjO0VBQWQsZUFBYyxFQUFkLE1BQWM7RUFBZCxtQkFBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7RUFBQSxnQkFBYztBQUFBOztBQUFkOzs7Ozs7O0NBQWM7O0FBQWQ7RUFBQSxnQkFBYyxFQUFkLE1BQWM7RUFBZCw4QkFBYyxFQUFkLE1BQWM7RUFBZCxnQkFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjO0tBQWQsV0FBYyxFQUFkLE1BQWM7RUFBZCw0TkFBYyxFQUFkLE1BQWM7RUFBZCw2QkFBYyxFQUFkLE1BQWM7RUFBZCwrQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSxTQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7RUFBQSxTQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSx5Q0FBYztVQUFkLGlDQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7Ozs7OztFQUFBLGtCQUFjO0VBQWQsb0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGNBQWM7RUFBZCx3QkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLG1CQUFjO0FBQUE7O0FBQWQ7Ozs7O0NBQWM7O0FBQWQ7Ozs7RUFBQSwrR0FBYyxFQUFkLE1BQWM7RUFBZCw2QkFBYyxFQUFkLE1BQWM7RUFBZCwrQkFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsY0FBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLGNBQWM7RUFBZCxjQUFjO0VBQWQsa0JBQWM7RUFBZCx3QkFBYztBQUFBOztBQUFkO0VBQUEsZUFBYztBQUFBOztBQUFkO0VBQUEsV0FBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjLEVBQWQsTUFBYztFQUFkLHFCQUFjLEVBQWQsTUFBYztFQUFkLHlCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7Ozs7O0VBQUEsb0JBQWMsRUFBZCxNQUFjO0VBQWQsOEJBQWMsRUFBZCxNQUFjO0VBQWQsZ0NBQWMsRUFBZCxNQUFjO0VBQWQsZUFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztFQUFkLFNBQWMsRUFBZCxNQUFjO0VBQWQsVUFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxvQkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDs7OztFQUFBLDBCQUFjLEVBQWQsTUFBYztFQUFkLDZCQUFjLEVBQWQsTUFBYztFQUFkLHNCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsYUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLHdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsWUFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLDZCQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsd0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSwwQkFBYyxFQUFkLE1BQWM7RUFBZCxhQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsa0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7Ozs7Ozs7Ozs7OztFQUFBLFNBQWM7QUFBQTs7QUFBZDtFQUFBLFNBQWM7RUFBZCxVQUFjO0FBQUE7O0FBQWQ7RUFBQSxVQUFjO0FBQUE7O0FBQWQ7OztFQUFBLGdCQUFjO0VBQWQsU0FBYztFQUFkLFVBQWM7QUFBQTs7QUFBZDs7Q0FBYztBQUFkO0VBQUEsVUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7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QUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLHdCQUFtQjtLQUFuQixxQkFBbUI7VUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLDREQUFtQjtFQUFuQixvRUFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvRUFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHFCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHFCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG1CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHFCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxtQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsMEVBQW1CO0VBQW5CLDhGQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLCtCQUFtQjtFQUFuQix3REFBbUI7RUFBbkI7QUFBbUI7O0FBRW5CO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFVBQVU7O0lBRVYscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsNEJBQTRCOztJQUU1QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFFBQVE7SUFDUix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxVQUFVOztJQUVWLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsV0FBVztJQUNYLDRCQUE0Qjs7SUFFNUIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixRQUFRO0lBQ1IsMENBQTBDO0FBQzlDOztBQWxDQTtFQUFBLHNCQWtDQztFQWxDRDtBQWtDQzs7QUFsQ0Q7RUFBQSxrQkFrQ0M7RUFsQ0Q7QUFrQ0M7O0FBbENEO0VBQUE7QUFrQ0M7O0FBbENEO0VBQUEsNkVBa0NDO0VBbENELGlHQWtDQztFQWxDRDtBQWtDQzs7QUFsQ0Q7RUFBQSwwQkFrQ0M7RUFsQ0Q7QUFrQ0M7O0FBbENEO0VBQUEsOEJBa0NDO0VBbENEO0FBa0NDOztBQWxDRDtFQUFBLDJHQWtDQztFQWxDRCx5R0FrQ0M7RUFsQ0Q7QUFrQ0M7O0FBbENEO0VBQUEsb0JBa0NDO0VBbENEO0FBa0NDOztBQWxDRDs7RUFBQTtJQUFBLG9CQWtDQztJQWxDRDtFQWtDQztBQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB0YWlsd2luZCBiYXNlO1xcbkB0YWlsd2luZCBjb21wb25lbnRzO1xcbkB0YWlsd2luZCB1dGlsaXRpZXM7XFxuXFxuOnJvb3R7XFxuICAgIC0tcmVkOiAjYzcwOTA5O1xcbn1cXG5cXG4ucmVkLXg6OmFmdGVye1xcbiAgICBjb250ZW50OicnO1xcblxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICB3aWR0aDogMTJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogNy41cHg7XFxuICAgIHRvcDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuLnJlZC14OjpiZWZvcmV7XFxuICAgIGNvbnRlbnQ6Jyc7XFxuXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIHdpZHRoOiAxMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiA3LjVweDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoLTQ1ZGVnKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmltcG9ydCBcIi4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzXCJcblxuaW1wb3J0IEFwcCBmcm9tIFwiLi9zcmMvQXBwXCI7XG5cbi8vIENsZWFyIHRoZSBleGlzdGluZyBIVE1MIGNvbnRlbnRcbmRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJzxkaXYgaWQ9XCJhcHBcIj48L2Rpdj4nO1xuXG4vLyBSZW5kZXIgUmVhY3QgY29tcG9uZW50IGluc3RlYWRcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSEpO1xucm9vdC5yZW5kZXIoXG4gICAgPFJlYWN0LlN0cmljdE1vZGU+XG4gICAgICAgIDxCcm93c2VyUm91dGVyPlxuICAgICAgICAgICAgPEFwcC8+XG4gICAgICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgICA8L1JlYWN0LlN0cmljdE1vZGU+XG4pOyIsImltcG9ydCBSZWFjdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXBwUm91dGVyIH0gICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuL3JvdXRlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY29udGFpbmVyIG14LWF1dG8gcHktNSBweC0yJ30+XG4gICAgICAgICAgICA8QXBwUm91dGVyLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuIiwiaW1wb3J0IHtOYXZMaW5rLCBPdXRsZXR9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgUmVhY3QsIHtSZWFjdE5vZGV9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKTpSZWFjdE5vZGUge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17J2dyaWQgZ3JpZC1jb2xzLW1haW4nfT5cbiAgICAgICAgICAgIHsvKiBBIFwibGF5b3V0IHJvdXRlXCIgaXMgYSBnb29kIHBsYWNlIHRvIHB1dCBtYXJrdXAgeW91IHdhbnQgdG9cbiAgICAgICAgICBzaGFyZSBhY3Jvc3MgYWxsIHRoZSBwYWdlcyBvbiB5b3VyIHNpdGUsIGxpa2UgbmF2aWdhdGlvbi4gKi99XG4gICAgICAgICAgICA8YXNpZGU+XG4gICAgICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17J2ZsZXggZmxleC1jb2wgZ2FwLXktMid9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL1wiICBjbGFzc05hbWU9eyh7aXNBY3RpdmV9KT0+IGlzQWN0aXZlID8gJ3VuZGVybGluZScgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+SG9tZTwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvbmV3LXBvc3RcIiBjbGFzc05hbWU9eyh7aXNBY3RpdmV9KT0+IGlzQWN0aXZlID8gJ3VuZGVybGluZScgOiAnJ30+Q3JlYXRlIE5ldyBQb3N0PC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIDwvYXNpZGU+XG5cblxuICAgICAgICAgICAgey8qIEFuIDxPdXRsZXQ+IHJlbmRlcnMgd2hhdGV2ZXIgY2hpbGQgcm91dGUgaXMgY3VycmVudGx5IGFjdGl2ZSxcbiAgICAgICAgICBzbyB5b3UgY2FuIHRoaW5rIGFib3V0IHRoaXMgPE91dGxldD4gYXMgYSBwbGFjZWhvbGRlciBmb3JcbiAgICAgICAgICB0aGUgY2hpbGQgcm91dGVzIHdlIGRlZmluZWQgYWJvdmUuICovfVxuICAgICAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8L21haW4+XG4gICAgKTtcbn0iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuaW1wb3J0IHsgdmVyaWZ5VG9rZW4sIHJlZnJlc2hUb2tlbiB9ICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9SZXF1ZXN0U2VydmljZS9SZXF1ZXN0c1NlcnZpY2VcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgICBjaGlsZHJlbjogUmVhY3RFbGVtZW50IHwgUmVhY3ROb2RlXG59O1xuZXhwb3J0IGNvbnN0IFJlcXVpcmVBdXRoOiBSZWFjdC5GQzxQcm9wcz4gPSAoe2NoaWxkcmVufTpQcm9wcyk9PiB7XG4gICAgY29uc3QgW2lzTG9hZGVkLCBzZXRJc0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gICAgY29uc3QgY2hlY2tUb2tlbklzT2sgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB2ZXJpZnlUb2tlbigpOyAvL2JsYW5rIHJlcXVlc3QgdG8gcHJvdGVjdGVkIGp3dCBhcGkgcm91dGUsIHRvIHZlcmlmeSB0b2tlbiBpcyB2YWxpZFxuICAgICAgICB9IGNhdGNoIChlcnJvcil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgJ1RyeWluZyB0byByZWZyZXNoIHRva2VuLi4uJylcbiAgICAgICAgICAgIGF3YWl0IGdldE5ld1Rva2VuKCk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBzZXRJc0xvYWRlZCh0cnVlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TmV3VG9rZW4gPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVmcmVzaFRva2VuKCk7XG4gICAgICAgICAgICBjb25zdCB7dG9rZW59ID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbik7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUb2tlbiBmYWlsZWQgdG8gcmVmcmVzaCcsIGVycm9yKVxuICAgICAgICAgICAgbmF2aWdhdGUoXCIvc2lnbi1pblwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNoZWNrVG9rZW5Jc09rKCk7XG4gICAgfSwgW2NoaWxkcmVuXSk7XG5cblxuICAgIGlmICghaXNMb2FkZWQpIHtcbiAgICAgICAgcmV0dXJuIDxoMT5Mb2FkaW5nLi4uPC9oMT47XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkcmVuO1xufTsiLCJpbXBvcnQgUmVhY3QsIHtNb3VzZUV2ZW50SGFuZGxlciwgUmVhY3RFbGVtZW50LCBSZWZPYmplY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xuXG50eXBlIFByb3BzID0ge1xuICAgIGFkZFRhZzogKGlucHV0UmVmOlJlZk9iamVjdDxhbnk+KSA9PiB2b2lkLFxuICAgIHRhZ3M6IHN0cmluZ1tdLFxuICAgIGRlbGV0ZVRhZzogKGluZGV4Om51bWJlcikgPT4gdm9pZCxcbn1cblxuXG50eXBlIERlbGV0ZUZ1bmN0aW9uID0gKGluZGV4OiBudW1iZXIpID0+IHZvaWQ7XG5mdW5jdGlvbiBUYWdzU2VsZWN0KHthZGRUYWcsIHRhZ3MsIGRlbGV0ZVRhZ306UHJvcHMpIHtcblxuICAgIGNvbnN0IHRhZ3NJbnB1dFJlZiA9IHVzZVJlZihudWxsKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9eydwdC01IGZsZXggZmxleC1jb2wgZ2FwLTIgbWItNSd9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydmbGV4IHctZnVsbCBtYXgtdy1bNDAwcHhdIGp1c3RpZnktYmV0d2Vlbid9PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyd3LWZ1bGwgbWF4LXctWzI5MHB4XSBib3JkZXIgcm91bmRlZC1tZCBwLTInfVxuICAgICAgICAgICAgICAgICAgICByZWY9e3RhZ3NJbnB1dFJlZn1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eydXcml0ZSBhIHRhZywgZm9yIGV4YW1wbGU6IFR5cGVTY3JpcHQnfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPXsndGV4dCd9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J3ctZnVsbCBtYXgtdy1bOTBweF0gYm9yZGVyIHJvdW5kZWQtbWQgcC0yJ31cbiAgICAgICAgICAgICAgICAgICAgdHlwZT17XCJidXR0b25cIn1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWRkVGFnKHRhZ3NJbnB1dFJlZil9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBBZGQgYSB0YWdcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydmbGV4IHctZnVsbCBtYXgtdy1bNDAwcHhdIGdhcC0yICBmbGV4LXdyYXAnfT5cbiAgICAgICAgICAgICAgICB7cmVuZGVyVGFncyh0YWdzLCBkZWxldGVUYWcpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZmllbGRzZXQ+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVGFncyh0YWdzOnN0cmluZ1tdLCBkZWxldGVUYWc6RGVsZXRlRnVuY3Rpb24pOlJlYWN0RWxlbWVudFtde1xuICAgIHJldHVybiB0YWdzLm1hcCgodGFnLCBpbmRleCApPT4ge1xuICAgICAgICByZXR1cm4gPGJ1dHRvbiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e1wiYm9yZGVyIHJvdW5kZWQtbWQgcC0yIHByLVs0MHB4XSByZWxhdGl2ZSByZWQteCBob3Zlcjpib3JkZXItcmVkLTYwMFwifSB0eXBlPXtcImJ1dHRvblwifSBvbkNsaWNrPXsoKSA9PiBkZWxldGVUYWcoaW5kZXgpfT57dGFnfTwvYnV0dG9uPlxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhZ3NTZWxlY3Q7XG5cbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3QsIFJlYWN0RWxlbWVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0QWxsUG9zdHMgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi9zZXJ2aWNlcy9SZXF1ZXN0U2VydmljZS9SZXF1ZXN0c1NlcnZpY2UnO1xuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG50eXBlIEF1dGhvciA9IHtcbiAgICB1c2VybmFtZTogc3RyaW5nLFxuICAgIF9pZDogc3RyaW5nLFxufVxuXG50eXBlIFBvc3QgPSB7XG4gICAgX2lkOiBzdHJpbmcsXG4gICAgYm9keTogc3RyaW5nLFxuICAgIHRpdGxlOnN0cmluZyxcbiAgICBzdGF0dXM6bnVtYmVyLFxuICAgIGF1dGhvcl9pZDogQXV0aG9yLFxuICAgIGNyZWF0ZWRfYXQ6IHN0cmluZyxcbn1cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgW2lzTG9hZGVkLCBzZXRJc0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICB1c2VFZmZlY3QoICgpPT4ge1xuICAgICAgICBnZXRQb3N0cygpO1xuICAgIH0sIFtdKVxuXG4gICAgY29uc3QgZ2V0UG9zdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldEFsbFBvc3RzKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzZXRQb3N0cyhyZXNwb25zZS5kYXRhKVxuICAgICAgICB9IGNhdGNoIChlcnJvcil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHNldElzTG9hZGVkKHRydWUpXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJldHVybiAhaXNMb2FkZWQgPyA8cD5Mb2FkaW5nLi4uPC9wPiA6IChcbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICB7cmVuZGVyUG9zdHMocG9zdHMpfVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbn1cblxuXG5mdW5jdGlvbiByZW5kZXJQb3N0cyhwb3N0czpBcnJheTxQb3N0Pik6QXJyYXk8UmVhY3RFbGVtZW50PiB7XG4gICAgcmV0dXJuIHBvc3RzLm1hcChpdGVtID0+IHtcbiAgICAgICAgY29uc3Qge19pZCwgYm9keSwgdGl0bGUsIHN0YXR1cywgYXV0aG9yX2lkLCBjcmVhdGVkX2F0fSA9IGl0ZW07XG4gICAgICAgIGNvbnN0IGh0bWxUZXh0TGltaXRlZCA9IGJvZHkuc2xpY2UoMCwgMzAwKTtcbiAgICAgICAgY29uc3QgdGV4dEZyb21IdG1sID0gcmVtb3ZlSFRNTFRhZ3MoaHRtbFRleHRMaW1pdGVkKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMaW5rIHRvPXtgL3Bvc3QvJHtfaWR9YH0+XG4gICAgICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXsndy1mdWxsIG1heC13LVs2MDBweF0gcC0zIG1iLTUgZmxleCBmbGV4LWNvbCBnYXAtMiByb3VuZGVkLW1kIHNoYWRvdyBjdXJzb3ItcG9pbnRlciAgaG92ZXI6c2hhZG93LW1kIGhvdmVyOnNoYWRvdy1pbmRpZ28tMjAwIHRyYW5zaXRpb24tc2hhZG93J30gb25DbGljaz17KCkgPT4gX2lkfSBrZXk9e19pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZmxleCBqdXN0aWZ5LWJldHdlZW4gYWxpZ24tbWlkZGxlJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXsndGV4dC14bCd9Pnt0aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgaW5saW5lLWJsb2NrIHctMyBoLTMgcm91bmRlZC1mdWxsICR7c3RhdHVzID09PSAxID8gJ2JnLWFtYmVyLTUwMCcgOiAnYmctZW1lcmFsZC01MDAnfWB9Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17J2l0YWxpYyB0ZXh0LWJsdWUtNjAwJ30+e2BieTogJHthdXRob3JfaWQudXNlcm5hbWV9YH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17J2xpbmUtY2xhbXAtMyd9Pnt0ZXh0RnJvbUh0bWx9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9eyd0ZXh0LXJpZ2h0IGZvbnQtbW9ubyB0ZXh0LXhzJ30+e2dldEZvcm1hdHRlZERhdGUoY3JlYXRlZF9hdCl9PC9wPlxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKVxuICAgIH0pLnJldmVyc2UoKVxufVxuXG5mdW5jdGlvbiByZW1vdmVIVE1MVGFncyhodG1sOnN0cmluZyk6c3RyaW5ne1xuICAgIGNvbnN0IHJlZ1ggPSAvKDwoW14+XSspPnwmW2EtekEtWjAtOV0rOykvaWc7XG4gICAgcmV0dXJuIGh0bWwucmVwbGFjZShyZWdYLCBcIlwiKTtcbn1cbmZ1bmN0aW9uIGdldEZvcm1hdHRlZERhdGUoY3JlYXRlZF9hdDpzdHJpbmcpOnN0cmluZ3tcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoY3JlYXRlZF9hdCk7XG4gICAgcmV0dXJuIFtkYXRlLmdldE1vbnRoKCkrMSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0RnVsbFllYXIoKV0uam9pbignLicpICsgJyAnKyBbZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSxdLmpvaW4oJzonKTtcbn1cbmV4cG9ydCBkZWZhdWx0IEhvbWU7IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIFN5bnRoZXRpY0V2ZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gICAgICAgICAgICAgICAgICAgZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuaW1wb3J0IHsgc2VuZExvZ2luIH0gICAgICAgICAgICAgICAgICAgICBmcm9tIFwiLi4vLi4vc2VydmljZXMvUmVxdWVzdFNlcnZpY2UvUmVxdWVzdHNTZXJ2aWNlXCI7XG5cbmZ1bmN0aW9uIExvZ2luUGFnZSgpIHtcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgICBjb25zdCBzZXRUb2tlbiA9ICh0b2tlbjpzdHJpbmcpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pXG4gICAgfVxuXG4gICAgY29uc3Qgb25JbnB1dENoYW5nZSA9IChldmVudDogU3ludGhldGljRXZlbnQpID0+IHtcbiAgICAgICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGV2ZW50LnRhcmdldCBhcyBIVE1MQnV0dG9uRWxlbWVudDtcblxuICAgICAgICByZXR1cm4gbmFtZSA9PT0gJ3VzZXJuYW1lJyA/IHNldFVzZXJuYW1lKHZhbHVlKSA6IHNldFBhc3N3b3JkKHZhbHVlKTtcbiAgICB9XG4gICAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50KSA9PiB7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICAgICAgICAgICAgcGFzc3dvcmQsIHVzZXJuYW1lLCBpc19hdXRob3I6IHRydWUsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgc2VuZExvZ2luKHBheWxvYWQpO1xuICAgICAgICAgICAgY29uc3Qge3Rva2VufSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICBzZXRUb2tlbih0b2tlbik7XG5cbiAgICAgICAgICAgIG5hdmlnYXRlKCcvJylcbiAgICAgICAgfSBjYXRjaCAoZXJyb3Ipe1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy14c1wiPlxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwicHgtOCBwdC02IHBiLTggbWItNFwiIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIiBodG1sRm9yPVwidXNlcm5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJuYW1lXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiIGlkPVwidXNlcm5hbWVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiBuYW1lPXsndXNlcm5hbWUnfSB2YWx1ZT17dXNlcm5hbWV9IG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIiBodG1sRm9yPVwicGFzc3dvcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBtYi0zIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCIgaWQ9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiKioqKioqKipcIiBuYW1lPXsncGFzc3dvcmQnfSB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIiB0eXBlPVwic3VibWl0XCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiBJblxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luUGFnZTsiLCJpbXBvcnQgUmVhY3QsIHtcbiAgICB1c2VTdGF0ZSxcbiAgICBSZWFjdEVsZW1lbnQsXG4gICAgU3ludGhldGljRXZlbnQsXG4gICAgUmVmT2JqZWN0XG59ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IENyZWF0ZVVwZGF0ZVBvc3RDb250ZW50ICBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9DcmVhdGVVcGRhdGVQb3N0Q29udGVudC9DcmVhdGVVcGRhdGVQb3N0Q29udGVudFwiO1xuaW1wb3J0IFRhZ3NTZWxlY3QgICAgICAgICAgICAgICBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9UYWdzU2VsZWN0L1RhZ3NTZWxlY3RcIjtcblxuaW1wb3J0IHsgY3JlYXRlUG9zdCB9ICAgICAgICAgICBmcm9tIFwiLi4vLi4vc2VydmljZXMvUmVxdWVzdFNlcnZpY2UvUmVxdWVzdHNTZXJ2aWNlXCI7XG5cbnR5cGUgUG9zdCA9IHtcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIGJvZHk6IHN0cmluZyxcbiAgICB0YWdzOiBzdHJpbmdbXSxcbn1cblxudHlwZSBEZWxldGVGdW5jdGlvbiA9IChpbmRleDogbnVtYmVyKSA9PiB2b2lkO1xudHlwZSBTdWJtaXRGdW5jdGlvbiA9IChlOiBTeW50aGV0aWNFdmVudCkgPT4gdm9pZDtcbmZ1bmN0aW9uIE5ld1Bvc3QoKTpSZWFjdEVsZW1lbnQge1xuICAgIGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2JvZHksIHNldEJvZHldID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFt0YWdzLCBzZXRUYWdzXSA9IHVzZVN0YXRlKFsnSlMnLCAnSFRNTCcsIF0pO1xuXG4gICAgY29uc3QgZGVsZXRlVGFnOkRlbGV0ZUZ1bmN0aW9uID0gKGluZGV4KSA9PiB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc29sZS5sb2codGFncy50b1NwbGljZWQoaW5kZXgsIDEpKVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHNldFRhZ3ModGFncy50b1NwbGljZWQoaW5kZXgsIDEpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkVGFnID0gKGlucHV0UmVmOlJlZk9iamVjdDxhbnk+KTp2b2lkICA9PiB7XG4gICAgICAgIGNvbnN0IGlucHV0OkhUTUxJbnB1dEVsZW1lbnQgPSBpbnB1dFJlZi5jdXJyZW50ITtcbiAgICAgICAgY29uc3QgdmFsdWU6c3RyaW5nID0gaW5wdXQudmFsdWU7XG4gICAgICAgIGNvbnN0IHZhbHVlSXNFbXB0eTpib29sZWFuID0gIXZhbHVlLnRyaW0oKTtcblxuICAgICAgICBpZih2YWx1ZUlzRW1wdHkpe1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBzZXRUYWdzKFsuLi50YWdzLCB2YWx1ZV0pXG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXRGb3JtID0gKCkgPT4ge1xuICAgICAgICBzZXRUaXRsZSgnJyk7XG4gICAgICAgIHNldEJvZHkoJycpO1xuICAgICAgICBzZXRUYWdzKFsnSlMnLCAnSFRNTCcsIF0pO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdDpTdWJtaXRGdW5jdGlvbiA9IGFzeW5jIChlKSA9PiB7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIHNldElzTG9hZGVkKGZhbHNlKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgY29uc3QgcG9zdDpQb3N0ID0ge1xuICAgICAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgICAgIGJvZHksXG4gICAgICAgICAgICAgICAgdGFnc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXdhaXQgY3JlYXRlUG9zdChwb3N0KTtcbiAgICAgICAgICAgIHJlc2V0Rm9ybSgpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBzZXRJc0xvYWRlZCh0cnVlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYoIWlzTG9hZGVkKXtcbiAgICAgICAgcmV0dXJuIDxwPi4uLkxvYWRpbmc8L3A+XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXsnc2hhZG93IHAtNSByb3VuZGVkLXhsJ30+XG4gICAgICAgICAgICA8Q3JlYXRlVXBkYXRlUG9zdENvbnRlbnRcbiAgICAgICAgICAgICAgICBvblRpdGxlQ2hhbmdlPXsoZTpTeW50aGV0aWNFdmVudCkgPT4gc2V0VGl0bGUoKGUudGFyZ2V0IGFzIEhUTUxCdXR0b25FbGVtZW50KS52YWx1ZSApfVxuICAgICAgICAgICAgICAgIG9uRWRpdG9yQ2hhbmdlPXsodmFsdWU6c3RyaW5nKSA9PiBzZXRCb2R5KHZhbHVlKX1cbiAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRhZ3NTZWxlY3RcbiAgICAgICAgICAgICAgICBkZWxldGVUYWc9e2RlbGV0ZVRhZ31cbiAgICAgICAgICAgICAgICBhZGRUYWc9e2FkZFRhZ31cbiAgICAgICAgICAgICAgICB0YWdzPXt0YWdzfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPXsnc3VibWl0J30gb25DbGljaz17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibHVlLTUwMCB2aWEtYmx1ZS02MDAgdG8tYmx1ZS03MDAgaG92ZXI6YmctZ3JhZGllbnQtdG8tYnIgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWJsdWUtMzAwIGRhcms6Zm9jdXM6cmluZy1ibHVlLTgwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS0yLjUgdGV4dC1jZW50ZXIgbWUtMiBtYi0yIFwiPkNyZWF0ZSBuZXcgcG9zdDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IE5ld1Bvc3Q7IiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBQb3N0KCkge1xuICAgIGNvbnN0IFtwb3N0LCBzZXRQb3N0XSA9IHVzZVN0YXRlKHt9KTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKClcbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+PC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdDsiLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gICAgICAgICBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Um91dGUsIFJvdXRlc30gICAgICAgICAgICAgIGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmltcG9ydCB7UmVxdWlyZUF1dGh9ICAgICAgICAgICAgICAgIGZyb20gXCIuL2NvbXBvbmVudHMvUmVxdWlyZUF1dGgvUmVxdWlyZUF1dGhcIjtcblxuaW1wb3J0IExheW91dCAgICAgICAgICAgICAgICAgICAgICAgZnJvbSBcIi4vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0XCJcbmltcG9ydCBOZXdQb3N0ICAgICAgICAgICAgICAgICAgICAgIGZyb20gXCIuL21vZHVsZXMvTmV3UG9zdC9OZXdQb3N0XCI7XG5pbXBvcnQgUGFnZTQwNCAgICAgICAgICAgICAgICAgICAgICBmcm9tIFwiLi9jb21wb25lbnRzL1BhZ2U0MDQvUGFnZTQwNFwiO1xuaW1wb3J0IEhvbWUgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSBcIi4vbW9kdWxlcy9Ib21lL0hvbWVcIjtcbmltcG9ydCBMb2dpblBhZ2UgICAgICAgICAgICAgICAgICAgIGZyb20gXCIuL21vZHVsZXMvTG9naW5QYWdlL0xvZ2luUGFnZVwiO1xuaW1wb3J0IFBvc3QgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSBcIi4vbW9kdWxlcy9Qb3N0L1Bvc3RcIjtcblxuLy9UT0RPOiBpbmRpdmlkdWFsIHBvc3QgcGFnZSBhbmQgYmUgYWJsZTpcbi8vICAgICAgLWRlbGV0ZSBwb3N0XG4vLyAgICAgIC1jaGFuZ2Ugc3RhdHVzXG4vLyAgICAgIC1jaGFuZ2UgY29udGVudFxuLy8gICAgICAtbW9kZXJhdGUgY29tbWVudHNcbi8vRklOSVNIP1xuZXhwb3J0IGZ1bmN0aW9uIEFwcFJvdXRlcigpOlJlYWN0Tm9kZSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxMYXlvdXQgLz59PlxuICAgICAgICAgICAgICAgIHsgcHJvdGVjdGVkUm91dGVzKCkgfVxuICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiPlxuICAgICAgICAgICAgICAgIHsgdW5wcm90ZWN0ZWRSb3V0ZXMoKSB9XG4gICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICA8L1JvdXRlcz5cbiAgICApXG5cbn1cblxuZnVuY3Rpb24gcHJvdGVjdGVkUm91dGVzKCk6UmVhY3ROb2Rle1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8Um91dGUgaW5kZXggZWxlbWVudD17XG4gICAgICAgICAgICAgICAgPFJlcXVpcmVBdXRoPlxuICAgICAgICAgICAgICAgICAgICA8SG9tZS8+XG4gICAgICAgICAgICAgICAgPC9SZXF1aXJlQXV0aD5cbiAgICAgICAgICAgIH0vPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9eyduZXctcG9zdCd9IGVsZW1lbnQ9e1xuICAgICAgICAgICAgICAgIDxSZXF1aXJlQXV0aD5cbiAgICAgICAgICAgICAgICAgICAgPE5ld1Bvc3QvPlxuICAgICAgICAgICAgICAgIDwvUmVxdWlyZUF1dGg+XG4gICAgICAgICAgICB9Lz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPXsnL3Bvc3QvOmlkJ30gZWxlbWVudD17XG4gICAgICAgICAgICAgICAgPFJlcXVpcmVBdXRoPlxuICAgICAgICAgICAgICAgICAgICA8UG9zdC8+XG4gICAgICAgICAgICAgICAgPC9SZXF1aXJlQXV0aD5cbiAgICAgICAgICAgIH0vPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmZ1bmN0aW9uIHVucHJvdGVjdGVkUm91dGVzKCk6UmVhY3ROb2Rle1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD17J3NpZ24taW4nfSBlbGVtZW50PXtcbiAgICAgICAgICAgICAgICA8TG9naW5QYWdlLz5cbiAgICAgICAgICAgIH0vPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9eycqJ30gZWxlbWVudD17XG4gICAgICAgICAgICAgICAgPFBhZ2U0MDQvPlxuICAgICAgICAgICAgfS8+XG4gICAgICAgIDwvPlxuICAgIClcbn0iLCJpbXBvcnQgYXhpb3MgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7XG4gICAgUE9TVFMsXG4gICAgTE9HSU4sXG4gICAgVkVSSUZZX0pXVCxcbiAgICBSRUZSRVNIX1RPS0VOLFxufSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSBcIi4vcm91dGVzQXBpXCI7XG5cbnR5cGUgTG9naW5QYXlsb2FkID0ge1xuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG4gICAgcGFzc3dvcmQ6IHN0cmluZztcbiAgICBpc19hdXRob3I6IGJvb2xlYW47XG59O1xuXG50eXBlIFBvc3RQYXlsb2FkID0ge1xuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgYm9keTogc3RyaW5nLFxuICAgIHRhZ3M6IHN0cmluZ1tdLFxufVxuY29uc3QgYXhpb3NJbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSgpO1xuXG5heGlvc0luc3RhbmNlLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShcbiAgICAoY29uZmlnKSA9PiB7XG4gICAgICAgIGNvbnN0IGF1dGhUb2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICAgICAgICBpZiAoYXV0aFRva2VuKSB7XG4gICAgICAgICAgICBjb25maWcuaGVhZGVycy5BdXRob3JpemF0aW9uID0gYEJlYXJlciAke2F1dGhUb2tlbn1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb25maWc7XG4gICAgfSxcbiAgICAoZXJyb3IpID0+IFByb21pc2UucmVqZWN0KGVycm9yKVxuKTtcblxuY29uc3QgeyBnZXQsIHBvc3QsIHB1dCwgZGVsZXRlOiBkZWwsIH0gPSBheGlvc0luc3RhbmNlO1xuZXhwb3J0IGNvbnN0IGdldEFsbFBvc3RzID0gKCkgPT4ge1xuICAgIHJldHVybiBnZXQoUE9TVFMpO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U2luZ2xlUG9zdCA9IChpZDpzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gZ2V0KGAke1BPU1RTfS8ke2lkfWApO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlUG9zdCA9IChwYXlsb2FkOlBvc3RQYXlsb2FkKSA9PiB7XG4gICAgcmV0dXJuIHBvc3QoUE9TVFMsIHBheWxvYWQpO1xufVxuXG5leHBvcnQgY29uc3Qgc2VuZExvZ2luID0gKG9iajogTG9naW5QYXlsb2FkKSA9PiB7XG4gICAgcmV0dXJuIHBvc3QoTE9HSU4sIG9iaik7XG59XG5leHBvcnQgY29uc3QgdmVyaWZ5VG9rZW4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIGdldChWRVJJRllfSldUKTtcbn1cbmV4cG9ydCBjb25zdCByZWZyZXNoVG9rZW4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIGdldChSRUZSRVNIX1RPS0VOKTtcbn0iLCJleHBvcnQgY29uc3QgQVBJX0dMT0JBTCA9ICcvYXBpJztcblxuZXhwb3J0IGNvbnN0IFVTRVJTID0gYCR7QVBJX0dMT0JBTH0vdXNlcnNgXG5leHBvcnQgY29uc3QgQVVUSE9SUyA9IGAke0FQSV9HTE9CQUx9L2F1dGhvcnNgXG5leHBvcnQgY29uc3QgUE9TVFMgPSBgJHtBUElfR0xPQkFMfS9wb3N0c2BcbmV4cG9ydCBjb25zdCBQT1NUU19DT01NRU5UUyA9IGAke0FQSV9HTE9CQUx9L3Bvc3RzLWNvbW1lbnRzYFxuZXhwb3J0IGNvbnN0IFBPU1RTX0xJS0VTID0gYCR7QVBJX0dMT0JBTH0vcG9zdHMtbGlrZXNgXG5cbmV4cG9ydCBjb25zdCBMT0dJTiA9IGAvbG9naW5gO1xuZXhwb3J0IGNvbnN0IFJFRlJFU0hfVE9LRU4gPSBgL3JlZnJlc2hgO1xuZXhwb3J0IGNvbnN0IFZFUklGWV9KV1QgPSBgJHtBUElfR0xPQkFMfS92ZXJpZnktand0YCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsInZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiA/IChvYmopID0+IChPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSkgOiAob2JqKSA9PiAob2JqLl9fcHJvdG9fXyk7XG52YXIgbGVhZlByb3RvdHlwZXM7XG4vLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLy8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8vIG1vZGUgJiAxNjogcmV0dXJuIHZhbHVlIHdoZW4gaXQncyBQcm9taXNlLWxpa2Vcbi8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbl9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG5cdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IHRoaXModmFsdWUpO1xuXHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuXHRpZih0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlKSB7XG5cdFx0aWYoKG1vZGUgJiA0KSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG5cdFx0aWYoKG1vZGUgJiAxNikgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbicpIHJldHVybiB2YWx1ZTtcblx0fVxuXHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuXHR2YXIgZGVmID0ge307XG5cdGxlYWZQcm90b3R5cGVzID0gbGVhZlByb3RvdHlwZXMgfHwgW251bGwsIGdldFByb3RvKHt9KSwgZ2V0UHJvdG8oW10pLCBnZXRQcm90byhnZXRQcm90byldO1xuXHRmb3IodmFyIGN1cnJlbnQgPSBtb2RlICYgMiAmJiB2YWx1ZTsgdHlwZW9mIGN1cnJlbnQgPT0gJ29iamVjdCcgJiYgIX5sZWFmUHJvdG90eXBlcy5pbmRleE9mKGN1cnJlbnQpOyBjdXJyZW50ID0gZ2V0UHJvdG8oY3VycmVudCkpIHtcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhjdXJyZW50KS5mb3JFYWNoKChrZXkpID0+IChkZWZba2V5XSA9ICgpID0+ICh2YWx1ZVtrZXldKSkpO1xuXHR9XG5cdGRlZlsnZGVmYXVsdCddID0gKCkgPT4gKHZhbHVlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBkZWYpO1xuXHRyZXR1cm4gbnM7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2NvZGVneV9hZG1pbmVyXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2NvZGVneV9hZG1pbmVyXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInRpbnltY2VcIixcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3RpbnltY2VfdGlueW1jZS1yZWFjdF9saWJfZXMyMDE1X21haW5fdHNfaW5kZXhfanMtbm9kZV9tb2R1bGVzX3Jhdy1sb2FkZS1lYTdiOTFcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9pbmRleC50c3hcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJSZWFjdCIsIkVkaXRvciIsInRpbnltY2UiLCJjb250ZW50Q3NzIiwiY29udGVudFVpQ3NzIiwiQnVuZGxlZEVkaXRvciIsInByb3BzIiwiaW5pdCIsInJlc3QiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJjcmVhdGVFbGVtZW50IiwiX2V4dGVuZHMiLCJfb2JqZWN0U3ByZWFkIiwic2tpbiIsImNvbnRlbnRfY3NzIiwiY29udGVudF9zdHlsZSIsImpvaW4iLCJDcmVhdGVVcGRhdGVQb3N0Q29udGVudCIsIm9uVGl0bGVDaGFuZ2UiLCJvbkVkaXRvckNoYW5nZSIsInRpdGxlIiwiaW5pdGlhbEVkaXRvclZhbHVlIiwiY2xhc3NOYW1lIiwiaHRtbEZvciIsInR5cGUiLCJpZCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ2YWx1ZSIsImluaXRpYWxWYWx1ZSIsInNldHVwIiwiZWQiLCJvbiIsImUiLCJnZXRDb250ZW50IiwiaGVpZ2h0IiwibWVudWJhciIsInBsdWdpbnMiLCJ0b29sYmFyIiwiUGFnZTQwNCJdLCJzb3VyY2VSb290IjoiIn0=