import * as React from "react";

function SvgIconLink(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.096 13.046l-.707-.707-1.768 1.768a3 3 0 104.243 4.242l3.535-3.535a3 3 0 000-4.243l-.707.707a2 2 0 010 2.829l-3.535 3.535a2 2 0 11-2.829-2.828l1.768-1.768zm7.425-1.768l.707.707 1.768-1.768a3 3 0 10-4.243-4.242L10.217 9.51a3 3 0 000 4.243l.708-.707a2 2 0 010-2.829l3.535-3.535A2 2 0 1117.29 9.51l-1.768 1.768z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgIconLink;
