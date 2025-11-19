import { getModels } from "@/app/lib/models"
import ModelGrid from "../components/ModelGrid"
import { ModelsPageProps } from "../types"
import Form from "next/form"


export default async function ModelsPage({searchParams}: ModelsPageProps) {
    const models = await getModels()
    const { query } = await searchParams
    const filteredModels = query 
                            ? models.filter((m) => m.name.toLowerCase().includes(query.toLowerCase()) || m.description.toLowerCase().includes(query.toLowerCase()))
                            : models
    return (
            <>
                <Form action="/3d-models" className="w-full md:px-0 md:max-w-x">
                    <input name="query" placeholder="Search for a model" defaultValue={query ? query : ""}
                    className="border border-gray rounded-[20] text-sm py-3 pl-5 pr-5 md:text-base"/>
                </Form>
                <ModelGrid title="3D Models" models={filteredModels}/>
            </>
    )

}