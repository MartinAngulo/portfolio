import React from 'react';
import styles from "./Carrousel.module.css";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

export default function Carrousel() {
  return (
    <div className={styles.container}>
      <button className={styles.btn_left}>{"<"}</button>
      <img className={styles.imgs}></img>
      <button className={styles.btn_right}>{">"}</button>
    </div>
  )
}
