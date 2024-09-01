import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HamburgerIcon(props:any) {
  return (
    <Svg
      width={16}
      height={18}
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5 2a1 1 0 100 2 1 1 0 000-2zM2.17 2a3.001 3.001 0 015.66 0H15a1 1 0 110 2H7.83a3.001 3.001 0 01-5.66 0H1a1 1 0 010-2h1.17zM11 8a1 1 0 100 2 1 1 0 000-2zM8.17 8a3.001 3.001 0 015.66 0H15a1 1 0 110 2h-1.17a3 3 0 01-5.66 0H1a1 1 0 110-2h7.17zM5 14a1 1 0 100 2 1 1 0 000-2zm-2.83 0a3 3 0 015.66 0H15a1 1 0 010 2H7.83a3 3 0 01-5.66 0H1a1 1 0 110-2h1.17z"
        fill="#0D0D0D"
      />
    </Svg>
  )
}

export default HamburgerIcon
