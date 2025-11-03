import Image from "next/image";
import homepageImg from "@/public/homepage-img.png"

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-screen px-6 py-4 gap-4 md:flex-row md:justify-evenly md:my-16">
      <div className=" flex flex-col items-start gap-4 text-almost-black md:w-1/3" >
        <p className="hidden font-albert font-medium uppercase font-albert md:block">Your go-to platform for 3D printing files</p>
        <h1 className="font-montserrat font-bold text-fourty/12">Discover what’s possible with 3D printing</h1>
        <h2 className="font-albert text-2xl">Join our community of creators and explore a vast library of user-submitted models.</h2>
        <button className="border-2 p-3 border-black uppercase font-albert font-semibold text-xl text-almost-black my-6">Browse models</button>
      </div>
      <Image className="h-125 w-125" alt="PrintForge Community - A group of makers collaborating on 3D printing projects" src={homepageImg}/>
    </main>
  )
}
