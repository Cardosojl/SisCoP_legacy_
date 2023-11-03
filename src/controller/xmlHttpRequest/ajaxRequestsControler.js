const express = require('express');
const {isAuth} =require('../../../config/isAuth');
const resolver =  require('../../../config/errorHandler');
const Processes =  require('../../models/document_reader/ProcessesDB');
const ProcessStates = require('../../models/document_reader/ProcessesStatesDB');
const Files =  require('../../models/document_reader/FilesDB');
const Sections = require('../../models/profiles/SectionsDB');
const Year =  require('../../models/document_reader/YearDB');
const Users = require('../../models/profiles/UsersDB');
const Msg = require('../../models/messenger/MessagesDB');
const MsgSent = require('../../models/messenger/MessageSentsDB');
const MsgArchived = require('../../models/messenger/messagesArchivedDB');

const router = express.Router();

router.get('/sections', isAuth, resolver( async (req, res) => {
    const sections = new Sections(req.body, res.locals, req.params);
    const sectionsValues = await sections.findByParam(req.query);
    res.send(JSON.stringify(sectionsValues));    
}));

router.get('/processsection', isAuth, resolver( async (req, res) => {
    const process = new Processes(req.body, res.locals, req.params);
    const processObj =  await process.findOneByParam(req.query);
    res.send(JSON.stringify(processObj));     
}));

router.get('/process', isAuth, resolver( async(req, res) =>{
    const process = new Processes(req.body, res.locals, req.params);
    const processValues = await process.findOneByParam(req.query);  
    res.send(JSON.stringify(processValues));
}));

router.get('/states', isAuth, resolver( async(req, res) =>{
    const state =  new ProcessStates(req.body, res.locals, req.params);
    const states = await state.findByParam(req.query);     
    res.send(JSON.stringify(states));
}));

router.get('/documents', isAuth, resolver( async(req, res) => {
    const files = new Files(req.body, res.locals, req.params);
    const filesValues = await files.findByParamLight(req.query);
    res.send(JSON.stringify(filesValues));    
}));

module.exports = router;