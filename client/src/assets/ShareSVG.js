import * as React from "react";
const ShareSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#EEEEEE"
      strokeWidth={1.5}
      d="m8.684 10.658 6.628-3.314m.004 9.314-6.622-3.311M21 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm12 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
);
export default ShareSVG;
