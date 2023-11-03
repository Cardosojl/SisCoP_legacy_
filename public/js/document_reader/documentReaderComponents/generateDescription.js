import {createElements, createContainer, setAttributes, clearContainer, appendElements} from '/js/builders/elementsFunctions.js';

function generateDescription(process){    
    const descriptionsButtonDiv = document.getElementById('descriptionsbuttondiv');
    const smallButton = createElements('small', {}, 'Descrição');
    const descriptionButton = createElements('button', {class: 'button', id: 'descriptionbutton'}, '<img src="/img/down.png" style="width: 9px;"/>');
    const description = createElements('p', {}, process.description);
    const descriptions = document.getElementById('descriptions');
    descriptions.setAttribute('class', 'display_none')
    descriptions.appendChild(description);
    appendElements(descriptionsButtonDiv, [smallButton, descriptionButton]);    
}

export default generateDescription;