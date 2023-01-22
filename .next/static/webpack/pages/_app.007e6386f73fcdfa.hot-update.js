"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/http/index.js":
/*!***************************!*\
  !*** ./src/http/index.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AllOpinion\": function() { return /* binding */ AllOpinion; },\n/* harmony export */   \"allContent\": function() { return /* binding */ allContent; },\n/* harmony export */   \"login\": function() { return /* binding */ login; },\n/* harmony export */   \"menuCategory\": function() { return /* binding */ menuCategory; },\n/* harmony export */   \"menuCountry\": function() { return /* binding */ menuCountry; },\n/* harmony export */   \"multipleVideo\": function() { return /* binding */ multipleVideo; },\n/* harmony export */   \"singleOpinion\": function() { return /* binding */ singleOpinion; },\n/* harmony export */   \"singleVideoById\": function() { return /* binding */ singleVideoById; },\n/* harmony export */   \"userRegister\": function() { return /* binding */ userRegister; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: \"https://express.digitemtech.com/api\",\n    headers: {\n        \"Content-Type\": \"application/json\"\n    }\n});\nconst login = async (data)=>api.post(\"/login\", data);\nconst userRegister = async (data)=>api.post(\"/signup\", data);\n// get all menu cotegory\nconst menuCategory = async ()=>api.get(\"/category/all\");\n// get all menu country\nconst menuCountry = async ()=>api.get(\"/country/all\");\n// get all content\nconst allContent = async ()=>api.get(\"/acontent/all\");\nconst multipleVideo = async (data)=>api.post(\"/video/multiple\", data);\nconst singleVideoById = async (data)=>api.post(\"/video/single\", data);\nconst AllOpinion = async (data)=>api.post(\"/opinion/multiple\", data);\n_c = AllOpinion;\nconst singleOpinion = async (data)=>api.post(\"/opinion/single\", data);\nvar _c;\n$RefreshReg$(_c, \"AllOpinion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaHR0cC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTBCO0FBRTFCLE1BQU1DLE1BQU1ELG9EQUFZLENBQUM7SUFDdkJHLFNBQVE7SUFDUkMsU0FBUTtRQUNOLGdCQUFlO0lBQ2pCO0FBQ0Y7QUFFTyxNQUFNQyxRQUFRLE9BQU9DLE9BQU9MLElBQUlNLElBQUksQ0FBQyxVQUFTRCxNQUFNO0FBRXBELE1BQU1FLGVBQWUsT0FBT0YsT0FBT0wsSUFBSU0sSUFBSSxDQUFDLFdBQVVELE1BQU07QUFFbkUsd0JBQXdCO0FBQ2pCLE1BQU1HLGVBQWUsVUFBVVIsSUFBSVMsR0FBRyxDQUFDLGlCQUFpQjtBQUUvRCx1QkFBdUI7QUFDaEIsTUFBTUMsY0FBYyxVQUFVVixJQUFJUyxHQUFHLENBQUMsZ0JBQWdCO0FBRTdELGtCQUFrQjtBQUVYLE1BQU1FLGFBQWEsVUFBVVgsSUFBSVMsR0FBRyxDQUFDLGlCQUFpQjtBQUV0RCxNQUFNRyxnQkFBZ0IsT0FBT1AsT0FBT0wsSUFBSU0sSUFBSSxDQUFDLG1CQUFrQkQsTUFBTTtBQUNyRSxNQUFNUSxrQkFBa0IsT0FBT1IsT0FBT0wsSUFBSU0sSUFBSSxDQUFDLGlCQUFnQkQsTUFBTTtBQUNyRSxNQUFNUyxhQUFhLE9BQU9ULE9BQU9MLElBQUlNLElBQUksQ0FBQyxxQkFBb0JELE1BQU07S0FBOURTO0FBQ04sTUFBTUMsZ0JBQWdCLE9BQU9WLE9BQU9MLElBQUlNLElBQUksQ0FBQyxtQkFBa0JELE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2h0dHAvaW5kZXguanM/MjU2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBhcGkgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6J2h0dHBzOi8vZXhwcmVzcy5kaWdpdGVtdGVjaC5jb20vYXBpJyxcclxuICBoZWFkZXJzOntcclxuICAgICdDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ1xyXG4gIH1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpbiA9IGFzeW5jIChkYXRhKT0+YXBpLnBvc3QoJy9sb2dpbicsZGF0YSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclJlZ2lzdGVyID0gYXN5bmMgKGRhdGEpPT5hcGkucG9zdCgnL3NpZ251cCcsZGF0YSk7XHJcblxyXG4vLyBnZXQgYWxsIG1lbnUgY290ZWdvcnlcclxuZXhwb3J0IGNvbnN0IG1lbnVDYXRlZ29yeSA9IGFzeW5jICgpPT5hcGkuZ2V0KCcvY2F0ZWdvcnkvYWxsJyk7XHJcblxyXG4vLyBnZXQgYWxsIG1lbnUgY291bnRyeVxyXG5leHBvcnQgY29uc3QgbWVudUNvdW50cnkgPSBhc3luYyAoKT0+YXBpLmdldCgnL2NvdW50cnkvYWxsJyk7XHJcblxyXG4vLyBnZXQgYWxsIGNvbnRlbnRcclxuXHJcbmV4cG9ydCBjb25zdCBhbGxDb250ZW50ID0gYXN5bmMgKCk9PmFwaS5nZXQoJy9hY29udGVudC9hbGwnKTtcclxuXHJcbmV4cG9ydCBjb25zdCBtdWx0aXBsZVZpZGVvID0gYXN5bmMgKGRhdGEpPT5hcGkucG9zdCgnL3ZpZGVvL211bHRpcGxlJyxkYXRhKTtcclxuZXhwb3J0IGNvbnN0IHNpbmdsZVZpZGVvQnlJZCA9IGFzeW5jIChkYXRhKT0+YXBpLnBvc3QoJy92aWRlby9zaW5nbGUnLGRhdGEpO1xyXG5leHBvcnQgY29uc3QgQWxsT3BpbmlvbiA9IGFzeW5jIChkYXRhKT0+YXBpLnBvc3QoJy9vcGluaW9uL211bHRpcGxlJyxkYXRhKTtcclxuZXhwb3J0IGNvbnN0IHNpbmdsZU9waW5pb24gPSBhc3luYyAoZGF0YSk9PmFwaS5wb3N0KCcvb3Bpbmlvbi9zaW5nbGUnLGRhdGEpO1xyXG5cclxuIl0sIm5hbWVzIjpbImF4aW9zIiwiYXBpIiwiY3JlYXRlIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJsb2dpbiIsImRhdGEiLCJwb3N0IiwidXNlclJlZ2lzdGVyIiwibWVudUNhdGVnb3J5IiwiZ2V0IiwibWVudUNvdW50cnkiLCJhbGxDb250ZW50IiwibXVsdGlwbGVWaWRlbyIsInNpbmdsZVZpZGVvQnlJZCIsIkFsbE9waW5pb24iLCJzaW5nbGVPcGluaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/http/index.js\n"));

/***/ })

});