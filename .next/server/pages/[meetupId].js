(() => {
var exports = {};
exports.id = "pages/[meetupId]";
exports.ids = ["pages/[meetupId]"];
exports.modules = {

/***/ "./components/meetups/MeetupDetail.js":
/*!********************************************!*\
  !*** ./components/meetups/MeetupDetail.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MeetupDetail.module.css */ "./components/meetups/MeetupDetail.module.css");
/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/troias/udemy/project-12-next-js/06-onwards-to-a-bigger-project-starting-project/components/meetups/MeetupDetail.js";




const MeetupDetail = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("section", {
    className: (_MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_2___default().detail),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
      src: props.img,
      alt: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
      children: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("address", {
      children: props.address
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
      children: props.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MeetupDetail);

/***/ }),

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/meetups/MeetupDetail */ "./components/meetups/MeetupDetail.js");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/troias/udemy/project-12-next-js/06-onwards-to-a-bigger-project-starting-project/pages/[meetupId]/index.js";




const MeetUpDetails = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_0__.default, {
    img: props.meetupData.image,
    title: props.meetupData.title,
    description: props.meetupData.description,
    address: props.meetupData.address
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined);
};

const getStaticPaths = async () => {
  const client = await mongodb__WEBPACK_IMPORTED_MODULE_1__.MongoClient.connect(`${"mongodb+srv://"}${"troias"}:${"troy20flavell"}${"@cluster0.fzmw2.mongodb.net/meetups?retryWrites=true&w=majority"}`);
  const db = client.db();
  const meetupCollection = db.collection('meetups');
  const meetups = await meetupCollection.find({}, {
    _id: 1
  }).toArray();
  client.close();
  return {
    fallback: false,
    paths: meetups.map(x => ({
      params: {
        meetupId: x._id.toString()
      }
    }))
  };
};
const getStaticProps = async ctx => {
  const meetupId = ctx.params.meetupId;
  const client = await mongodb__WEBPACK_IMPORTED_MODULE_1__.MongoClient.connect(`${"mongodb+srv://"}${"troias"}:${"troy20flavell"}${"@cluster0.fzmw2.mongodb.net/meetups?retryWrites=true&w=majority"}`);
  const db = client.db();
  const meetupCollection = db.collection('meetups');
  const selectedMeetup = await meetupCollection.findOne({
    _id: (0,mongodb__WEBPACK_IMPORTED_MODULE_1__.ObjectId)(meetupId)
  });
  client.close();
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        description: selectedMeetup.description
      }
    },
    revalidate: 36000
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MeetUpDetails);

/***/ }),

