import { createElements, createContainer, setAttributes, appendElements } from '/js/builders/elementsFunctions.js';

function listStates(process, processStates, user){
    const buttonDiv =  document.getElementById('statusbuttondiv');
    const states = document.getElementById('states');
    const smallButton = createElements('small', {}, 'Status');
    const statusButton = createElements('button', {class: 'button', id: 'statusbutton'}, '<img src="/img/down.png" style="width: 9px;"/>');
    const newStatusForm = createElements('div', {id: 'newstatusform',style: 'margin-top: 34px;'});
    const newStatus = createElements('input', {type: 'submit', class: 'button', value: 'Novo Status', id: 'newstatusbutton'});
    const elementID = createElements('input', {type: 'hidden', name: 'elementid', value: process._id});
    
    appendElements(buttonDiv, [smallButton, statusButton]);
    
    if( process.done === false){        
        appendElements(newStatusForm, [newStatus, elementID]);
    }
    generateStatesBlocks(process, processStates, states, user);
    states.setAttribute('class', 'display_none');
    states.appendChild(newStatusForm)
}

function generateStatesBlocks(process, processStates, states, user){
    for(let i of processStates){
        const label1 = createElements('label', {}, 'Status:');
        const label2 = createElements('label', {}, 'Obs:');
        const stateId = createElements('input', {type: 'hidden', name: 'elementid', value: i._id});
        const deleteState = createElements('input', {type: 'submit', class: 'delete_status', value: 'Apagar'});
        const prgh1 = createElements('p', {style: 'font-size: 0.8vw'}, i.state);
        const prgh2 = createElements('p', {style: 'font-size: 0.7vw; font-style: italic;'}, 'Sem observações');

        if(i.anotation){
            setAttributes(prgh2, {style: 'font-size: 0.8vw;'})
            prgh2.innerHTML = i.anotation            
        }

        const date = createElements('small', {},'');
        if(i.user){
            date.innerHTML = `<b>De:</b> ${i.user.pg} ${i.user.name} - ${i.date}`
        }else{
            date.innerHTML = `<b>De:</b> Sistema - ${i.date}`
        }
        const div1 = createContainer('div', {class: 'flexorientation--start'}, [label1, prgh1]);
        const div2 = createContainer('div', {class: 'flexorientation--start'}, [label2, prgh2]);
        const div3 = createContainer('div', {}, [date]);
        let block;
        
        if(i.state == 'Processo Cadastrado'){
            block = createContainer('form', {class: 'status_content display-column-spaceb create_state', name: 'statusblock', 
            }, [div1, div2, div3, stateId]);
        }
        else if(i.state == 'Coleta de Orçamentos'){
            block = createContainer('form', {class: 'status_content display-column-spaceb getbudgets_state', name: 'statusblock', 
           }, [div1, div2, div3, stateId]);
        }
        else if(i.state == 'Em Montagem'){
            block = createContainer('form', {class: 'status_content display-column-spaceb inprocess_state', name: 'statusblock',
            }, [div1, div2, div3, stateId]);
        }
        else if(i.state == 'Montagem Finalizada'){
            block = createContainer('form', {class: 'status_content display-column-spaceb makedone_state', name: 'statusblock',
            }, [div1, div2, div3, stateId]);
        }
        else if(i.state == 'Em Transferência'){
            block = createContainer('form', {class: 'status_content display-column-spaceb intransfer_state', name: 'statusblock',
        }, [div1, div2, div3, stateId]);
        }
        else if(i.state == 'Em Análise'){
            block = createContainer('form', {class: 'status_content display-column-spaceb analysis_state', name: 'statusblock',
            }, [div1, div2, div3, stateId]);
        }
        else if(i.state == 'Outro'){
            block = createContainer('form', {class: 'status_content display-column-spaceb other_state', name: 'statusblock',
            }, [div1, div2, div3, stateId]);
        }
        else if(i.state == 'Retificando Processo'){
            block = createContainer('form', {class: 'status_content display-column-spaceb rectifying_state', name: 'statusblock',
            }, [div1, div2, div3, stateId]);
        }
        else if(i.state == 'Processo Concluído'){
            block = createContainer('form', {class: 'status_content display-column-spaceb processdone_state', name: 'statusblock',
            }, [div1, div2, div3, stateId]);
        }else{
            block = createContainer('form', {class: 'status_content display-column-spaceb processdone_state', name: 'statusblock',
            }, [div1, div2, div3, stateId]);        
        }
        

        if(i.user){
            if(process.done === false && user === i.user._id){
                block.appendChild(deleteState);
            }
        }        
        states.appendChild(block);
        generateStatesClickListener(deleteState, block);
    }
}

function generateStatesClickListener(deleteState, block){
    const url = `/${document.URL.split('/')[3]}/${document.URL.split('/')[4]}/${document.URL.split('/')[5]}`;
    const processTitle = document.getElementById('processtitle').innerHTML;

    deleteState.addEventListener('click', () => {
        block.setAttribute('method', 'POST');
        block.setAttribute('action', `${url}/anotation/${processTitle}/delete`);     
    });
}

export default listStates;