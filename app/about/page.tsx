import Image from "next/image"
import HeroImage from "@/public/hero-image.png"
import StackImage from "@/public/stack.png"
import GlobeImage from "@/public/globe.png"
import FlagImage from "@/public/flag.png"

export default function AboutPage() {
    return (
        <main className="px-6 py-4 flex flex-col text-almost-black gap-6 lg:pb-12">
            <section className="section-top flex flex-col gap-4 lg:flex-row lg:gap-24 lg:justify-center lg:mt-8">
                <Image className="lg:w-1/3" alt="Printforge Hero Image" src={HeroImage}/>
                <div className="flex flex-col gap-4 lg:w-1/3">
                    <p className="font-albert font-medium text-sm uppercase">About printforge</p>
                    <h1 className="font-montserrat font-bold text-fourty/12">Empowering makers worldwide</h1>
                    <p className="font-albert text-2xl">Founded in 2023, PrintForge has quickly become the go-to platform for 3D printing enthusiasts, makers, and professional designers to share and discover amazing STL files for 3D printing.</p>
                    <p className="font-albert text-2xl">Our mission is to foster a vibrant community where creativity meets technology, enabling anyone to bring their ideas to life through 3D printing.</p>
                </div>
            </section>
            <section className="border-y border-light-gray py-8 flex flex-col gap-12 lg:flex-row lg:px-28">
                    <div className="flex flex-col gap-2 lg:border-r">
                        <div className="flex gap-2 items-center">
                            <Image alt="stack image" src={StackImage}/>
                            <h2 className="font-montserrat font-bold text-2xl">100K+ Models</h2>
                        </div>
                            <p className="font-albert text-xl">Access our vast library of community-created 3D models, from practical tools to artistic creations.</p>
                    </div>
                    <div className="flex flex-col gap-2 lg:border-r">
                        <div className="flex gap-2 items-center">
                            <Image alt="globe image" src={GlobeImage}/>
                            <h2 className="font-montserrat font-bold text-2xl">Active Community</h2>
                        </div>
                            <p className="font-albert text-xl">Join thousands of makers who share tips, provide feedback, and collaborate on projects.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2 items-center">
                            <Image alt="Flag Image" src={FlagImage}/>
                            <h2 className="font-montserrat font-bold text-2xl">Free to Use</h2>
                        </div>
                            <p className="font-albert text-xl">Most models are free to download, with optional premium features for power users.</p>
                    </div>
            </section>
            <section className="flex flex-col gap-4 lg:w-1/2 lg:m-auto lg:my-4 ">
                <h1 className="font-montserrat font-bold text-fourty">Our vision</h1>
                <p className="font-albert text-2xl">At PrintForge, we believe that 3D printing is revolutionizing the way we create, prototype, and manufacture. Our platform serves as a bridge between designers and makers, enabling the sharing of knowledge and creativity that pushes the boundaries of what's possible with 3D printing.</p>
                <hr className="w-1/2 m-auto my-4"></hr>
                <p className="font-albert text-2xl">Whether you're a hobbyist looking for your next weekend project, an educator seeking teaching materials, or a professional designer wanting to share your creations, PrintForge provides the tools and community to support your journey in 3D printing.</p>
            </section>
        </main>
    )
}