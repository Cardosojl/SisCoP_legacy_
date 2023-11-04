import { createElements } from '/js/builders/elementsFunctions.js';
import { request } from '/js/builders/ajax.js';

window.addEventListener('load', () => {
    getValue();
});

async function getValue(){
    try {
        const processId = document.getElementById('process');
        const user = await request({
            method: 'GET',
            url: '/request/whoami'
        });
        const process = await request({
            method: 'GET',
            url: `/request/process?_id=${processId.value}`
        });
        if (process.receiver == user._id || process.section_receiver == user.section) {
            generateLink(process);
        } else {
            generateLink(null);
        }
    } catch (error) {
        console.log(error);
    }
}

function generateLink(process){    
    const processmessage = document.getElementById('processmessage');
    const processNameL = document.createElement('label');
    const processNameButton = createElements('button', {class: 'transparentbutton process_link'})
    if(process !== null){
        handleProcess(process, processNameButton);
        processNameButton.innerHTML = process.title;
        processmessage.appendChild(processNameButton);        
    }else{
        const processNameH = document.getElementById('processname');
        processNameL.innerHTML = `${processNameH.value}`;
        processmessage.appendChild(processNameL);
    }
}

const handleProcess = (process, button) => document.addEventListener('click', (e) => {
    console.log(e.target)
    if (e.target == button) {
        window.location.href = `/processosrecebidos/${process.year}/${process._id}`;
    }
});
