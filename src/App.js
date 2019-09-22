import React from "react";
import AppsintegraAppBar from "./components/AppBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ToDoApp from "./view";

function App() {
  return (
    <div className="App">
      <AppsintegraAppBar />
      <div className="container">
        <ToDoApp />
      </div>
    </div>
  );
}

export default App;
