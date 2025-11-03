import "./globals.css";
import Image from "next/image"
import Link from "next/link"
import PrintForgeMobileLogo from "@/public/printforge-logo-mobile.png"
import PrintForgeDesktopLogo from "@/public/printforge-logo-desktop.png"
import type {RootLayoutProps} from "@/app/types"

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
        <link href="https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,100..900;1,100..900&family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <header>
          <nav className="flex justify-between items-center font-albert text-sm px-4 py-2 text-gray font-medium md:px-8">
            <Link href="/">
              <Image className="md:hidden" alt="Printforge mobile logo" src={PrintForgeMobileLogo}/>
              <Image className="hidden md:block" alt="Printforge desktop logo" src={PrintForgeDesktopLogo}/>
            </Link>
            <ul className="flex gap-4">
                <li><Link href="/3d-models">3D MODELS</Link></li>
                <li><Link href="/about">ABOUT</Link></li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
