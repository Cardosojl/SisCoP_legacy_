import { createElements, createContainer } from '/js/builders/elementsFunctions.js';

function generateOptions(process){
    const section = document.getElementById('idusersection');    
    const processOptions = document.getElementById('processoptions');       
    
    if(section.innerHTML === 'Pregoeiro'){         
        if(process.done === true){
            const returnProcess = createElements('input', {type: 'submit', id: 'returnprocess', class: 'redbutton', value: 'Retificar Processo'})
            const processId = createElements('input', {type: 'hidden', name: 'process', value: process._id});
            const form = createContainer('form', {id: 'endprocess', class: 'bar_color flexorientation--end'}, [returnProcess, processId]);
            processOptions.appendChild(form);
            return 
        }else{
            const doneProcess = createElements('input', {type: 'submit', id: 'doneprocess', class: 'button', value: 'Concluir Processo'});
            const processId = createElements('input', {type: 'hidden', name: 'process', value: process._id});
            const form = createContainer('form', {id: 'endprocess', class: 'bar_color flexorientation--end'}, [doneProcess, processId]);
            processOptions.appendChild(form);
            return
        }
    }    
}

export default generateOptions;