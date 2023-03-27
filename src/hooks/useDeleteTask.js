import { API_URL } from "../utils/constants";
import { useMutation } from "@tanstack/react-query";

export const useDeleteTask = () =>
  useMutation({
    mutationFn: (toggledId) => {
      return fetch(`${API_URL}toDoItems/${toggledId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }).catch((err) => console.error(err, "failed to delete"));
    },
  });
