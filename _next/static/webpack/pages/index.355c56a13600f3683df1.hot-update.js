self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": function() { return /* binding */ projects; },
/* harmony export */   "TimeLineData": function() { return /* binding */ TimeLineData; },
/* harmony export */   "Tech": function() { return /* binding */ Tech; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/di */ "./node_modules/react-icons/di/index.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\programing\\js new curse\\frontend project\\nov front end projict\\az_ortpholio\\src\\constants\\constants.js";

var projects = [{
  title: 'Notes App',
  description: "this app can helping you to seve your notes or and save it on browser local storage .",
  image: '/images/noteapp.PNG',
  tags: ['HTML', 'CSS', 'JavaSctipt', 'React'],
  source: 'https://github.com/ahmedzehry55/notesApp',
  visit: 'https://ahmedzehry55.github.io/notesApp/',
  id: 0
}, {
  title: 'Baba abdo restaurant menu',
  description: "this design is about restaurant menu ",
  image: '/images/babaabdoRest.PNG',
  tags: ['HTML', 'CSS', 'JavaSctipt', 'React'],
  source: 'https://github.com/ahmedzehry55/babaAbdo',
  visit: 'https://ahmedzehry55.github.io/babaAbdo/',
  id: 1
}, {
  title: 'GPT-3',
  description: "here we show the features of GPT-3 ai roobot.",
  image: '/images/gpt3.PNG',
  tags: ['HTML', 'CSS', 'JavaSctipt', 'React'],
  source: 'https://github.com/ahmedzehry55/gpt3',
  visit: 'https://ahmedzehry55.github.io/gpt3/',
  id: 2
}, {
  title: 'Hoo Bank',
  description: "This is a design for the hoo bank ",
  image: '/images/hoobank.PNG',
  tags: ['HTML', 'CSS', 'JavaSctipt', 'React'],
  source: 'https://github.com/ahmedzehry55/AZ_hoobank',
  visit: 'https://ahmedzehry55.github.io/AZ_hoobank/',
  id: 3
}];
var TimeLineData = [{
  year: 2017,
  text: 'Started my journey'
}, {
  year: 2018,
  text: 'Worked as a freelance developer'
}, {
  year: 2019,
  text: 'Founded JavaScript Mastery'
}, {
  year: 2020,
  text: 'Shared my projects with the world'
}, {
  year: 2021,
  text: 'Started my own platform'
}];
var Tech = [{
  icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_di__WEBPACK_IMPORTED_MODULE_1__.DiReact, {
    size: "4rem"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 12
  }, undefined),
  title: 'Front-End',
  text1: "Experiece with ",
  text2: "React.js"
}, {
  icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_di__WEBPACK_IMPORTED_MODULE_1__.DiFirebase, {
    size: "4rem"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 12
  }, undefined),
  title: 'Back-End',
  text1: " Experience with",
  text2: " Node and Databases"
}, {
  icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_di__WEBPACK_IMPORTED_MODULE_1__.DiZend, {
    size: "4rem"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 12
  }, undefined),
  title: 'UI/UX',
  text1: "Experience with ",
  text2: " tools like Figma"
}];

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlIiwidmlzaXQiLCJpZCIsIlRpbWVMaW5lRGF0YSIsInllYXIiLCJ0ZXh0IiwiVGVjaCIsImljb24iLCJ0ZXh0MSIsInRleHQyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFFBQVEsR0FBRyxDQUN0QjtBQUNFQyxPQUFLLEVBQUUsV0FEVDtBQUVFQyxhQUFXLEVBQUUsdUZBRmY7QUFHSUMsT0FBSyxFQUFFLHFCQUhYO0FBSUlDLE1BQUksRUFBRSxDQUFDLE1BQUQsRUFBUyxLQUFULEVBQWUsWUFBZixFQUE2QixPQUE3QixDQUpWO0FBS0VDLFFBQU0sRUFBRSwwQ0FMVjtBQU1FQyxPQUFLLEVBQUUsMENBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FEc0IsRUFVdEI7QUFDRU4sT0FBSyxFQUFFLDJCQURUO0FBRUVDLGFBQVcsRUFBQyx1Q0FGZDtBQUdFQyxPQUFLLEVBQUUsMEJBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZSxZQUFmLEVBQTZCLE9BQTdCLENBSlI7QUFLRUMsUUFBTSxFQUFFLDBDQUxWO0FBTUVDLE9BQUssRUFBRSwwQ0FOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQVZzQixFQW1CdEI7QUFDRU4sT0FBSyxFQUFFLE9BRFQ7QUFFRUMsYUFBVyxFQUFFLCtDQUZmO0FBR0lDLE9BQUssRUFBRSxrQkFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxNQUFELEVBQVMsS0FBVCxFQUFlLFlBQWYsRUFBNkIsT0FBN0IsQ0FKVjtBQUtFQyxRQUFNLEVBQUUsc0NBTFY7QUFNRUMsT0FBSyxFQUFFLHNDQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBbkJzQixFQTRCdEI7QUFDRU4sT0FBSyxFQUFFLFVBRFQ7QUFFRUMsYUFBVyxFQUFFLG9DQUZmO0FBR0VDLE9BQUssRUFBRSxxQkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxNQUFELEVBQVMsS0FBVCxFQUFlLFlBQWYsRUFBNkIsT0FBN0IsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsNENBTFY7QUFNRUMsT0FBSyxFQUFFLDRDQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBNUJzQixDQUFqQjtBQXVDQSxJQUFNQyxZQUFZLEdBQUcsQ0FDMUI7QUFBRUMsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRDBCLEVBRTFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUYwQixFQUcxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FIMEIsRUFJMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBSjBCLEVBSzFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUwwQixDQUFyQjtBQVFBLElBQU1DLElBQUksR0FBRyxDQUNsQjtBQUNFQyxNQUFJLGVBQUcsOERBQUMsbURBQUQ7QUFBUyxRQUFJLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFQ7QUFFRVgsT0FBSyxFQUFHLFdBRlY7QUFHRVksT0FBSyxFQUFFLGlCQUhUO0FBSUVDLE9BQUssRUFBRTtBQUpULENBRGtCLEVBT2xCO0FBQ0VGLE1BQUksZUFBRyw4REFBQyxzREFBRDtBQUFZLFFBQUksRUFBQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFQ7QUFFRVgsT0FBSyxFQUFHLFVBRlY7QUFHRVksT0FBSyxFQUFFLGtCQUhUO0FBSUVDLE9BQUssRUFBRTtBQUpULENBUGtCLEVBYWxCO0FBQ0VGLE1BQUksZUFBRyw4REFBQyxrREFBRDtBQUFRLFFBQUksRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEVDtBQUVFWCxPQUFLLEVBQUcsT0FGVjtBQUdFWSxPQUFLLEVBQUUsa0JBSFQ7QUFJRUMsT0FBSyxFQUFFO0FBSlQsQ0Fia0IsQ0FBYiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zNTVjNTZhMTM2MDBmMzY4M2RmMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlGaXJlYmFzZSwgRGlSZWFjdCwgRGlaZW5kIH0gZnJvbSAncmVhY3QtaWNvbnMvZGknO1xuXG5leHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXG4gIHtcbiAgICB0aXRsZTogJ05vdGVzIEFwcCcsXG4gICAgZGVzY3JpcHRpb246IFwidGhpcyBhcHAgY2FuIGhlbHBpbmcgeW91IHRvIHNldmUgeW91ciBub3RlcyBvciBhbmQgc2F2ZSBpdCBvbiBicm93c2VyIGxvY2FsIHN0b3JhZ2UgLlwiLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzL25vdGVhcHAuUE5HJyxcbiAgICAgIHRhZ3M6IFsnSFRNTCcsICdDU1MnLCdKYXZhU2N0aXB0JyAsJ1JlYWN0J10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL2FobWVkemVocnk1NS9ub3Rlc0FwcCcsXG4gICAgdmlzaXQ6ICdodHRwczovL2FobWVkemVocnk1NS5naXRodWIuaW8vbm90ZXNBcHAvJyxcbiAgICBpZDogMCxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnQmFiYSBhYmRvIHJlc3RhdXJhbnQgbWVudScsXG4gICAgZGVzY3JpcHRpb246XCJ0aGlzIGRlc2lnbiBpcyBhYm91dCByZXN0YXVyYW50IG1lbnUgXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2JhYmFhYmRvUmVzdC5QTkcnLFxuICAgIHRhZ3M6IFsnSFRNTCcsICdDU1MnLCdKYXZhU2N0aXB0JyAsJ1JlYWN0J10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL2FobWVkemVocnk1NS9iYWJhQWJkbycsXG4gICAgdmlzaXQ6ICdodHRwczovL2FobWVkemVocnk1NS5naXRodWIuaW8vYmFiYUFiZG8vJyxcbiAgICBpZDogMSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnR1BULTMnLFxuICAgIGRlc2NyaXB0aW9uOiBcImhlcmUgd2Ugc2hvdyB0aGUgZmVhdHVyZXMgb2YgR1BULTMgYWkgcm9vYm90LlwiLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2dwdDMuUE5HJyxcbiAgICAgIHRhZ3M6IFsnSFRNTCcsICdDU1MnLCdKYXZhU2N0aXB0JyAsJ1JlYWN0J10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL2FobWVkemVocnk1NS9ncHQzJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vYWhtZWR6ZWhyeTU1LmdpdGh1Yi5pby9ncHQzLycsXG4gICAgaWQ6IDIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0hvbyBCYW5rJyxcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgZGVzaWduIGZvciB0aGUgaG9vIGJhbmsgXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2hvb2JhbmsuUE5HJyxcbiAgICB0YWdzOiBbJ0hUTUwnLCAnQ1NTJywnSmF2YVNjdGlwdCcgLCdSZWFjdCddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9haG1lZHplaHJ5NTUvQVpfaG9vYmFuaycsXG4gICAgdmlzaXQ6ICdodHRwczovL2FobWVkemVocnk1NS5naXRodWIuaW8vQVpfaG9vYmFuay8nLFxuICAgIGlkOiAzLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IFRpbWVMaW5lRGF0YSA9IFtcbiAgeyB5ZWFyOiAyMDE3LCB0ZXh0OiAnU3RhcnRlZCBteSBqb3VybmV5JywgfSxcbiAgeyB5ZWFyOiAyMDE4LCB0ZXh0OiAnV29ya2VkIGFzIGEgZnJlZWxhbmNlIGRldmVsb3BlcicsIH0sXG4gIHsgeWVhcjogMjAxOSwgdGV4dDogJ0ZvdW5kZWQgSmF2YVNjcmlwdCBNYXN0ZXJ5JywgfSxcbiAgeyB5ZWFyOiAyMDIwLCB0ZXh0OiAnU2hhcmVkIG15IHByb2plY3RzIHdpdGggdGhlIHdvcmxkJywgfSxcbiAgeyB5ZWFyOiAyMDIxLCB0ZXh0OiAnU3RhcnRlZCBteSBvd24gcGxhdGZvcm0nLCB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IFRlY2ggPSBbXG4gIHsgXG4gICAgaWNvbiA6IDxEaVJlYWN0IHNpemU9JzRyZW0nLz4sIFxuICAgIHRpdGxlIDogJ0Zyb250LUVuZCcsXG4gICAgdGV4dDE6IFwiRXhwZXJpZWNlIHdpdGggXCIsXG4gICAgdGV4dDI6IFwiUmVhY3QuanNcIlxuICB9LFxuICB7IFxuICAgIGljb24gOiA8RGlGaXJlYmFzZSBzaXplPSc0cmVtJy8+LCBcbiAgICB0aXRsZSA6ICdCYWNrLUVuZCcsXG4gICAgdGV4dDE6IFwiIEV4cGVyaWVuY2Ugd2l0aFwiLFxuICAgIHRleHQyOiBcIiBOb2RlIGFuZCBEYXRhYmFzZXNcIlxuICB9LFxuICB7IFxuICAgIGljb24gOiA8RGlaZW5kIHNpemU9JzRyZW0nLz4sIFxuICAgIHRpdGxlIDogJ1VJL1VYJyxcbiAgICB0ZXh0MTogXCJFeHBlcmllbmNlIHdpdGggXCIsXG4gICAgdGV4dDI6IFwiIHRvb2xzIGxpa2UgRmlnbWFcIlxuICB9LFxuICBcbl07Il0sInNvdXJjZVJvb3QiOiIifQ==