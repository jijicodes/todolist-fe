import React, { useState } from "react";
import { Add } from "grommet-icons";

export const TaskInput = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  return (
    <div>
      <form>
        <div className="form">
          <input
            className="input"
            type="text"
            placeholder="Add your task"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <Add
            className="addIcon"
            onClick={() => {
              title && onAddTask(title);
              setTitle("");
            }}
          />
        </div>
      </form>
    </div>
  );
};
