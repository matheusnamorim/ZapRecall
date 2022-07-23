import './style.css';

function AnswerButton({text, teste}){
    return (
        <>
        <div className='btn' onClick={() => teste(text)}><h1>{text}</h1></div>
        </>
    );
}

export default AnswerButton;