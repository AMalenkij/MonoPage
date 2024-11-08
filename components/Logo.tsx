import { useTranslations } from "next-intl"
import Link from "next/link"

import { HOME_ROUTE } from "@/constants/routes"
import { COMPANY_NAME } from "@/constants/setting"
import { cn } from "@/lib/utils"
import ElementLogo from "@/public/svg/ElementLogo"

type LogoVariant = "header" | "footer" | "dialog" | "map"

interface LogoProps {
	variant: LogoVariant
	className?: string
}

interface LogoStyleConfig {
	wrapper: string
	logo: string
	title: string
	subtitle: string
}

const Logo = ({ variant, className }: LogoProps) => {
	const tNav = useTranslations("Components.Nav")
	const tSubLogo = useTranslations("Components.Logo")

	const styleConfigs: Record<LogoVariant, LogoStyleConfig> = {
		header: {
			wrapper: "",
			logo: "h-8 w-8 fill-transparent stroke-primary pt-5 ml-8",
			title: "text-5xl",
			subtitle: "text-right text-primary text-sm"
		},
		footer: {
			wrapper: "",
			logo: "h-8 w-8 fill-transparent stroke-primary pt-5 ml-10",
			title: "text-6xl",
			subtitle: "text-right text-primary text-sm"
		},
		dialog: {
			wrapper: "",
			logo: "h-8 w-8 fill-transparent stroke-primary pt-5 ml-8",
			title: "text-5xl",
			subtitle: "text-right text-primary text-sm"
		},
		map: {
			wrapper: "",
			logo: "h-8 w-8 fill-transparent stroke-primary pt-5 ml-8",
			title: "text-5xl",
			subtitle: "text-right text-primary text-sm"
		}
	}

	const styles = styleConfigs[variant]

	const LogoContent = () => (
		<div className={styles.wrapper}>
			<ElementLogo className={styles.logo} />
			<h3 className={styles.title}>{COMPANY_NAME}</h3>
			<h3 className={styles.subtitle}>{tSubLogo("subLogo")}</h3>
		</div>
	)

	if (variant === "header" || variant === "footer") {
		return (
			<Link
				className={cn("flex items-center gap-x-2", className)}
				href={HOME_ROUTE}
				aria-label={tNav("backToHome")}
			>
				<LogoContent />
			</Link>
		)
	}

	return (
		<div className={cn("flex items-center gap-x-2", className)}>
			<LogoContent />
		</div>
	)
}

export default Logo