import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

import { useState } from "react";

function App() {
  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='grey';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';

    


    }
  }
  const[mode,setmode]=useState('light');
  return (
    <>
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
      <div className="container ">
        <TextForm  />
      </div>
    </>
  );
}

export default App;
