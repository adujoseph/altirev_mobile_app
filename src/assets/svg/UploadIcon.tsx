import * as React from "react"
import Svg, { Path } from "react-native-svg"

const UploadIcon = (props: any) => {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M22 20.167c0 .489-.183.916-.55 1.283-.367.367-.794.55-1.283.55H1.833c-.489 0-.916-.183-1.283-.55-.367-.367-.55-.794-.55-1.283v-8.892h1.833v8.892h18.334v-8.892H22v8.892zm-5.653-14.85L15.033 6.63l-3.116-3.117v10.694h-1.834V3.575L6.967 6.692 5.653 5.378 11.03 0l5.316 5.317z"
        fill={props.color}
      />
    </Svg>
  )
}

export default UploadIcon;
