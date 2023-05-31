"use strict";
(() => {
var exports = {};
exports.id = 190;
exports.ids = [190];
exports.modules = {

/***/ 6628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ CartPage)
});

// EXTERNAL MODULE: ./components/Header.js + 1 modules
var Header = __webpack_require__(156);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./components/Center.js
var Center = __webpack_require__(7278);
// EXTERNAL MODULE: ./components/Button.js + 1 modules
var Button = __webpack_require__(3329);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/CartContext.js
var CartContext = __webpack_require__(2028);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./components/Table.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const StyledTable = (external_styled_components_default()).table`
  width: 100%;
  th{
    text-align: left;
    text-transform: uppercase;
    color: #ccc;
    font-weight: 600;
    font-size: .7rem;
  }
  td{
    border-top: 1px solid rgba(0,0,0,.1);
  }
`;
function Table(props) {
  return /*#__PURE__*/jsx_runtime.jsx(StyledTable, _objectSpread({}, props));
}
;// CONCATENATED MODULE: ./components/Input.js
function Input_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Input_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Input_ownKeys(Object(source), !0).forEach(function (key) { Input_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Input_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function Input_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const StyledInput = (external_styled_components_default()).input`
  width: 100%;
  padding: 5px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing:border-box;
`;
function Input(props) {
  return /*#__PURE__*/jsx_runtime.jsx(StyledInput, Input_objectSpread({}, props));
}
;// CONCATENATED MODULE: ./pages/cart.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());












const ColumnsWrapper = (external_styled_components_default()).div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.2fr .8fr;
  }
  gap: 40px;
  margin-top: 40px;
`;
const Box = (external_styled_components_default()).div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
`;
const ProductInfoCell = (external_styled_components_default()).td`
  padding: 10px 0;
`;
const ProductImageBox = (external_styled_components_default()).div`
  width: 70px;
  height: 100px;
  padding: 2px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display:flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img{
    max-width: 60px;
    max-height: 60px;
  }
  @media screen and (min-width: 768px) {
    padding: 10px;
    width: 100px;
    height: 100px;
    img{
      max-width: 80px;
      max-height: 80px;
    }
  }
`;
const QuantityLabel = (external_styled_components_default()).span`
  padding: 0 15px;
  display: block;
  @media screen and (min-width: 768px) {
    display: inline-block;
    padding: 0 10px;
  }
`;
const CityHolder = (external_styled_components_default()).div`
  display:flex;
  gap: 5px;
`;
function CartPage() {
  const {
    cartProducts,
    addProduct,
    removeProduct,
    clearCart
  } = (0,external_react_.useContext)(CartContext/* CartContext */.A);
  const {
    0: products,
    1: setProducts
  } = (0,external_react_.useState)([]);
  const {
    0: name,
    1: setName
  } = (0,external_react_.useState)('');
  const {
    0: email,
    1: setEmail
  } = (0,external_react_.useState)('');
  const {
    0: city,
    1: setCity
  } = (0,external_react_.useState)('');
  const {
    0: postalCode,
    1: setPostalCode
  } = (0,external_react_.useState)('');
  const {
    0: streetAddress,
    1: setStreetAddress
  } = (0,external_react_.useState)('');
  const {
    0: country,
    1: setCountry
  } = (0,external_react_.useState)('');
  const {
    0: isSuccess,
    1: setIsSuccess
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    if (cartProducts.length > 0) {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('/api/cart', {
        ids: cartProducts
      }).then(response => {
        setProducts(response.data);
      });
    } else {
      setProducts([]);
    }
  }, [cartProducts]);
  (0,external_react_.useEffect)(() => {
    if (true) {
      return;
    }

    if (window?.location.href.includes('success')) {
      setIsSuccess(true);
      clearCart();
    }
  }, []);

  function moreOfThisProduct(id) {
    addProduct(id);
  }

  function lessOfThisProduct(id) {
    removeProduct(id);
  }

  async function goToPayment() {
    const response = await Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('/api/checkout', {
      name,
      email,
      city,
      postalCode,
      streetAddress,
      country,
      cartProducts
    });

    if (response.data.url) {
      window.location = response.data.url;
    }
  }

  let total = 0;

  for (const productId of cartProducts) {
    const price = products.find(p => p._id === productId)?.price || 0;
    total += price;
  }

  if (isSuccess) {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/jsx_runtime.jsx(Header/* default */.Z, {}), /*#__PURE__*/jsx_runtime.jsx(Center/* default */.Z, {
        children: /*#__PURE__*/jsx_runtime.jsx(ColumnsWrapper, {
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Box, {
            children: [/*#__PURE__*/jsx_runtime.jsx("h1", {
              children: "Thanks for your order!"
            }), /*#__PURE__*/jsx_runtime.jsx("p", {
              children: "We will email you when your order will be sent."
            })]
          })
        })
      })]
    });
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/jsx_runtime.jsx(Header/* default */.Z, {}), /*#__PURE__*/jsx_runtime.jsx(Center/* default */.Z, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(ColumnsWrapper, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Box, {
          children: [/*#__PURE__*/jsx_runtime.jsx("h2", {
            children: "Cart"
          }), !cartProducts?.length && /*#__PURE__*/jsx_runtime.jsx("div", {
            children: "Your cart is empty"
          }), products?.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)(Table, {
            children: [/*#__PURE__*/jsx_runtime.jsx("thead", {
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                children: [/*#__PURE__*/jsx_runtime.jsx("th", {
                  children: "Product"
                }), /*#__PURE__*/jsx_runtime.jsx("th", {
                  children: "Quantity"
                }), /*#__PURE__*/jsx_runtime.jsx("th", {
                  children: "Price"
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("tbody", {
              children: [products.map(product => /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(ProductInfoCell, {
                  children: [/*#__PURE__*/jsx_runtime.jsx(ProductImageBox, {
                    children: /*#__PURE__*/jsx_runtime.jsx("img", {
                      src: product.images[0],
                      alt: ""
                    })
                  }), product.title]
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
                  children: [/*#__PURE__*/jsx_runtime.jsx(Button/* default */.C, {
                    onClick: () => lessOfThisProduct(product._id),
                    children: "-"
                  }), /*#__PURE__*/jsx_runtime.jsx(QuantityLabel, {
                    children: cartProducts.filter(id => id === product._id).length
                  }), /*#__PURE__*/jsx_runtime.jsx(Button/* default */.C, {
                    onClick: () => moreOfThisProduct(product._id),
                    children: "+"
                  })]
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
                  children: ["$", cartProducts.filter(id => id === product._id).length * product.price]
                })]
              }, product._id)), /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                children: [/*#__PURE__*/jsx_runtime.jsx("td", {}), /*#__PURE__*/jsx_runtime.jsx("td", {}), /*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
                  children: ["$", total]
                })]
              })]
            })]
          })]
        }), !!cartProducts?.length && /*#__PURE__*/(0,jsx_runtime.jsxs)(Box, {
          children: [/*#__PURE__*/jsx_runtime.jsx("h2", {
            children: "Order information"
          }), /*#__PURE__*/jsx_runtime.jsx(Input, {
            type: "text",
            placeholder: "Name",
            value: name,
            name: "name",
            onChange: ev => setName(ev.target.value)
          }), /*#__PURE__*/jsx_runtime.jsx(Input, {
            type: "text",
            placeholder: "Email",
            value: email,
            name: "email",
            onChange: ev => setEmail(ev.target.value)
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(CityHolder, {
            children: [/*#__PURE__*/jsx_runtime.jsx(Input, {
              type: "text",
              placeholder: "City",
              value: city,
              name: "city",
              onChange: ev => setCity(ev.target.value)
            }), /*#__PURE__*/jsx_runtime.jsx(Input, {
              type: "text",
              placeholder: "Postal Code",
              value: postalCode,
              name: "postalCode",
              onChange: ev => setPostalCode(ev.target.value)
            })]
          }), /*#__PURE__*/jsx_runtime.jsx(Input, {
            type: "text",
            placeholder: "Street Address",
            value: streetAddress,
            name: "streetAddress",
            onChange: ev => setStreetAddress(ev.target.value)
          }), /*#__PURE__*/jsx_runtime.jsx(Input, {
            type: "text",
            placeholder: "Country",
            value: country,
            name: "country",
            onChange: ev => setCountry(ev.target.value)
          }), /*#__PURE__*/jsx_runtime.jsx(Button/* default */.C, {
            black: true,
            block: true,
            onClick: goToPayment,
            children: "Continue to payment"
          })]
        })]
      })
    })]
  });
}
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2Fcart&absolutePagePath=private-next-pages%2Fcart.js&preferredRegion=!

        // Next.js Route Loader
        
        
    

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
var __webpack_exports__ = __webpack_require__.X(0, [893,664,28,377], () => (__webpack_exec__(6628)));
module.exports = __webpack_exports__;

})();