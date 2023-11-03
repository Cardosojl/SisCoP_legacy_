import { createElements, setAttributes, appendElements } from '/js/builders/elementsFunctions.js';

function sendProcess(process){
    const sendButton = createElements('button', {id: 'sendbutton',class: 'button'}, '<img style="width: 20px;" src="/img/email.png"/>');
    const send = document.getElementById('sendprocess');
    
    appendElements(send, [ sendButton ]);    

    if(process.done === false){
        setAttributes(sendButton, {class: 'arrow'});
    }else{
        setAttributes(sendButton, { class: 'arrow_disabled', disabled: ''});        
    }
}

export default sendProcess;