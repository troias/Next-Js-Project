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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/troias/udemy/project-12-next-js/06-onwards-to-a-bigger-project-starting-project/pages/[meetupId]/index.js";



const MeetUpDetails = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_0__.default, {
    img: "",
    title: "",
    description: "",
    address: ""
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined);
};

const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [{
      params: {
        meetupId: 'm1'
      },
      params: {
        meetupId: 'm2'
      }
    }]
  };
};
const getStaticProps = async ctx => {
  console.log("ctx", ctx);
  const meetupId = ctx.params.meetupId;
  console.log("meetupId", meetupId);
  return {
    props: {
      meetupData: {
        id: meetupId,
        title: "first Meetup",
        image: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
        address: "42 ass Street",
        description: "First meetup"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvW21lZXR1cElkXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFFQSxNQUFNRSxZQUFZLEdBQUlDLEtBQUQsSUFBVztBQUM5QixzQkFDRTtBQUFTLGFBQVMsRUFBRUYsd0VBQXBCO0FBQUEsNEJBQ0U7QUFDRSxTQUFHLEVBQUVFLEtBQUssQ0FBQ0UsR0FEYjtBQUVFLFNBQUcsRUFBRUYsS0FBSyxDQUFDRztBQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFLRTtBQUFBLGdCQUFLSCxLQUFLLENBQUNHO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRixlQU1FO0FBQUEsZ0JBQVVILEtBQUssQ0FBQ0k7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORixlQU9FO0FBQUEsZ0JBQUlKLEtBQUssQ0FBQ0s7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBV0QsQ0FaRDs7QUFjQSxpRUFBZU4sWUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBOzs7QUFHQSxNQUFNTyxhQUFhLEdBQUlOLEtBQUQsSUFBVztBQUc3QixzQkFFSSw4REFBQyxxRUFBRDtBQUNJLE9BQUcsRUFBQyxFQURSO0FBRUksU0FBSyxFQUFDLEVBRlY7QUFHSSxlQUFXLEVBQUMsRUFIaEI7QUFJSSxXQUFPLEVBQUM7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFXSCxDQWREOztBQWdCTyxNQUFNTyxjQUFjLEdBQUcsWUFBWTtBQUN0QyxTQUFPO0FBQ0hDLElBQUFBLFFBQVEsRUFBRSxLQURQO0FBRUhDLElBQUFBLEtBQUssRUFBRSxDQUNIO0FBQ0lDLE1BQUFBLE1BQU0sRUFBRTtBQUFFQyxRQUFBQSxRQUFRLEVBQUU7QUFBWixPQURaO0FBRUlELE1BQUFBLE1BQU0sRUFBRTtBQUFFQyxRQUFBQSxRQUFRLEVBQUU7QUFBWjtBQUZaLEtBREc7QUFGSixHQUFQO0FBV0gsQ0FaTTtBQWNBLE1BQU1DLGNBQWMsR0FBRyxNQUFPQyxHQUFQLElBQWU7QUFFekNDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosRUFBbUJGLEdBQW5CO0FBQ0EsUUFBTUYsUUFBUSxHQUFHRSxHQUFHLENBQUNILE1BQUosQ0FBV0MsUUFBNUI7QUFDQUcsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QkosUUFBeEI7QUFDQSxTQUFPO0FBQ0hYLElBQUFBLEtBQUssRUFBRTtBQUNIZ0IsTUFBQUEsVUFBVSxFQUFFO0FBQ1JDLFFBQUFBLEVBQUUsRUFBRU4sUUFESTtBQUVSUixRQUFBQSxLQUFLLEVBQUUsY0FGQztBQUdSZSxRQUFBQSxLQUFLLEVBQ0QscUtBSkk7QUFLUmQsUUFBQUEsT0FBTyxFQUFFLGVBTEQ7QUFNUkMsUUFBQUEsV0FBVyxFQUFFO0FBTkw7QUFEVCxLQURKO0FBV0hjLElBQUFBLFVBQVUsRUFBRTtBQVhULEdBQVA7QUFhSCxDQWxCTTtBQXFCUCxpRUFBZWIsYUFBZjs7Ozs7Ozs7OztBQ3REQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSEE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbC5qcyIsIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcyIsIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbC5tb2R1bGUuY3NzIiwid2VicGFjazovL25leHRqcy1jb3Vyc2UvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL25leHRqcy1jb3Vyc2UvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vTWVldHVwRGV0YWlsLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBNZWV0dXBEZXRhaWwgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLmRldGFpbH0+XHJcbiAgICAgIDxpbWcgXHJcbiAgICAgICAgc3JjPXtwcm9wcy5pbWd9XHJcbiAgICAgICAgYWx0PXtwcm9wcy50aXRsZX1cclxuICAgICAgLz5cclxuICAgICAgPGgxPntwcm9wcy50aXRsZX08L2gxPlxyXG4gICAgICA8YWRkcmVzcz57cHJvcHMuYWRkcmVzc308L2FkZHJlc3M+XHJcbiAgICAgIDxwPntwcm9wcy5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lZXR1cERldGFpbDtcclxuIiwiaW1wb3J0IE1lZXR1cERldGFpbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsJ1xyXG5cclxuXHJcbmNvbnN0IE1lZXRVcERldGFpbHMgPSAocHJvcHMpID0+IHtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPE1lZXR1cERldGFpbFxyXG4gICAgICAgICAgICBpbWc9XCJcIlxyXG4gICAgICAgICAgICB0aXRsZT1cIlwiXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiXCJcclxuICAgICAgICAgICAgYWRkcmVzcz1cIlwiIC8+XHJcbiAgICApXHJcblxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gICAgICAgIHBhdGhzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtczogeyBtZWV0dXBJZDogJ20xJyB9LFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7IG1lZXR1cElkOiAnbTInIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLCBcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiY3R4XCIsIGN0eClcclxuICAgIGNvbnN0IG1lZXR1cElkID0gY3R4LnBhcmFtcy5tZWV0dXBJZFxyXG4gICAgY29uc29sZS5sb2coXCJtZWV0dXBJZFwiLCBtZWV0dXBJZClcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgbWVldHVwRGF0YToge1xyXG4gICAgICAgICAgICAgICAgaWQ6IG1lZXR1cElkLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiZmlyc3QgTWVldHVwXCIsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTpcclxuICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vaGVscHguYWRvYmUuY29tL2NvbnRlbnQvZGFtL2hlbHAvZW4vcGhvdG9zaG9wL3VzaW5nL2NvbnZlcnQtY29sb3ItaW1hZ2UtYmxhY2std2hpdGUvamNyX2NvbnRlbnQvbWFpbi1wYXJzL2JlZm9yZV9hbmRfYWZ0ZXIvaW1hZ2UtYmVmb3JlL0xhbmRzY2FwZS1Db2xvci5qcGdcIixcclxuICAgICAgICAgICAgICAgIGFkZHJlc3M6IFwiNDIgYXNzIFN0cmVldFwiLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRmlyc3QgbWVldHVwXCIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHJldmFsaWRhdGU6IDM2MDAwLFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVldFVwRGV0YWlscyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRldGFpbFwiOiBcIk1lZXR1cERldGFpbF9kZXRhaWxfX0NfOElUXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlJlYWN0IiwiY2xhc3NlcyIsIk1lZXR1cERldGFpbCIsInByb3BzIiwiZGV0YWlsIiwiaW1nIiwidGl0bGUiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJNZWV0VXBEZXRhaWxzIiwiZ2V0U3RhdGljUGF0aHMiLCJmYWxsYmFjayIsInBhdGhzIiwicGFyYW1zIiwibWVldHVwSWQiLCJnZXRTdGF0aWNQcm9wcyIsImN0eCIsImNvbnNvbGUiLCJsb2ciLCJtZWV0dXBEYXRhIiwiaWQiLCJpbWFnZSIsInJldmFsaWRhdGUiXSwic291cmNlUm9vdCI6IiJ9