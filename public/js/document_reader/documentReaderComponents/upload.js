import { createElements, createContainer, setAttributes } from '/js/builders/elementsFunctions.js';

function upload(process, index){    
    const uploadForm = document.getElementById('upload');    
    const message = document.getElementById('message');
    const fileLabel = createElements('label', {for: `file${index}`, class: 'button_file', id: 'button_file'}, 'Upload');
    const inputFile =  createElements('input', {type: 'file', id: `file${index}`, name: 'file', class: 'file', value: '', required: '', multiple: ''});
    const spanName = createElements('span', {class: 'filename', required: ''});    
    const uploadDiv = createContainer('div', {style: 'margin-top: 15px;'}, [fileLabel, inputFile, spanName]);   
    uploadForm.prepend(uploadDiv);
    
    if(process.done === false){
        const sendFile = document.createElement('input');

        inputFile.addEventListener('change', () => {
            message.innerHTML = ' '
            sendFile.setAttribute('id', 'sendfile');
            const extensionArray = ['txt', 'xlsx', 'pdf', 'docx', 'doc', 'jpg', 'jpeg', 'ods', 'zip', 'rar', 'tar', 'png', 'odt'];
            const erroMsg = 'Só é possível fazer upload de arquivos: pdf, ods, xlsx, docx, doc, jpg, jpeg, png, ods e arquivos compactados em até 60MB';
            let text
            if(inputFile.files.length > 1 && inputFile.files.length < 16){
                text = `${inputFile.files.length} arquivos selecionados`;
                spanName.textContent = text;                
                let matches = 0;
                for(let element of inputFile.files){
                    const extension = (element.name).split('.')[(element.name).split('.').length -1];
                    if(extensionArray.some( x => x === extension.toLowerCase())){
                        matches++;
                    }
                }
                if(matches === inputFile.files.length){
                    setAttributes(sendFile, {type: 'submit', class: 'button', value: 'Enviar', style: 'margin-top: -5px;'});
                    uploadDiv.appendChild(sendFile); 
                }
                else{
                    if(uploadDiv.querySelector('#sendfile') != null){                
                        uploadDiv.removeChild(sendFile);
                    } 
                    message.innerHTML = erroMsg
                }      

            }else if(inputFile.files.length === 1){
                text = inputFile.value.split("\\");
                let extension = text[2].split('.')[text[2].split('.').length -1];                
                spanName.textContent = text[2];
                if(extensionArray.some( x => x === extension.toLowerCase())){
                    setAttributes(sendFile, {type: 'submit', class: 'button', value: 'Enviar', style: 'margin-top: -5px;'});
                    uploadDiv.appendChild(sendFile);                              
                }else{
                    if(uploadDiv.querySelector('#sendfile') != null){                
                        uploadDiv.removeChild(sendFile);
                    } 
                    message.innerHTML = erroMsg 
                }               
            }else{
                text = `${inputFile.files.length} arquivos selecionados`;
                spanName.textContent = text;
                if(uploadDiv.querySelector('#sendfile') != null){                
                    uploadDiv.removeChild(sendFile);
                } 
                message.innerHTML = 'Só é possível fazer upload de 15 arquivos por vez'
            }            
        });
    }else{
        fileLabel.setAttribute('class', 'button_disable');
        fileLabel.setAttribute('disabled', '');
        inputFile.setAttribute('type', '');
    }      
}

export default upload;