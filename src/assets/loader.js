import * as React from "react"
const Loader = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={177}
    height={177}
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
      stroke="#e5e5e5"
      strokeDasharray="164.93361431346415 56.97787143782138"
      strokeWidth={8}
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
