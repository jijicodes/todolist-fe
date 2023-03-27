import React, { useState } from "react";
import { Edit, Checkmark, Close } from "grommet-icons";

export const EditTitle = ({ onEditTitle, title }) => {
  const [editedTitle, setEditedTitle] = useState("");
  const [edit, setEdit] = useState(false);
  return (
    <div>
      {edit ? (
        <div className="item-title">
          <input
            type="text"
            onChange={(e) => setEditedTitle(e.target.value)}
            value={editedTitle}
          />
          <Checkmark
            style={{
              cursor: "pointer",
            }}
            color="green"
            size="small"
            onClick={() => {
              setEdit(!edit);
              setEditedTitle(editedTitle);
              edit && onEditTitle(editedTitle);
            }}
          />
          <Close
            style={{
              cursor: "pointer",
            }}
            color="red"
            size="small"
            onClick={() => {
              setEdit(false);
            }}
          />
        </div>
      ) : (
        <div className="item-title">
          {title}
          <Edit
            style={{
              cursor: "pointer",
            }}
            size="small"
            onClick={() => {
              setEdit(!edit);
              setEditedTitle(title);
              edit && onEditTitle(editedTitle);
            }}
          />
        </div>
      )}
    </div>
  );
};
