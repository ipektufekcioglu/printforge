"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import type { NavLinkProps } from "../types"

export default function NavLink({href, children}: NavLinkProps) {
    const path = usePathname()
    return (
        <Link href={href}
              className={`block w-fit font-albert text-sm 
              font-medium uppercase cursor-pointer hover:text-orange ${path === href ? "text-orange border-b border-orange" : "text-gray"}`}>
              {children}
        </Link>
    )
}