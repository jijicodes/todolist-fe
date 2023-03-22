import React from "react";
import { Checkbox } from "grommet-icons";

export const ToDoDisplay = ({ listItems, checkBtn }) => {
  return listItems.map((item) => (
    <div key={item.id}>
      <ul className="item">
        <li>{item.title}</li>
        <Checkbox onClick={() => checkBtn(item)} />
      </ul>
    </div>
  ));
};
