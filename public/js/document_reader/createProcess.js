import { setAttributes, createElements } from '/js/builders/elementsFunctions.js';

window.addEventListener('load', async() => {    
    await getSections();
});

document.addEventListener('click', (e) => {
    const element = e.target;

    if(element.id === 'submitprocess'){
        const form = document.getElementById('formp');
        const year = createElements('input', {type: 'hidden', name: 'year', value: (new Date).getFullYear()});
        form.appendChild(year);
        setAttributes(form, {method: 'POST', action: '/novoprocesso/cadastro'});
    }
});