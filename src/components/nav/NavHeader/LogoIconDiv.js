import React from "react"
import { keyframes, css } from "@emotion/react"
import LogoIcon from "../../../icons/LogoIcon"

const SpinAnim = keyframes`
  0% {

  }
  100% {
    -ms-transform: rotateY(359deg); /* IE 9 */
    -webkit-transform: rotateY(359deg); /* Chrome, Safari, Opera */
    transform: rotateY(359deg) rotate(359deg);
  }
`
const SpinInfinite = css`
  transition-property: none;
  -webkit-animation-timing-function: linear;
  -moz-animation-timing-function: linear;
  -o-animation-timing-function: linear;
  animation-timing-function: linear;
  animation: ${SpinAnim} 2s infinite 0s;
`

export const logoIconDivCSS = css`
  box-sizing: border-box;

  vertical-align: middle;

  /* 
  At smallest size, which is our default, Icon is invisible.
  Let the parent component set visibility and dimension change
  because we may have another instance of this widget on the site.
  */
  padding: 5px;
  margin: 0px;
  width: 42px;
  height: 42px;

  & > svg {
    transition: fill 400ms ease-in-out, stroke 400ms ease-in-out;
  }

  &:hover {
    ${SpinInfinite}
  }
`
//-ms-transform: rotate(180deg); /* IE 9 */
//-webkit-transform: rotate(180deg); /* Chrome, Safari, Opera */
//    transform: rotate(180deg);

const LogoIconDiv = () => {
  return (
    <div id="logoIconDiv" css={logoIconDivCSS}>
      <LogoIcon />
    </div>
  )
}

export default LogoIconDiv