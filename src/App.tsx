import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import mainRoute from "./routes/MainRoute";

function App() {
  return (
    <RouterProvider router={mainRoute}/>
    // 
  );
}

export default App;
