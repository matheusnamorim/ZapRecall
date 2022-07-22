import './style.css';

export default function BoxQuestions({index, teste}){
    return (
        <li onClick={() => teste()} className="boxQuestions">
        <p>Pergunta {index+1}</p>
        <ion-icon name="play-outline"></ion-icon>
      </li>
    );
}