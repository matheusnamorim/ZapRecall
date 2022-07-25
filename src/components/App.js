import React from 'react';
import HomeScreen from "./HomeScreen/HomeScreen";
import QuestionsScreen from "./QuestionsScreen/QuestionsScreen";
import '../assets/css/reset.css';
import '../assets/css/main.css';
import logo from '../assets/img/logo.svg';
import arrow from '../assets/img/Vector.svg';
import party from '../assets/img/party.png';
import sad from '../assets/img/sad.png';

function App(){

    const arrayQuestions = [
        {question:"O que é JSX?", answers: "Uma extensão de linguagem do JavaScript", state: false},
        {question:"O React é _ ", answers: "Uma biblioteca JavaScript para construção de interfaces", state: false},
        {question:"Componentes devem iniciar com _ ", answers: "Letra maiúscula", state: false},
        {question:"Podemos colocar _ dentro do JSX", answers: "Expressões", state: false},
        {question:"O ReactDOM nos ajuda _", answers: "Interagindo com a DOM para colocar componentes React na mesma", state: false},
        {question:"Usamos o npm para _", answers: "Gerenciar os pacotes necessários e suas dependências", state: false},
        {question:"Usamos props para _", answers: "Passar diferentes informações para componentes", state: false},
        {question:"Usamos estado (state) para _", answers: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente", state: false}
    ];
    arrayQuestions.sort(() => Math.random() - 0.5);
    const [screen, setScreen] = React.useState(0);

    if(screen === 0){
        return (<><HomeScreen img={logo} screen={setScreen}/></>);
    }else if(screen === 1){
        return (<><QuestionsScreen img={logo} screen={setScreen} party={party} sad={sad} arrayQuestions={arrayQuestions} arrow={arrow}/></>);
    }
}
{/**/}
export default App;