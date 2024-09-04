import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function IncompleteIcon(props: any) {
  return (
    <Svg
      width={38}
      height={39}
      viewBox="0 0 38 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect
        width={38}
        height={38}
        rx={19}
        transform="matrix(-1 0 0 1 38 .5)"
        fill="#FFF2CD"
      />
      <Path
        d="M12.843 24.998a.652.652 0 00.466-.193L25.624 12.49a.664.664 0 000-.932.664.664 0 00-.932 0L12.377 23.873a.664.664 0 000 .932c.132.132.299.194.466.194z"
        fill="#FFC727"
      />
      <Path
        d="M25.157 21.716c.361 0 .66-.3.66-.66v-9.034c0-.36-.299-.66-.66-.66h-9.033c-.361 0-.66.3-.66.66 0 .36.299.66.66.66h8.374v8.374c0 .36.299.66.66.66z"
        fill="#FFC727"
      />
    </Svg>
  )
}

export default IncompleteIcon
