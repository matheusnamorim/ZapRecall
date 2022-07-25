import React from 'react';
import './style.css';
import LoginButton from '../LoginButton/LoginButton';
import img from '../../assets/img/logo.svg';

export default function HomeScreen({array, screen, setInputValue, setInputValueDeck, length, setLength}){

    
    const [inputValueAux, setInputValueAux] = React.useState('');
    const [deckAux, setDeckAux] = React.useState('');

    function checkValue(){
        setInputValue(inputValueAux);

        if(deckAux === '1') setLength(array[0].deck1.length);
        if(deckAux === '2') setLength(array[1].deck2.length);
        if(deckAux === '3') setLength(array[2].deck3.length);

        if(inputValueAux <= 0 || inputValueAux > length)  return false;
        else return true;
    }

    function checkDeck(){
        setInputValueDeck(deckAux);
        if(deckAux != '') return true; 
        else return false
    }

    return (
        <div className="homeScreen">
        <img src={img}/>
        <p>ZapRecall</p>

        <div className={`${checkDeck() ? '' : 'hidden'}`}>
        <input className={`${checkValue() ? 'inputZap inputValid' : 'inputZap'}`} value={inputValueAux} onChange={(e) => setInputValueAux(e.target.value)} type='number' placeholder='Digite sua meta de zaps...'/>
        </div>

        <select name='decks' className={`${checkDeck() ? 'hidden' : 'decks'}`} value={deckAux} onChange={(e) => setDeckAux(e.target.value)}>
            <option value=''>Escolha seu deck</option>
            <option value='1'>{array[0].type} (Nº flashCards {array[0].deck1.length})</option>
            <option value='2'>{array[1].type} (Nº flashCards {array[1].deck2.length})</option>
            <option value='3'>{array[2].type} (Nº flashCards {array[2].deck3.length})</option>
        </select>

        <LoginButton type={checkValue()} screen={screen}/>


        
      </div>
    );
}