import React from 'react';
import './style.css';
import AnswerButton from '../AnswerButton/AnswerButton';

const answersBtn = ['Não\nlembrei', 'Quase não\nlembrei', 'Zap!'];

export default function BoxQuestions({index, question, arrow}){
  
  const [stateQuestion, setStateQuestion] = React.useState(question.state);
  const [msgQuestion, setMsgQuestion] = React.useState(question.question);

  function checks(){
    if(msgQuestion === question.question) return false;
    else return true;
  }

  return (
        <li onClick={() => setStateQuestion(true)} className={`${stateQuestion ? 'questionOpen' : 'boxQuestions'}`}>
          <div className={`${stateQuestion ? 'esconder' : 'questionAligned'}`}>
            <p>Pergunta {index+1}</p>
            <ion-icon name="play-outline"></ion-icon>
          </div>
          <div className={`${stateQuestion ? 'open' : 'esconder'}`}>
            <p>{msgQuestion}</p>
            <img onClick={() => setMsgQuestion(question.answers)} className={`${checks() ? 'esconder' : 'arrowQuestion'}`} src={arrow}/>
            <div className={`${checks() ? 'answersButton' : 'esconder'}`}>
              {answersBtn.map(itens => <AnswerButton text={itens} key={itens}/>)}
            </div>
          </div>
      </li>
    );
}