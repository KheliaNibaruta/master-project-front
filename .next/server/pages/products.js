"use strict";
(() => {
var exports = {};
exports.id = 345;
exports.ids = [345];
exports.modules = {

/***/ 7999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Title = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().h1)`
  font-size: 1.5em;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);

/***/ }),

/***/ 3762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ ProductsPage),
  "getServerSideProps": () => (/* reexport */ getServerSideProps)
});

// EXTERNAL MODULE: ./components/Header.js + 1 modules
var Header = __webpack_require__(156);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
// EXTERNAL MODULE: ./components/Center.js
var Center = __webpack_require__(7278);
// EXTERNAL MODULE: ./lib/mongoose.js
var mongoose = __webpack_require__(2406);
// EXTERNAL MODULE: ./models/Product.js
var Product = __webpack_require__(7875);
// EXTERNAL MODULE: ./components/ProductsGrid.js + 1 modules
var ProductsGrid = __webpack_require__(349);
// EXTERNAL MODULE: ./components/Title.js
var Title = __webpack_require__(7999);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./pages/products.js










function ProductsPage({
  products
}) {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/jsx_runtime.jsx(Header/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime.jsxs)(Center/* default */.Z, {
      children: [/*#__PURE__*/jsx_runtime.jsx(Title/* default */.Z, {
        children: "All products"
      }), /*#__PURE__*/jsx_runtime.jsx(ProductsGrid/* default */.Z, {
        products: products
      })]
    })]
  });
}
async function getServerSideProps() {
  await (0,mongoose/* mongooseConnect */.I)();
  const products = await Product/* Product.find */.x.find({}, null, {
    sort: {
      '_id': -1
    }
  });
  return {
    props: {
      products: JSON.parse(JSON.stringify(products))
    }
  };
}
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2Fproducts&absolutePagePath=private-next-pages%2Fproducts.js&preferredRegion=!

        // Next.js Route Loader
        
        
    

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,28,377,792,349], () => (__webpack_exec__(3762)));
module.exports = __webpack_exports__;

})();