"use client"

import { usePathname } from "next/navigation"
import { getAllCategories } from "@/app/lib/categories"
import type { Category } from "@/app/types/index"
import NavLink from "../components/NavLink"

export default function CategoriesNav() {
    const path = usePathname()
    const allCategories = getAllCategories()
    const categoryElements = allCategories.map((c:Category) => <NavLink key={c.slug} href={`/3d-models/categories/${c.slug}`} isActive={path === `/3d-models/categories/${c.slug}`}>{c.displayName}</NavLink>)
    return (
        <aside className="sticky top-0 z-10 w-full bg-white border-b border-gray-200 md:fixed md:w-64 md:top-1/2 md:-translate-y-1/2 md:border-none">
            <div className="relative">
                <nav className="w-full overflow-x-auto md:overflow-visible scrollbar-hide md:px-6">
                    <ul className="flex px-4 py-3 space-x-4 whitespace-nowrap md:flex-col md:p-0 md:space-x-0 md:space-y-3">
                        <NavLink key="all" href={`/3d-models`} isActive={path === `/3d-models`}>All</NavLink>
                        {categoryElements}
                    </ul>
                </nav>
                <div className="absolute top-0 right-0 w-12 h-full pointer-events-none bg-gradient-to-l from-white to-transparent md:hidden" />
            </div>  
        </aside>
    )
}