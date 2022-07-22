import './style.css';
import BoxQuestions from "../BoxQuestions/BoxQuestions";

const array = ["O que é isso", "O que é isso2", "O que é isso3", "O que é isso4", "O que é isso5"];

function QuestionsScreen({img}){

    array.sort(() => Math.random() - 0.5);

    function teste(){
      alert("ta funfanfo");
      return;
    }

    return(
        <div className="questionScreen">
        <div className="navBar">
          <img src={img}/>
          <p>ZapRecall</p>
        </div>
    
        <ul className="questions">
          {array.map((itens, index) => <BoxQuestions index={index} key={index} teste={teste}/>)}
        </ul>
        
        <div className="footer">
          <p>0/4 CONCLUÍDOS</p>
        </div>
      </div>          
    );
}

export default QuestionsScreen;