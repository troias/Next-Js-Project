(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/meetups/MeetupItem.js":
/*!******************************************!*\
  !*** ./components/meetups/MeetupItem.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_ui_Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/ui/Card */ "./components/ui/Card.js");
/* harmony import */ var _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MeetupItem.module.css */ "./components/meetups/MeetupItem.module.css");
/* harmony import */ var _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/troias/udemy/project-12-next-js/06-onwards-to-a-bigger-project-starting-project/components/meetups/MeetupItem.js";





function MeetupItem(props) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();

  const showDetailsHandler = () => {
    console.log(router);
    router.push(`/${props.id}`);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
    className: (_MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().item),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_ui_Card__WEBPACK_IMPORTED_MODULE_0__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: (_MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().image),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: props.image,
          alt: props.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: (_MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().content),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
          children: props.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("address", {
          children: props.address
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: (_MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().actions),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
          onClick: showDetailsHandler,
          children: "Show Details"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MeetupItem);

/***/ }),

/***/ "./components/meetups/MeetupList.js":
/*!******************************************!*\
  !*** ./components/meetups/MeetupList.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MeetupItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MeetupItem */ "./components/meetups/MeetupItem.js");
/* harmony import */ var _MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MeetupList.module.css */ "./components/meetups/MeetupList.module.css");
/* harmony import */ var _MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/troias/udemy/project-12-next-js/06-onwards-to-a-bigger-project-starting-project/components/meetups/MeetupList.js";




function MeetupList(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
    className: (_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2___default().list),
    children: props.meetups.map(meetup => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MeetupItem__WEBPACK_IMPORTED_MODULE_0__.default, {
      id: meetup.id,
      image: meetup.image,
      title: meetup.title,
      address: meetup.address
    }, meetup.id, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MeetupList);

/***/ }),

/***/ "./components/ui/Card.js":
/*!*******************************!*\
  !*** ./components/ui/Card.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.module.css */ "./components/ui/Card.module.css");
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/troias/udemy/project-12-next-js/06-onwards-to-a-bigger-project-starting-project/components/ui/Card.js";



function Card(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/troias/udemy/project-12-next-js/06-onwards-to-a-bigger-project-starting-project/pages/index.js";




console.log("process.env.MONGO_DB_USERNAME", "mongodb+srv://");

const HomePage = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__.default, {
      meetups: props.meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

const getStaticProps = async ctx => {
  const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(`${"mongodb+srv://"}${"troias"}:${"troy20flavell"}${"@cluster0.fzmw2.mongodb.net/meetups?retryWrites=true&w=majority"}`);
  const db = client.db();
  const meetupCollection = db.collection('meetups');
  const meetups = await meetupCollection.find().toArray();
  console.log(meetups);
  client.close();
  return {
    props: {
      meetups: meetups.map(x => ({
        title: x.title,
        address: x.address,
        image: x.image,
        id: x._id.toString()
      }))
    },
    revalidate: 36000
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

/***/ }),

/***/ "./components/meetups/MeetupItem.module.css":
/*!**************************************************!*\
  !*** ./components/meetups/MeetupItem.module.css ***!
  \**************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"item": "MeetupItem_item__3siMU",
	"image": "MeetupItem_image__13rAP",
	"content": "MeetupItem_content__3uEkT",
	"actions": "MeetupItem_actions__LvT9B"
};


/***/ }),

/***/ "./components/meetups/MeetupList.module.css":
/*!**************************************************!*\
  !*** ./components/meetups/MeetupList.module.css ***!
  \**************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"list": "MeetupList_list__1iafn"
};


/***/ }),

