import React, { useReducer, useState, useEffect } from "react";
import { useFetchTasks } from "../hooks/useFetchTasks";
import { StressBall } from "./StressBall";
import { StressPanda } from "./StressPanda";
import { UserMood } from "./UserMood";
import { taskReducer } from "../store/taskReducer";
import { taskActions } from "../store/taskActions";
import { TopTask } from "./TopTask";

export function ToDoList() {
  const [fetchSize, setFetchSize] = useState(10);
  const { tasks: remoteTasks, isLoading, refetch } = useFetchTasks(fetchSize);
  const [localTasks, dispatch] = useReducer(taskReducer, []);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    dispatch({ type: taskActions.CLEAR });
    dispatch({ type: taskActions.ADD, payload: remoteTasks });
  }, [remoteTasks]);

  const addTask = (task) => {
    if (task === "" || !task) {
      return;
    }
    dispatch({
      type: taskActions.ADD,
      payload: {
        id: Date.now(),
        title: task,
        completed: false,
      },
    });
    setNewTask("");
    setFetchSize(5);
  };

  const remTask = (id) => {
    dispatch({
      type: taskActions.DEL,
      payload: {
        id,
      },
    });
  };

  const toggleTask = (id) => {
    dispatch({
      type: taskActions.TOGGLE,
      payload: {
        id,
      },
    });
  };

  return (
    <div>
      <h1>To Do List</h1>
      <StressBall />
      <StressPanda />
      <UserMood />
      <TopTask />
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          style={{ margin: 4 }}
          onClick={() => dispatch({ type: taskActions.CLEAR })}
        >
          Clear
        </button>
        <button style={{ margin: 4 }} onClick={() => addTask(newTask)}>
          Add
        </button>
      </div>
      <br />
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <button onClick={refetch} style={{ margin: 4 }}>
            Reload
          </button>
          <ul style={{ listStyleType: "none" }}>
            {localTasks.map(({ title, completed, id }) => (
              <div key={id} style={{ display: "flex" }}>
                <li
                  style={{ cursor: "pointer" }}
                  onClick={() => toggleTask(id)}
                >
                  {completed ? "✅ " : "⏳"}
                  &nbsp;
                  {title}
                </li>
                <p
                  style={{ margin: 4, cursor: "pointer" }}
                  onClick={() => remTask(id)}
                >
                  🗑
                </p>
              </div>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
