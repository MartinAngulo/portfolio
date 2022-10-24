import React, { useContext, useState } from 'react';
import SettingsContext from '../../contexts/SettingContext';
import texts from '../../languages/texts';
import info from './project_info';
import styles from './Projects.module.css';
import ProjectCard from './ProjectCard';
import Viewer from './Viewer';
import { useNavigate } from 'react-router-dom';

const background = {
  spanish: [styles.container_spanish_light, styles.container_spanish_dark],
  english: [styles.container_english_light, styles.container_english_dark]
}

interface project {
  name: string,
  link: string,
  repo: string,
  description: string,
  captures: Array<string>,
}

export default function Projects() {

  const navigate = useNavigate();

  const settings = useContext(SettingsContext);
  const language = settings[1];
  const isLight = settings[0] === 'light';

  const [isOpenIMG, setOpenIMG] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(0);

  const handleOpen = (id: number) => {
    setSelected(id);
    setOpenIMG(true);
  }
  const handleClose = () => {
    setOpenIMG(false);
  }

  return (
    <div className={isLight ? (background as any)[language][0] : (background as any)[language][1]}>
      <button
      className={isLight ? styles.btn_light : styles.btn_dark}
      onClick={()=>navigate('/portfolio')}
      >{(texts as any)[language].projects[1]}</button>
      <div className={styles.grid}>
        {
          (info as any)[language]?.map((p: project, i: number) => (
            <ProjectCard name={p.name} id={i} imgs={p.captures} open={handleOpen} />
          ))
        }
      </div>
      {
        isOpenIMG
        &&
        <Viewer data={(info as any)[language][selected]} close={handleClose} />
      }
    </div>
  )
}
