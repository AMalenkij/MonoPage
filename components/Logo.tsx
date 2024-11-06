import { useTranslations } from 'next-intl'
import Link from "next/link"

import { HOME_ROUTE } from "@/constants/routes"
import { COMPANY_NAME } from "@/constants/setting"
import { cn } from "@/lib/utils"
import ElementLogo from '@/public/svg/ElementLogo'
import LogoSvg from '@/public/svg/Logo'

interface LogoProps {
  variant: "header" | "footer" | "dialog" | "map"
  className?: string;
}

export default function Logo({ variant, className }: LogoProps) {
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
        <div>
        <ElementLogo className="w-8 h-8 fill-transparent stroke-primary ml-8 pt-5" />
        <h3 className='text-5xl'>{COMPANY_NAME}</h3>
        <h3 className='text-right text-sm text-primary'>usługi księgowe</h3>
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
      <div>
        <ElementLogo className="w-8 h-8 fill-transparent stroke-primary ml-10 pt-5" />
        <h3 className='text-6xl'>{COMPANY_NAME}</h3>
        <h3 className='text-right text-sm text-primary'>usługi księgowe</h3>
      </div>
      </Link>
    );
  }

  if (variant === "dialog") {
    return (
      <div className={variantClasses[variant]}>
                <div>
        <ElementLogo className="w-8 h-8 fill-transparent stroke-primary ml-8 pt-5" />
        <h3 className='text-5xl'>{COMPANY_NAME}</h3>
        <h3 className='text-right text-sm text-primary'>usługi księgowe</h3>
        </div>
      </div>
    );
  }

  if (variant === "map") return <LogoSvg className="w-24 h-24 fill-m" />

  return null;
}
