import { getAllModels } from "@/app/lib/models"
import ModelGrid from "../components/ModelGrid"


export default async function ModelsPage() {
    const models = await getAllModels()
    return <ModelGrid title="3D Models" models={models}/>

}