import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Sheet({ ...props }) {
  return <SheetPrimitive.Root {...props} />
}

function SheetTrigger({ ...props }) {
  return <SheetPrimitive.Trigger {...props} />
}

function SheetClose({ ...props }) {
  return <SheetPrimitive.Close {...props} />
}

function SheetPortal({ ...props }) {
  return <SheetPrimitive.Portal {...props} />
}

function SheetOverlay({ className, ...props }) {
  return (
    <SheetPrimitive.Overlay
      className={cn(
        "fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
        className
      )}
      {...props}
    />
  )
}

const SheetContent = React.forwardRef(
  ({ side = "right", className, children, ...props }, ref) => {
    return (
      <SheetPortal>
        <SheetOverlay />
        <SheetPrimitive.Content
          ref={ref}
          className={cn(
            "fixed z-50 bg-white shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out",
            side === "right" &&
              "inset-y-0 right-0 h-full w-80 sm:w-96 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
            side === "left" &&
              "inset-y-0 left-0 h-full w-80 sm:w-96 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
            side === "bottom" &&
              "inset-x-0 bottom-0 h-1/3 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
            side === "top" &&
              "inset-x-0 top-0 h-1/3 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
            className
          )}
          {...props}
        >
          {children}
          {/* Close button */}
          <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 transition hover:opacity-100 focus:outline-none">
            <XIcon className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </SheetPrimitive.Close>
        </SheetPrimitive.Content>
      </SheetPortal>
    )
  }
)
SheetContent.displayName = "SheetContent"

function SheetHeader({ className, ...props }) {
  return (
    <div className={cn("flex flex-col gap-1.5 p-4", className)} {...props} />
  )
}

function SheetFooter({ className, ...props }) {
  return (
    <div className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />
  )
}

function SheetTitle({ className, ...props }) {
  return (
    <SheetPrimitive.Title
      className={cn("text-foreground font-semibold", className)}
      {...props}
    />
  )
}

function SheetDescription({ className, ...props }) {
  return (
    <SheetPrimitive.Description
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
