"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/image/[slug]";
exports.ids = ["pages/image/[slug]"];
exports.modules = {

/***/ "./src/http/index.js":
/*!***************************!*\
  !*** ./src/http/index.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AllOpinion\": () => (/* binding */ AllOpinion),\n/* harmony export */   \"allContent\": () => (/* binding */ allContent),\n/* harmony export */   \"allFeatured\": () => (/* binding */ allFeatured),\n/* harmony export */   \"allImage\": () => (/* binding */ allImage),\n/* harmony export */   \"allMustSee\": () => (/* binding */ allMustSee),\n/* harmony export */   \"allNews\": () => (/* binding */ allNews),\n/* harmony export */   \"allPodcast\": () => (/* binding */ allPodcast),\n/* harmony export */   \"allStory\": () => (/* binding */ allStory),\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"menuCategory\": () => (/* binding */ menuCategory),\n/* harmony export */   \"menuCountry\": () => (/* binding */ menuCountry),\n/* harmony export */   \"multipleVideo\": () => (/* binding */ multipleVideo),\n/* harmony export */   \"singleImage\": () => (/* binding */ singleImage),\n/* harmony export */   \"singleNews\": () => (/* binding */ singleNews),\n/* harmony export */   \"singleOpinion\": () => (/* binding */ singleOpinion),\n/* harmony export */   \"singlePodcast\": () => (/* binding */ singlePodcast),\n/* harmony export */   \"singleVideoById\": () => (/* binding */ singleVideoById),\n/* harmony export */   \"updateArticle\": () => (/* binding */ updateArticle),\n/* harmony export */   \"userRegister\": () => (/* binding */ userRegister)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: \"https://express.digitemtech.com/api\",\n    headers: {\n        \"Content-Type\": \"application/json\"\n    }\n});\nconst login = async (data)=>api.post(\"/login\", data);\nconst userRegister = async (data)=>api.post(\"/signup\", data);\n// get all menu cotegory\nconst menuCategory = async ()=>api.get(\"/category/all\");\n// get all menu country\nconst menuCountry = async ()=>api.get(\"/country/all\");\n// get all content\nconst allContent = async ()=>api.get(\"/acontent/all\");\nconst multipleVideo = async (data)=>api.post(\"/video/multiple\", data);\nconst singleVideoById = async (data)=>api.post(\"/video/single\", data);\nconst AllOpinion = async (data)=>api.post(\"/opinion/multiple\", data);\nconst singleOpinion = async (data)=>api.post(\"/opinion/single\", data);\nconst allImage = async (data)=>api.post(\"/image/multiple\", data);\nconst singleImage = async (data)=>api.post(\"/image/single\", data);\nconst allPodcast = async (data)=>api.post(\"/podcast/multiple\", data);\nconst singlePodcast = async (data)=>api.post(\"/podcast/single\", data);\nconst allNews = async (data)=>api.post(\"/news/multiple\", data);\nconst singleNews = async (data)=>api.post(\"/news/single\", data);\nconst allMustSee = async (data)=>api.post(\"/article/mustsee/multiple\", data);\nconst allStory = async (data)=>api.post(\"/article/story/multiple\", data);\nconst allFeatured = async (data)=>api.post(\"/article/featured/multiple\", data);\nconst updateArticle = async (data)=>api.post(\"/article/edit/view\", data);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaHR0cC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUUxQixNQUFNQyxNQUFNRCxvREFBWSxDQUFDO0lBQ3ZCRyxTQUFRO0lBQ1JDLFNBQVE7UUFDTixnQkFBZTtJQUNqQjtBQUNGO0FBRU8sTUFBTUMsUUFBUSxPQUFPQyxPQUFPTCxJQUFJTSxJQUFJLENBQUMsVUFBU0QsTUFBTTtBQUVwRCxNQUFNRSxlQUFlLE9BQU9GLE9BQU9MLElBQUlNLElBQUksQ0FBQyxXQUFVRCxNQUFNO0FBRW5FLHdCQUF3QjtBQUNqQixNQUFNRyxlQUFlLFVBQVVSLElBQUlTLEdBQUcsQ0FBQyxpQkFBaUI7QUFFL0QsdUJBQXVCO0FBQ2hCLE1BQU1DLGNBQWMsVUFBVVYsSUFBSVMsR0FBRyxDQUFDLGdCQUFnQjtBQUU3RCxrQkFBa0I7QUFFWCxNQUFNRSxhQUFhLFVBQVVYLElBQUlTLEdBQUcsQ0FBQyxpQkFBaUI7QUFFdEQsTUFBTUcsZ0JBQWdCLE9BQU9QLE9BQU9MLElBQUlNLElBQUksQ0FBQyxtQkFBa0JELE1BQU07QUFDckUsTUFBTVEsa0JBQWtCLE9BQU9SLE9BQU9MLElBQUlNLElBQUksQ0FBQyxpQkFBZ0JELE1BQU07QUFDckUsTUFBTVMsYUFBYSxPQUFPVCxPQUFPTCxJQUFJTSxJQUFJLENBQUMscUJBQW9CRCxNQUFNO0FBQ3BFLE1BQU1VLGdCQUFnQixPQUFPVixPQUFPTCxJQUFJTSxJQUFJLENBQUMsbUJBQWtCRCxNQUFNO0FBQ3JFLE1BQU1XLFdBQVcsT0FBT1gsT0FBT0wsSUFBSU0sSUFBSSxDQUFDLG1CQUFrQkQsTUFBTTtBQUNoRSxNQUFNWSxjQUFjLE9BQU9aLE9BQU9MLElBQUlNLElBQUksQ0FBQyxpQkFBZ0JELE1BQU07QUFDakUsTUFBTWEsYUFBYSxPQUFPYixPQUFPTCxJQUFJTSxJQUFJLENBQUMscUJBQW9CRCxNQUFNO0FBQ3BFLE1BQU1jLGdCQUFnQixPQUFPZCxPQUFPTCxJQUFJTSxJQUFJLENBQUMsbUJBQWtCRCxNQUFNO0FBQ3JFLE1BQU1lLFVBQVUsT0FBT2YsT0FBT0wsSUFBSU0sSUFBSSxDQUFDLGtCQUFpQkQsTUFBTTtBQUM5RCxNQUFNZ0IsYUFBYSxPQUFPaEIsT0FBT0wsSUFBSU0sSUFBSSxDQUFDLGdCQUFlRCxNQUFNO0FBQy9ELE1BQU1pQixhQUFhLE9BQU9qQixPQUFPTCxJQUFJTSxJQUFJLENBQUMsNkJBQTRCRCxNQUFNO0FBQzVFLE1BQU1rQixXQUFXLE9BQU9sQixPQUFPTCxJQUFJTSxJQUFJLENBQUMsMkJBQTBCRCxNQUFNO0FBQ3hFLE1BQU1tQixjQUFjLE9BQU9uQixPQUFPTCxJQUFJTSxJQUFJLENBQUMsOEJBQTZCRCxNQUFNO0FBQzlFLE1BQU1vQixnQkFBZ0IsT0FBT3BCLE9BQU9MLElBQUlNLElBQUksQ0FBQyxzQkFBcUJELE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hc2lhbi10cmFja2VyLy4vc3JjL2h0dHAvaW5kZXguanM/MjU2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBhcGkgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6J2h0dHBzOi8vZXhwcmVzcy5kaWdpdGVtdGVjaC5jb20vYXBpJyxcclxuICBoZWFkZXJzOntcclxuICAgICdDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ1xyXG4gIH1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpbiA9IGFzeW5jIChkYXRhKT0+YXBpLnBvc3QoJy9sb2dpbicsZGF0YSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclJlZ2lzdGVyID0gYXN5bmMgKGRhdGEpPT5hcGkucG9zdCgnL3NpZ251cCcsZGF0YSk7XHJcblxyXG4vLyBnZXQgYWxsIG1lbnUgY290ZWdvcnlcclxuZXhwb3J0IGNvbnN0IG1lbnVDYXRlZ29yeSA9IGFzeW5jICgpPT5hcGkuZ2V0KCcvY2F0ZWdvcnkvYWxsJyk7XHJcblxyXG4vLyBnZXQgYWxsIG1lbnUgY291bnRyeVxyXG5leHBvcnQgY29uc3QgbWVudUNvdW50cnkgPSBhc3luYyAoKT0+YXBpLmdldCgnL2NvdW50cnkvYWxsJyk7XHJcblxyXG4vLyBnZXQgYWxsIGNvbnRlbnRcclxuXHJcbmV4cG9ydCBjb25zdCBhbGxDb250ZW50ID0gYXN5bmMgKCk9PmFwaS5nZXQoJy9hY29udGVudC9hbGwnKTtcclxuXHJcbmV4cG9ydCBjb25zdCBtdWx0aXBsZVZpZGVvID0gYXN5bmMgKGRhdGEpPT5hcGkucG9zdCgnL3ZpZGVvL211bHRpcGxlJyxkYXRhKTtcclxuZXhwb3J0IGNvbnN0IHNpbmdsZVZpZGVvQnlJZCA9IGFzeW5jIChkYXRhKT0+YXBpLnBvc3QoJy92aWRlby9zaW5nbGUnLGRhdGEpO1xyXG5leHBvcnQgY29uc3QgQWxsT3BpbmlvbiA9IGFzeW5jIChkYXRhKT0+YXBpLnBvc3QoJy9vcGluaW9uL211bHRpcGxlJyxkYXRhKTtcclxuZXhwb3J0IGNvbnN0IHNpbmdsZU9waW5pb24gPSBhc3luYyAoZGF0YSk9PmFwaS5wb3N0KCcvb3Bpbmlvbi9zaW5nbGUnLGRhdGEpO1xyXG5leHBvcnQgY29uc3QgYWxsSW1hZ2UgPSBhc3luYyAoZGF0YSk9PmFwaS5wb3N0KCcvaW1hZ2UvbXVsdGlwbGUnLGRhdGEpO1xyXG5leHBvcnQgY29uc3Qgc2luZ2xlSW1hZ2UgPSBhc3luYyAoZGF0YSk9PmFwaS5wb3N0KCcvaW1hZ2Uvc2luZ2xlJyxkYXRhKTtcclxuZXhwb3J0IGNvbnN0IGFsbFBvZGNhc3QgPSBhc3luYyAoZGF0YSk9PmFwaS5wb3N0KCcvcG9kY2FzdC9tdWx0aXBsZScsZGF0YSk7XHJcbmV4cG9ydCBjb25zdCBzaW5nbGVQb2RjYXN0ID0gYXN5bmMgKGRhdGEpPT5hcGkucG9zdCgnL3BvZGNhc3Qvc2luZ2xlJyxkYXRhKTtcclxuZXhwb3J0IGNvbnN0IGFsbE5ld3MgPSBhc3luYyAoZGF0YSk9PmFwaS5wb3N0KCcvbmV3cy9tdWx0aXBsZScsZGF0YSk7XHJcbmV4cG9ydCBjb25zdCBzaW5nbGVOZXdzID0gYXN5bmMgKGRhdGEpPT5hcGkucG9zdCgnL25ld3Mvc2luZ2xlJyxkYXRhKTtcclxuZXhwb3J0IGNvbnN0IGFsbE11c3RTZWUgPSBhc3luYyAoZGF0YSk9PmFwaS5wb3N0KCcvYXJ0aWNsZS9tdXN0c2VlL211bHRpcGxlJyxkYXRhKTtcclxuZXhwb3J0IGNvbnN0IGFsbFN0b3J5ID0gYXN5bmMgKGRhdGEpPT5hcGkucG9zdCgnL2FydGljbGUvc3RvcnkvbXVsdGlwbGUnLGRhdGEpO1xyXG5leHBvcnQgY29uc3QgYWxsRmVhdHVyZWQgPSBhc3luYyAoZGF0YSk9PmFwaS5wb3N0KCcvYXJ0aWNsZS9mZWF0dXJlZC9tdWx0aXBsZScsZGF0YSk7XHJcbmV4cG9ydCBjb25zdCB1cGRhdGVBcnRpY2xlID0gYXN5bmMgKGRhdGEpPT5hcGkucG9zdCgnL2FydGljbGUvZWRpdC92aWV3JyxkYXRhKTtcclxuXHJcblxyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJhcGkiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaGVhZGVycyIsImxvZ2luIiwiZGF0YSIsInBvc3QiLCJ1c2VyUmVnaXN0ZXIiLCJtZW51Q2F0ZWdvcnkiLCJnZXQiLCJtZW51Q291bnRyeSIsImFsbENvbnRlbnQiLCJtdWx0aXBsZVZpZGVvIiwic2luZ2xlVmlkZW9CeUlkIiwiQWxsT3BpbmlvbiIsInNpbmdsZU9waW5pb24iLCJhbGxJbWFnZSIsInNpbmdsZUltYWdlIiwiYWxsUG9kY2FzdCIsInNpbmdsZVBvZGNhc3QiLCJhbGxOZXdzIiwic2luZ2xlTmV3cyIsImFsbE11c3RTZWUiLCJhbGxTdG9yeSIsImFsbEZlYXR1cmVkIiwidXBkYXRlQXJ0aWNsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/http/index.js\n");

