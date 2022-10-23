import React, { Fragment, useContext } from 'react';
import SettingsContext from '../../contexts/SettingContext';
import styles from './Home.module.css';
import texts from '../../languages/texts';
import About from '../About/About';
import Technologies from '../Tech/Technologies';
import Contact from '../Contact/Contact';

const background = {
  spanish: [styles.container_spanish_light, styles.container_spanish_dark],
  english : [styles.container_english_light, styles.container_english_dark]
}

export default function Home() {
  const settings = useContext(SettingsContext);
  const isLight = settings[0] === 'light';
  const language = settings[1];

  return (
    <Fragment>
      <div className={isLight ? (background as any)[language][0] : (background as any)[language][1]}>
          <h1 className={isLight ? styles.name_light : styles.name_dark}>{(texts as any)[language].name}<br />{(texts as any)[language].lastname}</h1>
          <h3 className={isLight ? styles.tittle_light : styles.tittle_dark}>{(texts as any)[language].tittle}</h3>
      </div>
      <div id="About"><About /></div>
      <div id="Tech"><Technologies /></div>
      <div id="Contact"><Contact /></div>
    </Fragment>
  )
}

