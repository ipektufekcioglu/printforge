module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/3d-models/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/3d-models/layout.tsx [app-rsc] (ecmascript)"));
}),
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
"[project]/app/3d-models/categories/[categoryName]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategoryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$categories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/categories.ts [app-rsc] (ecmascript)");
;
;
async function CategoryPage({ params }) {
    const { categoryName } = await params;
    const category = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$categories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCategoryBySlug"])(categoryName);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: category.displayName
    }, void 0, false, {
        fileName: "[project]/app/3d-models/categories/[categoryName]/page.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
}),
"[project]/app/3d-models/categories/[categoryName]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/3d-models/categories/[categoryName]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0c6d669d._.js.map