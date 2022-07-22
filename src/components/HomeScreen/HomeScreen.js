import './style.css';

export default function HomeScreen({img}){
    return (
        <div className="homeScreen">
        <img src={img}/>
        <p>ZapRecall</p>
        <div className="loginRecall">
            <p>Iniciar Recall!</p>
        </div>
      </div>
    );
}