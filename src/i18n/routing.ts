import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "pl", "ua"],
  defaultLocale: "en",
});

export type Locale = (typeof routing.locales)[number];

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

export function isValidLocale(locale: unknown): locale is Locale {
  return routing.locales.includes(locale as Locale);
}
