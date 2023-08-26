"use strict";
(() => {
var exports = {};
exports.id = 32;
exports.ids = [32,888,660];
exports.modules = {

/***/ 2184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2Finitial_props_preferredRegion_absolutePagePath_private_next_pages_2Finitial_props_tsx_absoluteAppPath_next_2Fdist_2Fpages_2F_app_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderkind_PAGES_page_2Finitial_props_preferredRegion_absolutePagePath_private_next_pages_2Finitial_props_tsx_absoluteAppPath_next_2Fdist_2Fpages_2F_app_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/initial-props.tsx
var initial_props_namespaceObject = {};
__webpack_require__.r(initial_props_namespaceObject);
__webpack_require__.d(initial_props_namespaceObject, {
  "default": () => (initial_props),
  getStaticProps: () => (getStaticProps)
});

// EXTERNAL MODULE: ../node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(6415);
// EXTERNAL MODULE: ../node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(2603);
// EXTERNAL MODULE: ../node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(158);
// EXTERNAL MODULE: ../node_modules/next/dist/pages/_document.js
var _document = __webpack_require__(2051);
var _document_default = /*#__PURE__*/__webpack_require__.n(_document);
// EXTERNAL MODULE: ../node_modules/next/dist/pages/_app.js
var _app = __webpack_require__(2547);
var _app_default = /*#__PURE__*/__webpack_require__.n(_app);
// EXTERNAL MODULE: ../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4246);
// EXTERNAL MODULE: ../node_modules/next/link.js
var next_link = __webpack_require__(9894);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: ./components/Layout.tsx
var Layout = __webpack_require__(6105);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/ListItem.tsx



const ListItem = ({ data })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
        href: "/detail/[id]",
        as: `/detail/${data.id}`,
        children: [
            data.id,
            ":",
            data.name
        ]
    });
/* harmony default export */ const components_ListItem = (ListItem);

;// CONCATENATED MODULE: ./components/List.tsx



const List = ({ items })=>/*#__PURE__*/ jsx_runtime.jsx("ul", {
        children: items.map((item)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime.jsx(components_ListItem, {
                    data: item
                })
            }, item.id))
    });
/* harmony default export */ const components_List = (List);

// EXTERNAL MODULE: ./utils/sample-api.ts
var sample_api = __webpack_require__(6193);
;// CONCATENATED MODULE: ./pages/initial-props.tsx






const WithInitialProps = ({ items })=>{
    const router = (0,router_namespaceObject.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Layout/* default */.Z, {
        title: "List Example (as Function Component) | Next.js + TypeScript + Electron Example",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                children: "List Example (as Function Component)"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                children: [
                    "You are currently on: ",
                    router.pathname
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(components_List, {
                items: items
            }),
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                    href: "/",
                    children: "Go home"
                })
            })
        ]
    });
};
async function getStaticProps() {
    const items = await (0,sample_api/* findAll */.Oq)();
    return {
        props: {
            items
        }
    };
}
/* harmony default export */ const initial_props = (WithInitialProps);

;// CONCATENATED MODULE: ../node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Finitial-props&preferredRegion=&absolutePagePath=private-next-pages%2Finitial-props.tsx&absoluteAppPath=next%2Fdist%2Fpages%2F_app&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2Finitial_props_preferredRegion_absolutePagePath_private_next_pages_2Finitial_props_tsx_absoluteAppPath_next_2Fdist_2Fpages_2F_app_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(initial_props_namespaceObject, "default"));
// Re-export methods.
const next_route_loaderkind_PAGES_page_2Finitial_props_preferredRegion_absolutePagePath_private_next_pages_2Finitial_props_tsx_absoluteAppPath_next_2Fdist_2Fpages_2F_app_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_getStaticProps = (0,helpers/* hoist */.l)(initial_props_namespaceObject, "getStaticProps");
const getStaticPaths = (0,helpers/* hoist */.l)(initial_props_namespaceObject, "getStaticPaths");
const getServerSideProps = (0,helpers/* hoist */.l)(initial_props_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(initial_props_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(initial_props_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(initial_props_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(initial_props_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(initial_props_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(initial_props_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(initial_props_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/initial-props",
        pathname: "/initial-props",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: (_app_default()),
        Document: (_document_default())
    },
    userland: initial_props_namespaceObject
});

//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 6193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Is: () => (/* binding */ findData),
/* harmony export */   Oq: () => (/* binding */ findAll)
/* harmony export */ });
/* unused harmony export dataArray */
/** Dummy user data. */ const dataArray = [
    {
        id: 101,
        name: "Alice"
    },
    {
        id: 102,
        name: "Bob"
    },
    {
        id: 103,
        name: "Caroline"
    },
    {
        id: 104,
        name: "Dave"
    }
];
/**
 * Calls a mock API which finds a user by ID from the list above.
 *
 * Throws an error if not found.
 */ async function findData(id) {
    const selected = dataArray.find((data)=>data.id === Number(id));
    if (!selected) {
        throw new Error("Cannot find user");
    }
    return selected;
}
/** Calls a mock API which returns the above array to simulate "get all". */ async function findAll() {
    // Throw an error, just for example.
    if (!Array.isArray(dataArray)) {
        throw new Error("Cannot find users");
    }
    return dataArray;
}


/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [51,547,245,349,105], () => (__webpack_exec__(2184)));
module.exports = __webpack_exports__;

})();