import * as React from "react";

function SvgIconClose(props) {
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
        d="M12 3a9 9 0 100 18 9 9 0 000-18zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.721 9.066a.5.5 0 010 .707l-5.662 5.661a.5.5 0 01-.707 0L7.78 12.861a.5.5 0 11.707-.707l2.22 2.22 5.308-5.308a.5.5 0 01.707 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgIconClose;
