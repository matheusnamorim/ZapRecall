import React from 'react';
import './style.css';
import AnswerButton from '../AnswerButton/AnswerButton';

const answersBtn = ['Não\nlembrei', 'Quase não\nlembrei', 'Zap!'];

export default function BoxQuestions({index, question, arrow, cont}){
  
  const [stateQuestion, setStateQuestion] = React.useState(question.state);
  const [lockFunction, setLockFunction] = React.useState(false);
  const [btn1, setBtn1] = React.useState(false);
  const [btn2, setBtn2] = React.useState(false);
  const [btn3, setBtn3] = React.useState(false);
  const [stateClass, setStateClass] = React.useState('pDefault');
  const [msgQuestion, setMsgQuestion] = React.useState(question.question);

  function checks(){
    if(msgQuestion === question.question) return false;
    else return true;
  }

  function back(lock){
    if(lockFunction === false){
      if(stateQuestion !== true){
        question.state = !stateQuestion;
        setStateQuestion(question.state);
      }
      if(lock !== undefined){
        cont();
        question.state = !stateQuestion;
        setStateQuestion(question.state);
        setLockFunction(true);
        if(lock === 'Não\nlembrei') {
          setBtn1(true); 
          setStateClass('style1');
        }
        if(lock === 'Quase não\nlembrei') {
          setBtn2(true); 
          setStateClass('style2');
        }
        if(lock === 'Zap!') {
          setBtn3(true);
          setStateClass('style3'); 
        }
      }
    }
  }

  return (
        <li onClick={() => back()} className={`${stateQuestion ? 'questionOpen' : 'boxQuestions'}`}>
          <div className={`${stateQuestion ? 'esconder' : 'questionAligned'}`}>
            <p className={stateClass}>Pergunta {index+1}</p>
            <ion-icon class={`${lockFunction ? 'md hydrated esconder' : 'md hydrated'}`}name="play-outline"></ion-icon>
            <ion-icon class={`${btn1 ? 'md hydrated style1' : 'md hydrated esconder'}`} name="close-circle"></ion-icon>
            <ion-icon class={`${btn2 ? 'md hydrated style2' : 'md hydrated esconder'}`} name="help-circle"></ion-icon>
            <ion-icon class={`${btn3 ? 'md hydrated style3' : 'md hydrated esconder'}`} name="checkmark-circle"></ion-icon>
          </div>
          <div className={`${stateQuestion ? 'open' : 'esconder'}`}>
            <p>{msgQuestion}</p>
            <img onClick={() => setMsgQuestion(question.answers)} className={`${checks() ? 'esconder' : 'arrowQuestion'}`} src={arrow}/>
            <div className={`${checks() ? 'answersButton' : 'esconder'}`}>
              {answersBtn.map(itens => <AnswerButton text={itens} key={itens} teste={back}/>)}
            </div>
          </div>
      </li>
    );
}