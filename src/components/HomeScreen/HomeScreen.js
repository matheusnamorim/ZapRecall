import React from 'react';
import './style.css';
import LoginButton from '../LoginButton/LoginButton';

export default function HomeScreen({img, screen, length, setInputValue, inc, setInc}){

    const [inputValueAux, setInputValueAux] = React.useState('');
    if(inc === 0) alert('A meta de zaps deve ser um número entre 1 e ' + length);
    setInc(1);

    function checkValue(){
        setInputValue(inputValueAux);
        if(inputValueAux <= 0 || inputValueAux > length)  return false;
        else return true;
    }

    return (
        <div className="homeScreen">
        <img src={img}/>
        <p>ZapRecall</p>

        <input className={`${checkValue() ? 'inputZap inputValid' : 'inputZap'}`} value={inputValueAux} onChange={(e) => setInputValueAux(e.target.value)} type='number' placeholder='Digite sua meta de zaps...'/>

        <LoginButton type={checkValue()} screen={screen}/>
        
      </div>
    );
}