import React, { useState } from 'react';
import styles from './Viewer.module.css';

interface project {
    name: string,
    link: string,
    repo: string,
    description: string,
    captures: Array<string>,
}

export default function Viewer(props: { data: project, close: () => void }) {

    const [selected, setSelected] = useState<number>(0);

    const handleChange = (index: number) => {
        setSelected(index);
    }

    const handleMove = (side: string) => {
        if (side === "left") {
            if (selected === 0) setSelected(props.data.captures.length - 1);
            else setSelected(state => state - 1);
        }
        else {
            if (selected === props.data.captures.length - 1) setSelected(0);
            else setSelected(state => state + 1);
        }
    }

    return (
        <div className={styles.overlay}>
            <button className={styles.close} onClick={props.close}>X</button>
            <div className={styles.container}>
                <button
                    className={styles.btn_move_left}
                    onClick={() => handleMove('left')}
                >{"<"}</button>
                <img
                    className={styles.img}
                    src={props.data.captures[selected]}
                ></img>
                <div className={styles.group_btns}>
                    {
                        props.data.captures?.map((img: string, index: number) => (
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
            </div>
            <div className={styles.info}>
                <h1 style={{ margin: "0 0 5px 0", padding: "0" }}>{props.data.name}</h1>
                <a>{props.data.description}</a>
                <div style={{ marginTop: "10px", display: "flex", gap:"10px", alignItems:"center" }}>
                    <img style={{ height: "20px" }} src={require('../../img/web.png')}></img>
                    <a
                    style={{textDecoration:"none", color:"black", fontWeight:"bold"}}
                    href={props.data.link} rel="noreferrer noopener" target="_blank"
                    >{props.data.link}</a>
                </div>
                <div style={{ marginTop: "10px", display: "flex", gap:"10px", alignItems:"center" }}>
                    <img style={{ height: "20px" }} src={require('../../img/git.png')}></img>
                    <a
                    style={{textDecoration:"none", color:"black", fontWeight:"bold"}}
                    href={props.data.repo} rel="noreferrer noopener" target="_blank"
                    >{props.data.repo}</a>
                </div>
            </div>
        </div>
    )
}
