import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function PostiveIcon(props: any) {
  return (
    <Svg
      width={38}
      height={38}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect
        width={38}
        height={38}
        rx={19}
        transform="matrix(-1 0 0 1 38 0)"
        fill="#CFFFDB"
      />
      <Path
        d="M12.843 24.496a.652.652 0 00.466-.193l12.315-12.315a.664.664 0 000-.932.664.664 0 00-.932 0L12.377 23.37a.664.664 0 000 .933c.132.132.299.193.466.193z"
        fill="#34C759"
      />
      <Path
        d="M25.158 21.215c.36 0 .66-.299.66-.66v-9.033c0-.36-.3-.66-.66-.66h-9.034c-.36 0-.66.3-.66.66 0 .36.3.66.66.66h8.374v8.374c0 .36.299.66.66.66z"
        fill="#34C759"
      />
    </Svg>
  )
}

export default PostiveIcon
