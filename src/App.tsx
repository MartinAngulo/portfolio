import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';


function App() {

  const initialState = {
    language: true,
    theme: true,
  };
  const [state, setState] = useState(initialState)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home state={state} setState={setState} />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      </>
  );
}


export default App;