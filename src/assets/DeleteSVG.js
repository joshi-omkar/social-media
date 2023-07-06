import * as React from "react"
const DeleteSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="#EEE"
    viewBox="0 0 24 24"
    width={'24px'}
    height={'24px'}
    {...props}
  >
    <g strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
      <path d="M10 12v5M14 12v5M4 7h16M6 10v8a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-8M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2H9V5Z" />
    </g>
  </svg>
)
export default DeleteSVG
