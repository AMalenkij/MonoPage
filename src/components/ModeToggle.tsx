"use client"

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

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

interface ModeToggleProps {
  variant: 'dropdown' | 'accordion'
  lightLabel: string
  darkLabel: string
  systemLabel: string
  toggleTheme: string
}

export default function ModeToggle({
  variant,
  lightLabel,
  darkLabel,
  systemLabel,
  toggleTheme
}: ModeToggleProps) {
  const { setTheme } = useTheme()

    if (variant === 'dropdown') {
      return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <SunIcon className="h-5 w-5  dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">{toggleTheme}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            {lightLabel}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            {darkLabel}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            {systemLabel}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      )
    }

    if (variant === 'accordion') {
      return (
        <AccordionItem value="theme">
              <AccordionTrigger>{toggleTheme}</AccordionTrigger>
        <AccordionContent>
        <ul className="space-y-2 flex flex-col items-start">
        <Button variant="link"><li onClick={() => setTheme("light")}>{lightLabel}</li></Button>
        <Button variant="link"><li onClick={() => setTheme("dark")}>{darkLabel}</li></Button>
        <Button variant="link"><li onClick={() => setTheme("system")}>{systemLabel}</li></Button>
        </ul>
      </AccordionContent>
    </AccordionItem>
      )
    }

}
