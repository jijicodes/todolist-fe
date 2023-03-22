import React, { useState } from "react";
import { TaskInput } from "../TaskInput/TaskInput";
import { ToDoDisplay } from "../ToDoDisplay/ToDoDisplay";

const emptyTask = {
  created_date: "",
  completed_date: "",
  title: "gg",
  description: "",
  completed: false,
};

export const TaskForm = () => {
  const [collection, setCollection] = useState([]);
  console.log(collection);
  return (
    <div>
      <TaskInput
        onAddTask={(itemTitle) => {
          setCollection([
            ...collection,
            { ...emptyTask, title: itemTitle, created_date: new Date() },
          ]);
        }}
      />
      {/* <ToDoDisplay /> */}
    </div>
  );
};
