import React, { useState, useEffect } from "react";
import { API_URL } from "../../utils/constants";
import { TaskInput } from "../TaskInput/TaskInput";
import { ToDoDisplay } from "../ToDoDisplay/ToDoDisplay";

const emptyTask = {
  id: 0,
  created_date: "",
  completed_date: "",
  title: "",
  description: "",
  completed: false,
};

export const TaskForm = () => {
  const [collection, setCollection] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () =>
    fetch(`${API_URL}toDoItems`)
      .then((resp) => resp.json())
      .then(setCollection);

  return (
    <div>
      <TaskInput
        onAddTask={(itemTitle) => {
          const newItem = {
            ...emptyTask,
            title: itemTitle,
            created_date: new Date(),
          };

          fetch(`${API_URL}toDoItems`, {
            method: "POST",
            body: JSON.stringify(newItem),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((resp) => resp.json())
            .then((newItem) => setCollection([...collection, newItem]));
        }}
      />
      <ToDoDisplay
        listItems={collection}
        onCheckedBox={(toggledId) => {
          const itemToUpdate = collection.find((item) => item.id === toggledId);
          const checked = {
            ...itemToUpdate,
            completed: !itemToUpdate.completed,
          };
          fetch(`${API_URL}toDoItems/${toggledId}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(checked),
          }).then(fetchData);
        }}
        onDelete={(toggledId) => {
          fetch(`${API_URL}toDoItems/${toggledId}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .catch((err) => console.error(err, "failed to delete"))
            .then(fetchData);
        }}
        onEditTitle={(newTitle, id) => {
          const editedItem = {
            ...collection.find((item) => item.id === id),
            title: newTitle,
          };
          fetch(`${API_URL}toDoItems/${id}`, {
            method: "PUT",
            body: JSON.stringify(editedItem),
            headers: {
              "Content-Type": "application/json",
            },
          }).then(fetchData);
        }}
      />
    </div>
  );
};
