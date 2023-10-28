const mongoose = require('mongoose');
require('../src/models/document_reader/ProcessesStatesDB');

const entrace = mongoose.model('processstate');
const processDB = mongoose.model('process');
const userDB = mongoose.model('user');

const createState = async () => {
    const process = await processDB.findOne({ title: "Aquisição de Computadores" });
    const user = await userDB.findOne({ name: "ADM" });

    await new entrace({
        process: process._id,
        user: user._id,
        state: "Processo Cadastrado",
        anotation: '',
        date: Intl.DateTimeFormat('pt-BR', { dateStyle: "full", timeStyle: "short" }).format(new Date())
    }).save();
}

module.exports = createState;