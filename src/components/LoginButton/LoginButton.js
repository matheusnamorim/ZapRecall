import './style.css';

function LoginButton({type, screen}){
    if(type === true){
        return(
            <>
            <div className='loginRecall'>
            <p onClick={() => screen(1)}>Iniciar Recall!</p>
            </div>
            </>
        );
    }else{
        return (
            <>
            <div className='invalidValue'>
            <p>Iniciar Recall!</p>
            </div>
            </>
        );
    }
}

export default LoginButton;