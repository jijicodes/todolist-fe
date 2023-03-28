import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../utils/constants";

export const useQueryAllToDos = (onlyInProgressTasks) =>
  useQuery({
    queryKey: ["allToDos", onlyInProgressTasks],
    queryFn: () => fetchCompletedData(onlyInProgressTasks),
  });

const fetchCompletedData = (onlyInProgressTasks) =>
  fetch(
    onlyInProgressTasks
      ? `${API_URL}toDoItems?completed=false`
      : `${API_URL}toDoItems`
  ).then((resp) => resp.json());
