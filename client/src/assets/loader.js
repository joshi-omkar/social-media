import * as React from "react"
const Loader = (props, {width, height, strokeWidth}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    preserveAspectRatio="xMidYMid"
    style={{
      margin: "auto",
      background: "0 0",
      display: "block",
      shapeRendering: "auto",
    }}
    viewBox="0 0 100 100"
    {...props}
  >
    <circle
      cx={50}
      cy={50}
      r={35}
      fill="none"
      stroke="#00ADB5"
      strokeDasharray="164.93361431346415 56.97787143782138"
      strokeWidth={strokeWidth}
    >
      <animateTransform
        attributeName="transform"
        dur="0.970873786407767s"
        keyTimes="0;1"
        repeatCount="indefinite"
        type="rotate"
        values="0 50 50;360 50 50"
      />
    </circle>
  </svg>
)
export default Loader
