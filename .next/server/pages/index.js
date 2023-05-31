"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 8189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ HomePage),
  "getServerSideProps": () => (/* reexport */ getServerSideProps)
});

// EXTERNAL MODULE: ./components/Header.js + 1 modules
var Header = __webpack_require__(156);
// EXTERNAL MODULE: ./components/Center.js
var Center = __webpack_require__(7278);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./components/Button.js + 1 modules
var Button = __webpack_require__(3329);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./components/ButtonLink.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const StyledLink = external_styled_components_default()((link_default()))`
  ${Button/* ButtonStyle */.Z}
`;
function ButtonLink(props) {
  return /*#__PURE__*/jsx_runtime.jsx(StyledLink, _objectSpread({}, props));
}
// EXTERNAL MODULE: ./components/icons/CartIcon.js
var CartIcon = __webpack_require__(2054);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/CartContext.js
var CartContext = __webpack_require__(2028);
;// CONCATENATED MODULE: ./components/Featured.js









const Bg = (external_styled_components_default()).div`
  background-color: #222;
  color:#fff;
  padding: 50px 0;
`;
const Title = (external_styled_components_default()).h1`
  margin:0;
  font-weight:normal;
  font-size:1.5rem;
  @media screen and (min-width: 768px) {
    font-size:3rem;
  }
`;
const Desc = (external_styled_components_default()).p`
  color:#aaa;
  font-size:.8rem;
`;
const ColumnsWrapper = (external_styled_components_default()).div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  img{
    max-width: 100%;
    max-height: 200px;
    display: block;
    margin: 0 auto;
  }
  div:nth-child(1) {
    order: 2;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;
    div:nth-child(1) {
      order: 0;
    }
    img{
      max-width: 100%;
    }
  }
`;
const Column = (external_styled_components_default()).div`
  display: flex;
  align-items: center;
`;
const ButtonsWrapper = (external_styled_components_default()).div`
  display: flex;
  gap:10px;
  margin-top:25px;
`;
function Featured({
  product
}) {
  const {
    addProduct
  } = (0,external_react_.useContext)(CartContext/* CartContext */.A);

  function addFeaturedToCart() {
    addProduct(product._id);
  }

  return /*#__PURE__*/jsx_runtime.jsx(Bg, {
    children: /*#__PURE__*/jsx_runtime.jsx(Center/* default */.Z, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(ColumnsWrapper, {
        children: [/*#__PURE__*/jsx_runtime.jsx(Column, {
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime.jsx(Title, {
              children: product.title
            }), /*#__PURE__*/jsx_runtime.jsx(Desc, {
              children: product.description
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(ButtonsWrapper, {
              children: [/*#__PURE__*/jsx_runtime.jsx(ButtonLink, {
                href: '/product/' + product._id,
                outline: 1,
                white: 1,
                children: "Read more"
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Button/* default */.C, {
                white: true,
                onClick: addFeaturedToCart,
                children: [/*#__PURE__*/jsx_runtime.jsx(CartIcon/* default */.Z, {}), "Add to cart"]
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime.jsx(Column, {
          children: /*#__PURE__*/jsx_runtime.jsx("img", {
            src: "https://dawid-next-ecommerce.s3.amazonaws.com/1679151719649.png",
            alt: ""
          })
        })]
      })
    })
  });
}
// EXTERNAL MODULE: ./models/Product.js
var Product = __webpack_require__(7875);
// EXTERNAL MODULE: ./lib/mongoose.js
var mongoose = __webpack_require__(2406);
// EXTERNAL MODULE: ./components/ProductsGrid.js + 1 modules
var ProductsGrid = __webpack_require__(349);
;// CONCATENATED MODULE: ./components/NewProducts.js





const NewProducts_Title = (external_styled_components_default()).h2`
  font-size: 2rem;
  margin:30px 0 20px;
  font-weight: normal;
`;
function NewProducts({
  products
}) {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Center/* default */.Z, {
    children: [/*#__PURE__*/jsx_runtime.jsx(NewProducts_Title, {
      children: "New Arrivals"
    }), /*#__PURE__*/jsx_runtime.jsx(ProductsGrid/* default */.Z, {
      products: products
    })]
  });
}
;// CONCATENATED MODULE: ./pages/index.js







function HomePage({
  featuredProduct,
  newProducts
}) {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime.jsx(Header/* default */.Z, {}), /*#__PURE__*/jsx_runtime.jsx(Featured, {
      product: featuredProduct
    }), /*#__PURE__*/jsx_runtime.jsx(NewProducts, {
      products: newProducts
    })]
  });
}
async function getServerSideProps() {
  const featuredProductId = '';
  await (0,mongoose/* mongooseConnect */.I)();
  const featuredProduct = await Product/* Product.findById */.x.findById(featuredProductId);
  const newProducts = await Product/* Product.find */.x.find({}, null, {
    sort: {
      '_id': -1
    },
    limit: 10
  });
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts))
    }
  };
}
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2F&absolutePagePath=private-next-pages%2Findex.js&preferredRegion=!

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
var __webpack_exports__ = __webpack_require__.X(0, [893,664,28,377,792,349], () => (__webpack_exec__(8189)));
module.exports = __webpack_exports__;

})();