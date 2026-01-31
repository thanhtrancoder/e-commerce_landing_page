import { useState } from "react";

import ButtonToExpand1Icon from "../assets/icons/Button_To_Expand_1_icon.png";

export function Question({ question, children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="border-gainsboro cursor-pointer rounded-4xl border p-4"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-center">
        <p>{question}</p>
        <img src={ButtonToExpand1Icon} className="ml-auto size-6"></img>
      </div>
      {/* {isExpanded && <div>{children}</div>} */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isExpanded
            ? "mt-4 grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
