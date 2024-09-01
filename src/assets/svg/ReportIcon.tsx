import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function ReportIcon(props: any) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_1018_9576)" fill={props.color}>
        <Path d="M8.857 15.43h6.857v1.714H8.857v-1.715zM8.857 11.144h10.286v1.714H8.857v-1.714zM8.857 19.715h4.286v1.715H8.857v-1.715z" />
        <Path d="M21.715 4.286h-2.572v-.857a1.714 1.714 0 00-1.714-1.715H10.57A1.714 1.714 0 008.857 3.43v.857H6.285A1.714 1.714 0 004.571 6v18.001a1.714 1.714 0 001.714 1.715h15.43A1.714 1.714 0 0023.429 24v-18a1.714 1.714 0 00-1.714-1.715zM10.57 3.429h6.858v3.428H10.57V3.43zM21.715 24H6.285v-18h2.572v2.57h10.286v-2.57h2.572v18z" />
      </G>
      <Defs>
        <ClipPath id="clip0_1018_9576">
          <Path
            fill="#fff"
            transform="translate(.285)"
            d="M0 0H27.43V27.43H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default ReportIcon
