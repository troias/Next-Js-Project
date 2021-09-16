"use strict";
(() => {
var exports = {};
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);


const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(`${"mongodb+srv://"}${"troias"}:${"troy20flavell"}${"@cluster0.fzmw2.mongodb.net/meetups?retryWrites=true&w=majority"}`);
    const db = client.db();
    const meetupCollection = db.collection('meetups');
    const result = await meetupCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({
      message: "meetups updated successfully"
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL25ldy1tZWV0dXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLE1BQU1DLE9BQU8sR0FBRyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFFaEMsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7QUFDdkIsVUFBTUMsSUFBSSxHQUFHSCxHQUFHLENBQUNJLElBQWpCO0FBQ0EsVUFBTUMsTUFBTSxHQUFHLE1BQU1QLHdEQUFBLENBQXFCLEdBQUVTLGdCQUFzQyxHQUFFQSxRQUEwQyxJQUFHQSxlQUFzQyxHQUFFQSxpRUFBOEMsRUFBbE0sQ0FBckI7QUFDQSxVQUFNTSxFQUFFLEdBQUdSLE1BQU0sQ0FBQ1EsRUFBUCxFQUFYO0FBQ0EsVUFBTUMsZ0JBQWdCLEdBQUdELEVBQUUsQ0FBQ0UsVUFBSCxDQUFjLFNBQWQsQ0FBekI7QUFDQSxVQUFNQyxNQUFNLEdBQUcsTUFBTUYsZ0JBQWdCLENBQUNHLFNBQWpCLENBQTJCZCxJQUEzQixDQUFyQjtBQUNBZSxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsTUFBWjtBQUNBWCxJQUFBQSxNQUFNLENBQUNlLEtBQVA7QUFDQW5CLElBQUFBLEdBQUcsQ0FBQ29CLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFDQyxNQUFBQSxPQUFPLEVBQUU7QUFBVixLQUFyQjtBQUNIO0FBQ0osQ0FaRDs7QUFjQSxpRUFBZXhCLE9BQWY7Ozs7Ozs7Ozs7QUNoQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvYXBpL25ldy1tZWV0dXAuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS9leHRlcm5hbCBcIm1vbmdvZGJcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInXHJcblxyXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgIFxyXG4gICAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xyXG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTU9OR09fREJfSE9TVH0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01PTkdPX0RCX1VTRVJOQU1FfToke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01PTkdPX0RCX1BBU1N9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NT05HT19EQl9IT1NUX0NMVVNURVJ9YClcclxuICAgICAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpXHJcbiAgICAgICAgY29uc3QgbWVldHVwQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1lZXR1cENvbGxlY3Rpb24uaW5zZXJ0T25lKGRhdGEpXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgICAgIGNsaWVudC5jbG9zZSgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oe21lc3NhZ2U6IFwibWVldHVwcyB1cGRhdGVkIHN1Y2Nlc3NmdWxseVwifSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlciIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvZGJcIik7Il0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImRhdGEiLCJib2R5IiwiY2xpZW50IiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19NT05HT19EQl9IT1NUIiwiTkVYVF9QVUJMSUNfTU9OR09fREJfVVNFUk5BTUUiLCJORVhUX1BVQkxJQ19NT05HT19EQl9QQVNTIiwiTkVYVF9QVUJMSUNfTU9OR09fREJfSE9TVF9DTFVTVEVSIiwiZGIiLCJtZWV0dXBDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsInJlc3VsdCIsImluc2VydE9uZSIsImNvbnNvbGUiLCJsb2ciLCJjbG9zZSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==