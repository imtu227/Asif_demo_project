webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\IMTU\\Documents\\React\\hello_world\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch('https://github.com/artsy/metaphysics/blob/master/_schema.graphql') //im facing problem with this url
    .then(res => res.json()).then(json => {
      this.setState({
        isLoaded: true,
        items: json
      });
    });
  }

  render() {
    var {
      isLoaded,
      items
    } = this.state;

    if (!isLoaded) {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Loading...");
    } else {
      return __jsx("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, items.map(item => __jsx("li", {
        key: item.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, item.name, " | ", item.artists))));
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

const Index = () => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}, __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
}, "Hello Next.js")); //  export default Index;

/***/ })

})
//# sourceMappingURL=index.js.37d08b4446c0c5f0b961.hot-update.js.map