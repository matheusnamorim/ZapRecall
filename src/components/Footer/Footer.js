import './style.css'
import AnswerIcons from '../AnswerIcons/AnswerIcons';
import MsgFinal from '../MsgFinal/MsgFinal';

function Footer({checkFinal, typeMsg, answersNumbers, arrayQuestions, footerIcon, screen}){
    return (
        <div className={`${checkFinal ? 'footer final' : 'footer'}`}>
            <MsgFinal type={typeMsg} check={checkFinal}/>
            <p>{answersNumbers}/{arrayQuestions.length} CONCLUÍDOS</p>
            <div className='icon'>
                {footerIcon.map(itens => <AnswerIcons type={itens}/>)}
            </div>
            <div className={`${checkFinal ? 'reset' : 'hidden'}`} onClick={() => screen(0)}>
                <p>REINICIAR RECALL</p>
            </div>
      </div>
    );
}

export default Footer;