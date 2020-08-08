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
/*!**************************************************************************!*\
  !*** E:/project/app/range-chat/main.js?{"page":"pages%2Findex%2Findex"} ***!
  \**************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/index/index.nvue?mpType=page */ 4);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            const promise = this.constructor\n            return this.then(\n              value => promise.resolve(callback()).then(() => value),\n              reason => promise.resolve(callback()).then(() => {\n                throw reason\n              })\n            )\n          }\n        }\n        _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/index/index'\n        _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQThEO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkVBQUc7QUFDWCxRQUFRLDJFQUFHO0FBQ1gsUUFBUSwyRUFBRztBQUNYLGdCQUFnQiwyRUFBRyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9pbmRleC9pbmRleC5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBpZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmICFQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5KSB7XG4gICAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5jb25zdHJ1Y3RvclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbihcbiAgICAgICAgICAgICAgdmFsdWUgPT4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oKCkgPT4gdmFsdWUpLFxuICAgICAgICAgICAgICByZWFzb24gPT4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRocm93IHJlYXNvblxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBBcHAubXBUeXBlID0gJ3BhZ2UnXG4gICAgICAgIEFwcC5yb3V0ZSA9ICdwYWdlcy9pbmRleC9pbmRleCdcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*************************************************************!*\
  !*** E:/project/app/range-chat/main.js?{"type":"appStyle"} ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*************************************************************************!*\
  !*** E:/project/app/range-chat/App.vue?vue&type=style&index=0&lang=css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/project/app/range-chat/App.vue?vue&type=style&index=0&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 4 */
