import BoxQuestions from "./BoxQuestions";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function QuestionsScreen(){
    return(
        <div class="questionScreen">
        <div class="navBar">
          <img src="assets/logo.svg" alt="logo-pequeno" />
          <p>ZapRecall</p>
        </div>
        
        <div>
        {array.map(index => <BoxQuestions index={index}/>)}
        </div>
        
        <div class="footer">
          <p>0/4 CONCLUÍDOS</p>
        </div>
      </div>          
    );
}

export default QuestionsScreen;