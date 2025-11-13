module.exports = [
"[project]/app/data/categories.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"displayName":"3D Printer","slug":"3d-printer"},{"displayName":"Art","slug":"art"},{"displayName":"Education","slug":"education"},{"displayName":"Fashion","slug":"fashion"},{"displayName":"Hobby & DIY","slug":"hobby-diy"},{"displayName":"Household","slug":"household"},{"displayName":"Miniatures","slug":"miniatures"},{"displayName":"Props & Cosplay","slug":"props-cosplay"},{"displayName":"Tools","slug":"tools"},{"displayName":"Toys & Games","slug":"toys-games"}]);}),
"[project]/app/lib/categories.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllCategories",
    ()=>getAllCategories,
    "getCategoryBySlug",
    ()=>getCategoryBySlug,
    "getDisplayNameFromSlug",
    ()=>getDisplayNameFromSlug
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$categories$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/app/data/categories.json (json)");
;
function getAllCategories() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$categories$2e$json__$28$json$29$__["default"];
}
function getCategoryBySlug(slug) {
    const category = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$categories$2e$json__$28$json$29$__["default"].find((c)=>c.slug === slug);
    if (!category) {
        throw new Error(`Category with slug ${slug} not found`);
    }
    return category;
}
function getDisplayNameFromSlug(slug) {
    const model = getCategoryBySlug(slug);
    return model.displayName;
}
}),
"[project]/app/3d-models/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ModelsLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$categories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/categories.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavLink$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/NavLink.tsx [app-rsc] (ecmascript)");
;
;
;
function ModelsLayout({ children }) {
    const allCategories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$categories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllCategories"])();
    const categoryElements = allCategories.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavLink$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            href: `/3d-models/categories/${c.slug}`,
            children: c.displayName
        }, c.slug, false, {
            fileName: "[project]/app/3d-models/layout.tsx",
            lineNumber: 8,
            columnNumber: 62
        }, this));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex flex-col md:flex-row md:gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "sticky top-0 z-10 w-full bg-white border-b border-gray-200 md:fixed md:w-64 md:top-1/2 md:-translate-y-1/2 md:border-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "w-full overflow-x-auto md:overflow-visible scrollbar-hide md:px-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "flex px-4 py-3 space-x-4 whitespace-nowrap md:flex-col md:p-0 md:space-x-0 md:space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavLink$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/3d-models`,
                                        children: "All"
                                    }, "all", false, {
                                        fileName: "[project]/app/3d-models/layout.tsx",
                                        lineNumber: 15,
                                        columnNumber: 25
                                    }, this),
                                    categoryElements
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/3d-models/layout.tsx",
                                lineNumber: 14,
                                columnNumber: 21
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/3d-models/layout.tsx",
                            lineNumber: 13,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 right-0 w-12 h-full pointer-events-none bg-gradient-to-l from-white to-transparent md:hidden"
                        }, void 0, false, {
                            fileName: "[project]/app/3d-models/layout.tsx",
                            lineNumber: 19,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/3d-models/layout.tsx",
                    lineNumber: 12,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/3d-models/layout.tsx",
                lineNumber: 11,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 p-4 md:ml-64",
                children: children
            }, void 0, false, {
                fileName: "[project]/app/3d-models/layout.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/3d-models/layout.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_c35405c1._.js.map