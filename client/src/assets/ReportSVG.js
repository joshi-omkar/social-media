import * as React from "react"
const ReportSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#EEE"
    stroke="#EEE"
    viewBox="0 0 24 24"
    width={'24px'}
    height={'24px'}
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M16 2a1 1 0 0 1 .707.293l5 5A1 1 0 0 1 22 8v7a1 1 0 0 1-.232.64l-5 6A1 1 0 0 1 16 22H8a1 1 0 0 1-.707-.293l-5-5A1 1 0 0 1 2 16V8a1 1 0 0 1 .293-.707l5-5A1 1 0 0 1 8 2h8Zm-.414 2H8.414L4 8.414v7.172L8.414 20h7.118L20 14.638V8.414L15.586 4ZM12 16a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0-10a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V7a1 1 0 0 1 1-1Z"
    />
  </svg>
)
export default ReportSVG