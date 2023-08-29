import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

console.log("hello")

const App = () => {

  const[mode,setmode]=useState("light")
  const toggleMode = () => {
    if(mode==="light"){
      setmode("dark")
      document.body.style.background="black"
      document.body.style.color="white"
    }
    else {
      setmode("light")
      document.body.style.background="white"
      document.body.style.color="black"
    }
  }

  return (
    <>
     <Navbar title="Text-utils" mode={mode} toggleMode={toggleMode} />
     <TextForm heading="TextUtils-Modify Your Text:"  mode={mode} />
   </> 
  );
};



export default App;
