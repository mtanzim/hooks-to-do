import { useFetchTasks } from "../hooks/useFetchTasks";

export const TopTask = () => {
  const { tasks: remoteTasks, isLoading } = useFetchTasks(1);

  return (
    <h4>
      Top task: {isLoading ? "loading..." : remoteTasks?.[0]?.title || ""}
    </h4>
  );
};
