import React from 'react';
import HomeScreen from "./HomeScreen/HomeScreen";
import QuestionsScreen from "./QuestionsScreen/QuestionsScreen";
import '../assets/css/reset.css';
import '../assets/css/main.css';
import logo from '../assets/img/logo.svg';

function App(){

    const arrayQuestions = [
        {text:"O que é isso", state: false},
        {text:"O que é isso2", state: false},
        {text:"O que é isso3", state: false},
        {text:"O que é isso4", state: false},
        {text:"O que é isso5", state: false},
        {text:"O que é isso6", state: false},
        {text:"O que é isso7", state: false},
        {text:"O que é isso8", state: false},
        {text:"O que é isso9", state: false},
        {text:"O que é isso10", state: false}
    ];
    arrayQuestions.sort(() => Math.random() - 0.5);

    const [screen, setScreen] = React.useState(0);

    if(screen === 0){
        return (<><HomeScreen img={logo} screen={setScreen}/></>);
    }else if(screen === 1){
        return (<><QuestionsScreen img={logo} arrayQuestions = {arrayQuestions}/></>);
    }
}
{/**/}
export default App;