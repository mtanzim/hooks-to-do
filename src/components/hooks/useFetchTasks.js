import { useEffect, useState } from "react";
import { fetchTasks } from "../api/fetchTasks";

export function useFetchTasks() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetch = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    const remoteTasks = await fetchTasks();
    const localTasks = remoteTasks
      .slice(0, 9)
      .sort((a, _b) => (a.completed ? 1 : -1));
    setTasks(localTasks);
    setLoading(false);
  };

  useEffect(() => {
    fetch();
  }, []);

  return {
    tasks,
    isLoading,
    refetch: fetch,
  };
}
