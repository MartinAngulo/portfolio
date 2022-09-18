import React, { useContext } from 'react';
import styles from './About.module.css';
import SettingsContext from '../contexts/ThemeContext';
import texts from '../languages/texts';
import img1 from '../img/img1.png';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const settings = useContext(SettingsContext);
  const language = settings[1];
  const isLight = settings[0] === 'light';

  const navigate = useNavigate();

  const onClick = ()=>{
    navigate('/projects')
  }

  return (
    <div className={isLight ? styles.container_light : styles.container_dark}>
      <img src={img1} style={{width: "30vw"}}/>
      <div style={{justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <h1 className={isLight ? styles.section_light : styles.section_dark}>{(texts as any)[language].navbar[1]}</h1>
        <p className={isLight?styles.p_light:styles.p_dark}>{(texts as any)[language].about}</p>
        <button
        className={isLight?styles.button_light:styles.button_dark}
        onClick={onClick}
        >{(texts as any)[language].projects}</button>
      </div>
    </div>
  )
}
