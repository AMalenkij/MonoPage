import { cn } from "@/lib/utils";

export default function InstagramLogo({ className }: { className?: string }) {
  return (
	<svg
	className={cn(className)}
   fill="currentColor"
	xmlns="http://www.w3.org/2000/svg" 
	viewBox="0 0 24 24"
	>
		<path d="M8 3a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5zm10 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2m-6 2a5 5 0 1 1-.001 10.001A5 5 0 0 1 12 7m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3"/>
	</svg>
  )
}
