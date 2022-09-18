import React, { useState, useContext} from 'react';
import texts from '../languages/texts';
import styles from './Navbar.module.css';
import SettingsContext from '../contexts/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


export default function Navbar(props: { switchTheme: { (): void }, switchLanguage: { (): void } }) {

  const [language, setLanguage] = useState<string>('spanish')
  
  const settings = useContext(SettingsContext);
  const isLight = settings[0] === 'light';
  const navigate = useNavigate();

  const onClick = () => {
    props.switchTheme();
  }
  const onChange = (e: any) => {
    setLanguage(e.target.value);
    props.switchLanguage();
  }
  const home = ()=>{
    navigate('/');
    window.scrollTo(0,0);
  }

  return (
    <div className={styles.navbar}>
      <div className={isLight?styles.options_light:styles.options_dark}>
        <p className={styles.btns} onClick={home}>{(texts as any)[language].navbar[0]}</p>
        <p className={styles.btns}>{(texts as any)[language].navbar[1]}</p>
        <p className={styles.btns}>{(texts as any)[language].navbar[2]}</p>
        <p className={styles.btns}>{(texts as any)[language].navbar[3]}</p>
      </div>
      <div className={isLight?styles.buttonGroup_light:styles.buttonGroup_dark}>
        <button className={isLight?styles.switch_light:styles.switch_dark} onClick={onClick}>
          <span className={styles.switchSpan}><FontAwesomeIcon icon={faSun} /></span>
          <span className={styles.switchSpan}><FontAwesomeIcon icon={faMoon} /></span>
        </button>
        <select className={styles.select} value={language} onChange={onChange}>
          <option value='spanish'>Español</option>
          <option value='english'>English</option>
        </select>
      </div>
    </div>
  )
}
