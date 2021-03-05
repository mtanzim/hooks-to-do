import { taskActions } from "./taskActions";

export function taskReducer(tasks, action) {
  switch (action.type) {
    case taskActions.ADD:
      return tasks.concat(action.payload);
    case taskActions.DEL:
      return tasks.filter((t) => t.id !== action.payload.id);
    case taskActions.CLEAR:
      return [];
    case taskActions.TOGGLE:
      return tasks.map((t) => {
        if (t.id === action.payload.id) {
          return {
            ...t,
            completed: !t.completed,
          };
        }
        return t;
      });
    default:
      throw new Error();
  }
}
