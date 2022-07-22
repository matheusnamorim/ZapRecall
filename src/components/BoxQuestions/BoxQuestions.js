import React from 'react';
import './style.css';

export default function BoxQuestions({index, question}){
  
  const [stateQuestion, setStateQuestion] = React.useState(question.state);

  function checkClickQuestion(){
    question.state = !stateQuestion;
    setStateQuestion(question.state);
  }  
  
  return (
        <li onClick={() => checkClickQuestion()} className={`${stateQuestion ? 'questionOpen' : 'boxQuestions'}`}>
          <div className={`${stateQuestion ? 'esconder' : 'questionClosed'}`}>
          <p>Pergunta {index+1}</p>
          <ion-icon name="play-outline"></ion-icon>
          </div>
      </li>
    );
}