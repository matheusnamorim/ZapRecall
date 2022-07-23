import React from 'react';
import './style.css';
import AnswerButton from '../AnswerButton/AnswerButton';
import AnswerIcons from '../AnswerIcons/AnswerIcons';

const answersBtn = ['Não\nlembrei', 'Quase não\nlembrei', 'Zap!'];

export default function BoxQuestions({index, question, arrow, cont}){
  
  const [stateQuestion, setStateQuestion] = React.useState(question.state);
  const [lockFunction, setLockFunction] = React.useState(false);
  const [icon, setIcon] = React.useState(0);
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
          setIcon(1);
          setStateClass('style1');
        }
        if(lock === 'Quase não\nlembrei') {
          setIcon(2);
          setStateClass('style2');
        }
        if(lock === 'Zap!') {
          setIcon(3);
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
            <AnswerIcons type={icon}/>
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