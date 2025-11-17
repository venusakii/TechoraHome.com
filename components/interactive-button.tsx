'use client'

import { Button } from '@/components/ui/button'
import { useSoundEffects } from '@/components/sound-system'
import { forwardRef } from 'react'

interface InteractiveButtonProps extends React.ComponentProps<typeof Button> {
  enableSound?: boolean
}

export const InteractiveButton = forwardRef<HTMLButtonElement, InteractiveButtonProps>(
  ({ enableSound = true, onClick, onMouseEnter, className, children, ...props }, ref) => {
    const { playClick, playHover } = useSoundEffects()

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (enableSound) playClick()
      onClick?.(e)
    }

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (enableSound) playHover()
      onMouseEnter?.(e)
    }

    return (
      <Button
        ref={ref}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        className={className}
        {...props}
      >
        {children}
      </Button>
    )
  }
)

InteractiveButton.displayName = 'InteractiveButton'
