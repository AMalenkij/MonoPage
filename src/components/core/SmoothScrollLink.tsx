"use client"

import { useLenis } from 'lenis/react'
import { ReactNode, MouseEvent } from 'react'

interface SmoothScrollLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string
    children: ReactNode
}

export function SmoothScrollLink({ href, children, onClick, ...props }: SmoothScrollLinkProps) {
    const lenis = useLenis()

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        if (onClick) {
            onClick(e)
        }
        e.preventDefault()
        lenis?.scrollTo(href)
    }

    return (
        <a href={href} onClick={handleClick} {...props}>
            {children}
        </a>
    )
}
