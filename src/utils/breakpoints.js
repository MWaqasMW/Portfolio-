'use client'

import useBreakpoint from 'use-breakpoint'

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 }

const CurrentBreakpoint = () => {
    const { breakpoint } = useBreakpoint(
        BREAKPOINTS
    )
    return breakpoint
}
export default CurrentBreakpoint
