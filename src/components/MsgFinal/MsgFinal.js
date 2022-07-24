import './style.css';

export default function MsgFinal({type, check, party, sad}){
    
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