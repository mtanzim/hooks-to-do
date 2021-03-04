import React from "react";
import { useFetchTasks } from "../hooks/useFetchTasks";

export function ToDoList() {
  const { tasks, isLoading, refetch } = useFetchTasks();

  return (
    <div>
      <h1>To Do List</h1>

      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <button onClick={refetch}>Reload</button>
          <ul style={{ listStyleType: "none" }}>
            {tasks.map(({ title, completed, id }) => (
              <li key={id}>
                {completed ? "✅ " : "⏳"}
                {title}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
