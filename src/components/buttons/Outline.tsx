// components/OutlineButton.tsx

import React, { ReactNode } from "react";

interface OutlineButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const OutlineButton: React.FC<OutlineButtonProps> = ({ children, onClick }) => {
  return (
    <div>
      <button
        className="border-solid border-2 border-[#d341cc] py-3 px-10 rounded-md font-extrabold"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default OutlineButton;
