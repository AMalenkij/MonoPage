"use client"

import { useTransition } from "react"
import { useRouter, usePathname } from 'next/navigation'
import { GlobeIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface LanguageToggleProps {
  variant: 'dropdown' | 'accordion'
  englishLabel: string
  polishLabel: string
  ukrainianLabel: string
  russianLabel: string
  changeLanguageLabel: string
}

export default function LanguageToggle({
  variant,
  englishLabel,
  polishLabel,
  ukrainianLabel,
  russianLabel,
  changeLanguageLabel
}: LanguageToggleProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const changeLanguage = (newLocale: string) => {
    startTransition(() => {
      const currentPathname = pathname || '/'
      const segments = currentPathname.split('/')
      segments[1] = newLocale // Replace the language code
      const newPath = segments.join('/')
      router.replace(newPath)
    })
  }

  const renderLanguageButton = (locale: string, label: string) => (
    <Button variant="link" onClick={() => changeLanguage(locale)}>
      <li>{label}</li>
    </Button>
  )

  if (variant === 'dropdown') {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <GlobeIcon className="h-5 w-5" />
            <span className="sr-only">{changeLanguageLabel}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => changeLanguage('en')}>
            {englishLabel}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => changeLanguage('pl')}>
            {polishLabel}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => changeLanguage('ua')}>
            {ukrainianLabel}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => changeLanguage('ru')}>
            {russianLabel}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  if (variant === 'accordion') {
    return (
      <AccordionItem value="language">
        <AccordionTrigger>{changeLanguageLabel}</AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-2 flex flex-col items-start">
            {renderLanguageButton('en', englishLabel)}
            {renderLanguageButton('pl', polishLabel)}
            {renderLanguageButton('ua', ukrainianLabel)}
            {renderLanguageButton('ru', russianLabel)}
          </ul>
        </AccordionContent>
      </AccordionItem>
    )
  }
}