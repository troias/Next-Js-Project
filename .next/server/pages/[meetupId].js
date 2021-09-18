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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/troias/udemy/project-12-next-js/06-onwards-to-a-bigger-project-starting-project/pages/[meetupId]/index.js";






const MeetUpDetails = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("title", {
        children: props.meetupData.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("meta", {
        name: "description",
        content: props.meetupData.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_0__.default, {
      img: props.meetupData.image,
      title: props.meetupData.title,
      description: props.meetupData.description,
      address: props.meetupData.address
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxHQUFFQSxpRUFBOEMsRUFBbE0sQ0FBckI7QUFDQSxRQUFNTSxFQUFFLEdBQUdSLE1BQU0sQ0FBQ1EsRUFBUCxFQUFYO0FBQ0EsUUFBTUMsZ0JBQWdCLEdBQUdELEVBQUUsQ0FBQ0UsVUFBSCxDQUFjLFNBQWQsQ0FBekI7QUFDQSxRQUFNZSxjQUFjLEdBQUcsTUFBTWhCLGdCQUFnQixDQUFDaUIsT0FBakIsQ0FBeUI7QUFDbERiLElBQUFBLEdBQUcsRUFBRW5CLGlEQUFRLENBQUMyQixRQUFEO0FBRHFDLEdBQXpCLENBQTdCO0FBSUFyQixFQUFBQSxNQUFNLENBQUNlLEtBQVA7QUFFQSxTQUFPO0FBQ0g1QixJQUFBQSxLQUFLLEVBQUU7QUFDSFUsTUFBQUEsVUFBVSxFQUFFO0FBQ1I4QixRQUFBQSxFQUFFLEVBQUVGLGNBQWMsQ0FBQ1osR0FBZixDQUFtQlMsUUFBbkIsRUFESTtBQUVSaEMsUUFBQUEsS0FBSyxFQUFFbUMsY0FBYyxDQUFDbkMsS0FGZDtBQUdSUSxRQUFBQSxLQUFLLEVBQUUyQixjQUFjLENBQUMzQixLQUhkO0FBSVJOLFFBQUFBLFdBQVcsRUFBRWlDLGNBQWMsQ0FBQ2pDLFdBSnBCO0FBS1JELFFBQUFBLE9BQU8sRUFBRWtDLGNBQWMsQ0FBQ2xDO0FBTGhCO0FBRFQsS0FESjtBQVVIcUMsSUFBQUEsVUFBVSxFQUFFO0FBVlQsR0FBUDtBQVlILENBeEJNO0FBMkJQLGlFQUFlaEMsYUFBZjs7Ozs7Ozs7OztBQzVFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSEE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbC5qcyIsIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcyIsIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbC5tb2R1bGUuY3NzIiwid2VicGFjazovL25leHRqcy1jb3Vyc2UvZXh0ZXJuYWwgXCJtb25nb2RiXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL25leHRqcy1jb3Vyc2UvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL25leHRqcy1jb3Vyc2UvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vTWVldHVwRGV0YWlsLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBNZWV0dXBEZXRhaWwgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLmRldGFpbH0+XHJcbiAgICAgIDxpbWcgXHJcbiAgICAgICAgc3JjPXtwcm9wcy5pbWd9XHJcbiAgICAgICAgYWx0PXtwcm9wcy50aXRsZX1cclxuICAgICAgLz5cclxuICAgICAgPGgxPntwcm9wcy50aXRsZX08L2gxPlxyXG4gICAgICA8YWRkcmVzcz57cHJvcHMuYWRkcmVzc308L2FkZHJlc3M+XHJcbiAgICAgIDxwPntwcm9wcy5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lZXR1cERldGFpbDtcclxuIiwiaW1wb3J0IE1lZXR1cERldGFpbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsJ1xyXG5pbXBvcnQgeyBNb25nb0NsaWVudCwgT2JqZWN0SWQgfSBmcm9tICdtb25nb2RiJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5jb25zdCBNZWV0VXBEZXRhaWxzID0gKHByb3BzKSA9PiB7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+e3Byb3BzLm1lZXR1cERhdGEudGl0bGV9PC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3Byb3BzLm1lZXR1cERhdGEuZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPE1lZXR1cERldGFpbFxyXG4gICAgICAgICAgICAgICAgaW1nPXtwcm9wcy5tZWV0dXBEYXRhLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3Byb3BzLm1lZXR1cERhdGEudGl0bGV9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvcHMubWVldHVwRGF0YS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgIGFkZHJlc3M9e3Byb3BzLm1lZXR1cERhdGEuYWRkcmVzc30gLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTU9OR09fREJfSE9TVH0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01PTkdPX0RCX1VTRVJOQU1FfToke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01PTkdPX0RCX1BBU1N9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NT05HT19EQl9IT1NUX0NMVVNURVJ9YClcclxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKClcclxuICAgIGNvbnN0IG1lZXR1cENvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJylcclxuICAgIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBDb2xsZWN0aW9uLmZpbmQoe1xyXG5cclxuICAgIH0sIHtcclxuICAgICAgICBfaWQ6IDFcclxuICAgIH0pLnRvQXJyYXkoKVxyXG5cclxuICAgIGNsaWVudC5jbG9zZSgpXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgICAgICAgcGF0aHM6IG1lZXR1cHMubWFwKHggPT4gKHtcclxuICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICBtZWV0dXBJZDogeC5faWQudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpXHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcblxyXG4gICAgY29uc3QgbWVldHVwSWQgPSBjdHgucGFyYW1zLm1lZXR1cElkXHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01PTkdPX0RCX0hPU1R9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NT05HT19EQl9VU0VSTkFNRX06JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NT05HT19EQl9QQVNTfSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTU9OR09fREJfSE9TVF9DTFVTVEVSfWApXHJcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpXHJcbiAgICBjb25zdCBtZWV0dXBDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpXHJcbiAgICBjb25zdCBzZWxlY3RlZE1lZXR1cCA9IGF3YWl0IG1lZXR1cENvbGxlY3Rpb24uZmluZE9uZSh7XHJcbiAgICAgICAgX2lkOiBPYmplY3RJZChtZWV0dXBJZClcclxuICAgIH0pXHJcblxyXG4gICAgY2xpZW50LmNsb3NlKClcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIG1lZXR1cERhdGE6IHtcclxuICAgICAgICAgICAgICAgIGlkOiBzZWxlY3RlZE1lZXR1cC5faWQudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBzZWxlY3RlZE1lZXR1cC50aXRsZSxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBzZWxlY3RlZE1lZXR1cC5pbWFnZSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBzZWxlY3RlZE1lZXR1cC5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIGFkZHJlc3M6IHNlbGVjdGVkTWVldHVwLmFkZHJlc3MsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHJldmFsaWRhdGU6IDM2MDAwLFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVldFVwRGV0YWlscyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRldGFpbFwiOiBcIk1lZXR1cERldGFpbF9kZXRhaWxfX0NfOElUXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb2RiXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlJlYWN0IiwiY2xhc3NlcyIsIk1lZXR1cERldGFpbCIsInByb3BzIiwiZGV0YWlsIiwiaW1nIiwidGl0bGUiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJNb25nb0NsaWVudCIsIk9iamVjdElkIiwiSGVhZCIsIk1lZXRVcERldGFpbHMiLCJtZWV0dXBEYXRhIiwiaW1hZ2UiLCJnZXRTdGF0aWNQYXRocyIsImNsaWVudCIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfTU9OR09fREJfSE9TVCIsIk5FWFRfUFVCTElDX01PTkdPX0RCX1VTRVJOQU1FIiwiTkVYVF9QVUJMSUNfTU9OR09fREJfUEFTUyIsIk5FWFRfUFVCTElDX01PTkdPX0RCX0hPU1RfQ0xVU1RFUiIsImRiIiwibWVldHVwQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJtZWV0dXBzIiwiZmluZCIsIl9pZCIsInRvQXJyYXkiLCJjbG9zZSIsImZhbGxiYWNrIiwicGF0aHMiLCJtYXAiLCJ4IiwicGFyYW1zIiwibWVldHVwSWQiLCJ0b1N0cmluZyIsImdldFN0YXRpY1Byb3BzIiwiY3R4Iiwic2VsZWN0ZWRNZWV0dXAiLCJmaW5kT25lIiwiaWQiLCJyZXZhbGlkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==