/*!********************************************************************!*\
  !*** E:/project/app/range-chat/pages/index/index.nvue?mpType=page ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.nvue?vue&type=template&id=7b909402&mpType=page */ 5);\n/* harmony import */ var _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.nvue?vue&type=script&lang=js&mpType=page */ 7);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&lang=css&mpType=page */ 10).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&lang=css&mpType=page */ 10).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"f20a3568\",\n  false,\n  _index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/index/index.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGtFQUEwRDtBQUM5RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsa0VBQTBEO0FBQ25IOztBQUVBOztBQUVBO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdiOTA5NDAyJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCJmMjBhMzU2OFwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9pbmRleC9pbmRleC5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!**************************************************************************************************!*\
  !*** E:/project/app/range-chat/pages/index/index.nvue?vue&type=template&id=7b909402&mpType=page ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=template&id=7b909402&mpType=page */ 6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 6 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/project/app/range-chat/pages/index/index.nvue?vue&type=template&id=7b909402&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/*!********************************************************************************************!*\
  !*** E:/project/app/range-chat/pages/index/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQSthLENBQWdCLDJkQUFHLEVBQUMiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/project/app/range-chat/pages/index/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === \"Object\" && o.constructor) n = o.constructor.name;if (n === \"Map\" || n === \"Set\") return Array.from(n);if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      message: '',\n      mapcontext: null,\n      markers: [],\n      markerObjs: {},\n      messageList: [] };\n\n  },\n  methods: {\n    send: function send() {\n      var self = this;\n\n\n      //test\n      // var m1 = {\n      // \tid: 1,\n      // \tlatitude: 23.073825,\n      // \tlongitude: 113.286723,\n      // \ticonPath: '/static/marker.png',\n      // \ttimeStamp: Date.now(),\n      // \tcallout: {\n      // \t\tdisplay: 'ALWAYS',\n      // \t\tcolor: '#999',\n      // \t\tpadding: 5,\n      // \t\tborderRadius: 10,\n      // \t\tfontSize: 14,\n      // \t\tcontent: 'test',\n      // \t\tbgColor: '#00FFFF'\n      // \t},\n      // };\n      // self.markers = [m1];\n      // self.markers = [...self.markers];\n\n      // setTimeout(()=>{\n      // \tself.markers = [];\n      // }, 3000)\n\n      // return;\n      //test\n\n      if (!self.message) {\n        return;\n      }\n      if (self.message.length > 40) {\n        uni.showToast({\n          title: '吐槽内容不能超过40字',\n          icon: 'none' });\n\n        return;\n      }\n\n      if (self.message.length > 20) {\n        var tmpMsg = self.message;\n        tmpMsg = tmpMsg.substr(0, 20) + '\\n' + tmpMsg.substr(20);\n        self.message = tmpMsg;\n      }\n\n      self.reoladPosition(function () {\n        self.messageList.unshift({\n          latitude: self.latitude,\n          longitude: self.longitude,\n          message: self.message });\n\n        self.sendWsMsg(self.message);\n        self.message = '';\n\n        // console.log(self.message);\n        // console.log(self.latitude, self.longitude);\n      });\n    },\n    showCallout: function showCallout() {\n      // console.log('=== showCallout ===');\n      var self = this;\n      var tmpMarkers = [];\n      self.markers.forEach(function (obj) {\n        var now = Date.now();\n        if (now - obj.timeStamp < 7000) {\n          tmpMarkers.push(obj);\n        }\n      });\n      for (var i = 0; i < 10; i++) {\n        var msgObj = self.messageList.shift();\n        if (!msgObj) {\n          break;\n        }\n        var marker = self.createMarker(null, msgObj.message, msgObj.latitude, msgObj.longitude);\n        tmpMarkers.push(marker);\n      }\n\n      self.markerObjs = {};\n      var id = 1;\n      tmpMarkers.forEach(function (obj) {\n        obj.id = id;\n        self.markerObjs[id] = obj;\n        id++;\n      });\n      self.markers = tmpMarkers;\n      setTimeout(function () {\n        self.markers = _toConsumableArray(self.markers);\n      }, 10);\n\n\n      //console markers\n      // self.markers.forEach(obj => {\n      // \tconsole.log(obj.id);\n      // });\n      //console end\n\n      setTimeout(function () {\n        self.showCallout();\n      }, 500);\n    },\n    createMarker: function createMarker(id, content, latitude, longitude) {\n      return {\n        id: id,\n        latitude: latitude,\n        longitude: longitude,\n        iconPath: '/static/marker.png',\n        timeStamp: Date.now(),\n        callout: {\n          display: 'ALWAYS',\n          color: '#999',\n          padding: 5,\n          borderRadius: 10,\n          fontSize: 14,\n          content: content\n          // bgColor: '#f0f0f0'\n        } };\n\n    },\n    reoladPosition: function reoladPosition(callback) {\n      var self = this;\n      //本地测试暂时注释\n      self.getLocation(function (res) {\n        __f__(\"log\", 'reoladPosition: ', JSON.stringify(res), \" at pages/index/index.nvue:152\");\n        self.mapcontext.moveToLocation({\n          latitude: res.latitude,\n          longitude: res.longitude });\n\n        self.latitude = res.latitude;\n        self.longitude = res.longitude;\n        callback && callback(res);\n      });\n\n      //test\n      // callback && callback();\n    },\n    getLocation: function getLocation(callback) {\n      uni.getLocation({\n        type: 'gcj02',\n        success: function success(res) {\n          // console.log(res);\n          callback && callback(res);\n        },\n        complete: function complete(res) {\n          // if (res.errMsg) {\n          // \tconsole.log('res: ', res);\n          // }\n        } });\n\n    },\n    resetRegion: function resetRegion() {\n      // console.log('resetRegion...');\n      var self = this;\n      self.mapcontext.getRegion({\n        complete: function complete(res) {\n          self.southwest = res.southwest;\n          self.northeast = res.northeast;\n        } });\n\n      self.getLocation(function (res) {\n        var refresh = false;\n        if (!self.latitude || !self.longitude) {\n          refresh = true;\n        } else {\n          var latDif = Math.abs(res.latitude - self.latitude);\n          var longDif = Math.abs(res.longitude - self.longitude);\n          if (latDif > 0.001 || longDif > 0.001) {\n            refresh = true;\n          }\n        }\n        if (refresh) {\n          self.latitude = res.latitude;\n          self.longitude = res.longitude;\n          self.sendWsMsg(null);\n        }\n      });\n\n      setTimeout(function () {\n        self.resetRegion();\n      }, 3000);\n    },\n    checkMsg: function checkMsg(msgObj) {\n      var self = this;\n      if (!self.southwest || !self.northeast) {\n        return false;\n      }\n      if (msgObj.longitude > self.southwest.longitude &&\n      msgObj.longitude < self.northeast.longitude &&\n      msgObj.latitude > self.southwest.latitude &&\n      msgObj.latitude < self.northeast.latitude)\n      {\n        return true;\n      }\n      return false;\n    },\n    guid: function guid() {\n      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {\n        var r = Math.random() * 16 | 0,\n        v = c == 'x' ? r : r & 0x3 | 0x8;\n        return v.toString(16);\n      });\n    },\n    initWebSocket: function initWebSocket() {\n      var self = this;\n      //webSocket\n      if (!self.sid) {\n        self.sid = self.guid();\n      }\n\n      self.socketTask = uni.connectSocket({\n        url: 'ws://119.29.139.42:9090/ws/' + self.sid,\n        complete: function complete() {} });\n\n      self.socketTask.onOpen(function () {\n        __f__(\"log\", 'WebSocket连接已打开！', \" at pages/index/index.nvue:243\");\n        self.reoladPosition(function (res) {\n          self.sendWsMsg(null);\n        });\n      });\n      self.socketTask.onError(function (e) {\n        __f__(\"log\", 'WebSocket连接打开失败，请检查！', e, \" at pages/index/index.nvue:249\");\n        self.socketTask = null;\n      });\n      self.socketTask.onClose(function () {\n        __f__(\"log\", 'WebSocket连接关闭！', \" at pages/index/index.nvue:253\");\n        self.socketTask = null;\n      });\n      self.socketTask.onMessage(function (res) {\n        __f__(\"log\", '收到服务器内容：' + res.data, \" at pages/index/index.nvue:257\");\n        //TODO: \n        var msg = JSON.parse(res.data);\n        var checkResult = self.checkMsg(msg);\n        if (checkResult) {\n          self.messageList.push({\n            latitude: msg.latitude,\n            longitude: msg.longitude,\n            message: msg.message });\n\n        }\n      });\n    },\n    sendWsMsg: function sendWsMsg(msg) {\n      var self = this;\n      if (!self.sid || !self.socketTask) {\n        return;\n      }\n      var data = {\n        sid: self.sid,\n        message: msg,\n        longitude: self.longitude,\n        latitude: self.latitude };\n\n      self.socketTask.send({\n        data: JSON.stringify(data) });\n\n    },\n    callouttap: function callouttap(e) {\n      var self = this;\n      var msgObj = self.markerObjs[e.detail.markerId];\n      __f__(\"log\", msgObj, \" at pages/index/index.nvue:288\");\n      if (msgObj) {\n        msgObj.timeStamp = Date.now();\n      }\n    },\n    test: function test() {\n      var self = this;\n      // for (var i = 0; i < 10; i++) {\n      // \tself.messageList.push({\n      // \t\tlatitude: 39.909 + (i/1000),\n      // \t\tlongitude: 116.39742 + (i/1000),\n      // \t\tmessage: 'is ' + i\n      // \t});\n      // }\n\n\n    } },\n\n  onReady: function onReady() {\n    var self = this;\n    if (self.socketTask) {\n      self.socketTask.close();\n    }\n    self.mapcontext = uni.createMapContext('map', self);\n    __f__(\"log\", 'on ready', \" at pages/index/index.nvue:312\");\n\n    // plus.device.getInfo({\n    // \tsuccess:function(e){\n    // \t\tself.sid = e.uuid;\n    // \t},\n    // });\n\n    setTimeout(function () {\n      self.reoladPosition();\n      self.initWebSocket();\n      self.showCallout();\n      self.resetRegion();\n    }, 1000);\n\n    setInterval(function () {\n      if (self.socketTask) {\n        // console.log('socketTask is alive');\n      } else {\n        self.initWebSocket();\n      }\n    }, 5000);\n\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFlQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLGlCQURBO0FBRUEsc0JBRkE7QUFHQSxpQkFIQTtBQUlBLG9CQUpBO0FBS0EscUJBTEE7O0FBT0EsR0FUQTtBQVVBO0FBQ0EsUUFEQSxrQkFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBREE7QUFFQSxzQkFGQTs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQURBO0FBRUEsbUNBRkE7QUFHQSwrQkFIQTs7QUFLQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQVhBO0FBWUEsS0E3REE7QUE4REEsZUE5REEseUJBOERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BTEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSkE7QUFLQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLEVBRUEsRUFGQTs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FGQSxFQUVBLEdBRkE7QUFHQSxLQXZHQTtBQXdHQSxnQkF4R0Esd0JBd0dBLEVBeEdBLEVBd0dBLE9BeEdBLEVBd0dBLFFBeEdBLEVBd0dBLFNBeEdBLEVBd0dBO0FBQ0E7QUFDQSxjQURBO0FBRUEsMEJBRkE7QUFHQSw0QkFIQTtBQUlBLHNDQUpBO0FBS0EsNkJBTEE7QUFNQTtBQUNBLDJCQURBO0FBRUEsdUJBRkE7QUFHQSxvQkFIQTtBQUlBLDBCQUpBO0FBS0Esc0JBTEE7QUFNQTtBQUNBO0FBUEEsU0FOQTs7QUFnQkEsS0F6SEE7QUEwSEEsa0JBMUhBLDBCQTBIQSxRQTFIQSxFQTBIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FEQTtBQUVBLGtDQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBLE9BVEE7O0FBV0E7QUFDQTtBQUNBLEtBMUlBO0FBMklBLGVBM0lBLHVCQTJJQSxRQTNJQSxFQTJJQTtBQUNBO0FBQ0EscUJBREE7QUFFQSxlQUZBLG1CQUVBLEdBRkEsRUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUxBO0FBTUEsZ0JBTkEsb0JBTUEsR0FOQSxFQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FWQTs7QUFZQSxLQXhKQTtBQXlKQSxlQXpKQSx5QkF5SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFEQSxvQkFDQSxHQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FKQTs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQWhCQTs7QUFrQkE7QUFDQTtBQUNBLE9BRkEsRUFFQSxJQUZBO0FBR0EsS0F2TEE7QUF3TEEsWUF4TEEsb0JBd0xBLE1BeExBLEVBd0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQURBO0FBRUEsK0NBRkE7QUFHQSwrQ0FIQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FyTUE7QUFzTUEsUUF0TUEsa0JBc01BO0FBQ0E7QUFDQTtBQUNBLHdDQURBO0FBRUE7QUFDQSxPQUpBO0FBS0EsS0E1TUE7QUE2TUEsaUJBN01BLDJCQTZNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFEQTtBQUVBLHdDQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQTtBQUdBLE9BTEE7QUFNQTtBQUNBO0FBQ0E7QUFDQSxPQUhBO0FBSUE7QUFDQTtBQUNBO0FBQ0EsT0FIQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBREE7QUFFQSxvQ0FGQTtBQUdBLGdDQUhBOztBQUtBO0FBQ0EsT0FaQTtBQWFBLEtBblBBO0FBb1BBLGFBcFBBLHFCQW9QQSxHQXBQQSxFQW9QQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFEQTtBQUVBLG9CQUZBO0FBR0EsaUNBSEE7QUFJQSwrQkFKQTs7QUFNQTtBQUNBLGtDQURBOztBQUdBLEtBbFFBO0FBbVFBLGNBblFBLHNCQW1RQSxDQW5RQSxFQW1RQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBMVFBO0FBMlFBLFFBM1FBLGtCQTJRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLEtBdFJBLEVBVkE7O0FBa1NBLFNBbFNBLHFCQWtTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUxBLEVBS0EsSUFMQTs7QUFPQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsS0FOQSxFQU1BLElBTkE7O0FBUUEsR0EvVEEsRSIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJtYWluXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwibWFwLWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdDxtYXAgaWQ9XCJtYXBcIiBjbGFzcz1cIm1hcFwiIHNob3ctbG9jYXRpb249XCJ0cnVlXCIgOm1hcmtlcnM9XCJtYXJrZXJzXCIgQGNhbGxvdXR0YXA9XCJjYWxsb3V0dGFwXCI+PC9tYXA+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJpbnB1dFwiPlxyXG5cdFx0XHRcdDxpbnB1dCBjbGFzcz1cIm1lc3NhZ2VcIiB0eXBlPVwidGV4dFwiIG1heGxlbmd0aD1cIjEyOFwiIHYtbW9kZWw9XCJtZXNzYWdlXCIgLz5cclxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgY2xhc3M9XCJzZW5kLWJ0blwiIHNpemU9XCJtaW5pXCIgQGNsaWNrPVwic2VuZFwiPuWQkOanvTwvYnV0dG9uPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdG1lc3NhZ2U6ICcnLFxyXG5cdFx0XHRcdG1hcGNvbnRleHQ6IG51bGwsXHJcblx0XHRcdFx0bWFya2VyczogW10sXHJcblx0XHRcdFx0bWFya2VyT2Jqczoge30sXHJcblx0XHRcdFx0bWVzc2FnZUxpc3Q6IFtdXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdHNlbmQoKSB7XHJcblx0XHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vdGVzdFxyXG5cdFx0XHRcdC8vIHZhciBtMSA9IHtcclxuXHRcdFx0XHQvLyBcdGlkOiAxLFxyXG5cdFx0XHRcdC8vIFx0bGF0aXR1ZGU6IDIzLjA3MzgyNSxcclxuXHRcdFx0XHQvLyBcdGxvbmdpdHVkZTogMTEzLjI4NjcyMyxcclxuXHRcdFx0XHQvLyBcdGljb25QYXRoOiAnL3N0YXRpYy9tYXJrZXIucG5nJyxcclxuXHRcdFx0XHQvLyBcdHRpbWVTdGFtcDogRGF0ZS5ub3coKSxcclxuXHRcdFx0XHQvLyBcdGNhbGxvdXQ6IHtcclxuXHRcdFx0XHQvLyBcdFx0ZGlzcGxheTogJ0FMV0FZUycsXHJcblx0XHRcdFx0Ly8gXHRcdGNvbG9yOiAnIzk5OScsXHJcblx0XHRcdFx0Ly8gXHRcdHBhZGRpbmc6IDUsXHJcblx0XHRcdFx0Ly8gXHRcdGJvcmRlclJhZGl1czogMTAsXHJcblx0XHRcdFx0Ly8gXHRcdGZvbnRTaXplOiAxNCxcclxuXHRcdFx0XHQvLyBcdFx0Y29udGVudDogJ3Rlc3QnLFxyXG5cdFx0XHRcdC8vIFx0XHRiZ0NvbG9yOiAnIzAwRkZGRidcclxuXHRcdFx0XHQvLyBcdH0sXHJcblx0XHRcdFx0Ly8gfTtcclxuXHRcdFx0XHQvLyBzZWxmLm1hcmtlcnMgPSBbbTFdO1xyXG5cdFx0XHRcdC8vIHNlbGYubWFya2VycyA9IFsuLi5zZWxmLm1hcmtlcnNdO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vIHNldFRpbWVvdXQoKCk9PntcclxuXHRcdFx0XHQvLyBcdHNlbGYubWFya2VycyA9IFtdO1xyXG5cdFx0XHRcdC8vIH0sIDMwMDApXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly8gcmV0dXJuO1xyXG5cdFx0XHRcdC8vdGVzdFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICghc2VsZi5tZXNzYWdlKSB7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChzZWxmLm1lc3NhZ2UubGVuZ3RoID4gNDApIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogJ+WQkOanveWGheWuueS4jeiDvei2hei/hzQw5a2XJyxcclxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKHNlbGYubWVzc2FnZS5sZW5ndGggPiAyMCkge1xyXG5cdFx0XHRcdFx0dmFyIHRtcE1zZyA9IHNlbGYubWVzc2FnZTtcclxuXHRcdFx0XHRcdHRtcE1zZyA9IHRtcE1zZy5zdWJzdHIoMCwgMjApICsgJ1xcbicgKyB0bXBNc2cuc3Vic3RyKDIwKTtcclxuXHRcdFx0XHRcdHNlbGYubWVzc2FnZSA9IHRtcE1zZztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c2VsZi5yZW9sYWRQb3NpdGlvbihmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHNlbGYubWVzc2FnZUxpc3QudW5zaGlmdCh7XHJcblx0XHRcdFx0XHRcdGxhdGl0dWRlOiBzZWxmLmxhdGl0dWRlLFxyXG5cdFx0XHRcdFx0XHRsb25naXR1ZGU6IHNlbGYubG9uZ2l0dWRlLFxyXG5cdFx0XHRcdFx0XHRtZXNzYWdlOiBzZWxmLm1lc3NhZ2VcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0c2VsZi5zZW5kV3NNc2coc2VsZi5tZXNzYWdlKTtcclxuXHRcdFx0XHRcdHNlbGYubWVzc2FnZSA9ICcnO1xyXG5cclxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHNlbGYubWVzc2FnZSk7XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhzZWxmLmxhdGl0dWRlLCBzZWxmLmxvbmdpdHVkZSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHNob3dDYWxsb3V0KCkge1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCc9PT0gc2hvd0NhbGxvdXQgPT09Jyk7XHJcblx0XHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0XHRcdHZhciB0bXBNYXJrZXJzID0gW107XHJcblx0XHRcdFx0c2VsZi5tYXJrZXJzLmZvckVhY2gob2JqID0+IHtcclxuXHRcdFx0XHRcdHZhciBub3cgPSBEYXRlLm5vdygpO1xyXG5cdFx0XHRcdFx0aWYgKG5vdyAtIG9iai50aW1lU3RhbXAgPCA3MDAwKSB7XHJcblx0XHRcdFx0XHRcdHRtcE1hcmtlcnMucHVzaChvYmopO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG5cdFx0XHRcdFx0dmFyIG1zZ09iaiA9IHNlbGYubWVzc2FnZUxpc3Quc2hpZnQoKTtcclxuXHRcdFx0XHRcdGlmICghbXNnT2JqKSB7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dmFyIG1hcmtlciA9IHNlbGYuY3JlYXRlTWFya2VyKG51bGwsIG1zZ09iai5tZXNzYWdlLCBtc2dPYmoubGF0aXR1ZGUsIG1zZ09iai5sb25naXR1ZGUpO1xyXG5cdFx0XHRcdFx0dG1wTWFya2Vycy5wdXNoKG1hcmtlcik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNlbGYubWFya2VyT2JqcyA9IHt9O1xyXG5cdFx0XHRcdHZhciBpZCA9IDE7XHJcblx0XHRcdFx0dG1wTWFya2Vycy5mb3JFYWNoKG9iaiA9PiB7XHJcblx0XHRcdFx0XHRvYmouaWQgPSBpZDtcclxuXHRcdFx0XHRcdHNlbGYubWFya2VyT2Jqc1tpZF0gPSBvYmo7XHJcblx0XHRcdFx0XHRpZCsrO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHNlbGYubWFya2VycyA9IHRtcE1hcmtlcnM7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRzZWxmLm1hcmtlcnMgPSBbLi4uc2VsZi5tYXJrZXJzXTtcclxuXHRcdFx0XHR9LCAxMCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly9jb25zb2xlIG1hcmtlcnNcclxuXHRcdFx0XHQvLyBzZWxmLm1hcmtlcnMuZm9yRWFjaChvYmogPT4ge1xyXG5cdFx0XHRcdC8vIFx0Y29uc29sZS5sb2cob2JqLmlkKTtcclxuXHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0XHQvL2NvbnNvbGUgZW5kXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKT0+IHtcclxuXHRcdFx0XHRcdHNlbGYuc2hvd0NhbGxvdXQoKTtcclxuXHRcdFx0XHR9LCA1MDApO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjcmVhdGVNYXJrZXIoaWQsIGNvbnRlbnQsIGxhdGl0dWRlLCBsb25naXR1ZGUpIHtcclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0aWQ6IGlkLFxyXG5cdFx0XHRcdFx0bGF0aXR1ZGU6IGxhdGl0dWRlLFxyXG5cdFx0XHRcdFx0bG9uZ2l0dWRlOiBsb25naXR1ZGUsXHJcblx0XHRcdFx0XHRpY29uUGF0aDogJy9zdGF0aWMvbWFya2VyLnBuZycsXHJcblx0XHRcdFx0XHR0aW1lU3RhbXA6IERhdGUubm93KCksXHJcblx0XHRcdFx0XHRjYWxsb3V0OiB7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6ICdBTFdBWVMnLFxyXG5cdFx0XHRcdFx0XHRjb2xvcjogJyM5OTknLFxyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiA1LFxyXG5cdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IDEwLFxyXG5cdFx0XHRcdFx0XHRmb250U2l6ZTogMTQsXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6IGNvbnRlbnQsXHJcblx0XHRcdFx0XHRcdC8vIGJnQ29sb3I6ICcjZjBmMGYwJ1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH07XHJcblx0XHRcdH0sXHJcblx0XHRcdHJlb2xhZFBvc2l0aW9uKGNhbGxiYWNrKSB7XHJcblx0XHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0XHRcdC8v5pys5Zyw5rWL6K+V5pqC5pe25rOo6YeKXHJcblx0XHRcdFx0c2VsZi5nZXRMb2NhdGlvbigocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygncmVvbGFkUG9zaXRpb246ICcsIEpTT04uc3RyaW5naWZ5KHJlcykpO1xyXG5cdFx0XHRcdFx0c2VsZi5tYXBjb250ZXh0Lm1vdmVUb0xvY2F0aW9uKHtcclxuXHRcdFx0XHRcdFx0bGF0aXR1ZGU6IHJlcy5sYXRpdHVkZSxcclxuXHRcdFx0XHRcdFx0bG9uZ2l0dWRlOiByZXMubG9uZ2l0dWRlXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdHNlbGYubGF0aXR1ZGUgPSByZXMubGF0aXR1ZGU7XHJcblx0XHRcdFx0XHRzZWxmLmxvbmdpdHVkZSA9IHJlcy5sb25naXR1ZGU7XHJcblx0XHRcdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjayhyZXMpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vdGVzdFxyXG5cdFx0XHRcdC8vIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGdldExvY2F0aW9uKGNhbGxiYWNrKSB7XHJcblx0XHRcdFx0dW5pLmdldExvY2F0aW9uKHtcclxuXHRcdFx0XHRcdHR5cGU6ICdnY2owMicsXHJcblx0XHRcdFx0XHRzdWNjZXNzKHJlcykge1xyXG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjayhyZXMpO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGNvbXBsZXRlKHJlcykge1xyXG5cdFx0XHRcdFx0XHQvLyBpZiAocmVzLmVyck1zZykge1xyXG5cdFx0XHRcdFx0XHQvLyBcdGNvbnNvbGUubG9nKCdyZXM6ICcsIHJlcyk7XHJcblx0XHRcdFx0XHRcdC8vIH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0cmVzZXRSZWdpb24oKSB7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ3Jlc2V0UmVnaW9uLi4uJyk7XHJcblx0XHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0XHRcdHNlbGYubWFwY29udGV4dC5nZXRSZWdpb24oe1xyXG5cdFx0XHRcdFx0Y29tcGxldGUocmVzKSB7XHJcblx0XHRcdFx0XHRcdHNlbGYuc291dGh3ZXN0ID0gcmVzLnNvdXRod2VzdDtcclxuXHRcdFx0XHRcdFx0c2VsZi5ub3J0aGVhc3QgPSByZXMubm9ydGhlYXN0O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHNlbGYuZ2V0TG9jYXRpb24oKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0dmFyIHJlZnJlc2ggPSBmYWxzZTtcclxuXHRcdFx0XHRcdGlmICghc2VsZi5sYXRpdHVkZSB8fCAhc2VsZi5sb25naXR1ZGUpIHtcclxuXHRcdFx0XHRcdFx0cmVmcmVzaCA9IHRydWU7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR2YXIgbGF0RGlmID0gTWF0aC5hYnMocmVzLmxhdGl0dWRlIC0gc2VsZi5sYXRpdHVkZSk7XHJcblx0XHRcdFx0XHRcdHZhciBsb25nRGlmID0gTWF0aC5hYnMocmVzLmxvbmdpdHVkZSAtIHNlbGYubG9uZ2l0dWRlKTtcclxuXHRcdFx0XHRcdFx0aWYgKGxhdERpZiA+IDAuMDAxIHx8IGxvbmdEaWYgPiAwLjAwMSkge1xyXG5cdFx0XHRcdFx0XHRcdHJlZnJlc2ggPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAocmVmcmVzaCkge1xyXG5cdFx0XHRcdFx0XHRzZWxmLmxhdGl0dWRlID0gcmVzLmxhdGl0dWRlO1xyXG5cdFx0XHRcdFx0XHRzZWxmLmxvbmdpdHVkZSA9IHJlcy5sb25naXR1ZGU7XHJcblx0XHRcdFx0XHRcdHNlbGYuc2VuZFdzTXNnKG51bGwpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0c2VsZi5yZXNldFJlZ2lvbigpO1xyXG5cdFx0XHRcdH0sIDMwMDApO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjaGVja01zZyhtc2dPYmopIHtcclxuXHRcdFx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHRcdFx0aWYgKCFzZWxmLnNvdXRod2VzdCB8fCAhc2VsZi5ub3J0aGVhc3QpIHtcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKG1zZ09iai5sb25naXR1ZGUgPiBzZWxmLnNvdXRod2VzdC5sb25naXR1ZGUgJiYgXHJcblx0XHRcdFx0XHRcdG1zZ09iai5sb25naXR1ZGUgPCBzZWxmLm5vcnRoZWFzdC5sb25naXR1ZGUgJiZcclxuXHRcdFx0XHRcdFx0bXNnT2JqLmxhdGl0dWRlID4gc2VsZi5zb3V0aHdlc3QubGF0aXR1ZGUgJiZcclxuXHRcdFx0XHRcdFx0bXNnT2JqLmxhdGl0dWRlIDwgc2VsZi5ub3J0aGVhc3QubGF0aXR1ZGVcclxuXHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0sXHJcblx0XHRcdGd1aWQoKSB7XHJcblx0XHRcdFx0cmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcclxuXHRcdFx0XHRcdHZhciByID0gTWF0aC5yYW5kb20oKSAqIDE2IHwgMCxcclxuXHRcdFx0XHRcdFx0diA9IGMgPT0gJ3gnID8gciA6IChyICYgMHgzIHwgMHg4KTtcclxuXHRcdFx0XHRcdHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0aW5pdFdlYlNvY2tldCgpIHtcclxuXHRcdFx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHRcdFx0Ly93ZWJTb2NrZXRcclxuXHRcdFx0XHRpZiAoIXNlbGYuc2lkKSB7XHJcblx0XHRcdFx0XHRzZWxmLnNpZCA9IHNlbGYuZ3VpZCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRzZWxmLnNvY2tldFRhc2sgPSB1bmkuY29ubmVjdFNvY2tldCh7XHJcblx0XHRcdFx0XHR1cmw6ICd3czovLzExOS4yOS4xMzkuNDI6OTA5MC93cy8nICsgc2VsZi5zaWQsXHJcblx0XHRcdFx0XHRjb21wbGV0ZTogKCk9PiB7fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHNlbGYuc29ja2V0VGFzay5vbk9wZW4oKCkgPT4ge1xyXG5cdFx0XHRcdCAgY29uc29sZS5sb2coJ1dlYlNvY2tldOi/nuaOpeW3suaJk+W8gO+8gScpO1xyXG5cdFx0XHRcdFx0c2VsZi5yZW9sYWRQb3NpdGlvbigocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdHNlbGYuc2VuZFdzTXNnKG51bGwpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0c2VsZi5zb2NrZXRUYXNrLm9uRXJyb3IoKGUpID0+IHtcclxuXHRcdFx0XHQgIGNvbnNvbGUubG9nKCdXZWJTb2NrZXTov57mjqXmiZPlvIDlpLHotKXvvIzor7fmo4Dmn6XvvIEnLCBlKTtcclxuXHRcdFx0XHRcdHNlbGYuc29ja2V0VGFzayA9IG51bGw7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0c2VsZi5zb2NrZXRUYXNrLm9uQ2xvc2UoKCkgPT4ge1xyXG5cdFx0XHRcdCAgY29uc29sZS5sb2coJ1dlYlNvY2tldOi/nuaOpeWFs+mXre+8gScpO1xyXG5cdFx0XHRcdFx0c2VsZi5zb2NrZXRUYXNrID0gbnVsbDtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRzZWxmLnNvY2tldFRhc2sub25NZXNzYWdlKChyZXMpID0+IHtcclxuXHRcdFx0XHQgIGNvbnNvbGUubG9nKCfmlLbliLDmnI3liqHlmajlhoXlrrnvvJonICsgcmVzLmRhdGEpO1xyXG5cdFx0XHRcdFx0Ly9UT0RPOiBcclxuXHRcdFx0XHRcdHZhciBtc2cgPSBKU09OLnBhcnNlKHJlcy5kYXRhKTtcclxuXHRcdFx0XHRcdHZhciBjaGVja1Jlc3VsdCA9IHNlbGYuY2hlY2tNc2cobXNnKTtcclxuXHRcdFx0XHRcdGlmIChjaGVja1Jlc3VsdCkge1xyXG5cdFx0XHRcdFx0XHRzZWxmLm1lc3NhZ2VMaXN0LnB1c2goe1xyXG5cdFx0XHRcdFx0XHRcdGxhdGl0dWRlOiBtc2cubGF0aXR1ZGUsXHJcblx0XHRcdFx0XHRcdFx0bG9uZ2l0dWRlOiBtc2cubG9uZ2l0dWRlLFxyXG5cdFx0XHRcdFx0XHRcdG1lc3NhZ2U6IG1zZy5tZXNzYWdlXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZW5kV3NNc2cobXNnKSB7XHJcblx0XHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0XHRcdGlmICghc2VsZi5zaWQgfHwgIXNlbGYuc29ja2V0VGFzaykge1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR2YXIgZGF0YSA9IHtcclxuXHRcdFx0XHRcdHNpZDogc2VsZi5zaWQsXHJcblx0XHRcdFx0XHRtZXNzYWdlOiBtc2csXHJcblx0XHRcdFx0XHRsb25naXR1ZGU6IHNlbGYubG9uZ2l0dWRlLFxyXG5cdFx0XHRcdFx0bGF0aXR1ZGU6IHNlbGYubGF0aXR1ZGVcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdHNlbGYuc29ja2V0VGFzay5zZW5kKHtcclxuXHRcdFx0XHRcdGRhdGE6IEpTT04uc3RyaW5naWZ5KGRhdGEpXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGNhbGxvdXR0YXAoZSkge1xyXG5cdFx0XHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdFx0XHR2YXIgbXNnT2JqID0gc2VsZi5tYXJrZXJPYmpzW2UuZGV0YWlsLm1hcmtlcklkXTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhtc2dPYmopO1xyXG5cdFx0XHRcdGlmIChtc2dPYmopIHtcclxuXHRcdFx0XHRcdFx0bXNnT2JqLnRpbWVTdGFtcD1EYXRlLm5vdygpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0ZXN0KCkge1xyXG5cdFx0XHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdFx0XHQvLyBmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuXHRcdFx0XHQvLyBcdHNlbGYubWVzc2FnZUxpc3QucHVzaCh7XHJcblx0XHRcdFx0Ly8gXHRcdGxhdGl0dWRlOiAzOS45MDkgKyAoaS8xMDAwKSxcclxuXHRcdFx0XHQvLyBcdFx0bG9uZ2l0dWRlOiAxMTYuMzk3NDIgKyAoaS8xMDAwKSxcclxuXHRcdFx0XHQvLyBcdFx0bWVzc2FnZTogJ2lzICcgKyBpXHJcblx0XHRcdFx0Ly8gXHR9KTtcclxuXHRcdFx0XHQvLyB9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvblJlYWR5KCkge1xyXG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHRcdGlmIChzZWxmLnNvY2tldFRhc2spIHtcclxuXHRcdFx0XHRzZWxmLnNvY2tldFRhc2suY2xvc2UoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzZWxmLm1hcGNvbnRleHQgPSB1bmkuY3JlYXRlTWFwQ29udGV4dCgnbWFwJywgc2VsZik7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdvbiByZWFkeScpO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gcGx1cy5kZXZpY2UuZ2V0SW5mbyh7XHJcblx0XHRcdC8vIFx0c3VjY2VzczpmdW5jdGlvbihlKXtcclxuXHRcdFx0Ly8gXHRcdHNlbGYuc2lkID0gZS51dWlkO1xyXG5cdFx0XHQvLyBcdH0sXHJcblx0XHRcdC8vIH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0c2VsZi5yZW9sYWRQb3NpdGlvbigpO1xyXG5cdFx0XHRcdHNlbGYuaW5pdFdlYlNvY2tldCgpO1xyXG5cdFx0XHRcdHNlbGYuc2hvd0NhbGxvdXQoKTtcclxuXHRcdFx0XHRzZWxmLnJlc2V0UmVnaW9uKCk7XHJcblx0XHRcdH0sIDEwMDApO1xyXG5cdFx0XHRcclxuXHRcdFx0c2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0XHRcdGlmIChzZWxmLnNvY2tldFRhc2spIHtcclxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdzb2NrZXRUYXNrIGlzIGFsaXZlJyk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHNlbGYuaW5pdFdlYlNvY2tldCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwgNTAwMCk7XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblx0Lm1haW4ge1xyXG5cdFx0LyogYmFja2dyb3VuZC1jb2xvcjogIzAwN0FGRjsgKi9cclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdHRvcDogMDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHR9XHJcblxyXG5cdC5tYXAtY29udGFpbmVyIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdGJvdHRvbTogNTBweDtcclxuXHRcdC8qIGJhY2tncm91bmQtY29sb3I6ICNERDUyNEQ7ICovXHJcblx0fVxyXG5cclxuXHQubWFwIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdHRvcDogMDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHR9XHJcblxyXG5cdC5pbnB1dCB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG5cdFx0cGFkZGluZzogOHB4IDE1cHg7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiA5MHB4O1xyXG5cdFx0aGVpZ2h0OiA1MHB4O1xyXG5cdH1cclxuXHJcblx0Lm1lc3NhZ2Uge1xyXG5cdFx0Ym9yZGVyOiAxcHggc29saWQgIzY2YWZlOTtcclxuXHRcdHBhZGRpbmc6IDZweCAxMnB4O1xyXG5cdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDE0cHg7XHJcblx0XHRjb2xvcjogIzU1NTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0XHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0XHRoZWlnaHQ6IDM0cHg7XHJcblx0fVxyXG5cclxuXHQuc2VuZC1idG4ge1xyXG5cdFx0cGFkZGluZzogMCAxMHB4O1xyXG5cdFx0aGVpZ2h0OiAzMHB4O1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAxMHB4O1xyXG5cdFx0cmlnaHQ6IDEwcHg7XHJcblx0XHR3aWR0aDogNjBweDtcclxuXHR9XHJcbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

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
/*!****************************************************************************************************!*\
  !*** E:/project/app/range-chat/pages/index/index.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=style&index=0&lang=css&mpType=page */ 11);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 11 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/project/app/range-chat/pages/index/index.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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