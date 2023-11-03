import {createElements, appendElements} from '/js/builders/elementsFunctions.js';

function generateTitle(process){
    const divTitle = document.getElementById('processinfo');
    const Title = createElements('h2',{id: 'processtitle'}, process.title);
    const Date = createElements('small', {id: 'processdate'}, process.date);
    appendElements(divTitle, [Title, Date]);
}

export default generateTitle;