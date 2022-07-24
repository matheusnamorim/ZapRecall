import './style.css';
import BoxQuestions from "../BoxQuestions/BoxQuestions";
import AnswerIcons from '../AnswerIcons/AnswerIcons';
import MsgFinal from '../MsgFinal/MsgFinal';
import React from 'react';

function QuestionsScreen({img, arrayQuestions, arrow, party, sad}){
  
    const questions = [...arrayQuestions];
    let start = false;
    const [typeMsg, setTypeMsg] = React.useState(0)
    const [answersNumbers, setAnswersNumbers] = React.useState(0);
    const [checkFinal, setCheckFinal] = React.useState(start);
    const [array, setArray] = React.useState('');
    const footerIcon = [...array];
    let footerIconAux = [];

    function incAnswers(){
      setAnswersNumbers(answersNumbers + 1);
      if((answersNumbers+1) === arrayQuestions.length) {
        start = !checkFinal;
        setCheckFinal(start);
        footerIconAux = footerIcon.filter((itens) => itens !== 1);
      }
      if((footerIconAux.length !== 0 && footerIcon.length !==0 ) && (footerIconAux.length === footerIcon.length)) setTypeMsg(1);
      else setTypeMsg(2);
    }

    return(
        <div className="questionScreen">
        <div className="navBar">
          <img src={img}/>
          <p>ZapRecall</p>
        </div>
    
        <ul className="questions">
          {questions.map((itens, index) => (<BoxQuestions arrayIcon={array} setArray={setArray} question={itens} index={index} arrow={arrow} cont={incAnswers} key={index} />))}
        </ul>
        
        <div className={`${checkFinal ? 'footer final' : 'footer'}`}>
          <MsgFinal type={typeMsg} check={checkFinal} party={party} sad={sad}/>
          <p>{answersNumbers}/{arrayQuestions.length} CONCLUÍDOS</p>
          <div className='icon'>
          {footerIcon.map(itens => <AnswerIcons type={itens}/>)}
          </div>
        </div>
      </div>          
    );
}

export default QuestionsScreen; 