import React from "react";
import { EditTitle } from "../EditTitle/EditTitle";
import { Trash } from "grommet-icons";

export const ToDoDisplay = ({
  listItems,
  onCheckedBox,
  onDelete,
  onEditTitle,
}) => {
  return listItems.map(({ completed, id, title }) => {
    return (
      <div
        key={id}
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        <ul className="item" style={{ paddingLeft: "none" }}>
          <li>
            <EditTitle
              title={title}
              onEditTitle={(editedTitle) => {
                onEditTitle(editedTitle, id);
              }}
            />
          </li>

          <div className="settingBtns">
            <input
              readOnly
              type="checkbox"
              checked={completed}
              onClick={() => {
                onCheckedBox(id);
              }}
            />
            <Trash
              size="small"
              onClick={() => {
                onDelete(id);
              }}
            />
          </div>
        </ul>
      </div>
    );
  });
};
