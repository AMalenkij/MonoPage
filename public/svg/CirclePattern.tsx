import { cn } from "@/lib/utils"

export const CirclePattern = ({className}:{className?:string}) => (
	<svg className={cn(className)} width="100%" height="100%">
	  <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
		 <circle cx="10" cy="10" r="2" fill="currentColor" />
	  </pattern>
	  <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
	</svg>
 );