import { API_URL } from "../utils/constants";
import { useMutation } from "@tanstack/react-query";

export const useEditTitle = () =>
  useMutation({
    mutationFn: (editedItem) => {
      fetch(`${API_URL}toDoItems/${editedItem.id}`, {
        method: "PUT",
        body: JSON.stringify(editedItem),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  });
