import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
import { API_URL } from "../utils/constants";

const fetchData = () =>
  fetch(`${API_URL}toDoItems`).then((resp) => resp.json());

export const useQueryAllToDos = () =>
  useQuery({
    queryKey: ["allToDos"],
    queryFn: fetchData,
  });

// export const useQueryAllToDos = () => {
//   const [data, setData] = useState(undefined);

//   useEffect(() => {
//     fetchData().then(setData);
//   }, []);

//   return { data,
//     refetch: () => fetchData().then(setData) };
// };
