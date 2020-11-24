webpackHotUpdate_N_E("pages/index",{

/***/ "./fronted/champscreen/components/index.jsx":
/*!**************************************************!*\
  !*** ./fronted/champscreen/components/index.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_championIndex_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/championIndex.scss */ "./fronted/champscreen/styles/championIndex.scss");
/* harmony import */ var _styles_championIndex_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_championIndex_scss__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "C:\\Users\\carlo\\Desktop\\Lolcito\\fronted\\champscreen\\components\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();





var ChampScreen = function ChampScreen(_ref) {
  _s();

  var champSelected = _ref.champSelected;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      champion = _useState[0],
      setChampion = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + champSelected + "_0.jpg"),
      urlSplash = _useState2[0],
      setUrlSplash = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_5___default()({
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
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: _styles_championIndex_scss__WEBPACK_IMPORTED_MODULE_6___default.a.SkinsContainer,
        children: champion.skins.map(function (item) {
          var url = "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + champion.id + "_" + item.num.toString() + ".jpg";
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
            src: url,
            onClick: function onClick() {
              return Changeskin(url);
            }
          }, "src", url), void 0, false, {
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
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        children: "loading"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 20
      }, _this);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    className: _styles_championIndex_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Main,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: _styles_championIndex_scss__WEBPACK_IMPORTED_MODULE_6___default.a.ChampInfoCont,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: _styles_championIndex_scss__WEBPACK_IMPORTED_MODULE_6___default.a.ImageContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
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
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: _styles_championIndex_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Info,
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
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: _styles_championIndex_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Skins,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Skins, {}, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZnJvbnRlZC9jaGFtcHNjcmVlbi9jb21wb25lbnRzL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJDaGFtcFNjcmVlbiIsImNoYW1wU2VsZWN0ZWQiLCJ1c2VTdGF0ZSIsImNoYW1waW9uIiwic2V0Q2hhbXBpb24iLCJ1cmxTcGxhc2giLCJzZXRVcmxTcGxhc2giLCJ1c2VFZmZlY3QiLCJheGlvcyIsIm1ldGhvZCIsInVybCIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJDaGFuZ2Vza2luIiwiU2tpbnMiLCJpZCIsInNraW5zIiwibnVtIiwidG9TdHJpbmciLCJzdHlsZXMiLCJTa2luc0NvbnRhaW5lciIsIm1hcCIsIml0ZW0iLCJNYWluIiwiQ2hhbXBJbmZvQ29udCIsIkltYWdlQ29udGFpbmVyIiwiSW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBdUI7QUFBQTs7QUFBQSxNQUFwQkMsYUFBb0IsUUFBcEJBLGFBQW9COztBQUFBLGtCQUNQQyxzREFBUSxFQUREO0FBQUEsTUFDaENDLFFBRGdDO0FBQUEsTUFDdEJDLFdBRHNCOztBQUFBLG1CQUVMRixzREFBUSxDQUFDLGdFQUFnRUQsYUFBaEUsR0FBZ0YsUUFBakYsQ0FGSDtBQUFBLE1BRWhDSSxTQUZnQztBQUFBLE1BRXJCQyxZQUZxQjs7QUFJdkNDLHlEQUFTLGdNQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2lCQyw0Q0FBSyxDQUFDO0FBQ3pCQyxvQkFBTSxFQUFFLEtBRGlCO0FBRXpCQyxpQkFBRyxFQUFFLHdFQUF3RVQsYUFBeEUsR0FBd0Y7QUFGcEUsYUFBRCxDQUR0Qjs7QUFBQTtBQUNBVSxvQkFEQTtBQUtOQyxtQkFBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVosRUFBOEJGLFFBQTlCO0FBQ0FQLHVCQUFXLENBQUNPLFFBQVEsQ0FBQ0csSUFBVCxDQUFjQSxJQUFkLENBQW1CYixhQUFuQixDQUFELENBQVg7O0FBTk07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxJQU9OLEVBUE0sQ0FBVDs7QUFTQSxNQUFNYyxVQUFVLEdBQUMsU0FBWEEsVUFBVyxDQUFDTCxHQUFELEVBQU87QUFDcEJKLGdCQUFZLENBQUNJLEdBQUQsQ0FBWjtBQUNILEdBRkQ7O0FBSUEsTUFBTU0sS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNoQixRQUFJYixRQUFKLEVBQWM7QUFDVlMsYUFBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQUE0QixnRUFBZ0VWLFFBQVEsQ0FBQ2MsRUFBekUsR0FBOEUsR0FBOUUsR0FBb0ZkLFFBQVEsQ0FBQ2UsS0FBVCxDQUFlLENBQWYsRUFBa0JDLEdBQWxCLENBQXNCQyxRQUF0QixFQUFwRixHQUF1SCxNQUFuSjtBQUNBLDBCQUFPO0FBQUssaUJBQVMsRUFBRUMsaUVBQU0sQ0FBQ0MsY0FBdkI7QUFBQSxrQkFFQ25CLFFBQVEsQ0FBQ2UsS0FBVCxDQUFlSyxHQUFmLENBQW1CLFVBQUFDLElBQUksRUFBSTtBQUN2QixjQUFNZCxHQUFHLEdBQUMsZ0VBQWdFUCxRQUFRLENBQUNjLEVBQXpFLEdBQThFLEdBQTlFLEdBQW9GTyxJQUFJLENBQUNMLEdBQUwsQ0FBU0MsUUFBVCxFQUFwRixHQUEwRyxNQUFwSDtBQUNBLDhCQUFPO0FBQU0sZUFBRyxFQUFFVixHQUFYO0FBQWdCLG1CQUFPLEVBQUU7QUFBQSxxQkFBSUssVUFBVSxDQUFDTCxHQUFELENBQWQ7QUFBQTtBQUF6QixvQkFBbURBLEdBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQVA7QUFDSCxTQUhEO0FBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBUUgsS0FWRCxNQVdLO0FBQ0QsMEJBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNIO0FBQ0osR0FmRDs7QUFpQkEsc0JBQ0k7QUFBSyxhQUFTLEVBQUVXLGlFQUFNLENBQUNJLElBQXZCO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUVKLGlFQUFNLENBQUNLLGFBQXZCO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFFTCxpRUFBTSxDQUFDTSxjQUF2QjtBQUFBLCtCQUNJO0FBQUssYUFBRyxFQUFFdEI7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBSUk7QUFBSyxpQkFBUyxFQUFFZ0IsaUVBQU0sQ0FBQ08sSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQVNJO0FBQUssZUFBUyxFQUFFUCxpRUFBTSxDQUFDTCxLQUF2QjtBQUFBLDZCQUNJLHFFQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWVILENBakREOztHQUFNaEIsVzs7S0FBQUEsVztBQW1EU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjA1YjNiOWNlODlkNmRiOWVhZGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY2hhbXBpb25JbmRleC5zY3NzJ1xyXG5jb25zdCBDaGFtcFNjcmVlbiA9ICh7IGNoYW1wU2VsZWN0ZWQgfSkgPT4ge1xyXG4gICAgY29uc3QgW2NoYW1waW9uLCBzZXRDaGFtcGlvbl0gPSB1c2VTdGF0ZSgpXHJcbiAgICBjb25zdCBbdXJsU3BsYXNoLCBzZXRVcmxTcGxhc2hdID0gdXNlU3RhdGUoXCJodHRwOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi9pbWcvY2hhbXBpb24vc3BsYXNoL1wiICsgY2hhbXBTZWxlY3RlZCArIFwiXzAuanBnXCIpXHJcblxyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICAgICAgdXJsOiAnaHR0cDovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vMTAuMjEuMS9kYXRhL2VzX01YL2NoYW1waW9uLycgKyBjaGFtcFNlbGVjdGVkICsgJy5qc29uJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNhbXBlb24gdHJhaWRvXCIsIHJlc3BvbnNlKTtcclxuICAgICAgICBzZXRDaGFtcGlvbihyZXNwb25zZS5kYXRhLmRhdGFbY2hhbXBTZWxlY3RlZF0pXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBDaGFuZ2Vza2luPSh1cmwpPT57XHJcbiAgICAgICAgc2V0VXJsU3BsYXNoKHVybClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBTa2lucyA9ICgpID0+IHtcclxuICAgICAgICBpZiAoY2hhbXBpb24pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVUkwgQ09NUExFVEFcIiwgXCJodHRwOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi9pbWcvY2hhbXBpb24vc3BsYXNoL1wiICsgY2hhbXBpb24uaWQgKyBcIl9cIiArIGNoYW1waW9uLnNraW5zWzFdLm51bS50b1N0cmluZygpICsgXCIuanBnXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Ta2luc0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbXBpb24uc2tpbnMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmw9XCJodHRwOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi9pbWcvY2hhbXBpb24vc3BsYXNoL1wiICsgY2hhbXBpb24uaWQgKyBcIl9cIiArIGl0ZW0ubnVtLnRvU3RyaW5nKCkgKyBcIi5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGltZyAgc3JjPXt1cmx9IG9uQ2xpY2s9eygpPT5DaGFuZ2Vza2luKHVybCl9IHNyYz17dXJsfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxkaXY+bG9hZGluZzwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTWFpbn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ2hhbXBJbmZvQ29udH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkltYWdlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dXJsU3BsYXNofSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkluZm99PlxyXG4gICAgICAgICAgICAgICAgICAgIGluZm9ybWFjaW9uXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2tpbnN9PlxyXG4gICAgICAgICAgICAgICAgPFNraW5zIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFtcFNjcmVlbiJdLCJzb3VyY2VSb290IjoiIn0=