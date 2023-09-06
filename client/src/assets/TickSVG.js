import * as React from "react"
const TickSVG = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#EEE"
      viewBox="0 -0.5 25 25"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m5.5 12.5 4.667 4.5L19.5 8"
      />
    </svg>
  )
export default TickSVG
