import { cn } from "@/lib/utils"

export const BackgroundCircle = ({className}:{className?:string}) => (
	<svg
	  className={cn(className)}
	  xmlns="http://www.w3.org/2000/svg"
	  viewBox="0 0 800 800"
	>
	  <circle cx="400" cy="400" r="400" />
	</svg>
 );
 