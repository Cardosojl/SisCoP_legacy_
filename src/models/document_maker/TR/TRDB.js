const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TR = new Schema({
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

mongoose.model('tr', TR);