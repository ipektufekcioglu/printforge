import Link from "next/link"
import type { NavLinkProps } from "../types"

export default function NavLink({href, children}: NavLinkProps) {
    return (
        <Link href={href}
              className="block w-fit text-gray font-albert text-sm font-medium uppercase cursor-pointer active:text-orange hover:text-orange">
              {children}
        </Link>
    )
}