import * as React from "react"
import Svg, { G, Circle, Path, Defs, ClipPath } from "react-native-svg"

function ProfileImageIcon(props:any) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_2_12484)">
        <Circle cx={24} cy={24} r={23.25} stroke="#101720" strokeWidth={1.5} />
        <Path
          d="M24 4.5C13.236 4.5 4.5 13.236 4.5 24S13.236 43.5 24 43.5 43.5 34.764 43.5 24 34.764 4.5 24 4.5zm0 5.85a5.842 5.842 0 015.85 5.85A5.842 5.842 0 0124 22.05a5.842 5.842 0 01-5.85-5.85A5.842 5.842 0 0124 10.35zm0 27.69a14.041 14.041 0 01-11.7-6.279c.058-3.88 7.8-6.006 11.7-6.006 3.88 0 11.642 2.126 11.7 6.006A14.041 14.041 0 0124 38.04z"
          fill="#101720"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2_12484">
          <Path fill="#fff" d="M0 0H48V48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default ProfileImageIcon
