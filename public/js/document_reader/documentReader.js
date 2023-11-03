import { request } from '/js/builders/ajax.js';
import { setAttributes } from '/js/builders/elementsFunctions.js';
import generateFiles from '/js/document_reader/documentReaderComponents/generateFiles.js';
import generateTitle from '/js/document_reader/documentReaderComponents/generateTitle.js';
import upload from '/js/document_reader/documentReaderComponents/upload.js';
import generateDescription from '/js/document_reader/documentReaderComponents/generateDescription.js';
import listStates from '/js/document_reader/documentReaderComponents/listStates.js';
import sendProcess from '/js/document_reader/documentReaderComponents/sendProcess.js';
import generateOptions from '/js/document_reader/documentReaderComponents/generateOptions.js';

window.addEventListener('load', async () => {
    await getDocuments();    
});

function getLocal(){
    const local = document.URL.split('/')[3]
    if(local === 'meusprocessos'){
        return 'myprocess';
    }
    if(local === 'processosrecebidos'){
        return 'processreceived';
    }
    if(local === 'concluidos'){
        return 'processdone'
    }
}

document.addEventListener('click', (e) => {
    const element = e.target;
    const [ id, year, path ] = document.URL.split('/').reverse();
    const url = [ path, year, id ].join('/');
    const processInfo  = [ year, id ].join('/');
    const local = getLocal();
    const processTitle = document.getElementById('processtitle').innerHTML;
    const statusButton = document.getElementById('statusbutton');
    const descriptionButton = document.getElementById('descriptionbutton');
    const newStatusButton = document.getElementById('newstatusbutton');
    const sendFile = document.getElementById('sendfile');
    const sendButton =  document.getElementById('sendbutton');
    const conversor =  document.getElementById('conversor');
    const doneProcess = document.getElementById('doneprocess');
    const returnProcess = document.getElementById('returnprocess');
    const optionsForm = document.getElementById('endprocess');       

    if(element === newStatusButton){
        const newStatusForm =  document.getElementById('newstatusform');
        window.location.href = `${id}/anotation`;     
    }
    if(element === statusButton || element.parentElement === statusButton){
        e.preventDefault();
        const states = document.getElementById('states');      
        
        if(states.getAttribute('class') == 'display_none'){
            states.setAttribute('class', 'states_list');
            statusButton.innerHTML = '<img src="/img/up.png" style="width: 9px;"/>';                               
        }else{
            states.setAttribute('class', 'display_none');
            statusButton.innerHTML = '<img src="/img/down.png" style="width: 9px;"/>';                               
        }
    }
    if(element === descriptionButton || element.parentElement === descriptionButton){
        e.preventDefault();        
        const descriptions = document.getElementById('descriptions');
        if(descriptions.getAttribute('class') == 'display_none'){
            descriptions.setAttribute('class', 'description_list');
            descriptionButton.innerHTML = '<img src="/img/up.png" style="width: 9px;"/>';
        }else{
            descriptions.setAttribute('class', 'display_none');
            descriptionButton.innerHTML = '<img src="/img/down.png" style="width: 9px;"/>';
        }
    }
    if(element === sendFile){
        const uploadForm = document.getElementById('upload');
        setAttributes(uploadForm, {action: `${id}/upload/${local}`, method: 'POST', enctype: 'multipart/form-data'});
    }
    if(element === sendButton || element.parentElement === sendButton){
        window.location.href = `/mensageiro/nova/${id}`;        
    }
    if(element === conversor){        
        setAttributes(optionsForm, {method: 'POST', action: `/conversor/arquivos/${processInfo}/${processTitle}/${local}`});
    }
    if(element === doneProcess){        
        setAttributes(optionsForm, {method: 'POST', action: `/concluidos/${processInfo}/${local}/done/process`});
    }
    if(element === returnProcess){
        setAttributes(optionsForm, {method: 'POST', action: `/concluidos/${processInfo}/${local}/return/process`});
    }    
});

async function getDocuments(){
    try {
        const [id] = document.URL.split('/').reverse();        
        const process = await request({
            method: 'GET',
            url: `/request/process?_id=${id}`
        });
        if(process){
            const user = process.user || process.receiver;
            const documents = await request({
                method: 'GET',
                url: `/request/documents?process=${id}`,
            });

            const states = await request({
                method: 'GET',
                url: `/request/states?process=${id}`,
            });                      
            generateElements(documents, process, states, user);
        }                           
    } catch (error) {
        console.log(error);
    }
}

function generateElements(documents, process, states, user){
    generateTitle(process);
    generateFiles(documents, process);
    upload(process, 0);
    generateDescription(process);  
    listStates(process, states, user);
    sendProcess(process);
    generateOptions(process);
}