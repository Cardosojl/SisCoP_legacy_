const Years = require('../src/models/document_reader/YearDB');

const createYear = async () => {
    await (new Years()).create();
};

module.exports = createYear;

