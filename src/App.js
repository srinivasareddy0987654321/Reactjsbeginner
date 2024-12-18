import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      <Navbar title="REDDY" />
      <div className="container">
        <TextForm  />
      </div>
    </>
  );
}

export default App;
