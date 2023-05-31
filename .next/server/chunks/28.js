"use strict";
exports.id = 28;
exports.ids = [28];
exports.modules = {

/***/ 2028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ CartContext),
/* harmony export */   "G": () => (/* binding */ CartContextProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5893);


const CartContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
function CartContextProvider({
  children
}) {
  const ls =  false ? 0 : null;
  const {
    0: cartProducts,
    1: setCartProducts
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (cartProducts?.length > 0) {
      ls?.setItem('cart', JSON.stringify(cartProducts));
    }
  }, [cartProducts]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (ls && ls.getItem('cart')) {
      setCartProducts(JSON.parse(ls.getItem('cart')));
    }
  }, []);

  function addProduct(productId) {
    setCartProducts(prev => [...prev, productId]);
  }

  function removeProduct(productId) {
    setCartProducts(prev => {
      const pos = prev.indexOf(productId);

      if (pos !== -1) {
        return prev.filter((value, index) => index !== pos);
      }

      return prev;
    });
  }

  function clearCart() {
    setCartProducts([]);
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(CartContext.Provider, {
    value: {
      cartProducts,
      setCartProducts,
      addProduct,
      removeProduct,
      clearCart
    },
    children: children
  });
}

/***/ })

};
;