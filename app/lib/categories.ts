import type {Category} from "@/app/types"
import Categories from "@/app/data/categories.json"

export function getAllCategories(): Category[] {
    return Categories
}

export function getCategoryBySlug(slug: string) {
    const category = Categories.find(c => c.slug === slug)
    if (!category) {
        throw new Error(`Category with slug ${slug} not found`)
    }
    return category
}

export function getDisplayNameFromSlug(slug: string) {
    const model = getCategoryBySlug(slug)
    return model.displayName
}