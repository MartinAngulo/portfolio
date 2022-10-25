import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styles from './Viewer.module.css';

export default function Viewer(props: { close: () => void, id: number, open: (id: number) => void }) {

    const handleLeft = () => {
        if (props.id > 1) {
            props.open(props.id - 1);
        }
    }
    const handleRight = () => {
        if (props.id < 50) {
            props.open(props.id + 1);
        }
    }
    return (
        <div className={styles.overlay}>
            <button className={styles.left_btn} onClick={handleLeft}>{"<"}</button>
            {
                props.id === 0 ?
                    <img 
                    alt='loading photo'
                    loading='lazy'
                    style={{ width: "500px" }} src={require('../../img/loading.gif')}></img>
                    :
                    <img
                        loading='lazy'
                        alt='Viewer'
                        className={styles.img}
                        src={require(`../../img/carrousel/img-${props.id}.jpg`)}
                    ></img>}
            <button className={styles.right_btn} onClick={handleRight}>{">"}</button>
            <button className={styles.close} onClick={props.close}>X</button>
        </div>
    )
}
