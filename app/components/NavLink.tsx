
import Link from "next/link"
import type { NavLinkProps } from "../types"

export default function NavLink({href, isActive, children}: NavLinkProps) {
    
    return (
        <Link href={href}
              className={`block w-fit font-albert text-sm 
              font-medium uppercase cursor-pointer hover:text-orange ${isActive ? "text-orange border-b border-orange" : "text-gray"}`}>
              {children}
        </Link>
    )
}