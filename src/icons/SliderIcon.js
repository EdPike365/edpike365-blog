import React from "react"
import { css } from "@emotion/react"

const SliderIcon = () => {
  return (
    <svg
      css={css`
        fill: var(--color-text-secondary);
        stroke: var(--color-text-secondary);
      `}
      viewBox="0 0 512 512"
      aria-hidden="true"
      focusable="false"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M480 384H249.2C236.9 355.8 208.8 336 176 336S115.1 355.8 102.8 384H32c-17.67 0-32 14.33-32 32s14.33 32 32 32h70.75C115.1 476.2 143.2 496 176 496s60.89-19.77 73.25-48H480c17.67 0 32-14.33 32-32S497.7 384 480 384zM176 448c-17.64 0-32-14.36-32-32s14.36-32 32-32s32 14.36 32 32S193.6 448 176 448zM480 224h-70.75C396.9 195.8 368.8 176 336 176S275.1 195.8 262.8 224H32C14.33 224 0 238.3 0 256s14.33 32 32 32h230.8C275.1 316.2 303.2 336 336 336s60.89-19.77 73.25-48H480c17.67 0 32-14.33 32-32S497.7 224 480 224zM336 288c-17.64 0-32-14.36-32-32s14.36-32 32-32s32 14.36 32 32S353.6 288 336 288zM32 128h102.8C147.1 156.2 175.2 176 208 176s60.89-19.77 73.25-48H480c17.67 0 32-14.33 32-32s-14.33-32-32-32h-198.8C268.9 35.77 240.8 16 208 16S147.1 35.77 134.8 64H32C14.33 64 0 78.33 0 96S14.33 128 32 128zM208 64c17.64 0 32 14.36 32 32s-14.36 32-32 32s-32-14.36-32-32S190.4 64 208 64z"></path>
    </svg>
  )
}

export default SliderIcon
