import { cn } from "@/lib/utils"

export default function GoogleLogo ({className}:{className?:string}) {
	return (
		<svg
		className={cn(className)}
		viewBox="0 0 256 256"
		xmlns="http://www.w3.org/2000/svg"
	 >
  <path d="M128,24A104,104,0,1,0,232,128,104.11791,104.11791,0,0,0,128,24Zm0,184A80,80,0,1,1,184.56836,71.43164a7.99984,7.99984,0,1,1-11.31348,11.31348A63.99718,63.99718,0,1,0,191.50244,136H128a8,8,0,0,1,0-16h72a8.00008,8.00008,0,0,1,8,8A80.09041,80.09041,0,0,1,128,208Z"/>	 </svg>
	)
}



