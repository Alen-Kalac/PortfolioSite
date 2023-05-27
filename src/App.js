import React from "react";
import "./App.css";
import About from "./pages/About/About";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <div>
    <Routes>
      <Route path='/' element={<About />} />
      <Route path='/about' element = {<About />} />
      <Route path='/contact' element = {<About />}/>
      <Route path='/works' element = {<About />}/>
    </Routes>
    </div>
    </>
  );
}

export default App;
