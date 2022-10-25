import React, { useContext } from 'react';
import SettingsContext from '../../contexts/SettingContext';
import texts from '../../languages/texts';


export default function CardTech(props: { name: string, active:boolean }) {
  const settings = useContext(SettingsContext);
  const language = settings[1];


  return (
    <div style={{ display: "flex", gap: "10px", width:"150px" }}>
      <div style={{width:"60px", height:"60px", borderRadius:"10px", backgroundColor:"white", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <img
        alt='tech logo'
        loading='lazy'
        style={{ backgroundColor: "white", width:"35px" }} src={(texts as any)[language].technologies[props.name][1]}></img>
      </div>
      <p style={{color: props.active?"white":"#526588"}}>
        {props.name}
      </p>
    </div>
  )
}
