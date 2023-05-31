"use strict";
(() => {
var exports = {};
exports.id = 360;
exports.ids = [360];
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

/***/ 1298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ ProductPage),
  "getServerSideProps": () => (/* reexport */ getServerSideProps)
});

// EXTERNAL MODULE: ./components/Center.js
var Center = __webpack_require__(7278);
// EXTERNAL MODULE: ./components/Header.js + 1 modules
var Header = __webpack_require__(156);
// EXTERNAL MODULE: ./components/Title.js
var Title = __webpack_require__(7999);
// EXTERNAL MODULE: ./lib/mongoose.js
var mongoose = __webpack_require__(2406);
// EXTERNAL MODULE: ./models/Product.js
var Product = __webpack_require__(7875);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/WhiteBox.js

const WhiteBox = (external_styled_components_default()).div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
`;
/* harmony default export */ const components_WhiteBox = (WhiteBox);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./components/ProductImages.js





const Image = (external_styled_components_default()).img`
    max-width: 100%;
    max-height: 100%;
  `;
const BigImage = (external_styled_components_default()).img`
  max-width: 100%;
  max-height: 200px;
`;
const ImageButtons = (external_styled_components_default()).div`
    display: flex;
    gap: 10px;
    flex-grow: 0;
    margin-top: 10px;
  `;
const ImageButton = (external_styled_components_default()).div`
    border: 2px solid #ccc;
    ${props => props.active ? `
      border-color: #ccc;
    ` : `
      border-color: transparent;
    `}
    height: 40px;
    padding: 2px;
    cursor: pointer;
    border-radius: 5px;
  `;
const BigImageWrapper = (external_styled_components_default()).div`
  text-align: center;
`;
function ProductImages({
  images
}) {
  const {
    0: activeImage,
    1: setActiveImage
  } = (0,external_react_.useState)(images?.[0]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/jsx_runtime.jsx(BigImageWrapper, {
      children: /*#__PURE__*/jsx_runtime.jsx(BigImage, {
        src: activeImage
      })
    }), /*#__PURE__*/jsx_runtime.jsx(ImageButtons, {
      children: images.map(image => /*#__PURE__*/jsx_runtime.jsx(ImageButton, {
        active: image === activeImage,
        onClick: () => setActiveImage(image),
        children: /*#__PURE__*/jsx_runtime.jsx(Image, {
          src: image,
          alt: ""
        })
      }, image))
    })]
  });
}
// EXTERNAL MODULE: ./components/Button.js + 1 modules
var Button = __webpack_require__(3329);
// EXTERNAL MODULE: ./components/icons/CartIcon.js
var CartIcon = __webpack_require__(2054);
// EXTERNAL MODULE: ./components/CartContext.js
var CartContext = __webpack_require__(2028);
;// CONCATENATED MODULE: ./pages/product/[id].js















const ColWrapper = (external_styled_components_default()).div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: .8fr 1.2fr;
  }
  gap: 40px;
  margin: 40px 0;
`;
const PriceRow = (external_styled_components_default()).div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const Price = (external_styled_components_default()).span`
  font-size: 1.4rem;
`;
function ProductPage({
  product
}) {
  const {
    addProduct
  } = (0,external_react_.useContext)(CartContext/* CartContext */.A);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/jsx_runtime.jsx(Header/* default */.Z, {}), /*#__PURE__*/jsx_runtime.jsx(Center/* default */.Z, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(ColWrapper, {
        children: [/*#__PURE__*/jsx_runtime.jsx(components_WhiteBox, {
          children: /*#__PURE__*/jsx_runtime.jsx(ProductImages, {
            images: product.images
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime.jsx(Title/* default */.Z, {
            children: product.title
          }), /*#__PURE__*/jsx_runtime.jsx("p", {
            children: product.description
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(PriceRow, {
            children: [/*#__PURE__*/jsx_runtime.jsx("div", {
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Price, {
                children: ["$", product.price]
              })
            }), /*#__PURE__*/jsx_runtime.jsx("div", {
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Button/* default */.C, {
                primary: true,
                onClick: () => addProduct(product._id),
                children: [/*#__PURE__*/jsx_runtime.jsx(CartIcon/* default */.Z, {}), "Add to cart"]
              })
            })]
          })]
        })]
      })
    })]
  });
}
async function getServerSideProps(context) {
  await (0,mongoose/* mongooseConnect */.I)();
  const {
    id
  } = context.query;
  const product = await Product/* Product.findById */.x.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product))
    }
  };
}
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2Fproduct%2F%5Bid%5D&absolutePagePath=private-next-pages%2Fproduct%2F%5Bid%5D.js&preferredRegion=!

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,28,377,792], () => (__webpack_exec__(1298)));
module.exports = __webpack_exports__;

})();