import * as React from "react";
const UrlSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    stroke="#EEE"
    strokeWidth={0}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#EEE"
      fillRule="evenodd"
      stroke="none"
      d="M5.636 5.636a4 4 0 0 1 5.657 0l2.828 2.828a4 4 0 0 1 0 5.657 1 1 0 1 1-1.414-1.414 2 2 0 0 0 0-2.828L9.88 7.05A2 2 0 0 0 7.05 9.88l.707.707A1 1 0 1 1 6.343 12l-.707-.707a4 4 0 0 1 0-5.657Zm5.657 4.243a1 1 0 0 1 0 1.414 2 2 0 0 0 0 2.828l2.828 2.829a2 2 0 0 0 2.829-2.829l-.707-.707A1 1 0 1 1 17.657 12l.707.707a4 4 0 0 1-5.657 5.657L9.88 15.536a4 4 0 0 1 0-5.657 1 1 0 0 1 1.414 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default UrlSVG;
