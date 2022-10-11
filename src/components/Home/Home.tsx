import React, { Fragment, useContext } from 'react';
import SettingsContext from '../../contexts/SettingContext';
import styles from './Home.module.css';
import texts from '../../languages/texts';
import About from '../About/About';
import Technologies from '../Technologies';
import Contact from '../Contact';

export default function Home() {
  const settings = useContext(SettingsContext);
  const isLight = settings[0] === 'light';
  const language = settings[1];

  return (
    <Fragment>
      <div className={isLight ? styles.container_light : styles.container_dark}>
        <div>
          <h1 className={isLight ? styles.name_light : styles.name_dark}>{(texts as any)[language].name}<br />{(texts as any)[language].lastname}</h1>
          <h3 className={isLight ? styles.tittle_light : styles.tittle_dark}>{(texts as any)[language].tittle}</h3>
        </div>
      </div>
      <div id="About"><About /></div>
      <div id="Tech"><Technologies /></div>
      <div id="Contact"><Contact /></div>
    </Fragment>
  )
}

