"use strict";
exports.id = 377;
exports.ids = [377];
exports.modules = {

/***/ 3329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ButtonStyle),
  "C": () => (/* binding */ Button)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./lib/colors.js
const primary = '#0D3D29';
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./components/Button.js
const _excluded = ["children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const ButtonStyle = external_styled_components_.css`
  border:0;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-weight:500;
  svg{
    height: 16px;
    margin-right: 5px;
  }
  ${props => props.block && external_styled_components_.css`
    display: block;
    width: 100%;
  `}
  ${props => props.white && !props.outline && external_styled_components_.css`
    background-color: #fff;
    color: #000;
  `}
  ${props => props.white && props.outline && external_styled_components_.css`
    background-color: transparent;
    color: #fff;
    border: 1px solid #fff;
  `}
  ${props => props.black && !props.outline && external_styled_components_.css`
    background-color: #000;
    color: #fff;
  `}
  ${props => props.black && props.outline && external_styled_components_.css`
    background-color: transparent;
    color: #000;
    border: 1px solid #000;
  `}
  ${props => props.primary && !props.outline && external_styled_components_.css`
    background-color: ${primary};
    border: 1px solid ${primary};
    color:#fff;
  `}
  ${props => props.primary && props.outline && external_styled_components_.css`
    background-color: transparent;
    border: 1px solid ${primary};
    color:${primary};
  `}
  ${props => props.size === 'l' && external_styled_components_.css`
    font-size:1.2rem;
    padding: 10px 20px;
    svg{
      height: 20px;
    }
  `}
`;
const StyledButton = (external_styled_components_default()).button`
  ${ButtonStyle}
`;
function Button(_ref) {
  let {
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/jsx_runtime.jsx(StyledButton, _objectSpread(_objectSpread({}, rest), {}, {
    children: children
  }));
}

/***/ }),

/***/ 7278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Center)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5893);


const StyledDiv = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;
function Center({
  children
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(StyledDiv, {
    children: children
  });
}

/***/ }),

/***/ 156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./components/Center.js
var Center = __webpack_require__(7278);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/CartContext.js
var CartContext = __webpack_require__(2028);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./components/icons/Bars.js

function BarsIcon({
  className = 'w-6 h-6'
}) {
  return /*#__PURE__*/jsx_runtime.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: className,
    children: /*#__PURE__*/jsx_runtime.jsx("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    })
  });
}
;// CONCATENATED MODULE: ./components/Header.js








const StyledHeader = (external_styled_components_default()).header`
  background-color: #222;
`;
const Logo = external_styled_components_default()((link_default()))`
  color:#fff;
  text-decoration:none;
  position: relative;
  z-index: 3;
`;
const Wrapper = (external_styled_components_default()).div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;
const StyledNav = (external_styled_components_default()).nav`
  ${props => props.mobileNavActive ? `
    display: block;
  ` : `
    display: none;
  `}
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: #222;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;
const NavLink = external_styled_components_default()((link_default()))`
  display: block;
  color:#aaa;
  text-decoration:none;
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    padding:0;
  }
`;
const NavButton = (external_styled_components_default()).button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border:0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
function Header() {
  const {
    cartProducts
  } = (0,external_react_.useContext)(CartContext/* CartContext */.A);
  const {
    0: mobileNavActive,
    1: setMobileNavActive
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/jsx_runtime.jsx(StyledHeader, {
    children: /*#__PURE__*/jsx_runtime.jsx(Center/* default */.Z, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Wrapper, {
        children: [/*#__PURE__*/jsx_runtime.jsx(Logo, {
          href: '/',
          children: "Ecommerce"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledNav, {
          mobileNavActive: mobileNavActive,
          children: [/*#__PURE__*/jsx_runtime.jsx(NavLink, {
            href: '/',
            children: "Home"
          }), /*#__PURE__*/jsx_runtime.jsx(NavLink, {
            href: '/products',
            children: "All products"
          }), /*#__PURE__*/jsx_runtime.jsx(NavLink, {
            href: '/categories',
            children: "Categories"
          }), /*#__PURE__*/jsx_runtime.jsx(NavLink, {
            href: '/account',
            children: "Account"
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(NavLink, {
            href: '/cart',
            children: ["Cart (", cartProducts.length, ")"]
          })]
        }), /*#__PURE__*/jsx_runtime.jsx(NavButton, {
          onClick: () => setMobileNavActive(prev => !prev),
          children: /*#__PURE__*/jsx_runtime.jsx(BarsIcon, {})
        })]
      })
    })
  });
}

/***/ })

};
;