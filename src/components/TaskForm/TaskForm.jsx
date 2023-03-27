import React from "react";
import { TaskInput } from "../TaskInput/TaskInput";
import { ToDoDisplay } from "../ToDoDisplay/ToDoDisplay";
import { useQueryAllToDos } from "../../hooks/useQueryAllToDos";
import { useCreateToDo } from "../../hooks/useCreateToDo";
import { useCompleteTask } from "../../hooks/useCompleteTask";
import { useDeleteTask } from "../../hooks/useDeleteTask";
import { useEditTitle } from "../../hooks/useEditTitle";
import { format } from "date-fns";

const emptyTask = {
  id: 0,
  created_date: "",
  completed_date: "",
  title: "",
  description: "",
  completed: false,
};

export const TaskForm = () => {
  const { data: collection = [], refetch: refetchAllToDos } =
    useQueryAllToDos();
  const { mutate: createTask } = useCreateToDo();
  const { mutate: completeTaskToggle } = useCompleteTask();
  const { mutate: deleteTask } = useDeleteTask();
  const { mutate: editTitle } = useEditTitle();

  return (
    <div>
      <TaskInput
        onAddTask={(itemTitle) => {
          const newItem = {
            ...emptyTask,
            title: itemTitle,
            created_date: new Date(),
          };
          createTask(newItem, { onSuccess: refetchAllToDos });
        }}
      />
      <ToDoDisplay
        listItems={collection}
        onCheckedBox={(toggledId) => {
          const itemToUpdate = collection.find((item) => item.id === toggledId);
          const checked = {
            ...itemToUpdate,
            completed: !itemToUpdate.completed,
            completed_date: !itemToUpdate.completed ? new Date() : "",
          };
          completeTaskToggle(
            { checked, toggledId },
            { onSuccess: refetchAllToDos }
          );
        }}
        onDelete={(toggledId) => {
          deleteTask(toggledId, { onSuccess: refetchAllToDos });
        }}
        onEditTitle={(newTitle, id) => {
          const editedItem = {
            ...collection.find((item) => item.id === id),
            title: newTitle,
          };
          editTitle(editedItem, { onSuccess: refetchAllToDos });
        }}
      />
    </div>
  );
};
