import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SettingsContext from '../../contexts/SettingContext';
import texts from '../../languages/texts';
import CardTech from './CardTech';
import styles from './Technologies.module.css';

const techs = {
  "HTML5": styles.wheel_html,
  "React.js": styles.wheel_react,
  "CSS": styles.wheel_css,
  "Tailwind": styles.wheel_tailwind,
  'Node.js': styles.wheel_node,
  'Redux.js': styles.wheel_redux,
  'JavaScript': styles.wheel_js,
  'Sequelize': styles.wheel_sequelize,
  'postgreSQL': styles.wheel_postgres,
  'MongoDB': styles.wheel_mongo,
  'Mongoose': styles.wheel_mongoose,
  'Git': styles.wheel_git,
  'TypeScript': styles.wheel_ts,
  "Corel":styles.wheel_corel,
}

const background = {
  spanish: [styles.container_spanish_light, styles.container_spanish_dark],
  english : [styles.container_english_light, styles.container_english_dark]
}

export default function Technologies() {
  const settings = useContext(SettingsContext);
  const language = settings[1];
  const isLight = settings[0] === 'light';

  const [active, setActive] = useState<string>("HTML5");

  const navigate = useNavigate();
  const onClick = () => {
    navigate('/projects')
  }

  const handleActive = (e: string) => {
    setActive(e);
  }

  return (
    <div className={isLight ? (background as any)[language][0] : (background as any)[language][1]}>
      <div className={isLight ? styles.tech_wheel_light : styles.tech_wheel_dark}>
        <img
        loading='lazy'
        className={(techs as any)[active]} src={(texts as any)[language].wheel} alt="wheel_tech" />
      </div>
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
