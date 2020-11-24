webpackHotUpdate_N_E("pages/index",{

/***/ "./fronted/champscreen/components/index.jsx":
/*!**************************************************!*\
  !*** ./fronted/champscreen/components/index.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_championIndex_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/championIndex.scss */ "./fronted/champscreen/styles/championIndex.scss");
/* harmony import */ var _styles_championIndex_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_championIndex_scss__WEBPACK_IMPORTED_MODULE_5__);




var _jsxFileName = "C:\\Users\\carlo\\Desktop\\Lolcito\\fronted\\champscreen\\components\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();





var ChampScreen = function ChampScreen(_ref) {
  _s();

  var champSelected = _ref.champSelected;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      champion = _useState[0],
      setChampion = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + champSelected + "_0.jpg"),
      urlSplash = _useState2[0],
      setUrlSplash = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_4___default()({
              method: 'get',
              url: 'http://ddragon.leagueoflegends.com/cdn/10.21.1/data/es_MX/champion/' + champSelected + '.json'
            });

          case 2:
            response = _context.sent;
            console.log("campeon traido", response);
            setChampion(response.data.data[champSelected]);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);

  var Changeskin = function Changeskin(url) {
    setUrlSplash(url);
  };

  var Skins = function Skins() {
    if (champion) {
      console.log("URL COMPLETA", "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + champion.id + "_" + champion.skins[1].num.toString() + ".jpg");
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: _styles_championIndex_scss__WEBPACK_IMPORTED_MODULE_5___default.a.SkinsContainer,
        children: champion.skins.map(function (item) {
          var url = "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + champion.id + "_" + item.num.toString() + ".jpg";
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
            onClick: function onClick() {
              return Changeskin(url);
            },
            src: url
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 32
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 20
      }, _this);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: "loading"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 20
      }, _this);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: _styles_championIndex_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Main,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _styles_championIndex_scss__WEBPACK_IMPORTED_MODULE_5___default.a.ChampInfoCont,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: _styles_championIndex_scss__WEBPACK_IMPORTED_MODULE_5___default.a.ImageContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
          src: urlSplash
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: _styles_championIndex_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Info,
        children: "informacion"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _styles_championIndex_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Skins,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Skins, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }, _this);
};

_s(ChampScreen, "GdrP58ao2c+pTjmZdlls9bd8on0=");

_c = ChampScreen;
/* harmony default export */ __webpack_exports__["default"] = (ChampScreen);

var _c;

