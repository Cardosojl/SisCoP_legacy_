import { setAttributes, createSectionsSelect, appendElements } from '/js/builders/elementsFunctions.js';
import { request } from '/js/builders/ajax.js';

window.addEventListener('load', () => {    
    getSections();    
});

document.addEventListener('click', (e) => {
    const element = e.target;

    if(element.id === 'submitedit'){
        const formEdit = document.getElementById('formedit');
        setAttributes(formEdit, {method: 'POST', action: `/${document.URL.split('/')[3]}/${document.URL.split('/')[4]}/edit/${document.URL.split('/')[6]}`})
    }
})

async function getSections(){
    try {
        const [id] = document.URL.split('/').reverse();
        const sections = await request({
            method: 'GET',
            url:'/request/sections?level=1'
        });
        const processSection = await request({
            method: 'GET',
            url: `/request/processsection?_id=${id}`
        });
        generateSections(sections, processSection);
    } catch (error) {
        console.log(error);
    }
}

function generateSections(sections, processSection){
    const sectionsSelect = createSectionsSelect(sections, processSection.origin,'origin', 'origin');
    appendElements(document.getElementById('origindiv'), [sectionsSelect]);
}
