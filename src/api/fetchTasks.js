export async function fetchTasks() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const tasks = await res.json();
  return tasks;
}
