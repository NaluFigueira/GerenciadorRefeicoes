import React from "react";

const ReloadPromptButton: React.FC<{ title: string; onClick(): void }> = ({
  title,
  onClick,
}) => {
  return (
    <button
      className="border border-solid rounded-sm text-black border-black outline-none mr-1 py-1 px-2"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default ReloadPromptButton;
