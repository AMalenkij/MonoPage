import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import React from "react"

interface FloatingLabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string
	id: string
}

const FloatingLabelInput = React.forwardRef<HTMLInputElement, FloatingLabelInputProps>(
	({ className, label, id, ...props }, ref) => {
		return (
			<div className="relative">
				<Input
					id={id}
					ref={ref}
					placeholder=" "
					className={cn(
						"peer h-14 rounded-none border-primary border-x-0 border-t-0 border-b border-b-1 bg-background px-0",
						"placeholder:text-transparent focus:ring-0 focus:ring-offset-0",
						"focus-visible:border-b-2 focus-visible:ring-0 focus-visible:ring-offset-0",
						"focus-visible:border-primary",
						className
					)}
					{...props}
				/>
				<Label
					htmlFor={id}
					className={cn(
						"-top-2 absolute left-0 text-muted-foreground text-sm",
						"peer-placeholder-shown:text-base",
						"peer-placeholder-shown:top-4",
						"peer-focus:-top-2",
						"peer-focus:text-sm",
						"peer-focus:text-primary",
						"transition-all duration-200"
					)}
				>
					{label}
				</Label>
			</div>
		)
	}
)

FloatingLabelInput.displayName = "FloatingLabelInput"

export default FloatingLabelInput