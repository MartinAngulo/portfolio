import React, { useContext } from 'react';
import SettingsContext from '../contexts/SettingContext';
import texts from '../languages/texts';
import CardTech from './CardTech';

export default function Technologies() {
  const settings = useContext(SettingsContext);
  const language = settings[1];
  const isLight = settings[0] === 'light';

  return (
    <div>
      <h1>{(texts as any)[language].navbar[2]}</h1>
      <div>
        {(texts as any)[language].technologies?.map((e:string)=>(
          <div key={e}><CardTech name={e}/></div>
        ))}
      </div>
    </div>
  )
}
