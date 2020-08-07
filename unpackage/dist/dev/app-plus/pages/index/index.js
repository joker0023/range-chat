"use weex:vue";
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*******************************************************************************!*\
  !*** D:/project/vue-demo/range-chat/main.js?{"page":"pages%2Findex%2Findex"} ***!
  \*******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/index/index.nvue?mpType=page */ 4);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            const promise = this.constructor\n            return this.then(\n              value => promise.resolve(callback()).then(() => value),\n              reason => promise.resolve(callback()).then(() => {\n                throw reason\n              })\n            )\n          }\n        }\n        _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/index/index'\n        _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQThEO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkVBQUc7QUFDWCxRQUFRLDJFQUFHO0FBQ1gsUUFBUSwyRUFBRztBQUNYLGdCQUFnQiwyRUFBRyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9pbmRleC9pbmRleC5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBpZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmICFQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5KSB7XG4gICAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5jb25zdHJ1Y3RvclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbihcbiAgICAgICAgICAgICAgdmFsdWUgPT4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oKCkgPT4gdmFsdWUpLFxuICAgICAgICAgICAgICByZWFzb24gPT4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRocm93IHJlYXNvblxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBBcHAubXBUeXBlID0gJ3BhZ2UnXG4gICAgICAgIEFwcC5yb3V0ZSA9ICdwYWdlcy9pbmRleC9pbmRleCdcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!******************************************************************!*\
  !*** D:/project/vue-demo/range-chat/main.js?{"type":"appStyle"} ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************************************************************!*\
  !*** D:/project/vue-demo/range-chat/App.vue?vue&type=style&index=0&lang=css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/project/vue-demo/range-chat/App.vue?vue&type=style&index=0&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 4 */
