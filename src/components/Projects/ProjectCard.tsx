import React, { useState } from 'react';
import styles from './ProjectCard.module.css';

export default function ProjectCard(props: { name: string, imgs: Array<string>, id: number, open: (id: number) => void }) {

    const [selected, setSelected] = useState<number>(0);

    const handleClick = () => {
        props.open(props.id);
    }

    const handleChange = (index: number) => {
        setSelected(index);
    }

    const handleMove = (side: string) => {
        if (side === "left") {
            if (selected === 0) setSelected(props.imgs.length - 1);
            else setSelected(state => state - 1);
        }
        else {
            if (selected === props.imgs.length - 1) setSelected(0);
            else setSelected(state => state + 1);
        }
    }

    return (
        <div
            className={styles.container}
        >
            <button
                className={styles.btn_move_left}
                onClick={() => handleMove('left')}
            >{"<"}</button>
            <img
                alt='project photo'
                loading='lazy'
                className={styles.img}
                src={props.imgs[selected]}
                onClick={handleClick}
            ></img>
            <div className={styles.group_btns}>
                {
                    props.imgs?.map((img: string, index: number) => (
                        <p
                            className={selected == index ? styles.select : styles.noselect}
                            onClick={() => handleChange(index)}
                        > </p>
                    ))
                }
            </div>
            <button
                className={styles.btn_move_right}
                onClick={() => handleMove('right')}
            >{">"}</button>
            <div className={styles.background}>
                <h1 className={styles.name}>{props.name}</h1>
            </div>
        </div>
    )
}