/***/ "./components/meetups/MeetupDetail.module.css":
/*!****************************************************!*\
  !*** ./components/meetups/MeetupDetail.module.css ***!
  \****************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"detail": "MeetupDetail_detail__C_8IT"
};


/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[meetupId]/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxDQUFDZSxLQUFQO0FBRUEsU0FBTztBQUNIM0IsSUFBQUEsS0FBSyxFQUFFO0FBQ0hTLE1BQUFBLFVBQVUsRUFBRTtBQUNSOEIsUUFBQUEsRUFBRSxFQUFFRixjQUFjLENBQUNaLEdBQWYsQ0FBbUJTLFFBQW5CLEVBREk7QUFFUi9CLFFBQUFBLEtBQUssRUFBRWtDLGNBQWMsQ0FBQ2xDLEtBRmQ7QUFHUk8sUUFBQUEsS0FBSyxFQUFFMkIsY0FBYyxDQUFDM0IsS0FIZDtBQUlSTCxRQUFBQSxXQUFXLEVBQUVnQyxjQUFjLENBQUNoQztBQUpwQjtBQURULEtBREo7QUFTSG1DLElBQUFBLFVBQVUsRUFBRTtBQVRULEdBQVA7QUFXSCxDQXhCTTtBQTJCUCxpRUFBZWhDLGFBQWY7Ozs7Ozs7Ozs7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0hBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWwuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL3BhZ2VzL1ttZWV0dXBJZF0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWwubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9uZXh0anMtY291cnNlL2V4dGVybmFsIFwibW9uZ29kYlwiIiwid2VicGFjazovL25leHRqcy1jb3Vyc2UvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL25leHRqcy1jb3Vyc2UvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vTWVldHVwRGV0YWlsLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBNZWV0dXBEZXRhaWwgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLmRldGFpbH0+XHJcbiAgICAgIDxpbWcgXHJcbiAgICAgICAgc3JjPXtwcm9wcy5pbWd9XHJcbiAgICAgICAgYWx0PXtwcm9wcy50aXRsZX1cclxuICAgICAgLz5cclxuICAgICAgPGgxPntwcm9wcy50aXRsZX08L2gxPlxyXG4gICAgICA8YWRkcmVzcz57cHJvcHMuYWRkcmVzc308L2FkZHJlc3M+XHJcbiAgICAgIDxwPntwcm9wcy5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lZXR1cERldGFpbDtcclxuIiwiaW1wb3J0IE1lZXR1cERldGFpbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsJ1xyXG5pbXBvcnQgeyBNb25nb0NsaWVudCwgT2JqZWN0SWQgfSBmcm9tICdtb25nb2RiJ1xyXG5cclxuY29uc3QgTWVldFVwRGV0YWlscyA9IChwcm9wcykgPT4ge1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8TWVldHVwRGV0YWlsXHJcbiAgICAgICAgICAgIGltZz17cHJvcHMubWVldHVwRGF0YS5pbWFnZX1cclxuICAgICAgICAgICAgdGl0bGU9e3Byb3BzLm1lZXR1cERhdGEudGl0bGV9XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9wcy5tZWV0dXBEYXRhLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICBhZGRyZXNzPXtwcm9wcy5tZWV0dXBEYXRhLmFkZHJlc3N9IC8+XHJcbiAgICApXHJcblxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01PTkdPX0RCX0hPU1R9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NT05HT19EQl9VU0VSTkFNRX06JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NT05HT19EQl9QQVNTfSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTU9OR09fREJfSE9TVF9DTFVTVEVSfWApXHJcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpXHJcbiAgICBjb25zdCBtZWV0dXBDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpXHJcbiAgICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwQ29sbGVjdGlvbi5maW5kKHtcclxuXHJcbiAgICB9LCB7XHJcbiAgICAgICAgX2lkOiAxXHJcbiAgICB9KS50b0FycmF5KClcclxuICBcclxuICAgIGNsaWVudC5jbG9zZSgpXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgICAgICAgcGF0aHM6IG1lZXR1cHMubWFwKHggPT4gKHtcclxuICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICBtZWV0dXBJZDogeC5faWQudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpXHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcblxyXG4gICAgY29uc3QgbWVldHVwSWQgPSBjdHgucGFyYW1zLm1lZXR1cElkXHJcblxyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NT05HT19EQl9IT1NUfSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTU9OR09fREJfVVNFUk5BTUV9OiR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTU9OR09fREJfUEFTU30ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01PTkdPX0RCX0hPU1RfQ0xVU1RFUn1gKVxyXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKVxyXG4gICAgY29uc3QgbWVldHVwQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKVxyXG4gICAgY29uc3Qgc2VsZWN0ZWRNZWV0dXAgPSBhd2FpdCBtZWV0dXBDb2xsZWN0aW9uLmZpbmRPbmUoe1xyXG4gICAgICAgX2lkOiBPYmplY3RJZChtZWV0dXBJZCkgICAgXHJcbiAgICB9KVxyXG4gIFxyXG4gICAgY2xpZW50LmNsb3NlKClcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIG1lZXR1cERhdGE6IHtcclxuICAgICAgICAgICAgICAgIGlkOiBzZWxlY3RlZE1lZXR1cC5faWQudG9TdHJpbmcoKSwgXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogc2VsZWN0ZWRNZWV0dXAudGl0bGUsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogc2VsZWN0ZWRNZWV0dXAuaW1hZ2UsIFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHNlbGVjdGVkTWVldHVwLmRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHJldmFsaWRhdGU6IDM2MDAwLFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVldFVwRGV0YWlscyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRldGFpbFwiOiBcIk1lZXR1cERldGFpbF9kZXRhaWxfX0NfOElUXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb2RiXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJjbGFzc2VzIiwiTWVldHVwRGV0YWlsIiwicHJvcHMiLCJkZXRhaWwiLCJpbWciLCJ0aXRsZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIk1vbmdvQ2xpZW50IiwiT2JqZWN0SWQiLCJNZWV0VXBEZXRhaWxzIiwibWVldHVwRGF0YSIsImltYWdlIiwiZ2V0U3RhdGljUGF0aHMiLCJjbGllbnQiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX01PTkdPX0RCX0hPU1QiLCJORVhUX1BVQkxJQ19NT05HT19EQl9VU0VSTkFNRSIsIk5FWFRfUFVCTElDX01PTkdPX0RCX1BBU1MiLCJORVhUX1BVQkxJQ19NT05HT19EQl9IT1NUX0NMVVNURVIiLCJkYiIsIm1lZXR1cENvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwibWVldHVwcyIsImZpbmQiLCJfaWQiLCJ0b0FycmF5IiwiY2xvc2UiLCJmYWxsYmFjayIsInBhdGhzIiwibWFwIiwieCIsInBhcmFtcyIsIm1lZXR1cElkIiwidG9TdHJpbmciLCJnZXRTdGF0aWNQcm9wcyIsImN0eCIsInNlbGVjdGVkTWVldHVwIiwiZmluZE9uZSIsImlkIiwicmV2YWxpZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=