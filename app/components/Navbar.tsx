"use client"

import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import NavLink from "./NavLink"
import PrintForgeMobileLogo from "@/public/printforge-logo-mobile.png"
import PrintForgeDesktopLogo from "@/public/printforge-logo-desktop.png"

export default function Navbar() {
    const path = usePathname()
    console.log(path.startsWith("/3d-models"))
    return (
        <nav className="flex justify-between items-center font-albert text-sm px-4 py-2 text-gray font-medium md:px-8">
            <Link href="/">
              <Image className="md:hidden" alt="Printforge mobile logo" src={PrintForgeMobileLogo}/>
              <Image className="hidden md:block" alt="Printforge desktop logo" src={PrintForgeDesktopLogo}/>
            </Link>
            <ul className="flex gap-4">
                <li><NavLink href="/3d-models" isActive={path.startsWith("/3d-models")}>3D MODELS</NavLink></li>
                <li><NavLink href="/about" isActive={path === "/3d-models"}>ABOUT</NavLink></li>
            </ul>
        </nav>
    )
}