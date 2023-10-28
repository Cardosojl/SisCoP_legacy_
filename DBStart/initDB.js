const dotenv = require('dotenv');
const year = require('./year');
const section = require('./sections');
const adm = require('./adm');
const processes = require('./process');
const processStates = require('./processState');
const analiseCritica = require('./analiseCritica');
const ca = require('./ca');
const tr = require('./tr');

dotenv.config();
const dbLink = process.env.DB_LINK;

const mongoose = require('mongoose');
mongoose.Promise =  global.Promise;
async function create() {
    await year();
    await section();
    await adm();
    await processes();
    await processStates();
    await analiseCritica();
    await ca();
    await tr();
}
mongoose.connect(dbLink).then( async () => {
    console.log('Conected to Database');
    await create();
    console.log('Collections Created');
    process.exit();
}).catch((e) => {
    console.log('Erro: ' + e);
});

