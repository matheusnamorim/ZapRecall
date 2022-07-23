import './style.css';

function AnswerButton({text, checksAnswer}){
    return (
        <>
        <div className='btn' onClick={() => checksAnswer(text)}><h1>{text}</h1></div>
        </>
    );
}

export default AnswerButton;