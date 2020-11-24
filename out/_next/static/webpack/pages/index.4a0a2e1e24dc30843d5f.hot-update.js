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
    console.log("CAMPEON TRAIDO EN SKINS", champion);

    if (champion) {
      console.log("ya termino de cargar el get");
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
            lineNumber: 30,
            columnNumber: 32
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 20
      }, _this);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: "loading"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
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
          lineNumber: 44,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: _styles_championIndex_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Info,
        children: "informacion"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _styles_championIndex_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Skins,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Skins, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZnJvbnRlZC9jaGFtcHNjcmVlbi9jb21wb25lbnRzL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJDaGFtcFNjcmVlbiIsImNoYW1wU2VsZWN0ZWQiLCJ1c2VTdGF0ZSIsImNoYW1waW9uIiwic2V0Q2hhbXBpb24iLCJ1cmxTcGxhc2giLCJzZXRVcmxTcGxhc2giLCJ1c2VFZmZlY3QiLCJheGlvcyIsIm1ldGhvZCIsInVybCIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJDaGFuZ2Vza2luIiwiU2tpbnMiLCJpZCIsInNraW5zIiwibnVtIiwidG9TdHJpbmciLCJzdHlsZXMiLCJTa2luc0NvbnRhaW5lciIsIm1hcCIsIml0ZW0iLCJNYWluIiwiQ2hhbXBJbmZvQ29udCIsIkltYWdlQ29udGFpbmVyIiwiSW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQXVCO0FBQUE7O0FBQUEsTUFBcEJDLGFBQW9CLFFBQXBCQSxhQUFvQjs7QUFBQSxrQkFDUEMsc0RBQVEsRUFERDtBQUFBLE1BQ2hDQyxRQURnQztBQUFBLE1BQ3RCQyxXQURzQjs7QUFBQSxtQkFFTEYsc0RBQVEsQ0FBQyxnRUFBZ0VELGFBQWhFLEdBQWdGLFFBQWpGLENBRkg7QUFBQSxNQUVoQ0ksU0FGZ0M7QUFBQSxNQUVyQkMsWUFGcUI7O0FBSXZDQyx5REFBUyxnTUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNpQkMsNENBQUssQ0FBQztBQUN6QkMsb0JBQU0sRUFBRSxLQURpQjtBQUV6QkMsaUJBQUcsRUFBRSx3RUFBd0VULGFBQXhFLEdBQXdGO0FBRnBFLGFBQUQsQ0FEdEI7O0FBQUE7QUFDQVUsb0JBREE7QUFLTkMsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCRixRQUE5QjtBQUNBUCx1QkFBVyxDQUFDTyxRQUFRLENBQUNHLElBQVQsQ0FBY0EsSUFBZCxDQUFtQmIsYUFBbkIsQ0FBRCxDQUFYOztBQU5NO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFPTixFQVBNLENBQVQ7O0FBU0EsTUFBTWMsVUFBVSxHQUFDLFNBQVhBLFVBQVcsQ0FBQ0wsR0FBRCxFQUFPO0FBQ3BCSixnQkFBWSxDQUFDSSxHQUFELENBQVo7QUFDSCxHQUZEOztBQUlBLE1BQU1NLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFDaEJKLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaLEVBQXVDVixRQUF2Qzs7QUFDQSxRQUFJQSxRQUFKLEVBQWM7QUFDVlMsYUFBTyxDQUFDQyxHQUFSLENBQVksNkJBQVo7QUFDQUQsYUFBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQUE0QixnRUFBZ0VWLFFBQVEsQ0FBQ2MsRUFBekUsR0FBOEUsR0FBOUUsR0FBb0ZkLFFBQVEsQ0FBQ2UsS0FBVCxDQUFlLENBQWYsRUFBa0JDLEdBQWxCLENBQXNCQyxRQUF0QixFQUFwRixHQUF1SCxNQUFuSjtBQUNBLDBCQUFPO0FBQUssaUJBQVMsRUFBRUMsaUVBQU0sQ0FBQ0MsY0FBdkI7QUFBQSxrQkFFQ25CLFFBQVEsQ0FBQ2UsS0FBVCxDQUFlSyxHQUFmLENBQW1CLFVBQUFDLElBQUksRUFBSTtBQUN2QixjQUFNZCxHQUFHLEdBQUMsZ0VBQWdFUCxRQUFRLENBQUNjLEVBQXpFLEdBQThFLEdBQTlFLEdBQW9GTyxJQUFJLENBQUNMLEdBQUwsQ0FBU0MsUUFBVCxFQUFwRixHQUEwRyxNQUFwSDtBQUNBLDhCQUFPO0FBQUssbUJBQU8sRUFBRTtBQUFBLHFCQUFJTCxVQUFVLENBQUNMLEdBQUQsQ0FBZDtBQUFBLGFBQWQ7QUFBbUMsZUFBRyxFQUFFQTtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFQO0FBQ0gsU0FIRDtBQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQVFILEtBWEQsTUFZSztBQUNELDBCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDSDtBQUNKLEdBakJEOztBQW1CQSxzQkFDSTtBQUFLLGFBQVMsRUFBRVcsaUVBQU0sQ0FBQ0ksSUFBdkI7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBRUosaUVBQU0sQ0FBQ0ssYUFBdkI7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUVMLGlFQUFNLENBQUNNLGNBQXZCO0FBQUEsK0JBQ0k7QUFBSyxhQUFHLEVBQUV0QjtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFJSTtBQUFLLGlCQUFTLEVBQUVnQixpRUFBTSxDQUFDTyxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBU0k7QUFBSyxlQUFTLEVBQUVQLGlFQUFNLENBQUNMLEtBQXZCO0FBQUEsNkJBQ0kscUVBQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBZUgsQ0FuREQ7O0dBQU1oQixXOztLQUFBQSxXO0FBcURTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40YTBhMmUxZTI0ZGMzMDg0M2Q1Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jaGFtcGlvbkluZGV4LnNjc3MnXHJcbmNvbnN0IENoYW1wU2NyZWVuID0gKHsgY2hhbXBTZWxlY3RlZCB9KSA9PiB7XHJcbiAgICBjb25zdCBbY2hhbXBpb24sIHNldENoYW1waW9uXSA9IHVzZVN0YXRlKClcclxuICAgIGNvbnN0IFt1cmxTcGxhc2gsIHNldFVybFNwbGFzaF0gPSB1c2VTdGF0ZShcImh0dHA6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuL2ltZy9jaGFtcGlvbi9zcGxhc2gvXCIgKyBjaGFtcFNlbGVjdGVkICsgXCJfMC5qcGdcIilcclxuXHJcbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgICAgICB1cmw6ICdodHRwOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8xMC4yMS4xL2RhdGEvZXNfTVgvY2hhbXBpb24vJyArIGNoYW1wU2VsZWN0ZWQgKyAnLmpzb24nLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2FtcGVvbiB0cmFpZG9cIiwgcmVzcG9uc2UpO1xyXG4gICAgICAgIHNldENoYW1waW9uKHJlc3BvbnNlLmRhdGEuZGF0YVtjaGFtcFNlbGVjdGVkXSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IENoYW5nZXNraW49KHVybCk9PntcclxuICAgICAgICBzZXRVcmxTcGxhc2godXJsKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFNraW5zID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ0FNUEVPTiBUUkFJRE8gRU4gU0tJTlNcIiwgY2hhbXBpb24pO1xyXG4gICAgICAgIGlmIChjaGFtcGlvbikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInlhIHRlcm1pbm8gZGUgY2FyZ2FyIGVsIGdldFwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVUkwgQ09NUExFVEFcIiwgXCJodHRwOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi9pbWcvY2hhbXBpb24vc3BsYXNoL1wiICsgY2hhbXBpb24uaWQgKyBcIl9cIiArIGNoYW1waW9uLnNraW5zWzFdLm51bS50b1N0cmluZygpICsgXCIuanBnXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Ta2luc0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbXBpb24uc2tpbnMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmw9XCJodHRwOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi9pbWcvY2hhbXBpb24vc3BsYXNoL1wiICsgY2hhbXBpb24uaWQgKyBcIl9cIiArIGl0ZW0ubnVtLnRvU3RyaW5nKCkgKyBcIi5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGltZyBvbkNsaWNrPXsoKT0+Q2hhbmdlc2tpbih1cmwpfSBzcmM9e3VybH0gLz5cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2PmxvYWRpbmc8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk1haW59PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNoYW1wSW5mb0NvbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5JbWFnZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3VybFNwbGFzaH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5JbmZvfT5cclxuICAgICAgICAgICAgICAgICAgICBpbmZvcm1hY2lvblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlNraW5zfT5cclxuICAgICAgICAgICAgICAgIDxTa2lucyAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhbXBTY3JlZW4iXSwic291cmNlUm9vdCI6IiJ9