$RefreshReg$(_c, "ChampScreen");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZnJvbnRlZC9jaGFtcHNjcmVlbi9jb21wb25lbnRzL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJDaGFtcFNjcmVlbiIsImNoYW1wU2VsZWN0ZWQiLCJ1c2VTdGF0ZSIsImNoYW1waW9uIiwic2V0Q2hhbXBpb24iLCJ1cmxTcGxhc2giLCJzZXRVcmxTcGxhc2giLCJ1c2VFZmZlY3QiLCJheGlvcyIsIm1ldGhvZCIsInVybCIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJDaGFuZ2Vza2luIiwiU2tpbnMiLCJpZCIsInNraW5zIiwibnVtIiwidG9TdHJpbmciLCJzdHlsZXMiLCJTa2luc0NvbnRhaW5lciIsIm1hcCIsIml0ZW0iLCJNYWluIiwiQ2hhbXBJbmZvQ29udCIsIkltYWdlQ29udGFpbmVyIiwiSW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQXVCO0FBQUE7O0FBQUEsTUFBcEJDLGFBQW9CLFFBQXBCQSxhQUFvQjs7QUFBQSxrQkFDUEMsc0RBQVEsRUFERDtBQUFBLE1BQ2hDQyxRQURnQztBQUFBLE1BQ3RCQyxXQURzQjs7QUFBQSxtQkFFTEYsc0RBQVEsQ0FBQyxnRUFBZ0VELGFBQWhFLEdBQWdGLFFBQWpGLENBRkg7QUFBQSxNQUVoQ0ksU0FGZ0M7QUFBQSxNQUVyQkMsWUFGcUI7O0FBSXZDQyx5REFBUyxnTUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNpQkMsNENBQUssQ0FBQztBQUN6QkMsb0JBQU0sRUFBRSxLQURpQjtBQUV6QkMsaUJBQUcsRUFBRSx3RUFBd0VULGFBQXhFLEdBQXdGO0FBRnBFLGFBQUQsQ0FEdEI7O0FBQUE7QUFDQVUsb0JBREE7QUFLTkMsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCRixRQUE5QjtBQUNBUCx1QkFBVyxDQUFDTyxRQUFRLENBQUNHLElBQVQsQ0FBY0EsSUFBZCxDQUFtQmIsYUFBbkIsQ0FBRCxDQUFYOztBQU5NO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFPTixFQVBNLENBQVQ7O0FBU0EsTUFBTWMsVUFBVSxHQUFDLFNBQVhBLFVBQVcsQ0FBQ0wsR0FBRCxFQUFPO0FBQ3BCSixnQkFBWSxDQUFDSSxHQUFELENBQVo7QUFDSCxHQUZEOztBQUlBLE1BQU1NLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFDaEIsUUFBSWIsUUFBSixFQUFjO0FBQ1ZTLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEIsZ0VBQWdFVixRQUFRLENBQUNjLEVBQXpFLEdBQThFLEdBQTlFLEdBQW9GZCxRQUFRLENBQUNlLEtBQVQsQ0FBZSxDQUFmLEVBQWtCQyxHQUFsQixDQUFzQkMsUUFBdEIsRUFBcEYsR0FBdUgsTUFBbko7QUFDQSwwQkFBTztBQUFLLGlCQUFTLEVBQUVDLGlFQUFNLENBQUNDLGNBQXZCO0FBQUEsa0JBRUNuQixRQUFRLENBQUNlLEtBQVQsQ0FBZUssR0FBZixDQUFtQixVQUFBQyxJQUFJLEVBQUk7QUFDdkIsY0FBTWQsR0FBRyxHQUFDLGdFQUFnRVAsUUFBUSxDQUFDYyxFQUF6RSxHQUE4RSxHQUE5RSxHQUFvRk8sSUFBSSxDQUFDTCxHQUFMLENBQVNDLFFBQVQsRUFBcEYsR0FBMEcsTUFBcEg7QUFDQSw4QkFBTztBQUFLLG1CQUFPLEVBQUU7QUFBQSxxQkFBSUwsVUFBVSxDQUFDTCxHQUFELENBQWQ7QUFBQSxhQUFkO0FBQW1DLGVBQUcsRUFBRUE7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBUDtBQUNILFNBSEQ7QUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFRSCxLQVZELE1BV0s7QUFDRCwwQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0g7QUFDSixHQWZEOztBQWlCQSxzQkFDSTtBQUFLLGFBQVMsRUFBRVcsaUVBQU0sQ0FBQ0ksSUFBdkI7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBRUosaUVBQU0sQ0FBQ0ssYUFBdkI7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUVMLGlFQUFNLENBQUNNLGNBQXZCO0FBQUEsK0JBQ0k7QUFBSyxhQUFHLEVBQUV0QjtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFJSTtBQUFLLGlCQUFTLEVBQUVnQixpRUFBTSxDQUFDTyxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBU0k7QUFBSyxlQUFTLEVBQUVQLGlFQUFNLENBQUNMLEtBQXZCO0FBQUEsNkJBQ0kscUVBQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBZUgsQ0FqREQ7O0dBQU1oQixXOztLQUFBQSxXO0FBbURTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wYWJhM2Q1MTA1OWFiMTc1ZDkwOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jaGFtcGlvbkluZGV4LnNjc3MnXHJcbmNvbnN0IENoYW1wU2NyZWVuID0gKHsgY2hhbXBTZWxlY3RlZCB9KSA9PiB7XHJcbiAgICBjb25zdCBbY2hhbXBpb24sIHNldENoYW1waW9uXSA9IHVzZVN0YXRlKClcclxuICAgIGNvbnN0IFt1cmxTcGxhc2gsIHNldFVybFNwbGFzaF0gPSB1c2VTdGF0ZShcImh0dHA6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuL2ltZy9jaGFtcGlvbi9zcGxhc2gvXCIgKyBjaGFtcFNlbGVjdGVkICsgXCJfMC5qcGdcIilcclxuXHJcbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgICAgICB1cmw6ICdodHRwOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8xMC4yMS4xL2RhdGEvZXNfTVgvY2hhbXBpb24vJyArIGNoYW1wU2VsZWN0ZWQgKyAnLmpzb24nLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2FtcGVvbiB0cmFpZG9cIiwgcmVzcG9uc2UpO1xyXG4gICAgICAgIHNldENoYW1waW9uKHJlc3BvbnNlLmRhdGEuZGF0YVtjaGFtcFNlbGVjdGVkXSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IENoYW5nZXNraW49KHVybCk9PntcclxuICAgICAgICBzZXRVcmxTcGxhc2godXJsKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFNraW5zID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChjaGFtcGlvbikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVSTCBDT01QTEVUQVwiLCBcImh0dHA6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuL2ltZy9jaGFtcGlvbi9zcGxhc2gvXCIgKyBjaGFtcGlvbi5pZCArIFwiX1wiICsgY2hhbXBpb24uc2tpbnNbMV0ubnVtLnRvU3RyaW5nKCkgKyBcIi5qcGdcIik7XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlNraW5zQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGFtcGlvbi5za2lucy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybD1cImh0dHA6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuL2ltZy9jaGFtcGlvbi9zcGxhc2gvXCIgKyBjaGFtcGlvbi5pZCArIFwiX1wiICsgaXRlbS5udW0udG9TdHJpbmcoKSArIFwiLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8aW1nIG9uQ2xpY2s9eygpPT5DaGFuZ2Vza2luKHVybCl9IHNyYz17dXJsfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxkaXY+bG9hZGluZzwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTWFpbn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ2hhbXBJbmZvQ29udH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkltYWdlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dXJsU3BsYXNofSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkluZm99PlxyXG4gICAgICAgICAgICAgICAgICAgIGluZm9ybWFjaW9uXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2tpbnN9PlxyXG4gICAgICAgICAgICAgICAgPFNraW5zIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFtcFNjcmVlbiJdLCJzb3VyY2VSb290IjoiIn0=