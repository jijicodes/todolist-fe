import { API_URL } from "../utils/constants";
import { useMutation } from "@tanstack/react-query";

export const useCompleteTask = () =>
  useMutation({
    mutationFn: ({ toggledId, checked }) => {
      return fetch(`${API_URL}toDoItems/${toggledId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(checked),
      }).then((resp) => resp.json());
    },
  });
