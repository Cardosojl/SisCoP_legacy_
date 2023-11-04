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

router.get('/inbox/search/:page', isAuth, resolver( async  (req, res) => {  
    const message = new Msg(req.body, res.locals, req.params);
    const messageObj = await message.findByFilter(req.query, 15);
    res.send(JSON.stringify({messages: messageObj.messages, count: messageObj.count}));        
}));

router.get('/sent/search/:page', isAuth, resolver( async (req, res) => {
    const message = new MsgSent(req.body, res.locals, req.params);
    const messageObj = await message.findByFilter(req.query, 15);
    res.send(JSON.stringify({messages: messageObj.messages, count: messageObj.count}));           
}));

router.get('/archived/search/:page', isAuth, resolver( async (req, res) => {    
    const message = new MsgArchived(req.body, res.locals, req.params);
    const messageObj = await message.findByFilter(req.query, 15);
    res.send(JSON.stringify({messages: messageObj.messages, count: messageObj.count}));           
}));

router.get('/manager/search/:page', isAuth, resolver( async (req, res) =>{
    const process = new Processes(req.body, res.locals, req.params);
    const sections = new Sections(req.body, res.locals, req.params);
    
    if(req.query.origin !== 'Busca Geral'){        
        const sectionObjId = await sections.findOneByParam({name: req.query.origin}); 
        const search = new Object();  
        search.origin = sectionObjId._id;
        search[req.query.type] = new RegExp(`${req.query.search}`, 'i');
        const processObj = await process.aggregateStates(search);
        res.send(JSON.stringify(processObj));
    }else{              
        const search = new Object();        
        search[req.query.type] = new RegExp(`${req.query.search}`, 'i');
        const processObj = await process.aggregateStates(search);
        res.send(JSON.stringify(processObj))

    }
  }));

router.get('/whoami', isAuth, resolver( async (req, res) => {
    const user = res.locals.user;
    res.send(JSON.stringify(user));
}));

router.get('/documents', isAuth, resolver( async (req, res) => {
    const files = new Files(req.body, res.locals, req.params);
    const filesValues = await files.findByParamLight(req.query);    
    res.send(JSON.stringify(filesValues));    
}));

router.get('/years', isAuth, resolver( async (req, res) => {
    const year = new Year(req.body, res.locals, req.params);
    const allYears =  await year.findByParam(req.query);
    res.send(JSON.stringify(allYears));
}));

router.get('/sections', isAuth, resolver( async (req, res) => {
    const sections = new Sections(req.body, res.locals, req.params);
    const sectionsValues = await sections.findByParam(req.query);
    res.send(JSON.stringify(sectionsValues));    
}));

router.get('/users', isAuth, resolver( async (req, res) => {       
    const users =  new Users(req.body, res.locals, req.params);
    const usersObj = await users.findByParam({...req.query,_id: {$not: {$in: res.locals.id}}});
    res.send(JSON.stringify(usersObj));      
}))

router.get('/processsection', isAuth, resolver( async (req, res) => {
    const process = new Processes(req.body, res.locals, req.params);
    const processObj =  await process.findOneByParam(req.query);
    res.send(JSON.stringify(processObj));     
}));

router.get('/processes', isAuth, resolver( async (req, res) =>{
    const process = new Processes(req.body, res.locals, req.params);

    if (req.query.or) {
        const or = req.query.or
        delete req.query.or
        const query = (or).map((x) => JSON.parse(x)).map((y) => ({ ...req.query, ...y}));
        const processValues = await process.findByParam({ $or: query });  
        res.send(JSON.stringify(processValues));
    } else {
        const processValues = await process.findByParam(req.query);  
        res.send(JSON.stringify(processValues));
    }
}));

router.get('/process', isAuth, resolver( async (req, res) =>{
    const process = new Processes(req.body, res.locals, req.params);
    const processValues = await process.findOneByParam(req.query);  
    res.send(JSON.stringify(processValues));
}));

router.get('/states', isAuth, resolver( async (req, res) =>{
    const state =  new ProcessStates(req.body, res.locals, req.params);
    const states = await state.findByParam(req.query);     
    res.send(JSON.stringify(states));
}));

router.get('/documents', isAuth, resolver( async (req, res) => {
    const files = new Files(req.body, res.locals, req.params);
    const filesValues = await files.findByParamLight(req.query);
    res.send(JSON.stringify(filesValues));    
}));

module.exports = router;