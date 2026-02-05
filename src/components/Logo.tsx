import Link from "next/link";
import { useTranslations } from 'next-intl'

import { cn } from "@/src/lib/utils";
import { HOME_ROUTE } from "@/src/constants/routes";
import { COMPANY_NAME } from "@/src/constants/setting";
import LogoSvg from '@/public/svg/Logo';

interface LogoProps {
  variant: "header" | "footer" | "dialog" | "map"
  className?: string;
}

export function Logo({ variant, className }: LogoProps) {
  const t = useTranslations('Components.Nav')
  const baseClasses = "flex items-center gap-x-2";

  const variantClasses = {
    header: cn(baseClasses, className),
    footer: cn(baseClasses, className),
    dialog: cn(baseClasses, className),
  };

  if (variant === "header") {
    return (
      <Link
        className={variantClasses[variant]} href={HOME_ROUTE}
        aria-label={t('backToHome')}>
        <LogoSvg className="w-10 h-10 fill-primary dark:fill-foreground" />
        <div className="flex gap-x-1 text-2xl">
          <h3>{COMPANY_NAME.first}</h3>
          <h3 className="font-bold text-foreground-secondary">
            {COMPANY_NAME.second}
          </h3>
        </div>
      </Link>
    );
  }

  if (variant === "footer") {
    return (
      <Link
        className={variantClasses[variant]}
        href={HOME_ROUTE}
        aria-label={t('backToHome')}
      >
        <LogoSvg className="w-32 h-32 fill-primary dark:fill-foreground" />
      </Link>
    );
  }

  if (variant === "dialog") {
    return (
      <div className={variantClasses[variant]}>
        <LogoSvg className="w-16 h-16 fill-primary dark:fill-foreground" />
      </div>
    );
  }

  if (variant === "map") return <LogoSvg className="w-24 h-24 fill-primary dark:fill-background" />

  return null;
}
