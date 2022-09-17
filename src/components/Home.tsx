import React, { Fragment, useContext, useState } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import styles from './Home.module.css';
import texts from '../languages/texts';

// interface HomeProps{
//   switchTheme:{():void}
// }

export default function Home() {
  const theme = useContext(ThemeContext);
  const isLight = theme[0] == 'light';

  return (
    <Fragment>
      <div className={isLight ? styles.container_light : styles.container_dark}>
        <div>
          <h1 className={isLight ? styles.name_light : styles.name_dark}>Martin<br />Angulo Gasco</h1>
          <h3 className={isLight ? styles.tittle_light : styles.tittle_dark}>Desarrollador React.js & Node.js</h3>
        </div>
      </div>
    </Fragment>
  )
}
