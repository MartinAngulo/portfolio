import React, { Fragment, useContext } from 'react';
import styles from './Home.module.css';

interface HomeProps {
  state: any;
  setState: Function;
}

export default function Home(props:HomeProps) {
  
  const {state, setState} = props;
  const onClick = ()=>{
    setState({...state, theme: state.theme?false:true})
  }
  return (
    <Fragment>
      <div className={state.theme?styles.container_light:styles.container_dark}>
        <h1 className={state.theme?styles.name_light:styles.name_dark}>Martin<br />Angulo Gasco</h1>
        <h3 className={state.theme?styles.tittle_light:styles.tittle_dark}>Desarrollador React.js & Node.js</h3>
        <button onClick={onClick}>Change</button>
      </div>
    </Fragment>
  )
}
