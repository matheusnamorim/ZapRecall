import React from 'react';
import './style.css';

export default function BoxQuestions({index, question, arrow}){
  
  const [stateQuestion, setStateQuestion] = React.useState(question.state);

  return (
        <li onClick={() => setStateQuestion(true)} className={`${stateQuestion ? 'questionOpen' : 'boxQuestions'}`}>
          <div className={`${stateQuestion ? 'esconder' : 'questionAligned'}`}>
            <p>Pergunta {index+1}</p>
            <ion-icon name="play-outline"></ion-icon>
          </div>
          <div className={`${stateQuestion ? 'questionOpen' : 'esconder'}`}>
            <p>{question.text}</p>
            <img className='arrowQuestion' src={arrow}/>
          </div>
      </li>
    );
}