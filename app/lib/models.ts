import modelsData from "@/app/data/models.json"
import type {  GetModelsParams, Model } from "../types"

export async function getModels({category} : GetModelsParams = {}) {
    let filteredModels = [...modelsData]
    if (category) {
        filteredModels = filteredModels.filter(model => model.category === category)
    }
    return filteredModels
}


export async function getModelById(id: string | number): Promise<Model> {
    const foundModel = modelsData.find((model) => model.id.toString() === id.toString())
    if (!foundModel) {
        throw new Error(`Model with id ${id} not found`)
    }
    return foundModel
}