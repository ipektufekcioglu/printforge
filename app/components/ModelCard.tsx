import type { ModelCardProps } from "@/app/types/index"
import HeroImg from "@/public/hero-image.png"
import HeartIcon from "@/public/heart-icon.png"
import Link from "next/link"
import Image from "next/image"

export default function ModelCard({model}: ModelCardProps) {
    return (
        <Link href={`3d-models/${model.id}`}>
            <div className="flex flex-col text-almost-black md:h-full hover:shadow-lg hover:cursor-pointer hover:shadow-[0_5px_12px_rgba(0,0,0,0.1)] hover:-translate-y-[3px] transition-all">
                <Image className="rounded-t-xl" src={HeroImg} alt="model image"/>
                <div className="flex flex-col border rounded-b-xl border-mid-gray p-4 gap-4 h-full md:justify-between">
                    <h1 className="font-montserrat text-2xl font-bold" key={model.id}>{model.name}</h1>
                    <p className="font-albert text-xl">{model.description}</p>
                    <div className="flex flex-col gap-4">
                        <p className="border border-mid-gray rounded-3xl px-3 py-2 font-albert w-fit">{model.category}</p>
                        <div className="flex gap-1">
                            <Image src={HeartIcon} alt="heart icon"/>
                            <p className="text-gray">{model.likes}</p>
                        </div>
                    </div>
                </div>
            </div> 
        </Link>
    )
}