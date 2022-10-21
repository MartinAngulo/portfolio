import React, { useContext } from 'react';
import styles from './About.module.css';
import SettingsContext from '../../contexts/SettingContext';
import texts from '../../languages/texts';
import foto from '../../img/foto.png';
import Carrousel from './Carrousel';

export default function About() {
  const settings = useContext(SettingsContext);
  const language = settings[1];
  const isLight = settings[0] === 'light';

  return (
    <div className={isLight ? styles.container_light : styles.container_dark}>
      <div className={styles.info}>
        <div className={styles.top}>
          <p className={isLight ? styles.text_light : styles.text_dark}>{(texts as any)[language].about[5]}</p>
          <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <h1 className={isLight ? styles.title_light : styles.title_dark}>{(texts as any)[language].about[0]}</h1>
            <p className={isLight ? styles.text_light : styles.text_dark}>{(texts as any)[language].about[3]}</p>
          </div>
          <p className={isLight ? styles.text_light : styles.text_dark}>{(texts as any)[language].about[6]}</p>
        </div>
        <div className={styles.bot}>
          <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <h1 className={isLight ? styles.title_light : styles.title_dark}>{(texts as any)[language].about[1]}</h1>
            <p className={isLight ? styles.text_light : styles.text_dark}>{(texts as any)[language].about[4]}</p>
          </div>
          <img className={isLight ? styles.img_light : styles.img_dark} src={foto}></img>
          <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <h1 className={isLight ? styles.title_light : styles.title_dark}>{(texts as any)[language].about[2]}</h1>
            <p className={isLight ? styles.text_light : styles.text_dark}>{(texts as any)[language].about[7]}</p>
          </div>
        </div>
      </div>
      <div className={styles.carrousel}>
        <Carrousel />
      </div>
    </div>
  )
}
