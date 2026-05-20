"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

interface TooltipProps {
  content: string
  children: React.ReactNode
}

/**
 * Tooltip — accessible hover/focus tooltip wrapping any child element.
 * Fades in on hover or keyboard focus with a 150ms transition.
 */
export function Tooltip({ content, children }: TooltipProps) {
  return (
    <TooltipPrimitive.Provider delayDuration={200}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side="top"
            sideOffset={4}
            className="z-50 max-w-xs animate-in rounded-md bg-popover px-3 py-1.5 text-xs text-popover-foreground shadow-md fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
          >
            {content}
            <TooltipPrimitive.Arrow className="fill-popover" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}
