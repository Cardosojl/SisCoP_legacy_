const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AnaliseCritica =  new Schema({
    _id:{
        type: String,
        required: true
    },
    text:{
        type: String
    },
    object:{
        type: Object
    }
});

const AnaliseCriticaModel = mongoose.model('analisecritica', AnaliseCritica);

class ACDB {
    
    static async findMany(idValues){
        try {
            const elements = []
            for(let value of idValues){                
                const dbElement = await AnaliseCriticaModel.findOne({_id: value});
                if(dbElement){                    
                    elements.push(dbElement);
                }
                
            }
            return elements;
        } catch (error) {
            throw new Error(error)            
        }
    }
}

module.exports = ACDB;