/***/ }),

/***/ "./src/pages/image/[slug].js":
/*!***********************************!*\
  !*** ./src/pages/image/[slug].js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http */ \"./src/http/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_http__WEBPACK_IMPORTED_MODULE_2__]);\n_http__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst singleImageArticle = ({ data  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data.title\n    }, void 0, false, {\n        fileName: \"D:\\\\sanojproject\\\\asian-tracker\\\\src\\\\pages\\\\image\\\\[slug].js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (singleImageArticle);\nasync function getServerSideProps(context) {\n    const { slug  } = context.query;\n    let object = {};\n    if (slug) {\n        object[\"slug\"] = slug;\n    }\n    console.log(object);\n    const { data  } = await (0,_http__WEBPACK_IMPORTED_MODULE_2__.singleImage)(object);\n    return {\n        props: {\n            data\n        }\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW1hZ2UvW3NsdWddLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUF5QjtBQUNlO0FBQ3hDLE1BQU1FLHFCQUFxQixDQUFDLEVBQUNDLEtBQUksRUFBQyxHQUFLO0lBQ3JDLHFCQUNFLDhEQUFDQztrQkFBS0QsS0FBS0UsS0FBSzs7Ozs7O0FBRXBCO0FBRUEsaUVBQWVILGtCQUFrQkEsRUFBQTtBQUUxQixlQUFlSSxtQkFBbUJDLE9BQU8sRUFBRTtJQUVoRCxNQUFNLEVBQUVDLEtBQUksRUFBRSxHQUFHRCxRQUFRRSxLQUFLO0lBQzlCLElBQUlDLFNBQVMsQ0FDYjtJQUVBLElBQUlGLE1BQU07UUFDUkUsTUFBTSxDQUFDLE9BQU8sR0FBR0Y7SUFDbkIsQ0FBQztJQUNIRyxRQUFRQyxHQUFHLENBQUNGO0lBQ1YsTUFBTSxFQUFFUCxLQUFJLEVBQUUsR0FBRyxNQUFNRixrREFBV0EsQ0FBQ1M7SUFFbkMsT0FBTztRQUNMRyxPQUFPO1lBQUVWO1FBQUs7SUFDaEI7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXNpYW4tdHJhY2tlci8uL3NyYy9wYWdlcy9pbWFnZS9bc2x1Z10uanM/NzFlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHNpbmdsZUltYWdlIH0gZnJvbSAnLi4vLi4vaHR0cCdcclxuY29uc3Qgc2luZ2xlSW1hZ2VBcnRpY2xlID0gKHtkYXRhfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PntkYXRhLnRpdGxlfTwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2luZ2xlSW1hZ2VBcnRpY2xlXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuXHJcbiAgY29uc3QgeyBzbHVnIH0gPSBjb250ZXh0LnF1ZXJ5O1xyXG4gIGxldCBvYmplY3QgPSB7XHJcbiAgfTtcclxuXHJcbiAgaWYgKHNsdWcpIHtcclxuICAgIG9iamVjdFsnc2x1ZyddID0gc2x1ZztcclxuICB9XHJcbmNvbnNvbGUubG9nKG9iamVjdClcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHNpbmdsZUltYWdlKG9iamVjdCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBkYXRhIH1cclxuICB9XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJzaW5nbGVJbWFnZSIsInNpbmdsZUltYWdlQXJ0aWNsZSIsImRhdGEiLCJkaXYiLCJ0aXRsZSIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJzbHVnIiwicXVlcnkiLCJvYmplY3QiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/image/[slug].js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/image/[slug].js"));
module.exports = __webpack_exports__;

})();