/***/ "./components/ui/Card.module.css":
/*!***************************************!*\
  !*** ./components/ui/Card.module.css ***!
  \***************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"card": "Card_card__3KSLO"
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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRUEsUUFBMEMsSUFBR0EsZUFBc0MsR0FBRUEsaUVBQThDLEVBQWxNLENBQXJCO0FBQ0EsUUFBTVcsRUFBRSxHQUFHTCxNQUFNLENBQUNLLEVBQVAsRUFBWDtBQUNBLFFBQU1DLGdCQUFnQixHQUFHRCxFQUFFLENBQUNFLFVBQUgsQ0FBYyxTQUFkLENBQXpCO0FBQ0EsUUFBTW5CLE9BQU8sR0FBRyxNQUFNa0IsZ0JBQWdCLENBQUNFLElBQWpCLEdBQXdCQyxPQUF4QixFQUF0QjtBQUNBakMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlXLE9BQVo7QUFDQVksRUFBQUEsTUFBTSxDQUFDVSxLQUFQO0FBR0EsU0FBTztBQUNMckMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xlLE1BQUFBLE9BQU8sRUFBRUEsT0FBTyxDQUFDQyxHQUFSLENBQVlzQixDQUFDLEtBQUs7QUFDekI3QixRQUFBQSxLQUFLLEVBQUU2QixDQUFDLENBQUM3QixLQURnQjtBQUV6QkUsUUFBQUEsT0FBTyxFQUFFMkIsQ0FBQyxDQUFDM0IsT0FGYztBQUd6QkgsUUFBQUEsS0FBSyxFQUFFOEIsQ0FBQyxDQUFDOUIsS0FIZ0I7QUFJekJGLFFBQUFBLEVBQUUsRUFBRWdDLENBQUMsQ0FBQ0MsR0FBRixDQUFNQyxRQUFOO0FBSnFCLE9BQUwsQ0FBYjtBQURKLEtBREY7QUFTTEMsSUFBQUEsVUFBVSxFQUFFO0FBVFAsR0FBUDtBQVdELENBckJNO0FBd0JQLGlFQUFlakIsUUFBZjs7Ozs7Ozs7OztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSEE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cEl0ZW0uanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0LmpzIiwid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9jb21wb25lbnRzL3VpL0NhcmQuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwSXRlbS5tb2R1bGUuY3NzIiwid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdC5tb2R1bGUuY3NzIiwid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9jb21wb25lbnRzL3VpL0NhcmQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9uZXh0anMtY291cnNlL2V4dGVybmFsIFwibW9uZ29kYlwiIiwid2VicGFjazovL25leHRqcy1jb3Vyc2UvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL25leHRqcy1jb3Vyc2UvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VpL0NhcmQnO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9NZWV0dXBJdGVtLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5mdW5jdGlvbiBNZWV0dXBJdGVtKHByb3BzKSB7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICBjb25zdCBzaG93RGV0YWlsc0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyb3V0ZXIpXG4gICAgICByb3V0ZXIucHVzaChgLyR7cHJvcHMuaWR9YClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cbiAgICAgIDxDYXJkPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0+XG4gICAgICAgICAgPGltZyBzcmM9e3Byb3BzLmltYWdlfSBhbHQ9e3Byb3BzLnRpdGxlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgICAgPGgzPntwcm9wcy50aXRsZX08L2gzPlxuICAgICAgICAgIDxhZGRyZXNzPntwcm9wcy5hZGRyZXNzfTwvYWRkcmVzcz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2hvd0RldGFpbHNIYW5kbGVyfT5TaG93IERldGFpbHM8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NhcmQ+XG4gICAgPC9saT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVldHVwSXRlbTtcbiIsImltcG9ydCBNZWV0dXBJdGVtIGZyb20gJy4vTWVldHVwSXRlbSc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL01lZXR1cExpc3QubW9kdWxlLmNzcyc7XG5cbmZ1bmN0aW9uIE1lZXR1cExpc3QocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxuICAgICAge3Byb3BzLm1lZXR1cHMubWFwKChtZWV0dXApID0+IChcbiAgICAgICAgPE1lZXR1cEl0ZW1cbiAgICAgICAgICBrZXk9e21lZXR1cC5pZH1cbiAgICAgICAgICBpZD17bWVldHVwLmlkfVxuICAgICAgICAgIGltYWdlPXttZWV0dXAuaW1hZ2V9XG4gICAgICAgICAgdGl0bGU9e21lZXR1cC50aXRsZX1cbiAgICAgICAgICBhZGRyZXNzPXttZWV0dXAuYWRkcmVzc31cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lZXR1cExpc3Q7XG4iLCJpbXBvcnQgY2xhc3NlcyBmcm9tICcuL0NhcmQubW9kdWxlLmNzcyc7XG5cbmZ1bmN0aW9uIENhcmQocHJvcHMpIHtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCJcclxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiXHJcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xyXG5cclxuXHJcbmNvbnNvbGUubG9nKFwicHJvY2Vzcy5lbnYuTU9OR09fREJfVVNFUk5BTUVcIiwgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTU9OR09fREJfSE9TVClcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKHByb3BzKSA9PiB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TWVldHVwTGlzdCBtZWV0dXBzPXsgcHJvcHMubWVldHVwc30gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcblxyXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTU9OR09fREJfSE9TVH0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01PTkdPX0RCX1VTRVJOQU1FfToke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01PTkdPX0RCX1BBU1N9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NT05HT19EQl9IT1NUX0NMVVNURVJ9YClcclxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpXHJcbiAgY29uc3QgbWVldHVwQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKVxyXG4gIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KClcclxuICBjb25zb2xlLmxvZyhtZWV0dXBzKVxyXG4gIGNsaWVudC5jbG9zZSgpXHJcbiAgXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtZWV0dXBzOiBtZWV0dXBzLm1hcCh4ID0+ICh7XHJcbiAgICAgICAgdGl0bGU6IHgudGl0bGUsXHJcbiAgICAgICAgYWRkcmVzczogeC5hZGRyZXNzLFxyXG4gICAgICAgIGltYWdlOiB4LmltYWdlLFxyXG4gICAgICAgIGlkOiB4Ll9pZC50b1N0cmluZygpLFxyXG4gICAgICB9KSlcclxuICAgIH0sXHJcbiAgICByZXZhbGlkYXRlOiAzNjAwMCxcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaXRlbVwiOiBcIk1lZXR1cEl0ZW1faXRlbV9fM3NpTVVcIixcblx0XCJpbWFnZVwiOiBcIk1lZXR1cEl0ZW1faW1hZ2VfXzEzckFQXCIsXG5cdFwiY29udGVudFwiOiBcIk1lZXR1cEl0ZW1fY29udGVudF9fM3VFa1RcIixcblx0XCJhY3Rpb25zXCI6IFwiTWVldHVwSXRlbV9hY3Rpb25zX19MdlQ5QlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibGlzdFwiOiBcIk1lZXR1cExpc3RfbGlzdF9fMWlhZm5cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNhcmRcIjogXCJDYXJkX2NhcmRfXzNLU0xPXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb2RiXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiQ2FyZCIsImNsYXNzZXMiLCJ1c2VSb3V0ZXIiLCJNZWV0dXBJdGVtIiwicHJvcHMiLCJyb3V0ZXIiLCJzaG93RGV0YWlsc0hhbmRsZXIiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImlkIiwiaXRlbSIsImltYWdlIiwidGl0bGUiLCJjb250ZW50IiwiYWRkcmVzcyIsImFjdGlvbnMiLCJNZWV0dXBMaXN0IiwibGlzdCIsIm1lZXR1cHMiLCJtYXAiLCJtZWV0dXAiLCJjYXJkIiwiY2hpbGRyZW4iLCJNb25nb0NsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19NT05HT19EQl9IT1NUIiwiSG9tZVBhZ2UiLCJnZXRTdGF0aWNQcm9wcyIsImN0eCIsImNsaWVudCIsImNvbm5lY3QiLCJORVhUX1BVQkxJQ19NT05HT19EQl9VU0VSTkFNRSIsIk5FWFRfUFVCTElDX01PTkdPX0RCX1BBU1MiLCJORVhUX1BVQkxJQ19NT05HT19EQl9IT1NUX0NMVVNURVIiLCJkYiIsIm1lZXR1cENvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwiZmluZCIsInRvQXJyYXkiLCJjbG9zZSIsIngiLCJfaWQiLCJ0b1N0cmluZyIsInJldmFsaWRhdGUiXSwic291cmNlUm9vdCI6IiJ9