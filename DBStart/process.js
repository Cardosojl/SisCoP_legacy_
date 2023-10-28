require('../src/models/document_reader/ProcessesDB');
const mongoose = require('mongoose');

const entrace = mongoose.model('process');
const yearDB = mongoose.model('year')
const sectionDB = mongoose.model('section');
const userDB = mongoose.model('user')
const createProcess = async () => {
    const year = await yearDB.find();
    const origin = await sectionDB.findOne({ name: 'Informática' });
    const user = await userDB.findOne({ name: "ADM" });

    await new entrace({
        receiver: null,
        section_receiver: null,
        done: false,
        title: "Aquisição de Computadores",
        nup: "64005007595202307",
        category: "Licitação",
        description: "Aquisição de computadores para utilização no Administrativo",
        year: year[0].year,
        user: user._id,
        origin: origin._id,
        date: Intl.DateTimeFormat('pt-BR', { dateStyle: "full", timeStyle: "short" }).format(new Date()),
    }).save();
}

module.exports = createProcess;
