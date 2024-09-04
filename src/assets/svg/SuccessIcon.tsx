import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"

function SuccessIcon(props: any) {
  return (
    <Svg
      width={133}
      height={140}
      viewBox="0 0 133 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Mask
        id="a"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={133}
        height={140}
      >
        <Path
          d="M66.5 2l17.813 12.994 22.051-.04 6.772 20.983L131 48.864l-6.853 20.956L131 90.776l-17.864 12.927-6.772 20.983-22.051-.041L66.5 137.64l-17.813-12.995-22.051.041-6.772-20.983L2 90.776 8.853 69.82 2 48.864l17.864-12.927 6.771-20.983 22.052.04L66.5 2z"
          fill="#fff"
          stroke="#fff"
          strokeWidth={3.48649}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M42.765 69.82L59.72 86.775l33.91-33.91"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Mask>
      <G mask="url(#a)">
        <Path
          d="M-14.885-11.564h162.768v162.768H-14.885V-11.564z"
          fill="#2550C0"
        />
      </G>
    </Svg>
  )
}

export default SuccessIcon
