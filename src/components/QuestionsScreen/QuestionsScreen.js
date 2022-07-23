import './style.css';
import BoxQuestions from "../BoxQuestions/BoxQuestions";
import AnswerIcons from '../AnswerIcons/AnswerIcons';
import React from 'react';

function QuestionsScreen({img, arrayQuestions, arrow}){
    const questions = [...arrayQuestions];
    const [answersNumbers, setAnswersNumbers] = React.useState(0);
    const [array, setArray] = React.useState('');
    const footerIcon = [...array];

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
          {questions.map((itens, index) => (<BoxQuestions arrayIcon={array} setArray={setArray} question={itens} index={index} arrow={arrow} cont={incAnswers} key={index} />))}
        </ul>
        
        <div className="footer">
          <p>{answersNumbers}/{arrayQuestions.length} CONCLUÍDOS</p>
          <div className='icon'>
          {footerIcon.map(itens => <AnswerIcons type={itens}/>)}
          </div>
        </div>
      </div>          
    );
}

export default QuestionsScreen; 