/*!*************************************************************************!*\
  !*** D:/project/vue-demo/range-chat/pages/index/index.nvue?mpType=page ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.nvue?vue&type=template&id=7b909402&mpType=page */ 5);\n/* harmony import */ var _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.nvue?vue&type=script&lang=js&mpType=page */ 7);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&lang=css&mpType=page */ 10).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&lang=css&mpType=page */ 10).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"2a83a50e\",\n  false,\n  _index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/index/index.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGtFQUEwRDtBQUM5RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsa0VBQTBEO0FBQ25IOztBQUVBOztBQUVBO0FBQ29MO0FBQ3BMLGdCQUFnQiwyTEFBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdiOTA5NDAyJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjJhODNhNTBlXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2luZGV4L2luZGV4Lm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!*******************************************************************************************************!*\
  !*** D:/project/vue-demo/range-chat/pages/index/index.nvue?vue&type=template&id=7b909402&mpType=page ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=template&id=7b909402&mpType=page */ 6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 6 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/project/vue-demo/range-chat/pages/index/index.nvue?vue&type=template&id=7b909402&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c("view", [
        _c("view", { staticClass: ["main"] }, [
          _c(
            "view",
            { staticClass: ["map-container"] },
            [
              _c("map", {
                staticClass: ["map"],
                attrs: {
                  id: "map",
                  showLocation: "true",
                  markers: _vm.markers
                },
                on: { callouttap: _vm.callouttap }
              })
            ],
            1
          ),
          _c(
            "view",
            { staticClass: ["input"] },
            [
              _c("u-input", {
                staticClass: ["message"],
                attrs: { type: "text", maxlength: "128", value: _vm.message },
                on: {
                  input: function($event) {
                    _vm.message = $event.detail.value
                  }
                }
              }),
              _c(
                "button",
                {
                  staticClass: ["send-btn"],
                  attrs: { type: "primary", size: "mini" },
                  on: { click: _vm.send }
                },
                [_vm._v("吐槽")]
              )
            ],
            1
          )
        ])
      ])
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 7 */
/*!*************************************************************************************************!*\
  !*** D:/project/vue-demo/range-chat/pages/index/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1lLENBQWdCLCtmQUFHLEVBQUMiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/project/vue-demo/range-chat/pages/index/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === \"Object\" && o.constructor) n = o.constructor.name;if (n === \"Map\" || n === \"Set\") return Array.from(n);if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      message: '',\n      mapcontext: null,\n      markers: [],\n      markerObjs: {},\n      messageList: [] };\n\n  },\n  methods: {\n    send: function send() {\n      var self = this;\n\n\n      //test\n      // var m1 = {\n      // \tid: 1,\n      // \tlatitude: 23.073825,\n      // \tlongitude: 113.286723,\n      // \ticonPath: '/static/marker.png',\n      // \ttimeStamp: Date.now(),\n      // \tcallout: {\n      // \t\tdisplay: 'ALWAYS',\n      // \t\tcolor: '#999',\n      // \t\tpadding: 5,\n      // \t\tborderRadius: 10,\n      // \t\tfontSize: 14,\n      // \t\tcontent: 'test',\n      // \t\tbgColor: '#00FFFF'\n      // \t},\n      // };\n      // self.markers = [m1];\n      // self.markers = [...self.markers];\n\n      // setTimeout(()=>{\n      // \tself.markers = [];\n      // }, 3000)\n\n      // return;\n      //test\n\n      if (!self.message) {\n        return;\n      }\n      if (self.message.length > 40) {\n        uni.showToast({\n          title: '吐槽内容不能超过40字',\n          icon: 'none' });\n\n        return;\n      }\n\n      if (self.message.length > 20) {\n        var tmpMsg = self.message;\n        tmpMsg = tmpMsg.substr(0, 20) + '\\n' + tmpMsg.substr(20);\n        self.message = tmpMsg;\n      }\n\n      self.reoladPosition(function () {\n        self.messageList.unshift({\n          latitude: self.latitude,\n          longitude: self.longitude,\n          message: self.message });\n\n        self.sendWsMsg(self.message);\n        self.message = '';\n\n        // console.log(self.message);\n        // console.log(self.latitude, self.longitude);\n      });\n    },\n    showCallout: function showCallout() {\n      // console.log('=== showCallout ===');\n      var self = this;\n      var tmpMarkers = [];\n      self.markers.forEach(function (obj) {\n        var now = Date.now();\n        if (now - obj.timeStamp < 7000) {\n          tmpMarkers.push(obj);\n        }\n      });\n      for (var i = 0; i < 10; i++) {\n        var msgObj = self.messageList.shift();\n        if (!msgObj) {\n          break;\n        }\n        var marker = self.createMarker(null, msgObj.message, msgObj.latitude, msgObj.longitude);\n        tmpMarkers.push(marker);\n      }\n\n      self.markerObjs = {};\n      var id = 1;\n      tmpMarkers.forEach(function (obj) {\n        obj.id = id;\n        self.markerObjs[id] = obj;\n        id++;\n      });\n      self.markers = tmpMarkers;\n      setTimeout(function () {\n        self.markers = _toConsumableArray(self.markers);\n      }, 5);\n\n\n      //console markers\n      // self.markers.forEach(obj => {\n      // \tconsole.log(obj.id);\n      // });\n      //console end\n\n      setTimeout(function () {\n        self.showCallout();\n      }, 500);\n    },\n    createMarker: function createMarker(id, content, latitude, longitude) {\n      return {\n        id: id,\n        latitude: latitude,\n        longitude: longitude,\n        iconPath: '/static/marker.png',\n        timeStamp: Date.now(),\n        callout: {\n          display: 'ALWAYS',\n          color: '#999',\n          padding: 5,\n          borderRadius: 10,\n          fontSize: 14,\n          content: content\n          // bgColor: '#f0f0f0'\n        } };\n\n    },\n    reoladPosition: function reoladPosition(callback) {\n      var self = this;\n      //本地测试暂时注释\n      self.getLocation(function (res) {\n        __f__(\"log\", 'reoladPosition: ', JSON.stringify(res), \" at pages/index/index.nvue:152\");\n        self.mapcontext.moveToLocation({\n          latitude: res.latitude,\n          longitude: res.longitude });\n\n        self.latitude = res.latitude;\n        self.longitude = res.longitude;\n        callback && callback(res);\n      });\n\n      //test\n      // callback && callback();\n    },\n    getLocation: function getLocation(callback) {\n      uni.getLocation({\n        type: 'gcj02',\n        success: function success(res) {\n          // console.log(res);\n          callback && callback(res);\n        } });\n\n    },\n    resetRegion: function resetRegion() {\n      // console.log('resetRegion...');\n      var self = this;\n      self.mapcontext.getRegion({\n        complete: function complete(res) {\n          self.southwest = res.southwest;\n          self.northeast = res.northeast;\n        } });\n\n      self.getLocation(function (res) {\n        var refresh = false;\n        if (!self.latitude || !self.longitude) {\n          refresh = true;\n        } else {\n          var latDif = Math.abs(res.latitude - self.latitude);\n          var longDif = Math.abs(res.longitude - self.longitude);\n          if (latDif > 0.001 || longDif > 0.001) {\n            refresh = true;\n          }\n        }\n        if (refresh) {\n          self.latitude = res.latitude;\n          self.longitude = res.longitude;\n          self.sendWsMsg(null);\n        }\n      });\n\n      setTimeout(function () {\n        self.resetRegion();\n      }, 3000);\n    },\n    checkMsg: function checkMsg(msgObj) {\n      var self = this;\n      if (!self.southwest || !self.northeast) {\n        return false;\n      }\n      if (msgObj.longitude > self.southwest.longitude &&\n      msgObj.longitude < self.northeast.longitude &&\n      msgObj.latitude > self.southwest.latitude &&\n      msgObj.latitude < self.northeast.latitude)\n      {\n        return true;\n      }\n      return false;\n    },\n    guid: function guid() {\n      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {\n        var r = Math.random() * 16 | 0,\n        v = c == 'x' ? r : r & 0x3 | 0x8;\n        return v.toString(16);\n      });\n    },\n    initWebSocket: function initWebSocket() {\n      var self = this;\n      //webSocket\n      if (!self.sid) {\n        self.sid = self.guid();\n      }\n\n      self.socketTask = uni.connectSocket({\n        url: 'ws://119.29.139.42:9090/ws/' + self.sid,\n        complete: function complete() {} });\n\n      self.socketTask.onOpen(function () {\n        __f__(\"log\", 'WebSocket连接已打开！', \" at pages/index/index.nvue:238\");\n        self.reoladPosition(function (res) {\n          self.sendWsMsg(null);\n        });\n      });\n      self.socketTask.onError(function (e) {\n        __f__(\"log\", 'WebSocket连接打开失败，请检查！', e, \" at pages/index/index.nvue:244\");\n        self.socketTask = null;\n      });\n      self.socketTask.onClose(function () {\n        __f__(\"log\", 'WebSocket连接关闭！', \" at pages/index/index.nvue:248\");\n        self.socketTask = null;\n      });\n      self.socketTask.onMessage(function (res) {\n        __f__(\"log\", '收到服务器内容：' + res.data, \" at pages/index/index.nvue:252\");\n        //TODO: \n        var msg = JSON.parse(res.data);\n        var checkResult = self.checkMsg(msg);\n        if (checkResult) {\n          self.messageList.push({\n            latitude: msg.latitude,\n            longitude: msg.longitude,\n            message: msg.message });\n\n        }\n      });\n    },\n    sendWsMsg: function sendWsMsg(msg) {\n      var self = this;\n      if (!self.sid || !self.socketTask) {\n        return;\n      }\n      var data = {\n        sid: self.sid,\n        message: msg,\n        longitude: self.longitude,\n        latitude: self.latitude };\n\n      self.socketTask.send({\n        data: JSON.stringify(data) });\n\n    },\n    callouttap: function callouttap(e) {\n      var self = this;\n      var msgObj = self.markerObjs[e.detail.markerId];\n      __f__(\"log\", msgObj, \" at pages/index/index.nvue:283\");\n      if (msgObj) {\n        msgObj.timeStamp = Date.now();\n      }\n    },\n    test: function test() {\n      var self = this;\n      // for (var i = 0; i < 10; i++) {\n      // \tself.messageList.push({\n      // \t\tlatitude: 39.909 + (i/1000),\n      // \t\tlongitude: 116.39742 + (i/1000),\n      // \t\tmessage: 'is ' + i\n      // \t});\n      // }\n\n\n    } },\n\n  onReady: function onReady() {\n    var self = this;\n    if (self.socketTask) {\n      self.socketTask.close();\n    }\n    self.mapcontext = uni.createMapContext('map', self);\n    __f__(\"log\", 'on ready', \" at pages/index/index.nvue:307\");\n\n    plus.device.getInfo({\n      success: function success(e) {\n        self.sid = e.uuid;\n      } });\n\n\n    setTimeout(function () {\n      self.reoladPosition();\n      self.initWebSocket();\n      self.showCallout();\n      self.resetRegion();\n    }, 1000);\n\n    setInterval(function () {\n      if (self.socketTask) {\n        // console.log('socketTask is alive');\n      } else {\n        self.initWebSocket();\n      }\n    }, 5000);\n\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFlQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLGlCQURBO0FBRUEsc0JBRkE7QUFHQSxpQkFIQTtBQUlBLG9CQUpBO0FBS0EscUJBTEE7O0FBT0EsR0FUQTtBQVVBO0FBQ0EsUUFEQSxrQkFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBREE7QUFFQSxzQkFGQTs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQURBO0FBRUEsbUNBRkE7QUFHQSwrQkFIQTs7QUFLQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQVhBO0FBWUEsS0E3REE7QUE4REEsZUE5REEseUJBOERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BTEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSkE7QUFLQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLEVBRUEsQ0FGQTs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FGQSxFQUVBLEdBRkE7QUFHQSxLQXZHQTtBQXdHQSxnQkF4R0Esd0JBd0dBLEVBeEdBLEVBd0dBLE9BeEdBLEVBd0dBLFFBeEdBLEVBd0dBLFNBeEdBLEVBd0dBO0FBQ0E7QUFDQSxjQURBO0FBRUEsMEJBRkE7QUFHQSw0QkFIQTtBQUlBLHNDQUpBO0FBS0EsNkJBTEE7QUFNQTtBQUNBLDJCQURBO0FBRUEsdUJBRkE7QUFHQSxvQkFIQTtBQUlBLDBCQUpBO0FBS0Esc0JBTEE7QUFNQTtBQUNBO0FBUEEsU0FOQTs7QUFnQkEsS0F6SEE7QUEwSEEsa0JBMUhBLDBCQTBIQSxRQTFIQSxFQTBIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FEQTtBQUVBLGtDQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBLE9BVEE7O0FBV0E7QUFDQTtBQUNBLEtBMUlBO0FBMklBLGVBM0lBLHVCQTJJQSxRQTNJQSxFQTJJQTtBQUNBO0FBQ0EscUJBREE7QUFFQSxlQUZBLG1CQUVBLEdBRkEsRUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUxBOztBQU9BLEtBbkpBO0FBb0pBLGVBcEpBLHlCQW9KQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQURBLG9CQUNBLEdBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUpBOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BaEJBOztBQWtCQTtBQUNBO0FBQ0EsT0FGQSxFQUVBLElBRkE7QUFHQSxLQWxMQTtBQW1MQSxZQW5MQSxvQkFtTEEsTUFuTEEsRUFtTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBREE7QUFFQSwrQ0FGQTtBQUdBLCtDQUhBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWhNQTtBQWlNQSxRQWpNQSxrQkFpTUE7QUFDQTtBQUNBO0FBQ0Esd0NBREE7QUFFQTtBQUNBLE9BSkE7QUFLQSxLQXZNQTtBQXdNQSxpQkF4TUEsMkJBd01BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQURBO0FBRUEsd0NBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUZBO0FBR0EsT0FMQTtBQU1BO0FBQ0E7QUFDQTtBQUNBLE9BSEE7QUFJQTtBQUNBO0FBQ0E7QUFDQSxPQUhBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FEQTtBQUVBLG9DQUZBO0FBR0EsZ0NBSEE7O0FBS0E7QUFDQSxPQVpBO0FBYUEsS0E5T0E7QUErT0EsYUEvT0EscUJBK09BLEdBL09BLEVBK09BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQURBO0FBRUEsb0JBRkE7QUFHQSxpQ0FIQTtBQUlBLCtCQUpBOztBQU1BO0FBQ0Esa0NBREE7O0FBR0EsS0E3UEE7QUE4UEEsY0E5UEEsc0JBOFBBLENBOVBBLEVBOFBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FyUUE7QUFzUUEsUUF0UUEsa0JBc1FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsS0FqUkEsRUFWQTs7QUE2UkEsU0E3UkEscUJBNlJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BSEE7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUxBLEVBS0EsSUFMQTs7QUFPQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsS0FOQSxFQU1BLElBTkE7O0FBUUEsR0ExVEEsRSIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJtYWluXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwibWFwLWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdDxtYXAgaWQ9XCJtYXBcIiBjbGFzcz1cIm1hcFwiIHNob3ctbG9jYXRpb249XCJ0cnVlXCIgOm1hcmtlcnM9XCJtYXJrZXJzXCIgQGNhbGxvdXR0YXA9XCJjYWxsb3V0dGFwXCI+PC9tYXA+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJpbnB1dFwiPlxyXG5cdFx0XHRcdDxpbnB1dCBjbGFzcz1cIm1lc3NhZ2VcIiB0eXBlPVwidGV4dFwiIG1heGxlbmd0aD1cIjEyOFwiIHYtbW9kZWw9XCJtZXNzYWdlXCIgLz5cclxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgY2xhc3M9XCJzZW5kLWJ0blwiIHNpemU9XCJtaW5pXCIgQGNsaWNrPVwic2VuZFwiPuWQkOanvTwvYnV0dG9uPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdG1lc3NhZ2U6ICcnLFxyXG5cdFx0XHRcdG1hcGNvbnRleHQ6IG51bGwsXHJcblx0XHRcdFx0bWFya2VyczogW10sXHJcblx0XHRcdFx0bWFya2VyT2Jqczoge30sXHJcblx0XHRcdFx0bWVzc2FnZUxpc3Q6IFtdXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdHNlbmQoKSB7XHJcblx0XHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vdGVzdFxyXG5cdFx0XHRcdC8vIHZhciBtMSA9IHtcclxuXHRcdFx0XHQvLyBcdGlkOiAxLFxyXG5cdFx0XHRcdC8vIFx0bGF0aXR1ZGU6IDIzLjA3MzgyNSxcclxuXHRcdFx0XHQvLyBcdGxvbmdpdHVkZTogMTEzLjI4NjcyMyxcclxuXHRcdFx0XHQvLyBcdGljb25QYXRoOiAnL3N0YXRpYy9tYXJrZXIucG5nJyxcclxuXHRcdFx0XHQvLyBcdHRpbWVTdGFtcDogRGF0ZS5ub3coKSxcclxuXHRcdFx0XHQvLyBcdGNhbGxvdXQ6IHtcclxuXHRcdFx0XHQvLyBcdFx0ZGlzcGxheTogJ0FMV0FZUycsXHJcblx0XHRcdFx0Ly8gXHRcdGNvbG9yOiAnIzk5OScsXHJcblx0XHRcdFx0Ly8gXHRcdHBhZGRpbmc6IDUsXHJcblx0XHRcdFx0Ly8gXHRcdGJvcmRlclJhZGl1czogMTAsXHJcblx0XHRcdFx0Ly8gXHRcdGZvbnRTaXplOiAxNCxcclxuXHRcdFx0XHQvLyBcdFx0Y29udGVudDogJ3Rlc3QnLFxyXG5cdFx0XHRcdC8vIFx0XHRiZ0NvbG9yOiAnIzAwRkZGRidcclxuXHRcdFx0XHQvLyBcdH0sXHJcblx0XHRcdFx0Ly8gfTtcclxuXHRcdFx0XHQvLyBzZWxmLm1hcmtlcnMgPSBbbTFdO1xyXG5cdFx0XHRcdC8vIHNlbGYubWFya2VycyA9IFsuLi5zZWxmLm1hcmtlcnNdO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vIHNldFRpbWVvdXQoKCk9PntcclxuXHRcdFx0XHQvLyBcdHNlbGYubWFya2VycyA9IFtdO1xyXG5cdFx0XHRcdC8vIH0sIDMwMDApXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly8gcmV0dXJuO1xyXG5cdFx0XHRcdC8vdGVzdFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICghc2VsZi5tZXNzYWdlKSB7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChzZWxmLm1lc3NhZ2UubGVuZ3RoID4gNDApIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogJ+WQkOanveWGheWuueS4jeiDvei2hei/hzQw5a2XJyxcclxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKHNlbGYubWVzc2FnZS5sZW5ndGggPiAyMCkge1xyXG5cdFx0XHRcdFx0dmFyIHRtcE1zZyA9IHNlbGYubWVzc2FnZTtcclxuXHRcdFx0XHRcdHRtcE1zZyA9IHRtcE1zZy5zdWJzdHIoMCwgMjApICsgJ1xcbicgKyB0bXBNc2cuc3Vic3RyKDIwKTtcclxuXHRcdFx0XHRcdHNlbGYubWVzc2FnZSA9IHRtcE1zZztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c2VsZi5yZW9sYWRQb3NpdGlvbihmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHNlbGYubWVzc2FnZUxpc3QudW5zaGlmdCh7XHJcblx0XHRcdFx0XHRcdGxhdGl0dWRlOiBzZWxmLmxhdGl0dWRlLFxyXG5cdFx0XHRcdFx0XHRsb25naXR1ZGU6IHNlbGYubG9uZ2l0dWRlLFxyXG5cdFx0XHRcdFx0XHRtZXNzYWdlOiBzZWxmLm1lc3NhZ2VcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0c2VsZi5zZW5kV3NNc2coc2VsZi5tZXNzYWdlKTtcclxuXHRcdFx0XHRcdHNlbGYubWVzc2FnZSA9ICcnO1xyXG5cclxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHNlbGYubWVzc2FnZSk7XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhzZWxmLmxhdGl0dWRlLCBzZWxmLmxvbmdpdHVkZSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHNob3dDYWxsb3V0KCkge1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCc9PT0gc2hvd0NhbGxvdXQgPT09Jyk7XHJcblx0XHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0XHRcdHZhciB0bXBNYXJrZXJzID0gW107XHJcblx0XHRcdFx0c2VsZi5tYXJrZXJzLmZvckVhY2gob2JqID0+IHtcclxuXHRcdFx0XHRcdHZhciBub3cgPSBEYXRlLm5vdygpO1xyXG5cdFx0XHRcdFx0aWYgKG5vdyAtIG9iai50aW1lU3RhbXAgPCA3MDAwKSB7XHJcblx0XHRcdFx0XHRcdHRtcE1hcmtlcnMucHVzaChvYmopO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG5cdFx0XHRcdFx0dmFyIG1zZ09iaiA9IHNlbGYubWVzc2FnZUxpc3Quc2hpZnQoKTtcclxuXHRcdFx0XHRcdGlmICghbXNnT2JqKSB7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dmFyIG1hcmtlciA9IHNlbGYuY3JlYXRlTWFya2VyKG51bGwsIG1zZ09iai5tZXNzYWdlLCBtc2dPYmoubGF0aXR1ZGUsIG1zZ09iai5sb25naXR1ZGUpO1xyXG5cdFx0XHRcdFx0dG1wTWFya2Vycy5wdXNoKG1hcmtlcik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNlbGYubWFya2VyT2JqcyA9IHt9O1xyXG5cdFx0XHRcdHZhciBpZCA9IDE7XHJcblx0XHRcdFx0dG1wTWFya2Vycy5mb3JFYWNoKG9iaiA9PiB7XHJcblx0XHRcdFx0XHRvYmouaWQgPSBpZDtcclxuXHRcdFx0XHRcdHNlbGYubWFya2VyT2Jqc1tpZF0gPSBvYmo7XHJcblx0XHRcdFx0XHRpZCsrO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHNlbGYubWFya2VycyA9IHRtcE1hcmtlcnM7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRzZWxmLm1hcmtlcnMgPSBbLi4uc2VsZi5tYXJrZXJzXTtcclxuXHRcdFx0XHR9LCA1KTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvL2NvbnNvbGUgbWFya2Vyc1xyXG5cdFx0XHRcdC8vIHNlbGYubWFya2Vycy5mb3JFYWNoKG9iaiA9PiB7XHJcblx0XHRcdFx0Ly8gXHRjb25zb2xlLmxvZyhvYmouaWQpO1xyXG5cdFx0XHRcdC8vIH0pO1xyXG5cdFx0XHRcdC8vY29uc29sZSBlbmRcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpPT4ge1xyXG5cdFx0XHRcdFx0c2VsZi5zaG93Q2FsbG91dCgpO1xyXG5cdFx0XHRcdH0sIDUwMCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGNyZWF0ZU1hcmtlcihpZCwgY29udGVudCwgbGF0aXR1ZGUsIGxvbmdpdHVkZSkge1xyXG5cdFx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XHRpZDogaWQsXHJcblx0XHRcdFx0XHRsYXRpdHVkZTogbGF0aXR1ZGUsXHJcblx0XHRcdFx0XHRsb25naXR1ZGU6IGxvbmdpdHVkZSxcclxuXHRcdFx0XHRcdGljb25QYXRoOiAnL3N0YXRpYy9tYXJrZXIucG5nJyxcclxuXHRcdFx0XHRcdHRpbWVTdGFtcDogRGF0ZS5ub3coKSxcclxuXHRcdFx0XHRcdGNhbGxvdXQ6IHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogJ0FMV0FZUycsXHJcblx0XHRcdFx0XHRcdGNvbG9yOiAnIzk5OScsXHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDUsXHJcblx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogMTAsXHJcblx0XHRcdFx0XHRcdGZvbnRTaXplOiAxNCxcclxuXHRcdFx0XHRcdFx0Y29udGVudDogY29udGVudCxcclxuXHRcdFx0XHRcdFx0Ly8gYmdDb2xvcjogJyNmMGYwZjAnXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fSxcclxuXHRcdFx0cmVvbGFkUG9zaXRpb24oY2FsbGJhY2spIHtcclxuXHRcdFx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHRcdFx0Ly/mnKzlnLDmtYvor5XmmoLml7bms6jph4pcclxuXHRcdFx0XHRzZWxmLmdldExvY2F0aW9uKChyZXMpID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdyZW9sYWRQb3NpdGlvbjogJywgSlNPTi5zdHJpbmdpZnkocmVzKSk7XHJcblx0XHRcdFx0XHRzZWxmLm1hcGNvbnRleHQubW92ZVRvTG9jYXRpb24oe1xyXG5cdFx0XHRcdFx0XHRsYXRpdHVkZTogcmVzLmxhdGl0dWRlLFxyXG5cdFx0XHRcdFx0XHRsb25naXR1ZGU6IHJlcy5sb25naXR1ZGVcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0c2VsZi5sYXRpdHVkZSA9IHJlcy5sYXRpdHVkZTtcclxuXHRcdFx0XHRcdHNlbGYubG9uZ2l0dWRlID0gcmVzLmxvbmdpdHVkZTtcclxuXHRcdFx0XHRcdGNhbGxiYWNrICYmIGNhbGxiYWNrKHJlcyk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly90ZXN0XHJcblx0XHRcdFx0Ly8gY2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0TG9jYXRpb24oY2FsbGJhY2spIHtcclxuXHRcdFx0XHR1bmkuZ2V0TG9jYXRpb24oe1xyXG5cdFx0XHRcdFx0dHlwZTogJ2djajAyJyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRcdFx0XHRcdGNhbGxiYWNrICYmIGNhbGxiYWNrKHJlcyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHJlc2V0UmVnaW9uKCkge1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdyZXNldFJlZ2lvbi4uLicpO1xyXG5cdFx0XHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdFx0XHRzZWxmLm1hcGNvbnRleHQuZ2V0UmVnaW9uKHtcclxuXHRcdFx0XHRcdGNvbXBsZXRlKHJlcykge1xyXG5cdFx0XHRcdFx0XHRzZWxmLnNvdXRod2VzdCA9IHJlcy5zb3V0aHdlc3Q7XHJcblx0XHRcdFx0XHRcdHNlbGYubm9ydGhlYXN0ID0gcmVzLm5vcnRoZWFzdDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRzZWxmLmdldExvY2F0aW9uKChyZXMpID0+IHtcclxuXHRcdFx0XHRcdHZhciByZWZyZXNoID0gZmFsc2U7XHJcblx0XHRcdFx0XHRpZiAoIXNlbGYubGF0aXR1ZGUgfHwgIXNlbGYubG9uZ2l0dWRlKSB7XHJcblx0XHRcdFx0XHRcdHJlZnJlc2ggPSB0cnVlO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dmFyIGxhdERpZiA9IE1hdGguYWJzKHJlcy5sYXRpdHVkZSAtIHNlbGYubGF0aXR1ZGUpO1xyXG5cdFx0XHRcdFx0XHR2YXIgbG9uZ0RpZiA9IE1hdGguYWJzKHJlcy5sb25naXR1ZGUgLSBzZWxmLmxvbmdpdHVkZSk7XHJcblx0XHRcdFx0XHRcdGlmIChsYXREaWYgPiAwLjAwMSB8fCBsb25nRGlmID4gMC4wMDEpIHtcclxuXHRcdFx0XHRcdFx0XHRyZWZyZXNoID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKHJlZnJlc2gpIHtcclxuXHRcdFx0XHRcdFx0c2VsZi5sYXRpdHVkZSA9IHJlcy5sYXRpdHVkZTtcclxuXHRcdFx0XHRcdFx0c2VsZi5sb25naXR1ZGUgPSByZXMubG9uZ2l0dWRlO1xyXG5cdFx0XHRcdFx0XHRzZWxmLnNlbmRXc01zZyhudWxsKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHNlbGYucmVzZXRSZWdpb24oKTtcclxuXHRcdFx0XHR9LCAzMDAwKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2hlY2tNc2cobXNnT2JqKSB7XHJcblx0XHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0XHRcdGlmICghc2VsZi5zb3V0aHdlc3QgfHwgIXNlbGYubm9ydGhlYXN0KSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChtc2dPYmoubG9uZ2l0dWRlID4gc2VsZi5zb3V0aHdlc3QubG9uZ2l0dWRlICYmIFxyXG5cdFx0XHRcdFx0XHRtc2dPYmoubG9uZ2l0dWRlIDwgc2VsZi5ub3J0aGVhc3QubG9uZ2l0dWRlICYmXHJcblx0XHRcdFx0XHRcdG1zZ09iai5sYXRpdHVkZSA+IHNlbGYuc291dGh3ZXN0LmxhdGl0dWRlICYmXHJcblx0XHRcdFx0XHRcdG1zZ09iai5sYXRpdHVkZSA8IHNlbGYubm9ydGhlYXN0LmxhdGl0dWRlXHJcblx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRndWlkKCkge1xyXG5cdFx0XHRcdHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XHJcblx0XHRcdFx0XHR2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDAsXHJcblx0XHRcdFx0XHRcdHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XHJcblx0XHRcdFx0XHRyZXR1cm4gdi50b1N0cmluZygxNik7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGluaXRXZWJTb2NrZXQoKSB7XHJcblx0XHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0XHRcdC8vd2ViU29ja2V0XHJcblx0XHRcdFx0aWYgKCFzZWxmLnNpZCkge1xyXG5cdFx0XHRcdFx0c2VsZi5zaWQgPSBzZWxmLmd1aWQoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c2VsZi5zb2NrZXRUYXNrID0gdW5pLmNvbm5lY3RTb2NrZXQoe1xyXG5cdFx0XHRcdFx0dXJsOiAnd3M6Ly8xMTkuMjkuMTM5LjQyOjkwOTAvd3MvJyArIHNlbGYuc2lkLFxyXG5cdFx0XHRcdFx0Y29tcGxldGU6ICgpPT4ge31cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRzZWxmLnNvY2tldFRhc2sub25PcGVuKCgpID0+IHtcclxuXHRcdFx0XHQgIGNvbnNvbGUubG9nKCdXZWJTb2NrZXTov57mjqXlt7LmiZPlvIDvvIEnKTtcclxuXHRcdFx0XHRcdHNlbGYucmVvbGFkUG9zaXRpb24oKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRzZWxmLnNlbmRXc01zZyhudWxsKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHNlbGYuc29ja2V0VGFzay5vbkVycm9yKChlKSA9PiB7XHJcblx0XHRcdFx0ICBjb25zb2xlLmxvZygnV2ViU29ja2V06L+e5o6l5omT5byA5aSx6LSl77yM6K+35qOA5p+l77yBJywgZSk7XHJcblx0XHRcdFx0XHRzZWxmLnNvY2tldFRhc2sgPSBudWxsO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHNlbGYuc29ja2V0VGFzay5vbkNsb3NlKCgpID0+IHtcclxuXHRcdFx0XHQgIGNvbnNvbGUubG9nKCdXZWJTb2NrZXTov57mjqXlhbPpl63vvIEnKTtcclxuXHRcdFx0XHRcdHNlbGYuc29ja2V0VGFzayA9IG51bGw7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0c2VsZi5zb2NrZXRUYXNrLm9uTWVzc2FnZSgocmVzKSA9PiB7XHJcblx0XHRcdFx0ICBjb25zb2xlLmxvZygn5pS25Yiw5pyN5Yqh5Zmo5YaF5a6577yaJyArIHJlcy5kYXRhKTtcclxuXHRcdFx0XHRcdC8vVE9ETzogXHJcblx0XHRcdFx0XHR2YXIgbXNnID0gSlNPTi5wYXJzZShyZXMuZGF0YSk7XHJcblx0XHRcdFx0XHR2YXIgY2hlY2tSZXN1bHQgPSBzZWxmLmNoZWNrTXNnKG1zZyk7XHJcblx0XHRcdFx0XHRpZiAoY2hlY2tSZXN1bHQpIHtcclxuXHRcdFx0XHRcdFx0c2VsZi5tZXNzYWdlTGlzdC5wdXNoKHtcclxuXHRcdFx0XHRcdFx0XHRsYXRpdHVkZTogbXNnLmxhdGl0dWRlLFxyXG5cdFx0XHRcdFx0XHRcdGxvbmdpdHVkZTogbXNnLmxvbmdpdHVkZSxcclxuXHRcdFx0XHRcdFx0XHRtZXNzYWdlOiBtc2cubWVzc2FnZVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c2VuZFdzTXNnKG1zZykge1xyXG5cdFx0XHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdFx0XHRpZiAoIXNlbGYuc2lkIHx8ICFzZWxmLnNvY2tldFRhc2spIHtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dmFyIGRhdGEgPSB7XHJcblx0XHRcdFx0XHRzaWQ6IHNlbGYuc2lkLFxyXG5cdFx0XHRcdFx0bWVzc2FnZTogbXNnLFxyXG5cdFx0XHRcdFx0bG9uZ2l0dWRlOiBzZWxmLmxvbmdpdHVkZSxcclxuXHRcdFx0XHRcdGxhdGl0dWRlOiBzZWxmLmxhdGl0dWRlXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHRzZWxmLnNvY2tldFRhc2suc2VuZCh7XHJcblx0XHRcdFx0XHRkYXRhOiBKU09OLnN0cmluZ2lmeShkYXRhKVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjYWxsb3V0dGFwKGUpIHtcclxuXHRcdFx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHRcdFx0dmFyIG1zZ09iaiA9IHNlbGYubWFya2VyT2Jqc1tlLmRldGFpbC5tYXJrZXJJZF07XHJcblx0XHRcdFx0Y29uc29sZS5sb2cobXNnT2JqKTtcclxuXHRcdFx0XHRpZiAobXNnT2JqKSB7XHJcblx0XHRcdFx0XHRcdG1zZ09iai50aW1lU3RhbXA9RGF0ZS5ub3coKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0dGVzdCgpIHtcclxuXHRcdFx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHRcdFx0Ly8gZm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcblx0XHRcdFx0Ly8gXHRzZWxmLm1lc3NhZ2VMaXN0LnB1c2goe1xyXG5cdFx0XHRcdC8vIFx0XHRsYXRpdHVkZTogMzkuOTA5ICsgKGkvMTAwMCksXHJcblx0XHRcdFx0Ly8gXHRcdGxvbmdpdHVkZTogMTE2LjM5NzQyICsgKGkvMTAwMCksXHJcblx0XHRcdFx0Ly8gXHRcdG1lc3NhZ2U6ICdpcyAnICsgaVxyXG5cdFx0XHRcdC8vIFx0fSk7XHJcblx0XHRcdFx0Ly8gfVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25SZWFkeSgpIHtcclxuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0XHRpZiAoc2VsZi5zb2NrZXRUYXNrKSB7XHJcblx0XHRcdFx0c2VsZi5zb2NrZXRUYXNrLmNsb3NlKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0c2VsZi5tYXBjb250ZXh0ID0gdW5pLmNyZWF0ZU1hcENvbnRleHQoJ21hcCcsIHNlbGYpO1xyXG5cdFx0XHRjb25zb2xlLmxvZygnb24gcmVhZHknKTtcclxuXHRcdFx0XHJcblx0XHRcdHBsdXMuZGV2aWNlLmdldEluZm8oe1xyXG5cdFx0XHRcdHN1Y2Nlc3M6ZnVuY3Rpb24oZSl7XHJcblx0XHRcdFx0XHRzZWxmLnNpZCA9IGUudXVpZDtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHNlbGYucmVvbGFkUG9zaXRpb24oKTtcclxuXHRcdFx0XHRzZWxmLmluaXRXZWJTb2NrZXQoKTtcclxuXHRcdFx0XHRzZWxmLnNob3dDYWxsb3V0KCk7XHJcblx0XHRcdFx0c2VsZi5yZXNldFJlZ2lvbigpO1xyXG5cdFx0XHR9LCAxMDAwKTtcclxuXHRcdFx0XHJcblx0XHRcdHNldEludGVydmFsKCgpID0+IHtcclxuXHRcdFx0XHRpZiAoc2VsZi5zb2NrZXRUYXNrKSB7XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnc29ja2V0VGFzayBpcyBhbGl2ZScpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRzZWxmLmluaXRXZWJTb2NrZXQoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sIDUwMDApO1xyXG5cdFx0XHRcclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cdC5tYWluIHtcclxuXHRcdC8qIGJhY2tncm91bmQtY29sb3I6ICMwMDdBRkY7ICovXHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRib3R0b206IDA7XHJcblx0fVxyXG5cclxuXHQubWFwLWNvbnRhaW5lciB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHRib3R0b206IDUwcHg7XHJcblx0XHQvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjREQ1MjREOyAqL1xyXG5cdH1cclxuXHJcblx0Lm1hcCB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRib3R0b206IDA7XHJcblx0fVxyXG5cclxuXHQuaW5wdXQge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuXHRcdHBhZGRpbmc6IDhweCAxNXB4O1xyXG5cdFx0cGFkZGluZy1yaWdodDogOTBweDtcclxuXHRcdGhlaWdodDogNTBweDtcclxuXHR9XHJcblxyXG5cdC5tZXNzYWdlIHtcclxuXHRcdGJvcmRlcjogMXB4IHNvbGlkICM2NmFmZTk7XHJcblx0XHRwYWRkaW5nOiA2cHggMTJweDtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG5cdFx0Y29sb3I6ICM1NTU7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdFx0aGVpZ2h0OiAzNHB4O1xyXG5cdH1cclxuXHJcblx0LnNlbmQtYnRuIHtcclxuXHRcdHBhZGRpbmc6IDAgMTBweDtcclxuXHRcdGhlaWdodDogMzBweDtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogMTBweDtcclxuXHRcdHJpZ2h0OiAxMHB4O1xyXG5cdFx0d2lkdGg6IDYwcHg7XHJcblx0fVxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---';
      } catch (e) {
        v = '[object object]';
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 10 */
/*!*********************************************************************************************************!*\
  !*** D:/project/vue-demo/range-chat/pages/index/index.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=style&index=0&lang=css&mpType=page */ 11);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 11 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/project/vue-demo/range-chat/pages/index/index.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "main": {
    "position": "fixed",
    "left": 0,
    "right": 0,
    "top": 0,
    "bottom": 0
  },
  "map-container": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": "50"
  },
  "map": {
    "position": "absolute",
    "left": 0,
    "right": 0,
    "top": 0,
    "bottom": 0
  },
  "input": {
    "position": "absolute",
    "left": 0,
    "right": 0,
    "bottom": 0,
    "backgroundColor": "#f0f0f0",
    "paddingTop": "8",
    "paddingRight": "90",
    "paddingBottom": "8",
    "paddingLeft": "15",
    "height": "50"
  },
  "message": {
    "border": "1px solid #66afe9",
    "paddingTop": "6",
    "paddingRight": "12",
    "paddingBottom": "6",
    "paddingLeft": "12",
    "fontSize": "14",
    "lineHeight": "14",
    "color": "#555555",
    "backgroundColor": "#ffffff",
    "borderRadius": "4",
    "height": "34"
  },
  "send-btn": {
    "paddingTop": 0,
    "paddingRight": "10",
    "paddingBottom": 0,
    "paddingLeft": "10",
    "height": "30",
    "position": "absolute",
    "top": "10",
    "right": "10",
    "width": "60"
  }
}

/***/ }),
/* 12 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);