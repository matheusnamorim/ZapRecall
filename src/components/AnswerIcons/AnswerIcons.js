function AnswerIcons({type}){
    if(type === 1) return (<><ion-icon class='md hydrated style1' name="close-circle"></ion-icon></>);
    if(type === 2) return (<><ion-icon class='md hydrated style2' name="help-circle"></ion-icon></>);
    if(type === 3) return (<><ion-icon class='md hydrated style3' name="checkmark-circle"></ion-icon></>);
    return (<></>);
}

export default AnswerIcons;