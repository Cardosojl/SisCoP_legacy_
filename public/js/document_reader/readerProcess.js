import {createElements, clearContainer, createContainer, createYearSelect, setAttributes, appendElements} from '/js/builders/elementsFunctions.js';
import {request} from '/js/builders/ajax.js';


let list = document.getElementById('list');

window.addEventListener('load', () => {
    getYearValues();
})

document.addEventListener('change', (e) => {
    const element = e.target;
    if(element.id === 'year'){
        getValues();
    }
});

async function getValues(){
    try {
        let  year = document.getElementById('year');       
        const processes = await request({
            method: 'POST',
            url: `/requests/${getLocal()}/`,
            params: `year=${year.value}`
        });              
        generateProcesses(processes);        
    } catch (error) {
        console.log(error);   
    }
}

async function getYearValues(){
    try {
        const year = await request({
            method: 'POST',
            url: '/requests/allyears',
            params: ''
        });
        generateYears(year);        
    } catch (error) {
        console.log(error);        
    }
}

function getLocal(){
    const local = document.URL.split('/')[3]
    if(local === 'meusprocessos'){
        return 'myprocess';
    }
    if(local === 'processosrecebidos'){
        return 'processreceived';
    }    
}

function generateYears(values){
    const yearDiv = document.getElementById('yeardiv');
    const label = createElements('label',{}, 'Ano: ');
    const years = createYearSelect(values, 'year', 'year');
    appendElements(yearDiv, [label, years]);
}

function generateProcesses(processes){
    clearContainer(list);

    for(let i of processes){       
        const process = createElements('input', {type: 'submit', class: 'transparentbutton highlighted', value: i.title});
        const date = createElements('small', {style: 'display: block; margin-top: 5px;'}, i.date);
        const anotation = createElements('input', {class: 'button', type: 'submit', value: 'Anotação'});
        const deleteButton = createElements('input', {id: 'deletebutton',class: 'redbutton', type: 'submit', value: 'Apagar'});       
        const deleteText = createElements('p', {}, `Tem certeza que deseja apagar: <b>${i.title}</b> ?`);
        const sendDelete = createElements('input', {class: 'button', type: 'submit', value: 'Ok'});
        const cancelDelete = createElements('input', {type: 'submit', class: 'redbutton', value: 'Cancelar'});       
        const id = createElements('input', {type: 'hidden', name: 'elementid', value: i._id});
        const editButton = createElements('input', {type: 'submit', class: 'button', value: 'Editar'});
        const buttonsDiv = createElements('div',{});                
        
        appendElements(buttonsDiv, [editButton, anotation, deleteButton]);      
            
        const textDiv = createContainer('div', {}, [process, date]);
        const div1 = createContainer('div', {id: 'div1p', class: 'flexorientation--spaceb'}, [textDiv, buttonsDiv]);
        const form = createContainer('form', {id: 'form', class: 'display_none'}, [deleteText, sendDelete, cancelDelete]);
        const div2 = createContainer('div', {id: 'divButtons' ,class: 'list_iten'}, [div1, form, id]);
        
        list.appendChild(div2);
        
        document.addEventListener('click', (e) =>{
            const element = e.target;
            let  year = document.getElementById('year');      
            if(element === deleteButton){
                e.preventDefault();
                div2.setAttribute('class', 'list_iten_delete');            
                form.setAttribute('class', '');
                div1.setAttribute('class', 'display_none');
            }
            if(element === sendDelete){         
                if(document.URL.split('/')[3] === 'meusprocessos'){
                    setAttributes(form, {method: 'POST', action: `${document.URL}/${year.value}/delete/${i._id}`});
                }
                if(document.URL.split('/')[3] === 'processosrecebidos'){
                    setAttributes(form, {method: 'POST', action: `${document.URL}/${year.value}/delete/${i._id}`});
                }
            }
            if(element === cancelDelete){
                e.preventDefault();
                div2.setAttribute('class', 'list_iten');                
                form.setAttribute('class', 'display_none');
                div1.setAttribute('class', 'flexorientation--spaceb');
            }
            if(element === anotation){                
                if(document.URL.split('/')[3] === 'meusprocessos'){
                    window.location.href = `${document.URL}/${year.value}/${i._id}/anotation`;
                }
                if(document.URL.split('/')[3] === 'processosrecebidos'){
                    window.location.href = `${document.URL}/${year.value}/${i._id}/anotation`;
                }
            }
            if(element === process){                
                if(document.URL.split('/')[3] === 'meusprocessos'){
                    window.location.href = `${document.URL}/${year.value}/${i._id}`
                }
                if(document.URL.split('/')[3] === 'processosrecebidos'){
                    window.location.href = `${document.URL}/${year.value}/${i._id}`
                }            
            }
            if(element ===  editButton){  
                window.location.href = `${document.URL}/${year.value}/editprocess/${i._id}`             
                setAttributes(div2, {method: 'POST', action: `${document.URL}/${year.value}/editprocess/${i._id}`});
            }
        });
    }    
}