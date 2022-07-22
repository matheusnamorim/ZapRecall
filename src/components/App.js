import HomeScreen from "./HomeScreen/HomeScreen";
import QuestionsScreen from "./QuestionsScreen/QuestionsScreen";
import '../assets/css/reset.css';
import '../assets/css/main.css';
import logo from '../assets/img/logo.svg';


export default function App(){
    return (
        <>
        {/**/}
        <HomeScreen img={logo}/>
        <QuestionsScreen img={logo}/>
        </>
    );
}