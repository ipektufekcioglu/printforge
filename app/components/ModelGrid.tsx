
import type { Model } from "@/app/types/index"
import type { ModelGridProps } from "@/app/types/index"
import ModelCard from "@/app/components/ModelCard"

export default function ModelGrid({title, models}: ModelGridProps) {
    const modelNames = models.map((model: Model) => <ModelCard model={model}/>)

    return (
            <div className="container px-4 py-8 mx-auto">
                <h1 className="hidden font-montserrat font-bold text-almost-black text-3xl mb-8 md:block">{title}</h1>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                    {modelNames}
                </div>
            </div>
    )
}