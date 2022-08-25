/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_dist_server_web_spec_extension_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dist/server/web/spec-extension/cookies */ \"./node_modules/next/dist/server/web/spec-extension/cookies.js\");\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { 0: login , 1: setLogin  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const { 0: balance , 1: setBalance  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const { 0: token , 1: setToken  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    // Redirection Completed\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const redirect = getCookie(\"redirect\");\n        setTimeout(()=>{\n            if (redirect === \"\" || redirect === \"true\") {\n                if (router.pathname === \"/intro\" || router.pathname === \"/intro/question\" || router.pathname === \"/intro/start\") {} else {\n                    // timer for 2 second\n                    router.push(\"/intro\");\n                }\n            } else {\n                setTokenBalnce(); // It is Function not A Variable\n            }\n        }, 500);\n        async function setTokenBalnce() {\n            const isTokenSet = getCookie(\"token\");\n            if (isTokenSet || isTokenSet.length >= 5) {\n                setLogin(true);\n                const isBalanceSet = getCookie(\"balance\");\n                if (isBalanceSet) {\n                    setBalance(isBalanceSet);\n                }\n            } else {\n                setLogin(false);\n                const isBalanceSet1 = getCookie(\"balance\");\n                if (isBalanceSet1) {\n                    setBalance(isBalanceSet1);\n                }\n            }\n        }\n    }, [\n        router\n    ]);\n    function getCookie(cname) {\n        let name = cname + \"=\";\n        let decodedCookie = decodeURIComponent(document.cookie);\n        let ca = decodedCookie.split(\";\");\n        for(let i = 0; i < ca.length; i++){\n            let c = ca[i];\n            while(c.charAt(0) == \" \"){\n                c = c.substring(1);\n            }\n            if (c.indexOf(name) == 0) {\n                return c.substring(name.length, c.length);\n            }\n        }\n        return \"\";\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps,\n        isLogin: login,\n        currentBalance: balance\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\SDWORLLD\\\\Documents\\\\Project\\\\Node JS\\\\quiz app\\\\quiz-app\\\\pages\\\\_app.js\",\n        lineNumber: 70,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7YUFDM0M7U0FDRjtRQUNELE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFFRCxxQkFBTyw4REFBQ2hCLFNBQVM7UUFBRSxHQUFHQyxTQUFTO1FBQUU4QixPQUFPLEVBQUU1QixLQUFLO1FBQUU2QixjQUFjLEVBQUUzQixPQUFPOzs7OztZQUFJLENBQUM7Q0FDOUU7QUFFRCxpRUFBZU4sS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXVpei1hcHAvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRva2VuRXhwaXJlZEVycm9yIH0gZnJvbSBcImpzb253ZWJ0b2tlblwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQ29va2llcyB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3dlYi9zcGVjLWV4dGVuc2lvbi9jb29raWVzXCI7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgW2xvZ2luLCBzZXRMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgLy8gUmVkaXJlY3Rpb24gQ29tcGxldGVkXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHJlZGlyZWN0ID0gZ2V0Q29va2llKFwicmVkaXJlY3RcIik7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmIChyZWRpcmVjdCA9PT0gXCJcIiB8fCByZWRpcmVjdCA9PT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2ludHJvXCIgfHxcclxuICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gXCIvaW50cm8vcXVlc3Rpb25cIiB8fFxyXG4gICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSBcIi9pbnRyby9zdGFydFwiXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIHRpbWVyIGZvciAyIHNlY29uZFxyXG4gICAgICAgICAgcm91dGVyLnB1c2goXCIvaW50cm9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldFRva2VuQmFsbmNlKCk7IC8vIEl0IGlzIEZ1bmN0aW9uIG5vdCBBIFZhcmlhYmxlXHJcbiAgICAgIH1cclxuICAgIH0sIDUwMCk7XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gc2V0VG9rZW5CYWxuY2UoKSB7XHJcbiAgICAgIGNvbnN0IGlzVG9rZW5TZXQgPSBnZXRDb29raWUoXCJ0b2tlblwiKTtcclxuXHJcbiAgICAgIGlmIChpc1Rva2VuU2V0IHx8IGlzVG9rZW5TZXQubGVuZ3RoID49IDUpIHtcclxuICAgICAgICBzZXRMb2dpbih0cnVlKTtcclxuICAgICAgICBjb25zdCBpc0JhbGFuY2VTZXQgPSBnZXRDb29raWUoXCJiYWxhbmNlXCIpO1xyXG4gICAgICAgIGlmIChpc0JhbGFuY2VTZXQpIHtcclxuICAgICAgICAgIHNldEJhbGFuY2UoaXNCYWxhbmNlU2V0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0TG9naW4oZmFsc2UpO1xyXG4gICAgICAgIGNvbnN0IGlzQmFsYW5jZVNldCA9IGdldENvb2tpZShcImJhbGFuY2VcIik7XHJcbiAgICAgICAgaWYgKGlzQmFsYW5jZVNldCkge1xyXG4gICAgICAgICAgc2V0QmFsYW5jZShpc0JhbGFuY2VTZXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXJdKTtcclxuXHJcbiAgZnVuY3Rpb24gZ2V0Q29va2llKGNuYW1lKSB7XHJcbiAgICBsZXQgbmFtZSA9IGNuYW1lICsgXCI9XCI7XHJcbiAgICBsZXQgZGVjb2RlZENvb2tpZSA9IGRlY29kZVVSSUNvbXBvbmVudChkb2N1bWVudC5jb29raWUpO1xyXG4gICAgbGV0IGNhID0gZGVjb2RlZENvb2tpZS5zcGxpdChcIjtcIik7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBjID0gY2FbaV07XHJcbiAgICAgIHdoaWxlIChjLmNoYXJBdCgwKSA9PSBcIiBcIikge1xyXG4gICAgICAgIGMgPSBjLnN1YnN0cmluZygxKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYy5pbmRleE9mKG5hbWUpID09IDApIHtcclxuICAgICAgICByZXR1cm4gYy5zdWJzdHJpbmcobmFtZS5sZW5ndGgsIGMubGVuZ3RoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSBpc0xvZ2luPXtsb2dpbn0gY3VycmVudEJhbGFuY2U9e2JhbGFuY2V9IC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVG9rZW5FeHBpcmVkRXJyb3IiLCJ1c2VSb3V0ZXIiLCJDb29raWVzIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJsb2dpbiIsInNldExvZ2luIiwiYmFsYW5jZSIsInNldEJhbGFuY2UiLCJ0b2tlbiIsInNldFRva2VuIiwicmVkaXJlY3QiLCJnZXRDb29raWUiLCJzZXRUaW1lb3V0IiwicGF0aG5hbWUiLCJwdXNoIiwic2V0VG9rZW5CYWxuY2UiLCJpc1Rva2VuU2V0IiwibGVuZ3RoIiwiaXNCYWxhbmNlU2V0IiwiY25hbWUiLCJuYW1lIiwiZGVjb2RlZENvb2tpZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImRvY3VtZW50IiwiY29va2llIiwiY2EiLCJzcGxpdCIsImkiLCJjIiwiY2hhckF0Iiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsImlzTG9naW4iLCJjdXJyZW50QmFsYW5jZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/next/dist/server/web/spec-extension/cookies.js":
/*!*********************************************************************!*\
  !*** ./node_modules/next/dist/server/web/spec-extension/cookies.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"CookieSerializeOptions\", ({\n    enumerable: true,\n    get: function() {\n        return _types.CookieSerializeOptions;\n    }\n}));\nvar _cookie = _interopRequireDefault(__webpack_require__(/*! next/dist/compiled/cookie */ \"next/dist/compiled/cookie\"));\nvar _types = __webpack_require__(/*! ../types */ \"../types\");\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nconst normalizeCookieOptions = (options)=>{\n    options = Object.assign({}, options);\n    if (options.maxAge) {\n        options.expires = new Date(Date.now() + options.maxAge * 1000);\n    }\n    if (options.path == null) {\n        options.path = \"/\";\n    }\n    return options;\n};\nconst serializeValue = (value)=>typeof value === \"object\" ? `j:${JSON.stringify(value)}` : String(value);\nconst serializeExpiredCookie = (key, options = {})=>_cookie.default.serialize(key, \"\", {\n        expires: new Date(0),\n        path: \"/\",\n        ...options\n    });\nconst deserializeCookie = (input)=>{\n    const value = input.headers.get(\"set-cookie\");\n    return value !== undefined && value !== null ? value.split(\", \") : [];\n};\nconst serializeCookie = (input)=>input.join(\", \");\nclass Cookies extends Map {\n    constructor(input){\n        const parsedInput = typeof input === \"string\" ? _cookie.default.parse(input) : {};\n        super(Object.entries(parsedInput));\n    }\n    set(key, value, options = {}) {\n        return super.set(key, _cookie.default.serialize(key, serializeValue(value), normalizeCookieOptions(options)));\n    }\n}\nexports.Cookies = Cookies;\nclass NextCookies extends Cookies {\n    constructor(response){\n        super(response.headers.get(\"cookie\"));\n        this.response = response;\n    }\n    get = (...args)=>{\n        return this.getWithOptions(...args).value;\n    };\n    getWithOptions = (...args)=>{\n        const raw = super.get(...args);\n        if (typeof raw !== \"string\") return {\n            value: raw,\n            options: {}\n        };\n        const { [args[0]]: value , ...options } = _cookie.default.parse(raw);\n        return {\n            value,\n            options\n        };\n    };\n    set = (...args)=>{\n        const isAlreadyAdded = super.has(args[0]);\n        super.set(...args);\n        const currentCookie = super.get(args[0]);\n        if (typeof currentCookie !== \"string\") {\n            throw new Error(`Invariant: failed to generate cookie for ${JSON.stringify(args)}`);\n        }\n        if (isAlreadyAdded) {\n            const setCookie = serializeCookie(deserializeCookie(this.response).filter((value)=>!value.startsWith(`${args[0]}=`)));\n            if (setCookie) {\n                this.response.headers.set(\"set-cookie\", [\n                    currentCookie,\n                    setCookie\n                ].join(\", \"));\n            } else {\n                this.response.headers.set(\"set-cookie\", currentCookie);\n            }\n        } else {\n            this.response.headers.append(\"set-cookie\", currentCookie);\n        }\n        return this;\n    };\n    delete = (key, options = {})=>{\n        const isDeleted = super.delete(key);\n        if (isDeleted) {\n            const setCookie = serializeCookie(deserializeCookie(this.response).filter((value)=>!value.startsWith(`${key}=`)));\n            const expiredCookie = serializeExpiredCookie(key, options);\n            this.response.headers.set(\"set-cookie\", [\n                expiredCookie,\n                setCookie\n            ].join(\", \"));\n        }\n        return isDeleted;\n    };\n    clear = (options = {})=>{\n        const expiredCookies = Array.from(super.keys()).map((key)=>serializeExpiredCookie(key, options)).join(\", \");\n        if (expiredCookies) this.response.headers.set(\"set-cookie\", expiredCookies);\n        return super.clear();\n    };\n}\nexports.NextCookies = NextCookies;\n\n//# sourceMappingURL=cookies.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NlcnZlci93ZWIvc3BlYy1leHRlbnNpb24vY29va2llcy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLDBEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGLHFDQUFxQyxtQkFBTyxDQUFDLDREQUEyQjtBQUN4RSxhQUFhLG1CQUFPLENBQUMsMEJBQVU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsc0JBQXNCO0FBQ3ZGLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsZ0NBQWdDO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFLHFCQUFxQjtBQUM3RjtBQUNBO0FBQ0Esb0hBQW9ILFFBQVE7QUFDNUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSxvSEFBb0gsSUFBSTtBQUN4SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7O0FBRW5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXVpei1hcHAvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NlcnZlci93ZWIvc3BlYy1leHRlbnNpb24vY29va2llcy5qcz8xNDI0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQ29va2llU2VyaWFsaXplT3B0aW9uc1wiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3R5cGVzLkNvb2tpZVNlcmlhbGl6ZU9wdGlvbnM7XG4gICAgfVxufSk7XG52YXIgX2Nvb2tpZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIm5leHQvZGlzdC9jb21waWxlZC9jb29raWVcIikpO1xudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi90eXBlc1wiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IG5vcm1hbGl6ZUNvb2tpZU9wdGlvbnMgPSAob3B0aW9ucyk9PntcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyk7XG4gICAgaWYgKG9wdGlvbnMubWF4QWdlKSB7XG4gICAgICAgIG9wdGlvbnMuZXhwaXJlcyA9IG5ldyBEYXRlKERhdGUubm93KCkgKyBvcHRpb25zLm1heEFnZSAqIDEwMDApO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5wYXRoID09IG51bGwpIHtcbiAgICAgICAgb3B0aW9ucy5wYXRoID0gXCIvXCI7XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zO1xufTtcbmNvbnN0IHNlcmlhbGl6ZVZhbHVlID0gKHZhbHVlKT0+dHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiID8gYGo6JHtKU09OLnN0cmluZ2lmeSh2YWx1ZSl9YCA6IFN0cmluZyh2YWx1ZSk7XG5jb25zdCBzZXJpYWxpemVFeHBpcmVkQ29va2llID0gKGtleSwgb3B0aW9ucyA9IHt9KT0+X2Nvb2tpZS5kZWZhdWx0LnNlcmlhbGl6ZShrZXksIFwiXCIsIHtcbiAgICAgICAgZXhwaXJlczogbmV3IERhdGUoMCksXG4gICAgICAgIHBhdGg6IFwiL1wiLFxuICAgICAgICAuLi5vcHRpb25zXG4gICAgfSk7XG5jb25zdCBkZXNlcmlhbGl6ZUNvb2tpZSA9IChpbnB1dCk9PntcbiAgICBjb25zdCB2YWx1ZSA9IGlucHV0LmhlYWRlcnMuZ2V0KFwic2V0LWNvb2tpZVwiKTtcbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCA/IHZhbHVlLnNwbGl0KFwiLCBcIikgOiBbXTtcbn07XG5jb25zdCBzZXJpYWxpemVDb29raWUgPSAoaW5wdXQpPT5pbnB1dC5qb2luKFwiLCBcIik7XG5jbGFzcyBDb29raWVzIGV4dGVuZHMgTWFwIHtcbiAgICBjb25zdHJ1Y3RvcihpbnB1dCl7XG4gICAgICAgIGNvbnN0IHBhcnNlZElucHV0ID0gdHlwZW9mIGlucHV0ID09PSBcInN0cmluZ1wiID8gX2Nvb2tpZS5kZWZhdWx0LnBhcnNlKGlucHV0KSA6IHt9O1xuICAgICAgICBzdXBlcihPYmplY3QuZW50cmllcyhwYXJzZWRJbnB1dCkpO1xuICAgIH1cbiAgICBzZXQoa2V5LCB2YWx1ZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiBzdXBlci5zZXQoa2V5LCBfY29va2llLmRlZmF1bHQuc2VyaWFsaXplKGtleSwgc2VyaWFsaXplVmFsdWUodmFsdWUpLCBub3JtYWxpemVDb29raWVPcHRpb25zKG9wdGlvbnMpKSk7XG4gICAgfVxufVxuZXhwb3J0cy5Db29raWVzID0gQ29va2llcztcbmNsYXNzIE5leHRDb29raWVzIGV4dGVuZHMgQ29va2llcyB7XG4gICAgY29uc3RydWN0b3IocmVzcG9uc2Upe1xuICAgICAgICBzdXBlcihyZXNwb25zZS5oZWFkZXJzLmdldChcImNvb2tpZVwiKSk7XG4gICAgICAgIHRoaXMucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICB9XG4gICAgZ2V0ID0gKC4uLmFyZ3MpPT57XG4gICAgICAgIHJldHVybiB0aGlzLmdldFdpdGhPcHRpb25zKC4uLmFyZ3MpLnZhbHVlO1xuICAgIH07XG4gICAgZ2V0V2l0aE9wdGlvbnMgPSAoLi4uYXJncyk9PntcbiAgICAgICAgY29uc3QgcmF3ID0gc3VwZXIuZ2V0KC4uLmFyZ3MpO1xuICAgICAgICBpZiAodHlwZW9mIHJhdyAhPT0gXCJzdHJpbmdcIikgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByYXcsXG4gICAgICAgICAgICBvcHRpb25zOiB7fVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB7IFthcmdzWzBdXTogdmFsdWUgLCAuLi5vcHRpb25zIH0gPSBfY29va2llLmRlZmF1bHQucGFyc2UocmF3KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICB9O1xuICAgIH07XG4gICAgc2V0ID0gKC4uLmFyZ3MpPT57XG4gICAgICAgIGNvbnN0IGlzQWxyZWFkeUFkZGVkID0gc3VwZXIuaGFzKGFyZ3NbMF0pO1xuICAgICAgICBzdXBlci5zZXQoLi4uYXJncyk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb29raWUgPSBzdXBlci5nZXQoYXJnc1swXSk7XG4gICAgICAgIGlmICh0eXBlb2YgY3VycmVudENvb2tpZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhcmlhbnQ6IGZhaWxlZCB0byBnZW5lcmF0ZSBjb29raWUgZm9yICR7SlNPTi5zdHJpbmdpZnkoYXJncyl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQWxyZWFkeUFkZGVkKSB7XG4gICAgICAgICAgICBjb25zdCBzZXRDb29raWUgPSBzZXJpYWxpemVDb29raWUoZGVzZXJpYWxpemVDb29raWUodGhpcy5yZXNwb25zZSkuZmlsdGVyKCh2YWx1ZSk9PiF2YWx1ZS5zdGFydHNXaXRoKGAke2FyZ3NbMF19PWApKSk7XG4gICAgICAgICAgICBpZiAoc2V0Q29va2llKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZS5oZWFkZXJzLnNldChcInNldC1jb29raWVcIiwgW1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q29va2llLFxuICAgICAgICAgICAgICAgICAgICBzZXRDb29raWVcbiAgICAgICAgICAgICAgICBdLmpvaW4oXCIsIFwiKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2UuaGVhZGVycy5zZXQoXCJzZXQtY29va2llXCIsIGN1cnJlbnRDb29raWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZXNwb25zZS5oZWFkZXJzLmFwcGVuZChcInNldC1jb29raWVcIiwgY3VycmVudENvb2tpZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBkZWxldGUgPSAoa2V5LCBvcHRpb25zID0ge30pPT57XG4gICAgICAgIGNvbnN0IGlzRGVsZXRlZCA9IHN1cGVyLmRlbGV0ZShrZXkpO1xuICAgICAgICBpZiAoaXNEZWxldGVkKSB7XG4gICAgICAgICAgICBjb25zdCBzZXRDb29raWUgPSBzZXJpYWxpemVDb29raWUoZGVzZXJpYWxpemVDb29raWUodGhpcy5yZXNwb25zZSkuZmlsdGVyKCh2YWx1ZSk9PiF2YWx1ZS5zdGFydHNXaXRoKGAke2tleX09YCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGV4cGlyZWRDb29raWUgPSBzZXJpYWxpemVFeHBpcmVkQ29va2llKGtleSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB0aGlzLnJlc3BvbnNlLmhlYWRlcnMuc2V0KFwic2V0LWNvb2tpZVwiLCBbXG4gICAgICAgICAgICAgICAgZXhwaXJlZENvb2tpZSxcbiAgICAgICAgICAgICAgICBzZXRDb29raWVcbiAgICAgICAgICAgIF0uam9pbihcIiwgXCIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNEZWxldGVkO1xuICAgIH07XG4gICAgY2xlYXIgPSAob3B0aW9ucyA9IHt9KT0+e1xuICAgICAgICBjb25zdCBleHBpcmVkQ29va2llcyA9IEFycmF5LmZyb20oc3VwZXIua2V5cygpKS5tYXAoKGtleSk9PnNlcmlhbGl6ZUV4cGlyZWRDb29raWUoa2V5LCBvcHRpb25zKSkuam9pbihcIiwgXCIpO1xuICAgICAgICBpZiAoZXhwaXJlZENvb2tpZXMpIHRoaXMucmVzcG9uc2UuaGVhZGVycy5zZXQoXCJzZXQtY29va2llXCIsIGV4cGlyZWRDb29raWVzKTtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmNsZWFyKCk7XG4gICAgfTtcbn1cbmV4cG9ydHMuTmV4dENvb2tpZXMgPSBOZXh0Q29va2llcztcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29va2llcy5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/server/web/spec-extension/cookies.js\n");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("jsonwebtoken");

/***/ }),

/***/ "next/dist/compiled/cookie":
/*!********************************************!*\
  !*** external "next/dist/compiled/cookie" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ "../types":
/*!************************************************!*\
  !*** external "next/dist/server/web/types.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/web/types.js");

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
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();