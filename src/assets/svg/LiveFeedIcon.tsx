import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function LiveFeedIcon(props: any) {
  return (
    <Svg
      width={29}
      height={28}
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_1043_2089)" fill={props.color ?? '#CBCBCB'}>
        <Path d="M19.643 22.287a1.714 1.714 0 100-3.429 1.714 1.714 0 000 3.429z" />
        <Path d="M26.31 20.125a7.407 7.407 0 00-6.666-4.696 7.407 7.407 0 00-6.667 4.696l-.19.448.19.447a7.406 7.406 0 006.667 4.696 7.406 7.406 0 006.666-4.696l.191-.447-.191-.448zm-6.666 3.876a3.43 3.43 0 110-6.858 3.43 3.43 0 010 6.858z" />
        <Path d="M11.072 24.001H7.643V3.43h6.858v5.143a1.719 1.719 0 001.714 1.714h5.143v3.429h1.715V8.572a.78.78 0 00-.258-.6l-6-6a.78.78 0 00-.6-.258H7.643A1.72 1.72 0 005.93 3.43V24a1.72 1.72 0 001.714 1.715h3.429V24zm5.143-20.23l4.8 4.8h-4.8v-4.8z" />
      </G>
      <Defs>
        <ClipPath id="clip0_1043_2089">
          <Path
            fill="#fff"
            transform="translate(.785)"
            d="M0 0H27.43V27.43H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default LiveFeedIcon
