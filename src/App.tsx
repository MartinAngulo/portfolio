import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import ThemeContext from './contexts/ThemeContext';


function App() {

  const [theme, setTheme] = useState<string>('light');
  const [language, setLanguage] = useState<string>('spanish');
  const switchTheme = () => {
    setTheme(theme => theme == 'light' ? 'dark' : 'light');
  }
  const switchLanguage = () => {
    setLanguage(language => language== 'spanish' ? 'english' : 'spanish');
  }

  return (
    <ThemeContext.Provider value={[theme, language]}>
      <Navbar switchTheme={switchTheme} switchLanguage={switchLanguage}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </ThemeContext.Provider>
  );
}


export default App;