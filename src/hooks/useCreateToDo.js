import { API_URL } from "../utils/constants";
import { useMutation } from "@tanstack/react-query";

export const useCreateToDo = () =>
  useMutation({
    mutationFn: (newTodo) => {
      return fetch(`${API_URL}toDoItems`, {
        method: "POST",
        body: JSON.stringify(newTodo),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((resp) => resp.json());
    },
  });
