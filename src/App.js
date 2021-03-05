import "./App.css";
import { ToDoList } from "./components/ToDoList";
import React from "react";
import { StressBall } from "./components/StressBall";
import { StressPanda } from "./components/StressPanda";
import { UserMood } from "./components/UserMood";
import { TopTask } from "./components/TopTask";

const moods = {
  productive: "🚀",
  procrastinating: "🎮",
};

export const MoodContext = React.createContext(moods.procrastinating);

function App() {
  return (
    <div className="App">
      <MoodContext.Provider value={moods.procrastinating}>
        <h1>To Do List</h1>
        <StressBall />
        <StressPanda />
        <UserMood />
        <TopTask />
        <ToDoList />
      </MoodContext.Provider>
    </div>
  );
}

export default App;
