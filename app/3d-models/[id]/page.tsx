import {getModelById} from "@/app/lib/models"
import Image from "next/image"
import HeroImg from "@/public/hero-image.png"
import HeartIcon from "@/public/heart-icon.png"
import type { ModelDetailPageProps } from "@/app/types/index"

export default async function ModelDetailPage({ params }: ModelDetailPageProps) {
    const {id} = await params
    const model = await getModelById(id)
    const date = new Date(model.dateAdded)
    return (
            <div className="flex flex-col text-almost-black justify-center items-center md:h-screen md:flex-row md:gap-4">
                <Image className="w-4/5 md:w-2/5" src={HeroImg} alt="model image"/>
                <div className="flex flex-col p-4 gap-4">
                    <div className="flex gap-1">
                        <Image src={HeartIcon} alt="heart icon"/>
                        <p className="text-gray">{model.likes}</p>
                    </div>
                    <h1 className="font-montserrat text-2xl font-bold" key={model.id}>{model.name}</h1>
                    <div className="flex gap-2">
                        <p className="border border-mid-gray rounded-3xl px-3 py-2 font-albert w-fit">{model.category}</p>
                        <p className="border border-mid-gray rounded-3xl px-3 py-2 font-albert w-fit">Upgrade</p>
                    </div>
                    <p className="font-albert text-xl">{model.description}</p>
                    <p className="font-albert">Added on {date.toLocaleDateString("en-US")}</p>
                </div>
            </div> 
    )
}