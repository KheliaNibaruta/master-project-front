"use strict";
(() => {
var exports = {};
exports.id = 538;
exports.ids = [538];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 6206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ mongooseConnect)
/* harmony export */ });
/* harmony import */ var _mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6206);

function mongooseConnect() {
  if (_mongoose__WEBPACK_IMPORTED_MODULE_0__["default"].connection.readyState === 1) {
    return _mongoose__WEBPACK_IMPORTED_MODULE_0__["default"].connection.asPromise();
  } else {
    const uri = process.env.MONGODB_URI;
    return _mongoose__WEBPACK_IMPORTED_MODULE_0__["default"].connect(uri);
  }
}

/***/ }),

/***/ 8942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ Order)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const OrderSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
  line_items: Object,
  name: String,
  email: String,
  city: String,
  postalCode: String,
  streetAddress: String,
  country: String,
  paid: Boolean
}, {
  timestamps: true
});
const Order = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.Order || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)('Order', OrderSchema);

/***/ }),

/***/ 2565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6206);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'micro'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _models_Order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8942);


const stripe = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'stripe'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))(process.env.STRIPE_SK);



const endpointSecret = "whsec_634d3142fd2755bd61adaef74ce0504bd2044848c8aac301ffdb56339a0ca78d";
async function handler(req, res) {
  await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_2__/* .mongooseConnect */ .I)();
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(await Object(function webpackMissingModule() { var e = new Error("Cannot find module 'micro'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(req), sig, endpointSecret);
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  } // Handle the event


  switch (event.type) {
    case 'checkout.session.completed':
      const data = event.data.object;
      const orderId = data.metadata.orderId;
      const paid = data.payment_status === 'paid';

      if (orderId && paid) {
        await _models_Order__WEBPACK_IMPORTED_MODULE_1__/* .Order.findByIdAndUpdate */ .K.findByIdAndUpdate(orderId, {
          paid: true
        });
      }

      break;

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.status(200).send('ok');
}
const config = {
  api: {
    bodyParser: false
  }
}; // bright-thrift-cajole-lean
// acct_1Lj5ADIUXXMmgk2a

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2565));
module.exports = __webpack_exports__;

})();