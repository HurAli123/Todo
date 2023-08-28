// src/App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

console.log("hello")

const App = () => {
  return (
    <>
     <Navbar title="Text-utils" />
     <TextForm heading="TextUtils-Modify Your Text:" />
   </> 
  );
};



export default App;
