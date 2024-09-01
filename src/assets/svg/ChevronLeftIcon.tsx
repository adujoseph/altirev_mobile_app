import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function ChevronLeftIcon(props: any) {
  return (
    <Svg
      width={64}
      height={48}
      viewBox="0 0 64 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={0.5} y={0.5} width={63} height={47} rx={7.5} stroke="#2550C0" />
      <Path
        d="M36.935 36l-12-12 12-12 2.13 2.13-9.87 9.87 9.87 9.87-2.13 2.13z"
        fill="#2550C0"
      />
    </Svg>
  )
}

export default ChevronLeftIcon
