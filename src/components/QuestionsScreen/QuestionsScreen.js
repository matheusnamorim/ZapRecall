import './style.css';
import BoxQuestions from "../BoxQuestions/BoxQuestions";
import React from 'react';

function QuestionsScreen({img, arrayQuestions}){
    const [questions, setQuestions] = React.useState([...arrayQuestions]);

    return(
        <div className="questionScreen">
        <div className="navBar">
          <img src={img}/>
          <p>ZapRecall</p>
        </div>
    
        <ul className="questions">
          {questions.map((itens, index) => (<BoxQuestions question={itens} index={index} key={index} />))}
        </ul>
        
        <div className="footer">
          <p>0/4 CONCLUÍDOS</p>
        </div>
      </div>          
    );
}

export default QuestionsScreen;