import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import React from "react"

interface FloatingLabelTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  id: string
}

const FloatingLabelTextarea = React.forwardRef<HTMLTextAreaElement, FloatingLabelTextareaProps>(
  ({ className, label, id, ...props }, ref) => {
    return (
      <div className="relative">
        <Textarea
          id={id}
          ref={ref}
          placeholder=" "
          className={cn(
            "peer min-h-[120px] rounded-none border-primary border-x-0 border-t-0 border-b border-b-1 bg-background px-0",
            "placeholder:text-transparent focus:ring-0 focus:ring-offset-0",
            "focus-visible:border-b-2 focus-visible:ring-0 focus-visible:ring-offset-0",
            "resize-none focus-visible:border-primary",
            className
          )}
          {...props}
        />
        <Label
          htmlFor={id}
          className={cn(
            "-top-2 absolute left-0 text-muted-foreground text-sm",
            "peer-placeholder-shown:text-base",
            "peer-placeholder-shown:top-2",
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

FloatingLabelTextarea.displayName = "FloatingLabelTextarea"

export default FloatingLabelTextarea