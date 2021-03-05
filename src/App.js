import "./App.css";
import { ToDoList } from "./components/ToDoList";
import React from "react";

const moods = {
  productive: "🚀",
  procrastinating: "🎮",
};

export const MoodContext = React.createContext(moods.procrastinating);

function App() {
  return (
    <div className="App">
      <MoodContext.Provider value={moods.procrastinating}>
        <ToDoList />
      </MoodContext.Provider>
    </div>
  );
}

export default App;
