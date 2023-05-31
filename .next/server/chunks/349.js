"use strict";
exports.id = 349;
exports.ids = [349];
exports.modules = {

/***/ 349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ProductsGrid)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./components/Button.js + 1 modules
var Button = __webpack_require__(3329);
// EXTERNAL MODULE: ./components/icons/CartIcon.js
var CartIcon = __webpack_require__(2054);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/CartContext.js
var CartContext = __webpack_require__(2028);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./components/ProductBox.js








const ProductWrapper = (external_styled_components_default()).div`
  
`;
const WhiteBox = external_styled_components_default()((link_default()))`
  background-color: #fff;
  padding: 20px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img{
    max-width: 100%;
    max-height: 80px;
  }
`;
const Title = external_styled_components_default()((link_default()))`
  font-weight: normal;
  font-size:.9rem;
  color:inherit;
  text-decoration:none;
  margin:0;
`;
const ProductInfoBox = (external_styled_components_default()).div`
  margin-top: 5px;
`;
const PriceRow = (external_styled_components_default()).div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 5px;
  }
  align-items: center;
  justify-content:space-between;
  margin-top:2px;
`;
const Price = (external_styled_components_default()).div`
  font-size: 1rem;
  font-weight:400;
  text-align: right;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    font-weight:600;
    text-align: left;
  }
`;
function ProductBox({
  _id,
  title,
  description,
  price,
  images
}) {
  const {
    addProduct
  } = (0,external_react_.useContext)(CartContext/* CartContext */.A);
  const url = '/product/' + _id;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ProductWrapper, {
    children: [/*#__PURE__*/jsx_runtime.jsx(WhiteBox, {
      href: url,
      children: /*#__PURE__*/jsx_runtime.jsx("div", {
        children: /*#__PURE__*/jsx_runtime.jsx("img", {
          src: images?.[0],
          alt: ""
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(ProductInfoBox, {
      children: [/*#__PURE__*/jsx_runtime.jsx(Title, {
        href: url,
        children: title
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(PriceRow, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Price, {
          children: ["$", price]
        }), /*#__PURE__*/jsx_runtime.jsx(Button/* default */.C, {
          block: true,
          onClick: () => addProduct(_id),
          primary: true,
          outline: true,
          children: "Add to cart"
        })]
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./components/ProductsGrid.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const StyledProductsGrid = (external_styled_components_default()).div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
function ProductsGrid({
  products
}) {
  return /*#__PURE__*/jsx_runtime.jsx(StyledProductsGrid, {
    children: products?.length > 0 && products.map(product => /*#__PURE__*/jsx_runtime.jsx(ProductBox, _objectSpread({}, product), product._id))
  });
}

/***/ })

};
;