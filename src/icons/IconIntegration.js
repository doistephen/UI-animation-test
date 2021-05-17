import * as React from "react";

function SvgIconIntegration(props) {
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
        d="M7.268 5H18a1 1 0 011 1v10.732A2 2 0 0020 15V6a2 2 0 00-2-2H9a2 2 0 00-1.732 1zM6 7h9a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2zM5 9a1 1 0 011-1h9a1 1 0 011 1v9a1 1 0 01-1 1H6a1 1 0 01-1-1V9zm6 5h2.5a.5.5 0 000-1H11v-2.5a.5.5 0 00-1 0V13H7.5a.5.5 0 000 1H10v2.5a.5.5 0 001 0V14z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgIconIntegration;
