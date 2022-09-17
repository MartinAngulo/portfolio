import React, { useState, useContext} from 'react';
import texts from '../languages/texts';
import styles from './Navbar.module.css';
import ThemeContext from '../contexts/ThemeContext';


export default function Navbar(props: { switchTheme: { (): void }, switchLanguage: { (): void } }) {

  const [language, setLanguage] = useState<string>('spanish')
  
  const theme = useContext(ThemeContext);
  const isLight = theme[0] == 'light';

  const onClick = () => {
    props.switchTheme();
  }
  const onChange = (e: any) => {
    setLanguage(e.target.value);
    props.switchLanguage();
  }
  return (
    <div className={styles.navbar}>
      <div className={isLight?styles.options_light:styles.options_dark}>
        <p>{(texts as any)[language].navbar[0]}</p>
        <p>{(texts as any)[language].navbar[1]}</p>
        <p>{(texts as any)[language].navbar[2]}</p>
        <p>{(texts as any)[language].navbar[3]}</p>
      </div>
      <div className={styles.buttonGroup}>
        <button onClick={onClick}>Switch theme</button>
        <select value={language} onChange={onChange}>
          <option value='spanish'>Español</option>
          <option value='english'>English</option>
        </select>
      </div>
    </div>
  )
}
