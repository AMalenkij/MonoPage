'use client';

import React, { useMemo } from 'react'
import { usePathname, useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'

import { Link } from '@/src/lib/routing'
import { cn } from "@/src/lib/utils";
import { Button } from "@/components/ui/button";
import { HOME_ROUTE, ABOUT_ROUTE, CONTACTS_ROUTE, PRIVACY_POLICY_ROUTE, SERVICES } from '@/src/constants/routes';

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = React.memo(({ href, label, isActive, className }) => {
  const linkClasses = cn(
    "transition-colors hover:text-foreground/80 text-lg",
    isActive ? "text-foreground pointer-events-none" : "text-foreground/60",
    className
  );

  if (isActive) {
    return <Button variant="link" size='sm' className={linkClasses}>{label}</Button>;
  }

  return (
    <Button variant="link" size='sm' className={linkClasses}>
      <Link href={href}>{label}</Link>
    </Button>
  );
});

NavLink.displayName = 'NavLink';

type RouteVariant = 'header' | 'footer' | 'default';

interface NavMenuProps {
  variant: RouteVariant;
  className?: string;
}

export function NavMenu({ variant, className }: NavMenuProps) {
  const tNavMenu = useTranslations('Components.Nav');
  const pathName = usePathname();
  const { locale } = useParams();

  const routes = useMemo(() => [
    { label: tNavMenu('home'), href: HOME_ROUTE },
    { label: tNavMenu('services'), href: SERVICES },
    { label: tNavMenu('about'), href: ABOUT_ROUTE },
    { label: tNavMenu('contacts'), href: CONTACTS_ROUTE },
    { label: tNavMenu('privacyPolicy'), href: PRIVACY_POLICY_ROUTE },
  ], [tNavMenu]);

  const filteredRoutes = useMemo(() =>
    variant === 'header' ? routes.slice(0, 4) : routes,
    [variant, routes]);

  const isActive = useMemo(() => {
    const localePrefix = `/${locale}`;
    return (href: string) => {
      const fullPath = localePrefix + href;
      if (href === HOME_ROUTE) {
        return pathName === localePrefix || pathName === `${localePrefix}/`;
      }
      return pathName?.startsWith(fullPath);
    };
  }, [locale, pathName]);

  return (
    <nav className={className}>
      {filteredRoutes.map((item) => (
        <NavLink
          key={item.href}
          href={item.href}
          label={item.label}
          isActive={isActive(item.href)}
          className={variant === 'footer' ? 'px-0' : 'lg:px-2 px-1'}
        />
      ))}
    </nav>
  );
}