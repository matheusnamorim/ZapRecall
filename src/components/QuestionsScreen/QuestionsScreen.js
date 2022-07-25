import './style.css';
import BoxQuestions from "../BoxQuestions/BoxQuestions";
import Footer from '../Footer/Footer';
import React from 'react';
import img from '../../assets/img/logo.svg';

function QuestionsScreen({arrayQuestions, screen, zap}){
  
    const questions = [...arrayQuestions];
    let start = false;
    const [typeMsg, setTypeMsg] = React.useState(0)
    const [answersNumbers, setAnswersNumbers] = React.useState(0);
    const [checkFinal, setCheckFinal] = React.useState(start);
    const [array, setArray] = React.useState('');
    const footerIcon = [...array];
    let footerIconAux = [];
    let checkZap = [];

    function incAnswers(){
      setAnswersNumbers(answersNumbers + 1);
      if((answersNumbers+1) === arrayQuestions.length) {
        start = !checkFinal;
        setCheckFinal(start);
        footerIconAux = footerIcon.filter((itens) => itens !== 1);
        checkZap = footerIcon.filter(itens => itens === 3);
      }
      if(footerIconAux.length !== 0 && footerIcon.length !==0){
        if((footerIconAux.length === footerIcon.length) && (checkZap.length >= zap)) setTypeMsg(1);
      } else setTypeMsg(2);
    }

    return(

        <div className="questionScreen">
        <div className="navBar">
          <img src={img}/>
          <p>ZapRecall</p>
        </div>
    
        <ul className={`${checkFinal ? 'questions extend' : 'questions'}`}>
          {questions.map((itens, index) => (<BoxQuestions arrayIcon={array} setArray={setArray} question={itens} index={index} cont={incAnswers}/>))}
        </ul>
        
        <Footer checkFinal={checkFinal} typeMsg={typeMsg} answersNumbers={answersNumbers} arrayQuestions={arrayQuestions} footerIcon={footerIcon} screen={screen}/>

      </div>          
    );
}

export default QuestionsScreen; 