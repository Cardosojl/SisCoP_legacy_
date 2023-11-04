const express =  require('express');
const {uploadAsync, setHeader} = require('../../models/document_reader/UploadsReader');
const {isAuth} =require('../../../config/isAuth');
const resolver =  require('../../../config/errorHandler');
const Processes = require('../../models/document_reader/ProcessesDB');
const ProcessStates = require('../../models/document_reader/ProcessesStatesDB');
const Files = require('../../models/document_reader/FilesDB');

const router = express.Router();

router.get('/', isAuth, resolver((req, res) => {      
    res.render('document_reader/processInTransfer');
}));

router.post('/:year/delete/:id', isAuth, resolver( async(req, res) => {
    const process = new Processes(req.body, res.locals, req.params);    
    const states = new ProcessStates(req.body, res.locals, req.params);
    const files = new Files(req.body, res.locals, req.params);
        await states.delete();
        await process.deleteOne();
        await files.delete();  
        res.redirect(`/processosrecebidos`);    
}));

router.get('/:year/editprocess/:id', isAuth, resolver( async(req, res) => {
    const userId = (res.locals.user._id ).toString();
    const userSection = (res.locals.sectionID).toString();
    const process = new Processes(req.body, res.locals, req.params);
    const processObj = await process.findOne();
    const processUserId = processObj.user ? (processObj.user).toString() : null;
    const processReceiverId = processObj.receiver ? (processObj.receiver).toString() : null;
    const processReceivedSection = processObj.section_receiver ? (processObj.section_receiver).toString(): null;

    if (userId == processUserId || userId == processReceiverId || userSection == processReceivedSection) {
        processObj.nup = processObj.nup.replace(/([0-9]{5})([0-9]{6})([0-9]{4})([0-9]{2})/, '$1.$2/$3-$4');
        res.render('document_reader/editprocess', { process: processObj });
    } else {
        throw { code: 203, message: 'Operação não autorizada' };
    }
}));

router.post('/:year/edit/:id', isAuth, resolver( async(req, res) =>{ 
    const process = new Processes(req.body, res.locals, req.params);    
    const update = await process.updateOne();
    if(update.errors.length > 0){
        let processObj = await process.findOne();
        processObj.nup = processObj.nup.replace(/([0-9]{5})([0-9]{6})([0-9]{4})([0-9]{2})/, '$1.$2/$3-$4');      
        res.render('document_reader/editprocess', {process: processObj, errors: update.errors});
    }else{        
        res.redirect(`/processosrecebidos`);
    }
}));

router.get('/:year/:id', isAuth, resolver( async (req, res) => {    
    const userId = (res.locals.user._id ).toString();
    const userSection = (res.locals.sectionID).toString();
    const process = new Processes(req.body, res.locals, req.params);
    const processObj = await process.findOne();
    const processUserId = processObj.user ? (processObj.user).toString() : null;
    const processReceiverId = processObj.receiver ? (processObj.receiver).toString() : null;
    const processReceivedSection = processObj.section_receiver ? (processObj.section_receiver).toString(): null;

    if (userId == processUserId || userId == processReceiverId || userSection == processReceivedSection) {
        const message = null; 
        if (req.session.error) {
            message = req.session.error;
            delete req.session.error
        }
        res.render('document_reader/files', { error: message });
    } else {
        throw { code: 203, message: 'Operação não autorizada' };
    } 
}));

router.post('/:year/:id/edit/:fileid', isAuth, resolver( async(req, res) => { 
    const file = new Files(req.body, res.locals, req.params);
    await file.updateOne();    
    res.redirect(`/processosrecebidos/${req.params.year}/${req.params.id}`);   
}));

router.post('/:year/:id/delete/:fileid', isAuth, resolver( async(req, res) => {     
    const file = new Files(req.body, res.locals, req.params);
    await file.deleteOne();
    res.redirect(`/processosrecebidos/${req.params.year}/${req.params.id}`);    
}));

router.get('/:year/:id/:fileid', isAuth, resolver( async(req, res) =>{ 
    const file = new Files(req.body, res.locals, req.params);
    const doc = await file.findOneByParam({_id: req.params.fileid});       
    
    res.set('Content-Type', setHeader(doc.extension));
    res.set('Content-Disposition', `filename="${doc.filename}${doc.extension}"`);
    res.end(Buffer.from(doc.file));         
}));

router.post('/:year/:id/upload/:local/', isAuth, resolver( async(req,res, next) =>{
    const uploads = await uploadAsync(req, res);
    const files = new Files(req.body, res.locals, req.params);
    for(let file of Object.values(uploads)[0]){               
        await files.createFileProcess(file.buffer, file.originalname, req.params.id);        
    }
    res.redirect(`/processosrecebidos/${req.params.year}/${req.params.id}`);                                           
}));

router.get('/:year/:id/anotation', isAuth, resolver( async (req,res) => {                                         
    const userId = (res.locals.user._id ).toString();
    const userSection = (res.locals.sectionID).toString();
    const process = new Processes(req.body, res.locals, req.params);
    const processObj = await process.findOne();
    const processUserId = processObj.user ? (processObj.user).toString() : null;
    const processReceiverId = processObj.receiver ? (processObj.receiver).toString() : null;
    const processReceivedSection = processObj.section_receiver ? (processObj.section_receiver).toString(): null;

    if (userId == processUserId || userId == processReceiverId || userSection == processReceivedSection) {
        res.render('document_reader/anotation');
    } else {
        throw { code: 203, message: 'Operação não autorizada' };
    }               
}));

router.post('/:year/:id/anotation/create', isAuth, resolver( async(req,res) => {
    const state =  new ProcessStates(req.body, res.locals, req.params);
    await state.create();
    res.redirect(`/processosrecebidos/${req.params.year}/${req.params.id}`);          
}));

router.post('/:year/:id/anotation/:title/delete', isAuth, resolver( async(req,res) => {
    const state =  new ProcessStates(req.body, res.locals, req.params);
    await state.deleteOne();
    res.redirect(`/processosrecebidos/${req.params.year}/${req.params.id}`);    
}));

module.exports= router;