import {request} from '/js/builders/ajax.js';
import {createElements, setAttributes, appendElements} from '/js/builders/elementsFunctions.js';

window.addEventListener('load', async () => {
    const process = await getDocuments();
    generateForm(process);
    handlerCLick(process);
});

const handlerCLick = (process) => document.addEventListener('click', (e) => {
    const element = e.target;
    const sendButton = document.getElementById('send');
    const form = document.getElementById('form');
    
    if (element == sendButton) {
        console.log('aqui');
        const id = createElements('input', { type: 'hidden', name: 'id', value: process._id });
        appendElements(form, [id]);
        setAttributes(form, { action:  `${document.URL}/create`, method: 'POST'});                
    }

});

async function getDocuments(){
    const [, id] = document.URL.split('/').reverse();
    try {             
        const process = await request({
            method: 'GET',
            url: `/request/process?_id=${id}`,
        });
        if (process) {             
            return process;
        }
        return null                        
    } catch (error) {
        console.log(error);
    }
}

function generateForm(process) {
    const title = document.getElementById('title');
    title.innerHTML = process.title;
}