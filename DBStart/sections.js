const mongoose = require('mongoose');
require('../src/models/profiles/SectionsDB');

const entrace = mongoose.model('section');

const leve1 = ['Transporte','Recursos Humanos','Administrativo', 'Comunicações', 'Almoxarifado', 'Informática'];
const level2 = ['Fiscal', 'Ordenador de Despesas', 'Seção de Orçamentos'];
const level10 = ['ADM'];

const createSection = async () => {
    for(let section of leve1){
        await new entrace({
            name: section,
            level: 1    
        }).save();
    }
    for(let section of level2){
        await new entrace({
            name: section,
            level: 2    
        }).save();
    }
    for(let section of level10){
        await new entrace({
            name: section,
            level: 10    
        }).save();
    }
}

module.exports = createSection;

