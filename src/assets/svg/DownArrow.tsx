import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DownArrowIcon(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={9}
      viewBox="0 0 14 9"
      fill="none"
      {...props}
    >
      <Path
        d="M13.726.309a1.14 1.14 0 010 1.483l-6.2 6.963a.687.687 0 01-1.052 0l-6.2-6.963a1.14 1.14 0 010-1.483.862.862 0 011.32 0l5.41 6.066L12.413.301a.86.86 0 011.313.008z"
        fill="#272727"
      />
    </Svg>
  )
}

export default DownArrowIcon
