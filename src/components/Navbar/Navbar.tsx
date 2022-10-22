import React, { useState, useContext } from 'react';
import texts from '../../languages/texts';
import styles from './Navbar.module.css';
import SettingsContext from '../../contexts/SettingContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';


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
  const goHome = () => {
    if (window.location.pathname !== '/portafolio') navigate('/portfolio');
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }


  return (
    <div className={isLight ? styles.navbar_light : styles.navbar_dark}>
      <div>
        <a className={isLight ? styles.CV_light : styles.CV_dark} href={(texts as any)[language].cv[1]} target="_blank" rel='noopener norreferer'>{(texts as any)[language].cv[0]}</a>
      </div>
      <div style={{display:"flex", justifyContent:"space-between", width:"35vw"}}>
        <div className={isLight ? styles.options_light : styles.options_dark}>
          <p className={styles.btns} onClick={goHome}>{(texts as any)[language].navbar[0]}</p>
          <Scroll
            className={styles.btns}
            to="About"
            smooth={true}
          >{(texts as any)[language].navbar[1]}</Scroll>
          <Scroll
            className={styles.btns}
            to="Tech"
            smooth={true}
          >{(texts as any)[language].navbar[2]}</Scroll>
          <Scroll
            className={styles.btns}
            to="Contact"
            smooth={true}
          >{(texts as any)[language].navbar[3]}</Scroll>
        </div>
        <div className={isLight ? styles.buttonGroup_light : styles.buttonGroup_dark}>
          {isLight ?
            <button onClick={onClick} className={styles.switchSpan}><FontAwesomeIcon icon={faSun} /></button>
            :
            <button onClick={onClick} className={styles.switchSpan}><FontAwesomeIcon icon={faMoon} /></button>}
          <select className={styles.select} value={language} onChange={onChange}>
            <option value='spanish'>Español</option>
            <option value='english'>English</option>
          </select>
        </div>
      </div>
    </div>
  )
}
