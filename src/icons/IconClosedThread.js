import * as React from "react";

function SvgIconClosedThread(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity={0.1}
        d="M12 20a8 8 0 110-16 8 8 0 010 16z"
        fill="#058527"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-1a8 8 0 110-16 8 8 0 010 16zm-4.354-8.104a.5.5 0 01.708 0l2.146 2.147 5.146-5.147a.5.5 0 01.708.708l-5.5 5.5a.5.5 0 01-.708 0l-2.5-2.5a.5.5 0 010-.708z"
        fill="#058527"
      />
    </svg>
  );
}

export default SvgIconClosedThread;
