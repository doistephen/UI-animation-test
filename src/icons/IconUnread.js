import * as React from "react";

function SvgIconUnread(props) {
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
        d="M3 12a9 9 0 1018 0 9 9 0 00-18 0zm17 0a8 8 0 11-16 0 8 8 0 0116 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgIconUnread;
