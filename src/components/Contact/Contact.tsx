import React, { useContext } from 'react';
import SettingsContext from '../../contexts/SettingContext';
import texts from '../../languages/texts';
import wsp from '../../img/wsp.png';
import email from '../../img/email.png';
import link from '../../img/link.png';
import git from '../../img/git.png';
import styles from './Contact.module.css';

const background = {
  spanish: [styles.container_spanish_light, styles.container_spanish_dark],
  english : [styles.container_english_light, styles.container_english_dark]
}

export default function Contact() {
  const settings = useContext(SettingsContext);
  const isLight = settings[0] === 'light';
  const language = settings[1];

  return (
    <div className={isLight ? (background as any)[language][0] : (background as any)[language][1]}>
      <h1 className={isLight ? styles.tittle_light : styles.tittle_dark}>
        {(texts as any)[language].contact[0]}</h1>
      <div className={isLight ? styles.contact_light : styles.contact_dark}>
        <div className={styles.social}>
          <h2>{(texts as any)[language].contact[1]}</h2>
          <div className={styles.links}>
            <img style={{width:"3vw"}} title='whatsapp' src={wsp}></img>
            <a href='https://api.whatsapp.com/send/?phone=51931739982&text=Vi+tu+portafolio+y+me+interesa+saber+mas+de+ti&type=phone_number&app_absent=0' rel="noreferrer noopener" target="_blank">+51 931739982</a>
          </div>
          <div className={styles.links}>
            <img style={{width:"3vw"}} title='email' src={email}></img>
            <a href='mailto: martinangulo1194@gmail.com' rel="noreferrer noopener">martinangulo1194@gmail.com</a>
          </div>
        </div >
        <div className={styles.social}>
          <h2>{(texts as any)[language].contact[2]}</h2>
          <div className={styles.links}>
            <img style={{width:"3vw"}} title='LinkedIn' src={link}></img>
            <a href='https://www.linkedin.com/in/martinangulo1194/' rel="noreferrer noopener" target="_blank">https://www.linkedin.com/in/martinangulo1194/</a>
          </div>
          <div className={styles.links}>
            <img style={{width:"3vw"}} title='Github' src={git}></img>
            <a href='https://github.com/MartinAngulo' rel="noreferrer noopener" target="_blank">https://github.com/MartinAngulo</a>
          </div>
        </div>
      </div>
    </div>
  )
}
