const mongoose = require('mongoose');
const bcrypt =  require('bcryptjs');
require('../src/models/profiles/UsersDB');

const entrace = mongoose.model('user');
const sectionDB = mongoose.model('section')

const createAdm = async () => {
    const section = await sectionDB.findOne({ name: 'ADM' });
    const salt = bcrypt.genSaltSync(10);
    const password = bcrypt.hashSync('123456', salt);
    const newUser = {
        name: 'ADM',
        password: password,
        pg: '',
        section: section._id,
        level: 10
    };            
    await new entrace(newUser).save();
}

module.exports = createAdm;
