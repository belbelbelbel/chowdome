import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full  rounded-md border-b border-white bg-transparent px-3 py-2 text-base ring-offset-w file:border-0 file:bg-transparent file:text-lg file:font-medium file:text-neutral-950 placeholder:text-neutral-300 focus-visible:outline-none focus-visible:ring- focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-[1.1rem] dark:border-neutral-0 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:file:text-neutral-50 dark:placeholder:text-neutral-700 dark:focus-visible:ring-neutral-700",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
