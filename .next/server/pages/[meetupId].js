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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/meetups/MeetupDetail */ "./components/meetups/MeetupDetail.js");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/troias/udemy/project-12-next-js/06-onwards-to-a-bigger-project-starting-project/pages/[meetupId]/index.js";







const MeetUpDetails = props => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("title", {
        children: props.meetupData.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
        name: "description",
        content: props.meetupData.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_1__.default, {
      img: props.meetupData.image,
      title: props.meetupData.title,
      description: props.meetupData.description,
      address: props.meetupData.address
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

const getStaticPaths = async ctx => {
  const client = await mongodb__WEBPACK_IMPORTED_MODULE_2__.MongoClient.connect(`${"mongodb+srv://"}${"troias"}:${"troy20flavell"}${"@cluster0.fzmw2.mongodb.net/meetups?retryWrites=true&w=majority"}`);
  const db = client.db();
  const meetupCollection = db.collection('meetups');
  const meetups = await meetupCollection.find({}, {
    _id: 1
  }).toArray();
  client.close();
  return {
    fallback: "blocking",
    paths: meetups.map(x => ({
      params: {
        meetupId: x._id.toString()
      }
    }))
  };
};
const getStaticProps = async ctx => {
  const meetupId = ctx.params.meetupId;
  const client = await mongodb__WEBPACK_IMPORTED_MODULE_2__.MongoClient.connect(`${"mongodb+srv://"}${"troias"}:${"troy20flavell"}${"@cluster0.fzmw2.mongodb.net/meetups?retryWrites=true&w=majority"}`);
  const db = client.db();
  const meetupCollection = db.collection('meetups');
  const selectedMeetup = await meetupCollection.findOne({
    _id: (0,mongodb__WEBPACK_IMPORTED_MODULE_2__.ObjectId)(meetupId)
  }).catch(err => {
    return {
      notFound: true
    };
  });

  if (!selectedMeetup) {}

  client.close();
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
        address: selectedMeetup.address
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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsLmpzIiwid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzIiwid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS9leHRlcm5hbCBcIm1vbmdvZGJcIiIsIndlYnBhY2s6Ly9uZXh0anMtY291cnNlL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9NZWV0dXBEZXRhaWwubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IE1lZXR1cERldGFpbCA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsfT5cclxuICAgICAgPGltZyBcclxuICAgICAgICBzcmM9e3Byb3BzLmltZ31cclxuICAgICAgICBhbHQ9e3Byb3BzLnRpdGxlfVxyXG4gICAgICAvPlxyXG4gICAgICA8aDE+e3Byb3BzLnRpdGxlfTwvaDE+XHJcbiAgICAgIDxhZGRyZXNzPntwcm9wcy5hZGRyZXNzfTwvYWRkcmVzcz5cclxuICAgICAgPHA+e3Byb3BzLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVldHVwRGV0YWlsO1xyXG4iLCJpbXBvcnQgcm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTWVldHVwRGV0YWlsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWwnXHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50LCBPYmplY3RJZCB9IGZyb20gJ21vbmdvZGInXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmNvbnN0IE1lZXRVcERldGFpbHMgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT57cHJvcHMubWVldHVwRGF0YS50aXRsZX08L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17cHJvcHMubWVldHVwRGF0YS5kZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8TWVldHVwRGV0YWlsXHJcbiAgICAgICAgICAgICAgICBpbWc9e3Byb3BzLm1lZXR1cERhdGEuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17cHJvcHMubWVldHVwRGF0YS50aXRsZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9wcy5tZWV0dXBEYXRhLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgYWRkcmVzcz17cHJvcHMubWVldHVwRGF0YS5hZGRyZXNzfSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcblxyXG5cclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTU9OR09fREJfSE9TVH0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01PTkdPX0RCX1VTRVJOQU1FfToke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01PTkdPX0RCX1BBU1N9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NT05HT19EQl9IT1NUX0NMVVNURVJ9YClcclxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKClcclxuICAgIGNvbnN0IG1lZXR1cENvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJylcclxuICAgIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBDb2xsZWN0aW9uLmZpbmQoe1xyXG5cclxuICAgIH0sIHtcclxuICAgICAgICBfaWQ6IDFcclxuICAgIH0pLnRvQXJyYXkoKVxyXG5cclxuICAgIGNsaWVudC5jbG9zZSgpXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBmYWxsYmFjazogXCJibG9ja2luZ1wiLFxyXG4gICAgICAgIHBhdGhzOiBtZWV0dXBzLm1hcCh4ID0+ICh7XHJcbiAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgbWVldHVwSWQ6IHguX2lkLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuXHJcblxyXG4gICAgY29uc3QgbWVldHVwSWQgPSBjdHgucGFyYW1zLm1lZXR1cElkXHJcblxyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NT05HT19EQl9IT1NUfSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTU9OR09fREJfVVNFUk5BTUV9OiR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTU9OR09fREJfUEFTU30ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01PTkdPX0RCX0hPU1RfQ0xVU1RFUn1gKVxyXG4gXHJcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpXHJcbiAgICBjb25zdCBtZWV0dXBDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpXHJcbiAgICBjb25zdCBzZWxlY3RlZE1lZXR1cCA9IGF3YWl0IG1lZXR1cENvbGxlY3Rpb24uZmluZE9uZSh7XHJcbiAgICAgICAgX2lkOiBPYmplY3RJZChtZWV0dXBJZClcclxuICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtub3RGb3VuZDogdHJ1ZX1cclxuICAgIH0pXHJcblxyXG4gICAgaWYgKCFzZWxlY3RlZE1lZXR1cCkge1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIGNsaWVudC5jbG9zZSgpXHJcblxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBtZWV0dXBEYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogc2VsZWN0ZWRNZWV0dXAuX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogc2VsZWN0ZWRNZWV0dXAudGl0bGUsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogc2VsZWN0ZWRNZWV0dXAuaW1hZ2UsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogc2VsZWN0ZWRNZWV0dXAuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBzZWxlY3RlZE1lZXR1cC5hZGRyZXNzLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXZhbGlkYXRlOiAzNjAwMCxcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZWV0VXBEZXRhaWxzIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZGV0YWlsXCI6IFwiTWVldHVwRGV0YWlsX2RldGFpbF9fQ184SVRcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvZGJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJjbGFzc2VzIiwiTWVldHVwRGV0YWlsIiwicHJvcHMiLCJkZXRhaWwiLCJpbWciLCJ0aXRsZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsInJvdXRlciIsInVzZVJvdXRlciIsIk1vbmdvQ2xpZW50IiwiT2JqZWN0SWQiLCJIZWFkIiwiTWVldFVwRGV0YWlscyIsIm1lZXR1cERhdGEiLCJpbWFnZSIsImdldFN0YXRpY1BhdGhzIiwiY3R4IiwiY2xpZW50IiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19NT05HT19EQl9IT1NUIiwiTkVYVF9QVUJMSUNfTU9OR09fREJfVVNFUk5BTUUiLCJORVhUX1BVQkxJQ19NT05HT19EQl9QQVNTIiwiTkVYVF9QVUJMSUNfTU9OR09fREJfSE9TVF9DTFVTVEVSIiwiZGIiLCJtZWV0dXBDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsIm1lZXR1cHMiLCJmaW5kIiwiX2lkIiwidG9BcnJheSIsImNsb3NlIiwiZmFsbGJhY2siLCJwYXRocyIsIm1hcCIsIngiLCJwYXJhbXMiLCJtZWV0dXBJZCIsInRvU3RyaW5nIiwiZ2V0U3RhdGljUHJvcHMiLCJzZWxlY3RlZE1lZXR1cCIsImZpbmRPbmUiLCJjYXRjaCIsImVyciIsIm5vdEZvdW5kIiwiaWQiLCJyZXZhbGlkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==