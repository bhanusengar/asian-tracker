"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/category/[slug]",{

/***/ "./src/components/news/MainNews.js":
/*!*****************************************!*\
  !*** ./src/components/news/MainNews.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../utils */ \"./utils/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst MainNews = (param)=>{\n    let { newsItem , title =\"\"  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const navigate = (id)=>router.push({\n            pathname: \"/article/something\"\n        });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        class: \"farme-meun-box\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"sideber-menu\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"sideber-menu-text\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: newsItem.urltoimage\n                    }, void 0, false, {\n                        fileName: \"D:\\\\sanojproject\\\\asian-tracker\\\\src\\\\components\\\\news\\\\MainNews.js\",\n                        lineNumber: 18,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"text-conter\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                onClick: ()=>navigate(),\n                                href: \"#\",\n                                className: \"text-decoration-none text-default\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: newsItem.title\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\sanojproject\\\\asian-tracker\\\\src\\\\components\\\\news\\\\MainNews.js\",\n                                    lineNumber: 20,\n                                    columnNumber: 116\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\sanojproject\\\\asian-tracker\\\\src\\\\components\\\\news\\\\MainNews.js\",\n                                lineNumber: 20,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: newsItem.description\n                            }, void 0, false, {\n                                fileName: \"D:\\\\sanojproject\\\\asian-tracker\\\\src\\\\components\\\\news\\\\MainNews.js\",\n                                lineNumber: 21,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\sanojproject\\\\asian-tracker\\\\src\\\\components\\\\news\\\\MainNews.js\",\n                        lineNumber: 19,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            (0,_utils__WEBPACK_IMPORTED_MODULE_2__.formatDate)(newsItem.publishedAt),\n                            \"|\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-capitalize\",\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"D:\\\\sanojproject\\\\asian-tracker\\\\src\\\\components\\\\news\\\\MainNews.js\",\n                                lineNumber: 23,\n                                columnNumber: 62\n                            }, undefined),\n                            \"| 2hrs\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\sanojproject\\\\asian-tracker\\\\src\\\\components\\\\news\\\\MainNews.js\",\n                        lineNumber: 23,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\sanojproject\\\\asian-tracker\\\\src\\\\components\\\\news\\\\MainNews.js\",\n                lineNumber: 17,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\sanojproject\\\\asian-tracker\\\\src\\\\components\\\\news\\\\MainNews.js\",\n            lineNumber: 16,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\sanojproject\\\\asian-tracker\\\\src\\\\components\\\\news\\\\MainNews.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MainNews, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = MainNews;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainNews);\nvar _c;\n$RefreshReg$(_c, \"MainNews\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9uZXdzL01haW5OZXdzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBeUI7QUFDa0I7QUFDZjtBQUNZO0FBQ3hDLE1BQU1JLFdBQVcsU0FBMEI7UUFBekIsRUFBQ0MsU0FBUSxFQUFFQyxPQUFNLEdBQUUsRUFBQzs7SUFFbEMsTUFBTUMsU0FBU0osc0RBQVNBO0lBRXhCLE1BQU1LLFdBQVcsQ0FBQ0MsS0FDbEJGLE9BQU9HLElBQUksQ0FBQztZQUNWQyxVQUFVO1FBRVo7SUFDQSxxQkFDSSw4REFBQ0M7UUFBSUMsT0FBTTtrQkFDUCw0RUFBQ0Q7WUFBSUMsT0FBTTtzQkFDUCw0RUFBQ0Q7Z0JBQUlDLE9BQU07O2tDQUNQLDhEQUFDQzt3QkFBSUMsS0FBS1YsU0FBU1csVUFBVTs7Ozs7O2tDQUM3Qiw4REFBQ0o7d0JBQUlDLE9BQU07OzBDQUNQLDhEQUFDSTtnQ0FBS0MsU0FBUyxJQUFNVjtnQ0FBWVcsTUFBTTtnQ0FBS0MsV0FBVTswQ0FBcUMsNEVBQUNDOzhDQUFJaEIsU0FBU0MsS0FBSzs7Ozs7Ozs7Ozs7MENBQzlHLDhEQUFDZ0I7MENBQUdqQixTQUFTa0IsV0FBVzs7Ozs7Ozs7Ozs7O2tDQUU1Qiw4REFBQ047OzRCQUFNaEIsa0RBQVVBLENBQUNJLFNBQVNtQixXQUFXOzRCQUFFOzBDQUFDLDhEQUFDUDtnQ0FBS0csV0FBVTswQ0FBbUJkOzs7Ozs7NEJBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzdHO0dBdkJNRjs7UUFFYUQsa0RBQVNBOzs7S0FGdEJDO0FBeUJOLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL25ld3MvTWFpbk5ld3MuanM/N2EwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Zm9ybWF0RGF0ZX0gZnJvbSAnLi8uLi8uLi8uLi91dGlscydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmNvbnN0IE1haW5OZXdzID0gKHtuZXdzSXRlbSwgdGl0bGU9Jyd9KSA9PiB7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiBcclxuICAgIGNvbnN0IG5hdmlnYXRlID0gKGlkKSA9PlxyXG4gICAgcm91dGVyLnB1c2goe1xyXG4gICAgICBwYXRobmFtZTogJy9hcnRpY2xlL3NvbWV0aGluZycsXHJcbiAgICBcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmFybWUtbWV1bi1ib3hcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViZXItbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViZXItbWVudS10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e25ld3NJdGVtLnVybHRvaW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY29udGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCl9IGhyZWY9eycjJ30gY2xhc3NOYW1lPVwidGV4dC1kZWNvcmF0aW9uLW5vbmUgIHRleHQtZGVmYXVsdFwiPjxoMT57bmV3c0l0ZW0udGl0bGV9PC9oMT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntuZXdzSXRlbS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2Zvcm1hdERhdGUobmV3c0l0ZW0ucHVibGlzaGVkQXQpfXw8c3BhbiBjbGFzc05hbWU9J3RleHQtY2FwaXRhbGl6ZSc+e3RpdGxlfTwvc3Bhbj58IDJocnM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5OZXdzIl0sIm5hbWVzIjpbIlJlYWN0IiwiZm9ybWF0RGF0ZSIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJNYWluTmV3cyIsIm5ld3NJdGVtIiwidGl0bGUiLCJyb3V0ZXIiLCJuYXZpZ2F0ZSIsImlkIiwicHVzaCIsInBhdGhuYW1lIiwiZGl2IiwiY2xhc3MiLCJpbWciLCJzcmMiLCJ1cmx0b2ltYWdlIiwic3BhbiIsIm9uQ2xpY2siLCJocmVmIiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwiZGVzY3JpcHRpb24iLCJwdWJsaXNoZWRBdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/news/MainNews.js\n"));

/***/ })

});