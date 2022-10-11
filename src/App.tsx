import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects';
import ThemeContext from './contexts/SettingContext';


function App() {

  const [theme, setTheme] = useState<string>('light');
  const [language, setLanguage] = useState<string>('spanish');
  const switchTheme = () => {
    setTheme(theme => theme === 'light' ? 'dark' : 'light');
  }
  const switchLanguage = () => {
    setLanguage(language => language=== 'spanish' ? 'english' : 'spanish');
  }

  return (
    <ThemeContext.Provider value={[theme, language]}>
      <Navbar switchTheme={switchTheme} switchLanguage={switchLanguage}/>
      <Routes>
        <Route path='/portfolio' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='*' element={<Navigate to='/portfolio'/>}/>
      </Routes>
    </ThemeContext.Provider>
  );
}


export default App;