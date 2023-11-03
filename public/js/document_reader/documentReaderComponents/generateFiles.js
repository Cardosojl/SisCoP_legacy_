import {createElements, createContainer, clearContainer, appendElements} from '/js/builders/elementsFunctions.js';

function generateFiles(documents, process){
    const list = document.getElementById('list');
    if(documents.length > 0){
        for(let i of documents){
            const file = createElements('input', {type: 'submit', class: 'transparentbutton highlighted', value: `${i.filename}${i.extension}`});
            const [editButton, deleteButton] = generateFilesButtons(process);
            const buttonsDiv = createContainer('div', {}, [editButton, deleteButton]);
            const div1 = createContainer('div', {}, []);
            const div2 = createContainer('div', {class: 'flexorientation--spaceb'}, [file, buttonsDiv]);
            const div3 = createContainer('div', {}, []);
            const form = createContainer('form', {class: 'list_iten'}, [div1, div2, div3]);
            list.appendChild(form);
            generateListClickListener(editButton, deleteButton, file, div1, div2, div3, form, i);
        }
    }else{
        const text = createElements('p', {}, 'Não existem documentos dentro deste processo.');
        list.appendChild(text);
    }
}

function generateFilesButtons(process){    
    if(process.done === false){
        const editButton = createElements('input', {type: 'submit', class: 'button', value: 'Renomear'});
        const deleteButton = createElements('input', {type: 'submit', class: 'redbutton', value: 'Apagar'});
        return [editButton, deleteButton];
    }else{
        const editButton = createElements('input', {type: 'submit', class: 'button_disable', value: 'Renomear', disabled: ''});
        const deleteButton = createElements('input', {type: 'submit', class: 'button_disable', value: 'Apagar', disabled: ''});
        return [editButton, deleteButton];
    }
}

function generateListClickListener(editButton, deleteButton, file, div1, div2, div3, form, elements){
    document.addEventListener('click', (e) => {
        const element = e.target;
        const url = `/${document.URL.split('/')[3]}/${document.URL.split('/')[4]}/${document.URL.split('/')[5]}`;        

        if(element === editButton){
            e.preventDefault();                
            const editFieldMessage =  document.createElement('p');
            const editField = createElements('input', {type: 'text', name: 'ename', class: 'mediumtext', value: (elements.filename)});
            const sendEdit = createElements('input', {type: 'submit', class: 'button', value: 'Ok'});
            const cancelEdit = createElements('input', {type: 'submit', class: 'redbutton', value: 'Cancelar'});
            appendElements(div1, [editFieldMessage, editField, sendEdit, cancelEdit]);
            div2.setAttribute('class', 'display_none');

            sendEdit.addEventListener('click', (e) =>{                   
                if(editField.value.includes('\\') || editField.value.includes('/') || editField.value.includes('_') || editField.value.includes('.') || editField.value == ''){
                    e.preventDefault();
                    editFieldMessage.textContent = 'Este campo deve ser preenchido e não aceita os caracteres: "_" , ".", "/", "\\"';
                }else{
                form.setAttribute('method', 'POST');
                form.setAttribute('action', `${url}/edit/${elements._id}`);
                form.setAttribute('target', '');
                }                   
            });
            
            cancelEdit.addEventListener('click', (e) =>{
                e.preventDefault();
                editFieldMessage.textContent = '';              
                clearContainer(div1);
                div2.setAttribute('class', 'flexorientation--spaceb');
            });               
        }
        if(element === deleteButton){
            e.preventDefault();
            form.setAttribute('class', 'list_iten_delete');
            const deleteText = createElements('p', {}, `Tem certeza que deseja apagar: <b>${elements.filename}</b>?`);
            const sendDelete = createElements('input', {type: 'submit', class:'button', value: 'Ok'});
            const cancelDelete = createElements('input', {type: 'submit', class: 'redbutton', value: 'Cancelar'});
            appendElements(div3, [deleteText, sendDelete, cancelDelete]);
            div2.setAttribute('class', 'display_none');

            sendDelete.addEventListener('click', () =>{
                form.setAttribute('method', 'POST');
                form.setAttribute('action', `${url}/delete/${elements._id}`);
                form.setAttribute('target', '');
            });

            cancelDelete.addEventListener('click', (e) =>{
                e.preventDefault();               
                form.setAttribute('class', 'list_iten');
                clearContainer(div3);
                div2.setAttribute('class', 'flexorientation--spaceb');                    
            });
        }
        if(element === file){
            form.setAttribute('target', '_blank');
            form.setAttribute('method', 'POST');
            form.setAttribute('action', `${url}/${elements._id}`);
        }        
    });
}

export default generateFiles;