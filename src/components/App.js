import React from 'react';
import HomeScreen from "./HomeScreen/HomeScreen";
import QuestionsScreen from "./QuestionsScreen/QuestionsScreen";
import '../assets/css/reset.css';
import '../assets/css/main.css';

function App(){

    const arrayQuestions = [
        {deck1: [
            {question:"O que é JSX?", answers: "Uma extensão de linguagem do JavaScript", state: false},
            {question:"O React é _ ", answers: "Uma biblioteca JavaScript para construção de interfaces", state: false},
            {question:"Componentes devem iniciar com _ ", answers: "Letra maiúscula", state: false},
            {question:"Podemos colocar _ dentro do JSX", answers: "Expressões", state: false},
            {question:"O ReactDOM nos ajuda _", answers: "Interagindo com a DOM para colocar componentes React na mesma", state: false},
            {question:"Usamos o npm para _", answers: "Gerenciar os pacotes necessários e suas dependências", state: false},
            {question:"Usamos props para _", answers: "Passar diferentes informações para componentes", state: false},
            {question:"Usamos estado (state) para _", answers: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente", state: false}
        ], type: 'React 1'},
        {deck2: [
            {question:"O que é JSX?", answers: "Uma extensão de linguagem do JavaScript", state: false},
            {question:"O React é _ ", answers: "Uma biblioteca JavaScript para construção de interfaces", state: false},
            {question:"Componentes devem iniciar com _ ", answers: "Letra maiúscula", state: false},
            {question:"Podemos colocar _ dentro do JSX", answers: "Expressões", state: false},
            {question:"O ReactDOM nos ajuda _", answers: "Interagindo com a DOM para colocar componentes React na mesma", state: false},
            {question:"Usamos o npm para _", answers: "Gerenciar os pacotes necessários e suas dependências", state: false},
            {question:"Usamos props para _", answers: "Passar diferentes informações para componentes", state: false},
            {question:"Usamos estado (state) para _", answers: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente", state: false},
            {question:"O que é JSX?", answers: "Uma extensão de linguagem do JavaScript", state: false},
            {question:"O React é _ ", answers: "Uma biblioteca JavaScript para construção de interfaces", state: false},
            {question:"Componentes devem iniciar com _ ", answers: "Letra maiúscula", state: false},
            {question:"Podemos colocar _ dentro do JSX", answers: "Expressões", state: false},
            {question:"O ReactDOM nos ajuda _", answers: "Interagindo com a DOM para colocar componentes React na mesma", state: false},
            {question:"Usamos o npm para _", answers: "Gerenciar os pacotes necessários e suas dependências", state: false},
            {question:"Usamos props para _", answers: "Passar diferentes informações para componentes", state: false},
            {question:"Usamos estado (state) para _", answers: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente", state: false}
        ], type: 'React 2'},
        {deck3: [
            {question:"O que é JSX?", answers: "Uma extensão de linguagem do JavaScript", state: false},
            {question:"O React é _ ", answers: "Uma biblioteca JavaScript para construção de interfaces", state: false},
            {question:"Componentes devem iniciar com _ ", answers: "Letra maiúscula", state: false},
            {question:"Podemos colocar _ dentro do JSX", answers: "Expressões", state: false},
            {question:"O ReactDOM nos ajuda _", answers: "Interagindo com a DOM para colocar componentes React na mesma", state: false}
        ], type: 'React 3'},
    ];
    
    const [screen, setScreen] = React.useState(0);
    const [inputValue, setInputValue] = React.useState('');
    const [inputValueDeck, setInputValueDeck] = React.useState('');
    const [length, setLength] = React.useState(0);

    if(screen === 0){
        return (<><HomeScreen array={arrayQuestions} length={length} setLength={setLength} screen={setScreen} setInputValue={setInputValue} setInputValueDeck={setInputValueDeck}/></>);
    }else if(screen === 1){
        if(inputValueDeck === '1'){
            arrayQuestions[0].deck1.sort(() => Math.random() - 0.5);
            return (<><QuestionsScreen screen={setScreen} zap={inputValue} arrayQuestions={arrayQuestions[0].deck1} /></>);
        }
        if(inputValueDeck === '2'){
            arrayQuestions[1].deck2.sort(() => Math.random() - 0.5);
            return (<><QuestionsScreen screen={setScreen} zap={inputValue} arrayQuestions={arrayQuestions[1].deck2} /></>);
        }
        if(inputValueDeck === '3'){
            arrayQuestions[2].deck3.sort(() => Math.random() - 0.5);
            return (<><QuestionsScreen screen={setScreen} zap={inputValue} arrayQuestions={arrayQuestions[2].deck3} /></>);
        }       
    }
}
{/**/}
export default App;