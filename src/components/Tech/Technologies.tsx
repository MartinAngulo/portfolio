import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SettingsContext from '../../contexts/SettingContext';
import texts from '../../languages/texts';
import CardTech from './CardTech';
import styles from './Technologies.module.css';

export default function Technologies() {
  const settings = useContext(SettingsContext);
  const language = settings[1];
  const isLight = settings[0] === 'light';

  const [active, setActive] = useState<string>("HTML 5");

  const navigate = useNavigate();
  const onClick = () => {
    navigate('/projects')
  }

  const handleActive = (e: string) => {
    setActive(e);
  }

  return (
    <div className={isLight ? styles.container_light : styles.container_dark}>
      <span className={styles.tech_wheel}>
      </span>
      <div className={styles.tech}>
        <h1 className={isLight ? styles.tittle_light : styles.tittle_dark}>{(texts as any)[language].tech[0]}</h1>
        <div className={styles.grid}>
          {Object.keys((texts as any)[language].technologies)?.map((e: string) => (
            <div onClick={() => { handleActive(e) }} style={{ width: "200px", cursor: "pointer", backgroundColor: active === e ? "#384873" : 'transparent', padding: "8px", borderRadius: "10px" }} key={e}><CardTech name={e} active={active === e ? true : false} /></div>
          ))}
          <button className={isLight ? styles.btn_light : styles.btn_dark} onClick={onClick}>{(texts as any)[language].tech[1]}</button>
        </div>
      </div>
    </div>
  )
}
