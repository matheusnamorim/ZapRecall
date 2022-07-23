import './style.css';
import BoxQuestions from "../BoxQuestions/BoxQuestions";
import React from 'react';

function QuestionsScreen({img, arrayQuestions, arrow}){
    const questions = [...arrayQuestions];
    const [answersNumbers, setAnswersNumbers] = React.useState(0);

    function incAnswers(){
      setAnswersNumbers(answersNumbers + 1);
    }

    return(
        <div className="questionScreen">
        <div className="navBar">
          <img src={img}/>
          <p>ZapRecall</p>
        </div>
    
        <ul className="questions">
          {questions.map((itens, index) => (<BoxQuestions question={itens} index={index} arrow={arrow} cont={incAnswers} key={index} />))}
        </ul>
        
        <div className="footer">
          <p>{answersNumbers}/{arrayQuestions.length} CONCLUÍDOS</p>
        </div>
      </div>          
    );
}

export default QuestionsScreen;