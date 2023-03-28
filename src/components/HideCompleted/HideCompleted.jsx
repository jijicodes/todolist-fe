import React, { useState } from "react";

export const HideCompleted = ({ OnHideCompleted }) => {
  const [hideClick, setHideClick] = useState(false);
  return (
    <div>
      <button
        type="button"
        value={hideClick}
        onClick={() => {
          setHideClick(!hideClick);
          OnHideCompleted(hideClick);
        }}
      >
        {hideClick ? "Show" : "Hide"}
      </button>
    </div>
  );
};
