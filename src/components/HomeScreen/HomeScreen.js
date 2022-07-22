import './style.css';

export default function HomeScreen({img, screen}){

    return (
        <div className="homeScreen">
        <img src={img}/>
        <p>ZapRecall</p>
        <div className="loginRecall">
            <p onClick={() => screen(1)}>Iniciar Recall!</p>
        </div>
      </div>
    );
}