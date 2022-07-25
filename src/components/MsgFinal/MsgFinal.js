import './style.css';
import party from '../../assets/img/party.png';
import sad from '../../assets/img/sad.png'

export default function MsgFinal({type, check}){

    if(type === 1 && check === true){
        return (
            <>
            <div className='text'>
                <img src={party}/>
                <p>Parabéns!</p>
            </div>

                <p className="msg">Você não esqueceu de<br/>nenhum flashcard!</p>
            </>
        );
    }else if(type === 2 && check === true){
        return (
            <>
            <div className='text'>
                <img src={sad}/>
                <p>Putz...</p>
            </div>
            <p className="msg">Ainda faltam alguns...<br/>Mas não desanime!</p>
            </>
        );
    }
    return <></>;
}